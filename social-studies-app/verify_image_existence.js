const fs = require('fs');

const jsContent = fs.readFileSync('quiz_data.js', 'utf8');
let cleanJs = jsContent.replace(/const quizData = /g, 'module.exports = ').replace(/window\.QUIZ_DATA\s*=\s*/g, 'module.exports = ');
fs.writeFileSync('temp_quiz_verify.js', cleanJs);

const quizData = require('./temp_quiz_verify.js');
let missingOnDisk = [];
let totalHistoryChecked = 0;

for (const unit in quizData) {
    if (!unit.startsWith('h_')) continue; // only check history
    const qs = quizData[unit];
    for (const q of qs) {
        if (q.img) {
            totalHistoryChecked++;
            if (!fs.existsSync(q.img)) {
                missingOnDisk.push({ unit, q: q.question, a: q.a, img: q.img });
            }
        }
    }
}

console.log(`Total history images configured: ${totalHistoryChecked}`);
console.log(`Missing on disk: ${missingOnDisk.length}`);
if (missingOnDisk.length > 0) {
    console.log("Missing files:");
    missingOnDisk.slice(0, 10).forEach(m => console.log(`- ${m.img} (Answer: ${m.a})`));
}
