const fs = require('fs');

try {
    const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
    const matchQuiz = quizDataStr.match(/module\.exports\s*=\s*(\{[\s\S]*\}\s*);?/);
    const parsedData = new Function(`return ${matchQuiz[1]}`)();
    
    let totalCivics = 0;
    let missingCivicsCount = 0;
    
    for (const [section, questions] of Object.entries(parsedData)) {
        if (section.startsWith('c_') || section.startsWith('cw_')) {
            questions.forEach(q => {
                totalCivics++;
                let hasImg = false;
                if (q.answerImg && q.answerImg.includes('assets/images/') && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
                if (q.img && q.img.includes('assets/images/') && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
                
                if (!hasImg) {
                    missingCivicsCount++;
                }
            });
        }
    }
    
    console.log(`Civics Questions: ${totalCivics}`);
    console.log(`Missing Images: ${missingCivicsCount}`);
    
    const mapped = 265 - missingCivicsCount;
    console.log(`Total currently mapped: ${mapped}`);
    
} catch(e) {
    console.error("Error:", e);
}
