const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

const perfectMapping = [
    "assets/images/geography/oceania_australia_wildlife.jpg", // 0: オーストラリア大陸
    "assets/images/geography/oceania_great_dividing_range.jpg", // 1: グレートディバイディング
    "assets/images/geography/oceania_great_barrier_reef_illustration.jpg", // 2: グレートバリアリーフ
    "assets/images/geography/oceania_outback_uluru_illustration.jpg", // 3: ウルル
    "assets/images/geography/oceania_outback_uluru_illustration.jpg", // 4: 乾燥帯
    "assets/images/geography/oceania_outback_uluru_illustration.jpg", // 5: アボリジニ
    "assets/images/geography/oceania_british_colonization.jpg", // 6: 植民地（イギリス）
    "assets/images/geography/oceania_white_australia.jpg", // 7: 白豪主義
    "assets/images/geography/oceania_multicultural_illustration.jpg", // 8: 多文化社会
    "assets/images/geography/oceania_sheep_farming_illustration.jpg", // 9: 羊や牛の放牧
    "assets/images/geography/oceania_mining_illustration.jpg", // 10: 鉄鉱石
    "assets/images/geography/oceania_mining_illustration.jpg", // 11: 石炭
    "assets/images/geography/oceania_mining_illustration.jpg", // 12: ボーキサイト
    "assets/images/geography/oceania_british_colonization.jpg", // 13: 1960年代までの貿易相手（イギリス）
    "assets/images/geography/oceania_china_trade.jpg", // 14: 現在の最大の貿易相手（中国）
    "assets/images/geography/oceania_reverse_seasons.jpg", // 15: 端境期
    "assets/images/geography/oceania_pacific_ring_of_fire.jpg", // 16: 環太平洋造山帯
    "assets/images/geography/oceania_maori_culture.jpg", // 17: マオリ
    "assets/images/geography/oceania_sheep_farming_illustration.jpg", // 18: 羊（NZ）
    "assets/images/geography/oceania_polynesia_islands.jpg", // 19: ポリネシア
    "assets/images/geography/oceania_tuvalu_illustration.jpg", // 20: ツバル・キリバス（海面上昇）
    "assets/images/geography/sydney_opera_house_illustration.jpg", // 21: 観光業
    "assets/images/geography/oceania_time_zone.jpg", // 22: 時差が少ない
    "assets/images/geography/oceania_canberra_illustration.jpg", // 23: キャンベラ
    "assets/images/geography/oceania_new_zealand_landscape.jpg", // 24: ウェリントン
    "assets/images/geography/oceania_southern_cross.jpg", // 25: 南十字星
    "assets/images/geography/oceania_apec_cooperation.jpg", // 26: APEC
    "assets/images/geography/oceania_flying_doctor.jpg", // 27: フライングドクター
    "assets/images/geography/oceania_working_holiday_backpackers.jpg", // 28: ワーキングホリデー
    "assets/images/geography/oceania_underground_house.jpg", // 29: 地下住居
    "assets/images/geography/oceania_australia_wildlife.jpg", // 30: オーストラリア（鉄鉱石が豊富だが、国名が答えなのでカンガルー等に変更）
    "assets/images/geography/oceania_new_zealand_landscape.jpg" // 31: ニュージーランド
];

// Mismatch check to be absolutely safe
if (qData.gw_7.length !== perfectMapping.length) {
    console.error("ERROR: 質問数とマッピングの数が一致しません！", qData.gw_7.length, "vs", perfectMapping.length);
} else {
    qData.gw_7.forEach((q, i) => {
        q.answerImg = perfectMapping[i];
    });

    const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
    fs.writeFileSync('quiz_data.js', newContent);
    console.log("gw_7の全32問に対して、100%完璧なインデックスベースの画像マッピングを適用しました！");
}
