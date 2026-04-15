const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const imageDir = path.join(__dirname, 'assets', 'images', 'history');
const allImages = fs.readdirSync(imageDir);

const content = quizData;
const cleanedContent = content.replace('window.QUIZ_DATA =', 'const data =') + '; module.exports = data;';
fs.writeFileSync('temp_quiz_data_parse2.js', cleanedContent);
let QUIZ_DATA;
try {
    QUIZ_DATA = require('./temp_quiz_data_parse2.js');
} catch (e) {
    console.error("Parse error:", e);
    process.exit(1);
}

let fixCount = 0;
let removeCount = 0;

for (const unitId in QUIZ_DATA) {
    if (unitId.startsWith('h_')) {
        QUIZ_DATA[unitId].forEach((q, index) => {
            if (q.img && q.img !== "" && !q.img.includes('placeholder')) {
                const imgName = path.basename(q.img);
                const fullPath = path.join(imageDir, imgName);
                if (!fs.existsSync(fullPath)) {
                    // It doesn't exist, meaning it's a broken link. Find actual file.
                    const baseName = imgName.replace('.png', '');
                    const actualFile = allImages.find(f => f.startsWith(baseName + '_') || f === baseName + '.png');
                    if (actualFile) {
                        const newImg = `assets/images/history/${actualFile}`;
                        // Replace string carefully
                        quizData = quizData.replace(`"${q.img}"`, `"${newImg}"`);
                        quizData = quizData.replace(`'${q.img}'`, `"${newImg}"`);
                        console.log(`[FIXED] ${q.img} -> ${newImg}`);
                        fixCount++;
                    } else {
                        console.log(`[NOT_FOUND] ${q.img} -> removed it.`);
                        // It's broken, remove the img entirely so it gets picked up as missing
                        const regex1 = new RegExp(`img:\\s*["']${q.img.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']\\s*,`);
                        quizData = quizData.replace(regex1, '');
                        removeCount++;
                    }
                }
            }
        });
    }
}

if (fixCount > 0 || removeCount > 0) {
    fs.writeFileSync(quizDataPath, quizData, 'utf8');
    console.log(`Saved quiz_data.js with ${fixCount} fixes and ${removeCount} removals.`);
} else {
    console.log('No broken links found.');
}

fs.unlinkSync('temp_quiz_data_parse2.js');
