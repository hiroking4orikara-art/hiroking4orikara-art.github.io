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
    'アルプス山脈から北海に注ぐ、ヨーロッパの重要な水上交通路となっている川は？': 'g_gw_1_136_rhine_river_transport',
    '偏西風と暖流の影響で、高緯度のわりに冬でも温暖な気候を何というか？': 'g_gw_1_137_west_coast_marine_climate',
    'ヨーロッパ西岸沖を流れる暖流を何というか？': 'g_gw_1_138_north_atlantic_drift',
    '地中海沿岸で見られる、夏は乾燥し冬に雨が降る気候は？': 'g_gw_1_139_mediterranean_climate',
    'スカンディナビア半島などの高緯度地域で見られる、夏に太陽が沈まない（薄明るい）現象は？': 'g_gw_1_140_midnight_sun',
    '地中海沿岸で盛んな、夏の乾燥に強い作物を育てる農業を何というか？': 'g_gw_1_141_mediterranean_agriculture',
    'ヨーロッパ北部などで見られる、穀物の栽培と家畜の飼育を組み合わせた農業は？': 'g_gw_1_142_mixed_farming',
    '冷涼でやせた土地が多い地域で盛んな、牛などを飼って乳製品を作る農業は？': 'g_gw_1_143_dairy_farming',
    'オランダで見られる、干拓地のことを何というか？': 'g_gw_1_144_polder',
    'ヨーロッパの多くの国が加盟し、経済や政治で深く結びついている組織の略称は？': 'g_gw_1_135_eu_flags', // EU is already handled 
    'ヨーロッパ連合（EU）の多くの国で使われている共通通貨は？': 'g_gw_1_145_eu_euro'
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
