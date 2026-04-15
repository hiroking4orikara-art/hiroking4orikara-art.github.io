const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\3b89aff4-afd4-41ec-9431-984d52f9d3ca';
const assetsDir = path.join(__dirname, 'assets', 'images', 'history');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

// 1. Rename and Copy Images
const files = fs.readdirSync(brainDir);
const imageMap = {}; // keyword -> filename

files.forEach(file => {
    if (file.endsWith('.png')) {
        // e.g., h_ancient_3_yayoi_1772082280615.png -> h_ancient_3_yayoi.png
        const match = file.match(/^(h_ancient_\d+_[a-z]+)_\d+\.png$/);
        if (match) {
            const baseName = match[1] + '.png';
            const srcPath = path.join(brainDir, file);
            const destPath = path.join(assetsDir, baseName);
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied: ${file} -> ${baseName}`);
            
            // Map the identifier (e.g., h_ancient_3_yayoi) to its image path
            imageMap[match[1]] = `assets/images/history/${baseName}`;
        }
    }
});

// 2. Update quiz_data.js
let quizData = fs.readFileSync(quizDataPath, 'utf8');

// The updates map: Answer -> Key in imageMap
const updates = {
    // h_ancient_3
    '弥生時代': 'h_ancient_3_yayoi',
    '石包丁': 'h_ancient_3_ishibocho',
    '高床倉庫': 'h_ancient_3_takayuka',
    '金属器': 'h_ancient_3_kinzokuki',
    '吉野ヶ里遺跡': 'h_ancient_3_yoshinogari',
    '登呂遺跡': 'h_ancient_3_toro',
    // h_ancient_4
    '古墳': 'h_ancient_4_kofun',
    '前方後円墳': 'h_ancient_4_zenpokoenfun',
    '大仙古墳（仁徳天皇陵）': 'h_ancient_4_daisenkofun',
    '埴輪': 'h_ancient_4_haniwa',
    'ヤマト政権': 'h_ancient_4_yamato',
    'ワカタケル大王（雄略天皇）': 'h_ancient_4_wakatakeru',
    '倭の五王': 'h_ancient_4_fivekings',
    '須恵器': 'h_ancient_4_sueki',
    '好太王碑（広開土王碑）': 'h_ancient_4_gwanggaeto',
    // h_ancient_5
    '法隆寺': 'h_ancient_5_horyuji',
    '釈迦三尊像': 'h_ancient_5_shakasonzo'
};

for (const [answer, imgKey] of Object.entries(updates)) {
    if (imageMap[imgKey]) {
        const imgPath = imageMap[imgKey];
        // Regex to find the answer line and insert the img line right after it
        // Example: a: "弥生時代",
        const regex = new RegExp(`(a:\\s*["']${answer}["']\\s*,)`);
        if (regex.test(quizData)) {
            // Check if img is already there
            const matchIndex = quizData.indexOf(`a: "${answer}"`);
            const nextLineIndex = quizData.indexOf('\\n', matchIndex);
            if (!quizData.substring(matchIndex, matchIndex + 200).includes('img:')) {
                quizData = quizData.replace(regex, `$1\n            img: "${imgPath}",`);
                console.log(`Added img for: ${answer}`);
            } else {
                console.log(`Image already exists for: ${answer}`);
            }
        } else {
            console.log(`Warning: Answer not found in quiz_data.js -> ${answer}`);
        }
    } else {
        console.log(`Image not found in brain dir for key: ${imgKey}`);
    }
}

fs.writeFileSync(quizDataPath, quizData, 'utf8');
console.log('Update completed successfully.');
