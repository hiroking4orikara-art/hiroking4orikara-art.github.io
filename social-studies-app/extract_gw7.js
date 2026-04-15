const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;

const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

const gw7 = qData['gw_7'];
fs.writeFileSync('gw7_dump.json', JSON.stringify(gw7, null, 2));
console.log("Dumped gw_7 to gw7_dump.json for safe viewing.");
