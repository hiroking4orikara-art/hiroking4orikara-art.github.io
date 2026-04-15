const fs = require('fs');
const path = require('path');

const quizDataFile = 'quiz_data.js';
let content = fs.readFileSync(quizDataFile, 'utf8');

const oldMap = require('./available_images_map.json');

const targets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));

// First, check which ones are ACTUALLY still missing in quiz_data.js
let missingTargets = [];
targets.forEach(t => {
    let qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`q:\\s*["']${qEscaped}["'][\\s\\S]*?image:\\s*["']([^"']+)["']`);
    if (!regex.test(content)) {
        missingTargets.push(t);
    }
});

console.log(`Still missing targets: ${missingTargets.length}`);

let applyCount = 0;
let updatedContent = content;

// For each unit in oldMap
for (const unit of Object.keys(oldMap)) {
    const imagesForUnit = oldMap[unit];
    const unitMissing = missingTargets.filter(m => m.unit === unit);
    
    // Create a mapping from image to a missing question index
    let missingIdx = 0;
    
    for (const imgFilename of imagesForUnit) {
        const fullPath = path.join('assets/images/history', imgFilename);
        if (fs.existsSync(fullPath)) {
            // Assign this image to the next missing question in the unit, if it exists
            if (missingIdx < unitMissing.length) {
                const target = unitMissing[missingIdx];
                
                let qEscaped = target.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
                
                // Make sure we only replace if 'image:' isn't already there
                const hasImageRegex = new RegExp(`q:\\s*["']${qEscaped}["'][\\s\\S]*?image:\\s*["']`);
                
                if (!hasImageRegex.test(updatedContent)) {
                    updatedContent = updatedContent.replace(blockRegex, `$1,\n            image: "assets/images/history/${imgFilename}"\n        $2`);
                    applyCount++;
                    missingIdx++; // Move to next missing question
                }
            }
        }
    }
}

fs.writeFileSync(quizDataFile, updatedContent, 'utf8');
console.log(`Successfully mapped ${applyCount} older images to quiz_data.js.`);
