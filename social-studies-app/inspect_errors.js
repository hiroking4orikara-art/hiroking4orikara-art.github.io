const fs = require('fs');
const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

console.log("--- gw_4 ERRORS ---");
qData.gw_4.forEach((q, i) => {
    if (!q.q) console.log(`[gw_4][${i}] MISSING QUESTION TEXT:`, q);
    if (!q.a) console.log(`[gw_4][${i}] MISSING ANSWER:`, q);
});

console.log("\n--- gw_7 ALL QUESTIONS ---");
qData.gw_7.forEach((q, i) => {
    console.log(`[${i}] ${q.q ? q.q.substring(0, 20) : "UNDEFINED"} -> Ans: ${q.a}`);
});
