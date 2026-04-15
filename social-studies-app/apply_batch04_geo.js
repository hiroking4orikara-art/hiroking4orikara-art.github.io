const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\27c62907-4087-4b76-ac88-d7d850a32e8c';
const destDir = path.join(__dirname, 'assets', 'images', 'geography');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// mapping full question text to the image prefix
const updates = {
    '地球の表面積のうち、陸地と海洋の割合はおよそいくつか？': 'g_gw_1_01_earth_surface',
    '地球上で最も面積が大きい大陸はどれか？': 'g_gw_1_02_eurasia_continent',
    '世界で最も広い海洋はどれか？': 'g_gw_1_03_pacific_ocean',
    '本初子午線が通る都市はどこか？': 'g_gw_1_04_prime_meridian',
    '緯度0度の線を何というか？': 'g_gw_1_05_equator',
    '東南アジアや南アジアでよく見られる、高温多湿な気候に適した住居は？': 'g_gw_1_06_stilt_house',
    '乾燥した地域で、日干しレンガを使って作られる家の特徴は？': 'g_gw_1_07_adobe_house',
    'モンゴルの遊牧民が移動生活で使用する組み立て式の住居を何というか？': 'g_gw_1_08_ger_yurt',
    '赤道周辺に広がる、一年中気温が高く雨が多い気候帯は？': 'g_gw_1_09_tropical_climate',
    '樹木が育たないほど雨が少ない気候帯は？': 'g_gw_1_10_arid_climate',
    '日本が属している、四季の変化がはっきりしている気候帯は？': 'g_gw_1_11_temperate_climate',
    '北半球の北部に見られる、冬の寒さが厳しく、タイガと呼ばれる針葉樹林が広がる気候帯は？': 'g_gw_1_12_subarctic_climate',
    '最も小さい大陸はどれか？': 'g_gw_1_13_australia_continent',
    '地球儀における、距離や面積、方位などが正しいかを表すための「縦の線」を何というか？': 'g_gw_1_14_longitude',
    '地球儀における「横の線」を何というか？': 'g_gw_1_15_latitude'
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
    // We search with the first 20 characters of the question to avoid formatting issues
    const shortQ = qText.substring(0, 20);
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
