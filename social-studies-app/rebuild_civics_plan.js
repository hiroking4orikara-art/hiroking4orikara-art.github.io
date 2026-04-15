const fs = require('fs');

// Read the current data
let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

// Read the old backup that has the properly distributed 272 questions
const backup1Str = fs.readFileSync('quiz_data_civics_mapped_backup.js', 'utf8');
const parsedBackup1 = new Function('return ' + backup1Str.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/)[1])();

// Read all batches
const allCivics = [];
for (let i = 1; i <= 17; i++) {
    try {
        const batchFile = `civics_batch_${i}.json`;
        if (fs.existsSync(batchFile)) {
            const batchData = JSON.parse(fs.readFileSync(batchFile, 'utf8'));
            allCivics.push(...batchData);
        }
    } catch (e) {}
}

const cleanData = {};
const civicsSections = ['c_1', 'c_2', 'c_3', 'c_4', 'c_5', 'cw_1'];

// 1. Clean geo/history
for (const [section, questions] of Object.entries(parsedData)) {
    if (!civicsSections.includes(section)) {
        cleanData[section] = questions.filter(q => {
            // Drop any question that literally matches a known civics question from the backup or batches
            const isFromBatch = allCivics.some(civ => civ.q === q.q && civ.a === q.a);
            let isFromBackupCivics = false;
            civicsSections.forEach(cs => {
               if (parsedBackup1[cs] && parsedBackup1[cs].some(civ => civ.q === q.q && civ.a === q.a)) {
                   isFromBackupCivics = true;
               }
            });
            return !isFromBatch && !isFromBackupCivics;
        });
    }
}

// 2. Restore Civics
// Start with the 272 from the backup
civicsSections.forEach(cs => {
    cleanData[cs] = parsedBackup1[cs] || [];
});

// Calculate what's missing
const existingCivicsQs = new Set();
civicsSections.forEach(cs => {
    cleanData[cs].forEach(q => existingCivicsQs.add(q.q.trim() + '|' + q.a.trim()));
});

// Find batches that aren't in there yet
const missingFromBatches = allCivics.filter(civ => !existingCivicsQs.has(civ.q.trim() + '|' + civ.a.trim()));

// Just append the missing ones to cw_1 (総合復習)
if (!cleanData['cw_1']) cleanData['cw_1'] = [];
cleanData['cw_1'].push(...missingFromBatches);

let totalGeoH = 0;
let totalC = 0;
for (const [k, v] of Object.entries(cleanData)) {
    if (k.startsWith('c')) totalC += v.length;
    else totalGeoH += v.length;
}
console.log(`Cleaned Geo/History: ${totalGeoH} questions`);
console.log(`Restored Civics: ${totalC} questions (added ${missingFromBatches.length} missing from batches to cw_1)`);

// Reserialize
let content = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(cleanData);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = cleanData[key];
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

console.log('Successfully rebuilt quiz_data.js cleanly!');
