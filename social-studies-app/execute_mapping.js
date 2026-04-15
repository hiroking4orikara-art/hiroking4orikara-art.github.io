import fs from 'fs';

const quizDataPath = 'quiz_data.js';
let quizDataStr = fs.readFileSync(quizDataPath, 'utf8');
const unusedImages = JSON.parse(fs.readFileSync('unused_images.json', 'utf8'));

const keywordTranslation = {
    '1955_system': '55年体制',
    'anpo_protests': '安保闘争',
    'aum_shinrikyo_incident': 'オウム',
    'bandung_conference': 'アジア・アフリカ会議',
    'bg_history_ancient': '',
    'bg_history_early_modern': '',
    'bg_history_medieval': '',
    'bg_history_modern': '',
    'bg_history_modern_contemporary': '',
    'consumption_tax_intro': '消費税',
    'female_diet_members': '女性参政権',
    'fundamental_law_of_education': '教育基本法',
    'great_hanshin_earthquake': '阪神・淡路大震災',
    'gulf_war': '湾岸戦争',
    'hideki_yukawa': '湯川秀樹',
    'humanity_declaration': '人間宣言',
    'cromagnon': 'クロマニョン人',
    'egypt': 'エジプト文明',
    'evolution_hand': '手（前あし）',
    'hammurabi': 'ハンムラビ法典',
    'mesopotamia': 'メソポタミア',
    'oracle_bone': '甲骨文字',
    'nakoku': '奴国',
    'asuka_culture': '飛鳥文化',
    'so_tax': '租',
    'konden_einen_shizai_ho': '墾田永年私財法',
    'abe_no_nakamaro': '阿倍仲麻呂',
    'manyoshu': '万葉集',
    'yamanoue_no_okura': '山上憶良',
    'buddhism': '仏教',
    'christianity': 'キリスト教',
    'handen': '班田収授法',
    'heiji': '平治の乱',
    'hogen': '保元の乱',
    'kana': 'かな文字',
    'kentoshi': '遣唐使',
    'kokin': '古今和歌集',
    'kuya': '空也',
    'nile': 'ナイル川',
    'owada': '大輪田泊',
    'rice_farming': '稲作',
    'shotoku': '聖徳太子',
    'sumitomo': '藤原純友',
    'yorimichi': '藤原頼通',
    'josei': '女性参政権',
    'kenpou': '日本国憲法',
    'kokuren': '国際連合',
    'kyouiku': '教育基本法',
    'ningen': '人間宣言',
    'nongji_kaikaku': '農地改革',
    'postwar_reform': '農地改革', // or something else?
    'roudou': '労働三法',
    'yamiichi': '闇市',
    'zaibatsu_dissolution': '財閥解体',
    '55nen': '55年体制',
    'anpo': '日米安全保障条約',
    'bandung': 'アジア・アフリカ会議',
    'chuuka': '中華人民共和国',
    'cold_war': '冷戦',
    'korean_war': '朝鮮戦争',
    'nisso': '日ソ共同宣言',
    'sanfran': 'サンフランシスコ平和条約',
    'yukawa': '湯川秀樹',
    'asean': 'ASEAN',
    'hikaku': '非核三原則',
    'koudo': '高度経済成長',
    'kougai': '公害',
    'nicchu_heiwa': '日中平和友好条約',
    'nicchu_kyoudou': '日中共同声明',
    'nikkan': '日韓基本条約',
    'ogasawara': '小笠原諸島',
    'okinawa_reversion': '沖縄',
    'refrigerator': '三種の神器',
    'tokyo_oly': '東京オリンピック',
    '55nen_owari': '55年体制の崩壊',
    'aum': 'オウム',
    'berlin': 'ベルリンの壁崩壊',
    'bubble': 'バブル経済',
    'eu': 'EU',
    'hanshin': '阪神・淡路大震災',
    'oil_shock': '石油危機',
    'pko': 'PKO協力法',
    'shouhizei': '消費税',
    'wangan': '湾岸戦争',
    '911': '同時多発テロ',
    'higashi_nihon_daishinsai': '東日本大震災',
    'it': 'IT革命',
    'junkangata': '循環型社会',
    'kyoto': '京都議定書',
    'paris': 'パリ協定',
    'sdgs': 'SDGs',
    'shoushi': '少子化',
    'takeshima': '竹島',
    'columbus': 'コロンブス',
    'silver': '銀',
    'teppo': '鉄砲',
    'azuchijo': '安土城',
    'bunroku_keicho': '文禄・慶長の役',
    'heinobunri': '兵農分離',
    'himejijo': '姫路城',
    'honnouji': '本能寺の変',
    'ishiyama': '石山本願寺',
    'kabuki_odori': 'かぶき踊り',
    'kanoeitoku': '狩野永徳',
    'katanagari': '刀狩',
    'momoyama_culture': '桃山文化',
    'muromachi_bakufu': '室町幕府',
    'nagashino': '長篠の戦い',
    'oda_nobunaga': '織田信長',
    'rakuichi_rakuza': '楽市・楽座',
    'sen_no_rikyu': '千利休',
    'taiko_kenchi': '太閤検地',
    'toyotomi_hideyoshi': '豊臣秀吉',
    'buke_shohatto': '武家諸法度',
    'ebumi': '絵踏',
    'fudai_daimyo': '譜代大名',
    'fusetsusho': '風説書',
    'gosanke': '御三家',
    'oranda': 'オランダ',
    'ryukyu': '琉球',
    'sanka': '三貨制度',
    'sankin_kotai': '参勤交代',
    'sekigahara': '関ヶ原',
    'shimabara_amakusa': '島原・天草一揆',
    'shumon': '宗門改',
    'tsushima': '対馬藩',
    'bitchuguwa': '備中ぐわ',
    'chikamatsu': '近松門左衛門',
    'genroku_bunka': '元禄文化',
    'goningumi': '五人組',
    'higaki_kaisen': '菱垣廻船',
    'hishikawa': '菱川師宣',
    'hoshi_ka': '干鰯',
    'ihara_saikaku': '井原西鶴',
    'kawamura_zuiken': '河村瑞賢',
    'korin': '尾形光琳',
    'matsuo_basho': '松尾芭蕉',
    'sado_kinzan': '佐渡金山',
    'senbakoki': '千歯こき',
    'tenka_no_daidokoro': '天下の台所',
    'agemai': '上げ米',
    'kaitai': '解体新書',
    'kujikata': '公事方御定書',
    'kyoho_no_kaikaku': '享保の改革',
    'meyasubako': '目安箱',
    'satsumaimo': 'サツマイモ',
    'tanuma_okitsugu': '田沼意次',
    'hiroshige': '歌川広重',
    'hokusai': '葛飾北斎',
    'ino': '伊能忠敬',
    'jippensha': '十返舎一九',
    'kitagawa': '喜多川歌麿',
    'terakoya': '寺子屋',
    'toshusai': '東洲斎写楽',
    'watanabe': '渡辺崋山',
    'bunkatsusozoku': '分割相続',
    'gyubakou': '牛馬耕',
    'nimosaku': '二毛作',
    'yabusame': '流鏑馬',
    'tokuseirei': '徳政令',
    'ming': '明',
    'shohashi': '尚巴志',
    'za': '座',
    'yamashiro': '山城の国一揆',
    'shugo': '守護',
    'yoritomo': '源頼朝',
    'bunmei': '文明開化',
    'chouhei': '徴兵令',
    'fukoku': '富国強兵',
    'gakusei': '学制',
    'gobou': '五榜の掲示',
    'haihan': '廃藩置県',
    'hanseki': '版籍奉還',
    'iwakura': '岩倉使節団',
    'maejima': '前島密',
    'myouji': '名字',
    'saga': '佐賀の乱',
    'seinan': '西南戦争',
    'tetsudou': '鉄道',
    'chichibu': '秩父事件',
    'inoue': '井上馨',
    'itou': '伊藤博文',
    'jiyutou': '自由党',
    'minsen': '民撰議院設立建白書',
    'petition': '民撰議院',
    'shinbun': '新聞',
    'teikoku': '大日本帝国憲法',
    'giwadan': '義和団',
    'hibiya': '日比谷焼打事件',
    'kankoku': '韓国併合',
    'karafuto': '樺太',
    'komura': '小村寿太郎',
    'mutsu': '陸奥宗光',
    'nichiei': '日英同盟',
    'nichiro': '日露戦争',
    'nisshin': '日清戦争',
    'rikyoushou': '李鴻章',
    'roosevelt': 'セオドア・ルーズベルト',
    'ryoutou': '遼東半島',
    'sangoku': '三国干渉',
    'yawata': '八幡製鉄所',
    'yosano': '与謝野晶子',
    'fukuzawa': '福沢諭吉',
    'takamine': '高峰譲吉',
    'takamura': '高村光雲',
    'taki': '滝廉太郎',
    'tanaka': '田中正造',
    'chian': '治安維持法',
    'kawakami': '川上音二郎',
    'kobayashi': '小林多喜二',
    'kokusai': '国際連盟', // wait, is it kokusai_renmei or kokusai? 'kokusai' = 国際
    'minobe': '美濃部達吉',
    'narikin': '成金',
    'nishida': '西田幾多郎',
    'radio': 'ラジオ',
    'russian_revolution': 'ロシア革命',
    'san_ichi': '三・一独立運動',
    'suiheisha': '全国水平社',
    'yanagi': '柳宗悦',
    '226_jihen': '二・二六事件',
    '515_jihen': '五・一五事件',
    'block_keizai': 'ブロック経済',
    'daitoua_kyoueiken': '大東亜共栄圏',
    'gandhi': 'ガンディー',
    'hakkou_ichiu': '八紘一宇',
    'hitler': 'ヒトラー',
    'kokka_soudouin': '国家総動員法',
    'kokusai_renmei': '国際連盟',
    'manshu_jihen': '満州事変',
    'nankin_jihen': '南京事件',
    'nitchu_sensou': '日中戦争',
    'sekai_kyoukou': '世界恐慌',
    'taisei_yokusankai': '大政翼賛会',
    'abcd_houijin': 'ABCD包囲陣',
    'gakudo_sokai': '学童疎開',
    'gakuto_shutsujin': '学徒出陣',
    'genbaku': '原子爆弾',
    'ghq': 'GHQ',
    'haikyuusei': '配給制',
    'hiroshima_nagasaki': '広島・長崎',
    'midway': 'ミッドウェー',
    'okinawa_sen': '沖縄',
    'potsdam': 'ポツダム宣言',
    'sangoku_doumei': '日独伊三国同盟',
    'taiheiyou_sensou': '太平洋戦争',
    'tokyo_daikuushuu': '東京大空襲',
    'tonarigumi': '隣組',
    'yalta_kaidan': 'ヤルタ会談',
    'zeitaku_teki': '贅沢は敵だ',
    'japan_china_communique': '日中共同声明',
    'japan_china_peace_treaty': '日中平和友好条約',
    'japan_korea_treaty': '日韓基本条約',
    'japan_soviet_declaration': '日ソ共同宣言',
    'league_of_nations': '国際連盟',
    'ogasawara_islands': '小笠原諸島',
    'paris_agreement': 'パリ協定',
    'pko_cooperation': 'PKO協力法',
    'prc_founding': '中華人民共和国',
    'september_11_attacks': '同時多発テロ',
    'three_labor_laws': '労働三法',
    'united_nations': '国際連合'
};

let changes = 0;
for (const file of unusedImages) {
    if (file.startsWith('bg_')) continue; // Skip backgrounds
    
    // Extract base keyword
    let base = file.replace(/\.[^/.]+$/, ""); // remove extension
    base = base.replace(/_\d{13,}/, ''); // remove trailing timestamp
    base = base.replace(/^h_[a-z]+_\d*_?/, ''); 
    base = base.replace(/^h_[a-z]+_/, ''); 
    
    let jpAnswer = keywordTranslation[base];
    if (!jpAnswer) {
        console.log(`Warning: No translation for ${base} (file: ${file})`);
        continue;
    }
    
    // Update quizDataStr by regex replacing the answer line to include the img: tag.
    // There are two formats: a: "Answer" and a: ["Answer"]
    const escapedAnswer = jpAnswer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Search for answer in quiz_data string. We must be somewhat fuzzy for partial matches?
    // Let's use standard replace based on exact answer, or partial.
    // `a: "Something ${escapedAnswer} Something"`
    
    // Let's use lookbehind or just match the line and append
    // e.g., a: "..." 或いは a: ["..."] 
    // we want to find the line that has a: and contains jpAnswer
    // then insert image if not present.
    // However, if the question already has an image, we only want to REPLACE if it's currently a missing or duplicate image.
    // But since the current quiz_data.js has many duplicates, maybe we just OVERWRITE or APPEND.
    
    const regex = new RegExp(`(a:\\s*(?:\\[.*?|"|').*?${escapedAnswer}.*?(?:"|'|\\])\\s*,)`, 'g');
    let matchCounts = 0;
    
    quizDataStr = quizDataStr.replace(regex, (match) => {
        matchCounts++;
        return `${match}\n            img: "assets/images/history/${file}",`;
    });
    
    if (matchCounts > 0) {
        console.log(`Mapped ${file} -> ${jpAnswer} (${matchCounts} occurrences)`);
        changes++;
    } else {
        console.log(`Could not find answer in quiz_data.js for ${jpAnswer} (${file})`);
    }
}

// But wait! Many questions might have double image tags now! 
// e.g. a: "...", img: "wrong.png", img: "correct.png",
// We need to clean up double image tags if they occur.
// A simple way is to remove all duplicate img tags per object, keeping the LAST one.

fs.writeFileSync('quiz_data_temp.js', quizDataStr);
console.log(`Applied ${changes} unused images.`);
