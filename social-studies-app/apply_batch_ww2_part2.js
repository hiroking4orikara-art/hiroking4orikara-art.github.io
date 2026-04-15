const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\1d28cb1c-5e96-453e-ae95-2729124c35dc';
const destDir = path.join(__dirname, 'images');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

const imgMap = {
    'sangoku_doumei': '日独伊三国同盟',
    'abcd_houijin': 'ABCD包囲陣',
    'gakuto_shutsujin': '学徒出陣',
    'gakudo_sokai': '学童疎開',
    'tokyo_daikuushuu': '東京大空襲',
    'okinawa_sen': '沖縄県',
    'yalta_kaidan': 'ヤルタ会談',
    'genbaku': '広島・長崎',
    'potsdam': 'ポツダム宣言',
    'ghq': 'GHQ',
    'haikyuusei': '配給制',
    'tonarigumi': '隣組',
    'zeitaku_teki': '贅沢（ぜいたく）は敵だ'
};

const files = fs.readdirSync(brainDir).filter(f => f.endsWith('.png'));

let quizData = fs.readFileSync(quizDataPath, 'utf8');
let updateCount = 0;

for (const file of files) {
    const match = file.match(/^(h_modern_[67])_(.+)_\d+\.png$/);
    if (!match) continue;
    
    const key = match[2];
    const answer = imgMap[key];
    
    if (!answer) {
        continue;
    }
    
    // Copy file
    const srcPath = path.join(brainDir, file);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${file}`);
    
    const relativeImgPath = `images/${file}`;
    
    const escapedAnswer = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Some answers are strings, some are arrays: a: "世界恐慌" or a: ["世界恐慌"]
    const regexStr = new RegExp(`(?<=a:\\s*["']${escapedAnswer}["']\\s*,)`);
    const regexArr = new RegExp(`(?<=a:\\s*\\[\\s*["']${escapedAnswer}["']\\s*\\]\\s*,)`);
    
    if (regexStr.test(quizData)) {
        quizData = quizData.replace(regexStr, `\n            img: "${relativeImgPath}",`);
        console.log(`Added img for: ${answer}`);
        updateCount++;
    } else if (regexArr.test(quizData)) {
        quizData = quizData.replace(regexArr, `\n            img: "${relativeImgPath}",`);
        console.log(`Added img for array: ${answer}`);
        updateCount++;
    } else {
        // For cases where there's already an 'img' property, we need to replace it.
        const regexExistingStr = new RegExp(`(a:\\s*["']${escapedAnswer}["']\\s*,)[\\s\\S]*?(img:\\s*["'][^"']*["'],)`);
        if (regexExistingStr.test(quizData)) {
             quizData = quizData.replace(regexExistingStr, `$1\n            img: "${relativeImgPath}",`);
             console.log(`Replaced existing img for: ${answer}`);
             updateCount++;
        } else {
             console.log(`Warning: Answer not found or regex failed in quiz_data.js -> ${answer}`);
        }
    }
}

fs.writeFileSync(quizDataPath, quizData, 'utf8');
console.log(`Update completed successfully. Updates made: ${updateCount}`);
