const fs = require('fs');

// We will parse quiz_data.js, apply mappings, and then write it back
const content = fs.readFileSync('quiz_data.js', 'utf8');
const dataPrefix = 'window.QUIZ_DATA = ';
const jsonStr = content.substring(content.indexOf(dataPrefix) + dataPrefix.length).trim();
const cleanJsonStr = jsonStr.endsWith(';') ? jsonStr.slice(0, -1) : jsonStr;

const quizData = JSON.parse(cleanJsonStr);

const mappings = {
    // h_early_modern_3
    '島原・天草一揆': 'h_early_modern_3_shimabara_amakusa.png',
    'オランダ': 'h_early_modern_3_oranda.png',
    '朝鮮': 'h_early_modern_3_chosen.png',
    '琉球王国': 'h_early_modern_3_ryukyu.png',
    '対馬藩（宗氏）': 'h_early_modern_3_tsushima.png',
    
    // h_early_modern_4
    '商品作物': 'h_early_modern_4_shohin_sakumotsu.png',
    '五人組': 'h_early_modern_4_goningumi.png',
    '天下の台所': 'h_early_modern_4_tenka_no_daidokoro.png',
    '元禄文化': 'h_early_modern_4_genroku_bunka.png',
    '松尾芭蕉': 'h_early_modern_4_matsuo_basho.png',
    '井原西鶴': 'h_early_modern_4_ihara_saikaku.png',
    '干鰯（金肥）': 'h_early_modern_4_hoshi_ka.png',
    '菱垣廻船・樽廻船': 'h_early_modern_4_higaki_kaisen.png',
    '河村瑞賢': 'h_early_modern_4_kawamura_zuiken.png',
    '佐渡金山': 'h_early_modern_4_sado_kinzan.png',
    
    // h_early_modern_5
    '享保の改革': 'h_early_modern_5_kyoho_no_kaikaku.png',
    '目安箱': 'h_early_modern_5_meyasubako.png',
    '上げ米の制': 'h_early_modern_5_agemai.png',
    'サツマイモ（甘藷）': 'h_early_modern_5_satsumaimo.png',
    '田沼意次': 'h_early_modern_5_tanuma_okitsugu.png',
    '松平定信': 'h_early_modern_5_matsudaira_sadanobu.png',
    '俵物': 'h_early_modern_5_tawaramono.png',
    '本居宣長': 'h_early_modern_5_motoori_norinaga.png',

    // h_early_modern_6
    '化政文化': 'h_early_modern_6_kasei_bunka.png',
    '異国船打払令': 'h_early_modern_6_ikokusen_uchiharai.png',
    '大塩平八郎の乱': 'h_early_modern_6_oshio_heihachiro.png',
    '蛮社の獄': 'h_early_modern_6_bansha_no_goku.png',
    '天保の改革': 'h_early_modern_6_tenpo_no_kaikaku.png',
    'ペリー': 'h_early_modern_6_perry.png',
    'モリソン号事件': 'h_early_modern_6_morrison_go.png',

    // h_modern_1
    '五榜の掲示': 'h_modern_1_gobo_no_keiji.png',
    '版籍奉還': 'h_modern_1_hanseki_hokan.png',
    '廃藩置県': 'h_modern_1_haihan_chiken.png',
    '苗字（名字）': 'h_modern_1_myouji.png',
    '徴兵令': 'h_modern_1_chohei_rei.png',
    '地租改正': 'h_modern_1_chiso_kaisei.png',
    '学制': 'h_modern_1_gakusei.png',
    '鉄道': 'h_modern_1_tetsudo.png',
    '前島密': 'h_modern_1_maejima_hisoka.png',
    '富国強兵': 'h_modern_1_fukoku_kyohei.png',
    '文明開化': 'h_modern_1_bunmei_kaika.png',
    '佐賀の乱': 'h_modern_1_saga_no_ran.png',
    '西南戦争': 'h_modern_1_seinan_senso.png',

    // h_modern_2
    '自由党': 'h_modern_2_jiyuto.png',
    '新聞紙条例・讒謗律（ざんぼうりつ）': 'h_modern_2_shinbunshi_jorei.png',
    '伊藤博文': 'h_modern_2_ito_hirobumi.png',
    '井上馨': 'h_modern_2_inoue_kaoru.png',
    '大日本帝国憲法': 'h_modern_2_dainippon_teikoku_kenpo.png',
    '法律の範囲内で認められた': 'h_modern_2_horitsu_no_hani.png',
    '教育勅語': 'h_modern_2_kyoiku_chokugo.png',
    '帝国議会': 'h_modern_2_teikoku_gikai.png',
    '直接国税15円以上を納める満25歳以上の男子': 'h_modern_2_senkyoken.png',

    // h_modern_3
    '陸奥宗光': 'h_modern_3_mutsu_munemitsu.png',
    '日清戦争': 'h_modern_3_nisshin_senso.png',
    '李鴻章': 'h_modern_3_ri_kosho.png',
    '遼東半島': 'h_modern_3_ryoto_hanto.png',
    '三国干渉': 'h_modern_3_sangoku_kansho.png',
    '義和団事件': 'h_modern_3_giwadan_jiken.png',
    '日英同盟': 'h_modern_3_nichiei_domei.png',
    '与謝野晶子': 'h_modern_3_yosano_akiko.png',
    '日露戦争': 'h_modern_3_nichiro_senso.png',
    'セオドア・ルーズベルト': 'h_modern_3_roosevelt.png',
    '樺太（サハリン）の南半分': 'h_modern_3_karafuto.png',
    '日比谷焼き打ち事件': 'h_modern_3_hibiya_yakiuchi.png',
    '韓国併合': 'h_modern_3_kankoku_heigo.png',
    '小村寿太郎': 'h_modern_3_komura_jutaro.png',

    // h_modern_4
    '鈴木梅太郎': 'h_modern_4_suzuki_umetaro.png',
    '高峰譲吉': 'h_modern_4_takamine_jokichi.png',
    '高村光雲': 'h_modern_4_takamura_koun.png',
    '狩野芳崖': 'h_modern_4_kano_hogai.png',
    '荻原守衛': 'h_modern_4_ogiwara_morie.png',

    // h_modern_5
    '三・一独立運動': 'h_modern_5_san_ichi_dokuritsu.png',
    '女性解放運動': 'h_modern_5_josei_kaiho.png',
    '全国水平社': 'h_modern_5_zenkoku_suiheisha.png',
    '普通選挙法': 'h_modern_5_futsu_senkyo.png',
    '治安維持法': 'h_modern_5_chian_iji_ho.png',
    'ラジオ放送': 'h_modern_5_radio.png',
    '成金': 'h_modern_5_narikin.png',
    '美濃部達吉': 'h_modern_5_minobe_tatsukichi.png',
    '市川房枝': 'h_modern_5_ichikawa_fusae.png',
    '西田幾多郎': 'h_modern_5_nishida_kitaro.png',
    '本多光太郎': 'h_modern_5_honda_kotaro.png',
    '柳宗悦': 'h_modern_5_yanagi_muneyoshi.png'
};

let appliedCount = 0;

for (const unit in quizData) {
    quizData[unit].forEach(q => {
        if (mappings[q.a] && (!q.img && !q.image)) {
            q.image = `assets/images/history/${mappings[q.a]}`;
            appliedCount++;
        }
    });
}

const newContent = `${dataPrefix}${JSON.stringify(quizData, null, 2)};\n`;

fs.writeFileSync('quiz_data.js', newContent, 'utf8');

console.log(`Successfully mapped ${appliedCount} targets via JSON parsing.`);
