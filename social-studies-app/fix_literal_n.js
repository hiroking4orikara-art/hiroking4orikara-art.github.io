const fs = require('fs');

let content = fs.readFileSync('quiz_data.js', 'utf8');

console.log("Found \\n spaces:", content.match(/\\n\s*answerImg:/g)?.length || 0);
console.log("Found literal \\n:", content.match(/\\n/g)?.length || 0);

// Just replace literally:
content = content.replace(/\\n            answerImg/g, '\n            answerImg');
content = content.replace(/\\n            imgCaption/g, '\n            imgCaption');
content = content.replace(/",\\n/g, '",\n');
content = content.replace(/", \\n/g, '",\n');

fs.writeFileSync('quiz_data.js', content);
console.log("Replaced and saved!");

// Test parsing
try {
    const fn = new Function('window={}; ' + content.replace(/module\.exports.*/, '') + '; return window.QUIZ_DATA;');
    const data = fn();
    console.log("Parse success! Keys:", Object.keys(data).length);
} catch(e) {
    console.error("Still parse error:", e.message);
}
