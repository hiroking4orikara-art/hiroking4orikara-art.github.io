const fs = require('fs');

try {
    const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
    const matchQuiz = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
    const parsedData = new Function(`return ${matchQuiz[1]}`)();
    
    let missingList = [];
    
    for (const [section, questions] of Object.entries(parsedData)) {
        if (section.startsWith('c_') || section.startsWith('cw_')) {
            questions.forEach((q, index) => {
                let hasImg = false;
                if (q.answerImg && q.answerImg.includes('assets/images/') && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
                if (q.img && q.img.includes('assets/images/') && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
                
                if (!hasImg) {
                    missingList.push({
                        section: section,
                        index: index,
                        q: q.q,
                        a: q.a
                    });
                }
            });
        }
    }
    
    fs.writeFileSync('missing_civics_detailed.json', JSON.stringify(missingList, null, 2));
    console.log(`Saved ${missingList.length} missing questions to missing_civics_detailed.json`);
} catch(e) {
    console.error("Error:", e);
}
