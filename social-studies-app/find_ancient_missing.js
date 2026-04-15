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

    const missing = [];
    for (const [section, questions] of Object.entries(quizData)) {
        if (section.startsWith('h_ancient')) {
            questions.forEach((q, idx) => {
                let hasImg = false;
                if (q.answerImg && q.answerImg.includes('assets/images/')) hasImg = true;
                if (q.img && q.img.includes('assets/images/')) hasImg = true;
                
                if (!hasImg) {
                    missing.push({
                        section,
                        index: idx,
                        q: q.q,
                        a: q.a
                    });
                }
            });
        }
    }

    console.log(`Missing Ancient History Images: ${missing.length}`);
    fs.writeFileSync('ancient_missing_detailed.json', JSON.stringify(missing, null, 2));
    console.log("Saved detailed list to ancient_missing_detailed.json");
    
    // Show first 5
    missing.slice(0, 5).forEach(m => console.log(`[${m.section}:${m.index}] Q: ${m.q} -> A: ${m.a}`));

} catch (e) {
    console.error("Error:", e);
}
