const fs = require('fs');

let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const answerToImgMap = {};

// 1. Build a dictionary of answer -> image from already mapped questions
for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach(q => {
            if (q.answerImg && q.answerImg.includes('assets/images/civics/')) {
                answerToImgMap[q.a] = q.answerImg;
            }
        });
    }
}

let replaced = 0;
let stillMissingCount = 0;
let stillMissingList = [];

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach(q => {
            let hasImg = false;
            if (q.answerImg && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
            if (q.img && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
            
            if (!hasImg) {
                // Try to find the image in the dictionary
                if (answerToImgMap[q.a]) {
                    // We found an image! Let's inject it into the string
                    const qEscaped = q.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
                    // To be safe and precise, we match the exact block
                    const blockRegex = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(a:\\s*".*?")(\\n*\\s*\\})`, 'g');
                    let matchFound = blockRegex.exec(quizDataStr);
                    if (matchFound) {
                        const replacement = `${matchFound[1]}${matchFound[2]},\n            answerImg: "${answerToImgMap[q.a]}",\n            imgCaption: "※画像はイメージです"${matchFound[3]}`;
                        quizDataStr = quizDataStr.replace(matchFound[0], replacement);
                        replaced++;
                    } else {
                        // Sometimes the last element is comment
                        const blockRegex2 = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(comment:\\s*".*?")(\\n*\\s*\\})`, 'g');
                        const match2 = blockRegex2.exec(quizDataStr);
                        if (match2) {
                            const replacement = `${match2[1]}${match2[2]},\n            answerImg: "${answerToImgMap[q.a]}",\n            imgCaption: "※画像はイメージです"${match2[3]}`;
                            quizDataStr = quizDataStr.replace(match2[0], replacement);
                            replaced++;
                        } else {
                            // Can't find block
                            stillMissingList.push(q.a);
                            stillMissingCount++;
                        }
                    }
                } else {
                    stillMissingList.push(q.a);
                    stillMissingCount++;
                }
            }
        });
    }
}

fs.writeFileSync('quiz_data.js', quizDataStr, 'utf8');

console.log(`Successfully mapped duplicates! Applied ${replaced} images to missing duplicate questions.`);
console.log(`Still unmatched remaining: ${stillMissingCount}`);
if (stillMissingCount > 0) {
    console.log("Unmatched:", [...new Set(stillMissingList)].join(', '));
}
