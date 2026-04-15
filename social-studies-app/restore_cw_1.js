const fs = require('fs');

let allQuestions = [];
for (let i = 11; i <= 17; i++) {
    try {
        const data = JSON.parse(fs.readFileSync(`civics_batch_${i}.json`, 'utf8'));
        allQuestions = allQuestions.concat(data);
    } catch(e) {}
}

const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

// The user states cw_1 (Civics General Review) has 0 questions.
// looking at civics_batch_11.json etc, the first 67 questions belong to c_5 (International), and the last 100 belong to cw_1 (综合) 
// The total civics questions are: 
// c_1: 70
// c_2: 90
// c_3: 100
// c_4: 100
// c_5: 67
// cw_1: 100
// Total: 527.

let civicsTotal = 0;
for (const k of ['c_1', 'c_2', 'c_3', 'c_4', 'c_5']) {
    civicsTotal += parsedData[k] ? parsedData[k].length : 0;
}
console.log("Current Civics Total c_1 to c_5:", civicsTotal);

// From the original json files, c_1 ~ c_5 + cw_1 were extracted. 
// Where is cw_1 in the JSONs?
// civics_batch_11 through 17 have the end of the lists.
// Let's just find the questions that *aren't* already in quiz_data.js.
const existingQs = new Set();
for (const k of Object.keys(parsedData)) {
    if (parsedData[k]) {
        parsedData[k].forEach(q => existingQs.add(q.q));
    }
}

const missingCw1 = [];
for (let i = 1; i <= 17; i++) {
    try {
        const data = JSON.parse(fs.readFileSync(`civics_batch_${i}.json`, 'utf8'));
        data.forEach(q => {
            if (!existingQs.has(q.q)) {
                missingCw1.push(q);
                existingQs.add(q.q); // prevent dupes
            }
        });
    } catch(e) {}
}

console.log("Missing questions from JSONs to push to cw_1:", missingCw1.length);
parsedData.cw_1 = missingCw1.slice(0, 100); // Only push up to 100, exactly as requested

// Now let's reserialize
let content = 'window.QUIZ_DATA = {\n';
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
content += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log("Restored cw_1. Remaining cw_1 length:", parsedData.cw_1.length);
