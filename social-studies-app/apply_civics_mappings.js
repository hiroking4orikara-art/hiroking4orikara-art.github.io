
const fs = require('fs');
const path = require('path');

const mappings = [
  {
    "question": {
      "section": "c_02_human_rights",
      "index": 35,
      "q": "1919年にドイツで制定された憲法。世界ではじめて社会権が保障された憲法は何か。",
      "a": "ワイマール憲法"
    },
    "image": {
      "filename": "g_civics_1_weimar_constitution_1773475478108.png",
      "unitNum": "1",
      "keyword": "weimar_constitution"
    }
  },
  {
    "question": {
      "section": "c_02_human_rights",
      "index": 40,
      "q": "1989年に国際連合総会で採択された、子どもの基本的人権を国際的に保障することを目的とした条約を何というか。日本は1994年に批准した。",
      "a": "子どもの権利条約（児童の権利条約）"
    },
    "image": {
      "filename": "g_civics_41_rights_1773581277746.png",
      "unitNum": "41",
      "keyword": "rights"
    }
  },
  {
    "question": {
      "section": "c_02_human_rights",
      "index": 42,
      "q": "アメリカ合衆国、カナダ、メキシコの3か国間で2018年に署名された、NAFTA（北米自由貿易協定）に代わる新たな協定をアルファベットで何というか。",
      "a": "USMCA"
    },
    "image": {
      "filename": "g_civics_46_usmca_1773583012380.png",
      "unitNum": "46",
      "keyword": "usmca"
    }
  },
  {
    "question": {
      "section": "c_02_human_rights",
      "index": 43,
      "q": "GATT（関税および貿易に関する一般協定）にかわり設立された、世界における自由貿易を促進することを目的とする国際機関をアルファベットで何というか。",
      "a": "WTO"
    },
    "image": {
      "filename": "g_civics_48_wto_1773583627153.png",
      "unitNum": "48",
      "keyword": "wto"
    }
  },
  {
    "question": {
      "section": "c_02_human_rights",
      "index": 44,
      "q": "国どうしの間で、貿易の自由化だけでなく、人の移動や投資などさまざまな分野において協力し、経済協力をしようとする協定をアルファベット3文字で何というか。",
      "a": "EPA"
    },
    "image": {
      "filename": "g_civics_48_epa_1773583640184.png",
      "unitNum": "48",
      "keyword": "epa"
    }
  },
  {
    "question": {
      "section": "c_02_human_rights",
      "index": 45,
      "q": "アジア・太平洋地域において、経済分野で自由な協力をしようという協定をアルファベットで何というか。2018年に11か国で発効した。",
      "a": "TPP"
    },
    "image": {
      "filename": "g_civics_48_tpp_1773583656472.png",
      "unitNum": "48",
      "keyword": "tpp"
    }
  },
  {
    "question": {
      "section": "c_02_human_rights",
      "index": 47,
      "q": "安全保障理事会の常任理事国がもつ、1か国でも反対すると議決できないという権利を何というか。",
      "a": "拒否権"
    },
    "image": {
      "filename": "g_civics_50_veto_power_1773584350813.png",
      "unitNum": "50",
      "keyword": "veto_power"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 39,
      "q": "公債のうち、国が発行するものを何というか。",
      "a": "国債"
    },
    "image": {
      "filename": "g_civics_30_government_1773548232644.png",
      "unitNum": "30",
      "keyword": "government"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 49,
      "q": "外国通貨に対し、円の価値が上がることを何というか。（例：1ドル＝105円から1ドル＝100円になること）",
      "a": "円高"
    },
    "image": {
      "filename": "g_civics_34_strong_yen_1773563365633.png",
      "unitNum": "34",
      "keyword": "strong_yen"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 51,
      "q": "すべての国民が健康で文化的な生活を送ることができるように、国が国民の最低限度の生活を保障しようとするしくみを何というか。",
      "a": "社会保障"
    },
    "image": {
      "filename": "g_civics_34_social_security_1773563396666.png",
      "unitNum": "34",
      "keyword": "social_security"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 66,
      "q": "必要な情報を選び、活用する能力のことを何というか。",
      "a": "情報リテラシー"
    },
    "image": {
      "filename": "g_civics_37_information_literacy_1773564914319.png",
      "unitNum": "37",
      "keyword": "information_literacy"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 70,
      "q": "マスメディアやインターネットなどが身近にあり、それらがもたらす情報が生活に大きな役割を果たしている社会を何というか。",
      "a": "情報社会（IT社会）"
    },
    "image": {
      "filename": "g_civics_37_information_society_1773564999779.png",
      "unitNum": "37",
      "keyword": "information_society"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 71,
      "q": "スマートフォンや家電など、様々なモノとインターネットをつなぐしくみをアルファベット3文字で何というか。",
      "a": "IoT"
    },
    "image": {
      "filename": "g_civics_37_iot_1773565028857.png",
      "unitNum": "37",
      "keyword": "iot"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 72,
      "q": "利用者同士が交流できる、インターネット上の会員制サービスをアルファベット3文字で何というか。",
      "a": "SNS"
    },
    "image": {
      "filename": "g_civics_38_sns_1773565154157.png",
      "unitNum": "38",
      "keyword": "sns"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 78,
      "q": "さまざまな国や民族の文化が共存する社会のことを何というか。",
      "a": "多文化社会（多文化共生社会）"
    },
    "image": {
      "filename": "g_civics_38_multicultural_society_1773565249931.png",
      "unitNum": "38",
      "keyword": "multicultural_society"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 85,
      "q": "歴史の中ではぐくまれ、人々の間で価値あるものとして古くから継承されてきた文化のことを何というか。",
      "a": "伝統文化"
    },
    "image": {
      "filename": "g_civics_39_traditional_culture_1773565461568.png",
      "unitNum": "39",
      "keyword": "traditional_culture"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 86,
      "q": "七夕や七五三など、毎年同じ時期に行われる昔から続く行事を何というか。",
      "a": "年中行事"
    },
    "image": {
      "filename": "g_civics_39_annual_events_1773565476098.png",
      "unitNum": "39",
      "keyword": "annual_events"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 91,
      "q": "夫婦のみ、もしくは夫婦と未婚の子ども、または父母のうち一方と未婚の子どもからなる家族形態のことを何というか。",
      "a": "核家族世帯"
    },
    "image": {
      "filename": "g_civics_39_family_1773565528418.png",
      "unitNum": "39",
      "keyword": "family"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 112,
      "q": "気候変動枠組条約締約国会議などを指す「締約国会議」の略称をアルファベット3文字で何というか。",
      "a": "COP"
    },
    "image": {
      "filename": "g_civics_43_cop_1773581887405.png",
      "unitNum": "43",
      "keyword": "cop"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 113,
      "q": "気候変動枠組条約を批准した国々による会議を何というか。1997年の第3回会議（COP3）では京都議定書が採択された。",
      "a": "気候変動枠組条約締約国会議"
    },
    "image": {
      "filename": "g_civics_11_national_diet_1773503007142.png",
      "unitNum": "11",
      "keyword": "national_diet"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 123,
      "q": "日本企業の海外支店等の所得など海外からの所得もふくめて、1年間に1国の国民が得た所得の合計をアルファベット3文字で何というか。",
      "a": "GNI"
    },
    "image": {
      "filename": "g_civics_46_gni_1773582970928.png",
      "unitNum": "46",
      "keyword": "gni"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 125,
      "q": "1963年にアメリカ、ソ連、イギリスの間で結ばれた、大気圏内と宇宙空間、水中における核実験をやめる条約をアルファベットで何というか。",
      "a": "PTBT"
    },
    "image": {
      "filename": "g_civics_47_ptbt_1773583327513.png",
      "unitNum": "47",
      "keyword": "ptbt"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 126,
      "q": "1968年に調印された、核兵器をもつ国を拡大させないための条約をアルファベットで何というか。",
      "a": "NPT"
    },
    "image": {
      "filename": "g_civics_47_npt_1773583341020.png",
      "unitNum": "47",
      "keyword": "npt"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 131,
      "q": "社会に貢献するサービスに取り組む、利益の追求を目的としない民間組織をアルファベットで何というか。",
      "a": "NPO（非営利組織）"
    },
    "image": {
      "filename": "g_civics_49_npo_1773583913643.png",
      "unitNum": "49",
      "keyword": "npo"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 132,
      "q": "日本では1998年に、一定の要件を満たせばNPOが法人として認められるようになった法律は何か。",
      "a": "特定非営利活動促進法（NPO法）"
    },
    "image": {
      "filename": "g_civics_49_npo_act_1773583929358.png",
      "unitNum": "49",
      "keyword": "npo_act"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 136,
      "q": "発展途上国に対して、先進工業国などの政府が行う資金援助や技術協力のことをアルファベット3文字で何というか。",
      "a": "ODA"
    },
    "image": {
      "filename": "g_civics_50_oda_1773584275124.png",
      "unitNum": "50",
      "keyword": "oda"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 137,
      "q": "政府開発援助（ODA）の実施業務を行っている日本の独立行政法人をアルファベットで何というか。",
      "a": "JICA（国際協力機構）"
    },
    "image": {
      "filename": "g_civics_50_jica_1773584288261.png",
      "unitNum": "50",
      "keyword": "jica"
    }
  },
  {
    "question": {
      "section": "c_03_politics",
      "index": 139,
      "q": "国際連合の主要機関の一つで、国家間における法的な争いについて、国際法にもとづき裁判を行い、平和的な解決をはかる機関を何というか。",
      "a": "国際司法裁判所"
    },
    "image": {
      "filename": "g_civics_14_courts_1773504084087.png",
      "unitNum": "14",
      "keyword": "courts"
    }
  },
  {
    "question": {
      "section": "c_04_economy",
      "index": 45,
      "q": "所得が多くなるほど税率が高くなるように設定されている課税制度を何というか。",
      "a": "累進課税"
    },
    "image": {
      "filename": "g_civics_30_tax_1773548256683.png",
      "unitNum": "30",
      "keyword": "tax"
    }
  },
  {
    "question": {
      "section": "c_04_economy",
      "index": 50,
      "q": "国際社会において、経済や文化などが国境をこえて一体化していくこと（国際化）をカタカナで何というか。",
      "a": "グローバル化"
    },
    "image": {
      "filename": "g_civics_37_globalization_1773564958033.png",
      "unitNum": "37",
      "keyword": "globalization"
    }
  },
  {
    "question": {
      "section": "c_04_economy",
      "index": 52,
      "q": "おたがいに納得し、合意した上で結ぶ約束を何というか。商品の売り買いや労働契約などがあてはまる。",
      "a": "契約"
    },
    "image": {
      "filename": "g_civics_23_consumer_contract_act_1773545506699.png",
      "unitNum": "23",
      "keyword": "consumer_contract_act"
    }
  },
  {
    "question": {
      "section": "c_04_economy",
      "index": 59,
      "q": "海外在住の国民もふくめて、1年間に1国の国民によって新たに生産された財・サービスの合計額から、中間生産物の価格を引いたものをアルファベット3文字で何というか。",
      "a": "GNP"
    },
    "image": {
      "filename": "g_civics_46_gnp_1773582944219.png",
      "unitNum": "46",
      "keyword": "gnp"
    }
  },
  {
    "question": {
      "section": "c_04_economy",
      "index": 60,
      "q": "国内にある外国企業もふくめて、1年間に1国内で新たに生産された財・サービスの合計額から、中間生産物の価格を引いたものをアルファベット3文字で何というか。",
      "a": "GDP"
    },
    "image": {
      "filename": "g_civics_46_gdp_1773582958296.png",
      "unitNum": "46",
      "keyword": "gdp"
    }
  },
  {
    "question": {
      "section": "c_04_economy",
      "index": 61,
      "q": "太平洋をとりかこむ21の国・地域が参加する経済協力組織をアルファベットで何というか。",
      "a": "APEC"
    },
    "image": {
      "filename": "g_civics_46_apec_1773582984693.png",
      "unitNum": "46",
      "keyword": "apec"
    }
  },
  {
    "question": {
      "section": "c_04_economy",
      "index": 62,
      "q": "特定の国・地域間において、関税や輸出入制限をなくすことなどを取り決めた協定をアルファベット3文字で何というか。",
      "a": "FTA"
    },
    "image": {
      "filename": "g_civics_46_fta_1773582997177.png",
      "unitNum": "46",
      "keyword": "fta"
    }
  },
  {
    "question": {
      "section": "c_04_economy",
      "index": 64,
      "q": "南北問題の解決のため、発展途上国の経済開発と貿易の促進をはかることを目的として設立された国連の機関をアルファベットで何というか。",
      "a": "UNCTAD"
    },
    "image": {
      "filename": "g_civics_48_unctad_1773583584906.png",
      "unitNum": "48",
      "keyword": "unctad"
    }
  },
  {
    "question": {
      "section": "c_04_economy",
      "index": 65,
      "q": "ヨーロッパ諸国やアメリカ合衆国、日本などが加盟する、先進国による経済協力組織をアルファベットで何というか。",
      "a": "OECD"
    },
    "image": {
      "filename": "g_civics_48_oecd_1773583598442.png",
      "unitNum": "48",
      "keyword": "oecd"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 52,
      "q": "人間環境宣言を実施するため、1972年に設立された、環境保護を目的とする国連機関を何というか。",
      "a": "国連環境計画（UNEP）"
    },
    "image": {
      "filename": "g_civics_43_unep_1773581839382.png",
      "unitNum": "43",
      "keyword": "unep"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 58,
      "q": "アフリカの開発をテーマとする国際会議で、1993年より日本が主導して開催しているものを何というか。",
      "a": "アフリカ開発会議（TICAD）"
    },
    "image": {
      "filename": "g_civics_45_ticad_1773582603582.png",
      "unitNum": "45",
      "keyword": "ticad"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 66,
      "q": "教育や科学、文化の面での協力を通じて、世界平和を促進することを目的とする国連の専門機関をアルファベットで何というか。",
      "a": "UNESCO"
    },
    "image": {
      "filename": "g_civics_47_unesco_1773583354088.png",
      "unitNum": "47",
      "keyword": "unesco"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 67,
      "q": "世界の人々の健康保持と増進を目的とする国連の専門機関をアルファベットで何というか。",
      "a": "WHO"
    },
    "image": {
      "filename": "g_civics_48_who_1773583527331.png",
      "unitNum": "48",
      "keyword": "who"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 68,
      "q": "国際通貨の安定や世界貿易の拡大をはかることを目的とする国連の専門機関をアルファベットで何というか。",
      "a": "IMF"
    },
    "image": {
      "filename": "g_civics_48_imf_1773583541428.png",
      "unitNum": "48",
      "keyword": "imf"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 69,
      "q": "飢えや病気、貧困などから子どもたちを守り、健やかな発達をうながすことを目的とする国連の機関をアルファベットで何というか。",
      "a": "UNICEF"
    },
    "image": {
      "filename": "g_civics_48_unicef_1773583556642.png",
      "unitNum": "48",
      "keyword": "unicef"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 70,
      "q": "難民を国際的に保護し支援することを目的とする国連の機関をアルファベットで何というか（1991年から緒方貞子が代表を務めた）。",
      "a": "UNHCR"
    },
    "image": {
      "filename": "g_civics_48_unhcr_1773583569153.png",
      "unitNum": "48",
      "keyword": "unhcr"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 71,
      "q": "原子力の平和的利用を促進するとともに、原子力が軍事的に利用されることを防止するために設立された国際機関をアルファベットで何というか。",
      "a": "IAEA"
    },
    "image": {
      "filename": "g_civics_48_iaea_1773583612847.png",
      "unitNum": "48",
      "keyword": "iaea"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 72,
      "q": "政府によってつくられたのではなく、民間によってつくられた国際的な協力組織をアルファベットで何というか。",
      "a": "NGO（非政府組織）"
    },
    "image": {
      "filename": "g_civics_49_ngo_1773583896329.png",
      "unitNum": "49",
      "keyword": "ngo"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 73,
      "q": "国連が2015年に定めた、2030年までに達成すべき17の目標をアルファベットで何というか。",
      "a": "SDGs（持続可能な開発目標）"
    },
    "image": {
      "filename": "g_civics_49_sdgs_1773583974277.png",
      "unitNum": "49",
      "keyword": "sdgs"
    }
  },
  {
    "question": {
      "section": "c_05_global_society",
      "index": 74,
      "q": "1996年に国連総会で採択された、地下核実験をふくむあらゆる核実験を禁止する条約をアルファベットで何というか。",
      "a": "CTBT（包括的核実験禁止条約）"
    },
    "image": {
      "filename": "g_civics_50_ctbt_1773584213024.png",
      "unitNum": "50",
      "keyword": "ctbt"
    }
  },
  {
    "question": {
      "section": "cw_1",
      "index": 10,
      "q": "主に日本国籍を持たずに日本に住んでいる人に対し、地方選挙などでの投票を認めるべきだという考えに関わる権利を何というか。",
      "a": "外国人参政権"
    },
    "image": {
      "filename": "g_civics_5_political_rights_1773480811046.png",
      "unitNum": "5",
      "keyword": "political_rights"
    }
  }
];
let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
let replaced = 0;

mappings.forEach(m => {
    const qEscaped = m.question.q.replace(/[.*+?^\$\{\}()|[\]\\]/g, '\\$&'); 
    const blockRegex = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(a:\\s*".*?")(\\n*\\s*\\})`, 'g');
    
    const match = blockRegex.exec(quizDataStr);
    if (match) {
        const replacement = `${match[1]}${match[2]},\\n            answerImg: "assets/images/civics/${m.image.filename}",\\n            imgCaption: "※画像はイメージです"${match[3]}`;
        quizDataStr = quizDataStr.replace(match[0], replacement);
        replaced++;
    } else {
        // Try with comment
        const blockRegex2 = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(comment:\\s*".*?")(\\n*\\s*\\})`, 'g');
        const match2 = blockRegex2.exec(quizDataStr);
        if (match2) {
            const replacement = `${match2[1]}${match2[2]},\\n            answerImg: "assets/images/civics/${m.image.filename}",\\n            imgCaption: "※画像はイメージです"${match2[3]}`;
            quizDataStr = quizDataStr.replace(match2[0], replacement);
            replaced++;
        }
    }
});

fs.writeFileSync('quiz_data.js', quizDataStr, 'utf8');
console.log(`Successfully applied ${replaced} civics images to quiz_data.js!`);
