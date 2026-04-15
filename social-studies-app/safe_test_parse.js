const fs = require('fs');

try {
    let data = fs.readFileSync('quiz_data.js', 'utf8');
    console.log("File loaded. Length:", data.length);
    
    // Safely parse without complex regex
    // The file starts with: window.QUIZ_DATA = { ...
    let jsCode = data.trim();
    if (jsCode.startsWith('window.QUIZ_DATA = ')) {
        jsCode = jsCode.substring('window.QUIZ_DATA = '.length);
    }
    if (jsCode.endsWith(';')) {
        jsCode = jsCode.slice(0, -1);
    }

    console.log("Extracting object...");
    const quizData = new Function(`return ${jsCode}`)();
    console.log("Successfully parsed quiz data!");
    console.log("Number of sections:", Object.keys(quizData).length);
    
} catch (e) {
    console.error("Error during parsing:", e);
}
