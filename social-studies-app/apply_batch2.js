const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\d9d0946d-ddd3-4d45-9c27-133b5d1a1f51';
const assetsDir = path.join(__dirname, 'assets', 'images', 'history');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

// 1. Rename and Copy Images
const files = fs.readdirSync(brainDir);
const imageMap = {};

const regex = /^(h_ancient_\d+_[a-z_]+)_\d+\.png$/;

files.forEach(file => {
    if (file.endsWith('.png')) {
        const match = file.match(regex);
        if (match) {
            const baseName = match[1] + '.png';
            const srcPath = path.join(brainDir, file);
            const destPath = path.join(assetsDir, baseName);
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied: ${file} -> ${baseName}`);
            
            imageMap[match[1]] = `assets/images/history/${baseName}`;
        }
    }
});

// 2. Update quiz_data.js
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const updates = {
    '持統天皇': 'h_ancient_6_jito',
    '平城京': 'h_ancient_7_heijokyo',
    '長安': 'h_ancient_7_changan',
    '元明天皇': 'h_ancient_7_genmei',
    '木簡': 'h_ancient_7_mokkan',
    '古事記': 'h_ancient_7_kojiki',
    '日本書紀': 'h_ancient_7_nihon_shoki',
    '風土記': 'h_ancient_7_fudoki',
    '大仏（盧舎那仏）': 'h_ancient_8_daibutsu',
    '行基': 'h_ancient_8_gyoki',
    '正倉院': 'h_ancient_8_shosoin',
    '唐招提寺': 'h_ancient_8_toshodaiji',
    '阿修羅像': 'h_ancient_8_ashura',
    '校倉造': 'h_ancient_8_azekura',
    '荘園': 'h_ancient_8_shoen',
    '天台宗': 'h_ancient_9_tendai',
    '真言宗': 'h_ancient_9_shingon'
};

for (const [answer, imgKey] of Object.entries(updates)) {
    if (imageMap[imgKey]) {
        const imgPath = imageMap[imgKey];
        // Ensure proper escaping for strings that might have parentheses
        const escapedAnswer = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(a:\\s*["']${escapedAnswer}["']\\s*,)`);
        
        if (regex.test(quizData)) {
            quizData = quizData.replace(regex, `$1\n            img: "${imgPath}",`);
            console.log(`Added img for: ${answer}`);
        } else {
            console.log(`Warning: Answer not found in quiz_data.js -> ${answer}`);
        }
    } else {
        console.log(`Image not found in brain dir for key: ${imgKey}`);
    }
}

fs.writeFileSync(quizDataPath, quizData, 'utf8');
console.log('Update completed successfully.');
