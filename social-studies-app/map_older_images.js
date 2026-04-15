const fs = require('fs');
const path = require('path');

const missingTargets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));
const imageDir = path.join('modern_history_images', '歴史近代と二度の大戦');

if (!fs.existsSync(imageDir)) {
    console.error(`Directory not found: ${imageDir}`);
    process.exit(1);
}

const files = fs.readdirSync(imageDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

let matchCount = 0;
const matchedTargets = [];

missingTargets.forEach(target => {
    // Basic fuzzy string matching based on the answer or keywords in question
    let matchedFile = null;
    
    for (const file of files) {
        // e.g. file name might be "孫文.png", or "1911年辛亥革命.png"
        const filenameWithoutExt = path.parse(file).name;
        
        // Check if answer is in filename, or filename is in question/answer
        if (filenameWithoutExt.includes(target.a) || target.a.includes(filenameWithoutExt)) {
            matchedFile = file;
            break;
        }
    }
    
    if (matchedFile) {
        matchedTargets.push({
            unit: target.unit,
            q: target.q,
            a: target.a,
            image: path.join(imageDir, matchedFile).replace(/\\/g, '/')
        });
        matchCount++;
    }
});

console.log(`Found ${matchCount} matches out of ${missingTargets.length} missing questions.`);
if (matchCount > 0) {
    fs.writeFileSync('matched_older_images.json', JSON.stringify(matchedTargets, null, 2));
    console.log(matchedTargets.slice(0, 5));
}
