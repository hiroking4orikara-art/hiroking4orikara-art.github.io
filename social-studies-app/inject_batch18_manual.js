const fs = require('fs');
const path = require('path');

async function injectBatch18() {
    try {
        const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
        const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

        const images = [
            "geo_gw_3_81_greenhouse_gas_1773842129929.png",
            "geo_gw_3_82_london_meridian_1773842147097.png",
            "geo_gw_3_83_tropical_zone_1773842164068.png",
            "geo_gw_3_84_temperate_zone_1773842179603.png",
            "geo_gw_3_85_polar_zone_1773842194118.png"
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
            q: "地球温暖化の原因の一つとされる、二酸化炭素などの気体を総称して何というか？",
            choices: ["温室効果ガス", "フロンガス", "液化天然ガス", "火山ガス"],
            a: "温室効果ガス",
            comment: "これらのガスが増えることで、地球全体の平均気温が少しずつ上昇しています。",
            answerImg: "assets/images/geography/${images[0]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "世界の標準時の基準となっている「本初子午線」が通っている、イギリスの首都は？",
            choices: ["ロンドン", "パリ", "ニューヨーク", "東京"],
            a: "ロンドン",
            comment: "かつての旧グリニッジ天文台を通る経線（経度0度）を世界の時間の基準としています。",
            answerImg: "assets/images/geography/${images[1]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "赤道付近を中心に、一年中気温が高く降水量が多い気候帯を何というか？",
            choices: ["熱帯", "温帯", "乾燥帯", "冷帯（亜寒帯）"],
            a: "熱帯",
            comment: "熱帯雨林やサバンナなどが広がっています。",
            answerImg: "assets/images/geography/${images[2]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本のように、春夏秋冬の四季の変化がはっきりしている気候帯を何というか？",
            choices: ["温帯", "熱帯", "乾燥帯", "寒帯"],
            a: "温帯",
            comment: "日本のほか、西ヨーロッパやアメリカ合衆国の東部などもこの気候帯に含まれます。",
            answerImg: "assets/images/geography/${images[3]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "北極や南極周辺の、一年中寒さが厳しく樹木がほとんど育たない気候帯を何というか？",
            choices: ["寒帯", "冷帯（亜寒帯）", "温帯", "高山気候"],
            a: "寒帯",
            comment: "ツンドラ気候や氷雪気候に分類され、コケ類が育つ程度で農業には向きません。",
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
            if (!insideArray.includes("地球温暖化の原因の一つとされる")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 18 questions!");
            } else {
                console.log("Batch 18 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectBatch18().catch(console.error);
