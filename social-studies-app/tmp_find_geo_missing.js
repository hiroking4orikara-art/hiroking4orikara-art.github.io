const fs = require('fs');

let content = fs.readFileSync('quiz_data.js', 'utf8');
const code = `
const window = {};
${content}
module.exports = window.QUIZ_DATA;
`;
fs.writeFileSync('temp_quiz_data_run.js', code);

const quizData = require('./temp_quiz_data_run.js');
const missingList = [];

for (const [category, questions] of Object.entries(quizData)) {
    if (category.startsWith('gw_')) { 
        questions.forEach((q, index) => {
            if (!q.answerImg) {
                missingList.push({ category, index, q: q.q, comment: q.comment });
            }
        });
    }
}

console.log("TOTAL_MISSING: " + missingList.length);
fs.writeFileSync('missing_geo.json', JSON.stringify(missingList, null, 2));
console.log("Wrote " + missingList.length + " missing items to missing_geo.json");
