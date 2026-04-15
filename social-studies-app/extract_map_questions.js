const fs = require('fs');

try {
    const rawContent = fs.readFileSync('quiz_data.js', 'utf8');
    fs.writeFileSync('temp_data_eval.js', rawContent + '\nmodule.exports = QUIZ_DATA;');
    const data = require('./temp_data_eval.js');
    
    let targets = [];
    for (let unitId in data) {
        if (unitId.startsWith('gj_') || unitId.startsWith('gw_')) {
            
            const questions = data[unitId];
            questions.forEach((qObj, idx) => {
                const questionText = qObj.q;
                const answerText = qObj.a;
                const imgSrc = qObj.img;

                if (imgSrc && typeof imgSrc === 'string' && imgSrc.includes('blank')) {
                    targets.push({
                        unit: unitId,
                        index: idx,
                        question: questionText,
                        correct: answerText,
                        image: imgSrc
                    });
                }
                else if (questionText && typeof questionText === 'string' && (questionText.includes('どこの県') || questionText.includes('何という川') || questionText.includes('何という山脈') || questionText.includes('平野') || questionText.includes('何という平野') || questionText.includes('山地'))) {
                    if (!imgSrc || imgSrc === "" || imgSrc.includes('placeholder')) {
                        targets.push({
                            unit: unitId,
                            index: idx,
                            question: questionText,
                            correct: answerText,
                            image: imgSrc ? imgSrc : null
                        });
                    }
                }
            });
        }
    }
    
    fs.writeFileSync('target_map_questions.json', JSON.stringify(targets, null, 2));
    console.log('Successfully extracted ' + targets.length + ' questions.');
} catch(e) {
    console.error('Error:', e);
}
