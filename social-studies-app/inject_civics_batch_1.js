const fs = require('fs');
const path = require('path');

const batchFilePath = path.join(__dirname, 'civics_batch_1.json');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

const newQuestions = JSON.parse(fs.readFileSync(batchFilePath, 'utf8'));

// Format questions
const formattedQs = newQuestions.map(q => {
    return `        {
            q: "${q.q}",
            choices: ${JSON.stringify(q.choices)},
            a: "${q.a}",
            comment: "${q.comment}"
        }`;
}).join(',\n');

let quizData = fs.readFileSync(quizDataPath, 'utf8');

// The Civics section should be added at the end of the window.QUIZ_DATA object
// since it doesn't exist yet, we can create "gw_3" (Citizenship). 
// Let's check if gw_3 exists.
if (!quizData.includes('"gw_3": [')) {
    const endBraceMatch = quizData.match(/\n    \}\s*\]\s*\n\};\s*$/);
    if (endBraceMatch) {
        const replacement = `\n    }\n    ],\n    // 3. 公民 (Civics)\n    "gw_3": [\n${formattedQs}\n    ]\n};`;
        quizData = quizData.replace(/\n    \}\s*\]\s*\n\};\s*$/, replacement);
        fs.writeFileSync(quizDataPath, quizData, 'utf8');
        console.log(`Added new gw_3 section with ${newQuestions.length} questions.`);
    } else {
        console.error("Could not find the end of QUIZ_DATA object to append gw_3.");
    }
} else {
    // If gw_3 exists, just append to it
    const gw3Match = quizData.match(/"gw_3":\s*\[/);
    if(gw3Match) {
        const insertPos = gw3Match.index + gw3Match[0].length;
        const before = quizData.substring(0, insertPos);
        const after = quizData.substring(insertPos);
        // Depending on if it's empty, we might need a comma
        const nextChar = after.trim()[0];
        let insertText = '\n' + formattedQs;
        if (nextChar !== ']') {
            insertText += ',';
        }
        
        fs.writeFileSync(quizDataPath, before + insertText + after, 'utf8');
        console.log(`Appended ${newQuestions.length} questions to existing gw_3 section.`);
    }
}
