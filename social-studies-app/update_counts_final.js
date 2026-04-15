const fs = require('fs');

const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const quizData = new Function(`return ${matchQuiz[1]}`)();

let dataJsContent = fs.readFileSync('data.js', 'utf8');

// The counts are stored as `"questionCount": 61`
for(const [unitId, questions] of Object.entries(quizData)) {
    const actualCount = questions.length;
    // Replace the exact count for this ID in data.js
    // Look for: "id": "gw_1",\n                    "title": "...",\n                    "questionCount": <digits>
    const regex = new RegExp(`("id"\\s*:\\s*"${unitId}"\\s*,\\s*"title"\\s*:\\s*"[^"]+"\\s*,\\s*"questionCount"\\s*:\\s*)\\d+`, 'g');
    dataJsContent = dataJsContent.replace(regex, `$1${actualCount}`);
}

fs.writeFileSync('data.js', dataJsContent, 'utf8');
console.log('Successfully updated all question counts in data.js to match reality!');
