const fs = require('fs');

try {
    const missing = JSON.parse(fs.readFileSync('ancient_missing_detailed.json', 'utf8'));
    
    // The previous were 30-39. Next are 40-48 (the last 9 items).
    const batch5 = missing.slice(40, 49);
    
    console.log(`Final ${batch5.length} Ancient History questions to generate images for:`);
    batch5.forEach(m => {
        console.log(`- ${m.section} [${m.index}] Q: ${m.q} -> A: ${m.a}`);
    });
    
    fs.writeFileSync('ancient_batch_5.json', JSON.stringify(batch5, null, 2));
    console.log("Saved the remaining to ancient_batch_5.json");

} catch (e) {
    console.error("Error:", e);
}
