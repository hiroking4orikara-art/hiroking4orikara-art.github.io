const fs = require('fs');
const path = require('path');

const batch = require('./batch_02.json');
const quizDataFile = 'quiz_data.js';
const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\b2e7d24e-42dc-41db-987a-065a3e0346f3';
const destDir = 'images';

// Map of prefixes used in generation
const imageMap = [
    { prefix: 'pop_hellenistic_', indexInBatch: 1 },
    { prefix: 'pop_qin_dynasty_', indexInBatch: 2 },
    { prefix: 'pop_han_dynasty_', indexInBatch: 3 },
    { prefix: 'pop_silk_road_', indexInBatch: 4 },
    { prefix: 'pop_confucianism_', indexInBatch: 5 },
    { prefix: 'pop_goguryeo_', indexInBatch: 6 },
    { prefix: 'pop_baekje_', indexInBatch: 7 },
    { prefix: 'pop_silla_', indexInBatch: 8 },
    { prefix: 'pop_gaya_', indexInBatch: 9 },
    { prefix: 'pop_three_kingdoms_', indexInBatch: 10 },
    { prefix: 'pop_dogu_', indexInBatch: 11 },
    { prefix: 'pop_rice_farming_', indexInBatch: 12 },
    { prefix: 'pop_kuni_', indexInBatch: 13 },
    { prefix: 'pop_okimi_', indexInBatch: 14 }
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
