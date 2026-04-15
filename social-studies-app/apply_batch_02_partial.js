const fs = require('fs');
const path = require('path');

const batch = require('./batch_02.json');
const quizDataFile = 'quiz_data.js';
const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\b2e7d24e-42dc-41db-987a-065a3e0346f3';
const destDir = 'images';

// Map of prefixes used in generation
const imageMap = [
    { prefix: 'pop_oracle_bone_2_', target: 21 } // Index 21 in actual_targets.json corresponds to target 0 in batch 2
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
        mappings.push({ index: entry.target, image: `images/${file}` });
    } else {
        console.log(`File not found for prefix ${entry.prefix}`);
    }
}

let content = fs.readFileSync(quizDataFile, 'utf8');

mappings.forEach(m => {
    // Find the original batch item from actual_targets.json or batch_02.json
    // Actually the target index in imageMap refers to index 21 of h_ancient_1 in quizData?
    // Let's use the explicit question text from batch 2 at index 0
    const item = batch[0]; // "古代中国の「殷」の時代に使われた、占いの結果などを記録..."
    if (item) {
        let qEscaped = item.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
        content = content.replace(blockRegex, `$1,\n            image: "${m.image}"\n        $2`);
    }
});

fs.writeFileSync(quizDataFile, content, 'utf8');
console.log(`Updated 1 question with image in quiz_data.js.`);
