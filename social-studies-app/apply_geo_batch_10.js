const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

const MAPPINGS = [
    {
        q: "北アメリカ大陸の西岸に沿って連なる、険しい山脈は？",
        imgName: "geo_gw_3_41_rocky_mountains_1773839206005.png"
    },
    {
        q: "北アメリカ大陸の東部に位置する、比較的なだらかな山脈は？",
        imgName: "geo_gw_3_42_appalachian_mountains_1773839221419.png"
    },
    {
        q: "アメリカ合衆国の中央部を南へ流れ、メキシコ湾に注ぐ大河は？",
        imgName: "geo_gw_3_43_mississippi_river_1773839235841.png"
    },
    {
        q: "アメリカ合衆国とカナダの国境付近にある、５つの湖の総称は？",
        imgName: "geo_gw_3_44_great_lakes_1773839251026.png"
    },
    {
        q: "アラスカを除くアメリカ合衆国の国土の中央を通る、経度約100度の経線は？",
        imgName: "geo_gw_3_45_100th_meridian_west_1773839266672.png"
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
