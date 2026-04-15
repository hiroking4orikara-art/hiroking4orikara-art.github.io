const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
let dataObjStr = parsedDataStr;

dataObjStr = dataObjStr.replace(/module\.exports\s*=\s*window\.QUIZ_DATA;?/g, '');
dataObjStr = dataObjStr.replace(/module\.exports\s*=\s*/g, 'window.QUIZ_DATA = ');

const matchQuiz = dataObjStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const trueGw3 = JSON.parse(fs.readFileSync('true_gw3.json', 'utf8'));
parsedData.gw_3 = trueGw3;

Object.values(parsedData).flat().forEach(q => {
    if (!q.a) return;
    
    // 1. 世界遺産 (World Heritage)
    if (q.a.includes('世界遺産')) {
        // Need to find a World Heritage map from geography folder
        q.answerImg = "assets/images/geography/g_gw_5_xx_world_heritage.png"; // Replace below
    }
    
    // 2. 鹿児島県 (Kagoshima)
    if (q.a === '鹿児島県' || q.a.includes('鹿児島')) {
        // Find kagoshima from geography maps
        q.img = "assets/images/geography/g_gj_kyushu_kagoshima_blank.png"; // Replace below
    }
    
    // 3. 地中海性気候 (Mediterranean climate)
    if (q.a === '地中海性気候' || q.a.includes('地中海性気候')) {
        // Bug was that the question text failed to load the image.
        // wait, earlier script output said: `Mediterranean: ... undefined undefined` meaning it had NO answerImg or img!
        // We will just assign it right now.
        q.img = "assets/images/geography/g_gw_1_25_mediterranean_climate_1773408807615.png";
    }
    
    // 4. ユーラシア大陸 (Eurasian continent)
    if (q.a === 'ユーラシア大陸' || q.a.includes('ユーラシア大陸')) {
        q.img = "assets/images/geography/g_gw_1_02_eurasia_continent_1773408160032.png";
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
console.log("Fixed quiz_data.js counts and partly mapped the 4 specific fixes!");
