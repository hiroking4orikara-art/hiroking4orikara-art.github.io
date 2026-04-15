const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

const units = ['gw_4']; // gw_4を処理

function splitDialogue(text, keywordsList, speaker) {
    // 読点や句点でテキストを分割（区切り文字は残す）
    let parts = text.match(/[^。、！？]+[。、！？]*/g) || [text];
    let result = [];
    let currentText = "";
    let currentImg = null;

    parts.forEach(part => {
        let foundKw = null;
        for (let kw of keywordsList) {
            // 台本のテキスト内にキーワードが含まれるかチェック
            if (part.includes(kw.text) || part.includes(kw.original)) {
                foundKw = kw;
                break;
            }
        }

        if (foundKw) {
            // 今まで溜めていたテキストがあり、かつ画像が違う場合は吐き出す
            if (currentText && currentImg && currentImg !== foundKw.img) {
                result.push({ speaker, text: currentText, image: currentImg });
                currentText = part;
                currentImg = foundKw.img;
            } else {
                currentText += part;
                currentImg = foundKw.img;
            }
        } else {
            // キーワードがない場合はそのまま結合
            currentText += part;
        }
    });
    
    // 残りを吐き出す
    if (currentText) {
        let obj = { speaker, text: currentText };
        if (currentImg) {
            // pythonスクリプト側で読み込めるようパスを整形
            obj.image = currentImg;
        }
        result.push(obj);
    }
    return result;
}

units.forEach(unit => {
    const scriptPath = `../video_generator/scripts/script_${unit}.json`;
    let json = JSON.parse(fs.readFileSync(scriptPath, 'utf8'));
    const questions = qData[unit] || [];
    
    const keywords = [];
    questions.forEach(q => {
        if (q.answerImg) {
            let ans = q.a || (q.answers && q.answers[0]);
            if (ans) {
                keywords.push({
                    text: ans.replace(/（[^）]+）/g, '').trim(),
                    original: ans,
                    img: q.answerImg
                });
                if (ans.includes('・')) {
                    ans.split('・').forEach(p => {
                        let clean = p.replace(/（[^）]+）/g, '').trim();
                        if(clean.length >= 2) keywords.push({ text: clean, original: ans, img: q.answerImg });
                    });
                }
            }
        }
    });
    
    const validKeywords = keywords.filter(kw => kw.text.length >= 2);
    validKeywords.sort((a, b) => b.text.length - a.text.length);

    let newJson = [];
    let mappedImagesCount = 0;
    
    // 注意: 前回の auto_map_images.js によって文字列が分割されていなかった既存のJSONを走査
    // ただ、前回は image を単一に追加しただけなので、テキスト結合部だけ見れば影響なし
    
    json.forEach((item, index) => {
        if (index < 2) { // 冒頭2行はうっすら背景
            delete item.image;
            newJson.push(item);
            return;
        }

        if (item.text) {
            // 自動分割アルゴリズムの適用
            let splits = splitDialogue(item.text, validKeywords, item.speaker);
            splits.forEach(s => {
                if(s.image) mappedImagesCount++;
            });
            newJson.push(...splits);
        } else {
            newJson.push(item);
        }
    });

    fs.writeFileSync(scriptPath, JSON.stringify(newJson, null, 2));
    console.log(`[${unit}] 台本を ${json.length} 行から ${newJson.length} 行へ細分化。総割り当て画像数: ${mappedImagesCount}枚`);
});
