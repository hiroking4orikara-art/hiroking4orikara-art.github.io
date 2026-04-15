import fs from 'fs';

let str = fs.readFileSync('quiz_data_temp2.js', 'utf8');
let cleanedBlocks = 0;

str = str.replace(/\{[^{}]+\}/g, (block) => {
    const imgRegex = /\s*(img|image):\s*["'][^"']+["']\s*,?/g;
    const matches = [...block.matchAll(imgRegex)];
    if (matches.length > 1) {
        // Keep ONLY the last one! Because the new one was appended.
        for (let i = 0; i < matches.length - 1; i++) {
            block = block.replace(matches[i][0], '');
        }
        cleanedBlocks++;
    }
    return block;
});

fs.writeFileSync('quiz_data.js', str);
console.log(`Cleaned up ${cleanedBlocks} question blocks with multiple image tags in pass 2.`);
