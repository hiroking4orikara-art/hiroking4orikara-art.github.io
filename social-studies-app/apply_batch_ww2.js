const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\1d28cb1c-5e96-453e-ae95-2729124c35dc';
const destDir = path.join(__dirname, 'images');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

const imgMap = {
    'sekai_kyoukou': '世界恐慌',
    'block_keizai': 'ブロック経済',
    'hitler': 'ヒトラー',
    'gandhi': 'ガンディー',
    'manshu_jihen': '満州事変',
    'kokusai_renmei': '国際連盟',
    '515_jihen': '五・一五事件',
    '226_jihen': '二・二六事件',
    'nitchu_sensou': '日中戦争',
    'nankin_jihen': '南京事件',
    'kokka_soudouin': '国家総動員法',
    'hakkou_ichiu': '八紘一宇',
    'taisei_yokusankai': '大政翼賛会',
    'daitoua_kyoueiken': '大東亜共栄圏',
    'taiheiyou_sensou': '太平洋戦争',
    'midway': 'ミッドウェー海戦'
};

const files = fs.readdirSync(brainDir).filter(f => f.endsWith('.png'));

let quizData = fs.readFileSync(quizDataPath, 'utf8');

for (const file of files) {
    const match = file.match(/^(h_modern_[67])_(.+)_\d+\.png$/);
    if (!match) continue;
    
    const unit = match[1];
    const key = match[2];
    const answer = imgMap[key];
    
    if (!answer) {
        console.log('No map for: ' + key);
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
    } else if (regexArr.test(quizData)) {
        quizData = quizData.replace(regexArr, `\n            img: "${relativeImgPath}",`);
        console.log(`Added img for array: ${answer}`);
    } else {
        console.log(`Warning: Answer not found in quiz_data.js -> ${answer}`);
    }
}

fs.writeFileSync(quizDataPath, quizData, 'utf8');
console.log('Update completed successfully.');
