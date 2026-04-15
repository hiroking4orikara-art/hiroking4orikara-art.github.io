const fs = require('fs');
const path = require('path');

const batch = require('./batch_03.json');
const quizDataFile = 'quiz_data.js';
const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\b2e7d24e-42dc-41db-987a-065a3e0346f3';
const destDir = 'images';

const imageMap = [
    { prefix: 'pop_toraijin_', indexInBatch: 0 },
    { prefix: 'pop_wani_', indexInBatch: 1 }
];

const files = fs.readdirSync(brainDir);

const mappings = [];
for (const entry of imageMap) {
    const file = files.find(f => f.startsWith(entry.prefix) && f.endsWith('.png'));
    if (file) {
        const sourcePath = path.join(brainDir, file);
        const destPath = path.join(destDir, file);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied ${file} to images/`);
        mappings.push({ indexInBatch: entry.indexInBatch, image: `images/${file}` });
    } else {
        console.log(`File not found for prefix ${entry.prefix}`);
    }
}

let content = fs.readFileSync(quizDataFile, 'utf8');
let updatedCount = 0;

mappings.forEach(m => {
    const item = batch[m.indexInBatch];
    if (item) {
        let qEscaped = item.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
        content = content.replace(blockRegex, `$1,\n            image: "${m.image}"\n        $2`);
        updatedCount++;
    }
});

fs.writeFileSync(quizDataFile, content, 'utf8');
console.log(`Updated ${updatedCount} questions with images in quiz_data.js.`);
