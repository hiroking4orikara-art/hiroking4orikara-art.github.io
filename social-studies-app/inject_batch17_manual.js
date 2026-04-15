const fs = require('fs');
const path = require('path');

async function injectBatch17() {
    try {
        const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
        const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

        const images = [
            "geo_gw_3_76_inca_empire_1773841947662.png",
            "geo_gw_3_77_brazil_1773841959807.png",
            "geo_gw_3_78_pampas_1773841973944.png",
            "geo_gw_3_79_bioethanol_1773841990427.png",
            "geo_gw_3_80_elnino_1773842007385.png"
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
            q: "かつて南アメリカ大陸のアンデス山脈を中心に栄えたが、16世紀にスペイン人によって滅ぼされた帝国は？",
            choices: ["インカ帝国", "アステカ帝国", "マヤ文明", "ローマ帝国"],
            a: "インカ帝国",
            comment: "マチュピチュなどの高度な石造建築技術を用いた遺跡が現在も残っています。",
            answerImg: "assets/images/geography/${images[0]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "南アメリカで最も面積が大きく、コーヒー豆やさとうきびの生産が盛んな国は？",
            choices: ["ブラジル", "アルゼンチン", "ペルー", "コロンビア"],
            a: "ブラジル",
            comment: "アマゾン川流域には熱帯雨林が広がっています。公用語はポルトガル語です。",
            answerImg: "assets/images/geography/${images[1]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アルゼンチンやブラジルの南部などに広がる、農牧業が盛んな温帯の草原を何というか？",
            choices: ["パンパ", "サバンナ", "ステップ", "ツンドラ"],
            a: "パンパ",
            comment: "温暖な気候を活かして、小麦やとうもろこしの栽培、牛や羊の放牧などが盛んに行われています。",
            answerImg: "assets/images/geography/${images[2]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ブラジルなどで生産が盛んな、さとうきびなどを原料としてつくられる、自動車などの燃料になるアルコールを何というか？",
            choices: ["バイオエタノール", "天然ガス", "シェールガス", "石油（原油）"],
            a: "バイオエタノール",
            comment: "化石燃料の代わりとなる環境にやさしいエネルギーとして注目・利用されています。",
            answerImg: "assets/images/geography/${images[3]}",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "赤道付近の太平洋東部（ペルー沖）で海面水温が平年より高くなり、世界各地に異常気象をもたらす現象を何というか？",
            choices: ["エルニーニョ現象", "ラニーニャ現象", "ヒートアイランド現象", "フェーン現象"],
            a: "エルニーニョ現象",
            comment: "逆に海面水温が平年より低くなる現象をラニーニャ現象と呼びます。",
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
            if (!insideArray.includes("かつて南アメリカ大陸のアンデス山脈を中心に栄えたが")) {
                const part1 = currentData.substring(0, bracketEndIndex);
                const part2 = currentData.substring(bracketEndIndex);
                currentData = part1 + newQuestions + "\n    " + part2;
                fs.writeFileSync('quiz_data.js', currentData, 'utf8');
                console.log("Successfully manually injected Batch 17 questions!");
            } else {
                console.log("Batch 17 already seems to be injected.");
            }
        } else {
            console.log("Could not find the closing bracket for gw_3.");
        }
    } catch (e) {
        console.error("Injection error:", e);
    }
}

injectBatch17().catch(console.error);
