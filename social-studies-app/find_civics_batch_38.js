const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const obj = new Function('window={}; ' + quizData.replace(/module\.exports\s*=\s*(.*);?/, '') + '; return window.QUIZ_DATA;')();

const civicsQuestions = obj.gw_3 || [];
let targetQuestions = [];

for (let i = 0; i < civicsQuestions.length; i++) {
    if (!civicsQuestions[i].answerImg) {
        targetQuestions.push({
            index: i,
            q: civicsQuestions[i].q,
            a: civicsQuestions[i].a,
            comment: civicsQuestions[i].comment
        });
        if (targetQuestions.length === 10) break;
    }
}

targetQuestions.forEach((q) => {
    console.log(`Question [${q.index}]: ${q.q}`);
    console.log(`Answer: ${q.a}`);
    console.log(`Comment: ${q.comment}`);
    console.log('---');
});

console.log(`Found ${targetQuestions.length} questions missing answer images.`);
