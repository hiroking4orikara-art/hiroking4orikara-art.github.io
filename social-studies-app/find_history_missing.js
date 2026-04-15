const fs = require('fs');

try {
    const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
    const match = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
    if (!match) {
        console.log("Could not find window.QUIZ_DATA");
        process.exit(1);
    }
    const parsedData = new Function(`return ${match[1]}`)();
    
    const missingHistory = [];
    
    for (const [section, questions] of Object.entries(parsedData)) {
        if (section.startsWith('h_')) {
            questions.forEach((q, index) => {
                let hasImg = false;
                if (q.answerImg && q.answerImg.includes('assets/images/') && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
                if (q.img && q.img.includes('assets/images/') && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
                
                if (!hasImg) {
                    missingHistory.push({
                        section,
                        index,
                        q: q.q,
                        a: q.a,
                        comment: q.comment
                    });
                }
            });
        }
    }
    
    console.log(`Found ${missingHistory.length} missing History images in total.`);
    
    // Group by section
    const bySection = {};
    missingHistory.forEach(m => {
        bySection[m.section] = (bySection[m.section] || 0) + 1;
    });
    console.log("\nBreakdown by section:");
    for (const [sec, count] of Object.entries(bySection)) {
        console.log(`- ${sec}: ${count}`);
    }
    
    fs.writeFileSync('missing_history_detailed.json', JSON.stringify(missingHistory, null, 2));
    console.log("\nDetailed list saved to missing_history_detailed.json");

} catch(e) {
    console.error("Error:", e);
}
