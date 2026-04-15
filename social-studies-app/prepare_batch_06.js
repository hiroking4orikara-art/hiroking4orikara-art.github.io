const fs = require('fs');
const q = require('./quiz_data.js');
const missing = [];

for (const unit in q) {
    if (!unit.startsWith('h_')) continue;
    q[unit].forEach((item, index) => {
        if (!item.img) {
            missing.push({ unit, index, q: item.q, a: item.a });
        }
    });
}

const next5 = missing.slice(0, 5).map(item => {
    const aStr = Array.isArray(item.a) ? item.a.join() : String(item.a);
    const safeName = aStr.replace(/（[^）]*）/g, '').replace(/[^\w\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/g, '').substring(0, 10);
    return {
        ...item,
        aStr,
        prompt: `A colorful pop-art illustration for a history textbook representing: ${aStr}. Context: ${item.q}. Style: vibrant colors, clear outlines, comic-book style dots, engaging, educational, simple background. STRICT REQUIREMENT: ABSOLUTELY NO TEXT, NO LETTERS, NO KANJI, NO NUMBERS, AND NO DATES WHATSOEVER. The image must contain only illustrations.`,
        filename: `${item.unit}_${safeName}.png`
    };
});

fs.writeFileSync('next_batch.json', JSON.stringify(next5, null, 2));
console.log(next5);
