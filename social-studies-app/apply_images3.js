const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const updates = {
    '長安': 'assets/images/history/h_ancient_7_changan.png',
    '阿修羅像': 'assets/images/history/h_ancient_8_ashura.png',
    '天台宗': 'assets/images/history/h_ancient_9_tendai.png',
    '源氏物語': 'assets/images/history/h_ancient_9_genji.png',
    '枕草子': 'assets/images/history/h_ancient_9_makura.png',
    '寝殿造': 'assets/images/history/h_ancient_9_shinden.png',
    '土佐日記': 'assets/images/history/h_ancient_9_tosa.png',
    '平将門': 'assets/images/history/h_ancient_9_masakado.png',
    '奥州藤原氏': 'assets/images/history/h_ancient_9_fujiwara.png',
    '僧兵': 'assets/images/history/h_ancient_9_sohei.png',
    '定期市': 'assets/images/history/h_medieval_1_teikiichi.png',
    'てつはう': 'assets/images/history/h_medieval_2_tetsuhau.png',
    '金剛力士像': 'assets/images/history/h_medieval_3_kongo.png',
    '徒然草': 'assets/images/history/h_medieval_3_tsurezure.png',
    '方丈記': 'assets/images/history/h_medieval_3_hojoki.png',
    '刀剣・銅・硫黄': 'assets/images/history/h_medieval_5_export.png',
    '銅銭・生糸・陶磁器': 'assets/images/history/h_medieval_5_import.png'
};

for (const [answer, imgPath] of Object.entries(updates)) {
    // Escape specific chars for regex if needed, though mostly plain Japanese
    const parsedAnswer = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    // Look for a: "Answer", and capture it
    // Then check if it already has an img: right after.
    const regex = new RegExp(`(a:\\s*["']${parsedAnswer}["']\\s*,)`);
    
    if (regex.test(quizData)) {
        const matchIndex = quizData.indexOf(`a: "${answer}"`);
        if (matchIndex !== -1) {
            // Check next words
            const subsequentText = quizData.substring(matchIndex, matchIndex + 200);
            if (!subsequentText.includes('img:')) {
                quizData = quizData.replace(regex, `$1\n            img: "${imgPath}",`);
                console.log(`Added img for: ${answer}`);
            } else if (subsequentText.includes(imgPath)) {
                console.log(`Image already exists correctly for: ${answer}`);
            } else {
                // if it has a different img, replace it
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
