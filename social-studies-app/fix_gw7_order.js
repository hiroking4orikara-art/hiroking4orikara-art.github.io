const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

// 優先順位を意識した厳格な順序（固有なキーワードほど上）
const oceaniaMapping = [
    { key: "マオリ", img: "oceania_maori_culture.jpg" },
    { key: "南十字星", img: "oceania_southern_cross.jpg" },
    { key: "サザンクロス", img: "oceania_southern_cross.jpg" },
    { key: "ウェリントン", img: "oceania_new_zealand_landscape.jpg" },
    { key: "グレートディバイディング", img: "oceania_great_dividing_range.jpg" },
    { key: "ポリネシア", img: "oceania_polynesia_islands.jpg" },
    { key: "フライングドクター", img: "oceania_flying_doctor.jpg" },
    { key: "地下住居", img: "oceania_underground_house.jpg" },
    { key: "ダグ・アウト・ハウス", img: "oceania_underground_house.jpg" },
    { key: "APEC", img: "oceania_apec_cooperation.jpg" },
    { key: "中国", img: "oceania_china_trade.jpg" },
    { key: "貿易", img: "oceania_china_trade.jpg" },
    { key: "時差", img: "oceania_time_zone.jpg" },
    { key: "白豪主義", img: "oceania_white_australia.jpg" },
    { key: "イギリス", img: "oceania_british_colonization.jpg" },
    { key: "植民地", img: "oceania_british_colonization.jpg" },
    { key: "端境期", img: "oceania_reverse_seasons.jpg" },
    { key: "ワーキングホリデー", img: "oceania_working_holiday_backpackers.jpg" },
    { key: "環太平洋造山帯", img: "oceania_pacific_ring_of_fire.jpg" },
    // 過去の生成画像群
    { key: "サンゴ礁", img: "oceania_great_barrier_reef_illustration.jpg" },
    { key: "グレートバリアリーフ", img: "oceania_great_barrier_reef_illustration.jpg" },
    { key: "ウルル", img: "oceania_outback_uluru_illustration.jpg" },
    { key: "エアーズロック", img: "oceania_outback_uluru_illustration.jpg" },
    { key: "アボリジニ", img: "oceania_outback_uluru_illustration.jpg" },
    { key: "乾燥", img: "oceania_outback_uluru_illustration.jpg" },
    { key: "鉄鉱石", img: "oceania_mining_illustration.jpg" },
    { key: "石炭", img: "oceania_mining_illustration.jpg" },
    { key: "ボーキサイト", img: "oceania_mining_illustration.jpg" },
    { key: "白豪主義", img: "oceania_multicultural_illustration.jpg" }, // override is higher up
    { key: "多文化", img: "oceania_multicultural_illustration.jpg" },
    { key: "羊", img: "oceania_sheep_farming_illustration.jpg" },
    { key: "放牧", img: "oceania_sheep_farming_illustration.jpg" },
    { key: "観光", img: "sydney_opera_house_illustration.jpg" },
    { key: "シドニー", img: "sydney_opera_house_illustration.jpg" },
    { key: "キャンベラ", img: "oceania_canberra_illustration.jpg" },
    // 汎用キーワードを一番最後に配置する（セーフティネット）
    { key: "ニュージーランド", img: "oceania_new_zealand_landscape.jpg" },
    { key: "オーストラリア", img: "oceania_australia_wildlife.jpg" },
    { key: "大陸", img: "oceania_australia_wildlife.jpg" }
];

let matchCount = 0;
qData.gw_7.forEach(q => {
    let combined = (q.q + " " + (q.a || "")).replace(/\n/g, '');
    let assigned = false;
    for (const mapping of oceaniaMapping) {
        if (combined.includes(mapping.key)) {
            q.answerImg = "assets/images/geography/" + mapping.img;
            assigned = true;
            matchCount++;
            console.log(`Mapped [${mapping.key}] -> ${mapping.img}`);
            break;
        }
    }
    if(!assigned) {
         q.answerImg = "assets/images/geography/map_oceania_blank_1771577958434.jpg";
    }
});

const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
fs.writeFileSync('quiz_data.js', newContent);
console.log(`\\ngw_7の優先順位バグを修正し、完全に正しい画像を適用しました！ (${matchCount}問の画像を上書き)`);
