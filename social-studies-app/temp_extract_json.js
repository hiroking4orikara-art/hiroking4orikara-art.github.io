const fs = require('fs');

try {
    const content = fs.readFileSync('quiz_data.js', 'utf8');

    // Mocks and context
    const window = {};

    eval(content);
    
    let data;
    if (typeof QUIZ_DATA !== 'undefined') {
        data = QUIZ_DATA;
    } else if (window.QUIZ_DATA) {
        data = window.QUIZ_DATA;
    } else {
        throw new Error("Could not find QUIZ_DATA after eval");
    }

    const results = [];

    // Check structure
    // Typically data is { geography: { unit1: [qs...], unit2: [qs...] }, history: { ... } }
    // Or maybe it's just { unit1: [qs...], ... }
    
    for (const key1 in data) {
        const val1 = data[key1];
        if (Array.isArray(val1)) {
            // It's already an array of questions
            for (const q of val1) {
                checkQuestion(key1, 'unknown', q, results);
            }
        } else if (typeof val1 === 'object') {
            // Nested structure
            for (const key2 in val1) {
                const val2 = val1[key2];
                if (Array.isArray(val2)) {
                    for (const q of val2) {
                        checkQuestion(key1, key2, q, results);
                    }
                } else if (typeof val2 === 'object') {
                     for (const key3 in val2) {
                         const val3 = val2[key3];
                         if (Array.isArray(val3)) {
                             for (const q of val3) {
                                 checkQuestion(key1 + '/' + key2, key3, q, results);
                             }
                         }
                     }
                }
            }
        }
    }
    
    function checkQuestion(subject, unit, q, resList) {
        const qStr = JSON.stringify(q);
        if (qStr && (qStr.includes("アルパカ") || qStr.includes("西岸海洋性気候") || qStr.includes("北極圏") || qStr.includes("北極海"))) {
            resList.push({ subject, unit, question: q });
        }
    }

    fs.writeFileSync('temp_extracted.json', JSON.stringify(results, null, 2));
    console.log("Successfully extracted to temp_extracted.json");
    console.log("Keys found:", Object.keys(data));
} catch (e) {
    console.error("Failed:", e.message);
}
