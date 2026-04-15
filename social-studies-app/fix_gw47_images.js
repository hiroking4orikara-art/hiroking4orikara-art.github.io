const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

// アフリカ州（ナイジェリア）のマッピング修正
qData.gw_4.forEach(q => {
    let combined = (q.q + " " + q.a).replace(/\n/g, '');
    if (combined.includes('ナイジェリア')) {
        q.answerImg = "assets/images/geography/africa_nigeria_illustration.jpg";
    }
});

// オセアニア州（gw_7）の多様化マッピング追加
const oceaniaMapping = {
    "キャンベラ": "assets/images/geography/oceania_canberra_illustration.jpg",
    "ツバル": "assets/images/geography/oceania_tuvalu_illustration.jpg",
    "キリバス": "assets/images/geography/oceania_tuvalu_illustration.jpg",
    "鉄鉱石": "assets/images/geography/oceania_mining_illustration.jpg",
    "石炭": "assets/images/geography/oceania_mining_illustration.jpg",
    "ボーキサイト": "assets/images/geography/oceania_mining_illustration.jpg",
    "白豪主義": "assets/images/geography/oceania_multicultural_illustration.jpg",
    "多文化": "assets/images/geography/oceania_multicultural_illustration.jpg",
    "ワーキングホリデー": "assets/images/geography/oceania_multicultural_illustration.jpg",
    "イギリス": "assets/images/geography/oceania_multicultural_illustration.jpg" // 植民地や貿易相手国として
};

qData.gw_7.forEach(q => {
    let combined = (q.q + " " + (q.a || "")).replace(/\n/g, '');
    for (const [key, img] of Object.entries(oceaniaMapping)) {
        if (combined.includes(key)) {
            q.answerImg = img;
            break;
        }
    }
});

const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
fs.writeFileSync('quiz_data.js', newContent);
console.log("gw_4およびgw_7の追加画像を適用し、白地図の連続を解消しました！");
