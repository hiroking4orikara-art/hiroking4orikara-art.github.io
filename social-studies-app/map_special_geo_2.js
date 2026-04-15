const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const targetA = ["世界遺産", "鹿児島県", "地中海性気候", "ユーラシア大陸"];

let replacedCount = 0;

for (const [section, questions] of Object.entries(parsedData)) {
    questions.forEach((q, index) => {
        let targetImg = null;
        if (q.a === "世界遺産" || q.a === "世界文化遺産" || q.a === "世界自然遺産") targetImg = "g_geo_world_heritage_fixed.png";
        if (q.a === "鹿児島県") targetImg = "g_special_kagoshima_blank_1773760535098.png";
        if (q.a === "地中海性気候") targetImg = "g_special_mediterranean_climate_1773760512743.png";
        if (q.a === "ユーラシア大陸") targetImg = "g_special_eurasia_map_1773760492277.png";
        
        if (targetImg) {
            // Either apply to image or answerImg depends if it is an image question
            // The user explicitly stated '画像（うっすら背景ですかね）を読み込めていませんでした' and
            // for kagoshima '文字なしの九州の地図に鹿児島の部分を違う色にするなどしてほしいです'
            // For Kagoshima, it's a map question where they guess the prefecture (so it's 'img')
            // For Mediterranean/Eurasia, it's also 'img' usually (background map asking what it is).
            // For World Heritage, it can be answerImg or img. Let's just set img if it's already an img question.
            
            // If they are asking based ON the image, it's `img`.
            // The questions listed were:
            // "地球上で最も面積が大きい大陸はどれか？" -> Doesn't need an image but user said "問題文が画像（うっすら背景ですかね）を読み込めていませんでした"
            
            q.img = `assets/images/geography/${targetImg}`;
            q.imgCaption = "※画像はイメージです";
            
            if (q.answerImg && q.answerImg.includes("dummy")) {
                delete q.answerImg;
            }
            
            replacedCount++;
            console.log(`Updated ${q.a} => ${q.q}`);
        }
    });
}

// Re-serialize
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

console.log(`Successfully mapped ${replacedCount} questions to the fixed images using robust AST.`);
