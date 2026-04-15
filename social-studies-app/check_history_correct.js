import fs from 'fs';
import path from 'path';

const data = fs.readFileSync('quiz_data.js', 'utf8');

global.window = global;
global.module = { exports: {} };

try {
    eval(data);
} catch (e) {
    console.log("Eval error:", e);
    process.exit(1);
}

const QUIZ_DATA = global.window.QUIZ_DATA || {};

let historyMissing = 0;
let historyTotal = 0;
let duplicates = {};

for (const [key, questions] of Object.entries(QUIZ_DATA)) {
    if (!key.startsWith('h_')) continue;
    if (!Array.isArray(questions)) continue;
    
    for (const q of questions) {
        historyTotal++;
        const img = q.image || q.img;
        if (!img) {
            historyMissing++;
        } else {
            duplicates[img] = (duplicates[img] || 0) + 1;
        }
    }
}

console.log(`Total history questions: ${historyTotal}`);
console.log(`Missing history images: ${historyMissing}`);

let dupCount = 0;
for (const [img, count] of Object.entries(duplicates)) {
    if (count > 1) {
        dupCount++;
        console.log(`Duplicate history image: ${img} (x${count})`);
    }
}
console.log(`Duplicate history images: ${dupCount}`);
