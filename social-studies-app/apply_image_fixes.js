const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');

try {
    const window = {};
    eval(content);

    let data;
    if (typeof QUIZ_DATA !== 'undefined') {
        data = QUIZ_DATA;
    } else if (window.QUIZ_DATA) {
        data = window.QUIZ_DATA;
    }

    let modified = 0;

    function processArray(arr) {
        for (let q of arr) {
            // 1. Alpaca Image
            if (q.q && q.q.includes("アンデス山脈などの高地で飼育")) {
                q.img = "assets/images/geography/g_gw_1_24_alpaca_1773408784872.jpg";
                q.answerImg = "assets/images/geography/g_gw_1_24_alpaca_1773408784872.jpg";
                q.imgCaption = "※画像はイメージです";
                modified++;
            }
            
            // 2. West Coast Marine Climate
            if (q.q && q.q.includes("高緯度のわりに冬でも温暖な西ヨーロッパの気候")) {
                q.img = "assets/images/geography/geo_gw_3_5_marine_west_coast_climate_1773837750972.jpg";
                q.imgCaption = "※画像はイメージです";
                modified++;
            }

            // 3. Arctic
            if (q.q && q.q.includes("三大洋に含まれない海洋は")) {
                q.answerImg = "assets/images/geography/g_gw_1_9_arctic_ocean_1773376331985.jpg";
                modified++;
            }
        }
    }

    for (const key1 in data) {
        let val1 = data[key1];
        if (Array.isArray(val1)) {
            processArray(val1);
        } else if (typeof val1 === 'object') {
            for (const key2 in val1) {
                let val2 = val1[key2];
                if (Array.isArray(val2)) {
                    processArray(val2);
                } else if (typeof val2 === 'object') {
                    for (const key3 in val2) {
                        let val3 = val2[key3];
                        if (Array.isArray(val3)) {
                            processArray(val3);
                        }
                    }
                }
            }
        }
    }
    
    console.log("Modified " + modified + " questions.");

    const outputStr = `const QUIZ_DATA = ${JSON.stringify(data, null, 2)};\nwindow.QUIZ_DATA = QUIZ_DATA;\n`;
    fs.writeFileSync('quiz_data_fixed2.js', outputStr);
    console.log("Successfully saved final image replacements to quiz_data_fixed2.js");

} catch(e) {
    console.error("Failed to fix:", e.message);
}
