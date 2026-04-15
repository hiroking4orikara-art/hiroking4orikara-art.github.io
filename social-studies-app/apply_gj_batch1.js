const fs = require('fs');
const path = require('path');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const imagesDir = path.join(__dirname, 'assets', 'images', 'geography');
const files = fs.readdirSync(imagesDir).filter(f => f.startsWith('g_japan_geo_batch1_'));

const keywordMap = {
    "南鳥島": "minamitorishima",
    "与那国島": "yonagunijima",
    "排他的経済水域（EEZ）": "eez",
    "北方領土": "northern_territories",
    "フォッサマグナ": "fossa_magna",
    "日本アルプス": "japan_alps",
    "扇状地": "alluvial_fan",
    "三角州（デルタ）": "delta",
    "海溝": "trench",
    "南海トラフ": "nankai_trough"
};

let replaced = 0;
let unmatched = [];

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('gj_')) {
        questions.forEach((q, index) => {
            let kw = keywordMap[q.a];
            if(!kw) kw = keywordMap[q.a.replace(/（.*?）/g, '')];

            if (kw) {
                let bestFile = files.find(f => f.includes(`_${kw}_`));
                if (bestFile) {
                    q.answerImg = `assets/images/geography/${bestFile}`;
                    q.imgCaption = "※画像はイメージです";
                    replaced++;
                    // Remove it from map so it only applies once if there are duplicates
                    delete keywordMap[q.a];
                    delete keywordMap[q.a.replace(/（.*?）/g, '')];
                } else {
                    unmatched.push(q.a);
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

console.log(`Successfully mapped ${replaced} images for Japan Geo Batch 1!`);
if (unmatched.length > 0) {
    console.log("Unmatched keywords:", [...new Set(unmatched)]);
}
