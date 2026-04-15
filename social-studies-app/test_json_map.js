const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');
const dataPrefix = 'window.QUIZ_DATA = ';
const jsonStr = content.substring(content.indexOf(dataPrefix) + dataPrefix.length).trim();
// Remove trailing semicolon if any
const cleanJsonStr = jsonStr.endsWith(';') ? jsonStr.slice(0, -1) : jsonStr;

try {
    const quizData = JSON.parse(cleanJsonStr);
    let found = false;
    
    // Find the Shimabara item
    for (const unit in quizData) {
        if (unit === 'h_early_modern_3') {
            quizData[unit].forEach(q => {
                if (q.a === '島原・天草一揆') {
                    q.image = 'assets/images/history/h_early_modern_3_shimabara_amakusa.png';
                    found = true;
                }
            });
        }
    }
    
    if (found) {
        // We can't just stringify the whole thing, because it will lose formatting.
        // Let's do it right.
        console.log("Found Shimabara in JSON.");
    } else {
        console.log("Could not find Shimabara in JSON.");
    }
} catch (e) {
    console.error("Could not parse JSON", e);
}
