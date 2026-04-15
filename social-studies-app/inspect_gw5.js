const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

console.log("=== 北アメリカ(gw_5) 問題一覧 ===");
qData.gw_5.forEach((q, i) => {
    console.log(`[${i}] Q: ${q.q.replace(/\n/g, '')} -> A: ${q.a}`);
});
