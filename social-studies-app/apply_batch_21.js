const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c';
const assetsDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\assets\\images\\geography';
const quizDataPath = 'C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\quiz_data.js';

// 生成された画像ファイル
const generatedImages = [
    { name: 'geo_gw_3_41_arabesque_1773883186268.png', index: 41 },
    { name: 'geo_gw_3_42_sami_people_1773883205327.png', index: 42 },
    { name: 'geo_gw_3_43_baltic_states_1773883221821.png', index: 43 },
    { name: 'geo_gw_3_44_benelux_1773883237637.png', index: 44 },
    { name: 'geo_gw_3_45_rotterdam_europort_1773883257973.png', index: 45 }
];

try {
    // 1. 画像の移動
    generatedImages.forEach(img => {
        fs.copyFileSync(path.join(brainDir, img.name), path.join(assetsDir, img.name));
        console.log(`Copied ${img.name} to assets`);
    });

    // 2. quiz_data.jsの更新
    const content = fs.readFileSync(quizDataPath, 'utf8');
    const script = `
        const window = global;
        ` + content + `
        module.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;
    `;

    const m = new module.constructor();
    m.paths = module.paths;
    m._compile(script, quizDataPath);
    const qData = m.exports;

    if (qData && qData.gw_3) {
        generatedImages.forEach(img => {
            if (qData.gw_3[img.index]) {
                qData.gw_3[img.index].answerImg = `assets/images/geography/${img.name}`;
                qData.gw_3[img.index].imgCaption = "※画像はイメージです";
                console.log(`Updated gw_3[${img.index}] with mapped image.`);
            }
        });

        const newContent = "window.QUIZ_DATA = " + JSON.stringify(qData, null, 4) + ";\n";
        fs.writeFileSync(quizDataPath, newContent);
        console.log("quiz_data.js was successfully updated.");
    } else {
        console.error("quiz_data.js parsing failed.");
    }
} catch (error) {
    console.error("Error during application:", error);
}
