const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');

// The file format might be:
// module.exports = { ... }; module.exports = window.QUIZ_DATA;
// Or window.QUIZ_DATA = { ... };

let dataObjStr = parsedDataStr;
dataObjStr = dataObjStr.replace(/module\.exports\s*=\s*/g, 'window.QUIZ_DATA = ');

const matchQuiz = dataObjStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
try {
    const parsedData = new Function(`return ${matchQuiz[1]}`)();
    console.log("Section counts:");
    for(const section in parsedData) {
        console.log(`- ${section}: ${parsedData[section].length} questions`);
    }
} catch (e) {
    console.error("Syntax Error in JSON representation:", e);
}
