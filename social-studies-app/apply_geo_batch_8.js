const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

const MAPPINGS = [
    {
        q: "ロシアや東ヨーロッパで信仰者が多いキリスト教の宗派は？",
        imgName: "geo_gw_3_31_orthodox_church_1773838810245.png"
    },
    {
        q: "近年、EU諸国で問題となっている、西アジアやアフリカから逃れてくる人々を何というか？",
        imgName: "geo_gw_3_32_refugees_1773838824477.png"
    },
    {
        q: "EU内での経済格差について、比較的所得が高いのはどの方角の国々か？",
        imgName: "geo_gw_3_33_eu_economy_1773838838686.png"
    },
    {
        q: "イギリスのEU離脱のことを、イギリス(British)と離脱(Exit)を合わせた造語で何というか？",
        imgName: "geo_gw_3_34_brexit_1773838853245.png"
    },
    {
        q: "フランスのパリとリヨンなどを結ぶ超高速列車は？",
        imgName: "geo_gw_3_35_tgv_1773838867612.png"
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
