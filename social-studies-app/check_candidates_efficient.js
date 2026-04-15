const fs = require('fs');

const md = fs.readFileSync('history_visual_candidates.md', 'utf8');
const lines = md.split('\n');
const candidates = [];
let currentUnit = '';

for (const line of lines) {
  if (line.startsWith('### ユニット:')) {
    currentUnit = line.replace('### ユニット:', '').trim();
  } else if (line.startsWith('- **')) {
    const parts = line.split('**:');
    const a = parts[0].replace('- **', '').trim();
    const q = parts[1].trim();
    candidates.push({ unit: currentUnit, a, q });
  }
}

// Strip initialization and require as module
let dataStr = fs.readFileSync('quiz_data.js', 'utf8');
dataStr = dataStr.replace('window.QUIZ_DATA =', 'module.exports =');
fs.writeFileSync('temp_quiz_data.js', dataStr);
const quizData = require('./temp_quiz_data.js');

let missed = 0;
for (const cand of candidates) {
  const unitData = quizData[cand.unit];
  if (!unitData) {
    console.log(`Unit ${cand.unit} not found in quiz_data!`);
    continue;
  }
  
  // Find matching question
  const matchedQ = unitData.find(item => item.q === cand.q);
  if (!matchedQ) {
    console.log(`Question not found: ${cand.q}`);
    continue;
  }
  
  if (!matchedQ.img) {
    console.log(`Missing Image in ${cand.unit}: ${cand.a}`);
    missed++;
  }
}

console.log(`Total missed candidates in quiz_data: ${missed}`);
