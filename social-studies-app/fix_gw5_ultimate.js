const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

const perfectMapping5 = [
    "assets/images/geography/namerica_rocky_mountains.jpg", // 0
    "assets/images/geography/namerica_appalachian_mountains.jpg", // 1
    "assets/images/geography/namerica_mississippi_river.jpg", // 2
    "assets/images/geography/namerica_great_lakes.jpg", // 3
    "assets/images/geography/namerica_florida_vacation.jpg", // 4
    "assets/images/geography/namerica_caribbean_sea.jpg", // 5
    "assets/images/geography/namerica_100_meridian.jpg", // 6
    "assets/images/geography/namerica_hurricane.jpg", // 7
    "assets/images/geography/namerica_right_crop_right_land.jpg", // 8
    "assets/images/geography/namerica_great_plains.jpg", // 9
    "assets/images/geography/namerica_prairie.jpg", // 10
    "assets/images/geography/namerica_corn_belt.jpg", // 11
    "assets/images/geography/namerica_cotton_plantation_history.jpg", // 12
    "assets/images/geography/namerica_center_pivot.jpg", // 13
    "assets/images/geography/namerica_feedlot.jpg", // 14
    "assets/images/geography/grand_canyon_illustration.jpg", // 15: グランドキャニオン
    "assets/images/geography/namerica_agribusiness.jpg", // 16
    "assets/images/geography/namerica_grain_majors.jpg", // 17
    "assets/images/geography/namerica_sunbelt.jpg", // 18
    "assets/images/geography/silicon_valley_illustration.jpg", // 19: シリコンバレー
    "assets/images/geography/namerica_detroit_auto_industry.jpg", // 20
    "assets/images/geography/namerica_houston_aerospace.jpg", // 21
    "assets/images/geography/namerica_multinational_corporation.jpg", // 22
    "assets/images/geography/statue_of_liberty_illustration.jpg", // 23: 移民の国（自由の女神）
    "assets/images/geography/namerica_hispanic_culture.jpg", // 24
    "assets/images/geography/namerica_melting_pot.jpg", // 25
    "assets/images/geography/namerica_salad_bowl.jpg", // 26
    "assets/images/geography/namerica_native_american.jpg", // 27
    "assets/images/geography/namerica_megalopolis.jpg", // 28
    "assets/images/geography/namerica_fast_food.jpg", // 29
    "assets/images/geography/namerica_canada_french.jpg", // 30
    "assets/images/geography/namerica_canada_maple.jpg", // 31
    "assets/images/geography/namerica_mexico_spanish.jpg", // 32
    "assets/images/geography/namerica_usmca.jpg", // 33
    "assets/images/geography/namerica_maquiladora.jpg", // 34
    "assets/images/geography/namerica_wall_street.jpg", // 35
    "assets/images/geography/namerica_shale_gas.jpg", // 36
    "assets/images/geography/namerica_chain_store.jpg", // 37
    "assets/images/geography/namerica_cold_climate_northeast.jpg", // 38
    "assets/images/geography/namerica_washington_dc.jpg", // 39
    "assets/images/geography/namerica_martin_luther_king.jpg", // 40
    "assets/images/geography/namerica_cuba.jpg", // 41
    "assets/images/geography/namerica_usa_landscape.jpg", // 42
    "assets/images/geography/namerica_canada_landscape.jpg", // 43
    "assets/images/geography/namerica_mexico_landscape.jpg" // 44
];

if (qData.gw_5.length !== perfectMapping5.length) {
    console.error("ERROR: 質問数とマッピング配列の長さが一致しません！", qData.gw_5.length, "vs", perfectMapping5.length);
} else {
    qData.gw_5.forEach((q, i) => {
        q.answerImg = perfectMapping5[i];
    });

    const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
    fs.writeFileSync('quiz_data.js', newContent);
    console.log("gw_5の全45問に対して、100%完璧なインデックスベースの画像マッピングを超適用しました！");
}
