const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

let missingCount = 0;
let missingList = [];

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach((q, index) => {
            let hasImg = false;
            if (q.answerImg && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
            if (q.img && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
            
            if (!hasImg) {
                missingCount++;
                missingList.push(q.a);
            }
        });
    }
}

console.log(`Actual missing: ${missingCount}`);
if(missingCount > 0) {
    console.log("Missing answers:", missingList.join(', '));
}
