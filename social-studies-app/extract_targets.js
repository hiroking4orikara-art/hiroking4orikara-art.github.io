const fs = require('fs');
global.window = {};
eval(fs.readFileSync('quiz_data.js', 'utf-8'));
const data = window.QUIZ_DATA;
const results = [];

// Look for Hokkaido (gj_9)
if (data['gj_9']) {
    data['gj_9'].forEach((q, idx) => {
        if (q.img) {
            results.push({ unitId: 'gj_9', idx, q: q.q, img: q.img, mapOverlay: q.mapOverlay });
        }
    });
}
// Look for Okinawa (maybe in Kyushu gj_3 ?)
if (data['gj_3']) {
    data['gj_3'].forEach((q, idx) => {
        if (q.img || (q.q && q.q.includes('沖縄'))) {
            results.push({ unitId: 'gj_3', idx, q: q.q, img: q.img, mapOverlay: q.mapOverlay });
        }
    });
}

fs.writeFileSync('target_maps.json', JSON.stringify(results, null, 2));
console.log('Done mapping.');
