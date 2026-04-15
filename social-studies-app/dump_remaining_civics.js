const fs = require('fs');

try {
    const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
    const matchQuiz = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
    const parsedData = new Function(`return ${matchQuiz[1]}`)();
    const civicsImages = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));
    
    // Get unused images
    const unusedImages = civicsImages.filter(img => !quizDataStr.includes(img.filename));
    
    let missingCivics = [];
    
    for (const [section, questions] of Object.entries(parsedData)) {
        if (section.startsWith('c_') || section.startsWith('cw_')) {
            questions.forEach((q, index) => {
                let hasImg = false;
                if (q.answerImg && q.answerImg.includes('assets/images/') && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
                if (q.img && q.img.includes('assets/images/') && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
                
                if (!hasImg) {
                    missingCivics.push({ section, index, q: q.q, a: q.a, comment: q.comment });
                }
            });
        }
    }
    
    // output for review
    fs.writeFileSync('remaining_missing_civics.json', JSON.stringify(missingCivics, null, 2));
    fs.writeFileSync('unused_civics_images.json', JSON.stringify(unusedImages, null, 2));
    
    let csvData = "Section,Index,Question,Answer\n";
    missingCivics.forEach(q => {
        csvData += `${q.section},${q.index},"${q.q.replace(/"/g, '""')}","${q.a.replace(/"/g, '""')}"\n`;
    });
    fs.writeFileSync('remaining_missing_civics.csv', csvData);

    console.log(`Wrote ${missingCivics.length} remaining questions and ${unusedImages.length} unused images for review.`);
} catch(e) {
    console.error("Error:", e);
}
