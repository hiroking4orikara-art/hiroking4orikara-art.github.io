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

let historyMissing = [];
let duplicates = {};
let usedImages = new Set();

// First pass: count images to find duplicates
for (const [key, questions] of Object.entries(QUIZ_DATA)) {
    if (!key.startsWith('h_')) continue;
    if (!Array.isArray(questions)) continue;
    
    for (const q of questions) {
        const img = q.image || q.img;
        if (img) {
            duplicates[img] = (duplicates[img] || 0) + 1;
        }
    }
}

// Second pass: gather missing or duplicated
for (const [key, questions] of Object.entries(QUIZ_DATA)) {
    if (!key.startsWith('h_')) continue;
    if (!Array.isArray(questions)) continue;
    
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const img = q.image || q.img;
        if (!img) {
            historyMissing.push({ topic: key, idx: i, q: q.q, a: q.a });
        } else if (duplicates[img] > 1) {
            // It's a duplicate, we should probably re-map it unless it's the right one...
            // the problem is which one is the right one? We'll include it in missing so we can fix it.
            historyMissing.push({ topic: key, idx: i, q: q.q, a: q.a, current_img: img });
        } else {
            usedImages.add(path.basename(img));
        }
    }
}

fs.writeFileSync('missing_questions.json', JSON.stringify(historyMissing, null, 2));
console.log(`Saved ${historyMissing.length} questions to fix.`);

const historyImgDir = path.join('assets', 'images', 'history');
let availableImages = [];
if (fs.existsSync(historyImgDir)) {
    availableImages = fs.readdirSync(historyImgDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.webp'));
}

let unusedImages = availableImages.filter(img => !usedImages.has(img));
fs.writeFileSync('unused_images.json', JSON.stringify(unusedImages, null, 2));
console.log(`Saved ${unusedImages.length} unused images.`);

