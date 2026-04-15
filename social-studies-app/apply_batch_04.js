const fs = require('fs');
const path = require('path');

const batch = require('./batch_04.json');
const quizDataFile = 'quiz_data.js';
const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\b2e7d24e-42dc-41db-987a-065a3e0346f3';
const destDir = 'images';

const imageMap = [
    { prefix: 'pop_goseibai_shikimoku_', indexInBatch: 0 },
    { prefix: 'pop_agricultural_tech_', indexInBatch: 1 },
    { prefix: 'pop_minamoto_yoshinaka_', indexInBatch: 2 },
    { prefix: 'pop_mandokoro_', indexInBatch: 3 },
    { prefix: 'pop_samurai_dokoro_', indexInBatch: 4 },
    { prefix: 'pop_monchujo_', indexInBatch: 5 },
    { prefix: 'pop_hojo_tokimasa_', indexInBatch: 6 },
    { prefix: 'pop_hojo_yoshitoki_', indexInBatch: 7 },
    { prefix: 'pop_minamoto_sanetomo_', indexInBatch: 8 },
    { prefix: 'pop_ategawa_no_sho_', indexInBatch: 9 },
    { prefix: 'pop_yabusame_', indexInBatch: 10 },
    { prefix: 'pop_nimosaku_', indexInBatch: 11 },
    { prefix: 'pop_gyubako_', indexInBatch: 12 },
    { prefix: 'pop_bunkatsu_sozoku_', indexInBatch: 13 },
    { prefix: 'pop_genko_', indexInBatch: 14 }
];

const files = fs.readdirSync(brainDir);
const mappings = [];
for (const entry of imageMap) {
    const file = files.reverse().find(f => f.startsWith(entry.prefix) && f.endsWith('.png'));
    if (file) {
        fs.copyFileSync(path.join(brainDir, file), path.join(destDir, file));
        mappings.push({ indexInBatch: entry.indexInBatch, image: `images/${file}` });
    } else {
        console.log(`Missing image for prefix: ${entry.prefix}`);
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
