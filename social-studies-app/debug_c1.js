const fs = require('fs');
const content = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function('return ' + matchQuiz[1])();

const c1 = parsedData['c_1'];

let missingChoicesCount = 0;
let electionCount = 0;

console.log("=== Issues in c_1 ===");
c1.forEach((q, idx) => {
    // Check choices
    if(!q.choices || !Array.isArray(q.choices) || q.choices.length === 0) {
        console.log(`[Missing Choices] Index ${idx}, q:`, q.q);
        missingChoicesCount++;
    }

    // Check misplaced election related words
    const qText = q.q || "";
    if (qText.includes('選挙') || qText.includes('投票') || qText.includes('議院') || qText.includes('国会')) {
         console.log(`[Misplaced Keyword] Index ${idx}, q:`, qText);
         electionCount++;
    }
});

console.log("Total missing choices in c_1:", missingChoicesCount);
console.log("Total misplaced election questions in c_1:", electionCount);
