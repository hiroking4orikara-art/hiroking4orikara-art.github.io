const fs = require('fs');
const content = fs.readFileSync('quiz_data.js', 'utf8');
const data = new Function('return '+content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/)[1])();

let cCount = 0;
Object.keys(data).forEach(k => {
    if (k.startsWith('c_') || k.startsWith('cw_')) cCount += data[k].length;
});
console.log('Civics raw count before dedup:', cCount);

let totalDupes = 0;
// We also want to delete any remaining loose "c_1", "c_3" keys that were left behind because they weren't removed properly previously
const looseToProper = {
    "c_1": "c_02_human_rights",
    "c_3": "c_03_politics",
    "c_4": "c_04_economy",
    "c_5": "c_05_global_society"
};

for (const [loose, proper] of Object.entries(looseToProper)) {
    if (data[loose]) {
        console.log(`Merging broken loose key ${loose} into ${proper}`);
        if (!data[proper]) data[proper] = [];
        data[loose].forEach(q => {
            data[proper].push(q);
        });
        delete data[loose]; // REMOVE the literal duplicate array
    }
}

// Now dedup array by array
Object.keys(data).forEach(k => {
    if (k.startsWith('c_') || k.startsWith('cw_')) {
        const unique = [];
        const seen = new Set();
        data[k].forEach(q => {
            const id = q.q; // Just the exact text of the question is enough to identify a duplicate
            if (!seen.has(id)) {
                seen.add(id);
                unique.push(q);
            } else {
                totalDupes++;
            }
        });
        data[k] = unique;
    }
});

console.log('Dupes found and removed:', totalDupes);

let newCount = 0;
Object.keys(data).forEach(k => {
    if (k.startsWith('c_') || k.startsWith('cw_')) newCount += data[k].length;
});
console.log('Civics raw count after dedup:', newCount);

// Safely Serialize
const finalKeys = Object.keys(data).sort();
let outStr = 'window.QUIZ_DATA = {\n';

for (let i = 0; i < finalKeys.length; i++) {
    const key = finalKeys[i];
    outStr += `    "${key}": [\n`;
    
    // Format JSON objects preserving keys properly
    const qs = data[key].map(q => {
        let qLines = [];
        if (q.q) qLines.push(`            q: ${JSON.stringify(q.q)}`);
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
console.log('Cleaned civics dupes and saved quiz_data.js.');
