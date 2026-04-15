const fs = require('fs');

try {
    const missing = JSON.parse(fs.readFileSync('ancient_missing_detailed.json', 'utf8'));
    
    // The previous were 0-19. Next are 20-29.
    const batch3 = missing.slice(20, 30);
    
    console.log("Next 10 Ancient History questions to generate images for:");
    batch3.forEach(m => {
        console.log(`- ${m.section} [${m.index}] Q: ${m.q} -> A: ${m.a}`);
    });
    
    fs.writeFileSync('ancient_batch_3.json', JSON.stringify(batch3, null, 2));
    console.log("Saved the next 10 to ancient_batch_3.json");

} catch (e) {
    console.error("Error:", e);
}
