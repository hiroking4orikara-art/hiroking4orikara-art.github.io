const fs = require('fs');
const path = require('path');

async function injectBatch13() {
    try {
        const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
        const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

        const images = [
            "geo_gw_3_56_aboriginal_1773841020920.png",
            "geo_gw_3_57_great_barrier_reef_1773841037878.png",
            "geo_gw_3_58_maori_1773841053715.png",
            "geo_gw_3_59_white_australia_policy_1773841069420.png",
            "geo_gw_3_60_iron_ore_1773841083616.png"
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
            q: "オーストラリアの先住民を何というか？",
            choices: ["アボリジニ", "マオリ", "イヌイット", "インディアン"],
            a: "アボリジニ",
            comment: "独自の文化や言語を持ち、古くから自然と結びついた生活を送ってきました。",
            answerImg: "assets/images/geography/${images[0]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "オーストラリアの北東部に広がる世界最大のサンゴ礁地帯を何というか？",
            choices: ["グレートバリアリーフ", "グレートディバイディング山脈", "グレートビクトリア砂漠", "エアーズロック"],
            a: "グレートバリアリーフ",
            comment: "世界遺産にも登録されており、美しい海に多様な海洋生物が生息しています。",
            answerImg: "assets/images/geography/${images[1]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ニュージーランドの先住民を何というか？",
            choices: ["マオリ", "アボリジニ", "ポリネシア人", "メラネシア人"],
            a: "マオリ",
            comment: "独自の文化を持ち、伝統的な踊り「ハカ」なども有名です。",
            answerImg: "assets/images/geography/${images[2]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "過去のオーストラリアで行われていた、白人以外の移民を制限する政策を何というか？",
            choices: ["白豪主義", "アパルトヘイト", "多文化主義", "同化政策"],
            a: "白豪主義",
            comment: "現在はこの政策は廃止され、多様な文化や民族を認める「多文化主義」がとられています。",
            answerImg: "assets/images/geography/${images[3]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "オーストラリアの主に西部で多く産出・輸出され、日本の鉄鋼業にも欠かせない鉱産資源は？",
            choices: ["鉄鉱石", "石炭", "ボーキサイト", "銅の鉱石"],
            a: "鉄鉱石",
            comment: "オーストラリアでは西部で鉄鉱石、東部で石炭が多く産出され、日本への輸出も多いです。",
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
            if (!insideArray.includes("オーストラリアの先住民を何というか？")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 13 questions!");
            } else {
                console.log("Batch 13 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectBatch13().catch(console.error);
