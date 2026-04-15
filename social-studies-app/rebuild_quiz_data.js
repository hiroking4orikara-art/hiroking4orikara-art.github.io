const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

quizData = quizData.replace(/module\.exports\s*=\s*window\.QUIZ_DATA;/, '');

const obj = new Function('window={}; ' + quizData + '; return window.QUIZ_DATA;')();

const batch1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_1.json'), 'utf8'));
const batch2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_2.json'), 'utf8'));
const batch3_1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_3.json'), 'utf8'));
const batch3_2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_3_part2.json'), 'utf8'));
const batch4 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_4.json'), 'utf8'));
const batch5 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_5.json'), 'utf8'));
const batch6 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_6.json'), 'utf8'));
const batch7 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_7.json'), 'utf8'));
const batch8 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_8.json'), 'utf8'));
const batch9 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_9.json'), 'utf8'));
const batch10 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_10.json'), 'utf8'));
const batch11 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_11.json'), 'utf8'));
const batch12 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_12.json'), 'utf8'));
const batch13 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_13.json'), 'utf8'));
const batch14 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_14.json'), 'utf8'));
const batch15 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_15.json'), 'utf8'));
const batch16 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_16.json'), 'utf8'));
const batch17 = JSON.parse(fs.readFileSync(path.join(__dirname, 'civics_batch_17.json'), 'utf8'));

const allCivics = [...batch1, ...batch2, ...batch3_1, ...batch3_2, ...batch4, ...batch5, ...batch6, ...batch7, ...batch8, ...batch9, ...batch10, ...batch11, ...batch12, ...batch13, ...batch14, ...batch15, ...batch16, ...batch17];
console.log(`Total civics questions from JSONs: ${allCivics.length}`);

obj.gw_3 = allCivics;

let content = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(obj);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = obj[key];
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

fs.writeFileSync(quizDataPath, content, 'utf8');
console.log('Successfully rebuilt quiz_data.js and corrected arrays.');
