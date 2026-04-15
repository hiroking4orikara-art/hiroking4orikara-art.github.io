const fs = require('fs');
const candidates = JSON.parse(fs.readFileSync('geo_image_candidates.json', 'utf8'));

// Batch 3: Next 15 (Index 25 to 39)
const batch = candidates.slice(25, 40);

console.log("--- Third Batch Candidates ---");
batch.forEach((c, idx) => {
    let nameHint = c.a.replace(/[^a-zA-Z0-9\u3040-\u30ff\u4e00-\u9faf]/g, '');
    console.log(`[${25 + idx}] Q: ${c.q}`);
    console.log(`      A: ${c.a}`);
    console.log(`      Name: g_${c.unit}_${25 + idx}_${nameHint}`);
});
