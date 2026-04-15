const fs = require('fs');
const quizDataText = fs.readFileSync('C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\quiz_data.js', 'utf8');

// A very unsafe but quick eval-like way to extract the object. 
// Since quiz_data.js defines `const quizData = { ... }`, we can just extract it.
const match = quizDataText.match(/const\s+quizData\s*=\s*(\{[\s\S]+\});/);
if (match) {
    // Just find keys starting with "gj"
    const gjKeywordsRow = match[1].match(/gj_\d+:\s*\[[\s\S]+?\]/g);
    if (gjKeywordsRow) {
        // we can't easily parse without evaluating, but we can just regex the questions.
    }
}

// better approach: just regex to find all "category: 'geography_japan'" or similar or unit names.
// It's easier: The structure is `const quizData = { "gw_1": [...], "gj_1": [...] };`
// Let's just require it if we can export it, but it's not exported.
// We can dynamically evaluate the file contents and dump the keys ending with 'gj_X' and their first question's unit title roughly.

const scriptCode = quizDataText + "\nconsole.log(Object.keys(quizData).filter(k => k.startsWith('gj_')).map(k => `${k}: ${quizData[k][0]?.question || 'No questions'}`).join('\\n'));";
fs.writeFileSync('temp_inspect.js', scriptCode);
