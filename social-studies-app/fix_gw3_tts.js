const fs = require('fs');
const path = '../video_generator/scripts/script_gw_3.json';

let json = JSON.parse(fs.readFileSync(path, 'utf8'));

json.forEach(item => {
    if (item.text) {
        // v5で行った二重読み対策（平仮名＋漢字）を元の綺麗な「漢字のみ」に戻す
        if (item.text.includes("せいがんかいようせいきこう（西岸海洋性気候）")) {
            item.text = item.text.replace("せいがんかいようせいきこう（西岸海洋性気候）", "西岸海洋性気候");
            item.tts_text = item.text.replace(/西岸海洋性気候/g, "せいがん かいようせい きこう");
        }
        
        // 北大西洋海流の正確な読み方を指定
        if (item.text.includes("北大西洋海流")) {
            item.tts_text = item.text.replace(/北大西洋海流/g, "きたたいせいよう かいりゅう");
        }
    }
});

fs.writeFileSync(path, JSON.stringify(json, null, 2));
console.log("Added tts_text phonetic overrides to script_gw_3.json!");
