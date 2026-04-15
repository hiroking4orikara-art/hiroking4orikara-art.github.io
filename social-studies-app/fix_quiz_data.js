const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const lines = quizData.split('\n');
let lastValidLineIdx = -1;
for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i] === '        }') {
        lastValidLineIdx = i;
        break;
    }
}

if (lastValidLineIdx !== -1) {
    // Truncate the lines array to keep only up to lastValidLineIdx
    const validLines = lines.slice(0, lastValidLineIdx + 1);
    
    // Now, we need to append the batch 3 questions.
    const batch3_1Path = path.join(__dirname, 'civics_batch_3.json');
    const batch3_2Path = path.join(__dirname, 'civics_batch_3_part2.json');
    
    const qs1 = JSON.parse(fs.readFileSync(batch3_1Path, 'utf8'));
    const qs2 = JSON.parse(fs.readFileSync(batch3_2Path, 'utf8'));
    
    const allQs = [...qs1, ...qs2];
    
    const formattedQs = allQs.map(q => {
        return `        {
            q: "${q.q}",
            choices: ${JSON.stringify(q.choices)},
            a: "${q.a}",
            comment: "${q.comment}"
        }`;
    }).join(',\n');
    
    // Check if the last valid question ends with a comma. It shouldn't yet because we truncated exactly at '        }'
    validLines[validLines.length - 1] += ',';
    
    const newFileContent = validLines.join('\n') + '\n' + formattedQs + '\n    ]\n};\n\nmodule.exports = window.QUIZ_DATA;\n';
    
    fs.writeFileSync(quizDataPath, newFileContent, 'utf8');
    console.log(`Successfully restored quiz_data.js and appended all ${allQs.length} questions from Batch 3.`);
} else {
    console.log("Could not find last valid question.");
}
