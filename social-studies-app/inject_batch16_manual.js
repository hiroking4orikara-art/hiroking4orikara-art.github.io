const fs = require('fs');
const path = require('path');

async function injectBatch16() {
    try {
        const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
        const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

        const images = [
            "geo_gw_3_71_great_rift_valley_1773841771969.png",
            "geo_gw_3_72_slave_trade_1773841789178.png",
            "geo_gw_3_73_cote_divoire_1773841807288.png",
            "geo_gw_3_74_monoculture_economy_1773841820192.png",
            "geo_gw_3_75_african_union_1773841833901.png"
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
            q: "アフリカ東部にある、陸地が裂けてできた巨大な谷を何というか？",
            choices: ["大地溝帯（グレートリフトバレー）", "グランドキャニオン", "デスバレー", "フィヨルド"],
            a: "大地溝帯（グレートリフトバレー）",
            comment: "この周辺にはキリマンジャロなどの高い山や深く細長い湖が多く存在します。",
            answerImg: "assets/images/geography/${images[0]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "16世紀以降、アフリカ大陸からヨーロッパの商人によって新大陸（南北アメリカなど）へ強制的に連行され、労働力として扱われた人々を何というか？",
            choices: ["黒人奴隷", "移民", "難民", "流刑囚"],
            a: "黒人奴隷",
            comment: "大西洋をまたぐ三角貿易によって、多くのアフリカの人々が故郷を奪われました。",
            answerImg: "assets/images/geography/${images[1]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "チョコレートの原料となるカカオ豆の生産量が世界一の、ギニア湾岸にある国は？",
            choices: ["コートジボワール", "ガーナ", "ナイジェリア", "ケニア"],
            a: "コートジボワール",
            comment: "隣国のガーナもカカオ豆の生産と輸出で有名です。",
            answerImg: "assets/images/geography/${images[2]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "一つの国で特定の農産物や鉱産資源の生産・輸出に頼りすぎている経済（アフリカの国々に多い）を何というか？",
            choices: ["モノカルチャー経済", "グローバル経済", "混合農業", "加工貿易"],
            a: "モノカルチャー経済",
            comment: "天候や国際価格の変動によって国の収入が不安定になりやすいという問題があります。",
            answerImg: "assets/images/geography/${images[3]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アフリカ大陸の国々が政治的・経済的な協力と団結を目指して結成している現在の地域組織は？",
            choices: ["アフリカ連合（AU）", "東南アジア諸国連合（ASEAN）", "ヨーロッパ連合（EU）", "独立国家共同体（CIS）"],
            a: "アフリカ連合（AU）",
            comment: "2002年にアフリカ統一機構（OAU）から発展して発足し、問題の解決に取り組んでいます。",
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
            if (!insideArray.includes("大地溝帯（グレートリフトバレー）")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 16 questions!");
            } else {
                console.log("Batch 16 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectBatch16().catch(console.error);
