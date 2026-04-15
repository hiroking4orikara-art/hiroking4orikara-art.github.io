const fs = require('fs');

// Read the base quiz_data.js structure
const baseContent = fs.readFileSync('quiz_data.js', 'utf8');
const match = baseContent.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const data = new Function('return ' + match[1])();

// Read true gw_3 data and orphaned civics
const trueGw3 = JSON.parse(fs.readFileSync('true_gw_3_backup.json', 'utf8'));
const orphanedCivics = JSON.parse(fs.readFileSync('civics_found_in_gw3.json', 'utf8'));

// Restore gw_3
data.gw_3 = trueGw3;

// We need to distribute 507 Civics questions into c_1, c_2, c_3, c_4, c_5, cw_1.
// By default, the old scripts added them sequentially. Let's look at civics_batch_X.json to see how they map.
// If we cannot know the original mapping, we split them into 6 roughly equal parts.
// Actually, earlier `quiz_data.js` had c_1(28), c_2(32), c_3(43), c_4(34), c_5(36), cw_1(99) = 272 questions originally.
// Where did the 507 come from? Many batches.
// Let's divide the 507 into 6 chunks and APPEND them to the existing c_X arrays (which currently have few items).

// Wait, the existing c_X arrays might also be populated? Let's check them.
let existCount = 0;
['c_1', 'c_2', 'c_3', 'c_4', 'c_5', 'cw_1'].forEach(k => existCount += data[k].length);
console.log(`Currently in c_X sections: ${existCount}`);

if (existCount < 500) {
    // We will append the 507 questions.
    const keys = ['c_1', 'c_2', 'c_3', 'c_4', 'c_5', 'cw_1'];
    // Let's just append them to cw_1 (総復習 - comprehensive review) or distribute evenly.
    // It is safer to distribute evenly so each chapter gets some new questions.
    const chunkSize = Math.ceil(orphanedCivics.length / keys.length);
    for (let i = 0; i < orphanedCivics.length; i++) {
        const keyIndex = Math.min(Math.floor(i / chunkSize), keys.length - 1);
        data[keys[keyIndex]].push(orphanedCivics[i]);
    }
}

// Re-serialize the full object cleanly
let out = 'window.QUIZ_DATA = {\n';
const outKeys = Object.keys(data);
for (let i = 0; i < outKeys.length; i++) {
    const key = outKeys[i];
    const val = data[key];
    out += `    "${key}": [\n`;
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
    out += qs + '\n    ]';
    if (i < outKeys.length - 1) {
        out += ',\n';
    } else {
        out += '\n';
    }
}
out += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

fs.writeFileSync('quiz_data.js', out, 'utf8');

console.log(`Re-serialized quiz_data.js successfully. Restored gw_3 to ${trueGw3.length} items.`);
['c_1', 'c_2', 'c_3', 'c_4', 'c_5', 'cw_1'].forEach(k => console.log(`${k} now has ${data[k].length} questions.`));
