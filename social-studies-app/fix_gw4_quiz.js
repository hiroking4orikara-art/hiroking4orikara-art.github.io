const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

const unit = 'gw_4';

// gw_4向けの詳細な手動・意味的マッピング（既存の画像をフル活用）
const hardcoded = {
    "サハラ砂漠": "assets/images/geography/g_gw_1_117_saudi_desert_1773417774192.jpg", 
    "ナイル川": "assets/images/geography/geo_gw_3_70_nile_river_1773841520494.jpg",
    "ギニア湾": "assets/images/geography/map_africa_blank_1771577902246.jpg",
    "キリマンジャロ": "assets/images/geography/kilimanjaro_illustration.jpg",
    "エジプト": "assets/images/geography/egypt_pyramids_illustration.jpg",
    "コンゴ盆地": "assets/images/geography/map_africa_blank_1771577902246.jpg",
    "植民地": "assets/images/geography/geo_gw_3_66_straight_borders_1773841457749.jpg",
    "アフリカの年": "assets/images/geography/geo_gw_3_75_african_union_1773841833901.jpg",
    "アパルトヘイト": "assets/images/geography/geo_gw_3_68_apartheid_1773841486574.jpg",
    "マンデラ": "assets/images/geography/geo_gw_3_68_apartheid_1773841486574.jpg",
    "AU": "assets/images/geography/geo_gw_3_75_african_union_1773841833901.jpg",
    "モノカルチャー": "assets/images/geography/geo_gw_3_74_monoculture_economy_1773841820192.jpg",
    "レアメタル": "assets/images/geography/g_gw_1_111_rare_metals_1773417670401.jpg",
    "フェアトレード": "assets/images/geography/geo_gw_3_74_monoculture_economy_1773841820192.jpg",
    "スラム": "assets/images/geography/g_gw_1_116_urban_issues_1773417757911.jpg",
    "南スーダン": "assets/images/geography/map_africa_blank_1771577902246.jpg",
    "いも類": "assets/images/geography/geo_jp_satsumaimo_1771590962833.jpg",
    "人口爆発": "assets/images/geography/g_gw_1_29_high_population_1773408883320.jpg",
    "スエズ運河": "assets/images/geography/geo_gw_3_70_nile_river_1773841520494.jpg",
    "遊牧": "assets/images/geography/g_gw_1_106_nomadic_herding_1773417588024.jpg",
    "モバイル送金": "assets/images/geography/geo_it_worker_1771577325115.jpg",
    "黒人奴隷": "assets/images/geography/geo_gw_3_72_slave_trade_1773841789178.jpg",
    "大地溝帯": "assets/images/geography/geo_gw_3_71_great_rift_valley_1773841771969.jpg",
    "サヘル": "assets/images/geography/g_gw_4_22_sahel_1773376751159.jpg",
    "プランテーション": "assets/images/geography/g_gw_4_23_plantation_1773376769203.jpg",
    "サバンナ": "assets/images/geography/gw_africa_savanna_1771578489631.jpg",
    "ケニア": "assets/images/geography/gw_africa_savanna_1771578489631.jpg"
};

// キーワードに引っかからなかった場合のデフォルト代替画像
const defaultImage = "assets/images/geography/bg_africa_pop_art_1771587978888.jpg";

let mappedCount = 0;
qData[unit].forEach((q, i) => {
    if (!q.answerImg) {
        let assigned = false;
        let combinedText = (q.q + " " + (q.a || "")).replace(/\n/g, '');
        for (const [key, imagePath] of Object.entries(hardcoded)) {
            if (combinedText.includes(key)) {
                q.answerImg = imagePath;
                assigned = true;
                mappedCount++;
                console.log(`Mapped [Q${i}] (${key}) => ${imagePath.split('/').pop()}`);
                break;
            }
        }
        if (!assigned) {
            // どれにも引っかからない場合は汎用のアフリカ背景画像をセットし、白紙（エラー）を防ぐ
            q.answerImg = defaultImage;
            mappedCount++;
            console.log(`Mapped [Q${i}] (汎用背景) => ${defaultImage.split('/').pop()}`);
        }
    }
});

const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
fs.writeFileSync('quiz_data.js', newContent);
console.log(`\nquiz_data.js に gw_4 (アフリカ州) の修復結果（${mappedCount}問）を上書き保存しました！`);
