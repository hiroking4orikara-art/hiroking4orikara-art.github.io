const fs = require('fs');
global.window = {};
eval(fs.readFileSync('quiz_data.js', 'utf-8'));
const data = window.QUIZ_DATA;
const results = {
    rivers: [],
    prefectures: []
};

for (const [unitId, questions] of Object.entries(data)) {
    questions.forEach((q, idx) => {
        // Find Japanese rivers
        if (q.q && q.q.includes('川') && unitId.includes('japan')) {
            results.rivers.push({ unitId, idx, q: q.q, img: q.img, hasOverlay: !!q.mapOverlay, mapOverlay: q.mapOverlay });
        }
        // Find prefecture quizzes
        if (q.q && (q.q.includes('県') || q.q.includes('都道府県')) && q.img && q.img.includes('pref')) {
            results.prefectures.push({ unitId, idx, q: q.q, img: q.img, hasOverlay: !!q.mapOverlay });
        }
        // General check for English names on map images
        if (q.img && (q.img.includes('kanto') || q.img.includes('kansai') || q.img.includes('pref') || q.img.includes('japan'))) {
             if (q.q && q.q.includes('県')) {
                 if (!results.prefectures.find(p => p.q === q.q)) {
                     results.prefectures.push({ unitId, idx, q: q.q, img: q.img });
                 }
             }
        }
    });
}
fs.writeFileSync('found_data.json', JSON.stringify(results, null, 2));
