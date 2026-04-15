const fs = require('fs');

try {
    const missing = JSON.parse(fs.readFileSync('ancient_missing_detailed.json', 'utf8'));
    
    // Let's print out the first 10 for review
    console.log("Next 10 Ancient History questions to generate images for:");
    missing.slice(0, 10).forEach(m => {
        console.log(`- ${m.section} [${m.index}] Q: ${m.q} -> A: ${m.a}`);
    });
    
    // Let's create a batch file for the first 10
    fs.writeFileSync('ancient_batch_1.json', JSON.stringify(missing.slice(0, 10), null, 2));
    console.log("Saved the first 10 to ancient_batch_1.json");

} catch (e) {
    console.error("Error:", e);
}
