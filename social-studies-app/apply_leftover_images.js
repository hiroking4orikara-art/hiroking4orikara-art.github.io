const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizDataStr = fs.readFileSync(quizDataPath, 'utf8');

global.window = global;
global.module = { exports: {} };
try {
    eval(quizDataStr);
} catch (e) {
    console.log("Eval error:", e);
    process.exit(1);
}

const QUIZ_DATA = global.window.QUIZ_DATA || {};

// Remaining mapping entries to link unused images to missing questions
const manualMappingList = {
    // 答え -> 画像ファイル名のキーワード
    '55年体制': ['1955_system_1773368892221.png', '55nen'],
    'オウム真理教': ['aum_shinrikyo_incident_1773369235813.png', 'aum'],
    'バンドン会議': ['bandung_conference_1773368854829.png', 'bandung'],
    '消費税': ['consumption_tax_intro_1773369253156.png', 'consumption', 'shouhizei'],
    '女性議員': ['female_diet_members_1773368702040.png', 'female'],
    '教育基本法': ['fundamental_law_of_education_1773368683242.png', 'kyouiku_1773343259399.png', 'kyouiku_1773342378576.png'],
    '阪神・淡路大震災': ['great_hanshin_earthquake_1773369201638.png', 'hanshin'],
    '湾岸戦争': ['gulf_war_1773369092957.png', 'wangan'],
    '湯川秀樹': ['hideki_yukawa_1773368960434.png', 'yukawa'],
    '人間宣言': ['humanity_declaration_1773368781759.png', 'ningen'],
    '日中共同声明': ['japan_china_communique_1773369049078.png', 'nicchu_kyoudou'],
    '日中平和友好条約': ['japan_china_peace_treaty_1773369070327.png', 'nicchu_heiwa'],
    '日韓基本条約': ['japan_korea_treaty_1773368982452.png', 'nikkan'],
    '日ソ共同宣言': ['japan_soviet_declaration_1773368877058.png', 'nisso'],
    '国際連盟': ['league_of_nations_1773368667564.png', 'kokusai_renmei_1772283419564.png'],
    '小笠原諸島': ['ogasawara_islands_1773369026963.png', 'ogasawara'],
    'パリ協定': ['paris_agreement_1773369293123.png', 'paris'],
    'PKO協力法': ['pko_cooperation_1773369159816.png', 'pko'],
    '中華人民共和国': ['prc_founding_1773368835910.png', 'chuuka'],
    '同時多発テロ': ['september_11_attacks_1773369275436.png', '911'],
    '労働三法': ['three_labor_laws_1773368747516.png', 'roudou'],
    '国際連合': ['united_nations_1773368765000.png', 'kokuren'],
    '少子高齢化': ['shoushi'],
    '男女雇用機会均等法': ['josei_1773343276424.png'],
    '農地改革': ['nongji_kaikaku.png'],
    '沖縄返還': ['okinawa_reversion.png'],
    '冷蔵庫': ['refrigerator_1772244281830.png'],
    'ルネサンス（文芸復興）': ['renaissance'],
    '銀': ['silver'],
    '文禄・慶長の役': ['bunroku'],
    '朝鮮': ['chosen'],
    '島原・天草一揆': ['shimabara'],
    '地租改正': ['chiso_1773341819391.png'],
    '大日本帝国憲法': ['teikoku_1773342395256.png'],
    '民撰議院設立建白書': ['minsen.png'],
    '日英同盟': ['nichiei_1773342589376.png'],
    '二葉亭四迷': ['futabatei.png'],
    '正岡子規': ['masaoka.png'],
    '夏目漱石': ['natsume.png'],
    '治安警察法': ['chian_1773343001388.png'],
    '本多光太郎': ['honda_1773343162028.png'],
    '河上肇': ['kawakami_1772244249505.png'],
    '学徒出陣': ['gakudo_sokai_1772244267399.png'],
    '原子爆弾': ['genbaku_1772302903759.png'],
    '沖縄県': ['okinawa_sen_1772302848029.png'],
    '記紀': ['kiki']
};

const imageDir = path.join(__dirname, 'assets', 'images', 'history');
const allImages = fs.readdirSync(imageDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

let updateCount = 0;
let modifications = [];

for (const unit in QUIZ_DATA) {
    if (unit.startsWith('h_')) {
        QUIZ_DATA[unit].forEach((q) => {
            let currentImg = q.image || q.img;
            let newImgName = null;

            // Search by mapping
            for (const [ansKw, imgKws] of Object.entries(manualMappingList)) {
                if (q.a === ansKw || q.a.includes(ansKw)) {
                    for (const kw of imgKws) {
                        const found = allImages.find(img => img.includes(kw));
                        if (found) {
                            newImgName = found;
                            break;
                        }
                    }
                }
                if (newImgName) break;
            }

            if (newImgName) {
                const newImgPath = `assets/images/history/${newImgName}`;
                if (currentImg !== newImgPath) {
                    modifications.push(`Assigned [${q.a}]: ${newImgPath} at ${unit}`);
                    updateCount++;
                    
                    const qEscaped = q.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                    
                    if (currentImg) {
                       // Replace
                       const rgx = new RegExp(`(q:\\s*["']${qEscaped}["'][\\s\\S]*?)(img|image):\\s*["'][^"']*["']`);
                       quizDataStr = quizDataStr.replace(rgx, `$1img: "${newImgPath}"`);
                    } else {
                       // Insert
                       const rgxInject = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?)\\s*}`);
                       quizDataStr = quizDataStr.replace(rgxInject, `$1,\n            img: "${newImgPath}"\n        }`);
                    }
                }
            }
        });
    }
}

if (modifications.length > 0) {
    // cleanup
    quizDataStr = quizDataStr.replace(/,\s*,/g, ',');
    fs.writeFileSync(quizDataPath, quizDataStr, 'utf8');
    
    console.log(modifications.slice(0, 20).join('\n'));
    console.log(`...and ${modifications.length > 20 ? modifications.length - 20 : 0} more modifications.`);
    console.log(`Updated ${updateCount} leftover mapping images.`);
} else {
    console.log("No new images could be mapped from the leftover list.");
}
