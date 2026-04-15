const fs = require('fs');
const path = require('path');

const data = fs.readFileSync('quiz_data.js', 'utf8');
const window = {};
let module = { exports: {} };
let QUIZ_DATA;
try {
    eval('QUIZ_DATA = undefined; ' + data);
} catch (e) {
    console.log("Eval Error:", e);
}

const quizData = window.QUIZ_DATA || module.exports || QUIZ_DATA || {};

const historyTopics = quizData['history'] || {};
let targetQuestions = [];
for (const [topic, questions] of Object.entries(historyTopics)) {
    for (const q of questions) {
        if (!q.image && !q.img) {
            targetQuestions.push(q);
        }
    }
}
console.log(`Missing history images: ${targetQuestions.length}`);

// Let's get list of available history images
const historyImgDir = path.join('assets', 'images', 'history');
let availableImages = [];
if (fs.existsSync(historyImgDir)) {
    availableImages = fs.readdirSync(historyImgDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.webp'));
}
console.log(`Available history images in folder: ${availableImages.length}`);

for (let i = 0; i < Math.min(5, targetQuestions.length); i++) {
   console.log("Q:", targetQuestions[i].q);
}
