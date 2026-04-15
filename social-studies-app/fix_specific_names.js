const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
let dataObjStr = parsedDataStr;

dataObjStr = dataObjStr.replace(/module\.exports\s*=\s*window\.QUIZ_DATA;?/g, '');
dataObjStr = dataObjStr.replace(/module\.exports\s*=\s*/g, 'window.QUIZ_DATA = ');

const matchQuiz = dataObjStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

Object.values(parsedData).flat().forEach(q => {
    if (!q.a) return;
    
    // 1. 世界遺産 (World Heritage)
    if (q.a.includes('世界遺産')) {
        q.answerImg = "assets/images/geography/g_geo_world_heritage_fixed.png"; 
    }
    
    // 2. 鹿児島県 (Kagoshima)
    if (q.a === '鹿児島県' || q.a.includes('鹿児島')) {
        q.img = "assets/images/geography/map_kagoshima_highlighted.png";
    }
});

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
console.log("Applied exact specific image names.");
