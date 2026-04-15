const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const newQuestions = `        {
            q: "ヨーロッパ北部などで見られる、穀物の栽培と家畜の飼育を組み合わせた農業は？",
            choices: ["混合農業", "酪農", "地中海式農業", "プランテーション"],
            a: "混合農業",
            comment: "豚や牛などの飼育と、ライ麦などの栽培をあわせて行います。",
            answerImg: "assets/images/geography/g_gw_1_142_mixed_farming_1773418250632.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "冷涼でやせた土地が多い地域で盛んな、牛などを飼って乳製品を作る農業は？",
            choices: ["酪農", "混合農業", "地中海式農業", "遊牧"],
            a: "酪農",
            comment: "デンマークやオランダなどでさかんで、バターやチーズなどを生産します。",
            answerImg: "assets/images/geography/g_gw_1_143_dairy_farming_1773418265578.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "オランダで見られる、干拓地のことを何というか？",
            choices: ["ポルダー", "フィヨルド", "オアシス", "ツンドラ"],
            a: "ポルダー",
            comment: "海面よりも低い土地を堤防で囲み、風車などで排水してつくられました。",
            answerImg: "assets/images/geography/g_gw_1_144_polder_1773418278597.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ヨーロッパ連合（EU）の多くの国で使われている共通通貨は？",
            choices: ["ユーロ", "ドル", "ポンド", "フラン"],
            a: "ユーロ",
            comment: "EU加盟国間で人や物、お金の移動を自由にするため導入されました。",
            answerImg: "assets/images/geography/g_gw_1_145_eu_euro_1773418292302.png",
            imgCaption: "※画像はイメージです"
        },`;

// Find the string "q: "地中海沿岸で盛んな、夏の乾燥に強い作物を育てる農業を何というか？"," and insert after its block
const qIndex = quizData.indexOf('地中海沿岸で盛んな、夏の乾燥に強い作物を育てる農業を何というか？');
if (qIndex !== -1) {
    const searchArea = quizData.substring(qIndex, qIndex + 1000);
    // find end of block "    },"
    const endBlockMatch = searchArea.match(/\s*\},/);
    if (endBlockMatch) {
         const insertPos = qIndex + endBlockMatch.index + endBlockMatch[0].length;
         const before = quizData.substring(0, insertPos);
         const after = quizData.substring(insertPos);
         fs.writeFileSync(quizDataPath, before + '\n' + newQuestions + after, 'utf8');
         console.log('Successfully inserted 4 new European geography questions.');
    } else {
         console.log('Could not find the end of the previous question block.');
    }
} else {
    console.log('Could not find the preceding question to anchor the insertion.');
}
