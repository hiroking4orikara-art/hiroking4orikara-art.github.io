const fs = require('fs');
const path = require('path');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const imagesDir = path.join(__dirname, 'assets', 'images', 'geography');
const files = fs.readdirSync(imagesDir).filter(f => f.startsWith('g_japan_geo_batch2_'));

// We manually generated 40 images with specific filenames.
// Let's create an exact map from the answers to the filenames we created.
const exactMap = {
    // 1-10 (Batch 2 start)
    "ドイツ": "doitsu",
    "領海": "ryoukai",
    "12海里（約22km）": "ryoukai", // Map to same image
    "領空": "ryoukuu",
    "ヨーロッパ連合": "yoropparengou",
    "ヨーロッパ連合（EU）": "yoropparengou",
    "季節風（モンスーン）": "kisetsufuu",
    "日本海側": "sea_of_japan_side",
    "太平洋側": "pacific_side",
    "やませ": "yamase",
    "ヒートアイランド現象": "heat_island",
    "台風": "typhoon",
    "瀬戸内の気候": "setouchi",
    "中央高地の気候": "central_highland",
    "南西諸島の気候": "nansei_islands",
    "梅雨": "tsuyu",
    "少子高齢化": "aging_population",
    
    // Additional generated concepts
    "過疎": "depopulation",
    "過疎化": "depopulation",
    "京浜工業地帯": "keihin_industrial",
    "中京工業地帯": "chukyo_industrial",
    "阪神工業地帯": "hanshin_industrial",
    "北九州工業地域": "kitakyushu_industrial",
    "北九州工業地帯": "kitakyushu_industrial",
    "京葉工業地域": "keiyo_industrial",
    "鹿島臨海工業地域": "kashima_industrial",
    "瀬戸内工業地域": "setouchi_industrial",
    "地方中枢都市": "core_city",
    "政令指定都市": "designated_city",
    "食料自給率": "food_self_sufficiency",
    "銘柄米": "brand_rice",
    "栽培漁業": "cultivating_fishery",
    "養殖漁業": "aquaculture",
    "加工貿易": "processing_trade",
    "再生可能エネルギー": "renewable_energy",
    "沖合漁業": "offshore_fishery",
    "沿岸漁業": "coastal_fishery",
    "遠洋漁業": "pelagic_fishery",
    "施設園芸農業": "greenhouse_horticulture",
    "促成栽培": "forcing_culture",
    "抑制栽培": "retarding_culture",
    "近郊農業": "suburban_agriculture",
    "果樹栽培": "fruit_growing",
    "四大工業地帯": "four_major_industrial_zones",
    "太平洋ベルト": "pacific_belt",
    "親潮（千島海流）": "oyashio",
    "黒潮（日本海流）": "kuroshio",
    "対馬海流": "tsushima_current",
    "リマン海流": "liman_current",
};

let replaced = 0;
let unmatched = [];

for (const [section, questions] of Object.entries(parsedData)) {
    if (section.startsWith('gj_')) {
        questions.forEach((q, index) => {
            let kwRaw = q.a;
            
            // Allow matching even if it already has an image, to ensure Batch 2 overlays correctly 
            // but we only want to map if it's in our exactMap and it's missing or we want to force
            if (!q.answerImg || q.answerImg.includes('dummy')) {
                let matchKey = exactMap[kwRaw];
                if (!matchKey) {
                    let cleaned = kwRaw.replace(/（.*?）/g, '');
                    matchKey = exactMap[cleaned];
                }

                if (matchKey) {
                    let bestFile = files.find(f => f.includes(`${matchKey}_`));
                    if (bestFile) {
                        q.answerImg = `assets/images/geography/${bestFile}`;
                        q.imgCaption = "※画像はイメージです";
                        replaced++;
                    } else {
                        unmatched.push(q.a);
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

console.log(`Successfully mapped ${replaced} generated images to quiz_data.js!`);
