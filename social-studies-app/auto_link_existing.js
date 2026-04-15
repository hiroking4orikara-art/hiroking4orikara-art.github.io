const fs = require('fs');
const path = require('path');

// 1. 既存の画像ファイルリストを取得
const imagesDir = path.join(__dirname, 'assets', 'images', 'history');
const imageFiles = fs.readdirSync(imagesDir);

// 2. quiz_data.js を解析
const quizDataPath = path.join(__dirname, 'quiz_data.js');
const content = fs.readFileSync(quizDataPath, 'utf8');
const cleaned = content.replace('window.QUIZ_DATA =', 'const data =') + '; module.exports = data;';
fs.writeFileSync('temp_data.js', cleaned);
const QUIZ_DATA = require('./temp_data.js');

const mapping = {};
const stillMissing = [];

const findBestMatch = (unit, answer) => {
    // 単位と答えからキーワードを生成
    // 例: "ルター" -> "luther", "マゼラン" -> "magellan"
    const slug = answer.toLowerCase()
        .replace(/（[^）]*）/g, '') // カッコ内を除去
        .replace(/\s+/g, '_')
        .replace(/[^\w]/g, ''); // 簡易的な正規化
    
    // キーワードリスト (答えに応じた手動補正が必要な場合のため)
    const keywordsMap = {
        "明": ["ming", "shang"], // 明は Ming だがファイル名にあるか
        "朝鮮国（李氏朝鮮）": ["joseon"],
        "ハングル": ["hangeul", "hangul"],
        "能（能楽）": ["noh"],
        "細川勝元": ["hosokawa"],
        "祇園祭": ["gion"],
        "ルター": ["luther"],
        "コロンブス": ["columbus"],
        "バスコ・ダ・ガマ": ["vasco"],
        "マゼラン": ["magellan"],
        "フランシスコ・ザビエル": ["xavier"],
        "南蛮貿易": ["nanban"],
        "キリシタン大名": ["kirishitan"],
        "天正遣欧少年使節": ["tensho"],
        "銀": ["silver", "gin"]
    };

    const keywords = keywordsMap[answer] || [slug];
    
    // ユニットID (h_early_modern_1 など) を含むファイルを探す
    for (const file of imageFiles) {
        if (file.startsWith(unit)) {
            for (const kw of keywords) {
                if (file.toLowerCase().includes(kw.toLowerCase())) {
                    return `assets/images/history/${file}`;
                }
            }
        }
    }
    return null;
};

const resultMapping = [];

for (const unitId in QUIZ_DATA) {
    if (unitId.startsWith('h_')) {
        QUIZ_DATA[unitId].forEach((q, index) => {
            if (!q.img || q.img === "" || q.img.includes('placeholder')) {
                const match = findBestMatch(unitId, q.a);
                if (match) {
                    resultMapping.push({
                        unit: unitId,
                        index: index,
                        q: q.q,
                        a: q.a,
                        newPath: match
                    });
                } else {
                    stillMissing.push({
                        unit: unitId,
                        index: index,
                        q: q.q,
                        a: q.a
                    });
                }
            }
        });
    }
}

console.log(JSON.stringify({ found: resultMapping, missing: stillMissing.slice(0, 20) }, null, 2));

fs.unlinkSync('temp_data.js');
