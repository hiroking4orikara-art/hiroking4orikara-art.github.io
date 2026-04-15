const fs = require('fs');
const candidates = JSON.parse(fs.readFileSync('geo_image_candidates.json', 'utf8'));

// We already did 0-9. Start from index 10, take next 15
const batch = candidates.slice(10, 25);

console.log("--- Second Batch Candidates ---");
batch.forEach((c, idx) => {
    let nameHint = c.a.replace(/[^a-zA-Z0-9\u3040-\u30ff\u4e00-\u9faf]/g, '');
    console.log(`[${10 + idx}] Q: ${c.q}`);
    console.log(`      A: ${c.a}`);
    console.log(`      Name: g_${c.unit}_${10 + idx}_${nameHint}`);
});
