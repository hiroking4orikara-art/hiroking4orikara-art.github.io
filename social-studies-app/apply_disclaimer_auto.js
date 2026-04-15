const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let content = fs.readFileSync(quizDataPath, 'utf8');

const cleaned = content.replace('window.QUIZ_DATA =', 'const data =') + '; module.exports = data;';
fs.writeFileSync('temp_disclaimer.js', cleaned);
const QUIZ_DATA = require('./temp_disclaimer.js');

let count = 0;
for (const unitId in QUIZ_DATA) {
    // h_modern_5, h_modern_6, h_modern_7, h_contemporary_* を対象にする
    if (unitId.startsWith('h_modern_5') || unitId.startsWith('h_modern_6') || unitId.startsWith('h_modern_7') || unitId.startsWith('h_contemporary')) {
        QUIZ_DATA[unitId].forEach(q => {
            if (q.img && q.img !== "" && !q.img.includes('placeholder')) {
                q.imgCaption = "※画像はイメージです";
                count++;
            }
        });
    }
}

const newContent = 'window.QUIZ_DATA = ' + JSON.stringify(QUIZ_DATA, null, 2) + ';';
fs.writeFileSync(quizDataPath, newContent);
fs.unlinkSync('temp_disclaimer.js');
console.log(`Successfully applied disclaimer to ${count} questions.`);
