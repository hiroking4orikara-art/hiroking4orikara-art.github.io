const fs = require('fs');

let allQuestionsArray = [];

for (let i = 1; i <= 51; i++) {
    try {
        const raw = fs.readFileSync(`civics_batch_${i}.json`, 'utf8');
        const data = JSON.parse(raw);
        if (Array.isArray(data)) {
            data.forEach(item => {
                // Normalize to expected format if needed
                if (item.q && item.a) {
                    allQuestionsArray.push(item);
                } else if (item.question && item.answer) {
                    allQuestionsArray.push({
                        q: item.question,
                        a: item.answer,
                        choices: item.options || item.choices || [],
                        comment: item.comment || ''
                    });
                }
            });
        }
    } catch(e) {}
}

try {
    const raw83 = fs.readFileSync('remaining_83.json', 'utf8');
    const data83 = JSON.parse(raw83);
    if (Array.isArray(data83)) {
        data83.forEach(item => {
             if (item.q && item.a) {
                 allQuestionsArray.push(item);
             } else if (item.question && item.answer) {
                 allQuestionsArray.push({
                     q: item.question,
                     a: item.answer,
                     choices: item.options || item.choices || [],
                     comment: item.comment || ''
                 });
             }
        });
    }
} catch (e) {}

console.log("Total valid normalized questions:", allQuestionsArray.length);

const limits = [
    { key: "c_1", count: 70 },
    { key: "c_2", count: 90 },
    { key: "c_3", count: 100 },
    { key: "c_4", count: 100 },
    { key: "c_5", count: 67 },
    { key: "cw_1", count: 100 }
];

let currentIndex = 0;
const newCivicsMap = {};
for (const limit of limits) {
    newCivicsMap[limit.key] = allQuestionsArray.slice(currentIndex, currentIndex + limit.count);
    currentIndex += limit.count;
    console.log(`Mapped ${newCivicsMap[limit.key].length} questions to ${limit.key}`);
}

const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const memoryMap = {};
for (const k of Object.keys(parsedData)) {
    if (parsedData[k]) {
        parsedData[k].forEach(q => {
            memoryMap[q.q] = {
                answerImg: q.answerImg,
                imgCaption: q.imgCaption,
                img: q.img,
                aImg: q.aImg
            };
        });
    }
}

for (const limit of limits) {
    const questions = newCivicsMap[limit.key];
    questions.forEach(q => {
        const mem = memoryMap[q.q];
        if (mem) {
            if (mem.answerImg) q.answerImg = mem.answerImg;
            if (mem.imgCaption) q.imgCaption = mem.imgCaption;
            if (mem.img) q.img = mem.img;
            if (mem.aImg) q.aImg = mem.aImg;
        }
    });
    parsedData[limit.key] = questions;
}

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
console.log("Successfully redistributed and re-serialized all civics questions WITH DATA NORMALIZATION.");
