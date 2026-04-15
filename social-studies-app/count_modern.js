const fs = require('fs');

const quizData = require('./quiz_data_temp_require.js'); // Assuming we can make a slight mod to export it

let count = 0;
for (const key in quizData) {
    if (key.startsWith('h_modern_') || key.startsWith('h_contemporary_')) {
        count += quizData[key].length;
        console.log(`${key}: ${quizData[key].length} questions`);
    }
}
console.log(`Total modern/contemporary questions: ${count}`);
global.window = {};
