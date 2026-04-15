const fs = require('fs');

let qz = fs.readFileSync('quiz_data.js', 'utf8');
const match = qz.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]+\});?\s*(module\.exports.*)?$/);
if (!match) {
    console.error("Could not parse QUIZ_DATA");
    process.exit(1);
}

const data = new Function(`return ${match[1]}`)();
let targets = [];

for (const [k, v] of Object.entries(data)) {
    if (k.startsWith('g_')) {
        v.forEach(item => {
            if (['世界遺産', '鹿児島県', '地中海性気候', 'ユーラシア大陸'].some(word => item.a.includes(word))) {
                targets.push({
                    section: k,
                    q: item.q,
                    a: item.a,
                    img: item.img,
                    answerImg: item.answerImg
                });
            }
        });
    }
}

console.log(JSON.stringify(targets, null, 2));

// Check available images in the geography folder
const geoAssetsPath = 'assets/images/geography';
if(fs.existsSync(geoAssetsPath)) {
    const files = fs.readdirSync(geoAssetsPath);
    console.log("Filtered Geo Files:");
    console.log(files.filter(f => f.includes('kagoshima') || f.includes('heritage') || f.includes('mediterranean') || f.includes('eurasia')));
}

const civicsAssetsPath = 'assets/images/civics';
if(fs.existsSync(civicsAssetsPath)) {
    const files = fs.readdirSync(civicsAssetsPath);
    console.log("Filtered Civics Files:");
    console.log(files.filter(f => f.includes('kagoshima') || f.includes('kinkakuji') || f.includes('heritage') || f.includes('mediterranean') || f.includes('eurasia')));
}
