const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const q = new Function(`return ${matchQuiz[1]}`)();

let replacements = 0;

for (const [key, questions] of Object.entries(q)) {
    if (!Array.isArray(questions)) continue;
    
    questions.forEach((item, index) => {
        if (!item.a || !item.q) return;
        
        // Fix 1: Eurasia continent map background 404
        if (item.a === 'ユーラシア大陸' && item.q.includes('ヨーロッパ州とアジア州を合わせた大陸を何と呼ぶか')) {
            item.img = 'assets/images/geography/g_geo_eurasia_bg.png';
            item.answerImg = 'assets/images/geography/g_special_eurasia_map_1773760492277.png';
            replacements++;
        }
        
        // Fix 2: Mediterranean climate map background 404
        if (item.a === '地中海性気候' && item.q.includes('地中海沿岸で見られる')) {
            item.img = 'assets/images/geography/g_geo_mediterranean_bg.png';
            item.answerImg = 'assets/images/geography/g_special_mediterranean_climate_1773760512743.png';
            replacements++;
        }
        
        // Fix 3: World Heritage answer image (trade -> japanese heritage)
        if (item.a === '世界遺産' && item.q.includes('ユネスコが登録するもの')) {
            item.answerImg = 'assets/images/geography/g_geo_world_heritage_fixed.png';
            replacements++;
        }
        
        // Fix 4: Kagoshima Text-containing Image
        if (item.a === '鹿児島県' && item.q.includes('シラス台地が広がり、さつまいもや豚肉の生産が盛んな')) {
            item.img = 'assets/images/geography/g_geo_kagoshima_no_text.png';
            item.answerImg = 'assets/images/geography/g_special_kagoshima_blank_1773760535098.png';
            replacements++;
        }
    });
}

let content = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(q);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = q[key];
    content += `    "${key}": [\n`;
    const qs = val.map(quest => {
        let qStr = `        {\n`;
        qStr += `            q: ${JSON.stringify(quest.q)}`;
        if (quest.img) qStr += `,\n            img: ${JSON.stringify(quest.img)}`;
        if (quest.choices) qStr += `,\n            choices: ${JSON.stringify(quest.choices)}`;
        if (quest.a) qStr += `,\n            a: ${JSON.stringify(quest.a)}`;
        if (quest.comment) qStr += `,\n            comment: ${JSON.stringify(quest.comment)}`;
        if (quest.answerImg) qStr += `,\n            answerImg: ${JSON.stringify(quest.answerImg)}`;
        if (quest.imgCaption) qStr += `,\n            imgCaption: ${JSON.stringify(quest.imgCaption)}`;
        qStr += `\n        }`;
        return qStr;
    }).join(',\n');
    content += qs + '\n    ]';
    if (i < keys.length - 1) {
        content += ',\n';
    } else {
        content += '\n';
    }
}
content += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

fs.writeFileSync('quiz_data.js', content, 'utf8');

console.log(`Applied ${replacements} targeted geography image fixes.`);
