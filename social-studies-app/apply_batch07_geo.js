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
    'オーストラリアやニュージーランドの国旗に描かれている、イギリスとの結びつきを示す模様は？': 'g_gw_1_46_union_jack_flag',
    'ブラジル、ロシア、インド、中国、南アフリカなどの新興経済国を総称して何と呼ぶか？': 'g_gw_1_47_brics',
    '西アジア（中東）の国々が多く産出し、経済を支えている資源は？': 'g_gw_1_48_middle_east_oil',
    '世界で最も面積の大きい国は？': 'g_gw_1_49_russia',
    '日本の標準時子午線は東経何度か？': 'g_gw_1_50_akashi_meridian',
    '日本から見て、地球上で最も遠い（裏側にある）大陸は？': 'g_gw_1_51_south_america_antipode',
    '南極大陸にある、各国の観測基地での活動が制限されている条約は？': 'g_gw_1_52_antarctic_treaty',
    '北緯40度以北の都市が多いヨーロッパで、冬でも比較的暖かい理由に関係する海流は？': 'g_gw_1_53_north_atlantic_current',
    'イタリアやフランスなどで盛んな、オリーブやブドウを作る農業を何というか？': 'g_gw_1_54_mediterranean_agriculture',
    'アメリカ合衆国のように、多様な民族や文化が混在している社会を何というか？': 'g_gw_1_55_melting_pot',
    '中国の人口の9割以上を占める民族は？': 'g_gw_1_56_han_chinese',
    '東南アジアで信仰する人が多い、仏教やイスラム教以外の宗教は、フィリピンなどで何が多いか？': 'g_gw_1_57_christianity_philippines',
    'アフリカ大陸で広く話されている、植民地時代の宗主国の言葉ではない言語群は？': 'g_gw_1_58_african_languages',
    'オーストラリアの先住民を何というか？': 'g_gw_1_59_aboriginal',
    'ニュージーランドの先住民を何というか？': 'g_gw_1_60_maori'
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
    // We search with the first 15 characters of the question to avoid formatting issues
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
