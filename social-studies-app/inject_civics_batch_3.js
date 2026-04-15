const fs = require('fs');
const path = require('path');

const batchFilePath = path.join(__dirname, 'civics_batch_3.json');
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

// Find the end of the gw_3 array. We know it ends with:
//         }
//     ]
// };
const endStr = '    ]\n};';
const endIndex = quizData.indexOf(endStr);

if (endIndex !== -1) {
    const insertText = ',\n' + formattedQs + '\n';
    const before = quizData.substring(0, endIndex);
    const after = quizData.substring(endIndex);
    fs.writeFileSync(quizDataPath, before + insertText + after, 'utf8');
    console.log(`Appended ${newQuestions.length} questions to existing gw_3 section.`);
} else {
    console.log('Error: Could not find end of gw_3 array.');
}
