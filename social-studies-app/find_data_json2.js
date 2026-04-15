const fs = require('fs');
global.window = {};
eval(fs.readFileSync('quiz_data.js', 'utf-8'));
const data = window.QUIZ_DATA;
const results = {
    japan_overlays: [],
    prefecture_quizzes: []
};

for (const [unitId, questions] of Object.entries(data)) {
    questions.forEach((q, idx) => {
        // Japan Geography overlays (especially rivers)
        if (unitId.startsWith('gj_') && q.mapOverlay) {
            let isRiver = q.a && q.a.includes('川');
            if (!isRiver && q.choices) {
                isRiver = q.choices.some(c => c.includes('川'));
            }
            if (isRiver) {
                results.japan_overlays.push({ unitId, idx, q: q.q, a: q.a, img: q.img, hasOverlay: !!q.mapOverlay, mapOverlay: q.mapOverlay });
            }
        }
        
        // Prefecture quizzes - look for questions asking for prefecture names
        if (q.img && (q.q.includes('県') || q.q.includes('都道府県') || q.q.includes('何県'))) {
            // Check if it's a map image (usually blank maps)
            if (q.img.includes('kanto') || q.img.includes('kansai') || q.img.includes('pref') || q.img.includes('japan') || q.img.includes('chugoku') || q.img.includes('shikoku') || q.img.includes('kyushu') || q.img.includes('tohoku') || q.img.includes('chubu')) {
                results.prefecture_quizzes.push({ unitId, idx, q: q.q, a: q.a, img: q.img });
            }
        }
    });
}
fs.writeFileSync('found_data2.json', JSON.stringify(results, null, 2));
