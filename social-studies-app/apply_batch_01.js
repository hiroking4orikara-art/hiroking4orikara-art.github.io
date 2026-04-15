const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\3fd85745-d0bb-4814-8105-8cf0902fc7bb';
const assetsDir = path.join(__dirname, 'assets', 'images', 'history');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Map answer text -> image name prefix
const updates = {
    'アウストラロピテクス': 'australopithecus',
    '北京原人': 'peking_man',
    'クロマニョン人': 'cro_magnon',
    'エジプト文明': 'egyptian_civ',
    'メソポタミア文明': 'mesopotamian_civ',
    'ハンムラビ法典': 'hammurabi_code',
    '楔形文字': 'cuneiform',
    '殷': 'shang_dynasty',
    '甲骨文字': 'oracle_bone',
    '仏教': 'buddhism',
    'キリスト教': 'christianity',
    'ナイル川': 'nile_river',
    '太陽暦': 'solar_calendar',
    'ユーフラテス川': 'euphrates_river',
    '太陰暦': 'lunar_calendar',
    'ヘレニズム文化': 'hellenistic'
};

const files = fs.readdirSync(brainDir);
const imageMap = {};

// Find the generated images and copy them
for (const [answer, prefix] of Object.entries(updates)) {
    const file = files.find(f => f.startsWith(prefix + '_') && f.endsWith('.png'));
    if (file) {
        const srcPath = path.join(brainDir, file);
        // Clean name to something predictable
        const baseName = `h_ancient_1_${prefix}.png`;
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
            const matchIndex2 = quizData.indexOf(`a: '${answer}'`);
            if (matchIndex2 === -1) {
                console.log(`Could not precisely locate index for ${answer}`);
                continue;
            }
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
