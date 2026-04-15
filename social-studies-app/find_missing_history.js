const fs = require('fs');
const path = require('path');

// Read the file and parse it. Since it starts with `window.QUIZ_DATA = {`, we can evaluate it
try {
  let dataStr = fs.readFileSync('quiz_data.js', 'utf8');
  // strip "window.QUIZ_DATA = "
  dataStr = dataStr.replace('window.QUIZ_DATA =', 'module.exports =');
  fs.writeFileSync('temp_quiz_data.js', dataStr);
  
  const quizData = require('./temp_quiz_data.js');
  
  let missing = [];
  
  for (let unit in quizData) {
    if (unit.startsWith('h_')) { // History only
      const questions = quizData[unit];
      questions.forEach((q, index) => {
        if (!q.img || q.img.trim() === '') {
          missing.push({
            unit: unit,
            index: index,
            q: q.q,
            a: q.a
          });
        }
      });
    }
  }
  
  console.log(`Found ${missing.length} questions without images in History.`);
  if (missing.length > 0) {
      fs.writeFileSync('missing_history_images.json', JSON.stringify(missing, null, 2));
      console.log('Saved to missing_history_images.json');
  }
} catch (e) {
  console.error(e);
}
