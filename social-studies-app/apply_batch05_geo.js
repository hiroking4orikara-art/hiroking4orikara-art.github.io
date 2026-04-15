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
    '経度180度の線のほぼ上にある、日付が変わる基準となる線を何というか？': 'g_gw_1_16_international_date_line',
    '経度が15度違うと、時間の差（時差）は何時間になるか？': 'g_gw_1_17_time_difference',
    '北極を中心とした地図（正距方位図法）の特徴として正しいものは？': 'g_gw_1_18_azimuthal_projection',
    '面積が正しい地図（モルワイデ図法など）は何に使われることが多いか？': 'g_gw_1_19_mollweide_projection',
    '角度が正しい地図（メルカトル図法）は何に使われることが多いか？': 'g_gw_1_20_mercator_projection',
    '世界を6つの州に分けたとき、日本が含まれる州はどこか？': 'g_gw_1_21_asia',
    'ヨーロッパ州とアジア州を合わせた大陸を何と呼ぶか？': 'g_gw_1_22_eurasia',
    'カナダのイヌイットがかつて冬の住居として使っていた、雪を固めて作ったドーム型の家は？': 'g_gw_1_23_igloo',
    'アンデス山脈などの高地で飼育されている、毛を利用するための家畜は？': 'g_gw_1_24_alpaca',
    '地中海沿岸で見られる、夏の乾燥と冬の降雨という気候は何というか？': 'g_gw_1_25_mediterranean_climate',
    '偏西風と暖流の影響で、高緯度のわりに冬でも温暖な西ヨーロッパの気候は？': 'g_gw_1_26_west_coast_marine_climate',
    '寒帯のうち、短い夏にコケ類のみが育つ気候を何というか？': 'g_gw_1_27_tundra',
    '南半球のオーストラリアなどが属する州を何というか？': 'g_gw_1_28_oceania',
    '世界で最も人口が多い国（2023年時点）はどこか？': 'g_gw_1_29_high_population',
    '国境線が直線的になっていることが多い地域はどこか？': 'g_gw_1_30_africa_borders'
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
