import fs from 'fs';
import path from 'path';

const data = fs.readFileSync('quiz_data.js', 'utf8');

global.window = global;
global.module = { exports: {} };

try {
    eval(data);
} catch (e) {
    console.log("Eval error:", e);
}

const QUIZ_DATA = global.window.QUIZ_DATA || {};

const historyTopics = QUIZ_DATA['history'] || {};
let targetQuestions = [];
for (const [topic, questions] of Object.entries(historyTopics)) {
    for (const q of questions) {
        if (!q.image && !q.img) {
            targetQuestions.push(q);
        }
    }
}
console.log(`Missing history images: ${targetQuestions.length}`);

const historyImgDir = path.join('assets', 'images', 'history');
let availableImages = [];
if (fs.existsSync(historyImgDir)) {
    availableImages = fs.readdirSync(historyImgDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.webp'));
}
console.log(`Available history images in folder: ${availableImages.length}`);
