const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const imageDir = path.join(__dirname, 'assets', 'images', 'history');
const allImages = fs.readdirSync(imageDir);

// Re-use logic from apply_modern_contemporary.js
const applyScript = fs.readFileSync(path.join(__dirname, 'apply_modern_contemporary.js'), 'utf8');
const updatesMatch = applyScript.match(/const updates = (\[[\s\S]*?\]);/);
if (!updatesMatch) {
  console.log('Failed to parse updates');
  process.exit(1);
}
let updates;
try {
  eval("updates = " + updatesMatch[1]);
} catch (e) {
  console.log('Eval error', e);
  process.exit(1);
}

// Find actual files matching the base name
let addedCount = 0;

for (const update of updates) {
  const baseImgStr = path.basename(update.img, '.png');
  // Find a matching file in assets that starts with baseImgStr
  const actualFile = allImages.find(f => f.startsWith(baseImgStr) && f.endsWith('.png'));
  
  if (!actualFile) {
      console.log(`Warning: Actual image not found in assets for ${update.a} (${baseImgStr})`);
      continue;
  }
  
  const finalImgPath = `assets/images/history/${actualFile}`;
  const parsedAnswer = update.a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  if (update.q) {
      const parsedQ = update.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const complexRegex = new RegExp(`(q:\\s*["'].*?${parsedQ}.*?["']\\s*,\\s*\\n\\s*a:\\s*["']${parsedAnswer}["']\\s*,)`);
      if (complexRegex.test(quizData)) {
          let matchIndex = quizData.search(complexRegex);
          const subsequentText = quizData.substring(matchIndex, matchIndex + 300);
          if (!subsequentText.includes('img:')) {
              quizData = quizData.replace(complexRegex, `$1\n            img: "${finalImgPath}",`);
              console.log(`Added img for: ${update.a} (with q restriction) -> ${finalImgPath}`);
              addedCount++;
          }
      } else {
          console.log(`Warning: Q/A pair not found -> Q:${update.q} A:${update.a}`);
      }
  } else {
      const regex = new RegExp(`(a:\\s*["']${parsedAnswer}["']\\s*,)`);
      if (regex.test(quizData)) {
          let matchIndex = quizData.search(regex);
          const subsequentText = quizData.substring(matchIndex, matchIndex + 200);
          if (!subsequentText.includes('img:')) {
              quizData = quizData.replace(regex, `$1\n            img: "${finalImgPath}",`);
              console.log(`Added img for: ${update.a} -> ${finalImgPath}`);
              addedCount++;
          }
      } else {
          console.log(`Warning: Answer not found in quiz_data.js -> ${update.a}`);
      }
  }
}

fs.writeFileSync(quizDataPath, quizData, 'utf8');
console.log('Update completed successfully. Added ' + addedCount + ' images.');
