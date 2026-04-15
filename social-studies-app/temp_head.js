const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
const data = fs.readFileSync(quizDataPath, 'utf8');

console.log(data.substring(0, 1500));
