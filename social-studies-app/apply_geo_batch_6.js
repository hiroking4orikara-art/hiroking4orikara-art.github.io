const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

const MAPPINGS = [
    {
        q: "EU最大の農業国であり、小麦やワインの輸出が多い国は？",
        imgName: "geo_gw_3_21_france_1773838326688.png"
    },
    {
        q: "ヨーロッパ最大の工業国であり、自動車や化学工業が盛んな国は？",
        imgName: "geo_gw_3_22_germany_1773838342355.png"
    },
    {
        q: "長靴のような形をした半島に位置し、北部のミラノなどで服飾産業が盛んな国は？",
        imgName: "geo_gw_3_23_italy_1773838356094.png"
    },
    {
        q: "永世中立国として知られ、EUには加盟していない国は？",
        imgName: "geo_gw_3_24_switzerland_1773838373819.png"
    },
    {
        q: "ロシア連邦の首都は？",
        imgName: "geo_gw_3_25_moscow_1773838389734.png"
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
