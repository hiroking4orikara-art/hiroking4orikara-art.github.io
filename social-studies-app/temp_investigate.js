const fs = require('fs');
const content = fs.readFileSync('quiz_data.js', 'utf8');

// The file likely sets `window.QUIZ_DATA = ...` or similar. Let's try to extract it safely.
// We can use regex to find lines matching our keywords.
const keywords = ["アルパカ", "西岸海洋性気候", "北極圏", "北極海"];
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    for (const kw of keywords) {
        if (lines[i].includes(kw)) {
            console.log(`Match for ${kw} at line ${i+1}:`);
            // Print a few lines around the match
            const start = Math.max(0, i - 15);
            const end = Math.min(lines.length, i + 15);
            console.log(lines.slice(start, end).join('\n'));
            console.log('-----------------------------------');
            break; // Found a keyword on this line, move to next line context
        }
    }
}
