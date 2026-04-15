const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const obj = new Function('window={}; ' + quizData.replace(/module\.exports\s*=\s*(.*);?/, '') + '; return window.QUIZ_DATA;')();

console.log("--- Extracting all questions from gw_1 and gw_2 ---");

const sections = ['gw_1', 'gw_2']; 
// gw_1 is usually geography, gw_2 is history, gw_3 is civics

sections.forEach(secName => {
    const questions = obj[secName] || [];
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        if (q.q && q.q.includes('1232')) {
             console.log(`Found "1232" in ${secName} [${i}]: ${q.q} -> ${q.a}`);
        }
        if (q.q && q.q.includes('北条泰時')) {
             console.log(`Found "北条泰時" in ${secName} [${i}]: ${q.q} -> ${q.a}`);
        }
        if (q.answerImg && q.answerImg.includes('1232')) {
            console.log(`Found image with "1232" in ${secName} [${i}]: ${q.answerImg}`);
        }
    }
});
