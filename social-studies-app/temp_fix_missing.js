const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');
let modified = false;

const fixes = [
    {
        search: 'ヒンドゥー教徒が',
        img: 'assets/images/geography/g_gw_1_125_gange_river_1773417891937.png'
    },
    {
        search: '穀物の栽培と家畜の飼育',
        img: 'assets/images/geography/g_gw_1_142_mixed_farming_1773418250632.png'
    },
    {
        search: '牛などを飼って乳製品を作る農業は',
        img: 'assets/images/geography/g_gw_1_143_dairy_farming_1773418265578.png'
    },
    {
        search: 'オランダで見られる、干拓地のことを',
        img: 'assets/images/geography/g_gw_1_144_polder_1773418278597.png'
    },
    {
        search: 'ヨーロッパの多くの国で使われている共通通貨',
        img: 'assets/images/geography/g_gw_1_145_eu_euro_1773418292302.png'
    }
];

for (const fix of fixes) {
    const qIndex = quizData.indexOf(fix.search);
    if (qIndex === -1) {
        console.log(`Could not find: ${fix.search}`);
        continue;
    }
    
    // Find the comment block backwards or forwards
    const startIdx = Math.max(0, qIndex - 500);
    const searchArea = quizData.substring(startIdx, qIndex + 1000);
    const explMatch = searchArea.match(/comment:\s*("([^"\\]|\\.)*"|'([^'\\]|\\.)*')/);
    
    if (explMatch) {
        const explStr = explMatch[0];
        if (searchArea.includes('answerImg: "assets/images/geography/g_gw_1_' + fix.img.split('_')[3])) {
            console.log(`Already applied: ${fix.search}`);
            continue;
        }

        const replacement = `${explStr},\n            answerImg: "${fix.img}",\n            imgCaption: "※画像はイメージです"`;
        const absMatchIndex = startIdx + explMatch.index;
        
        const before = quizData.substring(0, absMatchIndex);
        const after = quizData.substring(absMatchIndex + explStr.length);
        quizData = before + replacement + after;
        modified = true;
        console.log(`Fixed: ${fix.search}`);
    } else {
        console.log(`Could not find comment block for: ${fix.search}`);
    }
}

if (modified) {
    fs.writeFileSync(quizDataPath, quizData, 'utf8');
    console.log('Saved fixes.');
}
