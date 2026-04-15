const fs = require('fs');
const path = '../video_generator/scripts/script_gw_3.json';

// 安全にファイルを読み込む
let json = JSON.parse(fs.readFileSync(path, 'utf8'));

let newJson = [];
json.forEach(item => {
    // 1. 北大西洋海流が二重に読まれてしまう問題（括弧書きのルビ）を削除
    if (item.text) {
        item.text = item.text.replace(/（きたたいせいようかいりゅう）/g, "");
        
        // 2. 西岸海洋性気候の読み方を指定通りにするため、わかりやすく平仮名を併記
        // （TTSエンジンが確実に読めるようにする）
        item.text = item.text.replace(/西岸海洋性気候/g, "せいがんかいようせいきこう（西岸海洋性気候）");
    }
    
    // 3. ウラル山脈・アルプス山脈の画像の割り当て
    if (item.text.includes("ウラル山脈")) {
        item.image = "assets/images/geography/geo_gw_3_0_ural_mountains_1773837548704.jpg";
    }
    if (item.text.includes("アルプス山脈")) {
        item.image = "assets/images/geography/geo_gw_3_1_alps_1773837692813.jpg";
    }
    
    newJson.push(item);
});

// 万が一ウラル山脈とアルプス山脈が同じセリフ内にあった場合の分割処理
let splitJson = [];
newJson.forEach(item => {
    if (item.text.includes("ウラル山脈") && item.text.includes("アルプス山脈")) {
        splitJson.push({
            speaker: item.speaker,
            text: "そうだね、歴史ある建物も多いし、自然も綺麗だよ。アジアとは*ウラル山脈*で区切られているんだ。",
            image: "assets/images/geography/geo_gw_3_0_ural_mountains_1773837548704.jpg"
        });
        splitJson.push({
            speaker: item.speaker,
            text: "南には*アルプス山脈*もあって、景色が本当に素晴らしいよ。",
            image: "assets/images/geography/geo_gw_3_1_alps_1773837692813.jpg"
        });
    } else {
        splitJson.push(item);
    }
});

fs.writeFileSync(path, JSON.stringify(splitJson, null, 2));
console.log("Successfully fixed gw_3 script with images and pronunciation overrides.");
