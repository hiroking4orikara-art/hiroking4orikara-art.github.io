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

let missingCount = 0;
const imageCounts = {};
const duplicates = [];

for (const [key, questions] of Object.entries(QUIZ_DATA)) {
    // some keys might not be arrays if the structure is different, but let's assume they are
    if (!Array.isArray(questions)) continue;
    
    for (const q of questions) {
        const img = q.image || q.img;
        if (!img) {
            missingCount++;
        } else {
            imageCounts[img] = (imageCounts[img] || 0) + 1;
            if (imageCounts[img] === 2) {
                duplicates.push(img);
            }
        }
    }
}

console.log(`Total missing images: ${missingCount}`);
console.log(`Duplicate image paths assigned: ${duplicates.length}`);
for (const dup of duplicates.slice(0, 50)) { // show up to 50
    console.log(`  - ${dup} (used ${imageCounts[dup]} times)`);
}
