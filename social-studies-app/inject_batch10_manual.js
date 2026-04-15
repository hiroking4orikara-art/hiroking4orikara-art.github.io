const fs = require('fs');

async function injectManually() {
    try {
        let currentData = fs.readFileSync('quiz_data.js', 'utf8');

        // 生成したクイズデータ
        const newQuestions = `
        ,{
            q: "北アメリカ大陸の西岸に沿って連なる、険しい山脈は？",
            choices: ["ロッキー山脈", "アンデス山脈", "アパラチア山脈", "アルプス山脈"],
            a: "ロッキー山脈",
            comment: "標高が高く険しい山脈で、環太平洋造山帯の一部です。",
            answerImg: "assets/images/geography/geo_gw_3_41_rocky_mountains_1773839206005.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "北アメリカ大陸の東部に位置する、比較的なだらかな山脈は？",
            choices: ["アパラチア山脈", "ロッキー山脈", "ヒマラヤ山脈", "ウラル山脈"],
            a: "アパラチア山脈",
            comment: "古くからあるため浸食が進み、なだらかな山脈になっています。石炭が豊富です。",
            answerImg: "assets/images/geography/geo_gw_3_42_appalachian_mountains_1773839221419.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アメリカ合衆国の中央部を南へ流れ、メキシコ湾に注ぐ大河は？",
            choices: ["ミシシッピ川", "アマゾン川", "ナイル川", "コロラド川"],
            a: "ミシシッピ川",
            comment: "北アメリカで最も長い川の一つで、流域では農業が盛んです。",
            answerImg: "assets/images/geography/geo_gw_3_43_mississippi_river_1773839235841.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アメリカ合衆国とカナダの国境付近にある、５つの湖の総称は？",
            choices: ["五大湖", "バイカル湖", "ビクトリア湖", "カスピ海"],
            a: "五大湖",
            comment: "スペリオル湖、ミシガン湖、ヒューロン湖、エリー湖、オンタリオ湖の5つです。周辺は工業が発達しています。",
            answerImg: "assets/images/geography/geo_gw_3_44_great_lakes_1773839251026.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アラスカを除くアメリカ合衆国の国土の中央を通る、経度約100度の経線は？",
            choices: ["西経100度", "東経100度", "本初子午線", "赤道"],
            a: "西経100度",
            comment: "この経線を境に、東側は降水量が多く、西側は乾燥した気候になっています。",
            answerImg: "assets/images/geography/geo_gw_3_45_100th_meridian_west_1773839266672.png",
            imgCaption: "※画像はイメージです"
        }`;

        // "gw_3": [ の配列の末尾（直近の "]"）を探して、手前にカンマ付きで挿入する
        // 現在 gw_3 には 1問 しか入っていないので、"gw_3": [ ... ] の構造を探す
        const gw3StartMatch = currentData.match(/"gw_3"\s*:\s*\[/);
        if (!gw3StartMatch) {
            console.log('Could not find "gw_3": [');
            return;
        }
        
        const startIndex = gw3StartMatch.index;
        const bracketEndIndex = currentData.indexOf(']', startIndex);
        
        if (bracketEndIndex !== -1) {
            // 既に西経100度 が含まれていなければ追加
            const insideArray = currentData.substring(startIndex, bracketEndIndex);
            if (!insideArray.includes("西経100度")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                // 挿入
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 10 questions!");
            } else {
                console.log("Batch 10 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectManually().catch(console.error);
