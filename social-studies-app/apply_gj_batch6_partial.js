const fs = require('fs');
const path = require('path');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const imagesDir = path.join(__dirname, 'assets', 'images', 'geography');
const files = fs.readdirSync(imagesDir).filter(f => f.startsWith('g_japan_geo_batch6_'));

const exactMap = {
    // Only mapping the one that succeeded: Gassho-zukuri
    "合掌造り": "gassho_zukuri"
};

let replaced = 0;

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('gj_')) {
        questions.forEach((q, index) => {
            let kwRaw = q.a;
            
            if (!q.answerImg || q.answerImg.includes('dummy') || q.answerImg.includes('batch6')) {
                let matchKey = exactMap[kwRaw];
                if (!matchKey) {
                    let cleaned = kwRaw.replace(/（.*?）/g, '');
                    matchKey = exactMap[cleaned];
                }

                if (matchKey) {
                    let bestFile = files.find(f => f.includes(`_${matchKey}_`));
                    if (bestFile) {
                        q.answerImg = `assets/images/geography/${bestFile}`;
                        q.imgCaption = "※画像はイメージです";
                        replaced++;
                    }
                }
            }
        });
    }
}

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

console.log(`Successfully mapped ${replaced} partial images to quiz_data.js for Batch 6!`);
