const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let content = fs.readFileSync(quizDataPath, 'utf8');

const updates = [
    { unit: "h_early_modern_3", index: 1, path: "assets/images/history/h_early_modern_3_gosanke.png" },
    { unit: "h_early_modern_3", index: 2, path: "assets/images/history/h_early_modern_3_fudai_daimyo.png" },
    { unit: "h_early_modern_3", index: 3, path: "assets/images/history/h_early_modern_3_sankin_kotai.png" },
    { unit: "h_early_modern_3", index: 4, path: "assets/images/history/h_early_modern_3_buke_shohatto.png" }
];

const cleaned = content.replace('window.QUIZ_DATA =', 'const data =') + '; module.exports = data;';
fs.writeFileSync('temp_apply_partial.js', cleaned);
const QUIZ_DATA = require('./temp_apply_partial.js');

updates.forEach(u => {
    if (QUIZ_DATA[u.unit] && QUIZ_DATA[u.unit][u.index]) {
        QUIZ_DATA[u.unit][u.index].img = u.path;
    }
});

const newContent = 'window.QUIZ_DATA = ' + JSON.stringify(QUIZ_DATA, null, 2) + ';';
fs.writeFileSync(quizDataPath, newContent);
fs.unlinkSync('temp_apply_partial.js');
console.log('Successfully updated partial image paths.');
