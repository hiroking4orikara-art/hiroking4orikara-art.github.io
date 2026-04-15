const fs = require('fs');
const missing = JSON.parse(fs.readFileSync('remaining_83.json', 'utf8'));

// Format missing items into prompts for image generation
const prompts = missing.map(m => {
    let style = "A serious, historical illustration. ";
    if (m.unit.startsWith("h_modern") || m.unit.startsWith("h_contemporary")) {
        style = "A black and white, serious historical illustration or photograph style. NO POP ART. ";
    }
    
    return {
        unit: m.unit,
        index: m.index,
        q: m.q,
        a: m.a,
        prompt: `${style} Depict ${m.a}. Do NOT include any text, letters, or words in the image. The image should help answer the question: ${m.q}`
    };
});

fs.writeFileSync('missing_prompts.json', JSON.stringify(prompts, null, 2));
console.log(`Generated prompts for ${prompts.length} missing images.`);
