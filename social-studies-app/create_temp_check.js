const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let content = fs.readFileSync(quizDataPath, 'utf-8');

// Replace window.QUIZ_DATA with just QUIZ_DATA
content = content.replace('window.QUIZ_DATA =', 'const QUIZ_DATA =');
content += '\nconsole.log(Object.keys(QUIZ_DATA));\n';
content += `
let civicsCount = 0;
let civicsWithImages = 0;

for (const key in QUIZ_DATA) {
    if (key.startsWith('civics')) {
        const questions = QUIZ_DATA[key];
        civicsCount += questions.length;
        questions.forEach(q => {
            if (q.comment && q.comment.includes('assets/images/civics/')) {
                civicsWithImages++;
            }
        });
    }
}
console.log('Civics Questions Total:', civicsCount);
console.log('Civics Questions with images:', civicsWithImages);
`;

fs.writeFileSync(path.join(__dirname, 'temp_check.js'), content);
