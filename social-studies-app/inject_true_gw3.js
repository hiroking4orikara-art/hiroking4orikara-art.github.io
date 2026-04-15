const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
let dataObjStr = parsedDataStr;

// Handle the export format
dataObjStr = dataObjStr.replace(/module\.exports\s*=\s*window\.QUIZ_DATA;?/g, '');
dataObjStr = dataObjStr.replace(/module\.exports\s*=\s*/g, 'window.QUIZ_DATA = ');

const matchQuiz = dataObjStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const trueGw3 = JSON.parse(fs.readFileSync('true_gw3.json', 'utf8'));

console.log(`Replacing gw_3 of length ${parsedData.gw_3.length} with length ${trueGw3.length}`);
parsedData.gw_3 = trueGw3;

// We also need to fix mapping for specific images as the user requested:
// 1. 世界遺産 (World Heritage) in Japan (gj) - The current image looks like trade. Needs a Japanese World Heritage site.
// 2. 鹿児島県 (Kagoshima) in Japan map - The current map has text. Needs a blank map with Kagoshima highlighted.
// 3. 地中海性気候 (Mediterranean climate) - The question text seems to not load the background properly
// 4. ユーラシア大陸 (Eurasian continent) - The question text seems to not load the background properly

// Let's print out these specific questions to inspect their properties before we rewrite
console.log("\n--- Specific Map Requests ---");
Object.values(parsedData).flat().forEach(q => {
    if (q.a && q.a.includes('世界遺産')) console.log("World Heritage:", q.q, q.a, q.answerImg);
    if (q.a === '鹿児島県' || q.a.includes('鹿児島')) console.log("Kagoshima:", q.q, q.a, q.answerImg, q.img);
    if (q.a === '地中海性気候' || q.a.includes('地中海性気候')) console.log("Mediterranean:", q.q, q.a, q.answerImg, q.img);
    if (q.a === 'ユーラシア大陸' || q.a.includes('ユーラシア大陸')) console.log("Eurasia:", q.q, q.a, q.answerImg, q.img);
});

// Serialize and save
let content = 'module.exports = {\n';
const keys = Object.keys(parsedData);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = parsedData[key];
    content += `    "${key}": [\n`;
    const qs = val.map(q => {
        let qStr = `        {\n`;
        qStr += `            q: ${JSON.stringify(q.q)}`;
        if (q.img) qStr += `,\n            img: ${JSON.stringify(q.img)}`;
        if (q.choices) qStr += `,\n            choices: ${JSON.stringify(q.choices)}`;
        if (q.a) qStr += `,\n            a: ${JSON.stringify(q.a)}`;
        if (q.comment) qStr += `,\n            comment: ${JSON.stringify(q.comment)}`;
        if (q.answerImg) qStr += `,\n            answerImg: ${JSON.stringify(q.answerImg)}`;
        if (q.imgCaption) qStr += `,\n            imgCaption: ${JSON.stringify(q.imgCaption)}`;
        qStr += `\n        }`;
        return qStr;
    }).join(',\n');
    content += qs + '\n    ]';
    if (i < keys.length - 1) {
        content += ',\n';
    } else {
        content += '\n';
    }
}
content += '};\n';

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log("Fixed quiz_data.js counts and structure!");
