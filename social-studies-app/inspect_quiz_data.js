const fs = require('fs');
const tempFile = 'temp_quiz_data_run.js';
const dataStr = fs.readFileSync('quiz_data.js', 'utf-8');
fs.writeFileSync(tempFile, dataStr + '\nmodule.exports = typeof quizData !== "undefined" ? quizData : {};\n');
const parsed = require('./' + tempFile);

let countImg = 0;
let countImage = 0;
let countImageUrl = 0;

for (const unitId in parsed) {
  const unit = parsed[unitId];
  if (!Array.isArray(unit)) continue;
  unit.forEach(q => {
    if (q.img) countImg++;
    if (q.image) countImage++;
    if (q.image_url) countImageUrl++;
  });
}
console.log(`countImg: ${countImg}, countImage: ${countImage}, countImageUrl: ${countImageUrl}`);
fs.unlinkSync(tempFile);
