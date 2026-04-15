const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const updates = {
    '金閣': 'assets/images/history/h_medieval_6_kinkaku.png',
    '銀閣': 'assets/images/history/h_medieval_6_ginkaku.png',
    '水墨画': 'assets/images/history/h_medieval_6_suibokuga.png',
    '書院造': 'assets/images/history/h_medieval_6_shoinzukuri.png',
    '御伽草子（おとぎぞうし）': 'assets/images/history/h_medieval_6_otogizoushi.png',
    '座': 'assets/images/history/h_medieval_6_za.png',
    '山城の国一揆': 'assets/images/history/h_medieval_7_yamashiro.png',
    '城下町': 'assets/images/history/h_medieval_7_jokamachi.png',
    '鉄砲': 'assets/images/history/h_early_modern_1_teppo.png',
    '長篠の戦い': 'assets/images/history/h_early_modern_2_nagashino.png',
    '安土城': 'assets/images/history/h_early_modern_2_azuchijo.png',
    '石山本願寺': 'assets/images/history/h_early_modern_2_ishiyama.png',
    '本能寺の変': 'assets/images/history/h_early_modern_2_honnouji.png',
    '刀狩': 'assets/images/history/h_early_modern_2_katanagari.png',
    '兵農分離': 'assets/images/history/h_early_modern_2_heinobunri.png',
    '姫路城': 'assets/images/history/h_early_modern_2_himejijo.png'
};

for (const [answer, imgPath] of Object.entries(updates)) {
    // If the answer has parentheses, the strict exact match might fail depending on quiz_data.js format
    // Let's replace special characters
    const parsedAnswer = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Look for a: "Answer", and capture it
    const regex = new RegExp(`(a:\\s*["']${parsedAnswer}["']\\s*,)`);
    
    if (regex.test(quizData)) {
        let matchIndex = quizData.search(regex);
        if (matchIndex !== -1) {
            const subsequentText = quizData.substring(matchIndex, matchIndex + 200);
            if (!subsequentText.includes('img:')) {
                quizData = quizData.replace(regex, `$1\n            img: "${imgPath}",`);
                console.log(`Added img for: ${answer}`);
            } else if (subsequentText.includes(imgPath)) {
                console.log(`Image already exists correctly for: ${answer}`);
            } else {
                console.log(`Replaced img for: ${answer}`);
                const extractImgLineRegex = new RegExp(`(a:\\s*["']${parsedAnswer}["']\\s*,\\s*\\n\\s*img:\\s*["'])([^"']*)(["'],)`);
                quizData = quizData.replace(extractImgLineRegex, `$1${imgPath}$3`);
            }
        }
    } else {
        console.log(`Warning: Answer not found in quiz_data.js -> ${answer}`);
    }
}

fs.writeFileSync(quizDataPath, quizData, 'utf8');
console.log('Update completed successfully.');
