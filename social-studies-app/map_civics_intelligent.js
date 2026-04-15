const fs = require('fs');
const path = require('path');

try {
    const missingCivics = JSON.parse(fs.readFileSync('missing_civics_detailed.json', 'utf8'));
    const civicsImages = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));

    // Manual mapping dictionary for some key terms to map English filenames to Japanese answers
    const keywordMap = {
        "nuclear_family": ["核家族"],
        "aging_society_with_fewer_children": ["少子高齢化"],
        "information_society": ["情報社会", "情報化社会"],
        "globalization": ["グローバル化"],
        "multicultural_society": ["多文化共生"],
        "traditional_culture": ["伝統文化"],
        "gender_equal_society": ["男女共同参画社会基本法"],
        "universal_design": ["ユニバーサルデザイン"],
        "barrier_free": ["バリアフリー"],
        "information_literacy": ["情報リテラシー"],
        "sustainable_development": ["持続可能な社会"],
        "volunteer": ["ボランティア"],
        "intangible_cultural_property": ["無形文化財"],
        "mass_media": ["マスメディア"],
        "public_opinion": ["世論"],
        "intellectual_property": ["知的財産権"],
        "copyright": ["著作権"],
        "patent": ["特許権"],
        "annual_events": ["年中行事"],
        "rites_of_passage": ["通過儀礼"],
        "npo": ["NPO"],
        "neighborhood_association": ["町内会", "自治会"],
        "cultural_friction": ["文化摩擦"],
        "food_safety": ["食の安全"],
        "ethical_consumption": ["エシカル消費"],
        
        "respect_for_fundamental_human_rights": ["基本的人権の尊重"],
        "popular_sovereignty": ["国民主権"],
        "pacifism": ["平和主義"],
        "public_welfare": ["公共の福祉"],
        "equality_under_the_law": ["法の下の平等"],
        "right_to_life": ["生存権"],
        "freedom_of_expression": ["表現の自由"],
        "freedom_of_person": ["身体の自由"],
        "political_rights": ["参政権"],
        "environmental_right": ["環境権"],
        "right_to_know": ["知る権利"],
        "asahi_lawsuit": ["朝日訴訟"],
        "right_of_access": ["アクセス権"],
        "informed_consent": ["インフォームド・コンセント"],
        "universal_declaration_of_human_rights": ["世界人権宣言", "udhr"],
        "international_covenant_on_civil_and_political_rights": ["国際人権規約"],
        "convention_on_the_rights_of_the_child": ["子どもの権利条約"],
        "equal_employment_opportunity_act": ["男女雇用機会均等法"],
        "magna_carta": ["マグナ・カルタ"],
        "declaration_of_the_rights_of_man": ["フランス人権宣言"],
        "weimar_constitution": ["ワイマール憲法", "weimar"],
        "separation_of_religion_and_state": ["政教分離"],
        "academic_freedom": ["学問の自由"],
        "freedom_to_choose_occupation": ["職業選択の自由"],
        "principle_of_legality": ["罪刑法定主義"],
        "warrant_requirement": ["令状主義"],
        "right_to_remain_silent": ["黙秘権"],
        "double_jeopardy": ["一事不再理"],
        "right_to_self_determination": ["自己決定権"],
        "information_disclosure": ["情報公開"],
        "ainu": ["アイヌ"],
        "disabled_persons": ["障害者基本法"],
        
        "separation_of_powers": ["三権分立"],
        "national_diet": ["国会", "diet"],
        "cabinet": ["内閣", "the_cabinet"],
        "courts": ["裁判所", "憲法の番人"],
        "dissolution": ["解散"],
        "impeachment_court": ["弾劾裁判所"],
        "direct_election": ["直接選挙"],
        "parallel_voting_system": ["小選挙区比例代表並立制"],
        "local_autonomy": ["地方自治"],
        "local_allocation_tax": ["地方交付税交付金"],
        "wasted_votes": ["死票", "abstention"],
        "vote_disparity": ["一票の格差"],
        "political_party_subsidy": ["政党交付金", "party_subsidy"],
        "committee_system": ["委員会", "committee"],
        "right_to_investigate_state_affairs": ["国政調査権"],
        "administrative_commission": ["行政委員会"],
        "public_servants": ["公務員", "civil_servants"],
        "open_court": ["裁判の公開"],
        "prosecution_review_commission": ["検察審査会"],
        "japan_legal_support_center": ["法テラス", "hou_terrace"],
        "decentralization": ["地方分権"],
        "statutory_entrusted_function": ["法定受託事務"],
        "great_heisei_mergers": ["平成の大合併", "municipal_mergers"],
        "supremacy_of_the_house_of_representatives": ["衆議院の優越"],
        "ordinary_session": ["常会", "通常国会", "ordinary_session"],
        "dhondt_method": ["ドント式", "dhondt"],
        "cabinet_meeting": ["閣議", "cabinet_meeting"],
        "local_referendum": ["住民投票", "referendum"],
        "right_of_direct_demand": ["直接請求権", "direct_demand"],
        "recall": ["リコール", "解職請求"],
        "saiban_in_system": ["裁判員制度", "saibanin_system"],
        "standing_committee": ["常任委員会"],
        "veto": ["再議権", "拒否権"],
        "campaign_period": ["公示", "告示"],
        
        "quantity_demanded": ["需要量"],
        "equilibrium_price": ["均衡価格"],
        "oligopoly": ["寡占"],
        "antimonopoly_act": ["独占禁止法"],
        "joint_stock_company": ["株式会社"],
        "bank_of_japan": ["日本銀行"],
        "inflation": ["インフレーション"],
        "indirect_tax": ["間接税"],
        "progressive_taxation": ["累進課税"],
        "social_security": ["社会保障"],
        "cooling_off": ["クーリング・オフ", "cooling_off"],
        "product_liability_act": ["製造物責任法", "PL法"],
        "three_labor_rights": ["労働三権"],
        "strong_yen": ["円高", "strong_yen"],
        "government_bond": ["国債", "公債", "national_bond"],
        "primary_balance": ["プライマリー・バランス"],
        "long_term_care_insurance": ["介護保険制度", "nursing_care_insurance"],
        "contract": ["契約"],
        "basic_act_on_consumer_policies": ["消費者基本法"],
        "multiple_debts": ["多重債務"],
        "credit_card": ["クレジットカード"],
        "corporate_social_responsibility": ["CSR", "企業の社会的責任"],
        "non_regular_employment": ["非正規雇用", "non_regular_employee"],
        "work_life_balance": ["ワーク・ライフ・バランス", "work_life_balance"],
        "direct_to_indirect_tax_ratio": ["直間比率"],
        "pay_as_you_go_system": ["賦課方式"],
        "non_price_competition": ["非価格競争"],
        "cartel": ["カルテル"]
    };

    // Build reverse map for fast matching
    const answerToKeyword = {};
    for (const [kw, answers] of Object.entries(keywordMap)) {
        for (const a of answers) {
            answerToKeyword[a.toLowerCase()] = kw;
        }
    }

    const mappings = [];
    const usedImages = new Set();

    console.log("Attempting to map missing questions...");
    
    // Fallback: If answer isn't strictly in map, try exact match of English translation to keyword
    const matchImage = (question) => {
        let bestMatch = null;
        let highestScore = 0;

        for (const img of civicsImages) {
            if (usedImages.has(img.filename)) continue;

            const keywordParts = img.keyword.split('_');
            
            // Hardcoded strict checks based on answer
            let score = 0;
            
            // Check dictionary
            for (const [kw, answers] of Object.entries(keywordMap)) {
                if (answers.some(a => question.a.includes(a))) {
                    if (img.keyword.includes(kw) || kw.includes(img.keyword)) {
                        score += 50; 
                    }
                }
            }

            // Check if Image keyword matches Answer directly (romaji or english equivalent)
            const ansParams = question.a.toLowerCase();
            if (ansParams.includes(img.keyword.replace(/_/g, ' '))) score += 10;
            if (img.keyword === 'saibanin_system' && ansParams.includes('裁判員')) score += 50;
            if (img.keyword === 'dhondt' && ansParams.includes('ドント')) score += 50;

            if (score > highestScore) {
                highestScore = score;
                bestMatch = img;
            }
        }
        
        return { bestMatch, score: highestScore };
    };

    const results = [];
    missingCivics.forEach(q => {
        const { bestMatch, score } = matchImage(q);
        if (bestMatch && score > 0) {
            mappings.push({
                question: q,
                image: bestMatch
            });
            usedImages.add(bestMatch.filename);
            results.push(`MATCHED: [${q.section} Q${q.index}] "${q.a}" -> ${bestMatch.filename} (Score: ${score})`);
        } else {
            results.push(`UNMATCHED: [${q.section} Q${q.index}] "${q.a}"`);
        }
    });

    fs.writeFileSync('civics_mapping_results.txt', results.join('\n'));
    console.log(`Matched ${mappings.length} out of ${missingCivics.length} missing questions.`);
    
    // Create the actual application script using these mappings
    const applyScript = `
const fs = require('fs');
const path = require('path');

const mappings = ${JSON.stringify(mappings, null, 2)};
let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
let replaced = 0;

mappings.forEach(m => {
    const qEscaped = m.question.q.replace(/[.*+?^\\$\\{\\}()|[\\]\\\\]/g, '\\\\$&'); 
    const blockRegex = new RegExp(\`(q:\\\\s*"\${qEscaped}"[\\\\s\\\\S]*?)(a:\\\\s*".*?")(\\\\n*\\\\s*\\\\})\`, 'g');
    
    const match = blockRegex.exec(quizDataStr);
    if (match) {
        const replacement = \`\${match[1]}\${match[2]},\\\\n            answerImg: "assets/images/civics/\${m.image.filename}",\\\\n            imgCaption: "※画像はイメージです"\${match[3]}\`;
        quizDataStr = quizDataStr.replace(match[0], replacement);
        replaced++;
    } else {
        // Try with comment
        const blockRegex2 = new RegExp(\`(q:\\\\s*"\${qEscaped}"[\\\\s\\\\S]*?)(comment:\\\\s*".*?")(\\\\n*\\\\s*\\\\})\`, 'g');
        const match2 = blockRegex2.exec(quizDataStr);
        if (match2) {
            const replacement = \`\${match2[1]}\${match2[2]},\\\\n            answerImg: "assets/images/civics/\${m.image.filename}",\\\\n            imgCaption: "※画像はイメージです"\${match2[3]}\`;
            quizDataStr = quizDataStr.replace(match2[0], replacement);
            replaced++;
        }
    }
});

fs.writeFileSync('quiz_data.js', quizDataStr, 'utf8');
console.log(\`Successfully applied \${replaced} civics images to quiz_data.js!\`);
`;

    fs.writeFileSync('apply_civics_mappings.js', applyScript);
    console.log("Wrote apply_civics_mappings.js");

} catch(e) {
    console.error("Error:", e);
}
