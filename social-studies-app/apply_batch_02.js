const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\3fd85745-d0bb-4814-8105-8cf0902fc7bb';
const assetsDir = path.join(__dirname, 'assets', 'images', 'history');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Map answer text -> image name prefix (h_ancient_2 to h_ancient_5 partial)
const updates = {
    // h_ancient_2
    '秦': 'qin_dynasty',
    '漢': 'han_dynasty',
    'シルクロード（絹の道）': 'silk_road',
    '儒教': 'confucianism',
    '高句麗': 'goguryeo',
    '百済': 'baekje',
    '新羅': 'silla',
    '任那（加羅）': 'mimana',
    '呉・蜀': 'wu_shu',

    // h_ancient_3
    '土偶': 'dogu',
    '稲作': 'rice_farming',
    'クニ（小国）': 'kuni_small_countries',

    // h_ancient_4
    '大王（おおきみ）': 'okimi_great_king',
    '渡来人': 'toraijin',
    '王仁（わに）': 'wani_scholar',
    '仏教': 'buddhism_japan',
    '氏姓制度': 'uji_kabane'
};

const files = fs.readdirSync(brainDir);
const imageMap = {};

// Find the generated images and copy them
for (const [answer, prefix] of Object.entries(updates)) {
    const file = files.find(f => f.startsWith(prefix + '_') && f.endsWith('.png'));
    if (file) {
        let unit = 'h_ancient_2';
        if (['土偶', '稲作', 'クニ（小国）'].includes(answer)) unit = 'h_ancient_3';
        if (['大王（おおきみ）', '渡来人', '王仁（わに）', '仏教', '氏姓制度'].includes(answer)) unit = 'h_ancient_4';

        const srcPath = path.join(brainDir, file);
        // Special case to prevent naming collision for Buddhism
        let baseName = `${unit}_${prefix}.png`;
        if (answer === '仏教' && unit === 'h_ancient_4') baseName = `h_ancient_4_buddhism_arrival.png`;

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
