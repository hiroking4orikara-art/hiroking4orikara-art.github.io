const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

const MAPPINGS = [
    {
        q: "ドーバー海峡の海底トンネルを通って、イギリスと大陸（フランス・ベルギー）を結ぶ国際列車は？",
        imgName: "geo_gw_3_36_eurostar_1773838994489.png"
    },
    {
        q: "ドイツ南部の森林地帯が、酸性雨によって立ち枯れる被害を受けた場所は？",
        imgName: "geo_gw_3_37_black_forest_1773839010219.png"
    },
    {
        q: "環境に配慮して開発された、ドイツのフライブルクなどの都市を何と呼ぶか？",
        imgName: "geo_gw_3_38_eco_city_1773839022982.png"
    },
    {
        q: "オランダの世界的なハブ空港（拠点空港）は？",
        imgName: "geo_gw_3_39_schiphol_airport_1773839035524.png"
    },
    {
        q: "ロシアで産出され、パイプラインでヨーロッパに輸出されている主な資源は？",
        imgName: "geo_gw_3_40_russian_pipelines_1773839049781.png"
    }
];

let content = fs.readFileSync('quiz_data.js', 'utf8');
let matchCount = 0;

for (const map of MAPPINGS) {
    const srcPath = path.join(ARTIFACT_DIR, map.imgName);
    const destPath = path.join(TARGET_DIR, map.imgName);
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log("Copied " + map.imgName);
    } else {
        console.warn("Missing file: " + srcPath);
    }

    const relPath = `assets/images/geography/${map.imgName}`;

    const escapedQ = map.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(q:\\s*"${escapedQ}"[\\s\\S]*?comment:\\s*"[^"]*")`, 'g');
    
    content = content.replace(regex, (match) => {
        matchCount++;
        if (match.includes('answerImg:')) {
            return match; // すでに設定されていたらスルー
        }
        return `${match},\n            answerImg: "${relPath}",\n            imgCaption: "※画像はイメージです"`;
    });
}

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log(`Updated ${matchCount} items in quiz_data.js`);
