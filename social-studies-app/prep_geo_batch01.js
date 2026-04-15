const fs = require('fs');
const candidates = JSON.parse(fs.readFileSync('geo_image_candidates.json', 'utf8'));

const batch = candidates.slice(0, 10);

console.log("--- First 10 Candidates ---");
batch.forEach((c, idx) => {
    // Generate a unique image name identifier based on question/answer
    // We will just use standard names like: g_world_ocean_pacific, g_mongolia_ger, etc.
    let nameHint = c.a.replace(/[^a-zA-Z0-9\u3040-\u30ff\u4e00-\u9faf]/g, '');
    console.log(`[${idx+1}] Q: ${c.q}`);
    console.log(`    A: ${c.a}`);
    console.log(`    Suggest Name: g_${c.unit}_${idx}_${nameHint}`);
});
