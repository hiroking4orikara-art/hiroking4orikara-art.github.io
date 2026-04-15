const fs = require('fs');

async function safeReAdd() {
    try {
        console.log("Reading backup data...");
        // 以前の解析で true_gw3.json に純正の地理問題が57問あることがわかった
        if (!fs.existsSync('true_gw3.json')) {
            throw new Error("true_gw3.json not found!");
        }
        
        const backupQuestions = JSON.parse(fs.readFileSync('true_gw3.json', 'utf8'));

        console.log("Selecting the 5 targeted questions for Batch 10...");
        const targetQueries = [
            "北アメリカ大陸の西岸に沿って連なる、険しい山脈は？",
            "北アメリカ大陸の東部に位置する、比較的なだらかな山脈は？",
            "アメリカ合衆国の中央部を南へ流れ、メキシコ湾に注ぐ大河は？",
            "アメリカ合衆国とカナダの国境付近にある、５つの湖の総称は？",
            "アラスカを除くアメリカ合衆国の国土の中央を通る、経度約100度の経線は？"
        ];
        
        const images = [
            "assets/images/geography/geo_gw_3_41_rocky_mountains_1773839206005.png",
            "assets/images/geography/geo_gw_3_42_appalachian_mountains_1773839221419.png",
            "assets/images/geography/geo_gw_3_43_mississippi_river_1773839235841.png",
            "assets/images/geography/geo_gw_3_44_great_lakes_1773839251026.png",
            "assets/images/geography/geo_gw_3_45_100th_meridian_west_1773839266672.png"
        ];

        let questionsToAdd = [];
        
        for (let i = 0; i < targetQueries.length; i++) {
            let found = backupQuestions.find(q => q.q && q.q.includes(targetQueries[i]));
            if (found) {
                // 画像プロパティを付与
                found.answerImg = images[i];
                found.imgCaption = "※画像はイメージです";
                questionsToAdd.push(found);
            }
        }

        console.log(`Found ${questionsToAdd.length} missing questions to add.`);
        
        if (questionsToAdd.length === 0) {
            console.log("Could not find the target questions in the backup. Exiting safely.");
            return;
        }

        console.log("Preparing to inject into quiz_data.js safely...");
        let currentData = fs.readFileSync('quiz_data.js', 'utf8');

        // フォーマット文字列を作成 (JSON.stringifyだと関数などが消えるため今回は安全)
        // もしquiz_data.jsがeval系ならオブジェクトを文字列化
        let injectionString = "";
        for (const q of questionsToAdd) {
            injectionString += `        {\n`;
            injectionString += `            q: "${q.q}",\n`;
            if (q.img) injectionString += `            img: "${q.img}",\n`;
            injectionString += `            choices: ${JSON.stringify(q.choices)},\n`;
            injectionString += `            a: "${q.a}",\n`;
            injectionString += `            comment: "${q.comment || ''}",\n`;
            injectionString += `            answerImg: "${q.answerImg}",\n`;
            injectionString += `            imgCaption: "${q.imgCaption}"\n`;
            injectionString += `        },\n`;
        }

        // gw_3 の配列の先頭 "gw_3": [ の直後に挿入する
        const targetRegex = /("gw_3"\s*:\s*\[\s*\n?)/;
        if (targetRegex.test(currentData)) {
            // もうすでに挿入されていないかチェック（二重追加防止）
            if (!currentData.includes(questionsToAdd[0].q)) {
                currentData = currentData.replace(targetRegex, `$1${injectionString}`);
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully injected the 5 questions into quiz_data.js");
            } else {
                console.log("The questions seem to already exist in quiz_data.js. Skipping injection.");
            }
        } else {
            console.log('Could not find the anchor "gw_3": [ in quiz_data.js. File might be severely corrupted.');
        }

    } catch (e) {
        console.error("An error occurred during safe injection:", e);
    }
}

safeReAdd().catch(console.error);
