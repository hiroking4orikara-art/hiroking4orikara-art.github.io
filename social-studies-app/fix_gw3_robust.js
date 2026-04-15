const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
let dataObjStr = parsedDataStr;

// Handle the export format
dataObjStr = dataObjStr.replace(/module\.exports\s*=\s*window\.QUIZ_DATA;?/g, '');
dataObjStr = dataObjStr.replace(/module\.exports\s*=\s*/g, 'window.QUIZ_DATA = ');

const matchQuiz = dataObjStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

// The geography 'Europe' section originally had ~60 questions, not 500.
// Let's print out what we keep if we just take the first 60.
// Actually, earlier debugs showed gw_1:61, gw_2:64, gw_3:507... Wait, did apply_batch_03 just dump EVERYTHING from batch 3?
// Let's filter by checking if the question exists anywhere else in parsedData.
// If a question in gw_3 is ALSO found in a non-gw_3 array, it must be removed.

const validQuestionsInApp = new Set();
for (const section in parsedData) {
    if (section !== 'gw_3') {
        parsedData[section].forEach(q => validQuestionsInApp.add(q.q));
    }
}

// And what about completely missing civics questions that haven't been mapped anywhere?
// Let's load the missing_civics_detailed.json
let missingCivicsQuestions = new Set();
try {
    const missing = JSON.parse(fs.readFileSync('missing_civics_detailed.json', 'utf8'));
    missing.forEach(q => missingCivicsQuestions.add(q.q));
} catch(e) {}

let originalGw3 = parsedData['gw_3'];
let newGw3 = [];
let removed = 0;

originalGw3.forEach(q => {
    // Check if it's already properly assigned to another chapter OR if it's on the missing civics list.
    if (validQuestionsInApp.has(q.q) || missingCivicsQuestions.has(q.q)) {
        removed++;
    } else {
        newGw3.push(q);
    }
});

console.log(`Original gw_3 length: ${originalGw3.length}`);
console.log(`Removed from gw_3: ${removed}`);
console.log(`New gw_3 length: ${newGw3.length}`);

// Let's see what is left
console.log(`First 5 remaining:`);
newGw3.slice(0, 5).forEach(q => console.log(q.q));

parsedData['gw_3'] = newGw3;

// Serialize and save
let content = 'module.exports = {\n';
const keys = Object.keys(parsedData);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = parsedData[key];
    content += `    "${key}": [\n`;
    const qs = val.map(q => {
        let qStr = `        {\n`;
        qStr += `            q: ${JSON.stringify(q.q)}`;
        if (q.img) qStr += `,\n            img: ${JSON.stringify(q.img)}`;
        if (q.choices) qStr += `,\n            choices: ${JSON.stringify(q.choices)}`;
        if (q.a) qStr += `,\n            a: ${JSON.stringify(q.a)}`;
        if (q.comment) qStr += `,\n            comment: ${JSON.stringify(q.comment)}`;
        if (q.answerImg) qStr += `,\n            answerImg: ${JSON.stringify(q.answerImg)}`;
        if (q.imgCaption) qStr += `,\n            imgCaption: ${JSON.stringify(q.imgCaption)}`;
        qStr += `\n        }`;
        return qStr;
    }).join(',\n');
    content += qs + '\n    ]';
    if (i < keys.length - 1) {
        content += ',\n';
    } else {
        content += '\n';
    }
}
content += '};\n';

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log("Fixed gw_3 successfully.");
