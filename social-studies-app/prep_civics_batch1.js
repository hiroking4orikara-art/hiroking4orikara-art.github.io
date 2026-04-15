const fs = require('fs');

try {
    const prompts = JSON.parse(fs.readFileSync('civics_missing_prompts.json', 'utf8'));
    const batchSize = 10;
    const startIndex = 0;
    const batch = prompts.slice(startIndex, startIndex + batchSize);
    
    fs.writeFileSync('civics_batch_1.json', JSON.stringify(batch, null, 2));

    let jsOutput = "/* RUN THIS IN ANTIGRAVITY TOOL CALLS */\n\n";
    batch.forEach(item => {
        jsOutput += `// Question: ${item.question}\n`;
        jsOutput += `// Answer: ${item.answer}\n`;
        jsOutput += `// await generate_image({ Prompt: "${item.prompt.replace(/"/g, '\\"')}", ImageName: "${item.filename}" });\n\n`;
    });
    
    fs.writeFileSync('generate_civics_batch1.txt', jsOutput);
    console.log(`Prepared generation instructions for batch 1 (items 1-${batch.length}) in generate_civics_batch1.txt.`);
} catch(e) {
    console.error("Error:", e);
}
