const fs = require('fs');
const { execSync } = require('child_process');

// We have 81 remaining items to map.
// Let's create an automated script to call gemini generate_image via our available MCP tool or another method, or output them to be copy/pasted.
const prompts = JSON.parse(fs.readFileSync('missing_prompts.json', 'utf8'));

const mappingsMap = {
    // h_early_modern_3
    '島原・天草一揆': 'h_early_modern_3_shimabara_amakusa',
    'オランダ': 'h_early_modern_3_oranda',
    '朝鮮': 'h_early_modern_3_chosen',
    '琉球王国': 'h_early_modern_3_ryukyu',
    '対馬藩（宗氏）': 'h_early_modern_3_tsushima',
    
    // h_early_modern_4
    '商品作物': 'h_early_modern_4_shohin_sakumotsu',
    '五人組': 'h_early_modern_4_goningumi',
    '天下の台所': 'h_early_modern_4_tenka_no_daidokoro',
    '元禄文化': 'h_early_modern_4_genroku_bunka',
    '松尾芭蕉': 'h_early_modern_4_matsuo_basho',
    '井原西鶴': 'h_early_modern_4_ihara_saikaku',
    '干鰯（金肥）': 'h_early_modern_4_hoshi_ka',
    '菱垣廻船・樽廻船': 'h_early_modern_4_higaki_kaisen',
    '河村瑞賢': 'h_early_modern_4_kawamura_zuiken',
    '佐渡金山': 'h_early_modern_4_sado_kinzan',
    
    // h_early_modern_5
    '享保の改革': 'h_early_modern_5_kyoho_no_kaikaku',
    '目安箱': 'h_early_modern_5_meyasubako',
    '上げ米の制': 'h_early_modern_5_agemai',
    'サツマイモ（甘藷）': 'h_early_modern_5_satsumaimo',
    '田沼意次': 'h_early_modern_5_tanuma_okitsugu',
    '松平定信': 'h_early_modern_5_matsudaira_sadanobu',
    '俵物': 'h_early_modern_5_tawaramono',
    '本居宣長': 'h_early_modern_5_motoori_norinaga',

    // h_early_modern_6
    '化政文化': 'h_early_modern_6_kasei_bunka',
    '異国船打払令': 'h_early_modern_6_ikokusen_uchiharai',
    '大塩平八郎の乱': 'h_early_modern_6_oshio_heihachiro',
    '蛮社の獄': 'h_early_modern_6_bansha_no_goku',
    '天保の改革': 'h_early_modern_6_tenpo_no_kaikaku',
    'ペリー': 'h_early_modern_6_perry',
    'モリソン号事件': 'h_early_modern_6_morrison_go',

    // h_modern_1
    '五榜の掲示': 'h_modern_1_gobo_no_keiji',
    '版籍奉還': 'h_modern_1_hanseki_hokan',
    '廃藩置県': 'h_modern_1_haihan_chiken',
    '苗字（名字）': 'h_modern_1_myouji',
    '徴兵令': 'h_modern_1_chohei_rei',
    '地租改正': 'h_modern_1_chiso_kaisei',
    '学制': 'h_modern_1_gakusei',
    '鉄道': 'h_modern_1_tetsudo',
    '前島密': 'h_modern_1_maejima_hisoka',
    '富国強兵': 'h_modern_1_fukoku_kyohei',
    '文明開化': 'h_modern_1_bunmei_kaika',
    '佐賀の乱': 'h_modern_1_saga_no_ran',
    '西南戦争': 'h_modern_1_seinan_senso',

    // h_modern_2
    '自由党': 'h_modern_2_jiyuto',
    '新聞紙条例・讒謗律（ざんぼうりつ）': 'h_modern_2_shinbunshi_jorei',
    '伊藤博文': 'h_modern_2_ito_hirobumi',
    '井上馨': 'h_modern_2_inoue_kaoru',
    '大日本帝国憲法': 'h_modern_2_dainippon_teikoku_kenpo',
    '法律の範囲内で認められた': 'h_modern_2_horitsu_no_hani',
    '教育勅語': 'h_modern_2_kyoiku_chokugo',
    '帝国議会': 'h_modern_2_teikoku_gikai',
    '直接国税15円以上を納める満25歳以上の男子': 'h_modern_2_senkyoken',

    // h_modern_3
    '陸奥宗光': 'h_modern_3_mutsu_munemitsu',
    '日清戦争': 'h_modern_3_nisshin_senso',
    '李鴻章': 'h_modern_3_ri_kosho',
    '遼東半島': 'h_modern_3_ryoto_hanto',
    '三国干渉': 'h_modern_3_sangoku_kansho',
    '義和団事件': 'h_modern_3_giwadan_jiken',
    '日英同盟': 'h_modern_3_nichiei_domei',
    '与謝野晶子': 'h_modern_3_yosano_akiko',
    '日露戦争': 'h_modern_3_nichiro_senso',
    'セオドア・ルーズベルト': 'h_modern_3_roosevelt',
    '樺太（サハリン）の南半分': 'h_modern_3_karafuto',
    '日比谷焼き打ち事件': 'h_modern_3_hibiya_yakiuchi',
    '韓国併合': 'h_modern_3_kankoku_heigo',
    '小村寿太郎': 'h_modern_3_komura_jutaro',

    // h_modern_4
    '鈴木梅太郎': 'h_modern_4_suzuki_umetaro',
    '高峰譲吉': 'h_modern_4_takamine_jokichi',
    '高村光雲': 'h_modern_4_takamura_koun',
    '狩野芳崖': 'h_modern_4_kano_hogai',
    '荻原守衛': 'h_modern_4_ogiwara_morie',

    // h_modern_5
    '三・一独立運動': 'h_modern_5_san_ichi_dokuritsu',
    '女性解放運動': 'h_modern_5_josei_kaiho',
    '全国水平社': 'h_modern_5_zenkoku_suiheisha',
    '普通選挙法': 'h_modern_5_futsu_senkyo',
    '治安維持法': 'h_modern_5_chian_iji_ho',
    'ラジオ放送': 'h_modern_5_radio',
    '成金': 'h_modern_5_narikin',
    '美濃部達吉': 'h_modern_5_minobe_tatsukichi',
    '市川房枝': 'h_modern_5_ichikawa_fusae',
    '西田幾多郎': 'h_modern_5_nishida_kitaro',
    '本多光太郎': 'h_modern_5_honda_kotaro',
    '柳宗悦': 'h_modern_5_yanagi_muneyoshi'
};

const commandsToRun = [];

prompts.forEach((p) => {
    const filenameBase = mappingsMap[p.a];
    if (!filenameBase) return;
    
    // We already did Shimabara and Oranda
    if (filenameBase === 'h_early_modern_3_shimabara_amakusa' || filenameBase === 'h_early_modern_3_oranda') return;
    
    commandsToRun.push(
        `<!-- call:default_api:generate_image{"ImageName":"${filenameBase}","Prompt":"${p.prompt.replace(/"/g, '\\"').replace(/\n/g, ' ')}"} -->`
    );
});

fs.writeFileSync('auto_generate_images.txt', commandsToRun.join('\n'));
console.log('Wrote', commandsToRun.length, 'generation commands to auto_generate_images.txt');
