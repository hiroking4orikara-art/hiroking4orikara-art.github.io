const fs = require('fs');

try {
    const rawContent = fs.readFileSync('quiz_data.js', 'utf8');
    fs.writeFileSync('temp_data_eval.js', rawContent + '\nmodule.exports = QUIZ_DATA;');
    const data = require('./temp_data_eval.js');
    
    let missed = [];
    const keywords = ['県', '海', '川', '山地', '山脈', '平野', '島', '半島'];
    
    for (let unitId in data) {
        if (unitId.startsWith('gj_') || unitId.startsWith('gw_')) {
            const questions = data[unitId];
            questions.forEach((qObj, idx) => {
                const questionText = qObj.q || "";
                const answerText = qObj.a || "";
                const imgSrc = qObj.img || "";

                // If already customized, skip
                if (imgSrc.includes('custom_map_')) return;

                // Check if question asks for location
                const asksForLocation = questionText.includes('どこの県') || questionText.includes('何という') || questionText.includes('なまえは');
                
                // Check if answer is a geographical feature
                const isGeoAnswer = keywords.some(kw => answerText.includes(kw));

                // Specifically look for Okinawa and Ariake Sea
                if (answerText === '沖縄県' || answerText === '有明海' || (asksForLocation && isGeoAnswer && !questionText.includes('特産'))) {
                    missed.push({
                        unit: unitId,
                        index: idx,
                        question: questionText,
                        correct: answerText,
                        image: imgSrc
                    });
                }
            });
        }
    }
    
    fs.writeFileSync('missed_map_questions.json', JSON.stringify(missed, null, 2));
    console.log('Successfully extracted ' + missed.length + ' missed questions.');
} catch(e) {
    console.error('Error:', e);
}
