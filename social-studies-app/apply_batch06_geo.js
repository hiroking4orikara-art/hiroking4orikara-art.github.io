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
    '地球の反対側の地点のことを何というか？': 'g_gw_1_31_antipode',
    'ロンドンが昼の12時のとき、日本の時刻は何時か？': 'g_gw_1_32_london_japan_time',
    '南アメリカのブラジルで主に話されている言語は何か？': 'g_gw_1_33_brazil_portuguese',
    '東南アジア諸国連合の略称は？': 'g_gw_1_34_asean',
    'ヨーロッパ連合の略称は？': 'g_gw_1_35_eu',
    'イスラム教徒が食べない肉は何か？': 'g_gw_1_36_islam_pork',
    'ヒンドゥー教で神聖な動物とされ、食べることを避けられているのは？': 'g_gw_1_37_hindu_cow',
    '世界で最も信者数が多い宗教は？': 'g_gw_1_38_christianity',
    'インドの女性が着る、一枚の長い布を巻く民族衣装は？': 'g_gw_1_39_sari',
    'アンデス山脈の先住民が着る、防寒用のマントのような衣服は？': 'g_gw_1_40_poncho',
    '東南アジアや東アジアの主食として広く栽培されている作物は？': 'g_gw_1_41_rice_paddy',
    'ヨーロッパや北アメリカで主食として広く食べられている作物は？': 'g_gw_1_42_wheat_field',
    '熱帯のうち、雨季と乾季がはっきり分かれ、背の高い草が生える気候は？': 'g_gw_1_43_savanna',
    '熱帯雨林地域でよく見られる、午後に降る激しい雨を何というか？': 'g_gw_1_44_squall',
    '地中海沿岸の家々で、壁を白く塗ったり石造りにしたりする理由は？': 'g_gw_1_45_mediterranean_houses'
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
