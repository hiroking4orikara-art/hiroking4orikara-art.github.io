const fs = require('fs');
const parsed = require('./quiz_data.js');

const missing = [];
let totalQuestions = 0;
let withImages = 0;
let placeholders = 0;
let generated = 0; // generated in previous runs

for (const unitId in parsed) {
  const unit = parsed[unitId];
  if (!Array.isArray(unit)) continue; // quiz_data.js structure: unit is array of questions
  
  unit.forEach((q, index) => {
    totalQuestions++;
    if (!q.img || q.img.trim() === '') {
      missing.push({
        unit: unitId,
        index: index,
        question: q.q,
        answer: q.a
      });
    } else {
      withImages++;
      if (q.img.includes('placeholder') || q.img.includes('default') || q.img.includes('missing')) {
        placeholders++;
      } else if (q.img.includes('17715')) {
        generated++;
      }
    }
  });
}

const summary = {};
missing.forEach(m => {
  summary[m.unit] = (summary[m.unit] || 0) + 1;
});

console.log(`Total questions: ${totalQuestions}`);
console.log(`With images: ${withImages}`);
console.log(`- Generated (timestamped): ${generated}`);
console.log(`- Placeholders: ${placeholders}`);
console.log(`Without images (missing): ${missing.length}`);
console.log("Missing by unit:", summary);

fs.writeFileSync('all_missing_images.json', JSON.stringify(missing, null, 2));
console.log("Saved detailed list to all_missing_images.json");
