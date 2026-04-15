const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

const MAPPINGS = [
    {
        q: "ヨーロッパ西岸沖を流れる暖流を何というか？",
        imgName: "geo_gw_3_6_north_atlantic_drift_1773837821862.png"
    },
    {
        q: "地中海沿岸で見られる、夏は乾燥し冬に雨が降る気候は？",
        imgName: "geo_gw_3_7_mediterranean_climate_1773837837570.png"
    },
    {
        q: "スカンディナビア半島などの高緯度地域で見られる、夏に太陽が沈まない（薄明るい）現象は？",
        imgName: "geo_gw_3_8_midnight_sun_1773837853181.png"
    },
    {
        q: "地中海沿岸で盛んな、夏の乾燥に強い作物を育てる農業を何というか？",
        imgName: "geo_gw_3_9_mediterranean_agriculture_1773837868630.png"
    },
    {
        q: "イタリアやフランス、スペインなどで作られる、ブドウを原料としたお酒は？",
        imgName: "geo_gw_3_10_wine_1773837881314.png"
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
