const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

let fixCount = 0;

// アディスアベバの選択肢がないバグの修正
qData.gw_4.forEach((q, i) => {
    if (q.a === 'アディスアベバ（エチオピア）') {
        if (!q.choices || q.choices.length === 0) {
            q.choices = ['アディスアベバ（エチオピア）', 'カイロ', 'ナイロビ', 'ケープタウン'];
            console.log("gw_4: アディスアベバの問題に選択肢 (choices) を追加修復しました。");
            fixCount++;
        }
    }
});

if (fixCount > 0) {
    const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
    fs.writeFileSync('quiz_data.js', newContent);
    console.log("quiz_data.js を保存し、バグを修正しました。");
} else {
    console.log("修正が必要な問題は見つかりませんでした。");
}
