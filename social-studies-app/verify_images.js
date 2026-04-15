const fs = require('fs');
try {
    const rawContent = fs.readFileSync('quiz_data.js', 'utf8');
    fs.writeFileSync('temp_data_eval.js', rawContent + '\nmodule.exports = QUIZ_DATA;');
    const QUIZ_DATA = require('./temp_data_eval.js');

    const checkPlaces = ['沖縄県', '福岡県', '有明海'];
    const results = [];

    for (const unit in QUIZ_DATA) {
        if (!Array.isArray(QUIZ_DATA[unit])) continue;
        QUIZ_DATA[unit].forEach((qObj, index) => {
            if (checkPlaces.includes(qObj.a) || checkPlaces.includes(qObj.correct)) {
                results.push({
                    unit: unit,
                    index: index,
                    answer: qObj.a || qObj.correct,
                    img: qObj.img,
                    caption: qObj.imgCaption
                });
            }
        });
    }

    console.log(JSON.stringify(results, null, 2));
} catch (e) {
    console.error("Error reading quiz_data.js:", e);
}
