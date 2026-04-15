const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

const units = ['gw_2', 'gw_3', 'gw_4', 'gw_5', 'gw_6', 'gw_7'];

let totalMissing = 0;
units.forEach(unit => {
    let missing = [];
    if (qData[unit]) {
        qData[unit].forEach((q, i) => {
            if (!q.answerImg) {
                missing.push(`[${i}] ${q.a || q.q.substring(0, 15).replace(/\n/g, '')}`);
            }
        });
        console.log(`\n=== ${unit} (Missing: ${missing.length} / Total: ${qData[unit].length}) ===`);
        if (missing.length > 0) {
            console.log(missing.join('\n'));
        }
        totalMissing += missing.length;
    }
});

console.log(`\nTotal Missing Images in gw_2 ~ gw_7: ${totalMissing}`);
