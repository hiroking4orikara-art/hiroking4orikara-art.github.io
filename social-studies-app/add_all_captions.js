import fs from 'fs';

let str = fs.readFileSync('quiz_data.js', 'utf8');
let addedCaptions = 0;

str = str.replace(/\{[^{}]+\}/g, (block) => {
    const hasImg = /\s*(img|image):\s*["'][^"']+["']\s*,?/.test(block);
    const hasCaption = /caption:\s*["']※画像はイメージです["']/.test(block);
    
    // If it has an image but no caption, add it right after the image
    if (hasImg && !hasCaption) {
        // We will insert 'caption: "※画像はイメージです",' at the end of the block, before '}'
        // To keep formatting, let's find the indentation of 'q:'
        const qMatch = block.match(/\n(\s*)q:/);
        const indent = qMatch ? qMatch[1] : '            ';
        
        block = block.replace(/\s*\}$/, `,\n${indent}caption: "※画像はイメージです"\n        }`);
        addedCaptions++;
    }
    return block;
});

// Since we might have added a comma before caption without checking if there was one before, 
// let's just make sure we are doing it correctly.
// A simpler robust way: replace the img line with img line + caption line.
let cleanedStr = fs.readFileSync('quiz_data.js', 'utf8');
let updatedCount = 0;

cleanedStr = cleanedStr.replace(/\{[^{}]+\}/g, (block) => {
    const imgRegex = /(\n\s*)(img|image):\s*(["'][^"']+["'])\s*,?/g;
    
    // Check if block already has this specific caption
    if (/caption:\s*["']※画像はイメージです["']/.test(block)) {
        return block;
    }
    
    // Replace the img tag with img tag + caption
    if (imgRegex.test(block)) {
        // execute replace on the block
        const newBlock = block.replace(/(\n\s*)(img|image):\s*(["'][^"']+["'])\s*,?/, (match, indent, imgKey, imgVal) => {
            return `${indent}${imgKey}: ${imgVal},${indent}caption: "※画像はイメージです",`;
        });
        if (newBlock !== block) {
            updatedCount++;
            return newBlock;
        }
    }
    return block;
});

fs.writeFileSync('quiz_data.js', cleanedStr);
console.log(`Added captions to ${updatedCount} questions.`);
