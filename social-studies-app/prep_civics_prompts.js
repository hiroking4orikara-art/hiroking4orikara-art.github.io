const fs = require('fs');

try {
    const missingCivics = JSON.parse(fs.readFileSync('remaining_missing_civics.json', 'utf8'));

    // Prepare translation mapping to generate English keywords for prompts
    const keywordMap = {
        "local_tax": ["地方税"],
        "national_tax": ["国税"],
        "tax_return": ["確定申告"],
        "public_finance": ["財政"],
        "revenue": ["歳入"],
        "expenditure": ["歳出"],
        "budget": ["予算"],
        "business_cycle": ["景気変動"],
        "economy_trend": ["景気の動向"],
        "economic_boom": ["好況", "好景気"],
        "basic_environment_act": ["環境基本法"],
        "basic_act_for_environmental_pollution_control": ["公害対策基本法"],
        "ministry_of_the_environment": ["環境省"],
        "sound_material_cycle_society": ["循環型社会"],
        "three_rs": ["3R", "リデュース", "リユース", "リサイクル"],
        "public_bond": ["公債", "国債"],
        "local_bond": ["地方債"],
        "fiscal_investment_and_loan_program": ["財政投融資"],
        "tax_cut": ["減税"],
        "money": ["お金", "貨幣", "通貨"],
        "exchange_rate": ["為替レート", "為替相場"],
        "social_welfare": ["社会福祉"],
        "public_health": ["公衆衛生"],
        "nursing_care_insurance": ["介護保険"],
        "service_dog": ["介助犬", "盲導犬"],
        "four_major_pollution_diseases": ["四大公害病"],
        "dioxin": ["ダイオキシン"],
        "citizens_movement": ["市民運動"],
        "polluter_pays_principle": ["汚染者負担の原則", "PPP"],
        "consumption_tax": ["消費税"],
        "income_tax": ["所得税"],
        "progressive_taxation": ["累進課税"],
        "gini_coefficient": ["ジニ係数"],
        "weak_yen": ["円安"],
        "public_assistance": ["生活保護"],
        "environmental_tax": ["環境税"],
        "eco_mark": ["エコマーク"],
        "zero_emission": ["ゼロエミッション"],
        "national_park": ["国立公園"],
        "social_insurance": ["社会保険"],
        "medical_insurance": ["医療保険"],
        "pension_insurance": ["年金保険"],
        "employment_insurance": ["雇用保険"],
        "workers_compensation_insurance": ["労災保険", "労働者災害補償保険"],
        "basic_act_for_establishing_a_sound_material_cycle_society": ["循環型社会形成推進基本法"],
        "non_performing_loans": ["不良債権"],
        "financial_deregulation": ["金融自由化"],
        "deflationary_spiral": ["デフレスパイラル"],
        "software": ["ソフトウェア"],
        "it_industry": ["IT産業"],
        "venture_company": ["ベンチャー企業"],
        "finite_energy": ["有限なエネルギー", "化石燃料"],
        "renewable_energy": ["再生可能エネルギー"],
        "alternative_energy": ["代替エネルギー"],
        "ubiquitous_society": ["ユビキタス社会"],
        "information_morals": ["情報モラル"],
        "artificial_intelligence": ["人工知能", "AI"],
        "global_standard": ["グローバル・スタンダード"],
        "self_sufficiency_rate": ["自給率", "食料自給率"],
        "internet": ["インターネット"],
        "iot": ["IoT"],
        "internet_banking": ["インターネットバンキング"],
        "sns": ["SNS"],
        "virtual_reality": ["VR", "仮想現実"],
        "digital_divide": ["情報格差", "デジタルデバイド"],
        "foreign_resident": ["在日外国人", "外国人労働者"],
        "international_cooperation": ["国際協力"],
        "international_division_of_labor": ["国際分業"],
        "international_competition": ["国際競争"],
        "average_life_expectancy": ["平均寿命"],
        "birth_rate": ["出生率"],
        "basic_act_declining_birthrate": ["少子化社会対策基本法"],
        "elderly_care_by_elderly": ["老老介護"],
        "dynamic_engagement_all_citizens": ["一億総活躍社会"],
        "science": ["科学", "科学技術"],
        "cultural_properties": ["文化財"],
        "cool_japan": ["クールジャパン"],
        "total_fertility_rate": ["合計特殊出生率"],
        "family": ["家族"],
        "civil_law": ["民法"],
        "marriage": ["婚姻", "結婚"],
        "late_marriage": ["晩婚化"],
        "inheritance": ["相続"],
        "ie_system": ["家制度"],
        "different_surnames": ["夫婦別姓"],
        "children_on_waiting_lists": ["待機児童"],
        "social_group": ["社会集団"],
        "social_being": ["社会的存在"],
        "contract": ["契約"],
        "conflict": ["対立"],
        "efficiency": ["効率"],
        "fairness": ["公正", "公平"],
        "agreement": ["合意"],
        "rules": ["きまり", "ルール"],
        "rights": ["権利"],
        "duties": ["義務", "責任"],
        "meiji_constitution": ["大日本帝国憲法", "明治憲法"],
        "sovereign": ["主権者"],
        "us_constitution": ["アメリカ合衆国憲法"],
        "energy_conservation": ["省エネルギー"],
        "hybrid_car": ["ハイブリッド車"],
        "electric_car": ["電気自動車", "EV"],
        "bill_of_rights": ["権利章典"],
        "fuel_cell_vehicle": ["燃料電池車"],
        "cop3_kyoto_conference": ["地球温暖化防止京都会議", "COP3"],
        "kyoto_protocol": ["京都議定書"],
        "global_environmental_issues": ["地球環境問題"],
        "un_conference_human_environment": ["国連人間環境会議"],
        "unep": ["国連環境計画", "UNEP"],
        "earth_summit": ["地球サミット", "国連環境開発会議"],
        "cop": ["気候変動枠組条約締約国会議"],
        "unfccc": ["気候変動枠組条約"],
        "paris_agreement": ["パリ協定"],
        "national_trust": ["ナショナル・トラスト"],
        "developed_country": ["先進国"],
        "developing_country": ["発展途上国"],
        "emerging_country": ["新興国"],
        "literacy_rate": ["識字率"],
        "north_south_problem": ["南北問題"],
        "south_south_problem": ["南南問題"],
        "sovereign_state": ["主権国家"],
        "non_intervention": ["内政不干渉の原則", "内政不干渉"],
        "sovereign_equality": ["主権平等の原則", "主権平等"],
        "bandung_conference": ["アジア・アフリカ会議", "バンドン会議"],
        "ticad": ["アフリカ開発会議", "TICAD"],
        "international_society": ["国際社会"],
        "international_law": ["国際法"],
        "regionalism": ["地域主義"],
        "national_anthem": ["国歌"],
        "national_flag": ["国旗"],
        "microcredit": ["マイクロクレジット"],
        "street_children": ["ストリートチルドレン"],
        "hunger_map": ["ハンガーマップ"],
        "convention_on_rights_of_child": ["子どもの権利条約"],
        "right_to_participate": ["参加する権利"],
        "gnp": ["国民総生産", "GNP"],
        "gdp": ["国内総生産", "GDP"],
        "gni": ["国民総所得", "GNI"],
        "apec": ["アジア太平洋経済協力", "APEC"],
        "fta": ["自由貿易協定", "FTA"],
        "usmca": ["米国・メキシコ・カナダ協定", "USMCA"],
        "asian_nies": ["アジアNIES", "新興工業経済地域"],
        "united_nations": ["国際連合", "国連"],
        "landmine": ["対人地雷"],
        "ottawa_treaty": ["対人地雷全面禁止条約", "オタワ条約"],
        "nuclear_disarmament": ["核軍縮"],
        "inf_treaty": ["中距離核戦力全廃条約", "INF"],
        "start_treaty": ["戦略兵器削減条約", "START", "新START"],
        "ptbt": ["部分的核実験禁止条約", "PTBT"],
        "npt": ["核兵器不拡散条約", "NPT"],
        "unesco": ["国連教育科学文化機関", "UNESCO"],
        "who": ["世界保健機関", "WHO"],
        "imf": ["国際通貨基金", "IMF"],
        "unicef": ["国連児童基金", "UNICEF"],
        "unhcr": ["国連難民高等弁務官事務所", "UNHCR"],
        "unctad": ["国連貿易開発会議", "UNCTAD"],
        "oecd": ["経済協力開発機構", "OECD"],
        "iaea": ["国際原子力機関", "IAEA"],
        "wto": ["世界貿易機関", "WTO"],
        "epa": ["経済連携協定", "EPA"],
        "tpp": ["環太平洋パートナーシップ協定", "TPP"],
        "911_attacks": ["同時多発テロ"],
        "iraq_war": ["イラク戦争"],
        "islamic_state": ["イスラム国", "IS"],
        "ngo": ["非政府組織", "NGO"],
        "npo": ["非営利組織", "NPO"],
        "npo_act": ["NPO法", "特定非営利活動促進法"],
        "human_security": ["人間の安全保障"],
        "pdca_cycle": ["PDCAサイクル"],
        "sdgs": ["持続可能な開発目標", "SDGs"],
        "terrorism": ["テロリズム", "テロ"],
        "tpnw": ["核兵器禁止条約", "TPNW"],
        "six_party_talks": ["六者会合", "六カ国協議"],
        "g7_summit": ["主要国首脳会議", "サミット", "G7", "G8", "G20"],
        "oda": ["政府開発援助", "ODA"],
        "jica": ["国際協力機構", "JICA"],
        "jocv": ["青年海外協力隊"],
        "un_general_assembly": ["総会", "国連総会"],
        "un_security_council": ["安全保障理事会", "安保理"],
        "veto_power": ["拒否権"],
        "ctbt": ["包括的核実験禁止条約", "CTBT"]
    };

    const reverseMap = {};
    for (const [key, values] of Object.entries(keywordMap)) {
        values.forEach(val => {
            reverseMap[val] = key;
        });
    }

    const romajiMap = {
        "核家族": "nuclear_family",
        "少子高齢化": "aging_society",
        "グローバル化": "globalization",
        "多文化共生": "multiculturalism",
        "ユニバーサルデザイン": "universal_design",
        "ボランティア": "volunteer",
        "世論": "public_opinion"
    };

    const prompts = [];
    
    missingCivics.forEach((q, idx) => {
        let keyword = "civics_concept";
        const ans = q.a.replace(/（[^）]*）/g, '').trim(); // Remove parentheses content
        
        // Find best keyword
        if (reverseMap[ans]) {
            keyword = reverseMap[ans];
        } else if (romajiMap[ans]) {
            keyword = romajiMap[ans];
        } else {
            // Try partial match
            for (const key of Object.keys(reverseMap)) {
                if (ans.includes(key) || q.q.includes(key)) {
                    keyword = reverseMap[key];
                    break;
                }
            }
            if (keyword === "civics_concept") {
                 // Convert Japanese answer to a romaji or safe slug if possible, or just index
                 keyword = `concept_${idx}`;
            }
        }
        
        const safeAns = ans.replace(/[^a-zA-Z0-9]/g, '_');
        const finalKeyword = keyword !== `concept_${idx}` ? keyword : safeAns || `concept_${idx}`;

        const filename = `g_civics_new_${finalKeyword}_${Date.now() + idx}.png`;
        
        const promptText = `A conceptual and educational illustration representing "${ans}" in the context of Japanese civics, society, or economy. The image should be abstract or conceptual, clear, and visually engaging. No text, words, or letters should be visible in the image.`;

        prompts.push({
            section: q.section,
            index: q.index,
            question: q.q,
            answer: q.a,
            keyword: finalKeyword,
            filename: filename,
            prompt: promptText
        });
    });

    fs.writeFileSync('civics_missing_prompts.json', JSON.stringify(prompts, null, 2));
    console.log(`Successfully generated ${prompts.length} prompts for missing Civics images.`);

} catch(e) {
    console.error("Error:", e);
}
