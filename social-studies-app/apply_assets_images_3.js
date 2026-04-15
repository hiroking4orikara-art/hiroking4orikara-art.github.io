const fs = require('fs');
const path = require('path');

const quizDataFile = 'quiz_data.js';
let content = fs.readFileSync(quizDataFile, 'utf8');

const oldMap = require('./available_images_map.json');
const assetsDir = 'assets/images/history/';

// Parse the missing targets
const targets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));

// First, check which ones are ACTUALLY still missing in quiz_data.js
let missingTargets = [];
targets.forEach(t => {
    let qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`q:\\s*["']${qEscaped}["'][^}]*?image:\\s*["']`);
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
    const unitMissing = missingTargets.filter(m => m.unit === unit && !m.assigned);
    
    // We try to match images to missing questions intelligently
    for (const imgFilename of imagesForUnit) {
        const fullPath = path.join(assetsDir, imgFilename);
        if (fs.existsSync(fullPath)) {
            // Check if this image is already in quizData
            if (!updatedContent.includes(imgFilename)) {
                // Find a best fit missing question
                let bestMatch = null;
                const safeName = imgFilename.replace(/\.png|\.jpg|_[\d]+|h_[a-z0-9_]*_/g, '').replace(/_/g, '').toLowerCase();
                
                // 1. Try keyword match
                for(let m of unitMissing) {
                    if (!m.assigned) {
                        const qLower = (m.q + m.a).toLowerCase();
                        if (qLower.includes(safeName) || safeName.includes(m.a.toLowerCase())) {
                            bestMatch = m;
                            break;
                        }
                    }
                }
                
                // 2. Fall back to sequence matching
                if (!bestMatch) {
                    bestMatch = unitMissing.find(m => !m.assigned);
                }
                
                if (bestMatch) {
                    bestMatch.assigned = true;
                    
                    let qEscaped = bestMatch.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                    const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
                    
                    updatedContent = updatedContent.replace(blockRegex, `$1,\n            image: "assets/images/history/${imgFilename}"\n        $2`);
                    applyCount++;
                }
            }
        }
    }
}

fs.writeFileSync(quizDataFile, updatedContent, 'utf8');
console.log(`Successfully mapped ${applyCount} additional older images to quiz_data.js.`);
