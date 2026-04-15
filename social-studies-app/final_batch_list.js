const fs = require('fs');

const knownMatches = [
    { unit: "h_early_modern_1", index: 1, path: "assets/images/history/h_early_modern_1_luther_1773020209374.png" }, // ルター
    { unit: "h_early_modern_1", index: 2, path: "assets/images/history/h_early_modern_1_columbus_1773020222528.png" }, // コロンブス
    { unit: "h_early_modern_1", index: 3, path: "assets/images/history/h_early_modern_1_vasco_da_gama_1773020239061.png" }, // バスコ・ダ・ガマ
    { unit: "h_early_modern_1", index: 4, path: "assets/images/history/h_early_modern_1_magellan_1773020255905.png" }, // マゼラン
    { unit: "h_early_modern_1", index: 6, path: "assets/images/history/h_early_modern_1_xavier_1773020286673.png" }, // ザビエル
    { unit: "h_early_modern_1", index: 7, path: "assets/images/history/h_early_modern_1_nanban_trade_1773020305757.png" }, // 南蛮貿易
    { unit: "h_early_modern_1", index: 8, path: "assets/images/history/h_early_modern_1_kirishitan_daimyo_1773020321046.png" }, // キリシタン大名
    { unit: "h_early_modern_1", index: 9, path: "assets/images/history/h_early_modern_1_tensho_embassy_1773020338207.png" }, // 天正遣欧使節
    { unit: "h_early_modern_2", index: 1, path: "assets/images/history/h_early_modern_2_muromachi_bakufu_1773020387281.png" }, // 室町幕府
    { unit: "h_early_modern_2", index: 4, path: "assets/images/history/h_early_modern_2_rakuichi_rakuza_1773020402162.png" }, // 楽市楽座
    { unit: "h_early_modern_2", index: 7, path: "assets/images/history/h_early_modern_2_toyotomi_hideyoshi_1773020414593.png" }, // 豊臣秀吉
    { unit: "h_early_modern_2", index: 9, path: "assets/images/history/h_early_modern_2_taiko_kenchi_1773020441454.png" }, // 太閤検地
    { unit: "h_early_modern_2", index: 11, path: "assets/images/history/h_early_modern_2_bunroku_keicho_1773020457634.png" }, // 文禄・慶長
    { unit: "h_early_modern_2", index: 12, path: "assets/images/history/h_early_modern_2_momoyama_culture_1773020471924.png" }, // 桃山文化
    { unit: "h_early_modern_2", index: 15, path: "assets/images/history/h_early_modern_2_sen_no_rikyu_1773020487799.png" }, // 千利休
    { unit: "h_early_modern_2", index: 16, path: "assets/images/history/h_early_modern_2_kabuki_odori_1773020515070.png" }  // かぶき踊り
];

const trueMissing = [
    { unit: "h_medieval_5", index: 0, q: "14世紀、元を北へ追いやり、漢民族が再び中国に建てた国は？", a: "明" },
    { unit: "h_medieval_5", index: 1, q: "14世紀末、高麗を倒して朝鮮半島に建てられた国は？", a: "朝鮮国（李氏朝鮮）" },
    { unit: "h_medieval_5", index: 6, q: "室町時代に朝鮮で作られた、現在も使われている独自の文字は？", a: "ハングル" },
    { unit: "h_medieval_6", index: 2, q: "観阿弥・世阿弥親子によって大成された、面をつけて演じる歌舞劇は？", a: "能（能楽）" },
    { unit: "h_medieval_7", index: 2, q: "応仁の乱で東軍の総大将となった人物は？", a: "細川勝元" },
    { unit: "h_medieval_7", index: 13, q: "応仁の乱の後、京都で町衆（まちしゅう）と呼ばれる裕福な商工業者たちが復興させ、現在まで続く祭りは？", a: "祇園祭" },
    { unit: "h_early_modern_1", index: 10, q: "南蛮貿易で、日本から主に輸出された鉱物は？", a: "銀" },
    { unit: "h_early_modern_3", index: 0, q: "関ヶ原の戦い", a: "関ヶ原の戦い" }, // 後で詳細確認
    { unit: "h_early_modern_3", index: 1, q: "御三家", a: "御三家" }
];

console.log(JSON.stringify({ toUpdate: knownMatches, toGenerate: trueMissing }, null, 2));
