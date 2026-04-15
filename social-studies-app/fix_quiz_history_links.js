const fs = require('fs');

const quizDataPath = 'quiz_data.js';
let quizData = fs.readFileSync(quizDataPath, 'utf8');
const targets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));
const files = fs.readdirSync('assets/images/history').filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

// 1. Rebuild the known robust mapping from previous apply scripts
let combined = {};
fs.readdirSync('.').forEach(f => {
    if (f.startsWith('apply_batch') || f.startsWith('apply_')) {
        let text = fs.readFileSync(f, 'utf8');
        let m = text.match(/const\s+updates\s*=\s*({[\s\S]*?});/);
        if (m) {
            try { let obj = eval('(' + m[1] + ')'); Object.assign(combined, obj); } catch(e) {}
        }
    }
});
fs.readdirSync('.').filter(f => f.endsWith('.json')).forEach(f => {
    try {
        let content = JSON.parse(fs.readFileSync(f, 'utf8'));
        let arr = Array.isArray(content) ? content : (content.found || content.items || []);
        arr.forEach(item => {
            if (item.q && item.a && (item.filename || item.newPath)) {
                let filename = item.filename || item.newPath;
                if(filename.includes('/')) filename = filename.split('/').pop();
                combined[item.a] = filename;
            }
        });
    } catch(e) {}
});

// A small dictionary for common Japanese -> English keywords from the missing set
const jpToEn = {
    '班田収授法': 'handen',
    '庸': 'yo_tax',
    '和同開珎': 'wadokaichin',
    '逃散': 'chosan',
    '万葉集': 'manyoshu',
    '山上憶良': 'yamanoue',
    '聖武天皇': 'shomu',
    '天平文化': 'tenpyo',
    '鑑真': 'ganjin',
    '光明皇后': 'komyo',
    '墾田永年私財法': 'konden',
    '阿倍仲麻呂': 'abe',
    '平安京': 'heian',
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
    '日宋貿易': 'nisso', // or song
    
    // Some basic ones
    '治安維持法': 'chian',
    '普通選挙法': 'fusen',
    '全国水平社': 'suiheisha',
    'ラジオ放送': 'radio',
    '成金': 'narikin',
    '市川房枝': 'ichikawa',
    '本多光太郎': 'honda',
    '柳宗悦': 'yanagi',
    '美濃部達吉': 'minobe',
    '西田幾多郎': 'nishida',
    '大正デモクラシー': 'democracy',
    '女性解放運動': 'josei',
    '三・一独立運動': 'san_ichi',
    '米騒動': 'rice',
    
    '日本の産業革命': 'sangyou',
    '財閥': 'zaibatsu',
    '北里柴三郎': 'kitasato',
    '野口英世': 'noguchi',
    '樋口一葉': 'higuchi',
    '石川啄木': 'ishikawa',
    '岡倉天心': 'okakura',
    '長岡半太郎': 'nagaoka',
    '木村栄': 'kimura',
    '高村光雲': 'takamura',
    '狩野芳崖': 'kanou',
    '荻原守衛': 'ogiwara',
    
    '孫文': 'sun_yat',
    '二十一カ条の要求': 'twenty',
    'シベリア出兵': 'siberia'
};

let applied = 0;
let stillMissing = [];
let usedFiles = new Set();

targets.forEach(t => {
    let matchedFile = null;

    // 1. Try combined dictionary
    if (combined[t.a]) {
        matchedFile = files.find(f => f.includes(combined[t.a]));
    }
    
    // 2. Try jpToEn dictionary
    if (!matchedFile && jpToEn[t.a]) {
        matchedFile = files.find(f => f.startsWith(t.unit + '_') && f.includes(jpToEn[t.a]));
    }
    
    // 3. Try fallback heuristic
    if (!matchedFile) {
        let unitFiles = files.filter(f => f.startsWith(t.unit + '_') && !usedFiles.has(f));
        
        let aRomaji = t.a.toLowerCase().replace(/（.*?）/g, '').replace(/[^\w]/g, '');
        matchedFile = unitFiles.find(f => f.includes(aRomaji));
        
        if (!matchedFile && unitFiles.length === 1) {
            // Process of elimination if only 1 file is unused in this unit
            matchedFile = unitFiles[0];
        }
    }

    if (matchedFile) {
        usedFiles.add(matchedFile);
        
        let qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        let regex = new RegExp(`(q:\\s*["']${qEscaped}["'][\\s\\S]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
        
        if (!quizData.includes(matchedFile)) {
            let replaced = false;
            quizData = quizData.replace(regex, (match, p1, p2) => {
                replaced = true;
                return `${p1},\n            img: "assets/images/history/${matchedFile}"\n        ${p2}`;
            });
            if (replaced) applied++;
            else stillMissing.push(t.a + " (regex fail)");
        }
    } else {
        stillMissing.push(t.a);
    }
});

fs.writeFileSync('quiz_data.js', quizData, 'utf8');

console.log('Successfully mapped and added:', applied);
console.log('Still missing:', stillMissing.length);
if (stillMissing.length > 0) {
    console.log('Sample missing:', stillMissing.slice(0, 20));
}
