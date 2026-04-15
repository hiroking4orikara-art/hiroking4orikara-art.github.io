const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizDataStr = fs.readFileSync(quizDataPath, 'utf8');

// Helper to escape regex
const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const generated = [
    {
        file: 'assets/images/history/h_medieval_1_goseibaishikimoku_1772801818714.png',
        answer: '御成敗式目（貞永式目）'
    },
    {
        file: 'assets/images/history/h_medieval_1_nogyogijutsu_1772801855861.png',
        answer: '農業技術'
    }
];

let applied = 0;

generated.forEach(item => {
    // Find the answer in the raw string
    const escapedAns = escapeRegExp(item.answer);
    const qRegex = new RegExp(`(q:\\s*["'][^"']*["']\\s*,[\\s\\S]*?a:\\s*["']?${escapedAns}["']?\\s*,)`);
    
    if (qRegex.test(quizDataStr)) {
        const replacement = quizDataStr.match(qRegex)[1] + `\n            img: "${item.file}",`;
        quizDataStr = quizDataStr.replace(qRegex, replacement);
        applied++;
    }
});

fs.writeFileSync(quizDataPath, quizDataStr, 'utf8');
console.log(`Applied ${applied} out of ${generated.length} newly generated images.`);
