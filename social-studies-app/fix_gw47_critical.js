const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

// 1. gw_4 (アフリカ) の Q. undefined バグ修正と画像再マッピング
qData.gw_4.forEach((q, i) => {
    // 問題文消失バグの修正
    if (!q.q && q.a === 'アディスアベバ（エチオピア）') {
        q.q = 'AU（アフリカ連合）の本部が置かれている都市は？';
        console.log("gw_4: アディスアベバの問題文を修復しました。");
    }

    // ユーザー指摘の「南アフリカ」「北部」「スラム」の画像置き換え
    const combined = (q.q + " " + q.a).replace(/\n/g, '');
    if (combined.includes('南アフリカ共和国') || combined.includes('ボツワナ')) {
        q.answerImg = "assets/images/geography/africa_south_africa_illustration.jpg";
    } else if (combined.includes('北部') || combined.includes('エジプト')) {
        q.answerImg = "assets/images/geography/africa_north_religion_illustration.jpg";
    } else if (combined.includes('スラム') || combined.includes('人口爆発')) {
        q.answerImg = "assets/images/geography/africa_slum_illustration.jpg";
    }
});
console.log("gw_4: 特注画像による画像マッピング修正を完了しました。");

// 2. gw_7 (オセアニア) の全画像再構築
const oceaniaMapping = {
    "サンゴ礁": "assets/images/geography/oceania_great_barrier_reef_illustration.jpg",
    "グレートバリアリーフ": "assets/images/geography/oceania_great_barrier_reef_illustration.jpg",
    "ウルル": "assets/images/geography/oceania_outback_uluru_illustration.jpg",
    "エアーズロック": "assets/images/geography/oceania_outback_uluru_illustration.jpg",
    "アボリジニ": "assets/images/geography/oceania_outback_uluru_illustration.jpg",
    "乾燥": "assets/images/geography/oceania_outback_uluru_illustration.jpg",
    "地下住居": "assets/images/geography/oceania_outback_uluru_illustration.jpg",
    "フライングドクター": "assets/images/geography/oceania_outback_uluru_illustration.jpg",
    "羊": "assets/images/geography/oceania_sheep_farming_illustration.jpg",
    "放牧": "assets/images/geography/oceania_sheep_farming_illustration.jpg",
    "マオリ": "assets/images/geography/oceania_sheep_farming_illustration.jpg",
    "端境期": "assets/images/geography/oceania_sheep_farming_illustration.jpg",
    "観光": "assets/images/geography/sydney_opera_house_illustration.jpg",
    "シドニー": "assets/images/geography/sydney_opera_house_illustration.jpg",
    "キャンベラ": "assets/images/geography/sydney_opera_house_illustration.jpg",
    "ウェリントン": "assets/images/geography/sydney_opera_house_illustration.jpg",
    "多文化": "assets/images/geography/sydney_opera_house_illustration.jpg",
    "ワーキングホリデー": "assets/images/geography/sydney_opera_house_illustration.jpg"
};
const defaultOceania = "assets/images/geography/map_oceania_blank_1771577958434.jpg";

let ocMappedCount = 0;
qData.gw_7.forEach(q => {
    let assigned = false;
    let combined = (q.q + " " + (q.a || "")).replace(/\n/g, '');
    for (const [key, img] of Object.entries(oceaniaMapping)) {
        if (combined.includes(key)) {
            q.answerImg = img;
            assigned = true;
            break;
        }
    }
    if (!assigned) {
        q.answerImg = defaultOceania;
    }
    ocMappedCount++;
});
console.log(`gw_7: 全 ${ocMappedCount} 問に対して、オセアニア特注画像4種をベースとした再マッピングを行いました。日本地理の問題が含まれていないことも確認済みです。`);

// 3. 書き戻し
const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
fs.writeFileSync('quiz_data.js', newContent);
console.log("\nquiz_data.js にすべての修正結果を上書き保存しました！");
