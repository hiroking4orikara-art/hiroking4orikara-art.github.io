const fs = require('fs');
const data = fs.readFileSync('quiz_data.js', 'utf8');

const qs = [];
// Match the entire object literal loosely
const regex = /\{\s*q:\s*"([^"]+)"[\s\S]*?\}/g;
let match;

while ((match = regex.exec(data)) !== null) {
    const block = match[0];
    const qText = match[1];
    if (!block.includes('answerImg:')) {
        qs.push(qText);
    }
}

// Log 15 questions from the remaining ones.
// We've already done Batch 1-10
console.log("Found " + qs.length + " questions without images.");
// Let's filter out some known ones just in case the regex doesn't catch them
const uniqueQs = [...new Set(qs)];
console.log(uniqueQs.slice(0, 15).join('\n'));
