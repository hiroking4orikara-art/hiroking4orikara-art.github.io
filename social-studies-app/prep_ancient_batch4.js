const fs = require('fs');

try {
    const missing = JSON.parse(fs.readFileSync('ancient_missing_detailed.json', 'utf8'));
    
    // The previous were 20-29. Next are 30-39.
    const batch4 = missing.slice(30, 40);
    
    console.log("Next 10 Ancient History questions to generate images for:");
    batch4.forEach(m => {
        console.log(`- ${m.section} [${m.index}] Q: ${m.q} -> A: ${m.a}`);
    });
    
    fs.writeFileSync('ancient_batch_4.json', JSON.stringify(batch4, null, 2));
    console.log("Saved the next 10 to ancient_batch_4.json");

} catch (e) {
    console.error("Error:", e);
}
