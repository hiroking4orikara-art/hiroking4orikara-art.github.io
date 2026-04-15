const fs = require('fs');
const path = require('path');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const missingQuestions = JSON.parse(fs.readFileSync('missing_civics_detailed.json', 'utf8'));

const imagesDir = path.join(__dirname, 'assets', 'images', 'civics');
const files = fs.readdirSync(imagesDir).filter(f => f.startsWith('g_civics_batch_final_'));

const keywordMap = {
    "リコール（解職請求）": "recall",
    "寡占（かせん）": "oligopoly",
    "プライマリー・バランス": "primary_balance",
    "多重債務": "multiple_debts",
    "非価格競争": "non_price_competition",
    "仲裁": "arbitration",
    "中国": "china",
    "PKO（国連平和維持活動）": "pko",
    "ラムサール条約": "ramsar_convention",
    "ワシントン条約": "washington_convention",
    "イタイイタイ病": "itai_itai",
    "オゾン層": "ozone_layer",
    "酸性雨": "acid_rain",
    "砂漠化": "desertification",
    "レアメタル（希少金属）": "rare_metal",
    "バイオ燃料": "biofuel",
    "ILO（国際労働機関）": "ilo",
    "ウィーン条約": "vienna_convention",
    "日本国憲法": "constitution_of_japan",
    "平和主義": "pacifism",
    "外国人参政権": "foreign_suffrage",
    "身体の自由": "freedom_of_person",
    "黙秘権": "right_to_remain_silent"
};

let replaced = 0;
let unmatched = [];

const targetedLocations = new Set(missingQuestions.map(q => q.section + '_' + q.index));

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach((q, index) => {
            if (targetedLocations.has(section + '_' + index)) {
                let kw = keywordMap[q.a];
                if(!kw) kw = keywordMap[q.a.replace(/（.*?）/g, '')];

                let bestFile = files.find(f => f.includes(`_${kw}_`));
                
                if (bestFile) {
                    q.answerImg = `assets/images/civics/${bestFile}`;
                    q.imgCaption = "※画像はイメージです";
                    replaced++;
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

console.log(`Successfully mapped ${replaced} newly generated images out of ${targetedLocations.size} missing targets!`);
if(unmatched.length > 0) {
    console.log("Unmatched:", [...new Set(unmatched)].join(', '));
}
