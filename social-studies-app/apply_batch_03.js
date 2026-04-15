const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\3fd85745-d0bb-4814-8105-8cf0902fc7bb';
const assetsDir = path.join(__dirname, 'assets', 'images', 'history');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Map answer text -> image name prefix (h_ancient_5 and h_ancient_6 partial)
const updates = {
    // h_ancient_5
    '蘇我氏': 'soga_clan',
    '聖徳太子（厩戸皇子）': 'shotoku_taishi',
    '推古天皇': 'suiko_empress',
    '冠位十二階': 'twelve_ranks',
    '十七条の憲法': 'seventeen_article_constitution',
    '遣隋使': 'kenzuishi',
    '隋': 'sui_dynasty',
    '小野妹子': 'ono_no_imoko',
    '飛鳥文化': 'asuka_culture',
    '天皇家（聖徳太子の一族）': 'imperial_family',
    
    // h_ancient_6
    '大化の改新': 'taika_reforms',
    '公地公民': 'kochi_komin',
    '中臣鎌足（藤原鎌足）': 'nakatomi_no_kamatari',
    '白村江の戦い': 'hakusukinoe',
    '天智天皇': 'emperor_tenji',
    '壬申の乱': 'jinshin_war',
    '大宝律令': 'taiho_code',
    '律令国家': 'ritsuryo_state'
};

const files = fs.readdirSync(brainDir);
const imageMap = {};

// Find the generated images and copy them
for (const [answer, prefix] of Object.entries(updates)) {
    // Find the latest image file for this prefix (in case of retries, take the one with largest timestamp)
    const matchingFiles = files.filter(f => f.startsWith(prefix + '_') && f.endsWith('.png'));
    if (matchingFiles.length > 0) {
        // Sort to get the most recent one if multiple exist
        matchingFiles.sort();
        const file = matchingFiles[matchingFiles.length - 1];
        
        // determine unit string based on keys
        let unit = 'h_ancient_5';
        const ancient6Keys = ['大化の改新', '公地公民', '中臣鎌足（藤原鎌足）', '白村江の戦い', '天智天皇', '壬申の乱', '大宝律令', '律令国家'];
        if (ancient6Keys.includes(answer)) unit = 'h_ancient_6';

        const srcPath = path.join(brainDir, file);
        const baseName = `${unit}_${prefix}.png`;

        const destPath = path.join(assetsDir, baseName);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${file} -> ${baseName}`);
        imageMap[answer] = `assets/images/history/${baseName}`;
    } else {
        console.log(`Warning: Image not found for prefix: ${prefix}`);
    }
}

// Update quiz_data.js
let quizData = fs.readFileSync(quizDataPath, 'utf8');

for (const [answer, imgPath] of Object.entries(imageMap)) {
    const regex = new RegExp(`(a:\\s*["']${answer}["']\\s*,)`);
    if (regex.test(quizData)) {
        const matchIndex = quizData.indexOf(`a: "${answer}"`);
        if (matchIndex === -1) {
            console.log(`Could not precisely locate index for ${answer}`);
            continue;
        }
        
        // Add if img: doesn't exist in the next 200 chars
        const lookahead = quizData.substring(matchIndex, matchIndex + 200);
        if (!lookahead.includes('img:')) {
            quizData = quizData.replace(regex, `$1\n            img: "${imgPath}",`);
            console.log(`Added img for: ${answer}`);
        } else {
            console.log(`Image already exists for: ${answer}`);
        }
    } else {
        console.log(`Warning: Answer not found in quiz_data.js -> ${answer}`);
    }
}

fs.writeFileSync(quizDataPath, quizData, 'utf8');
console.log('Update completed successfully.');
