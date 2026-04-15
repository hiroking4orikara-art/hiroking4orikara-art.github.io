const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c';
const assetsDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\assets\\images\\geography';
const quizDataPath = 'C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\quiz_data.js';

const generatedImages = [
    { name: 'geo_gw_3_51_puszta_agriculture_1773883608301.png', index: 51 },
    { name: 'geo_gw_3_52_mediterranean_house_1773883625203.png', index: 52 },
    { name: 'geo_gw_3_53_eu_flag_12stars_1773883639766.png', index: 53 },
    { name: 'geo_gw_3_54_uk_map_1773883653322.png', index: 54 },
    { name: 'geo_gw_3_55_france_map_1773883665493.png', index: 55 },
    { name: 'geo_gw_3_56_germany_map_1773883676865.png', index: 56 }
];

try {
    generatedImages.forEach(img => {
        fs.copyFileSync(path.join(brainDir, img.name), path.join(assetsDir, img.name));
        console.log(`Copied ${img.name} to assets`);
    });

    const content = fs.readFileSync(quizDataPath, 'utf8');
    const script = `const window = global;\n` + content + `\nmodule.exports = typeof QUIZ_DATA !== "undefined" ? QUIZ_DATA : window.QUIZ_DATA;`;

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
