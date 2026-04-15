const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const civicsImagesKeywords = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));

const keywordMap = {
    "recall": ["リコール（解職請求）"],
    "oligopoly": ["寡占（かせん）"],
    "primary_balance": ["プライマリー・バランス"],
    "multiple_debts": ["多重債務"],
    "pay_as_you_go_system": ["賦課方式（ふかほうしき）"],
    "non_price_competition": ["非価格競争"],
    "arbitration": ["仲裁"],
    "china": ["中国"],
    "pko": ["PKO（国連平和維持活動）", "PKO"],
    "itai_itai_disease": ["イタイイタイ病"],
    "ozone_layer": ["オゾン層"],
    "acid_rain": ["酸性雨"],
    "desertification": ["砂漠化"],
    "rare_metal": ["レアメタル（希少金属）"],
    "biofuel": ["バイオ燃料"],
    "ilo": ["ILO（国際労働機関）"],
    "vienna_convention": ["ウィーン条約"],
    "constitution_of_japan": ["日本国憲法"],
    "pacifism": ["平和主義"],
    "foreign_suffrage": ["外国人参政権"],
    "barrier_free": ["バリアフリー"],
    "universal_design": ["ユニバーサルデザイン"],
    "freedom_of_person": ["身体の自由"],
    "right_to_remain_silent": ["黙秘権"],
    "public_welfare": ["公共の福祉"],
    "copyright": ["著作権"],
    "property_rights": ["財産権"],
    "amnesty_international": ["アムネスティ・インターナショナル"],
    "genetic_diagnosis": ["遺伝子診断"],
    "genetically_modified_organism": ["遺伝子組み換え食品"]
};

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

const mappings = [];
missingList.forEach(q => {
    let bestMatch = null;
    let fallbackMatch = null;

    for (const [kw, answers] of Object.entries(keywordMap)) {
        if (answers.some(a => q.a.includes(a) || a.includes(q.a) || q.q.includes(a))) {
            for (const img of civicsImagesKeywords) {
                if (img.keyword.toLowerCase() === kw.toLowerCase() || answers.some(a => a.toLowerCase() === img.keyword.toLowerCase())) {
                    bestMatch = img;
                    break; 
                }
                if (img.keyword.toLowerCase().includes(kw.toLowerCase()) || kw.toLowerCase().includes(img.keyword.toLowerCase())) {
                    fallbackMatch = img;
                }
            }
        }
        if (bestMatch) break;
    }
    
    // Also try matching against simply the answer directly
    if (!bestMatch && !fallbackMatch) {
       for (const img of civicsImagesKeywords) {
           if (img.keyword.replace(/_/g, '').toLowerCase() === q.a.replace(/[^a-zA-Z]/g, '').toLowerCase()) {
               bestMatch = img;
               break;
           }
       }
    }

    if (!bestMatch) bestMatch = fallbackMatch;
    if (bestMatch) mappings.push({ question: q, image: bestMatch });
});

let quizDataStr = parsedDataStr;
let replaced = 0;

mappings.forEach(m => {
    const qEscaped = m.question.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    
    // Fix: add quotes around the question
    const regex = new RegExp(`(q:\\s*"${qEscaped}".*?\\n(?:.*?\\n){0,10}?.*?a:\\s*${JSON.stringify(m.question.a).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
    
    let replacedInRegex = false;
    quizDataStr = quizDataStr.replace(regex, (match) => {
        if (!replacedInRegex && !match.includes('answerImg:')) {
            replacedInRegex = true;
            return `${match},\n            answerImg: "assets/images/civics/${m.image.filename}",\n            imgCaption: "※画像はイメージです"`;
        }
        return match;
    });

    if (replacedInRegex) replaced++;
});

fs.writeFileSync('quiz_data.js', quizDataStr, 'utf8');
console.log(`Successfully extended map and applied ${replaced} civics images using robust replace!`);
