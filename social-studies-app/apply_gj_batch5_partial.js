const fs = require('fs');
const path = require('path');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const imagesDir = path.join(__dirname, 'assets', 'images', 'geography');
const files = fs.readdirSync(imagesDir).filter(f => f.startsWith('g_japan_geo_batch5_'));

const exactMap = {
    "石油化学コンビナート": "petrochemical_complex",
    "水島地区": "mizushima",
    "自動車工業": "automobile",
    "塩田": "salt_pan",
    "限界集落": "marginal_village",
    "町おこし（村おこし）": "town_revitalization",
    "しじみ": "shijimi",
    "厳島神社": "itsukushima_shrine",
    "出雲大社": "izumo_taisha",
    "ラムサール条約": "ramsar_convention",
    "林業": "forestry",
    "リアス海岸": "ria_coast",
    "淡路島": "awaji_island",
    "大阪市": "osaka_city",
    "中小工場が多い": "small_large_factories",
    "ニュータウン": "new_town",
    "人工島": "artificial_island",
    "関西国際空港": "kansai_airport",
    "パネルベイ": "panel_bay",
    "みかん": "mikan",
    "京都市（平安京）": "kyoto_city",
    "奈良市（平城京）": "nara_city",
    "西陣織": "nishijin_ori",
    "京友禅": "kyo_yuzen",
    "祇園祭": "gion_festival",
    "重要文化財": "important_cultural_property",
    "古都保存法": "ancient_capital_preservation",
    "高野山・熊野三山・吉野大峯": "koyasan_kumano_yoshino",
    "伝統的工芸品": "traditional_crafts",
    "富士山": "mt_fuji",
    "濃尾平野": "nobi_plain",
    "ぶどう・もも": "grapes_peaches_yamanashi",
    "水田単作": "single_crop_rice",
    "東海工業地域": "tokai_industrial",
    "精密機械工業": "precision_machinery",
    "地場産業": "local_industry"
};

let replaced = 0;

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('gj_')) {
        questions.forEach((q, index) => {
            let kwRaw = q.a;
            
            if (!q.answerImg || q.answerImg.includes('dummy') || q.answerImg.includes('batch5')) {
                let matchKey = exactMap[kwRaw];
                if (!matchKey) {
                    let cleaned = kwRaw.replace(/（.*?）/g, '');
                    matchKey = exactMap[cleaned];
                }

                if (matchKey) {
                    let bestFile = files.find(f => f.includes(`_${matchKey}_`));
                    if (bestFile) {
                        q.answerImg = `assets/images/geography/${bestFile}`;
                        q.imgCaption = "※画像はイメージです";
                        replaced++;
                    }
                }
            }
        });
    }
}

let content = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(parsedData);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = parsedData[key];
    content += `    "${key}": [\n`;
    const qs = val.map(q => {
        let qStr = `        {\n`;
        qStr += `            q: ${JSON.stringify(q.q)}`;
        if (q.img) qStr += `,\n            img: ${JSON.stringify(q.img)}`;
        if (q.choices) qStr += `,\n            choices: ${JSON.stringify(q.choices)}`;
        if (q.a) qStr += `,\n            a: ${JSON.stringify(q.a)}`;
        if (q.comment) qStr += `,\n            comment: ${JSON.stringify(q.comment)}`;
        if (q.answerImg) qStr += `,\n            answerImg: ${JSON.stringify(q.answerImg)}`;
        if (q.imgCaption) qStr += `,\n            imgCaption: ${JSON.stringify(q.imgCaption)}`;
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

console.log(`Successfully mapped ${replaced} partial images to quiz_data.js for Batch 5!`);
