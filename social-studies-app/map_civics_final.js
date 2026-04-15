const fs = require('fs');

const missingCivics = JSON.parse(fs.readFileSync('missing_civics_detailed.json', 'utf8'));
const civicsImagesKeywords = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));

// Only the unmapped parts
const keywordMap = {
    // c_3
    "municipal_mergers": ["平成の大合併"],
    "supremacy_house_reps": ["衆議院の優越"],
    "recall": ["リコール（解職請求）"],
    "campaign_period": ["公示（告示）日から投票日の前日まで"],
    "committee": ["常任委員会"],
    "standing_committee": ["常任委員会"],
    "referendum": ["住民投票"],
    "local_referendum": ["住民投票"],
    "veto_power": ["再議権（拒否権）", "拒否権"],

    // c_4
    "oligopoly": ["寡占（かせん）"],
    "primary_balance": ["プライマリー・バランス"],
    "nursing_care_insurance": ["介護保険制度", "介護保険"],
    "multiple_debts": ["多重債務"],
    "non_regular_employee": ["非正規雇用"],
    "weak_yen": ["得になる（少ない円でドルを買えるから）", "円安"], // Contextual match for question
    "pay_as_you_go_system": ["賦課方式（ふかほうしき）", "賦課方式"],
    "non_price_competition": ["非価格競争"],
    "arbitration": ["仲裁"],

    // c_5
    "un_security_council": ["安全保障理事会"],
    "china": ["中国"], // Maybe unmapped
    "global_warming": ["地球温暖化", "global_environmental_issues"],
    "sustainable_development": ["持続可能な開発"],
    "solar_power": ["太陽光発電", "renewable_energy"],
    "north_south_problem": ["南北問題"],
    "pko": ["PKO（国連平和維持活動）", "PKO"],
    "ramsar_convention": ["ラムサール条約"],
    "washington_convention": ["ワシントン条約"],
    "minamata_disease": ["水俣病", "four_major_pollution_diseases"],
    "itai_itai_disease": ["イタイイタイ病"],
    "ozone_layer": ["オゾン層"],
    "acid_rain": ["酸性雨"],
    "desertification": ["砂漠化"],
    "rare_metal": ["レアメタル（希少金属）", "rare_metal"],
    "shale_gas": ["シェールガス", "alternative_energy"],
    "cogeneration": ["コージェネレーションシステム", "energy_conservation"],
    "human_security": ["人間の安全保障"],
    "ottawa_treaty": ["対人地雷全面禁止条約（オタワ条約）"],
    "brics": ["BRICS（ブリックス）", "emerging_country"],
    "palestine_problem": ["パレスチナ問題", "conflict"],
    "biofuel": ["バイオ燃料", "renewable_energy"],
    "ilo": ["ILO（国際労働機関）"],
    "vienna_convention": ["ウィーン条約", "global_environmental_issues"],

    // cw_1
    "human_rights": ["基本的人権"],
    "magna_carta": ["マグナカルタ（大憲章）", "マグナ・カルタ"],
    "bill_of_rights": ["権利の章典"],
    "john_locke": ["ロック"],
    "montesquieu": ["モンテスキュー", "separation_of_powers"],
    "rousseau": ["ルソー"],
    "constitutionalism": ["立憲主義"],
    "constitution_of_japan": ["日本国憲法"],
    "pacifism": ["平和主義"],
    "symbiotic_society": ["共生社会", "multicultural_society"],
    "normalization": ["ノーマライゼーション"],
    "sexual_harassment": ["セクシュアル・ハラスメント（セクハラ）"],
    "gender_equal_society": ["男女共同参画社会", "男女共同参画社会基本法"],
    "civil_liberties": ["自由権"],
    "freedom_of_person": ["身体の自由"],
    "right_to_remain_silent": ["黙秘権"],
    "mental_freedoms": ["精神の自由"],
    "freedom_of_religion": ["信教の自由"],
    "freedom_of_assembly_and_association": ["集会・結社・表現の自由", "assembly_association"],
    "economic_freedom": ["経済活動の自由"],
    "right_to_life": ["生存権", "minimum_living"],
    "pension": ["年金", "pension_insurance"],
    "right_to_education": ["教育を受ける権利", "education_right"],
    "right_to_work": ["勤労の権利"],
    "fundamental_labor_rights": ["労働基本権", "labor_rights"],
    "right_to_organize": ["団結権"],
    "clone": ["クローン"],
    "in_vitro_fertilization": ["体外受精", "in_vitro"],
    "aids": ["エイズ（後天性免疫不全症候群）", "aids"],
    "politics": ["政治"],
    "democracy": ["民主主義"],
    "direct_democracy": ["直接民主制"],
    "indirect_democracy": ["間接民主制（代議制）", "parliamentary_democracy"],
    "majority_rule": ["多数決の原理"],
    "respect_for_minority_opinions": ["少数意見の尊重", "minority_rights"],
    "right_to_vote": ["選挙権", "election_right"],
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
    "amnesty_international": ["アムネスティ・インターナショナル", "ngo"],
    "genetic_diagnosis": ["遺伝子診断"],
    "genetically_modified_organism": ["遺伝子組み換え食品", "gmo"],
    "volunteer": ["ボランティア"]
};

// Also apply the mapping
const answerToKeyword = {};
for (const [kw, answers] of Object.entries(keywordMap)) {
    for (const a of answers) {
        answerToKeyword[a] = kw;
    }
}

const usedImages = new Set();
const applyScriptStr = fs.existsSync('apply_civics_mappings.js') ? fs.readFileSync('apply_civics_mappings.js', 'utf8') : '';
const regex = /answerImg: "assets\/images\/civics\/(g_civics_[^"]+\.png)"/g;
let match;
while ((match = regex.exec(applyScriptStr)) !== null) {
    usedImages.add(match[1]);
}

const mappings = [];
const unmatched = [];

missingCivics.forEach(q => {
    let bestMatch = null;

    // Direct string match or substring match
    for (const [kw, answers] of Object.entries(keywordMap)) {
        if (answers.some(a => q.a.includes(a) || a.includes(q.a))) {
            // Find an image that has this as a keyword (exact or sub)
            for (const img of civicsImagesKeywords) {
                if (usedImages.has(img.filename)) continue;
                if (img.keyword.includes(kw) || kw.includes(img.keyword) || answers.some(a => a === img.keyword)) {
                    bestMatch = img;
                    break;
                }
            }
            if (!bestMatch) {
                // Try fallback logic, maybe the keyword from image is somewhere in the mapped keywords
                for (const img of civicsImagesKeywords) {
                    if (usedImages.has(img.filename)) continue;
                    if (answers.some(a => a.toLowerCase() === img.keyword.toLowerCase())) {
                        bestMatch = img;
                        break;
                    }
                }
            }
        }
        if (bestMatch) break;
    }

    if (bestMatch) {
        usedImages.add(bestMatch.filename);
        mappings.push({ question: q, image: bestMatch });
    } else {
        unmatched.push(q);
    }
});

let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
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
console.log(`Successfully applied ${replaced} NEW civics images to quiz_data.js!`);
console.log(`Unmatched slightly remaining: ${unmatched.length}`);
