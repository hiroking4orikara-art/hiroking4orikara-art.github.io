const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

const MAPPINGS = [
    {
        q: "アルプス以北の平野部で行われている、穀物栽培と家畜の飼育を組み合わせた農業は？",
        imgName: "geo_gw_3_11_mixed_farming_1773837997105.png"
    },
    {
        q: "オランダやデンマークなどの涼しい地域で盛んな、乳牛を飼育して乳製品を作る農業は？",
        imgName: "geo_gw_3_12_dairy_farming_1773838012747.png"
    },
    {
        q: "ヨーロッパの多くの国が加盟している、政治・経済の統合を目指す組織は？",
        imgName: "geo_gw_3_13_european_union_1773838030719.png"
    },
    {
        q: "EU加盟国の多くで導入されている共通通貨は？",
        imgName: "geo_gw_3_14_euro_currency_1773838048188.png"
    },
    {
        q: "EUの加盟国間で行き来する際、原則として不要になったものは？",
        imgName: "geo_gw_3_15_schengen_area_1773838065654.png"
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
