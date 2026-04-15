const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', '..', 'brain', 'dcfd96d3-daf4-48a3-b191-9c9125d4bf63');
const destDir = path.join(__dirname, 'assets', 'images', 'civics');

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

quizData = quizData.replace(/module\.exports\s*=\s*window\.QUIZ_DATA;/, '');

const obj = new Function('window={}; ' + quizData + '; return window.QUIZ_DATA;')();

const civicsQuestions = obj.gw_3 || [];

// The 10 images we generated for indices 80-89
const generatedImages = [
    { name: "g_civics_9_universal_suffrage", index: 80 },
    { name: "g_civics_9_equal_suffrage", index: 81 },
    { name: "g_civics_9_direct_election", index: 82 },
    { name: "g_civics_9_secret_ballot", index: 83 },
    { name: "g_civics_9_election_commission", index: 84 },
    { name: "g_civics_9_election_law", index: 85 },
    { name: "g_civics_9_turnout", index: 86 },
    { name: "g_civics_9_early_voting", index: 87 },
    { name: "g_civics_9_large_electoral_district", index: 88 }, 
    { name: "g_civics_9_small_electoral_district", index: 89 } 
];

const files = fs.readdirSync(srcDir);

for (const request of generatedImages) {
    const matchingFile = files.find(f => f.startsWith(request.name) && f.endsWith('.png'));
    if (matchingFile) {
        const srcPath = path.join(srcDir, matchingFile);
        const destPath = path.join(destDir, matchingFile);
        fs.copyFileSync(srcPath, destPath);
        
        civicsQuestions[request.index].answerImg = `assets/images/civics/${matchingFile}`;
        civicsQuestions[request.index].imgCaption = "※画像はイメージです";
        
        console.log(`Applied image to question [${request.index}]: ${civicsQuestions[request.index].a}`);
    } else {
        console.warn(`Could not find image for ${request.name}`);
    }
}

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
console.log('Successfully applied batch 9 images and saved quiz_data.js.');
