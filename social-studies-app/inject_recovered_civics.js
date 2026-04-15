const fs = require('fs');

// Parse current quiz_data.js AST safely
const content = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function('return ' + matchQuiz[1])();

const civicsImagesKeywords = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));

const keywordMap = {
    // missing from earlier
    "re_election": ["再選"],
    "proportional_representation": ["比例代表制"],
    "referendum": ["住民投票"],
    "recall": ["リコール（解職請求）"],
    "committee": ["常任委員会", "budget_committee", "joint_committee"],
    "campaign_period": ["公示（告示）日から投票日の前日まで"],
    "veto_power": ["再議権（拒否権）", "拒否権"],
    
    "oligopoly": ["寡占（かせん）"],
    "primary_balance": ["プライマリー・バランス"],
    "multiple_debts": ["多重債務"],
    "pay_as_you_go_system": ["賦課方式（ふかほうしき）"],
    "non_price_competition": ["非価格競争"],
    "arbitration": ["仲裁"],

    "china": ["中国"],
    "pko": ["PKO（国連平和維持活動）", "PKO"],
    "ramsar_convention": ["ラムサール条約"],
    "washington_convention": ["ワシントン条約"],
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
    "symbiotic_society": ["共生社会", "multicultural_society"],
    "normalization": ["ノーマライゼーション", "barrier_free"], 
    "barrier_free": ["バリアフリー"],
    "universal_design": ["ユニバーサルデザイン"],
    "sexual_harassment": ["セクシュアル・ハラスメント（セクハラ）"],
    "gender_equal_society": ["男女共同参画社会"],
    "civil_liberties": ["自由権"],
    "freedom_of_person": ["身体の自由"],
    "right_to_remain_silent": ["黙秘権"],
    "mental_freedoms": ["精神の自由"],
    "freedom_of_religion": ["信教の自由"],
    "freedom_of_assembly_and_association": ["集会・結社・表現の自由", "assembly_association"],
    "economic_freedom": ["経済活動の自由"],
    "right_to_life": ["生存権", "minimum_living"],
    "pension": ["年金"],
    "right_to_education": ["教育を受ける権利", "education_right"],
    "right_to_work": ["勤労の権利"],
    "fundamental_labor_rights": ["労働基本権", "labor_rights"],
    "right_to_organize": ["団結権"],
    "clone": ["クローン"],
    "in_vitro_fertilization": ["体外受精", "in_vitro"],
    "aids": ["エイズ（後天性免疫不全症候群）"],
    "politics": ["政治"],
    "democracy": ["民主主義"],
    "direct_democracy": ["直接民主制"],
    "indirect_democracy": ["間接民主制（代議制）", "parliamentary_democracy"],
    "majority_rule": ["多数決の原理"],
    "respect_for_minority_opinions": ["少数意見の尊重", "minority_rights"],
    "right_to_vote": ["選挙権"],
    "right_to_be_elected": ["被選挙権"],
    "right_of_national_review": ["国民審査権", "national_review"],
    "right_of_petition": ["請願権", "petition_right"],
    "right_of_national_referendum": ["国民投票権", "national_referendum"],
    "right_to_claim": ["請求権"],
    "state_redress_claim": ["国家賠償請求権", "state_redress"],
    "criminal_compensation_claim": ["刑事補償請求権", "criminal_compensation"],
    "right_to_know": ["知る権利"],
    "privacy_right": ["プライバシーの権利", "privacy"],
    "personal_information_protection_law": ["個人情報保護法", "personal_info"],
    "portrait_rights": ["肖像権"],
    "power_harassment": ["パワーハラスメント（パワハラ）"],
    "right_to_self_determination": ["自己決定権", "self_determination"],
    "right_to_pursue_happiness": ["幸福追求権", "happiness_pursuit"],
    "environmental_right": ["環境権"],
    "environmental_assessment": ["環境アセスメント（環境影響評価）"],
    "public_welfare": ["公共の福祉"],
    "copyright": ["著作権"],
    "property_rights": ["財産権"],
    "universal_declaration_of_human_rights": ["世界人権宣言", "human_rights_declaration"],
    "international_covenant_on_human_rights": ["国際人権規約", "human_rights_covenant"],
    "amnesty_international": ["アムネスティ・インターナショナル", "amnesty"],
    "genetic_diagnosis": ["遺伝子診断"],
    "genetically_modified_organism": ["遺伝子組み換え食品", "gmo"],
    "volunteer": ["ボランティア"]
};

// Also load the used images to map properly
const answerMap = {};

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach((q) => {
            if (q.answerImg && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) {
                answerMap[q.a] = q.answerImg;
            } else if (q.img && !q.img.includes('dummy') && !q.img.includes('placeholder')) {
                answerMap[q.a] = q.img;
            }
        });
    }
}

// Map any empty images in civics
let unmappedCount = 0;
for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach((q) => {
            let hasImg = false;
            if (q.answerImg && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
            if (q.img && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
            
            if (!hasImg) {
                // Try from answer map first
                if (answerMap[q.a]) {
                    q.answerImg = answerMap[q.a];
                    q.imgCaption = "※画像はイメージです";
                    return;
                }

                // Try from keywordMap
                let bestMatch = null;
                let fallbackMatch = null;

                for (const [kw, answers] of Object.entries(keywordMap)) {
                    if (q.a && answers.some(a => q.a.includes(a) || a.includes(q.a) || q.q.includes(a))) {
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
                
                if (!bestMatch && !fallbackMatch && q.a) {
                   for (const img of civicsImagesKeywords) {
                       if (img.keyword.replace(/_/g, '').toLowerCase() === q.a.replace(/[^a-zA-Z]/g, '').toLowerCase()) {
                           bestMatch = img;
                           break;
                       }
                   }
                }

                if (!bestMatch) bestMatch = fallbackMatch;
                
                if (bestMatch) {
                    q.answerImg = `assets/images/civics/${bestMatch.filename}`;
                    q.imgCaption = "※画像はイメージです";
                    answerMap[q.a] = q.answerImg; // save it so identical ones can use it
                } else {
                    unmappedCount++;
                }
            }
        });
    }
}

// Serialize
let outContent = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(parsedData);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = parsedData[key];
    outContent += `    "${key}": [\n`;
    const qs = val.map(q => {
        let qStr = `        {\n`;
        qStr += `            q: ${JSON.stringify(q.q)}`;
        if (q.img) qStr += `,\n            img: ${JSON.stringify(q.img)}`;
        if (q.choices && q.choices.length > 0) qStr += `,\n            choices: ${JSON.stringify(q.choices)}`;
        if (q.a) qStr += `,\n            a: ${JSON.stringify(q.a)}`;
        if (q.comment) qStr += `,\n            comment: ${JSON.stringify(q.comment)}`;
        if (q.answerImg) qStr += `,\n            answerImg: ${JSON.stringify(q.answerImg)}`;
        if (q.imgCaption) qStr += `,\n            imgCaption: ${JSON.stringify(q.imgCaption)}`;
        qStr += `\n        }`;
        return qStr;
    }).join(',\n');
    outContent += qs + '\n    ]';
    if (i < keys.length - 1) {
        outContent += ',\n';
    } else {
        outContent += '\n';
    }
}
outContent += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

fs.writeFileSync('quiz_data.js', outContent, 'utf8');

console.log(`Re-mapped images onto quiz_data civics branches.`);
console.log(`Remaining unmapped civics: ${unmappedCount}`);
