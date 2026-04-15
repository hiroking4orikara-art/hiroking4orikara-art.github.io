const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
const sourceFile = path.join(__dirname, 'civics_extracted.json');

let civicsData = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));

// Format the new questions
let newQuestionsFormatted = civicsData.map(q => {
    return `        {
            q: "${q.q}",
            choices: ${JSON.stringify(q.choices)},
            a: "${q.a}",
            comment: "${q.comment}"
        }`;
}).join(',\n');

let quizDataStr = fs.readFileSync(quizDataPath, 'utf8');

// Check if cw_1 exists in quiz_data.js
if (quizDataStr.includes('"cw_1": [')) {
    // Append to existing
    const token = '"cw_1": [';
    const index = quizDataStr.indexOf(token);
    if (index !== -1) {
        // Find the insertion point, right after the bracket
        const insertPos = index + token.length;
        const prefix = quizDataStr.substring(0, insertPos);
        const suffix = quizDataStr.substring(insertPos);
        
        let newContent = prefix + "\n" + newQuestionsFormatted;
        // if the suffix starts with something and we need a comma for subsequent items, check
        if (!suffix.trim().startsWith(']')) {
             newContent += ",\n" + suffix;
        } else {
             newContent += "\n" + suffix;
        }
        fs.writeFileSync(quizDataPath, newContent, 'utf8');
        console.log("Appended to existing cw_1 array.");
    }
} else {
    // Need to create cw_1. Look for the last array ending or just before the closing brace of window.QUIZ_DATA
    // The easiest robust way is to find `};` at the very end of the file.
    const lastBraceIndex = quizDataStr.lastIndexOf('}');
    if (lastBraceIndex !== -1) {
        const prefix = quizDataStr.substring(0, lastBraceIndex);
        const suffix = quizDataStr.substring(lastBraceIndex);
        
        const newSection = `,\n    // 公民 (Civics)\n    "cw_1": [\n${newQuestionsFormatted}\n    ]\n`;
        const updated = prefix + newSection + suffix;
        fs.writeFileSync(quizDataPath, updated, 'utf8');
        console.log("Created new cw_1 array and added questions.");
    }
}
// clear temporary civics extraction file so we don't re-add
fs.writeFileSync(sourceFile, '[]', 'utf8');
