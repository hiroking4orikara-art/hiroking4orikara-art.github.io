const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

const MAPPINGS = [
    {
        q: "ヨーロッパ南部を東西に走る、険しい山脈は？",
        imgName: "geo_gw_3_1_alps_1773837692813.png"
    },
    {
        q: "スカンディナビア半島などで見られる、氷河によって削られてできた複雑な海岸線を何というか？",
        imgName: "geo_gw_3_2_fjord_1773837706408.png"
    },
    {
        q: "ヨーロッパ北部を流れ、複数の国を通って黒海や北海に注ぐ川のことを何というか？",
        imgName: "geo_gw_3_3_international_river_1773837720024.png"
    },
    {
        q: "アルプス山脈から北海に注ぐ、ヨーロッパの重要な水上交通路となっている川は？",
        imgName: "geo_gw_3_4_rhine_river_1773837735390.png"
    },
    {
        q: "偏西風と暖流の影響で、高緯度のわりに冬でも温暖な気候を何というか？",
        imgName: "geo_gw_3_5_marine_west_coast_climate_1773837750972.png"
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
