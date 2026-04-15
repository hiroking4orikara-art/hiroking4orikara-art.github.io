const fs = require('fs');
const data = JSON.parse(fs.readFileSync('missing_after_assets.json', 'utf8'));
const next5 = data.slice(0, 5).map((item, i) => {
    return {
        unit: item.unit,
        index: item.index,
        q: item.q,
        a: item.a,
        prompt: `A colorful pop-art illustration for a history textbook representing: ${item.a}. Context: ${item.q}. Style: vibrant colors, clear outlines, comic-book style dots, engaging, educational, simple background, NO TEXT.`,
        filename: `${item.unit}_${item.a.replace(/（[^）]*）/g, '').replace(/[^\w\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/g, '').substring(0, 10)}.png`
    };
});
fs.writeFileSync('next_5.json', JSON.stringify(next5, null, 2));
console.log("Saved next 5 to next_5.json");
