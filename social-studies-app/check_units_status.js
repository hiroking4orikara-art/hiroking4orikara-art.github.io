const fs = require('fs');
const tempFile = 'temp_quiz_data_run.js';
const dataStr = fs.readFileSync('quiz_data.js', 'utf-8');
fs.writeFileSync(tempFile, dataStr + '\nmodule.exports = typeof quizData !== "undefined" ? quizData : {};\n');

let parsed = require('./' + tempFile);

let totalQuestions = 0;
let withImages = 0;
let withoutImages = 0;
let placeholders = 0;

for (const unitId in parsed) {
  const unit = parsed[unitId];
  if (!unit.questions) continue;
  
  unit.questions.forEach((q) => {
    totalQuestions++;
    if (!q.image_url || q.image_url.trim() === '') {
      withoutImages++;
    } else {
      withImages++;
      if (q.image_url.includes('placeholder') || q.image_url.includes('default') || q.image_url.includes('missing')) {
        placeholders++;
      }
    }
  });
}

console.log(`Total questions: ${totalQuestions}`);
console.log(`With images: ${withImages}`);
console.log(`Without images: ${withoutImages}`);
console.log(`Placeholders: ${placeholders}`);

fs.unlinkSync(tempFile);
