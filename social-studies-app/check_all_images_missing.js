const fs = require('fs');
const tempFile = 'temp_quiz_data_run.js';
const dataStr = fs.readFileSync('quiz_data.js', 'utf-8');
const modifiedStr = dataStr.replace('window.QUIZ_DATA = ', 'module.exports = ');
fs.writeFileSync(tempFile, modifiedStr);
const parsed = require('./' + tempFile);

console.log('--- Missing Images Report ---');
let totalQuestions = 0;
let totalImages = 0;
let totalMissing = 0;

for (const unitId in parsed) {
  const unit = parsed[unitId];
  if (!Array.isArray(unit)) continue;
  
  let qCount = 0;
  let iCount = 0;
  
  unit.forEach(q => {
    qCount++;
    const imgPath = q.img || q.image || q.image_url;
    if (imgPath && !imgPath.includes('placeholder') && !imgPath.includes('replace') && !imgPath.includes('missing')) {
      iCount++;
    }
  });
  
  const mCount = qCount - iCount;
  if (mCount > 0) {
    console.log(`Unit: ${unitId} -> Questions: ${qCount}, Images: ${iCount}, Missing: ${mCount}`);
  }
  
  totalQuestions += qCount;
  totalImages += iCount;
  totalMissing += mCount;
}

if(totalMissing === 0) {
  console.log(`Perfect! 0 missing images found across all ${totalQuestions} questions.`);
} else {
  console.log(`\nTotal Missing Images: ${totalMissing} (out of ${totalQuestions} questions)`);
}

fs.unlinkSync(tempFile);
