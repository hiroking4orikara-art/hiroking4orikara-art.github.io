const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

// ピンポイントで確実に修復するマッピングデータ（gw_2, gw_3）
const mapData = {
    'gw_2': {
        39: 'assets/images/geography/g_gw_1_104_opec_1773417552741.jpg',
        41: 'assets/images/geography/g_gw_1_106_nomadic_herding_1773417588024.jpg',
        52: 'assets/images/geography/g_gw_7_35_pacific_ring_1773397893610.jpg'
    },
    'gw_3': {
        6: 'assets/images/geography/g_gw_1_138_north_atlantic_drift_1773418187213.jpg',
        43: 'assets/images/geography/geo_gw_3_43_baltic_states_1773883221821.jpg'
    }
};

for (const unit of ['gw_2', 'gw_3']) {
    for (const [idx, img] of Object.entries(mapData[unit])) {
        if (qData[unit] && qData[unit][idx]) {
            qData[unit][idx].answerImg = img;
            console.log(`Mapped [${unit}][${idx}] (${qData[unit][idx].a}) to ${img}`);
        }
    }
}

const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
fs.writeFileSync('quiz_data.js', newContent);
console.log("\nquiz_data.js に gw_2 と gw_3 の修復結果（5問）を上書き保存しました！");
