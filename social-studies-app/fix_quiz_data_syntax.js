const fs = require('fs');
const path = require('path');

try {
    let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
    
    // The error is that actual literal "\n" characters were inserted instead of real newlines.
    // They look like: ...",\n            answerImg: "assets/...
    
    // We can replace all instances of:
    // ",\n            answerImg: "
    // with:
    // ",\n            answerImg: " (actual newline)
    
    // Let's use string replace all.
    // In javascript string literal '\\n' is two characters: backslash and n.
    // Wait, let's look at the error log from check_syntax.
    // It says: comment: "...",\n            answerImg: "..."
    // So the literal characters \ and n are in the file.
    
    quizDataStr = quizDataStr.replace(/",\\n            answerImg:/g, '",\n            answerImg:');
    quizDataStr = quizDataStr.replace(/",\\n            imgCaption:/g, '",\n            imgCaption:');
    
    fs.writeFileSync('quiz_data.js', quizDataStr, 'utf8');
    console.log("Fixed literal newlines in quiz_data.js");
} catch(e) {
    console.error("Error:", e);
}
