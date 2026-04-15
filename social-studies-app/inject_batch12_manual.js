const fs = require('fs');
const path = require('path');

async function injectBatch12() {
    try {
        const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
        const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

        const images = [
            "geo_gw_3_51_crop_matching_1773840825796.png",
            "geo_gw_3_52_california_1773840839744.png",
            "geo_gw_3_53_cusco_1773840856120.png",
            "geo_gw_3_54_amazon_river_1773840869899.png",
            "geo_gw_3_55_portuguese_language_1773840885259.png"
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
            q: "アメリカ合衆国の中西部などで行われている、各地域の自然環境に適した農作物を栽培する農業を何というか？",
            choices: ["適地適作", "二毛作", "焼畑農業", "プランテーション農業"],
            a: "適地適作",
            comment: "広大な土地と大型機械を利用し、合理的に農業を行っています。",
            answerImg: "assets/images/geography/${images[0]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "シリコンバレーなどでIT（情報技術）産業が発展している、アメリカ合衆国の西海岸の州は？",
            choices: ["カリフォルニア州", "テキサス州", "ニューヨーク州", "フロリダ州"],
            a: "カリフォルニア州",
            comment: "サンフランシスコ郊外のシリコンバレーには、多くのIT関連企業が集まっています。",
            answerImg: "assets/images/geography/${images[1]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アンデス山脈の高い所に位置し、かつてインカ帝国の首都であった都市は？",
            choices: ["クスコ", "マチュピチュ", "リマ", "ボゴタ"],
            a: "クスコ",
            comment: "高度な石造建築技術を用いた遺跡が多く残っています。",
            answerImg: "assets/images/geography/${images[2]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "南アメリカ大陸の熱帯地域に広がる、広大な熱帯雨林やそこを流れる世界最大流域面積の川は？",
            choices: ["アマゾン川", "ミシシッピ川", "ナイル川", "コンゴ川"],
            a: "アマゾン川",
            comment: "流域には世界最大の熱帯雨林（セルバ）が広がっています。",
            answerImg: "assets/images/geography/${images[3]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ブラジルの公用語は何か？",
            choices: ["ポルトガル語", "スペイン語", "英語", "フランス語"],
            a: "ポルトガル語",
            comment: "南アメリカではブラジル以外の多くの国でスペイン語が話されていますが、ブラジルはポルトガル語です。",
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
            // 既に「適地適作」などが含まれていなければ追加
            const insideArray = currentData.substring(startIndex, bracketEndIndex);
            if (!insideArray.includes("各地域の自然環境に適した農作物を栽培する農業")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 12 questions!");
            } else {
                console.log("Batch 12 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectBatch12().catch(console.error);
