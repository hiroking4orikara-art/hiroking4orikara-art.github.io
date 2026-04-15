const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');

let dataObjStr = parsedDataStr;
dataObjStr = dataObjStr.replace(/module\.exports\s*=\s*/g, 'window.QUIZ_DATA = ');

const matchQuiz = dataObjStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

// Clean up gw_3
let gw_3_clean = [];
let gw_3_seen = new Set();
for (const q of parsedData['gw_3']) {
    if (!gw_3_seen.has(q.q)) {
        gw_3_seen.add(q.q);
        gw_3_clean.push(q);
    }
}
console.log(`gw_3 original: ${parsedData['gw_3'].length}, cleaned: ${gw_3_clean.length}`);
parsedData['gw_3'] = gw_3_clean;

// Re-serialize the full object cleanly
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
console.log("Successfully cleaned up gw_3!");
