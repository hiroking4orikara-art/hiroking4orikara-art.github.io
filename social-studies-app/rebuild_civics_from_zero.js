const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const data = new Function('return '+content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/)[1])();

// 1. Wipe all current Civics data to start fresh and avoid ANY duplicate merging
Object.keys(data).forEach(k => {
    if (k.startsWith('c_') || k.startsWith('cw_')) {
        delete data[k];
    }
});

// Create fresh buckets
data['c_01_modern_society'] = [];
data['c_02_human_rights'] = [];
data['c_03_politics'] = [];
data['c_04_economy'] = [];
data['c_05_global_society'] = [];
data['cw_1'] = [];

const distributeToSections = (q) => {
    let section = 'c_03_politics'; // default
    if (q.q.includes('憲法') || q.q.includes('人権') || q.q.includes('平等') || q.q.includes('自由') || q.q.includes('権利') || q.a.includes('憲法') || q.a.includes('人権')) section = 'c_02_human_rights';
    else if (q.q.includes('国会') || q.q.includes('内閣') || q.q.includes('裁判') || q.q.includes('三権分立') || q.a.includes('国会') || q.a.includes('内閣') || q.a.includes('裁判')) section = 'c_03_politics';
    else if (q.q.includes('経済') || q.q.includes('銀行') || q.q.includes('税') || q.q.includes('価格') || q.q.includes('労働') || q.a.includes('経済') || q.a.includes('銀行') || q.a.includes('税') || q.a.includes('株式会社')) section = 'c_04_economy';
    else if (q.q.includes('国際') || q.q.includes('国連') || q.q.includes('環境') || q.q.includes('世界') || q.a.includes('条約') || q.a.includes('国連')) section = 'c_05_global_society';
    
    // Safety check against identical duplicate
    const isDupe = data[section].some(existing => existing.q === q.q);
    if (!isDupe) {
        data[section].push(q);
        return true;
    }
    return false;
};

// 2. We can load EVERYTHING from batches 1 to 50
let loadedCount = 0;
for (let i = 1; i <= 50; i++) {
    const file = `civics_batch_${i}.json`;
    if (fs.existsSync(file)) {
        try {
            const arr = JSON.parse(fs.readFileSync(file, 'utf8'));
            arr.forEach(q => {
                if (distributeToSections(q)) loadedCount++;
            });
        } catch(e) {}
    }
}
console.log(`Loaded ${loadedCount} strictly unique questions from batches 1-50`);

// 3. And also any review questions that are uniquely written in cw_1? 
// Actually, earlier backups showed about 100 questions in cw_1. Let's load cw_1 from the old reliable `temp_quiz_data_run.js` (which had 173 civics total) just to catch anything NOT in batches.
if (fs.existsSync('temp_quiz_data_run.js')) {
    try {
        const oldMatch = fs.readFileSync('temp_quiz_data_run.js', 'utf8').match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
        const oldData = new Function('return ' + oldMatch[1])();
        if (oldData['cw_1']) {
             oldData['cw_1'].forEach(q => {
                  const isDupe = data['cw_1'].some(existing => existing.q === q.q);
                  if(!isDupe) {
                      data['cw_1'].push(q);
                      loadedCount++;
                  }
             });
        }
    } catch(e){}
}
console.log(`Total Civics after recovery: ${loadedCount}`);

// 4. Run the image mapping pipeline over everything again
const civicsImagesKeywords = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));
const keywordMap = {
    "re_election": ["再選"], "proportional_representation": ["比例代表制"],
    "referendum": ["住民投票"], "recall": ["リコール（解職請求）"],
    "committee": ["常任委員会"], "campaign_period": ["公示（告示）日から投票日"],
    "veto_power": ["再議権（拒否権）", "拒否権"], "oligopoly": ["寡占（かせん）"],
    "primary_balance": ["プライマリー・バランス"], "multiple_debts": ["多重債務"],
    "pay_as_you_go_system": ["賦課方式（ふかほうしき）"], "non_price_competition": ["非価格競争"],
    "arbitration": ["仲裁"], "china": ["中国"], "pko": ["PKO（国連平和維持活動）", "PKO"],
    "ramsar_convention": ["ラムサール条約"], "washington_convention": ["ワシントン条約"],
    "itai_itai_disease": ["イタイイタイ病"], "ozone_layer": ["オゾン層"], "acid_rain": ["酸性雨"],
    "desertification": ["砂漠化"], "rare_metal": ["レアメタル（希少金属）"], "biofuel": ["バイオ燃料"],
    "ilo": ["ILO（国際労働機関）"], "vienna_convention": ["ウィーン条約"],
    "constitution_of_japan": ["日本国憲法"], "pacifism": ["平和主義"],
    "foreign_suffrage": ["外国人参政権"], "symbiotic_society": ["共生社会", "multicultural_society"],
    "normalization": ["ノーマライゼーション"], "barrier_free": ["バリアフリー"],
    "universal_design": ["ユニバーサルデザイン"], "sexual_harassment": ["セクシュアル・ハラスメント（セクハラ）"],
    "gender_equal_society": ["男女共同参画社会"], "civil_liberties": ["自由権"],
    "freedom_of_person": ["身体の自由"], "right_to_remain_silent": ["黙秘権"],
    "mental_freedoms": ["精神の自由"], "freedom_of_religion": ["信教の自由"],
    "freedom_of_assembly_and_association": ["集会・結社・表現の自由"], "economic_freedom": ["経済活動の自由"],
    "right_to_life": ["生存権", "minimum_living"], "pension": ["年金"],
    "right_to_education": ["教育を受ける権利", "education_right"], "right_to_work": ["勤労の権利"],
    "fundamental_labor_rights": ["労働基本権", "labor_rights"], "right_to_organize": ["団結権"],
    "clone": ["クローン"], "in_vitro_fertilization": ["体外受精"], "aids": ["エイズ（後天性免疫不全症候群）"],
    "politics": ["政治"], "democracy": ["民主主義"], "direct_democracy": ["直接民主制"],
    "indirect_democracy": ["間接民主制（代議制）"], "majority_rule": ["多数決の原理"],
    "respect_for_minority_opinions": ["少数意見の尊重"], "right_to_vote": ["選挙権"],
    "right_to_be_elected": ["被選挙権"], "right_of_national_review": ["国民審査権"],
    "right_of_petition": ["請願権"], "right_of_national_referendum": ["国民投票権"],
    "right_to_claim": ["請求権"], "state_redress_claim": ["国家賠償請求権"],
    "criminal_compensation_claim": ["刑事補償請求権"], "right_to_know": ["知る権利"],
    "privacy_right": ["プライバシーの権利"], "personal_information_protection_law": ["個人情報保護法"],
    "portrait_rights": ["肖像権"], "power_harassment": ["パワーハラスメント（パワハラ）"],
    "right_to_self_determination": ["自己決定権"], "right_to_pursue_happiness": ["幸福追求権"],
    "environmental_right": ["環境権"], "environmental_assessment": ["環境アセスメント（環境影響評価）"],
    "public_welfare": ["公共の福祉"], "copyright": ["著作権"], "property_rights": ["財産権"],
    "universal_declaration_of_human_rights": ["世界人権宣言"], "international_covenant_on_human_rights": ["国際人権規約"],
    "amnesty_international": ["アムネスティ・インターナショナル"], "genetic_diagnosis": ["遺伝子診断"],
    "genetically_modified_organism": ["遺伝子組み換え食品"], "volunteer": ["ボランティア"]
};

let mappedCount = 0;
// Note: We remap everything to ensure all restored inputs have images attached if possible
Object.keys(data).forEach(k => {
    if (k.startsWith('c_') || k.startsWith('cw_')) {
        data[k].forEach(q => {
            let bestMatch = null;
            // 1. Precise Match
            for (const img of civicsImagesKeywords) {
                if (img.keyword.replace(/_/g, '').toLowerCase() === q.a.replace(/[^a-zA-Zぁ-んァ-ヶ一-龠]/g, '').toLowerCase()) {
                    bestMatch = img; break;
                }
            }
            // 2. Dict Match
            if (!bestMatch) {
                for (const [kw, answers] of Object.entries(keywordMap)) {
                    if (answers.some(a => q.a.includes(a) || q.q.includes(a))) {
                        for (const img of civicsImagesKeywords) {
                            if (img.keyword.toLowerCase() === kw.toLowerCase() || answers.some(a => a.toLowerCase() === img.keyword.toLowerCase())) {
                                bestMatch = img; break;
                            }
                            if (img.keyword.toLowerCase().includes(kw.toLowerCase()) || kw.toLowerCase().includes(img.keyword.toLowerCase())) {
                                if(!bestMatch) bestMatch = img;
                            }
                        }
                    }
                    if (bestMatch) break;
                }
            }
            if (bestMatch) {
                q.answerImg = `assets/images/civics/${bestMatch.filename}`;
                q.imgCaption = "※画像はイメージです";
                mappedCount++;
            }
        });
    }
});
console.log(`Mapped images to ${mappedCount} Civics questions`);

// 5. Build and Save
const finalKeys = Object.keys(data).sort();
let outStr = 'window.QUIZ_DATA = {\n';

for (let i = 0; i < finalKeys.length; i++) {
    const key = finalKeys[i];
    outStr += `    "${key}": [\n`;
    
    const qs = data[key].map(q => {
        let qLines = [];
        if (q.q) qLines.push(`            q: ${JSON.stringify(q.q)}`);
        if (q.img && q.img.length > 0) qLines.push(`            img: ${JSON.stringify(q.img)}`);
        if (q.choices) qLines.push(`            choices: ${JSON.stringify(q.choices)}`);
        if (q.a) qLines.push(`            a: ${JSON.stringify(q.a)}`);
        if (q.comment) qLines.push(`            comment: ${JSON.stringify(q.comment)}`);
        if (q.answerImg && q.answerImg.length > 0) qLines.push(`            answerImg: ${JSON.stringify(q.answerImg)}`);
        if (q.imgCaption) qLines.push(`            imgCaption: ${JSON.stringify(q.imgCaption)}`);
        return `        {\n${qLines.join(",\n")}\n        }`;
    }).join(',\n');
    
    outStr += qs + '\n    ]';
    if (i < finalKeys.length - 1) outStr += ',\n';
    else outStr += '\n';
}

outStr += '};\n\nmodule.exports = window.QUIZ_DATA;\n';
fs.writeFileSync('quiz_data.js', outStr, 'utf8');
console.log(`Rewrote quiz_data safely. Final Civics count will be ~${loadedCount}`);
