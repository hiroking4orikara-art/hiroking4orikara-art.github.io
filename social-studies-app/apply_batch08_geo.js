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
    '三大洋に含まれない海洋は？': 'g_gw_1_61_three_oceans',
    '中国の人口の9割以上を占める民族は何か？': 'g_gw_1_62_han_chinese_2',
    '中国で人口増加を抑制するために、1979年から2015年まで行われていた政策は？': 'g_gw_1_63_one_child_policy',
    '中国の沿岸部に設けられた、外国の資本や技術を導入するために優遇措置をとった地域を何というか？': 'g_gw_1_64_sez_china',
    '香港の隣に位置し、経済特区として急速に発展した都市は？': 'g_gw_1_65_shenzhen',
    '中国の急速な経済発展に伴い、農村部から都市部へ働きに出る人々を何というか？': 'g_gw_1_66_mingong',
    '経済格差を是正するため、中国内陸部の開発を進める政策を何というか？': 'g_gw_1_67_western_development',
    '中国の農村部で1980年代から発展した、郷や鎮などが経営する中小企業を何というか？': 'g_gw_1_68_township_enterprises',
    '中国を流れる世界で3番目、アジアで最も長い川は？': 'g_gw_1_69_chang_jiang',
    '中国北部を流れ、かつて古代文明が栄えた川は？': 'g_gw_1_70_huang_he',
    '中国北部（華北）などの降水量が少ない地域で盛んな農業は？': 'g_gw_1_71_dry_farming_wheat',
    '中国南部（華南）などの温暖で雨が多い地域で盛んな農業は？': 'g_gw_1_72_wet_rice_farming',
    '1997年にイギリスから中国に返還された、金融や貿易の中心地は？': 'g_gw_1_73_hong_kong',
    'かつて中国南東部から海外へ移住し、現地の経済に大きな影響力を持つ人々を何というか？': 'g_gw_1_74_huaqiao',
    '大韓民国（韓国）の首都は？': 'g_gw_1_75_south_korea'
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
