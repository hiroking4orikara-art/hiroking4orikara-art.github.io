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

// The 10 images we generated for indices 40-49
const generatedImages = [
    { name: "g_civics_5_minimum_living", index: 40 },
    { name: "g_civics_5_pension", index: 41 },
    { name: "g_civics_5_education_right", index: 42 },
    { name: "g_civics_5_right_to_work", index: 43 },
    { name: "g_civics_5_labor_rights", index: 44 },
    { name: "g_civics_5_right_to_organize", index: 45 },
    { name: "g_civics_5_political_rights", index: 46 },
    { name: "g_civics_5_clone", index: 47 },
    { name: "g_civics_5_in_vitro", index: 48 }, 
    { name: "g_civics_5_aids", index: 49 } 
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
console.log('Successfully applied batch 5 images and saved quiz_data.js.');
