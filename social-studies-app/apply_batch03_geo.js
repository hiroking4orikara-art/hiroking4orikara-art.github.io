const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\733b2827-9e67-4710-b400-afc8cb3fa607';
const destDir = path.join(__dirname, 'assets', 'images', 'geography');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// mapping full question text to the image prefix
const updates = {
    'マダガスカル島に生息する': 'g_gw_4_25',
    '8月から9月にかけてメキシコ湾岸地域などを襲う': 'g_gw_5_26',
    '地域の気候や土壌などの自然条件に合わせて': 'g_gw_5_27',
    'ロッキー山脈の東側に広がる、雨が少ない草原地帯': 'g_gw_5_28',
    'ミシシッピ川の西からロッキー山脈にかけて広がる': 'g_gw_5_29',
    '農産物の生産だけでなく、加工・流通・販売まで': 'g_gw_5_30',
    'キューバ危機などで知られる、カリブ海の社会主義国': 'g_gw_5_31',
    '数年に一度、ペルー沖の海水温が異常に高く': 'g_gw_6_32',
    '特定の農産物や鉱産資源の生産・輸出に依存する': 'g_gw_6_33',
    'チリ北部にある、世界で最も乾燥した砂漠': 'g_gw_6_34',
    'ニュージーランドの北島・南島などが属する': 'g_gw_7_35',
    'サンゴ礁の島々など、標高が低いために地球温暖化': 'g_gw_7_36',
    '三陸海岸や志摩半島に見られる、入り江と岬が': 'g_gw_7_37',
    '川が山地から平地に出るところに、土砂が積もって': 'g_gw_7_38',
    '川が海や湖に流れ出る河口付近に、細かい土砂が': 'g_gw_7_39'
};

const files = fs.readdirSync(brainDir);
const imageMap = {};

for (const [qText, prefix] of Object.entries(updates)) {
    const file = files.find(f => f.startsWith(prefix + '_') && f.endsWith('.png'));
    if (file) {
        const srcPath = path.join(brainDir, file);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${file}`);
        imageMap[qText] = `assets/images/geography/${file}`;
    } else {
        console.log(`Warning: Image not found for prefix: ${prefix}`);
    }
}

let quizData = fs.readFileSync(quizDataPath, 'utf8');
let modified = false;

for (const [qText, imgPath] of Object.entries(imageMap)) {
    // Find the question in quiz_data.js
    // Look for `q: "マダガスカル島に生息する...`
    const qIndex = quizData.indexOf(qText);
    if (qIndex === -1) {
        console.log(`Could not precisely locate question: ${qText.substring(0, 20)}...`);
        continue;
    }

    // Now find the end of this question block, basically find typical closing brace `}` 
    // or look for `comment:` and add it after.
    // It's safer to find `comment: "..."` within the next ~500 chars and insert after it.
    const searchArea = quizData.substring(qIndex, qIndex + 1000);
    const explMatch = searchArea.match(/comment:\s*("([^"\\]|\\.)*"|'([^'\\]|\\.)*')/);
    
    if (explMatch) {
        // Did we already add answerImg?
        if (searchArea.includes('answerImg:')) {
            console.log(`Already has answerImg: ${qText.substring(0, 20)}...`);
            continue;
        }

        const explStr = explMatch[0]; // e.g. explanation: "..."
        const replacement = `${explStr},\n            answerImg: "${imgPath}",\n            imgCaption: "※画像はイメージです"`;
        
        // We must replace only the FIRST occurrence of explStr starting from qIndex to avoid replacing elsewhere
        const beforeQ = quizData.substring(0, qIndex);
        const afterQ = quizData.substring(qIndex);
        
        const newAfterQ = afterQ.replace(explStr, replacement);
        quizData = beforeQ + newAfterQ;
        modified = true;
        console.log(`Added answerImg for: ${imgPath}`);
    } else {
        console.log(`Could not find comment block for: ${qText.substring(0, 20)}...`);
    }
}

if (modified) {
    fs.writeFileSync(quizDataPath, quizData, 'utf8');
    console.log('Update completed successfully.');
} else {
    console.log('No modifications were made to quiz_data.js');
}
