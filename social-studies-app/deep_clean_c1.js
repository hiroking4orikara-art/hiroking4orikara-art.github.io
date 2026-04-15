const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');

const matchQuiz = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function('return ' + matchQuiz[1])();

const c1 = parsedData['c_1'];
const c3 = parsedData['c_3'] || [];
const c1Filtered = [];
let migratedCount = 0;

for (const q of c1) {
    // Check choices, answers, and comments in addition to question text
    const qStr = JSON.stringify(q);
    if (qStr.includes('選挙') || qStr.includes('投票') || qStr.includes('議院') || qStr.includes('内閣') || qStr.includes('政党')) {
        // Only if it doesn't already exist in c_3
        const existsInC3 = c3.some(existingQ => existingQ.q === q.q);
        if (!existsInC3) {
            c3.push(q);
            migratedCount++;
            console.log("Found hidden election question migrating to c_3:", q.q.substring(0, 30) + '...');
        }
    } else {
        c1Filtered.push(q);
    }
}

parsedData['c_1'] = c1Filtered;
parsedData['c_3'] = c3;

// Serialize back
let outContent = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(parsedData);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = parsedData[key];
    outContent += `    "${key}": [\n`;
    const qs = val.map(q => {
        let qS = `        {\n            q: ${JSON.stringify(q.q)}`;
        if (q.img) qS += `,\n            img: ${JSON.stringify(q.img)}`;
        if (q.choices && q.choices.length > 0) qS += `,\n            choices: ${JSON.stringify(q.choices)}`;
        if (q.a) qS += `,\n            a: ${JSON.stringify(q.a)}`;
        if (q.comment) qS += `,\n            comment: ${JSON.stringify(q.comment)}`;
        if (q.answerImg) qS += `,\n            answerImg: ${JSON.stringify(q.answerImg)}`;
        if (q.imgCaption) qS += `,\n            imgCaption: ${JSON.stringify(q.imgCaption)}`;
        qS += `\n        }`;
        return qS;
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
console.log(`Migrated ${migratedCount} extra hidden election questions from c_1 to c_3.`);
