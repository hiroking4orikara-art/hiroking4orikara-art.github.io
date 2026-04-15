const fs = require('fs');

const path = '../video_generator/scripts/script_gw_4.json';
let json = JSON.parse(fs.readFileSync(path, 'utf8'));

json.forEach(item => {
    // 誤って割り当てられたと思われる「公民(civics)」関連の画像は強制削除
    if (item.image && (item.image.includes('civics') || item.image.includes('c_'))) {
        console.log(`Removed civics image: ${item.image} from text: ${item.text.substring(0, 20)}...`);
        delete item.image;
    }

    if (item.text) {
        // "キリマンジャロ山" -> "キリマンジャロ" と読み
        if (item.text.includes("キリマンジャロ山")) {
            item.text = item.text.replace(/キリマンジャロ山/g, "キリマンジャロ");
            item.tts_text = item.text.replace(/キリマンジャロ/g, "きりまんじゃろ");
        } else if (item.text.includes("キリマンジャロ")) {
            item.tts_text = item.text.replace(/キリマンジャロ/g, "きりまんじゃろ");
        }
        
        // ケニアとサハラ砂漠の追加
        if (item.text.includes("ケニア")) {
            item.image = "assets/images/geography/gw_africa_savanna_1771578489631.jpg";
        }
        if (item.text.includes("サハラ砂漠")) {
            item.image = "assets/images/geography/gw_africa_savanna_1771578489631.jpg"; // サハラ用がなければサバンナで代用（または削除してデフォルト背景）
            // サバンナだと少し違うので、うっすら背景に任せるという選択肢もありますが
            // リスト内に geo_gw_4_22_sahel_1773376751159.jpg というサヘルの画像があるのでそれを使います
            item.image = "assets/images/geography/g_gw_4_22_sahel_1773376751159.jpg";
        }

        // アフリカ専用の高品質画像を直接マッピング
        if (item.text.includes("南アフリカ")) item.image = "assets/images/geography/geo_gw_3_67_south_africa_1773841473557.jpg";
        if (item.text.includes("アパルトヘイト")) item.image = "assets/images/geography/geo_gw_3_68_apartheid_1773841486574.jpg";
        if (item.text.includes("砂漠化")) item.image = "assets/images/geography/geo_gw_3_69_desertification_1773841503698.jpg";
        if (item.text.includes("ナイル川")) item.image = "assets/images/geography/geo_gw_3_70_nile_river_1773841520494.jpg";
        if (item.text.includes("大地溝帯")) item.image = "assets/images/geography/geo_gw_3_71_great_rift_valley_1773841771969.jpg";
        if (item.text.includes("奴隷")) item.image = "assets/images/geography/geo_gw_3_72_slave_trade_1773841789178.jpg";
        if (item.text.includes("コートジボワール")) item.image = "assets/images/geography/geo_gw_3_73_cote_divoire_1773841807288.jpg";
        if (item.text.includes("モノカルチャー経済")) item.image = "assets/images/geography/geo_gw_3_74_monoculture_economy_1773841820192.jpg";
        if (item.text.includes("AU") || item.text.includes("アフリカ連合")) item.image = "assets/images/geography/geo_gw_3_75_african_union_1773841833901.jpg";
    }
});

fs.writeFileSync(path, JSON.stringify(json, null, 2));
console.log("Fixed script_gw_4.json with proper geography images and removed civics anomalies.");
