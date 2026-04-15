const fs = require('fs');

try {
    let data = fs.readFileSync('quiz_data.js', 'utf8');
    let jsCode = data.trim();
    if (jsCode.startsWith('window.QUIZ_DATA = ')) {
        jsCode = jsCode.substring('window.QUIZ_DATA = '.length);
    }
    if (jsCode.endsWith(';')) {
        jsCode = jsCode.slice(0, -1);
    }
    const quizData = new Function(`return ${jsCode}`)();

    let found = false;
    for (const [section, questions] of Object.entries(quizData)) {
        questions.forEach((q, idx) => {
            if (q.q && (q.q.includes('1232') || q.q.includes('北条泰時') || q.q.includes('式目') || q.q.includes('御家人'))) {
                console.log(`Found match in ${section}[${idx}]`);
                console.log("Current Question:", q);
                found = true;
            }
        });
    }

    if (!found) {
        console.log("Could not find any alternative keywords matching the question either.");
    }

} catch (e) {
    console.error("Error:", e);
}
