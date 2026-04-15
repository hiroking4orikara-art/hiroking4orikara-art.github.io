const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const civicsImagesKeywords = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));

let missingList = [];
for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach((q, index) => {
            let hasImg = false;
            if (q.answerImg && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
            if (q.img && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
            if (!hasImg) {
                missingList.push(q);
            }
        });
    }
}

console.log(`Remaining missing questions: ${missingList.length}`);

// We need to map these manually or find their keywords
const hardcodedMap = {
    "リコール（解職請求）": "recall",
    "寡占（かせん）": "oligopoly",
    "プライマリー・バランス": "primary_balance",
    "多重債務": "multiple_debts",
    "非価格競争": "non_price_competition",
    "仲裁": "arbitration",
    "中国": "china",
    "PKO（国連平和維持活動）": "pko",
    "ワシントン条約": "washington_convention",
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
    "黙秘権": "right_to_remain_silent",
    "アムネスティ・インターナショナル": "amnesty_international",
    "遺伝子診断": "genetic_diagnosis",
    "遺伝子組み換え食品": "genetically_modified_organism",
    "著作権": "copyright",
    "公共の福祉": "public_welfare",
    "バリアフリー": "barrier_free",
    "ユニバーサルデザイン": "universal_design",
    "賦課方式（ふかほうしき）": "pay_as_you_go_system"
};

let replaced = 0;
let unmatched = [];

missingList.forEach(q => {
    let kw = hardcodedMap[q.a] || hardcodedMap[q.a.replace(/（.*?）/g, '')];
    
    // Find the image for this kw
    let bestMatch = null;
    
    if (kw) {
        // Try strict match
        bestMatch = civicsImagesKeywords.find(img => img.keyword === kw);
        if(!bestMatch) {
            // substring match
            bestMatch = civicsImagesKeywords.find(img => img.keyword.includes(kw) || kw.includes(img.keyword));
        }
    }
    
    if(!bestMatch) {
         // Fallback to searching the answer directly in keyword
         const cleanAnswer = q.a.replace(/（.*?）/g, '');
         bestMatch = civicsImagesKeywords.find(img => img.keyword.includes(cleanAnswer) || img.keyword.replace(/_/g, '') === cleanAnswer);
    }
    
    if (bestMatch) {
        q.answerImg = `assets/images/civics/${bestMatch.filename}`;
        q.imgCaption = "※画像はイメージです";
        replaced++;
    } else {
        unmatched.push(q.a);
        
        // Let's print out what we couldn't find
        console.log(`COULD NOT FIND MATCH FOR: ${q.a} (kw: ${kw})`);
    }
});

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

console.log(`Successfully applied ${replaced} civics images for the last batch!`);
console.log(`Unmatched remaining: ${unmatched.length}`);
if(unmatched.length > 0) {
    console.log("Still unmatched keywords:", [...new Set(unmatched)].join(', '));
}
