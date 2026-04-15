const fs = require('fs');

// Mock window for quiz_data.js
global.window = {};

// Read files
const quizDataContent = fs.readFileSync('quiz_data.js', 'utf8');
const dataContent = fs.readFileSync('data.js', 'utf8');

// Eval to get objects
eval(quizDataContent); // This will set window.QUIZ_DATA
const quizData = window.QUIZ_DATA;

// data.js uses const UNIT_DATA = ...
// We can strip const to assign to local or eval in context
// Or since it's "const", we can try `eval(dataContent + '; UNIT_DATA;')` but const requires block scope issues maybe?
// Let's simpler replace "const UNIT_DATA =" with "global.UNIT_DATA =" or just "UNIT_DATA ="
eval(dataContent.replace('const UNIT_DATA', 'global.UNIT_DATA')); 

const results = [];
let hasMismatch = false;

// Helper to find unit in UNIT_DATA
function checkCategory(categoryName, categoryLabel) {
    const category = global.UNIT_DATA[categoryName];
    if (!category) {
        console.log(`Category ${categoryName} not found in UNIT_DATA`);
        return;
    }

    category.forEach(section => {
        section.units.forEach(unit => {
            const unitId = unit.id;
            const expectedCount = unit.questionCount;
            const actualQuestions = quizData[unitId] || []; // quizData uses id as key
            const actualCount = actualQuestions.length;

            if (expectedCount !== actualCount) {
                console.log(`[MISMATCH] ${unit.title} (${unitId}): Expected ${expectedCount}, Found ${actualCount}`);
                hasMismatch = true;
            } else {
                // If it's a history unit, print it
                if (unitId.startsWith('h_')) {
                   console.log(`[OK] ${unit.title}: ${actualCount}`);
                }
            }
        });
    });
}

console.log("Verifying History Section...");
checkCategory('history', 'History');

if (hasMismatch) {
    console.log("\nFound mismatches! Please update data.js.");
} else {
    console.log("\nAll counts match! (Displayed counts are confirmed)");
}
