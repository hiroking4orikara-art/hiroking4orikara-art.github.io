const fs = require('fs');

const missingCivics = JSON.parse(fs.readFileSync('missing_civics_detailed.json', 'utf8'));
const civicsImagesKeywords = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));

// Based on remaining.txt
const keywordMap = {
    // 住民投票 (referendum, local_referendum) - wait, it is in unmatched images as referendum
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

    "china": ["中国"], // might not exist
    "pko": ["PKO（国連平和維持活動）", "pko"],
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
    "symbiotic_society": ["共生社会", "multicultural_society"],
    "normalization": ["ノーマライゼーション"],
    "sexual_harassment": ["セクシュアル・ハラスメント（セクハラ）"],
    "gender_equal_society": ["男女共同参画社会"],
    "civil_liberties": ["自由権"],
    "freedom_of_person": ["身体の自由"],
    "right_to_remain_silent": ["黙秘権"],
    "mental_freedoms": ["精神の自由", "mental_freedoms"],
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
    "right_to_claim": ["請求権", "right_to_claim"],
    "state_redress_claim": ["国家賠償請求権", "state_redress"],
    "criminal_compensation_claim": ["刑事補償請求権", "criminal_compensation"],
    "right_to_know": ["知る権利", "right_to_know"],
    "privacy_right": ["プライバシーの権利", "privacy"],
    "personal_information_protection_law": ["個人情報保護法", "personal_info"],
    "portrait_rights": ["肖像権"],
    "power_harassment": ["パワーハラスメント（パワハラ）"],
    "right_to_self_determination": ["自己決定権", "self_determination"],
    "right_to_pursue_happiness": ["幸福追求権", "happiness_pursuit"],
    "environmental_right": ["環境権", "environmental_right"],
    "environmental_assessment": ["環境アセスメント（環境影響評価）", "environmental_assessment"],
    "universal_declaration_of_human_rights": ["世界人権宣言", "human_rights_declaration"],
    "international_covenant_on_human_rights": ["国際人権規約", "human_rights_covenant"],
    "amnesty_international": ["アムネスティ・インターナショナル", "amnesty"],
    "genetic_diagnosis": ["遺伝子診断"],
    "genetically_modified_organism": ["遺伝子組み換え食品", "gmo"],
    "volunteer": ["ボランティア"]
};

let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');

const regex = /answerImg:\s*"assets\/images\/civics\/(g_civics_[^"]+\.png)"/g;
const usedImages = new Set();
let match;
while ((match = regex.exec(quizDataStr)) !== null) {
    usedImages.add(match[1]);
}
console.log(`Already used images: ${usedImages.size}`);

const mappings = [];
const unmatched = [];
const mappedIndices = new Set();

missingCivics.forEach(q => {
    let bestMatch = null;
    let fallbackMatch = null;

    for (const [kw, answers] of Object.entries(keywordMap)) {
        if (answers.some(a => q.a.includes(a) || a.includes(q.a) || q.q.includes(a))) {
            for (const img of civicsImagesKeywords) {
                if (usedImages.has(img.filename)) continue;
                
                // Precise match
                if (img.keyword.toLowerCase() === kw.toLowerCase() || answers.some(a => a.toLowerCase() === img.keyword.toLowerCase())) {
                    bestMatch = img;
                    break;
                }
                // Partial match
                if (img.keyword.toLowerCase().includes(kw.toLowerCase()) || kw.toLowerCase().includes(img.keyword.toLowerCase())) {
                    fallbackMatch = img;
                }
            }
        }
        if (bestMatch) break;
    }
    
    if (!bestMatch) bestMatch = fallbackMatch;

    if (bestMatch) {
        usedImages.add(bestMatch.filename);
        mappings.push({ question: q, image: bestMatch });
        mappedIndices.add(q.section + '_' + q.index);
    } else {
        unmatched.push(q);
    }
});

let replaced = 0;

mappings.forEach(m => {
    const qEscaped = m.question.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    const blockRegex = new RegExp('(q:\\s*"' + qEscaped + '"[\\s\\S]*?)(a:\\s*".*?")(\\n*\\s*\\})', 'g');
    
    let matchFound = blockRegex.exec(quizDataStr);
    if (matchFound) {
        const replacement = `${matchFound[1]}${matchFound[2]},\n            answerImg: "assets/images/civics/${m.image.filename}",\n            imgCaption: "※画像はイメージです"${matchFound[3]}`;
        quizDataStr = quizDataStr.replace(matchFound[0], replacement);
        replaced++;
    } else {
        const blockRegex2 = new RegExp('(q:\\s*"' + qEscaped + '"[\\s\\S]*?)(comment:\\s*".*?")(\\n*\\s*\\})', 'g');
        const match2 = blockRegex2.exec(quizDataStr);
        if (match2) {
            const replacement = `${match2[1]}${match2[2]},\n            answerImg: "assets/images/civics/${m.image.filename}",\n            imgCaption: "※画像はイメージです"${match2[3]}`;
            quizDataStr = quizDataStr.replace(match2[0], replacement);
            replaced++;
        }
    }
});

fs.writeFileSync('quiz_data.js', quizDataStr, 'utf8');
console.log(`Successfully extended map and applied ${replaced} NEW civics images!`);
console.log(`Unmatched remaining: ${unmatched.length}`);
