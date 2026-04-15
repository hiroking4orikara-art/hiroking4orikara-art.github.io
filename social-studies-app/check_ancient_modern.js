const fs = require('fs');

const mdContent = fs.readFileSync('missing_images_ancient_to_modern.md', 'utf8');
const jsContent = fs.readFileSync('quiz_data.js', 'utf8');

const lines = mdContent.split('\n');
let currentUnit = null;
const candidates = [];

for (const line of lines) {
    const trimmedLine = line.trim();
    const unitMatch = trimmedLine.match(/^###\s+([a-zA-Z0-9_]+)/);
    if (unitMatch) {
        currentUnit = unitMatch[1];
        continue;
    }
    const itemMatch = trimmedLine.match(/^- \*\*(.+?)\*\*(?::|：)\s*(.*)/);
    if (itemMatch && currentUnit) {
        candidates.push({
            unit: currentUnit,
            answer: itemMatch[1].trim(),
            question: itemMatch[2].trim()
        });
    }
}

let cleanJs = jsContent.replace(/const quizData = /g, 'module.exports = ').replace(/window\.QUIZ_DATA\s*=\s*/g, 'module.exports = ');
fs.writeFileSync('temp_quiz_data.js', cleanJs);
const loadedData = require('./temp_quiz_data.js');

const missingItems = [];

for (const cand of candidates) {
    const questions = loadedData[cand.unit];
    if (!questions) continue;
    
    const qIndex = questions.findIndex(q => {
        const candAnsStripped = cand.answer.replace(/\s/g, '');
        const qAnsStripped = JSON.stringify(q.a || '').replace(/\s/g, '');
        return qAnsStripped.includes(candAnsStripped) || candAnsStripped.includes(qAnsStripped);
    });

    if (qIndex !== -1) {
        const q = questions[qIndex];
        if (!q.img || typeof q.img !== 'string' || q.img === '') {
            missingItems.push({ unit: cand.unit, answer: cand.answer, qText: q.q, index: qIndex });
        }
    }
}

fs.writeFileSync('missing_images.json', JSON.stringify(missingItems, null, 2));
console.log(`Saved ${missingItems.length} missing items to missing_images.json`);
