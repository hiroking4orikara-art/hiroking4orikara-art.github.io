const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizDataStr = fs.readFileSync(quizDataPath, 'utf8');

// Parse quizData safely
const cleaned = quizDataStr.replace('window.QUIZ_DATA =', 'const data =') + '; module.exports = data;';
fs.writeFileSync('temp_data_apply.js', cleaned);
const QUIZ_DATA = require('./temp_data_apply.js');

const imageDir = path.join(__dirname, 'assets', 'images', 'history');
const allImages = fs.readdirSync(imageDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

let updateCount = 0;
let modifications = [];

let imageUsage = {};
let duplicates = new Set();
for (const unit in QUIZ_DATA) {
    if (unit.startsWith('h_')) {
        for (const q of QUIZ_DATA[unit]) {
            const img = q.image || q.img;
            if (img && typeof img === 'string') {
                imageUsage[img] = (imageUsage[img] || 0) + 1;
                if (imageUsage[img] > 1) {
                    duplicates.add(img);
                }
            }
        }
    }
}

const findBestMatch = (aText, unit) => {
    let aSlug = aText.replace(/（.*?）/g, '').replace(/[\s・]/g, '').toLowerCase();
    
    const hardcodedMaps = {
        'エジプト文明': 'egypt', 'メソポタミア文明': 'mesopotamia', 'インダス文明': 'indus', '甲骨文字': 'oracle_bone',
        '仏教': 'buddhism', '聖徳太子': 'shotoku', '租': 'so_tax', '元明天皇': 'genmei',
        '記紀': 'kiki', '持統天皇': 'jito', '光明皇后': 'komyo', '古今和歌集': 'kokin',
        '浄土信仰': 'jodo', '日宋貿易': 'nisso', '守護': 'shugo', '奉公': 'hoko',
        '御成敗式目': 'goseibai', '侍所': 'samuraidokoro', '問注所': 'monchujo', '北条時政': 'tokimasa',
        '北条義時': 'yoshitoki', '源実朝': 'sanetomo', '阿充河荘': 'ategawa', '流鏑馬': 'yabusame',
        '二毛作': 'nimosaku', '牛馬耕': 'gyubakou', '徳政令': 'tokuseirei', '永仁の徳政令': 'einin',
        '琵琶法師': 'biwahoshi', '新古今和歌集': 'shinkokin', '親鸞': 'shinran', '道元': 'dogen',
        '守護大名': 'shugo_daimyo', '勘合貿易': 'kango', '明': 'ming', 'アイヌ': 'ainu',
        '金閣': 'kinkaku', '銀閣': 'ginkaku', '水墨画': 'suibokuga', '書院造': 'shoinzukuri',
        '御伽草子': 'otogizoushi', '座': 'za', '城下町': 'jokamachi', 'ルネサンス': 'renaissance',
        'コロンブス': 'columbus', '織田信長': 'nobunaga', '室町幕府': 'muromachi', '安土城': 'azuchijo',
        '楽市楽座': 'rakuichi', '豊臣秀吉': 'hideyoshi', '太閤検地': 'taiko_kenchi', '文禄慶長の役': 'bunroku',
        '桃山文化': 'momoyama', '千利休': 'rikyu', 'かぶき踊り': 'kabuki', '関ヶ原の戦い': 'sekigahara',
        '御三家': 'gosanke', '譜代大名': 'fudai', '参勤交代': 'sankin', '武家諸法度': 'buke_shohatto',
        '島原天草一揆': 'shimabara', '絵踏': 'ebumi', 'オランダ': 'oranda', '朝鮮': 'chosen',
        '琉球王国': 'ryukyu', '対馬藩': 'tsushima', '備中ぐわ': 'bitchuguwa', '商品作物': 'shohinsakumotsu',
        '五人組': 'goningumi', '天下の台所': 'tenka_no_daidokoro', '元禄文化': 'genroku', '松尾芭蕉': 'basho',
        '井原西鶴': 'saikaku', '干鰯': 'hoshi_ka', '菱垣廻船': 'higaki_kaisen', '河村瑞賢': 'kawamura_zuiken',
        '佐渡金山': 'sado_kinzan', '享保の改革': 'kyoho', '目安箱': 'meyasubako', '上げ米の制': 'agemai',
        'サツマイモ': 'satsumaimo', '田沼意次': 'tanuma', '松平定信': 'sadanobu', '解体新書': 'kaitai',
        '俵物': 'tawaramono', '本居宣長': 'motori', '化政文化': 'kasei', '歌川広重': 'hiroshige',
        '異国船打払令': 'ikokusen', '大塩平八郎': 'oshio', '蛮社の獄': 'bansha', '天保の改革': 'tenpo',
        'ペリー': 'perry', 'モリソン号事件': 'morrison', '五箇条の御誓文': 'gokajo', '地租改正': 'chiso',
        '文明開化': 'bunmei', '板垣退助': 'itagaki', '秩父事件': 'chichibu', '教育勅語': 'kyouiku',
        '帝国議会': 'teikoku', 'ノルマントン号': 'normanton', '八幡製鉄所': 'yawata', '義和団事件': 'giwadan',
        '日英同盟': 'nichiei', '日比谷焼き打ち事件': 'hibiya', '日本の産業革命': 'sangyou', '福沢諭吉': 'fukuzawa',
        '二葉亭四迷': 'futabatei', '夏目漱石': 'natsume', '森鴎外': 'mori_ougai', '正岡子規': 'masaoka',
        '治安警察法': 'chian'
    };

    let kwSearches = [aSlug];
    for (const [key, val] of Object.entries(hardcodedMaps)) {
        if (aText.includes(key)) kwSearches.push(val);
    }

    // 1st priority: matches specific unit and keyword exactly
    for (const img of allImages) {
        if (img.startsWith(unit)) {
            for (const kw of kwSearches) {
                if (img.toLowerCase().includes(kw.toLowerCase())) return `assets/images/history/${img}`;
            }
        }
    }

    // 2nd priority: matches broader unit prefix and keyword
    const broadUnit = unit.split('_').slice(0, 2).join('_'); // h_ancient
    for (const img of allImages) {
        if (img.startsWith(broadUnit)) {
            for (const kw of kwSearches) {
                if (img.toLowerCase().includes(kw.toLowerCase())) return `assets/images/history/${img}`;
            }
        }
    }

    // 3rd priority: any image matching keyword without unit
    for (const img of allImages) {
        for (const kw of kwSearches) {
             if (kw.length > 2 && img.toLowerCase().includes(kw.toLowerCase())) return `assets/images/history/${img}`;
        }
    }
    return null;
};

// Replace text in quizDataStr
for (const unit in QUIZ_DATA) {
    if (unit.startsWith('h_')) {
        QUIZ_DATA[unit].forEach((q) => {
            const imgPath = q.image || q.img;
            let finalImgPath = imgPath;
            
            // 1. Unlink wrong duplicates
            if (imgPath && duplicates.has(imgPath)) {
                const imgName = path.basename(imgPath);
                if (!imgName.startsWith(unit.split('_').slice(0, 2).join('_'))) {
                    // Clearly wrong image from another era / wrong unit
                    finalImgPath = null;
                    modifications.push(`Cleared faulty duplicate ${imgPath} from ${unit} Q:${q.q.substring(0, 15)}...`);
                }
            }

            // 2. Assign if missing or just unlinked
            if (!finalImgPath) {
                const match = findBestMatch(q.a, unit);
                if (match) {
                    finalImgPath = match;
                    modifications.push(`Assigned: ${match} -> ${unit} Q:${q.q.substring(0, 15)}...`);
                    updateCount++;
                }
            }

            // 3. String replace on quizDataStr if change occurred
            if (imgPath !== finalImgPath) {
                const qEscaped = q.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                if (!finalImgPath) {
                    // Remove img or image propery entirely
                    const rgx = new RegExp(`(q:\\s*["']${qEscaped}["'][\\s\\S]*?)(img|image):\\s*["'][^"']*["'],?\\s*`);
                    quizDataStr = quizDataStr.replace(rgx, '$1');
                } else if (!imgPath) {
                    // Insert new img
                    const rgx = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']*["'](,\\s*comment:\\s*["'][^"']*["'])?)`);
                    quizDataStr = quizDataStr.replace(rgx, `$1,\n            img: "${finalImgPath}"`);
                } else {
                    // Replace existing img
                    const rgx = new RegExp(`(q:\\s*["']${qEscaped}["'][\\s\\S]*?img:\\s*["'])[^"']*(["'])`);
                    quizDataStr = quizDataStr.replace(rgx, `$1${finalImgPath}$2`);
                }
            }
        });
    }
}

if (modifications.length > 0) {
    fs.writeFileSync(quizDataPath, quizDataStr, 'utf8');
    console.log(modifications.slice(0, 20).join('\n'));
    console.log(`...and ${modifications.length > 20 ? modifications.length - 20 : 0} more modifications.`);
    console.log(`Updated ${updateCount} images.`);
} else {
    console.log("No missing images could be mapped.");
}

fs.unlinkSync('temp_data_apply.js');
