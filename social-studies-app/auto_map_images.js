const fs = require('fs');

// Load Quiz Data
const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;
const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

const units = ['gw_2', 'gw_3', 'gw_4', 'gw_5', 'gw_6', 'gw_7'];

let totalMapped = 0;

units.forEach(unit => {
    const scriptPath = `../video_generator/scripts/script_${unit}.json`;
    if (!fs.existsSync(scriptPath)) {
        console.log(`Script missing: ${scriptPath}`);
        return;
    }
    
    let json = JSON.parse(fs.readFileSync(scriptPath, 'utf8'));
    const questions = qData[unit] || [];
    
    // Prepare keywords from answers
    const keywords = [];
    questions.forEach(q => {
        if (q.answerImg) {
            let ans = q.a || (q.answers && q.answers[0]);
            if (ans) {
                keywords.push({
                    text: ans.replace(/（[^）]+）/g, ''), // 括弧内を除外してマッチしやすくする
                    original: ans,
                    img: q.answerImg
                });
                
                // もしキーワードに「・」が含まれる場合、分割してそれぞれ登録
                if (ans.includes('・')) {
                    const parts = ans.split('・');
                    parts.forEach(p => {
                        let cleanP = p.replace(/（[^）]+）/g, '').trim();
                        if (cleanP.length >= 2) {
                            keywords.push({ text: cleanP, original: ans, img: q.answerImg });
                        }
                    });
                }
            }
        }
    });
    
    // 短すぎる文字（1文字など）の誤爆を防ぐため、2文字以上のみ対象に
    const validKeywords = keywords.filter(kw => kw.text.length >= 2);
    // 長いキーワードから優先してマッチングさせる
    validKeywords.sort((a, b) => b.text.length - a.text.length);
    
    let unitMapped = 0;

    json.forEach((item, index) => {
        // 古いダミー画像設定（gw_x.pngなど）は削除
        if (item.image && !item.image.includes('assets/')) {
            delete item.image;
        }
        
        // 冒頭2行は挨拶なので画像を割り当てない（うっすら背景を表示するため）
        if (index < 2) return;
        
        if (item.text) {
            for (let kw of validKeywords) {
                if (item.text.includes(kw.text) || item.text.includes(kw.original)) {
                    item.image = kw.img;
                    unitMapped++;
                    break;
                }
            }
        }
    });

    fs.writeFileSync(scriptPath, JSON.stringify(json, null, 2));
    console.log(`[${unit}] ${unitMapped} scenes mapped with images.`);
    totalMapped += unitMapped;
});

console.log(`Total intelligent mappings applied: ${totalMapped}`);
