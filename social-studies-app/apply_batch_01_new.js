const fs = require('fs');
const path = require('path');

const batch = require('./batch_01.json');
const quizDataFile = 'quiz_data.js';
const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\b2e7d24e-42dc-41db-987a-065a3e0346f3';
const destDir = 'images';

// Map of prefixes used in generation
const imageMap = [
    { prefix: 'pop_australopithecus_', target: 0 },
    { prefix: 'pop_peking_man_', target: 2 },
    { prefix: 'pop_cro_magnon_', target: 3 },
    { prefix: 'pop_egypt_pyramid_', target: 6 },
    { prefix: 'pop_mesopotamia_', target: 9 },
    { prefix: 'pop_hammurabi_', target: 10 },
    { prefix: 'pop_cuneiform_', target: 11 },
    { prefix: 'pop_shang_dynasty_', target: 13 },
    { prefix: 'pop_oracle_bone_', target: 14 },
    { prefix: 'pop_buddhism_', target: 15 },
    { prefix: 'pop_christianity_', target: 16 },
    { prefix: 'pop_nile_river_', target: 17 },
    { prefix: 'pop_solar_calendar_', target: 18 },
    { prefix: 'pop_euphrates_', target: 19 },
    { prefix: 'pop_lunar_calendar_', target: 20 }
];

// Read brain dir to find the exact filenames
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

// Read quiz_data.js and update
let content = fs.readFileSync(quizDataFile, 'utf8');

// The batch only includes questions from h_ancient_1. Let's update using a targeted replace or parsing.
// Actually, it's safer to use regex to find the specific questions and inject the image property.
const qDict = batch.reduce((acc, item) => {
    acc[item.q] = item;
    return acc;
}, {});

mappings.forEach(m => {
    // find the corresponding batch item by the original index
    const batchItem = batch.find(b => b.index === m.index);
    if(batchItem) {
        batchItem.imagePath = m.image;
    }
});

let updatedCount = 0;
for (const item of batch) {
    if (item.imagePath) {
        // Find the question block in quiz_data.js
        // Need to escape regex safely
        const qEscaped = item.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        // Regex to find: q: "question", ... a: "answer" ... } and insert image: "imagePath"
        const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
        content = content.replace(blockRegex, `$1,\n            image: "${item.imagePath}"\n        $2`);
        updatedCount++;
    }
}

fs.writeFileSync(quizDataFile, content, 'utf8');
console.log(`Updated ${updatedCount} questions with images in quiz_data.js.`);
