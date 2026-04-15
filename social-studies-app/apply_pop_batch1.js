const fs = require('fs');
const path = require('path');

const brainDir = path.join('C:', 'Users', 'hirok', '.gemini', 'antigravity', 'brain', '1d28cb1c-5e96-453e-ae95-2729124c35dc');
const imagesDir = path.join(__dirname, 'images');
const quizDataPath = path.join(__dirname, 'quiz_data.js');

const imageMappings = {
    'エジプト文明': 'h_ancient_1_egypt_1772304266987.png',
    'メソポタミア文明': 'h_ancient_1_mesopotamia_1772304284010.png',
    'ハンムラビ法典': 'h_ancient_1_hammurabi_1772304299374.png'
};

let quizData = fs.readFileSync(quizDataPath, 'utf8');
let updateCount = 0;

for (const [answer, filename] of Object.entries(imageMappings)) {
    const srcPath = path.join(brainDir, filename);
    const destPath = path.join(imagesDir, filename);

    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${filename}`);

        const escapedAnswer = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        // Single string answer
        const regexStr = new RegExp(`(a:\\s*["']${escapedAnswer}["']\\s*,)(?!\\s*img:)`);
        // Array answer
        const regexArr = new RegExp(`(a:\\s*\\[\\s*["']${escapedAnswer}["']\\s*\\]\\s*,)(?!\\s*img:)`);

        const replaceStr = `$1\n            img: "images/${filename}",`;

        if (regexStr.test(quizData)) {
            quizData = quizData.replace(regexStr, replaceStr);
            console.log(`Added img for: ${answer}`);
            updateCount++;
        } else if (regexArr.test(quizData)) {
            quizData = quizData.replace(regexArr, replaceStr);
             console.log(`Added img for array: ${answer}`);
             updateCount++;
        } else {
            console.log(`Could not find a place to add img for: ${answer} (Maybe already exists?)`);
        }
    } else {
        console.error(`File not found: ${srcPath}`);
    }
}

if (updateCount > 0) {
    fs.writeFileSync(quizDataPath, quizData, 'utf8');
    console.log(`Update completed successfully. Updates made: ${updateCount}`);
} else {
    console.log(`No updates made to quiz_data.js`);
}
