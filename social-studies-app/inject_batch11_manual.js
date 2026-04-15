const fs = require('fs');
const path = require('path');

async function injectBatch11() {
    try {
        const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
        const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

        const images = [
            "geo_gw_3_46_dry_climate_1773840662961.png",
            "geo_gw_3_47_hurricane_1773840677243.png",
            "geo_gw_3_48_native_american_1773840694394.png",
            "geo_gw_3_49_protestant_1773840712413.png",
            "geo_gw_3_50_hispanic_1773840727377.png"
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
            q: "年間の降水量が500mm未満となる、アメリカ合衆国の西経約100度より西側の気候の総称は？",
            choices: ["乾燥帯", "温帯", "熱帯", "冷帯"],
            a: "乾燥帯",
            comment: "西経100度を境に、西側は降水量が少なく乾燥帯（ステップ気候や砂漠気候）が広がります。",
            answerImg: "assets/images/geography/${images[0]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "フロリダ半島などで見られる、夏から秋にかけて発生する熱帯低気圧を何というか？",
            choices: ["ハリケーン", "サイクロン", "台風", "モンスーン"],
            a: "ハリケーン",
            comment: "カリブ海やメキシコ湾などで発生し、大きな被害をもたらすことがあります。",
            answerImg: "assets/images/geography/${images[1]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "16世紀以降、ヨーロッパ人が進出する前から北アメリカに住んでいた先住民（主にインディアンやイヌイット）を総称して何というか？",
            choices: ["ネイティブ・アメリカン", "アボリジニ", "マオリ", "インカ"],
            a: "ネイティブ・アメリカン",
            comment: "独自の文化や言語を持って自然と共生する生活を送っていました。",
            answerImg: "assets/images/geography/${images[2]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アメリカ合衆国で多く信仰されているキリスト教の宗派は？",
            choices: ["プロテスタント", "カトリック", "東方正教会", "イスラム教"],
            a: "プロテスタント",
            comment: "イギリス系などの移民が多く持ち込んだため、広く信仰されています。",
            answerImg: "assets/images/geography/${images[3]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中央アメリカからメキシコにかけて見られ、スペイン語を話し、カトリックを信仰する多様な人々を何というか？",
            choices: ["ヒスパニック", "アングロサクソン", "メスチーソ", "ケルト"],
            a: "ヒスパニック",
            comment: "近年、アメリカ合衆国において特に南部の州などで人口が大きく増加しています。",
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
            // 既に「乾燥帯」などが含まれていなければ追加
            const insideArray = currentData.substring(startIndex, bracketEndIndex);
            if (!insideArray.includes("年間の降水量が500mm未満となる")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 11 questions!");
            } else {
                console.log("Batch 11 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectBatch11().catch(console.error);
