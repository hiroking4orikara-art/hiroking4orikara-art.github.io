const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let content = fs.readFileSync(quizDataPath, 'utf8');

const updates = [
    { unit: "h_medieval_5", index: 0, path: "assets/images/history/h_medieval_5_ming.png" },
    { unit: "h_medieval_5", index: 1, path: "assets/images/history/h_medieval_5_joseon.png" },
    { unit: "h_medieval_5", index: 6, path: "assets/images/history/h_medieval_5_hangeul.png" },
    { unit: "h_medieval_6", index: 2, path: "assets/images/history/h_medieval_6_noh.png" },
    { unit: "h_medieval_7", index: 2, path: "assets/images/history/h_medieval_7_hosokawa.png" },
    { unit: "h_medieval_7", index: 13, path: "assets/images/history/h_medieval_7_gion.png" },
    { unit: "h_early_modern_1", index: 10, path: "assets/images/history/h_early_modern_1_silver.png" },
    { unit: "h_early_modern_3", index: 0, path: "assets/images/history/h_early_modern_3_sekigahara.png" },
    { unit: "h_modern_5", index: 7, path: "assets/images/history/h_modern_5_hara_takashi.png" }
];

const cleaned = content.replace('window.QUIZ_DATA =', 'const data =') + '; module.exports = data;';
fs.writeFileSync('temp_apply_new.js', cleaned);
const QUIZ_DATA = require('./temp_apply_new.js');

updates.forEach(u => {
    if (QUIZ_DATA[u.unit] && QUIZ_DATA[u.unit][u.index]) {
        QUIZ_DATA[u.unit][u.index].img = u.path;
    }
});

const newContent = 'window.QUIZ_DATA = ' + JSON.stringify(QUIZ_DATA, null, 2) + ';';
fs.writeFileSync(quizDataPath, newContent);
fs.unlinkSync('temp_apply_new.js');
console.log('Successfully updated new image paths.');
