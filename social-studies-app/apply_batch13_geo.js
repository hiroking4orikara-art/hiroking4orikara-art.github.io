const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\a8309f7c-0d37-4949-96cc-41f3892f1773';
const destDir = path.join(__dirname, 'assets', 'images', 'geography');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Ensure the mapping connects the unique question text to the proper generated image
const updates = {
    '中国の長江中流に建設された、世界最大級の水力発電用ダムは？': 'g_gw_1_126_three_gorges_dam',
    '東南アジアなどの蒸し暑い地域で見られる、風通しを良くし、湿気や動物を防ぐための住居は？': 'g_gw_1_127_stilt_house_asia',
    'アジア州の中で人口や面積が非常に大きく、首都を北京とするこの国のなまえは？': 'g_gw_1_128_china_map',
    '南アジアに位置し、IT産業が盛んで、近年人口が世界一となったこの国のなまえは？': 'g_gw_1_129_india_it',
    '西アジア（中東）にあり、世界有数の石油の産出国であるこの国のなまえは？': 'g_gw_1_130_saudi_arabia_oil',
    'ヨーロッパ州とアジア州の境界となっている、南北に走る山脈は？': 'g_gw_1_131_ural_mountains_border',
    'ヨーロッパ南部を東西に走る、険しい山脈は？': 'g_gw_1_132_alps_mountains_europe',
    'スカンディナビア半島などで見られる、氷河によって削られてできた複雑な海岸線を何というか？': 'g_gw_1_133_fjord_scandinavia',
    'ヨーロッパ北部を流れ、複数の国を通って黒海や北海に注ぐ川のことを何というか？': 'g_gw_1_134_rhine_river_europe',
    'ヨーロッパの多くの国が加盟し、経済や政治で深く結びついている組織の略称は？': 'g_gw_1_135_eu_flags' // Added based on context of EU question
};

const files = fs.readdirSync(brainDir);
const imageMap = {};

for (const [qText, prefix] of Object.entries(updates)) {
    const file = files.find(f => f.startsWith(prefix + '_') && f.endsWith('.png'));
    if (file) {
        const srcPath = path.join(brainDir, file);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${file}`);
        imageMap[qText] = `assets/images/geography/${file}`;
    } else {
        console.log(`Warning: Image not found for prefix: ${prefix}`);
    }
}

let quizData = fs.readFileSync(quizDataPath, 'utf8');
let modified = false;

for (const [qText, imgPath] of Object.entries(imageMap)) {
    const shortQ = qText.substring(0, 15);
    const qIndex = quizData.indexOf(shortQ);
    if (qIndex === -1) {
        console.log(`Could not precisely locate question: ${shortQ}...`);
        continue;
    }

    const searchArea = quizData.substring(qIndex, qIndex + 1000);
    const explMatch = searchArea.match(/comment:\s*("([^"\\]|\\.)*"|'([^'\\]|\\.)*')/);
    
    if (explMatch) {
        if (searchArea.includes('answerImg:')) {
            console.log(`Already has answerImg: ${shortQ}...`);
            continue;
        }

        const explStr = explMatch[0]; 
        const replacement = `${explStr},\n            answerImg: "${imgPath}",\n            imgCaption: "※画像はイメージです"`;
        
        const beforeQ = quizData.substring(0, qIndex);
        const afterQ = quizData.substring(qIndex);
        
        const newAfterQ = afterQ.replace(explStr, replacement);
        quizData = beforeQ + newAfterQ;
        modified = true;
        console.log(`Added answerImg for: ${imgPath}`);
    } else {
        console.log(`Could not find comment block for: ${shortQ}...`);
    }
}

if (modified) {
    fs.writeFileSync(quizDataPath, quizData, 'utf8');
    console.log('Update completed successfully.');
} else {
    console.log('No modifications were made to quiz_data.js');
}
