const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const scriptContext = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;

const m = new module.constructor();
m.paths = module.paths;
m._compile(scriptContext, 'quiz_data.js');
const qData = m.exports;

const imgDir = 'assets/images/geography';
const images = fs.readdirSync(imgDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

const unit = 'gw_1';
let mappedCount = 0;

// ファイル名から該当問題のインデックスを推測して割り当てる
// 例: "g_gw_1_01_earth_surface_1773408157220.jpg" -> index 1 or 0
// 例: "g_gw_1_100_ramadan_1773417319169.jpg" -> index 100 or 99

images.forEach(img => {
    // gw_1 の画像に絞る
    if (img.includes('_gw_1_')) {
        let match = img.match(/_gw_1_(\d+)_/);
        if (match) {
            let num = parseInt(match[1], 10);
            
            // 問題配列のインデックスは 0 スタートだが、ファイル名が 00 か 01 スタートかによる
            // qData[unit] の正解キーワードとファイル名の一部をチェックして合致させるのが最も安全
            let keywordParts = img.split('_').slice(4, -1); // earth, surface など
            
            // 候補インデックス
            let idx1 = num;
            let idx2 = num - 1;
            
            let targetIdx = -1;
            
            // まず idx1 をチェック
            let q1 = qData[unit][idx1];
            let q2 = qData[unit][idx2];
            
            // 画像がすでに割り当てられていない場合のみ
            if (q1 && !q1.answerImg) targetIdx = idx1;
            else if (q2 && !q2.answerImg) targetIdx = idx2;
            
            if (targetIdx !== -1) {
                qData[unit][targetIdx].answerImg = `${imgDir}/${img}`;
                mappedCount++;
            }
        }
    }
});

console.log(`${unit} において、既存の地理画像を ${mappedCount} 件 自動マッピングしました。`);

// まだ画像がない問題を洗い出す
let missing = [];
qData[unit].forEach((q, i) => {
    if (!q.answerImg) {
        missing.push(`[${i}] ${q.a || q.q.substring(0, 15)}`);
    }
});

console.log(`\n未マッピングの数: ${missing.length}`);
if (missing.length > 0) {
    console.log("一部を表示:", missing.slice(0, 50).join("\n"));
}

// 最後に書き出し
const newContent = `const QUIZ_DATA = ${JSON.stringify(qData, null, 2)};\n\nif (typeof window !== 'undefined') {\n  window.QUIZ_DATA = QUIZ_DATA;\n}\nmodule.exports = QUIZ_DATA;`;
fs.writeFileSync('quiz_data.js', newContent);
console.log("\nquiz_data.js にマッピング結果を保存しました。");
