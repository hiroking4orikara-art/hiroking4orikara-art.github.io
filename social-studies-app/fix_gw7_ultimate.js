const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

// ユーザーが羅列してくれた17個のキーワードすべてに対応する「究極のマッピング辞書」
const oceaniaMapping = {
    "ウェリントン": "assets/images/geography/oceania_new_zealand_landscape.jpg",
    "ニュージーランド": "assets/images/geography/oceania_new_zealand_landscape.jpg",
    "マオリ": "assets/images/geography/oceania_maori_culture.jpg",
    "南十字星": "assets/images/geography/oceania_southern_cross.jpg",
    "サザンクロス": "assets/images/geography/oceania_southern_cross.jpg",
    "グレートディバイディング": "assets/images/geography/oceania_great_dividing_range.jpg",
    "ポリネシア": "assets/images/geography/oceania_polynesia_islands.jpg",
    "フライングドクター": "assets/images/geography/oceania_flying_doctor.jpg",
    "地下住居": "assets/images/geography/oceania_underground_house.jpg",
    "オーストラリア": "assets/images/geography/oceania_australia_wildlife.jpg",
    "大陸": "assets/images/geography/oceania_australia_wildlife.jpg",
    "APEC": "assets/images/geography/oceania_apec_cooperation.jpg",
    "中国": "assets/images/geography/oceania_china_trade.jpg",
    "時差": "assets/images/geography/oceania_time_zone.jpg",
    "白豪主義": "assets/images/geography/oceania_white_australia.jpg",
    "イギリス": "assets/images/geography/oceania_british_colonization.jpg",
    "端境期": "assets/images/geography/oceania_reverse_seasons.jpg",
    "ワーキングホリデー": "assets/images/geography/oceania_working_holiday_backpackers.jpg",
    "環太平洋造山帯": "assets/images/geography/oceania_pacific_ring_of_fire.jpg"
};

let matchCount = 0;
qData.gw_7.forEach(q => {
    let combined = (q.q + " " + (q.a || "")).replace(/\n/g, '');
    for (const [key, img] of Object.entries(oceaniaMapping)) {
        if (combined.includes(key)) {
            q.answerImg = img;
            matchCount++;
            console.log(`Mapped [${key}] -> ${img.split('/').pop()}`);
            break;
        }
    }
});

const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
fs.writeFileSync('quiz_data.js', newContent);
console.log(`\ngw_7の究極アップデートを適用しました！ (${matchCount}問の画像を上書き)`);
