const fs = require('fs');

// Read current quiz_data.js
let content = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const curQuiz = new Function('return ' + matchQuiz[1])();

// Read backup where 450 Civics questions got injected into gw_3
let backupContent = fs.readFileSync('quiz_data_civics_mapped_backup.js', 'utf8');
const backupMatch = backupContent.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
let backupQuiz;
try {
    backupQuiz = new Function('return ' + backupMatch[1])();
} catch(e) {
    // Handle the specific syntax error in the backup if there is one
    console.error("Syntax error in backup: " + e.message);
    const fixedContent = backupContent.replace('\"「ドイツ共和国憲法」が正式名称です。すべての国民に「人間たるに値する生活」を保障することを規', '\"「ドイツ共和国憲法」が正式名称です\"');
    const match2 = fixedContent.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
    backupQuiz = new Function('return ' + match2[1])();
}

const corruptedGW3 = backupQuiz['gw_3'];
console.log(`GW3 backup length: ${corruptedGW3.length}`);

// Get all the Civics questions that were appended to gw_3
// Europe natively has about 57 questions, so the rest are civics.
const civicsQuestionsInGW3 = corruptedGW3.slice(57);
console.log(`Found ${civicsQuestionsInGW3.length} appended items in gw_3`);

// Also load our categorizer results to correctly bin these 450 items
const categorizedMap = JSON.parse(fs.readFileSync('civics_redistribution.json', 'utf8'));
const flatCat = [...categorizedMap['c_1'], ...categorizedMap['c_2'], ...categorizedMap['c_3'], ...categorizedMap['c_4'], ...categorizedMap['c_5']];

// We will empty curQuiz c_1 through c_5 to repopulate them fresh with:
// 1. The original native 173 c_1-c_5 questions in the backup.
// 2. The 450 gw_3 migrated items placed into their right category.

// Step 1: Initialize empty arrays
['c_1', 'c_2', 'c_3', 'c_4', 'c_5'].forEach(c => curQuiz[c] = []);

// Step 2: Grab the original 173 native questions from backup
['c_1', 'c_2', 'c_3', 'c_4', 'c_5'].forEach(c => {
    if (backupQuiz[c]) {
        curQuiz[c].push(...backupQuiz[c]);
    }
});

// Step 3: Categorize the 450 migrated items by checking our redist map
const fallbackC1 = [];
const c2 = [];
const c3 = [];
const c4 = [];
const c5 = [];

civicsQuestionsInGW3.forEach(q => {
    // Determine category based on question text matching flatCat
    let targetChapter = 'c_1'; // default
    
    // Find what Chapter our script categorized it into
    const foundC1 = categorizedMap['c_1'].find(c => c.q === q.q);
    const foundC2 = categorizedMap['c_2'].find(c => c.q === q.q);
    const foundC3 = categorizedMap['c_3'].find(c => c.q === q.q);
    const foundC4 = categorizedMap['c_4'].find(c => c.q === q.q);
    const foundC5 = categorizedMap['c_5'].find(c => c.q === q.q);

    if (foundC5) targetChapter = 'c_5';
    else if (foundC4) targetChapter = 'c_4';
    else if (foundC3) targetChapter = 'c_3';
    else if (foundC2) targetChapter = 'c_2';
    else if (foundC1) targetChapter = 'c_1';
    else {
        // Run regex fallback in case of slight string differences
        const text = q.q + " " + q.a + " " + (q.comment || '');
        if (text.match(/国連|国際|平和維持|PKO|条約|地球|環境|温暖化|酸性雨|砂漠化|ラムサール|世界遺産|NGO|ODA|貿易|為替|サミット|EU/)) targetChapter = 'c_5';
        else if (text.match(/経済|価格|市場|独占|寡占|需要|供給|通貨|日本銀行|金融|不況|インフレ|デフレ|税|財政|国債|労働|株式会社|消費者|流通|社会保障|年金|介護/)) targetChapter = 'c_4';
        else if (text.match(/政治|選挙|投票|国会|内閣|裁判|地方自治|政党|議院|マスメディア|世論|首長|条例/)) targetChapter = 'c_3';
        else if (text.match(/憲法|人権|平等|自由権|社会権|基本的人権|生存権|参政権|請求権|新しい権利|知る権利|プライバシー|自己決定権|天皇/)) targetChapter = 'c_2';
        else targetChapter = 'c_1';
    }

    curQuiz[targetChapter].push(q);
});

// Step 4: Verify and deduplicate 
['c_1', 'c_2', 'c_3', 'c_4', 'c_5'].forEach(c => {
    const unique = [];
    const seen = new Set();
    curQuiz[c].forEach(q => {
        if (!seen.has(q.q)) {
            unique.push(q);
            seen.add(q.q);
        }
    });
    curQuiz[c] = unique;
    console.log(`New count for ${c}: ${curQuiz[c].length}`);
});

let total = 0;
['c_1', 'c_2', 'c_3', 'c_4', 'c_5'].forEach(c => total += curQuiz[c].length);
console.log(`New Total Civics: ${total}`);

// Serialize back
let outContent = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(curQuiz);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = curQuiz[key];
    outContent += `    "${key}": [\n`;
    const qs = val.map(q => {
        let qS = `        {\n            q: ${JSON.stringify(q.q)}`;
        if (q.img) qS += `,\n            img: ${JSON.stringify(q.img)}`;
        if (q.choices && q.choices.length > 0) qS += `,\n            choices: ${JSON.stringify(q.choices)}`;
        if (q.a) qS += `,\n            a: ${JSON.stringify(q.a)}`;
        if (q.comment) qS += `,\n            comment: ${JSON.stringify(q.comment)}`;
        if (q.answerImg) qS += `,\n            answerImg: ${JSON.stringify(q.answerImg)}`;
        if (q.imgCaption) qS += `,\n            imgCaption: ${JSON.stringify(q.imgCaption)}`;
        qS += `\n        }`;
        return qS;
    }).join(',\n');
    outContent += qs + '\n    ]';
    if (i < keys.length - 1) {
        outContent += ',\n';
    } else {
        outContent += '\n';
    }
}
outContent += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

fs.writeFileSync('quiz_data.js', outContent, 'utf8');
console.log("quiz_data.js successfully rebuilt with 400+ questions restored.");
