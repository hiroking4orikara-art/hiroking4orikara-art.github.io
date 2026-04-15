const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

const MAPPINGS = [
    {
        q: "ドイツのルール地方などで発達した、ライン川の水運を利用した産業は？",
        imgName: "geo_gw_3_16_ruhr_industry_1773838162072.png"
    },
    {
        q: "フランスのトゥールーズなどで国際分業によって生産されているハイテク製品は？",
        imgName: "geo_gw_3_17_airbus_toulouse_1773838176661.png"
    },
    {
        q: "北海で産出され、イギリスやノルウェーの経済を支えている資源は？",
        imgName: "geo_gw_3_18_north_sea_oil_1773838190463.png"
    },
    {
        q: "オランダに見られる、干拓によって作られた土地を何というか？",
        imgName: "geo_gw_3_19_polder_1773838204188.png"
    },
    {
        q: "18世紀後半に世界で最初に産業革命が起こり、「世界の工場」と呼ばれた国は？",
        imgName: "geo_gw_3_20_industrial_revolution_1773838221252.png"
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
