const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

let replaced = 0;

for (const [section, questions] of Object.entries(parsedData)) {
    questions.forEach(q => {
        if(q.a && q.a.includes('ユーラシア大陸')) {
            q.img = "assets/images/geography/g_geo_eurasia_bg.png";
            replaced++;
        }
        if(q.a && q.a.includes('地中海性気候') && section.includes('gw_')) { // explicitly World Geo
            q.img = "assets/images/geography/g_geo_mediterranean_bg.png";
            replaced++;
        }
    });
}

// Reserialize
let content = 'window.QUIZ_DATA = {\n';
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
content += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log(`Replaced ${replaced} background images.`);
