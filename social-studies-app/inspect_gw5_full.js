const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

let out = "=== 北アメリカ(gw_5) 問題一覧 ===\n";
qData.gw_5.forEach((q, i) => {
    out += `[${i}] Q: ${q.q.replace(/\n/g, '')} -> A: ${q.a}\n`;
});
fs.writeFileSync('gw_5_list.txt', out);
console.log("gw_5_list.txt を出力しました");
