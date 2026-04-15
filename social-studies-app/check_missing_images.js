const fs = require('fs');

const mdContent = fs.readFileSync('history_visual_candidates.md', 'utf8');
const jsContent = fs.readFileSync('quiz_data.js', 'utf8');

// Parse MD
const lines = mdContent.split('\n');
let currentUnit = null;
const candidates = [];

for (const line of lines) {
    const unitMatch = line.match(/^### ユニット:\s*(\w+)/);
    if (unitMatch) {
        currentUnit = unitMatch[1];
        continue;
    }
    const itemMatch = line.match(/^- \*\*(.+?)\*\*(?::|：) (.+)/);
    if (itemMatch && currentUnit) {
        candidates.push({
            unit: currentUnit,
            answer: itemMatch[1],
            question: itemMatch[2]
        });
    }
}

// Convert quiz_data.js to object (rudimentary parsing via eval)
// We need to bypass the 'const quizData =' part
let cleanJs = jsContent.replace(/const quizData = /g, 'module.exports = ').replace(/window\.QUIZ_DATA\s*=\s*/g, 'module.exports = ');
fs.writeFileSync('temp_quiz_data.js', cleanJs);

const loadedData = require('./temp_quiz_data.js');
let missingCount = 0;
let nextMissing = null;

for (const cand of candidates) {
    const questions = loadedData[cand.unit];
    if (!questions) continue;
    
    // Find matching question
    const qIndex = questions.findIndex(q => {
        // Strip everything up to the first colon/space in question text for better matching? 
        // Or just match answer.
        const candAnsStripped = cand.answer.replace(/\s/g, '');
        const qAnsStripped = JSON.stringify(q.a || '').replace(/\s/g, '');
        return qAnsStripped.includes(candAnsStripped) || candAnsStripped.includes(qAnsStripped);
    });

    if (qIndex !== -1) {
        const q = questions[qIndex];
        if (!q.img || typeof q.img !== 'string' || q.img === '') {
            missingCount++;
            if (!nextMissing) nextMissing = { ...cand, qText: q.question, index: qIndex };
            console.log(`[MISSING IN JS] Unit: ${cand.unit}, Answer: ${cand.answer}`);
        }
    } else {
        console.log(`[NOT FOUND IN JS] Unit: ${cand.unit}, Answer: ${cand.answer}`);
    }
}

console.log(`Total missing: ${missingCount}`);
if (nextMissing) {
    console.log(`\nNext missing image to generate:\nUnit: ${nextMissing.unit}\nAnswer: ${nextMissing.answer}\nQuestion: ${nextMissing.qText}`);
}
