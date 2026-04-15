const fs = require('fs');

try {
    const batchNum = parseInt(process.argv[2], 10);
    if (!batchNum || isNaN(batchNum)) {
        console.error("Please provide a batch number (1-indexed). Example: node prep_civics_batch.js 3");
        process.exit(1);
    }
    
    const prompts = JSON.parse(fs.readFileSync('civics_missing_prompts.json', 'utf8'));
    const batchSize = 10;
    const startIndex = (batchNum - 1) * batchSize;
    
    if (startIndex >= prompts.length) {
        console.log(`Batch ${batchNum} is out of bounds. All done!`);
        process.exit(0);
    }
    
    const batch = prompts.slice(startIndex, startIndex + batchSize);
    const outputFile = `civics_batch_${batchNum}.json`;
    fs.writeFileSync(outputFile, JSON.stringify(batch, null, 2));

    console.log(`Prepared generation instructions for batch ${batchNum} (items ${startIndex + 1}-${startIndex + batch.length}) in ${outputFile}.`);
    // Output minimal summary
    console.log(JSON.stringify(batch.map(b => ({ filename: b.filename, prompt: b.prompt })), null, 2));
} catch(e) {
    console.error("Error:", e);
}
