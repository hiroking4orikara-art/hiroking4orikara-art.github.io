const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\ed03e46e-7ac4-44e7-96b0-ffabd1561f2c';
const assetsDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\assets\\images\\geography';
const quizDataPath = 'C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\quiz_data.js';

const generatedImages = [
    { name: 'geo_gw_3_46_vatican_city_1773883418302.png', index: 46 },
    { name: 'geo_gw_3_47_welfare_state_1773883431123.png', index: 47 },
    { name: 'geo_gw_3_48_vacance_1773883446637.png', index: 48 },
    { name: 'geo_gw_3_49_siberia_stilt_house_1773883463430.png', index: 49 },
    { name: 'geo_gw_3_50_london_hokkaido_latitude_1773883476096.png', index: 50 }
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
