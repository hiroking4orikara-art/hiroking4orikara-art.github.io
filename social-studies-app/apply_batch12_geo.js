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
    '東南アジアの都市部で発生している、交通渋滞や大気汚染、スラムなどの問題を総称して何というか？': 'g_gw_1_116_urban_issues',
    'サウジアラビアの大部分を占める気候帯は？': 'g_gw_1_117_saudi_desert',
    'インドネシアなどが位置する、火山活動が活発な地域一帯を何というか？': 'g_gw_1_118_volcanic_activity',
    'マレーシアがかつて目指した、日本や韓国の経済発展を見習おうという政策は？': 'g_gw_1_119_look_east_policy',
    '日本が原油の多くを輸入している地域はどこか？': 'g_gw_1_120_oil_import',
    '中国の通貨の単位は？': 'g_gw_1_121_yuan',
    '韓国の通貨の単位は？': 'g_gw_1_122_won',
    '経済特区などを設け、「世界の工場」と呼ばれるまでに経済成長を遂げた国は？': 'g_gw_1_123_factory_of_the_world',
    'インドにある、ムガル帝国の皇帝が愛妃のために建てた白大理石の美しい廟（お墓）は？': 'g_gw_1_124_taj_mahal',
    'ヒンドゥー教徒が身を清めるために沐浴を行う、インドの聖なる川は？': 'g_gw_1_125_gange_river' // Added based on context
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
