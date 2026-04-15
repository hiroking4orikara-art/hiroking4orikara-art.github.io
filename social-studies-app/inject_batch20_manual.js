const fs = require('fs');
const path = require('path');

async function injectBatch20() {
    try {
        const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
        const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

        // インド洋の画像は生成制限にかかったため、太平洋の画像を流用する
        const images = [
            "geo_gw_3_91_longitude_1773842605100.png",
            "geo_gw_3_92_latitude_1773842619277.png",
            "geo_gw_3_93_pacific_ocean_1773842633232.png",
            "geo_gw_3_94_atlantic_ocean_1773842645375.png",
            "geo_gw_3_93_pacific_ocean_1773842633232.png" // 流用
        ];

        // 5番目のファイル名を変えてコピーするための対応
        const destFilenames = [
            images[0],
            images[1],
            images[2],
            images[3],
            "geo_gw_3_95_indian_ocean_reused.png"
        ];

        // 画像のコピー
        for (let i = 0; i < images.length; i++) {
            const srcPath = path.join(ARTIFACT_DIR, images[i]);
            const destPath = path.join(TARGET_DIR, destFilenames[i]);
            if (fs.existsSync(srcPath)) {
                fs.copyFileSync(srcPath, destPath);
                console.log("Copied " + images[i] + " as " + destFilenames[i]);
            } else {
                console.warn("Generated image not found in artifact dir: " + srcPath);
            }
        }

        let currentData = fs.readFileSync('quiz_data.js', 'utf8');

        // 生成したクイズデータ
        const newQuestions = `
        ,{
            q: "地球儀などで見られる、北極と南極を結ぶ縦の線を何というか？",
            choices: ["経線", "緯線", "赤道", "白夜"],
            a: "経線",
            comment: "経度はイギリスのロンドンを通る本初子午線を0度として、東西にそれぞれ180度ずつ表します。",
            answerImg: "assets/images/geography/${destFilenames[0]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "地球儀などで見られる、赤道と平行に東西に引かれた線を何というか？",
            choices: ["緯線", "経線", "本初子午線", "白夜"],
            a: "緯線",
            comment: "緯度は赤道を0度として、南北にそれぞれ90度ずつ表します。",
            answerImg: "assets/images/geography/${destFilenames[1]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アジア、オセアニア、南北アメリカの三大陸に囲まれた、地球上で最も面積が広い海（大洋）はどれか？",
            choices: ["太平洋", "大西洋", "インド洋", "北極海"],
            a: "太平洋",
            comment: "地球上の海洋面積の約半分を占めています。",
            answerImg: "assets/images/geography/${destFilenames[2]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "南北アメリカ、ヨーロッパ、アフリカ大陸に囲まれ、S字型に広がる世界で2番目に大きな海（大洋）はどれか？",
            choices: ["大西洋", "太平洋", "インド洋", "北極海"],
            a: "大西洋",
            comment: "かつてヨーロッパから新大陸へ向かう航路として重要な役割を果たしました。",
            answerImg: "assets/images/geography/${destFilenames[3]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アフリカ大陸、ユーラシア大陸、オセアニアなどに囲まれた海（大洋）はどれか？",
            choices: ["インド洋", "大西洋", "太平洋", "北極海"],
            a: "インド洋",
            comment: "世界で3番目に大きな大洋で、古くから季節風を利用した交易が盛んでした。",
            answerImg: "assets/images/geography/${destFilenames[4]}",
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
            if (!insideArray.includes("地球儀などで見られる、北極と南極を結ぶ縦の線を何というか？")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 20 questions!");
            } else {
                console.log("Batch 20 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectBatch20().catch(console.error);
