const fs = require('fs');

// Read the current data
let quizDataStr = fs.readFileSync('quiz_data_backup_before_rebuild.js', 'utf8');
const matchQuiz = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

// Keep a map of question/answer exact string to image path from quiz_data_backup_before_rebuild.js so we don't lose the hard work done mapped so far
const imgMap = {};
const sanitize = (str) => {
    if (!str) return '';
    return str.replace(/\s/g, '').replace(/（/g, '(').replace(/）/g, ')');
}
for (const [s, qs] of Object.entries(parsedData)) {
    qs.forEach(q => {
        if(q.q && q.a && q.answerImg) {
            imgMap[sanitize(q.q) + '|' + sanitize(q.a)] = q.answerImg;
        }
    });
}

// Ensure the old mapped backup images are also remembered
const backup1Str = fs.readFileSync('quiz_data_civics_mapped_backup.js', 'utf8');
const parsedBackup1 = new Function('return ' + backup1Str.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/)[1])();
for (const [s, qs] of Object.entries(parsedBackup1)) {
    qs.forEach(q => {
        if(q.q && q.a && q.answerImg) {
            imgMap[sanitize(q.q) + '|' + sanitize(q.a)] = q.answerImg;
        }
    });
}

// Gather ALL civics batches
const allBatches = [];
for (let i = 1; i <= 17; i++) {
    try {
        const batchFile = `civics_batch_${i}.json`;
        if (fs.existsSync(batchFile)) {
            const batchData = JSON.parse(fs.readFileSync(batchFile, 'utf8'));
            allBatches.push(...batchData);
        }
    } catch (e) {}
}

// Deduplicate strictly to find the TRUE unique questions from the batches
const uniqueBatches = [];
const seenKey = new Set();
allBatches.forEach(c => {
    if(c.q && c.a) {
        const key = sanitize(c.q) + '|' + sanitize(c.a);
        if(!seenKey.has(key)) {
            seenKey.add(key);
            uniqueBatches.push(c);
        }
    }
});
console.log(`Total unique civics questions in batches: ${uniqueBatches.length}`); // Should be ~457

// Clean Geography & History sections entirely
const cleanData = {};
const civicsSections = ['c_1', 'c_2', 'c_3', 'c_4', 'c_5', 'cw_1'];
for (const [section, questions] of Object.entries(parsedData)) {
    if (!civicsSections.includes(section)) {
        cleanData[section] = questions.filter(q => {
            if(!q.q || !q.a) return true;
            const key = sanitize(q.q) + '|' + sanitize(q.a);
            return !seenKey.has(key);
        });
    }
}

// Divide the unique questions neatly into the 6 civics sections.
civicsSections.forEach(s => cleanData[s] = []);
let total = uniqueBatches.length;
// Distribute them evenly
let chunkSize = Math.ceil(total / civicsSections.length);
let pointer = 0;
for(let i=0; i<civicsSections.length; i++) {
    const chunk = uniqueBatches.slice(pointer, pointer + chunkSize);
    cleanData[civicsSections[i]] = chunk;
    pointer += chunkSize;
}

// Apply images to the new cleanly distributed arrays
let mappedImagesCount = 0;
for(let i=0; i<civicsSections.length; i++) {
    cleanData[civicsSections[i]].forEach(q => {
        const key = sanitize(q.q) + '|' + sanitize(q.a);
        if(imgMap[key]) {
             q.answerImg = imgMap[key];
             q.imgCaption = "※画像はイメージです";
             mappedImagesCount++;
        }
    });
}

console.log(`Successfully mapped images onto ${mappedImagesCount} civics questions!`);

let totalGeoH = 0;
let totalC = 0;
for (const [k, v] of Object.entries(cleanData)) {
    if (k.startsWith('c')) totalC += v.length;
    else totalGeoH += v.length;
}
console.log(`Final Restored Geo/History: ${totalGeoH}`);
console.log(`Final Restored Civics: ${totalC}`);


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

console.log('Successfully completed the absolute true rebuild of quiz_data.js!');
