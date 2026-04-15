const fs = require('fs');
const path = require('path');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const imagesDir = path.join(__dirname, 'assets', 'images', 'geography');
const files = fs.readdirSync(imagesDir).filter(f => f.startsWith('g_japan_geo_batch3_'));

const exactMap = {
    // Already mapped in pass 1:
    "奥羽山脈": "ou_mountains",
    "北海道の気候": "hokkaido_climate",
    "人口密度": "population_density",
    "人口爆発": "population_explosion",
    "ライフライン": "lifeline",
    "減災": "disaster_mitigation",
    "公助": "public_assistance",
    "鉄鉱石": "iron_ore",
    "ボーキサイト": "bauxite",
    "LNG（液化天然ガス）": "lng",
    "レアメタル（希少金属）": "rare_metal",
    "石炭": "coal",
    "エネルギーミックス": "energy_mix",
    "二酸化炭素（CO2）": "co2",
    "フロンガス": "cfc",
    "オゾン層": "ozone_layer",

    // New pass 2 mappings:
    "領土・領海・領空": "territory",
    "酸性雨": "acid_rain",
    "三大都市圏": "three_major_metropolitan",
    "衛星都市（ベッドタウン）": "bed_town",
    "過密": "overcrowding",
    "ドーナツ化現象": "doughnut_phenomenon",
    "都心回帰": "return_to_city_center",
    "第一次ベビーブーム": "first_baby_boom",
    "減反政策（生産調整）": "acreage_reduction",
    "二期作": "double_cropping",
    "第二種兼業農家": "part_time_farmer",
    "有機栽培（オーガニック）": "organic_farming",
    "干潟": "tidal_flat",
    "森林": "forest",
    "青森ひば": "aomori_hiba",
    "北関東工業地域": "kitakanto_industrial",
    "産業の空洞化": "hollowing_out",
    "ハブ空港": "hub_airport",
    "航空輸送": "air_transport",
    "海上輸送（船舶）": "marine_transport",
    "東海道新幹線": "tokaido_shinkansen",
    "第三次産業": "tertiary_industry",
    "モノカルチャー経済": "monoculture_economy",
    "バイオマス発電": "biomass"
};

let replaced = 0;

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('gj_')) {
        questions.forEach((q, index) => {
            let kwRaw = q.a;
            
            if (!q.answerImg || q.answerImg.includes('dummy') || q.answerImg.includes('batch3')) {
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

console.log(`Successfully mapped ${replaced} generated images to quiz_data.js total for Batch 3!`);
