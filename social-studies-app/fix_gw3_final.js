const fs = require('fs');

const bMatch = fs.readFileSync('quiz_data_temp_update.js', 'utf8').match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const backupData = new Function('return ' + bMatch[1])();

const currentContent = fs.readFileSync('quiz_data.js', 'utf8');
const match = currentContent.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const data = new Function('return ' + match[1])();

const geoKeysToRestore = [
    'gj_1', 'gj_2', 'gj_3', 'gj_4', 'gj_5', 'gj_6', 'gj_7', 'gj_8', 'gj_9', 'gj_10',
    'gw_1', 'gw_2', 'gw_3', 'gw_4', 'gw_5', 'gw_6', 'gw_7'
];

geoKeysToRestore.forEach(k => {
    if (backupData[k]) {
        console.log(`Restoring ${k}: ${data[k] ? data[k].length : 0} -> ${backupData[k].length}`);
        data[k] = backupData[k];
    }
});

let counts = {};
Object.keys(data).forEach(k => counts[k] = data[k].length);
console.log("Restored Geo Counts:", Object.keys(counts).filter(k => k.startsWith('g')).map(k => `${k}:${counts[k]}`).join(', '));

const finalKeys = Object.keys(data).sort();
let outStr = 'window.QUIZ_DATA = {\n';

for (let i = 0; i < finalKeys.length; i++) {
    const key = finalKeys[i];
    const val = data[key];
    outStr += `    "${key}": [\n`;
    
    const qs = val.map(q => {
        let qLines = [];
        if (q.q) qLines.push(`            q: ${JSON.stringify(q.q)}`);
        // Remove empty imgs
        if (q.img && q.img.length > 0) qLines.push(`            img: ${JSON.stringify(q.img)}`); 
        if (q.choices) qLines.push(`            choices: ${JSON.stringify(q.choices)}`);
        if (q.a) qLines.push(`            a: ${JSON.stringify(q.a)}`);
        if (q.comment) qLines.push(`            comment: ${JSON.stringify(q.comment)}`);
        if (q.answerImg && q.answerImg.length > 0) qLines.push(`            answerImg: ${JSON.stringify(q.answerImg)}`);
        if (q.imgCaption) qLines.push(`            imgCaption: ${JSON.stringify(q.imgCaption)}`);
        return `        {\n${qLines.join(",\n")}\n        }`;
    }).join(',\n');
    
    outStr += qs + '\n    ]';
    if (i < finalKeys.length - 1) outStr += ',\n';
    else outStr += '\n';
}
outStr += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

fs.writeFileSync('quiz_data.js', outStr, 'utf8');
console.log("Safely restored geography questions from old backup!");
