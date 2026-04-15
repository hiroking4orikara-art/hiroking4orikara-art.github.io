const fs = require('fs');

// quiz_data.js を読み込む
const content = fs.readFileSync('quiz_data.js', 'utf8');

// window.QUIZ_DATA = { ... } の中身を抽出
const dataStr = content.substring(content.indexOf('{'));
// 簡易的に eval 風に解析（安全な環境であることを前提）
let QUIZ_DATA;
try {
    // window オブジェクトがないので、QUIZ_DATA 定義を調整
    const cleanedContent = content.replace('window.QUIZ_DATA =', 'const data =') + '; module.exports = data;';
    fs.writeFileSync('temp_quiz_data_parse.js', cleanedContent);
    QUIZ_DATA = require('./temp_quiz_data_parse.js');
} catch (e) {
    console.error("Parse error:", e);
    process.exit(1);
}

const missing = [];
for (const unitId in QUIZ_DATA) {
    if (unitId.startsWith('h_')) {
        QUIZ_DATA[unitId].forEach((q, index) => {
            if (!q.img || q.img === "" || q.img.includes('placeholder')) {
                missing.push({
                    unit: unitId,
                    index: index,
                    q: q.q,
                    a: q.a
                });
            }
        });
    }
}

console.log(JSON.stringify(missing, null, 2));
fs.unlinkSync('temp_quiz_data_parse.js');
