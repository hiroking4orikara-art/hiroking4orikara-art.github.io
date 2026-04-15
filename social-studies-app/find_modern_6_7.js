const fs = require('fs');
const quizData = require('./temp_quiz_data.js');

const targetUnits = ['h_modern_6', 'h_modern_7'];
let missingImages = [];

targetUnits.forEach(unit => {
    if (quizData[unit]) {
        quizData[unit].forEach(q => {
            if (!q.img || q.img === '') {
                missingImages.push({
                    unit: unit,
                    question: q.question,
                    answer: q.a
                });
            }
        });
    }
});

console.log(`Found ${missingImages.length} candidates in h_modern_6 & 7 without images:\n`);
missingImages.forEach(m => {
    console.log(`Unit: ${m.unit}\nQ: ${m.question}\nA: ${m.answer}\n`);
});
