const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

let missingCount = 0;
let totalCount = 0;
const missingQuestions = [];

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('gj_')) {
        questions.forEach((q, index) => {
            totalCount++;
            let hasImg = false;
            if (q.answerImg && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
            if (q.img && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
            
            if (!hasImg) {
                missingCount++;
                missingQuestions.push({ section, index, q: q.q, a: q.a, choices: q.choices, comment: q.comment });
            }
        });
    }
}

fs.writeFileSync('missing_gj_detailed.json', JSON.stringify(missingQuestions, null, 2), 'utf8');

console.log(`Japan Geography Questions: ${totalCount}`);
console.log(`Missing Images: ${missingCount}`);
console.log(`Total currently mapped: ${totalCount - missingCount}`);
console.log(`Saved ${missingQuestions.length} missing questions to missing_gj_detailed.json`);
