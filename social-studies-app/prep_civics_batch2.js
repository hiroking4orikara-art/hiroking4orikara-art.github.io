const fs = require('fs');

try {
    const prompts = JSON.parse(fs.readFileSync('civics_missing_prompts.json', 'utf8'));
    const batchSize = 10;
    const startIndex = 10; // Batch 2
    const batch = prompts.slice(startIndex, startIndex + batchSize);
    
    fs.writeFileSync('civics_batch_2.json', JSON.stringify(batch, null, 2));

    console.log(`Prepared generation instructions for batch 2 (items 11-20).`);
    console.log(JSON.stringify(batch.map(b => ({ filename: b.filename, prompt: b.prompt })), null, 2));
} catch(e) {
    console.error("Error:", e);
}
