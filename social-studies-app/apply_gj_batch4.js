const fs = require('fs');
const path = require('path');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const imagesDir = path.join(__dirname, 'assets', 'images', 'geography');
const files = fs.readdirSync(imagesDir).filter(f => f.startsWith('g_japan_geo_batch4_'));

const exactMap = {
    "地熱発電": "geothermal_power",
    "時間距離": "time_distance",
    "筑紫山地": "tsukushi_mountains",
    "筑紫平野": "tsukushi_plain",
    "クリーク": "creek",
    "阿蘇山": "mt_aso",
    "カルデラ": "caldera",
    "桜島": "sakurajima",
    "雲仙岳（普賢岳）": "mt_unzen",
    "シラス台地": "shirasu_plateau",
    "屋久島": "yakushima",
    "種子島": "tanegashima",
    "さつまいも": "sweet_potato",
    "茶": "tea",
    "畜産": "livestock",
    "い草": "igusa",
    "のり": "nori",
    "エネルギー革命": "energy_revolution",
    "シリコンアイランド": "silicon_island",
    "エコタウン事業": "eco_town",
    "ゼロエミッション": "zero_emission",
    "水俣病": "minamata_disease",
    "赤潮": "red_tide",
    "エコツーリズム": "ecotourism",
    "福岡市": "fukuoka_city",
    "山陰（日本海側）": "sanin",
    "南四国（太平洋側）": "south_shikoku",
    "ため池": "reservoir",
    "鳥取砂丘": "tottori_sand_dunes",
    "広島市": "hiroshima_city",
    "平和記念都市": "peace_memorial_city",
    "本州四国連絡橋": "honshu_shikoku_bridge",
    "瀬戸大橋": "seto_ohashi",
    "瀬戸内しまなみ海道": "shimanami_kaido",
    "ストロー現象": "straw_effect",
    "らっきょう・梨": "rakkyo_pear",
    "みかん（柑橘類）": "mikan",
    "ぶどう（マスカット）・もも": "grapes_peaches",
    "オリーブ": "olive"
};

let replaced = 0;

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('gj_')) {
        questions.forEach((q, index) => {
            let kwRaw = q.a;
            
            if (!q.answerImg || q.answerImg.includes('dummy') || q.answerImg.includes('batch4')) {
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

console.log(`Successfully mapped ${replaced} generated images to quiz_data.js for Batch 4!`);
