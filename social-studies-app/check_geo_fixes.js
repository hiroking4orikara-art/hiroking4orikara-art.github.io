const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const q = new Function(`return ${matchQuiz[1]}`)();

const targets = ['鹿児島県', '世界遺産', '地中海性気候', 'ユーラシア大陸'];

for (const [key, questions] of Object.entries(q)) {
    if (!Array.isArray(questions)) continue;
    
    questions.forEach((item, index) => {
        if (!item.a || !item.q) return;
        
        for (const target of targets) {
            if (item.a.includes(target) || item.q.includes(target)) {
                console.log(`---`);
                console.log(`Found [${target}] in ${key} at index ${index}`);
                console.log(`Q: ${item.q}`);
                console.log(`A: ${item.a}`);
                console.log(`Current answerImg: ${item.answerImg || 'NONE'}`);
                if (item.img) console.log(`Current img: ${item.img}`);
            }
        }
    });
}
