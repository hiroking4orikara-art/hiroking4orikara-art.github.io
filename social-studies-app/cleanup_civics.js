const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

// The previous restoration script forcefully shoved everything into c_1, c_3, c_4, c_5 without full proper keys like 'c_01_modern_society'.
// Also the order was messed up and everything from 11-50 went to these fallback keys.
// All true Civics sections:
const civicsKeys = [
    "c_01_modern_society",
    "c_02_human_rights",
    "c_03_politics",
    "c_04_economy",
    "c_05_global_society",
    "cw_1" // Comprehensive review
];

// Re-map the newly merged short keys to their correct long keys.
const newParsedData = {};
for (const [key, val] of Object.entries(parsedData)) {
    if (["c_0", "c_1", "c_3", "c_4", "c_5"].includes(key)) {
        // Find correct long key
        let targetKey = "c_03_politics"; // default
        if (key === "c_1") targetKey = "c_02_human_rights";
        if (key === "c_3") targetKey = "c_03_politics";
        if (key === "c_4") targetKey = "c_04_economy";
        if (key === "c_5") targetKey = "c_05_global_society";
        
        if (!newParsedData[targetKey]) {
            // Might already exist
            newParsedData[targetKey] = parsedData[targetKey] || [];
        }
        
        // Append unique
        val.forEach(q => {
            const isDupe = newParsedData[targetKey].some(existing => existing.q === q.q);
            if (!isDupe) newParsedData[targetKey].push(q);
        });
        
    } else {
        if (!newParsedData[key]) newParsedData[key] = [];
        val.forEach(q => {
             const isDupe = newParsedData[key].some(existing => existing.q === q.q);
             if (!isDupe) newParsedData[key].push(q);
        });
    }
}

// Ensure the keys are in a clean order (History, Geo, Civics, general)
const finalParsedData = {};
Object.keys(newParsedData).sort().forEach(key => {
    finalParsedData[key] = newParsedData[key];
});

let content = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(finalParsedData);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = finalParsedData[key];
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
console.log("Successfully cleaned up Civics section keys in quiz_data.js.");
