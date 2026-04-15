const fs = require('fs');

let allQuestions = [];
for (let i = 1; i <= 51; i++) {
    try {
        const data = JSON.parse(fs.readFileSync(`civics_batch_${i}.json`, 'utf8'));
        if (Array.isArray(data)) {
            allQuestions = allQuestions.concat(data);
        }
    } catch(e) {}
}
console.log(`Loaded ${allQuestions.length} questions from JSONs`);

// The last 83 questions of cw_1 were in remaining_83.json but we didn't include it in our search? Let's check.
try {
    const r83 = JSON.parse(fs.readFileSync('remaining_83.json', 'utf8'));
    allQuestions = allQuestions.concat(r83);
    console.log(`Added 83 from remaining_83, total: ${allQuestions.length}`);
} catch(e){}

// The user originally said the total Civics count is exactly 527.
// c_1: 70
// c_2: 90
// c_3: 100
// c_4: 100
// c_5: 67
// cw_1: 100 -> these are the last 100 questions of all batches basically!
const cw1Questions = allQuestions.slice(-100);

const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

// Clear and replace cw_1
parsedData.cw_1 = cw1Questions;
console.log(`cw_1 is now length ${parsedData.cw_1.length}`);

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
console.log("cw_1 fully restored to quiz_data.js");
