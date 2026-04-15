const fs = require('fs');

// Mock window
global.window = {};

// Read files
const quizDataContent = fs.readFileSync('quiz_data.js', 'utf8');
const dataContent = fs.readFileSync('data.js', 'utf8');

// Eval
eval(quizDataContent);
const quizData = window.QUIZ_DATA;

// Eval data.js
eval(dataContent.replace('const UNIT_DATA', 'global.UNIT_DATA')); 

function verifyGeography() {
    const geo = global.UNIT_DATA['geography'];
    if (!geo) return;

    let grandTotalWorldExpected = 0;
    let grandTotalWorldActual = 0;
    let grandTotalJapanExpected = 0;
    let grandTotalJapanActual = 0;

    geo.forEach(branch => {
        console.log(`\nChecking Branch: ${branch.title} (${branch.id})`);
        let branchTotalExpected = 0;
        let branchTotalActual = 0;

        branch.units.forEach(unit => {
            const expected = unit.questionCount || 0;
            const actual = (quizData[unit.id] || []).length;
            
            branchTotalExpected += expected;
            branchTotalActual += actual;

            if (expected !== actual) {
                console.log(`[MISMATCH] ${unit.title}: Expected ${expected}, Found ${actual}`);
            } else {
                console.log(`[OK] ${unit.title}: ${actual}`);
            }
        });

        console.log(`Resources for ${branch.title}: Expected Total ${branchTotalExpected}, Actual Total ${branchTotalActual}`);

        if (branch.id === 'g_world') {
            grandTotalWorldExpected = branchTotalExpected;
            grandTotalWorldActual = branchTotalActual;
        } else if (branch.id === 'g_japan') {
            grandTotalJapanExpected = branchTotalExpected;
            grandTotalJapanActual = branchTotalActual;
        }
    });
}

verifyGeography();
