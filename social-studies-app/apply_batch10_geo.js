const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\a8309f7c-0d37-4949-96cc-41f3892f1773';
const destDir = path.join(__dirname, 'assets', 'images', 'geography');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const updates = {
    '中国の人口の9割以上を占める民族は何か？': 'g_gw_1_86_han_chinese',
    '東南アジア諸国連合の略称は？': 'g_gw_1_87_asean_map',
    'シンガポールのように、アジアで急速に工業化が進んだ国や地域の総称を何というか？': 'g_gw_1_88_asian_nies',
    'ベトナムで行われている、市場経済を導入する改革政策を何というか？': 'g_gw_1_89_doi_moi',
    'インドの人口は現在どうなっているか？（2023年推計）': 'g_gw_1_90_india_population',
    'インドで最も多くの人が信仰している宗教は？': 'g_gw_1_91_hinduism',
    'ヒンドゥー教で神聖な動物とされ、食べることを禁じられているのは？': 'g_gw_1_92_sacred_cow',
    'インドの女性が身につける、一枚の布を巻く伝統的な衣装は？': 'g_gw_1_93_sari',
    'かつてインドにあった身分制度の影響が現在も残っていることを何というか？': 'g_gw_1_94_caste_system',
    'インド南部のベンガルールなどで盛んな、コンピュータ・ソフトウェア関連の産業は？': 'g_gw_1_95_it_bengaluru',
    'インドのアッサム地方やスリランカで生産が盛んな作物は？': 'g_gw_1_96_assam_tea',
    'インド北西部やパキスタンで栽培が盛んな、繊維の原料となる作物は？': 'g_gw_1_97_cotton',
    '西アジアや北アフリカで広く信仰されている宗教は？': 'g_gw_1_98_islam_middle_east',
    'イスラム教の聖展（経典）を何というか？': 'g_gw_1_99_quran',
    'イスラム教徒が断食を行う月を何というか？': 'g_gw_1_100_ramadan'
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
