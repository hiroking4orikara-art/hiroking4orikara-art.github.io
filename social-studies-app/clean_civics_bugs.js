const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');

const matchQuiz = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function('return ' + matchQuiz[1])();

let removedCount = 0;
// 1. Remove corrupted empty questions from c_1 through c_5 and cw_1
['c_1', 'c_2', 'c_3', 'c_4', 'c_5', 'cw_1'].forEach(sec => {
    if (parsedData[sec]) {
        const originalLength = parsedData[sec].length;
        parsedData[sec] = parsedData[sec].filter(q => q && q.q && q.choices && q.choices.length > 0);
        removedCount += (originalLength - parsedData[sec].length);
    }
});
console.log(`Cleaned ${removedCount} blank/empty questions from Civics.`);

// 2. Address the user's issue: "選挙系の問題が1章の中に紛れ込んでいる" 
// (Election-related questions are mixed into Chapter 1)
// Let's migrate any election-related questions out of c_1 and put them in c_3 (Politics)
let migratedCount = 0;
const c1 = parsedData['c_1'];
const c3 = parsedData['c_3'] || [];

const c1Filtered = [];
for (const q of c1) {
    if (q.q.includes('選挙') || q.q.includes('投票') || q.q.includes('議院') || q.q.includes('内閣') || q.q.includes('政党')) {
        // Only if it doesn't already exist in c_3
        const existsInC3 = c3.some(existingQ => existingQ.q === q.q);
        if (!existsInC3) {
            c3.push(q);
            migratedCount++;
            console.log("Migrated from c_1 to c_3:", q.q.substring(0, 30) + '...');
        }
    } else {
        c1Filtered.push(q);
    }
}
parsedData['c_1'] = c1Filtered;
parsedData['c_3'] = c3;

console.log(`Migrated ${migratedCount} misplaced election questions from c_1 to c_3.`);

// Serialize back
let outContent = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(parsedData);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = parsedData[key];
    outContent += `    "${key}": [\n`;
    const qs = val.map(q => {
        let qStr = `        {\n            q: ${JSON.stringify(q.q)}`;
        if (q.img) qStr += `,\n            img: ${JSON.stringify(q.img)}`;
        if (q.choices && q.choices.length > 0) qStr += `,\n            choices: ${JSON.stringify(q.choices)}`;
        if (q.a) qStr += `,\n            a: ${JSON.stringify(q.a)}`;
        if (q.comment) qStr += `,\n            comment: ${JSON.stringify(q.comment)}`;
        if (q.answerImg) qStr += `,\n            answerImg: ${JSON.stringify(q.answerImg)}`;
        if (q.imgCaption) qStr += `,\n            imgCaption: ${JSON.stringify(q.imgCaption)}`;
        qStr += `\n        }`;
        return qStr;
    }).join(',\n');
    outContent += qs + '\n    ]';
    if (i < keys.length - 1) {
        outContent += ',\n';
    } else {
        outContent += '\n';
    }
}
outContent += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

fs.writeFileSync('quiz_data.js', outContent, 'utf8');
console.log('Saved cleaned data to quiz_data.js.');
