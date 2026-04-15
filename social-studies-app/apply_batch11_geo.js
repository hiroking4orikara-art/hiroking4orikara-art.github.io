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
    '経度180度の線のほぼ上にある、日付が変わる基準となる線を何というか？': 'g_gw_1_101_international_date_line',
    'アンデス山脈などの高地で飼育されている、毛を利用するための家畜は？': 'g_gw_1_102_andes_alpaca',
    'ペルシア湾周辺の国々が多く産出する地下資源は？': 'g_gw_1_103_persian_gulf_oil',
    '石油産出国が利益を守るために結成した組織は？': 'g_gw_1_104_opec',
    '乾燥した地域で、貴重な水がある場所に行われる農業を何というか？': 'g_gw_1_105_oasis_agriculture',
    '羊やヤギを連れて草や水を求めて移動する牧畜を何というか？': 'g_gw_1_106_nomadic_herding',
    '夏と冬で風向きが逆になる風を何というか？': 'g_gw_1_107_monsoon',
    '世界で最も高い山脈は？': 'g_gw_1_108_himalayas',
    'ヨーロッパとアジアの境目とされる山脈は？': 'g_gw_1_109_ural_mountains',
    'サウジアラビア、イラン、イラクなどに囲まれた、石油の積み出しで重要な湾は？': 'g_gw_1_110_strait_of_hormuz',
    '中央アジアのカザフスタンやウズベキスタンで産出される、希少金属をカタカナで何というか？': 'g_gw_1_111_rare_metals',
    'アンコール・ワットなどの遺跡がある東南アジアの国は？': 'g_gw_1_112_angkor_wat',
    'ブラジル、ロシア、インド、中国、南アフリカの新興5か国を指す言葉は？': 'g_gw_1_113_brics',
    'イスラム教徒の女性が外出時に身につける、髪や肌を覆う布を何というか？': 'g_gw_1_114_hijab',
    // One from the list that missed out
    '南半球のオーストラリアなどが属する州を何というか？': 'g_gw_1_115_oceania_region'
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
