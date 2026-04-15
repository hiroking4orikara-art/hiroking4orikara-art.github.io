const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let content = fs.readFileSync(quizDataPath, 'utf-8');

// Replace window.QUIZ_DATA with just QUIZ_DATA
content = content.replace('window.QUIZ_DATA =', 'const Math=global.Math; const window = {}; window.QUIZ_DATA =');

fs.writeFileSync(path.join(__dirname, 'temp_check_2.js'), content + `
let civicsCount = 0;
let civicsWithImages = 0;
const data = window.QUIZ_DATA;

for (const key in data) {
    if (key.startsWith('civics')) {
        const questions = data[key];
        civicsCount += questions.length;
        questions.forEach(q => {
            if (q.comment && q.comment.includes('assets/images/civics/')) {
                civicsWithImages++;
            }
        });
    }
}
console.log('Civics Questions Total (in civics_* keys):', civicsCount);
console.log('Civics Questions with images:', civicsWithImages);
`);
