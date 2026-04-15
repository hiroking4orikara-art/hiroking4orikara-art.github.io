const fs = require('fs');
const path = require('path');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const imagesDir = path.join(__dirname, 'assets', 'images', 'geography');
const files = fs.readdirSync(imagesDir).filter(f => f.startsWith('g_japan_geo_batch6_'));

const exactMap = {
    // We already mapped gassho_zukuri in the partial attempt before quota hit
    // But we'll map the remaining 48.
    "合掌造り": "gassho_zukuri",
    "輪島塗": "wajima_nuri",
    "セントレア（中部国際空港）": "centrair",
    "関東ローム": "kanto_loam",
    "からっ風": "karakaze",
    "一極集中": "overconcentration",
    "霞が関・永田町": "kasumigaseki",
    "新都心（業務核都市）": "new_city_center",
    "ターミナル駅": "terminal_station",
    "臨海副都心": "waterfront_subcenter",
    "東京スカイツリー": "tokyo_skytree",
    "東京国際空港（羽田空港）": "haneda_airport",
    "成田国際空港": "narita_airport",
    "筑波研究学園都市": "tsukuba_science_city",
    "潮目（潮境）": "ocean_currents_boundary",
    "りんご": "apples",
    "さくらんぼ": "cherries",
    "南部鉄器": "nambu_ironware",
    "将棋の駒": "shogi_pieces",
    "漆器（会津塗・津軽塗）": "lacquerware",
    "工業団地": "industrial_park",
    "青森ねぶた祭": "aomori_nebuta",
    "秋田竿燈まつり": "akita_kanto",
    "仙台七夕まつり": "sendai_tanabata",
    "山形花笠まつり": "yamagata_hanagasa",
    "梅雨がなく、台風の影響が少ない": "no_rainy_season",
    "アイヌの人々": "ainu",
    "屯田兵": "tondenhei",
    "札幌市": "sapporo",
    "大規模農業": "large_scale_agriculture",
    "輪作": "crop_rotation",
    "酪農": "dairy_farming",
    "客土": "kyakudo",
    "地形図": "topographic_map",
    "上": "north_direction",
    "等高線": "contour_lines",
    "急である": "steep_terrain",
    "10m": "10m",
    "20m": "20m",
    "縮尺": "scale",
    "市役所（東京都の区役所）": "city_hall",
    "小・中学校": "school",
    "警察署": "police_station",
    "三角点": "triangulation_station",
    "水準点": "benchmark",
    "野外調査（フィールドワーク）": "fieldwork",
    "文献調査": "literature_survey",
    "主題図": "thematic_map",
    "ドットマップ": "dot_map"
};

let replaced = 0;

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('gj_')) {
        questions.forEach((q, index) => {
            let kwRaw = q.a;
            
            if (!q.answerImg || q.answerImg.includes('dummy') || q.answerImg.includes('batch6_item')) {
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

console.log(`Successfully mapped ${replaced} images to quiz_data.js for Batch 6!`);
