const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

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

    "china": ["中国"], // might not exist
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
    "symbiotic_society": ["共生社会", "multicultural_society"],
    "normalization": ["ノーマライゼーション"],
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
    "universal_declaration_of_human_rights": ["世界人権宣言", "human_rights_declaration"],
    "international_covenant_on_human_rights": ["国際人権規約", "human_rights_covenant"],
    "amnesty_international": ["アムネスティ・インターナショナル", "amnesty"],
    "genetic_diagnosis": ["遺伝子診断"],
    "genetically_modified_organism": ["遺伝子組み換え食品", "gmo"],
    "volunteer": ["ボランティア"]
};

let missingList = [];
for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach((q, index) => {
            let hasImg = false;
            if (q.answerImg && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
            if (q.img && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
            if (!hasImg) {
                missingList.push({ section, index, q: q.q, a: q.a, comment: q.comment });
            }
        });
    }
}

const mappings = [];
const unmatched = [];

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
    
    if (!bestMatch) bestMatch = fallbackMatch;

    if (bestMatch) {
        mappings.push({ question: q, image: bestMatch });
    } else {
        unmatched.push(q);
    }
});

let quizDataStr = parsedDataStr;
let replaced = 0;

mappings.forEach(m => {
    const qEscaped = m.question.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    
    // Sometimes there are multiple identical questions. We just want to replace the first without an answerImg.
    const blockRegex = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(a:\\s*".*?")(\\n*\\s*\\})`, 'g');
    let replacedInRegex = false;
    
    quizDataStr = quizDataStr.replace(blockRegex, (match, p1, p2, p3) => {
        if (!replacedInRegex && !match.includes('answerImg:')) {
            replacedInRegex = true;
            return `${p1}${p2},\n            answerImg: "assets/images/civics/${m.image.filename}",\n            imgCaption: "※画像はイメージです"${p3}`;
        }
        return match;
    });

    if (replacedInRegex) {
        replaced++;
    } else {
        // Try with comment
        const blockRegex2 = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(comment:\\s*".*?")(\\n*\\s*\\})`, 'g');
        quizDataStr = quizDataStr.replace(blockRegex2, (match, p1, p2, p3) => {
            if (!replacedInRegex && !match.includes('answerImg:')) {
                replacedInRegex = true;
                return `${p1}${p2},\n            answerImg: "assets/images/civics/${m.image.filename}",\n            imgCaption: "※画像はイメージです"${p3}`;
            }
            return match;
        });
        if (replacedInRegex) replaced++;
    }
});

fs.writeFileSync('quiz_data.js', quizDataStr, 'utf8');
console.log(`Successfully extended map and applied ${replaced} civics images using reuse logic!`);
console.log(`Unmatched remaining: ${unmatched.length}`);
if(unmatched.length > 0) console.log(unmatched.map(u => u.a).join(', '));
