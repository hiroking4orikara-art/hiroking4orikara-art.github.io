const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log("File not found:", filePath);
        return false;
    }
    const content = fs.readFileSync(filePath, 'utf8');

    let data;
    try {
        const window = {};
        eval(content);
        if (typeof QUIZ_DATA !== 'undefined') {
            data = QUIZ_DATA;
        } else if (window.QUIZ_DATA) {
            data = window.QUIZ_DATA;
        }
    } catch(e) {
        console.log("Parse failed for", filePath, ":", e.message);
        return false;
    }

    let modified = 0;

    function processArray(arr) {
        for (let q of arr) {
            if (!q.a) continue;

            if (q.a.includes("南極条約") && q.q) {
                q.answerImg = "assets/images/geography/g_gw_1_52_antarctic_treaty_1773409439983.jpg";
                modified++; 
            }
            if (q.a.includes("日付変更線") && q.q) {
                q.answerImg = "assets/images/geography/g_gw_1_101_international_date_line_1773417502615.jpg";
                modified++; 
            }
            if (q.a.includes("北大西洋海流") && q.q) {
                q.answerImg = "assets/images/geography/g_gw_1_138_north_atlantic_drift_1773418187213.jpg";
                modified++; 
            }
            
            // Re-apply previous 5 correctly (they were missed in Android app context because Android quiz_data.js was out of sync)
            if (q.q) {
                if (q.q.includes("三大陸に囲まれた、地球上で最も面積が広い海")) {
                    q.answerImg = "assets/images/geography/geo_gw_3_93_pacific_ocean_1773842633232.jpg";
                    modified++; 
                }
                if (q.q.includes("アンデス山脈などの高地で飼育")) {
                    q.img = "assets/images/geography/g_gw_1_24_alpaca_1773408784872.jpg";
                    q.answerImg = "assets/images/geography/g_gw_1_24_alpaca_1773408784872.jpg";
                    q.imgCaption = "※画像はイメージです";
                    modified++; 
                }
                if (q.q.includes("高緯度のわりに冬でも温暖な西ヨーロッパの気候")) {
                    q.img = "assets/images/geography/geo_gw_3_5_marine_west_coast_climate_1773837750972.jpg";
                    q.imgCaption = "※画像はイメージです";
                    modified++; 
                }
                if (q.q.includes("三大洋に含まれない海洋は")) {
                    q.answerImg = "assets/images/geography/g_gw_1_9_arctic_ocean_1773376331985.jpg";
                    modified++; 
                }
                if (q.q.includes("広い海洋") && q.choices && q.choices.includes("太平洋")) {
                    q.answerImg = "assets/images/geography/g_gw_1_03_pacific_ocean_1773408193078.jpg";
                    modified++; 
                }
            }
        }
    }

    // Must flatten in case Android quiz_data.js is still the nested state!!
    let flatCount = 0;
    function flattenQuestions(arr) {
        if (!Array.isArray(arr)) return arr;
        let flat = [];
        for (let q of arr) {
            if (!q.choices || !Array.isArray(q.choices)) {
                flat.push(q);
                continue;
            }
            let newChoices = [];
            let nestedQs = [];
            for (let c of q.choices) {
                if (typeof c === 'object' && c !== null && c.q) {
                    nestedQs.push(c);
                    flatCount++;
                } else {
                    newChoices.push(c);
                }
            }
            q.choices = newChoices;
            flat.push(q);
            if (nestedQs.length > 0) {
                let flattenedNested = flattenQuestions(nestedQs);
                flat = flat.concat(flattenedNested);
            }
        }
        return flat;
    }

    for (const key1 in data) {
        let val1 = data[key1];
        if (Array.isArray(val1)) {
            val1 = flattenQuestions(val1);
            processArray(val1);
            data[key1] = val1;
        } else if (typeof val1 === 'object') {
            for (const key2 in val1) {
                let val2 = val1[key2];
                if (Array.isArray(val2)) {
                    val2 = flattenQuestions(val2);
                    processArray(val2);
                    val1[key2] = val2;
                } else if (typeof val2 === 'object') {
                    for (const key3 in val2) {
                        let val3 = val2[key3];
                        if (Array.isArray(val3)) {
                            val3 = flattenQuestions(val3);
                            processArray(val3);
                            val2[key3] = val3;
                        }
                    }
                }
            }
        }
    }
    
    console.log("Processed", path, "| Flattened:", flatCount, "| Modified", modified, "questions.");

    const outputStr = `const QUIZ_DATA = ${JSON.stringify(data, null, 2)};\nwindow.QUIZ_DATA = QUIZ_DATA;\n`;
    fs.writeFileSync(filePath, outputStr);
    return true;
}

const paths = [
    'C:/Users/hirok/.gemini/antigravity/scratch/social-studies-app/quiz_data.js',
    'C:/Users/hirok/.gemini/antigravity/scratch/social-studies-app-android/www/quiz_data.js',
    'C:/Users/hirok/.gemini/antigravity/scratch/social-studies-app-android/android/app/src/main/assets/public/quiz_data.js'
];

for (let p of paths) {
    processFile(p);
}
