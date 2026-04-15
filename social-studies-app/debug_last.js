const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

let missingList = [];
for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('c_') || section.startsWith('cw_')) {
        questions.forEach((q, index) => {
            let hasImg = false;
            if (q.answerImg && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
            if (q.img && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
            if (!hasImg) {
                missingList.push(q);
            }
        });
    }
}

console.log("Found missing count:", missingList.length);

missingList.slice(0, 5).forEach(m => {
    const qEscaped = m.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    
    console.log("---");
    console.log("Looking for Question:", m.q);
    console.log("Answer:", m.a);
    
    // Find substring inside quiz_data.js
    const idx = parsedDataStr.indexOf(m.q);
    if(idx > -1) {
        console.log("Found string context:");
        console.log(parsedDataStr.slice(Math.max(0, idx - 20), idx + m.q.length + 200));
    } else {
        console.log("Could not find string literally!");
    }
});
