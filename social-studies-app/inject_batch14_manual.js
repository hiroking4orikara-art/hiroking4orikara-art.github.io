const fs = require('fs');
const path = require('path');

async function injectBatch14() {
    try {
        const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
        const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

        const images = [
            "geo_gw_3_61_jerusalem_1773841259525.png",
            "geo_gw_3_62_oasis_1773841273887.png",
            "geo_gw_3_63_oil_1773841288403.png",
            "geo_gw_3_64_islam_1773841304055.png",
            "geo_gw_3_65_mosque_1773841318031.png"
        ];

        // 画像のコピー
        for (const img of images) {
            const srcPath = path.join(ARTIFACT_DIR, img);
            const destPath = path.join(TARGET_DIR, img);
            if (fs.existsSync(srcPath)) {
                fs.copyFileSync(srcPath, destPath);
                console.log("Copied " + img);
            } else {
                console.warn("Generated image not found in artifact dir: " + srcPath);
            }
        }

        let currentData = fs.readFileSync('quiz_data.js', 'utf8');

        // 生成したクイズデータ
        const newQuestions = `
        ,{
            q: "キリスト教、イスラム教、ユダヤ教の３つの宗教の聖地となっている都市は？",
            choices: ["エルサレム", "メッカ", "ローマ", "イスタンブール"],
            a: "エルサレム",
            comment: "地中海東岸にあり、長年にわたり宗教的な対立の場にもなっています。",
            answerImg: "assets/images/geography/${images[0]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "降水量が少なく乾燥した西アジアや北アフリカの地域で、水が得られる場所を何というか？",
            choices: ["オアシス", "ワジ", "サバンナ", "ステップ"],
            a: "オアシス",
            comment: "人々はオアシスの周辺に集まり、農業を行ったり集落を作ったりしています。",
            answerImg: "assets/images/geography/${images[1]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ペルシャ湾沿岸地域で豊富に産出され、世界中へ輸出されているエネルギー資源は？",
            choices: ["石油（原油）", "石炭", "天然ガス", "ウラン"],
            a: "石油（原油）",
            comment: "サウジアラビアやアラブ首長国連邦などで豊富に産出されます。",
            answerImg: "assets/images/geography/${images[2]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "西アジアや北アフリカで信仰されている宗教の大部分を占めるのは？",
            choices: ["イスラム教", "キリスト教", "ヒンドゥー教", "仏教"],
            a: "イスラム教",
            comment: "豚肉を食べない、断食（ラマダン）を行うなどの戒律があります。",
            answerImg: "assets/images/geography/${images[3]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アラビア半島などで見られる、ドーム型の屋根や塔（ミナレット）を持つイスラム教の礼拝堂を何というか？",
            choices: ["モスク", "シナゴーグ", "教会", "寺院"],
            a: "モスク",
            comment: "イスラム教徒（ムスリム）が日に5回の礼拝を行う神聖な場所です。",
            answerImg: "assets/images/geography/${images[4]}",
            imgCaption: "※画像はイメージです"
        }`;

        // "gw_3": [ の配列の末尾を探して、手前に挿入
        const gw3StartMatch = currentData.match(/"gw_3"\s*:\s*\[/);
        if (!gw3StartMatch) {
            console.log('Could not find "gw_3": [');
            return;
        }
        
        const startIndex = gw3StartMatch.index;
        const bracketEndIndex = currentData.indexOf(']', startIndex);
        
        if (bracketEndIndex !== -1) {
            // 既に含まれていなければ追加
            const insideArray = currentData.substring(startIndex, bracketEndIndex);
            if (!insideArray.includes("３つの宗教の聖地となっている都市は？")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 14 questions!");
            } else {
                console.log("Batch 14 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectBatch14().catch(console.error);
