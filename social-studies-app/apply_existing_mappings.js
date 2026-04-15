const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let content = fs.readFileSync(quizDataPath, 'utf8');

const updates = [
    { unit: "h_early_modern_1", index: 1, path: "assets/images/history/h_early_modern_1_luther_1773020209374.png" },
    { unit: "h_early_modern_1", index: 2, path: "assets/images/history/h_early_modern_1_columbus_1773020222528.png" },
    { unit: "h_early_modern_1", index: 3, path: "assets/images/history/h_early_modern_1_vasco_da_gama_1773020239061.png" },
    { unit: "h_early_modern_1", index: 4, path: "assets/images/history/h_early_modern_1_magellan_1773020255905.png" },
    { unit: "h_early_modern_1", index: 6, path: "assets/images/history/h_early_modern_1_xavier_1773020286673.png" },
    { unit: "h_early_modern_1", index: 7, path: "assets/images/history/h_early_modern_1_nanban_trade_1773020305757.png" },
    { unit: "h_early_modern_1", index: 8, path: "assets/images/history/h_early_modern_1_kirishitan_daimyo_1773020321046.png" },
    { unit: "h_early_modern_1", index: 9, path: "assets/images/history/h_early_modern_1_tensho_embassy_1773020338207.png" },
    { unit: "h_early_modern_2", index: 1, path: "assets/images/history/h_early_modern_2_muromachi_bakufu_1773020387281.png" },
    { unit: "h_early_modern_2", index: 4, path: "assets/images/history/h_early_modern_2_rakuichi_rakuza_1773020402162.png" },
    { unit: "h_early_modern_2", index: 7, path: "assets/images/history/h_early_modern_2_toyotomi_hideyoshi_1773020414593.png" },
    { unit: "h_early_modern_2", index: 9, path: "assets/images/history/h_early_modern_2_taiko_kenchi_1773020441454.png" },
    { unit: "h_early_modern_2", index: 11, path: "assets/images/history/h_early_modern_2_bunroku_keicho_1773020457634.png" },
    { unit: "h_early_modern_2", index: 12, path: "assets/images/history/h_early_modern_2_momoyama_culture_1773020471924.png" },
    { unit: "h_early_modern_2", index: 15, path: "assets/images/history/h_early_modern_2_sen_no_rikyu_1773020487799.png" },
    { unit: "h_early_modern_2", index: 16, path: "assets/images/history/h_early_modern_2_kabuki_odori_1773020515070.png" }
];

// quiz_data.js を一時的にモジュールとして読み込み、データを修正して再書き出しする
const cleaned = content.replace('window.QUIZ_DATA =', 'const data =') + '; module.exports = data;';
fs.writeFileSync('temp_apply.js', cleaned);
const QUIZ_DATA = require('./temp_apply.js');

updates.forEach(u => {
    if (QUIZ_DATA[u.unit] && QUIZ_DATA[u.unit][u.index]) {
        QUIZ_DATA[u.unit][u.index].img = u.path;
    }
});

const newContent = 'window.QUIZ_DATA = ' + JSON.stringify(QUIZ_DATA, null, 2) + ';';
fs.writeFileSync(quizDataPath, newContent);
fs.unlinkSync('temp_apply.js');
console.log('Successfully updated existing image paths.');
