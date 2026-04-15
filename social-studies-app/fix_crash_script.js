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

    let fixedQs = 0;
    function processArray(arr) {
        let newArr = flattenQuestions(arr);
        for (let q of newArr) {
            // 1. Alpaca Image
            if (q.q && q.q.includes("アンデス山脈などの高地で飼育")) {
                console.log("Found Alpaca question, clearing answer image for generation...");
                q.img = "assets/images/geography/custom_map_andes_1.jpg";
                q.answerImg = "assets/images/geography/custom_map_andes_1.jpg";
                fixedQs++;
            }
            
            // 2. West Coast Marine Climate
            if (q.q && q.q.includes("高緯度のわりに冬でも温暖な西ヨーロッパの気候")) {
                console.log("Found Europe Climate, setting placeholder...");
                q.img = "assets/images/geography/europe_climate_bg.jpg";
                fixedQs++;
            }

            // 3. Arctic
            if (q.q && q.q.includes("三大洋に含まれない海洋は")) {
                console.log("Found Arctic question, setting placeholder...");
                q.answerImg = "assets/images/geography/arctic_ocean_bg.jpg";
                fixedQs++;
            }
        }
        return newArr;
    }

    for (const key1 in data) {
        let val1 = data[key1];
        if (Array.isArray(val1)) {
            data[key1] = processArray(val1);
        } else if (typeof val1 === 'object') {
            for (const key2 in val1) {
                let val2 = val1[key2];
                if (Array.isArray(val2)) {
                    val1[key2] = processArray(val2);
                } else if (typeof val2 === 'object') {
                    for (const key3 in val2) {
                        let val3 = val2[key3];
                        if (Array.isArray(val3)) {
                            val2[key3] = processArray(val3);
                        }
                    }
                }
            }
        }
    }

    console.log("Nested questions flattened:", flatCount);
    console.log("Number of image paths updated for generation: " + fixedQs);

    const outputStr = `const QUIZ_DATA = ${JSON.stringify(data, null, 2)};\nwindow.QUIZ_DATA = QUIZ_DATA;\n`;
    fs.writeFileSync('quiz_data_fixed.js', outputStr);
    console.log("Successfully fixed structure and saved to quiz_data_fixed.js");

} catch(e) {
    console.error("Failed to fix:", e.message);
}
