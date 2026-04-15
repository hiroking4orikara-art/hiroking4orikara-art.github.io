const fs = require('fs');
const vm = require('vm');
const content = fs.readFileSync('quiz_data.js', 'utf8');

const regex = /const\s+quizData\s*=\s*(\{[\s\S]*?\});/;
const match = content.match(regex);
if (match) {
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`var parsedData = ${match[1]};`, sandbox);
  const quizData = sandbox.parsedData;
  let missing = [];
  for (const unit in quizData) {
    if (unit.startsWith('h_')) {
      quizData[unit].forEach(q => {
        if (!q.image || q.image === '') {
          missing.push(`${unit}: ${q.question.substring(0, 50)}`);
        }
      });
    }
  }
  console.log(`Missing images: ${missing.length}`);
  console.log(missing.join('\n'));
} else {
  console.log('Regex match failed.');
}
