const fs = require('fs');
const path = require('path');

async function injectBatch19() {
    try {
        const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
        const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

        const images = [
            "geo_gw_3_86_highland_climate_1773842363763.png",
            "geo_gw_3_87_mediterranean_climate_1773842377436.png",
            "geo_gw_3_88_monsoon_1773842396686.png",
            "geo_gw_3_89_time_difference_9h_1773842412013.png",
            "geo_gw_3_90_time_difference_1h_1773842428372.png"
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
            q: "高度が高くなるにつれて気温が下がることを利用した、一年中春のような気候になるアンデス山脈などで見られる気候を何というか？",
            choices: ["高山気候", "高地気候", "熱帯", "乾燥帯"],
            a: "高山気候",
            comment: "標高が高いため、赤道付近でも涼しく過ごしやすい気候になっています。",
            answerImg: "assets/images/geography/${images[0]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "夏は雨が少なく乾燥し、冬に雨が降る温帯の気候（イタリアなど地中海沿岸に見られる）を何というか？",
            choices: ["地中海性気候", "西岸海洋性気候", "温暖湿潤気候", "熱帯雨林気候"],
            a: "地中海性気候",
            comment: "夏の乾燥に強いオリーブやぶどうなどの栽培が盛んに行われています。",
            answerImg: "assets/images/geography/${images[1]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本などの東アジア〜南アジアにかけて吹く、季節によって風向きが変わる風（モンスーン）を日本語で何というか？",
            choices: ["季節風", "貿易風", "偏西風", "海陸風"],
            a: "季節風",
            comment: "夏は海から、冬は大陸から吹き、地域の気候や農業に大きな影響を与えます。",
            answerImg: "assets/images/geography/${images[2]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "イギリスのロンドンと日本の明石市（東経135度）の時差は何時間か？",
            choices: ["9時間", "12時間", "15時間", "24時間"],
            a: "9時間",
            comment: "東経135度 ÷ 15度 ＝ 9時間 となります。日本の方がロンドンより9時間時間が進んでいます。",
            answerImg: "assets/images/geography/${images[3]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "世界の標準時において、経度が15度違うと時差は何時間生じるか？",
            choices: ["1時間", "2時間", "10時間", "15時間"],
            a: "1時間",
            comment: "地球は1日（24時間）で1周（360度）自転するため、360 ÷ 24 ＝ 15度 となります。",
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
            if (!insideArray.includes("高度が高くなるにつれて気温が下がることを利用した")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 19 questions!");
            } else {
                console.log("Batch 19 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectBatch19().catch(console.error);
