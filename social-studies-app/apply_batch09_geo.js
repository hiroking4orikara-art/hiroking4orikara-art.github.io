const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\27c62907-4087-4b76-ac88-d7d850a32e8c';
const destDir = path.join(__dirname, 'assets', 'images', 'geography');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// mapping full question text to the image prefix
// Only mapping the 10 images we successfully generated before the quota limit
const updates = {
    '朝鮮半島を北緯38度付近で分断している境界線を何というか？': 'g_gw_1_76_38th_parallel',
    '韓国の伝統的な民族衣装を何というか？': 'g_gw_1_77_hanbok',
    '東南アジアの大河の河口付近の三角州などで盛んな農業は？': 'g_gw_1_78_delta_rice',
    '同じ土地で1年に2回米を作ることを何というか？': 'g_gw_1_79_double_cropping',
    'かつて欧米諸国の植民地時代に開かれた、特定の商品作物を大規模に栽培する農園を何というか？': 'g_gw_1_80_plantation',
    'マレーシアなどで生産量が多い、洗剤や食用油の原料となる作物は？': 'g_gw_1_81_oil_palm',
    'ベトナムが世界有数の輸出国となっている、嗜好品（飲み物）の原料は？': 'g_gw_1_82_vietnam_coffee',
    'インドネシアやマレーシアで多くの人々が信仰している宗教は？': 'g_gw_1_83_islam_indonesia',
    'フィリピンで多くの人々が信仰している宗教は？': 'g_gw_1_84_christianity_philippines_2',
    'タイやミャンマーなど、インドシナ半島で広く信仰されている宗教は？': 'g_gw_1_85_buddhism_indochina'
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
