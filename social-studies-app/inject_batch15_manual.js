const fs = require('fs');
const path = require('path');

async function injectBatch15() {
    try {
        const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
        const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

        const images = [
            "geo_gw_3_66_straight_borders_1773841457749.png",
            "geo_gw_3_67_south_africa_1773841473557.png",
            "geo_gw_3_68_apartheid_1773841486574.png",
            "geo_gw_3_69_desertification_1773841503698.png",
            "geo_gw_3_70_nile_river_1773841520494.png"
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
            q: "ヨーロッパの国々がかつてアフリカ大陸を植民地支配する際に、何を目印に国境線を引いたことが多いか？",
            choices: ["緯線や経線", "山脈や川", "民族の分布", "言語の違い"],
            a: "緯線や経線",
            comment: "そのため、アフリカの国境線は現在でも直線的なものが多く見られます。",
            answerImg: "assets/images/geography/${images[0]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アフリカ大陸の南端に位置する、金やレアメタルなどの鉱産資源の産出が盛んな国は？",
            choices: ["南アフリカ共和国", "エジプト", "ナイジェリア", "ケニア"],
            a: "南アフリカ共和国",
            comment: "かつてはアパルトヘイトという人種隔離政策が行われていました。",
            answerImg: "assets/images/geography/${images[1]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "過去の南アフリカ共和国で行われていた、白人以外の非白人を差別する人種隔離政策を何というか？",
            choices: ["アパルトヘイト", "白豪主義", "カースト制度", "シオニズム"],
            a: "アパルトヘイト",
            comment: "国際的な非難を受け、1991年に関連法が廃止されました。",
            answerImg: "assets/images/geography/${images[2]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アフリカ大陸のサヘル地域などで深刻な問題となっている、これまで植物が生えていた土地が砂漠に変わっていく現象を何という？",
            choices: ["砂漠化", "温暖化", "塩害", "酸性雨"],
            a: "砂漠化",
            comment: "過度な放牧や伐採、干ばつなどが原因とされています。",
            answerImg: "assets/images/geography/${images[3]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "エジプト文明を育み、アフリカ東部から北部を流れて地中海に注ぐ世界最長の川は？",
            choices: ["ナイル川", "アマゾン川", "コンゴ川", "ニジェール川"],
            a: "ナイル川",
            comment: "古代から農業用水や交通路として周辺の人々の生活を支えてきました。",
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
            if (!insideArray.includes("ヨーロッパの国々がかつてアフリカ大陸を植民地支配する際")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 15 questions!");
            } else {
                console.log("Batch 15 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectBatch15().catch(console.error);
