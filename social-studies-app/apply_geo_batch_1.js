const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\35677f94-e7d7-439d-b5bc-5488567f651e';
const TARGET_DIR = path.join(__dirname, 'assets', 'images', 'geography');

const MAPPINGS = [
    {
        q: "中国の人口の9割以上を占める民族は何か？",
        imgName: "geo_gw_2_0_han_chinese_1773837491863.png"
    },
    {
        q: "東南アジア諸国連合の略称は？",
        imgName: "geo_gw_2_16_asean_map_1773837505413.png"
    },
    {
        q: "ヒンドゥー教で神聖な動物とされ、食べることを禁じられているのは？",
        imgName: "geo_gw_2_29_sacred_cow_1773837519934.png"
    },
    {
        q: "ブラジル、ロシア、インド、中国、南アフリカの新興5か国を指す言葉は？",
        imgName: "geo_gw_2_48_brics_map_1773837533836.png"
    },
    {
        q: "ヨーロッパ州とアジア州の境界となっている、南北に走る山脈は？",
        imgName: "geo_gw_3_0_ural_mountains_1773837548704.png"
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
            return match;
        }
        return `${match},\n            answerImg: "${relPath}",\n            imgCaption: "※画像はイメージです"`;
    });
}

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log(`Updated ${matchCount} items in quiz_data.js`);
