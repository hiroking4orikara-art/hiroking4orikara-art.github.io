const fs = require('fs');
const q = require('./quiz_data.js'); // the current one with broken geography
const tempQ = require('./temp_quiz_data.js'); // backup with geography intact

let restoredCount = 0;

for (const unit in q) {
    if (unit.startsWith('h_')) continue; // Skip history, since we just perfected it!
    
    const items = q[unit];
    const tempItems = tempQ[unit];
    
    if (!tempItems) continue;
    
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const tempItem = tempItems[i];
        
        // If the current one doesn't have an img but the old one did, restore it!
        if (!item.img && tempItem) {
            if (tempItem.img) {
                item.img = tempItem.img;
                restoredCount++;
            } else if (tempItem.image) {
                // If it used the old 'image' string format, update it to use 'img'
                item.img = tempItem.image;
                restoredCount++;
            }
        }
    }
}

// Write the fixed object back
function stringifyQuizData(data) {
    let out = 'const quizData = {\n';
    for (const [unit, items] of Object.entries(data)) {
        out += `    "${unit}": [\n`;
        items.forEach((item, index) => {
            out += '        {\n';
            out += `            q: ${JSON.stringify(item.q)},\n`;
            if (item.choices) out += `            choices: ${JSON.stringify(item.choices)},\n`;
            out += `            a: ${JSON.stringify(item.a)},\n`;
            if (item.img) out += `            img: "${item.img}",\n`;
            if (item.comment) {
                out += `            comment: ${JSON.stringify(item.comment)}\n`;
            } else {
                out = out.replace(/,\n$/, '\n');
            }
            out += '        },\n';
        });
        out += `    ],\n`;
    }
    out += '};\n\ntry {\n    module.exports = quizData;\n} catch(e) {}\n';
    return out;
}

fs.writeFileSync('quiz_data.js', stringifyQuizData(q));
console.log(`Restored ${restoredCount} geography/civics image paths from backup.`);
