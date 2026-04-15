const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const civicsImagesKeywords = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));

// The final remaining unmapped questions exactly based on their answers
// Answer -> specific image keyword from civics_images_keywords.json
const exactFinalMap = {
    "リコール（解職請求）": "recall",
    "寡占（かせん）": "oligopoly",
    "プライマリー・バランス": "primary_balance",
    "多重債務": "multiple_debts",
    "非価格競争": "non_price_competition",
    "仲裁": "arbitration",
    "中国": "china",
    "PKO（国連平和維持活動）": "pko",
    "バイオ燃料": "biofuel",
    "ILO（国際労働機関）": "ilo",
    "ウィーン条約": "vienna_convention",
    "ワシントン条約": "washington_convention",
    "日本国憲法": "constitution_of_japan",
    "平和主義": "pacifism",
    "外国人参政権": "foreign_suffrage",
    "身体の自由": "freedom_of_person",
    "黙秘権": "right_to_remain_silent",
    "公共の福祉": "public_welfare",
    "著作権": "copyright",
    "財産権": "property_rights",
    "アムネスティ・インターナショナル": "amnesty_international",
    "遺伝子診断": "genetic_diagnosis",
    "遺伝子組み換え食品": "genetically_modified_organism",
    "バリアフリー": "barrier_free",
    "ユニバーサルデザイン": "universal_design",
};

let missingList = [];
let replaced = 0;
let unmatched = [];

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach((q, index) => {
            let hasImg = false;
            // q.img handles problem images, answerImg handles explanation images
            if (q.answerImg && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
            if (q.img && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
            
            if (!hasImg) {
                let bestMatch = null;
                const keywordTarget = exactFinalMap[q.a];
                
                if (keywordTarget) {
                    // Find it in the images list
                    for (const img of civicsImagesKeywords) {
                        if (img.keyword.toLowerCase() === keywordTarget.toLowerCase()) {
                            bestMatch = img;
                            break;
                        }
                    }
                    
                    // Fallback to substring matching if exact isn't there
                    if (!bestMatch) {
                        for (const img of civicsImagesKeywords) {
                            if (img.keyword.toLowerCase().includes(keywordTarget.toLowerCase()) || keywordTarget.toLowerCase().includes(img.keyword.toLowerCase())) {
                                bestMatch = img;
                                break;
                            }
                        }
                    }
                }

                if (bestMatch) {
                    q.answerImg = `assets/images/civics/${bestMatch.filename}`;
                    q.imgCaption = "※画像はイメージです";
                    replaced++;
                } else {
                    unmatched.push(q);
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

console.log(`Successfully mapped exactly ${replaced} civics images using AST!`);
console.log(`Unmatched remaining: ${unmatched.length}`);
if(unmatched.length > 0) console.log(unmatched.map(u => u.a).join(', '));
