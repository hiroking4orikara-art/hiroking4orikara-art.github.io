const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

const MAPPINGS = [
    {
        q: "ウクライナからロシア南西部に広がる、世界有数の肥沃な黒土（こくど）地帯は？",
        imgName: "geo_gw_3_26_chernozem_1773838562333.png"
    },
    {
        q: "ロシアを横断する、世界最長の鉄道は？",
        imgName: "geo_gw_3_27_trans_siberian_railway_1773838577823.png"
    },
    {
        q: "ヨーロッパで最も広く信仰されている宗教は？",
        imgName: "geo_gw_3_28_christianity_europe_1773838593576.png"
    },
    {
        q: "ヨーロッパ北西部（イギリス・ドイツ北部など）で信仰者が多いキリスト教の宗派は？",
        imgName: "geo_gw_3_29_protestantism_1773838611839.png"
    },
    {
        q: "ヨーロッパ南部（イタリア・スペイン・フランスなど）で信仰者が多いキリスト教の宗派は？",
        imgName: "geo_gw_3_30_catholicism_1773838626655.png"
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
