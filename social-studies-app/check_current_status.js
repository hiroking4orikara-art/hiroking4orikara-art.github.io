const fs = require('fs');

try {
    const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
    const match = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
    if (!match) {
        console.log("Could not find window.QUIZ_DATA");
        process.exit(1);
    }
    const quizData = new Function(`return ${match[1]}`)();

    const stats = {};
    for (const [section, questions] of Object.entries(quizData)) {
        let withImg = 0;
        let total = questions.length;
        for(const q of questions) {
            let hasImg = false;
            if (q.answerImg && q.answerImg.includes('assets/images/')) hasImg = true;
            if (q.img && q.img.includes('assets/images/')) hasImg = true;
            // Also check 'comment' just in case? Usually 'answerImg' is the main one.
            if (hasImg) {
                withImg++;
            }
        }
        stats[section] = { total, withImg, missing: total - withImg };
    }
    console.log("Status:");
    console.table(stats);
} catch (e) {
    console.error("Error:", e);
}
