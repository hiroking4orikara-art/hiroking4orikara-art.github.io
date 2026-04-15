const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\3fd85745-d0bb-4814-8105-8cf0902fc7bb';
const assetsDir = path.join(__dirname, 'assets', 'images', 'history');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

// 聖徳太子の再生成画像を適用する
const prefix = 'shotoku_taishi_2';
const files = fs.readdirSync(brainDir);
const matchingFiles = files.filter(f => f.startsWith(prefix + '_') && f.endsWith('.png'));

if (matchingFiles.length > 0) {
    matchingFiles.sort();
    const file = matchingFiles[matchingFiles.length - 1];
    
    const srcPath = path.join(brainDir, file);
    const baseName = `h_ancient_5_shotoku_taishi.png`;
    const destPath = path.join(assetsDir, baseName);
    
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${file} -> ${baseName}`);
    
    let quizData = fs.readFileSync(quizDataPath, 'utf8');
    const answer = '聖徳太子（厩戸皇子）';
    const regex = new RegExp(`(a:\\s*["']${answer}["']\\s*,)`);
    
    if (regex.test(quizData)) {
        const matchIndex = quizData.indexOf(`a: "${answer}"`);
        if (matchIndex !== -1) {
            const lookahead = quizData.substring(matchIndex, matchIndex + 200);
            if (!lookahead.includes('img:')) {
                quizData = quizData.replace(regex, `$1\n            img: "assets/images/history/${baseName}",`);
                console.log(`Added img for: ${answer}`);
                fs.writeFileSync(quizDataPath, quizData, 'utf8');
            } else {
                console.log(`Image already exists for: ${answer}`);
            }
        }
    }
} else {
    console.log('Image not found for Shotoku Taishi 2');
}
