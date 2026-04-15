const fs = require('fs');

const jsContent = fs.readFileSync('quiz_data.js', 'utf8');
let cleanJs = jsContent.replace(/const quizData = /g, 'module.exports = ').replace(/window\.QUIZ_DATA\s*=\s*/g, 'module.exports = ');
fs.writeFileSync('temp_quiz_data.js', cleanJs);

const quizData = require('./temp_quiz_data.js');
let missingImages = [];

for (const unit in quizData) {
    if (unit.startsWith('h_contemporary_')) {
        const questions = quizData[unit];
        questions.forEach(q => {
            if (!q.img || q.img === '') {
                missingImages.push({
                    unit: unit,
                    question: q.question,
                    answer: q.a
                });
            }
        });
    }
}

console.log(`Found ${missingImages.length} candidates in h_contemporary_* without images:\n`);
missingImages.forEach(m => {
    console.log(`Unit: ${m.unit}\nQ: ${m.question}\nA: ${m.answer}\n`);
});

fs.writeFileSync('contemporary_candidates.json', JSON.stringify(missingImages, null, 2));
