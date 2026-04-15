import fs from 'fs';

let str = fs.readFileSync('quiz_data_temp.js', 'utf8');

let cleanedBlocks = 0;

// Since objects might have nested structures? Not really in quiz_data.js 
// It's mostly flat: { q: "...", choices: [...], a: "...", comment: "...", img: "..." }
str = str.replace(/\{[^{}]+\}/g, (block) => {
    const imgRegex = /\s*(img|image):\s*["'][^"']+["']\s*,?/g;
    const matches = [...block.matchAll(imgRegex)];
    if (matches.length > 1) {
        // Keep only the first one (the newly inserted one)
        // We will remove all subsequent ones
        for (let i = 1; i < matches.length; i++) {
            block = block.replace(matches[i][0], '');
        }
        cleanedBlocks++;
    }
    return block;
});

fs.writeFileSync('quiz_data.js', str);
console.log(`Cleaned up ${cleanedBlocks} question blocks with multiple image tags.`);
