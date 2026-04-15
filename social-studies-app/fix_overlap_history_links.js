const fs = require('fs');

const jpToEn = {
    '仏教': 'buddhism',
    'キリスト教': 'christianity',
    '大王（おおきみ）': 'okimi',
    '渡来人': 'toraijin',
    '王仁（わに）': 'wani',
    '氏姓制度': 'uji_kabane',
    '蘇我氏': 'soga',
    '聖徳太子（厩戸皇子）': 'shotoku',
    '推古天皇': 'suiko',
    '冠位十二階': 'twelve_ranks',
    '十七条の憲法': 'seventeen',
    '遣隋使': 'kenzuishi',
    '隋': 'sui_dynasty',
    '小野妹子': 'imoko',
    '飛鳥文化': 'asuka',
    '天皇家（聖徳太子の一族）': 'imperial_family',
    '大化の改新': 'taika',
    '公地公民': 'kochi_komin',
    '中臣鎌足（藤原鎌足）': 'kamatari',
    '白村江の戦い': 'hakusukinoe',
    '天智天皇': 'tenji',
    '壬申の乱': 'jinshin',
    '大宝律令': 'taiho',
    '律令国家': 'ritsuryo',
    '班田収授法': 'handen',
    '租': 'so_tax',
    '庸': 'yo_tax',
    '和同開珎': 'wadokaichin',
    '逃散': 'chosan',
    '万葉集': 'manyoshu',
    '山上憶良': 'okura',
    '聖武天皇': 'shomu',
    '天平文化': 'tenpyo',
    '鑑真': 'ganjin',
    '光明皇后': 'komyo',
    '墾田永年私財法': 'konden',
    '阿倍仲麻呂': 'abe',
    '平安京': 'heian_kyo',
    '坂上田村麻呂': 'tamuramaro',
    '遣唐使': 'kentoushi', 
    '摂関政治': 'sekkan',
    '藤原道長': 'michinaga',
    '藤原頼通': 'yorimichi',
    'かな文字': 'kana',
    '古今和歌集': 'kokin',
    '浄土信仰': 'jodo',
    '空也': 'kuya',
    '大輪田泊': 'owada',
    '藤原純友': 'sumitomo',
    '保元の乱': 'hogen',
    '平治の乱': 'heiji',
    '日宋貿易': 'nisso',
    
    '源頼朝': 'yoritomo',
    '鎌倉幕府': 'bakufu',
    '守護': 'shugo',
    '地頭': 'jito',
    '封建制度': 'hoken',
    '御恩': 'goon',
    '奉公': 'hoko',
    '執権': 'shikken',
    '北条政子': 'masako',
    '承久の乱': 'jokyu',
    '六波羅探題': 'rokuhara',
    '御成敗式目（貞永式目）': 'goseibai',
    '農業技術': 'agricultural',
    '源義仲（木曽義仲）': 'yoshinaka',
    '政所（まんどころ）': 'mandokoro',
    '侍所': 'samuraidokoro',
    '問注所': 'monchujo',
    '北条時政': 'tokimasa',
    '北条義時': 'yoshitoki',
    '源実朝': 'sanetomo',
    '阿充河荘（あてがわのしょう）': 'ategawa',
    '流鏑馬（やぶさめ）': 'yabusame',
    '二毛作': 'nimosaku',
    '牛馬耕': 'gyubakou',
    '分割相続': 'bunkatsusozoku',
    
    'モンゴル帝国': 'mongol',
    '元寇': 'genko',
    '北条時宗': 'tokimune',
    '徳政令': 'tokuseirei',
    '後醍醐天皇': 'godaigo',
    '足利尊氏': 'takauji',
    '新田義貞': 'nitta',
    '神風': 'kamikaze',
    '防塁（石築地）': 'bourui',
    'マルコ・ポーロ': 'marcopolo',
    '一騎打ち': 'ikkiuchi',
    '永仁の徳政令': 'einin',
    '悪党': 'akutou',
    
    '鎌倉文化': 'kamakura',
    '平家物語': 'heike',
    '琵琶法師': 'biwa',
    '新古今和歌集': 'shinkokin',
    '法然': 'honen',
    '親鸞': 'shinran',
    '一遍': 'ippen',
    '日蓮': 'nichiren',
    '栄西': 'eisai',
    '道元': 'dogen',
    
    '建武の新政': 'kenmu',
    '南北朝時代': 'nanbokucho',
    '足利義満': 'yoshimitsu',
    '管領': 'kanrei',
    '守護大名': 'shugo_daimyo',
    '勘合貿易（日明貿易）': 'kango',
    '倭寇': 'wako',
    
    '明': 'ming',
    '朝鮮国（李氏朝鮮）': 'joseon',
    '尚巴志': 'shohashi',
    '中継貿易': 'chukei',
    'アイヌ民族': 'ainu',
    'コシャマイン': 'koshamain',
    'ハングル': 'hangeul',
    '北山文化': 'kitayama',
    '能（能楽）': 'noh',
    '狂言': 'kyogen',
    '東山文化': 'higashiyama',
    '雪舟': 'sesshu',
    '惣（惣村）': 'so_mura',
    '土一揆': 'doikki',
    '馬借（ばしゃく）': 'bashaku',
    '問（問屋）': 'toiya',
    '土倉（どそう）': 'doso',
    '正長の土一揆': 'shocho',
    
    '応仁の乱': 'onin',
    '足利義政': 'yoshimasa',
    '細川勝元': 'hosokawa',
    '加賀の一向一揆': 'kaga',
    '下剋上': 'gekokujo',
    '戦国大名': 'sengoku',
    '分国法': 'bunkokuho',
    '甲州法度之次第': 'koshu',
    '塵芥集（じんかいしゅう）': 'jinkaishu',
    '堺（大阪府）': 'sakai',
    '博多（福岡県）': 'hakata',
    '祇園祭': 'gion'
};

const quizDataPath = 'quiz_data.js';
let quizData = fs.readFileSync(quizDataPath, 'utf8');
const targets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));
const files = fs.readdirSync('assets/images/history').filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

let combined = {};
fs.readdirSync('.').filter(f => f.startsWith('apply_batch') || f.startsWith('apply_')).forEach(f => {
    let t = fs.readFileSync(f, 'utf8');
    let m = t.match(/const\s+updates\s*=\s*({[\s\S]*?});/);
    if (m) try { Object.assign(combined, eval('(' + m[1] + ')')); } catch(e) {}
});
fs.readdirSync('.').filter(f => f.endsWith('.json')).forEach(f => {
    try {
        let c = JSON.parse(fs.readFileSync(f, 'utf8'));
        let arr = Array.isArray(c) ? c : (c.found || c.items || []);
        arr.forEach(i => {
            if (i.q && i.a && (i.filename || i.newPath)) {
                combined[i.a] = (i.filename || i.newPath).split('/').pop();
            }
        });
    } catch(e) {}
});

let appliedCount = 0;
let unmapped = [];

targets.forEach(t => {
    let matchedFile = null;

    if (combined[t.a]) matchedFile = files.find(f => f.includes(combined[t.a]));
    
    if (!matchedFile && jpToEn[t.a]) {
        // Search globally without unit prefix restriction, because sometimes targets were generated under a different unit id prefix.
        matchedFile = files.find(f => f.includes(jpToEn[t.a]));
    }

    if (!matchedFile) {
        let aRomaji = t.a.toLowerCase().replace(/（.*?）/g, '').replace(/[^\w\s]/g, '');
        if (aRomaji) {
            matchedFile = files.find(f => f.includes(aRomaji));
        }
    }

    if (!matchedFile) unmapped.push(t.a);
    else {
        let qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        let blockRegex = new RegExp(`({\\s*q:\\s*["']${qEscaped}["'][\\s\\S]*?)(}(?:,|\\s|\\]))`, 'g');
        
        quizData = quizData.replace(blockRegex, (fullMatch, p1, p2) => {
            let cleanBlock = fullMatch.replace(/\s*(?:img|image):\s*["'][^"']+["'],?/g, '');
            let idx = cleanBlock.lastIndexOf('}');
            if (idx !== -1) {
                let contentBeforeBrace = cleanBlock.substring(0, idx).trimEnd();
                if (!contentBeforeBrace.endsWith(',')) contentBeforeBrace += ',';
                cleanBlock = contentBeforeBrace + `\n        img: "assets/images/history/${matchedFile}"\n    ` + cleanBlock.substring(idx);
                appliedCount++;
            }
            return cleanBlock;
        });
    }
});

fs.writeFileSync('quiz_data.js', quizData, 'utf8');
console.log('Re-mapped targets:', appliedCount);
console.log('Unmapped count:', unmapped.length);
if (unmapped.length > 0) console.log('Samples:', unmapped.slice(0, 20));
