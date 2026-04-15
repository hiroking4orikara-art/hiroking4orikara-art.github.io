const fs = require('fs');

try {
    const missing = JSON.parse(fs.readFileSync('ancient_missing_detailed.json', 'utf8'));
    
    // The first 10 were items 0-9. The next 10 are items 10-19.
    const batch2 = missing.slice(10, 20);
    
    console.log("Next 10 Ancient History questions to generate images for:");
    batch2.forEach(m => {
        console.log(`- ${m.section} [${m.index}] Q: ${m.q} -> A: ${m.a}`);
    });
    
    fs.writeFileSync('ancient_batch_2.json', JSON.stringify(batch2, null, 2));
    console.log("Saved the next 10 to ancient_batch_2.json");

} catch (e) {
    console.error("Error:", e);
}
