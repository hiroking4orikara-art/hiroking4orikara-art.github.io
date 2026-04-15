const fs = require('fs');

const baseContent = fs.readFileSync('quiz_data.js', 'utf8');
const match = baseContent.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const data = new Function('return ' + match[1])();

let replaced = 0;

Object.keys(data).forEach(k => {
    data[k].forEach(q => {
        // 1. 世界遺産 (World Heritage)
        if (q.a === '世界遺産' && q.answerImg && q.answerImg.includes('world_heritage')) {
            // Let's replace trade image with a traditional Japanese looking one if we have one, or just clear it so it doesn't look like trade
            // actually, we have many generated images. I'll just clear the image for now if it's the wrong one so the user doesn't see a trade ship.
            // Wait, we have geography images. I can look in assets/images/geography/
            const geoImgs = fs.readdirSync('assets/images/geography');
            const hImg = geoImgs.find(f => f.includes('world_heritage') && !q.answerImg.includes(f));
            if (hImg) {
                q.answerImg = `assets/images/geography/${hImg}`;
                replaced++;
            } else {
                q.answerImg = ''; // Clear it if we only have one
            }
        }
        
        // 2. 鹿児島県 (Kagoshima Prefecture)
        if (q.a === '鹿児島県' && q.answerImg && q.answerImg.includes('kagoshima')) {
            // For now, let's clear the answerImg that has text on it, or the question img that has text on it
            if(q.img && q.img.includes('kagoshima')) {
                 q.img = "assets/map_kyushu.png"; // Fallback to raw map
                 replaced++;
            }
        }

        // 3. ユーラシア大陸 (Eurasia) - missing question image
        if (q.a === 'ユーラシア大陸' && q.img === 'assets/map_eurasia.png') {
            // map_eurasia.png doesn't exist, change to a valid basic map
            q.img = "assets/map_world.png"; // Assuming this exists or clear it
            replaced++;
        }
        
        // 4. 地中海性気候 (Mediterranean Climate) - missing question image
        if (q.a === '地中海性気候') {
            if (q.img && q.img.includes('assets/')) {
                const imgPath = q.img;
                if (!fs.existsSync(imgPath)) {
                    q.img = ''; // clear broken image
                    replaced++;
                }
            }
        }
    });
});

const finalKeys = Object.keys(data).sort();
let outStr = 'window.QUIZ_DATA = {\n';

for (let i = 0; i < finalKeys.length; i++) {
    const key = finalKeys[i];
    const val = data[key];
    outStr += `    "${key}": [\n`;
    
    const qs = val.map(q => {
        let qLines = [];
        if (q.q) qLines.push(`            q: ${JSON.stringify(q.q)}`);
        // Don't output empty imgs
        if (q.img) qLines.push(`            img: ${JSON.stringify(q.img)}`); 
        if (q.choices) qLines.push(`            choices: ${JSON.stringify(q.choices)}`);
        if (q.a) qLines.push(`            a: ${JSON.stringify(q.a)}`);
        if (q.comment) qLines.push(`            comment: ${JSON.stringify(q.comment)}`);
        if (q.answerImg) qLines.push(`            answerImg: ${JSON.stringify(q.answerImg)}`);
        if (q.imgCaption) qLines.push(`            imgCaption: ${JSON.stringify(q.imgCaption)}`);
        return `        {\n${qLines.join(",\n")}\n        }`;
    }).join(',\n');
    
    outStr += qs + '\n    ]';
    if (i < finalKeys.length - 1) outStr += ',\n';
    else outStr += '\n';
}
outStr += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

fs.writeFileSync('quiz_data.js', outStr, 'utf8');
console.log(`Applied ${replaced} specific geography fixes.`);
