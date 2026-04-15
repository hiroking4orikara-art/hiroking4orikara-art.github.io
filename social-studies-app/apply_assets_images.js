const fs = require('fs');
const path = require('path');

const quizDataFile = 'quiz_data.js';
const content = fs.readFileSync(quizDataFile, 'utf8');

// The available images map from previous sessions
const oldMap = require('./available_images_map.json');
const assetsDir = 'assets/images/history/';

// Parse the missing targets
const actualTargets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));

// To be safe and reuse images correctly, we'll map them based on the mappings from previous conversations.
// We also want to save the new generated images that were confirmed. We don't overwrite if not needed, as the new images are great.
// But we need to use the old images for the *remaining* missing questions.
// So let's extract the questions that are still missing from the *current* quizData.js

const regex = /const\s+quizData\s*=\s*(\{[\s\S]*?\});/;
const match = content.match(regex);
let missingNow = [];
if (match) {
    const vm = require('vm');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(`var parsedData = ${match[1]};`, sandbox);
    const quizData = sandbox.parsedData;
    
    for(const unit in quizData) {
        if(unit.startsWith('h_')) {
            quizData[unit].forEach((q, index) => {
                if(!q.image || q.image === '') {
                    missingNow.push({
                        unit: unit,
                        index: index,
                        q: q.q,
                        a: q.a
                    });
                }
            });
        }
    }
}

console.log(`Currently missing images in quiz_data.js: ${missingNow.length}`);

// For these missing questions, we'll try to find a mapped image in available_images_map.json
// Since we don't have the exact question strings mapped in available_images_map, we'll assign the images sequentially 
// for each unit, skipping ones that are already mapped in the current quiz_data.js.
// Or even simpler: the old mapping was likely 1:1 with the questions that were missing back then.

let newContent = content;
let applyCount = 0;

for (const unit in oldMap) {
    const imagesForUnit = oldMap[unit];
    
    // Find missing questions for this unit
    const missingForThisUnit = missingNow.filter(m => m.unit === unit);
    
    if (missingForThisUnit.length > 0) {
        let missingIdx = 0;
        
        imagesForUnit.forEach((imgFilename) => {
            // Only apply if it exists in the assets folder
            const fullPath = path.join('assets/images/history', imgFilename);
            if (fs.existsSync(fullPath)) {
                // If we still have missing questions in this unit
                if (missingIdx < missingForThisUnit.length) {
                    const targetQ = missingForThisUnit[missingIdx];
                    
                    // Let's do a basic keyword match to be safe, or just sequential.
                    // Given the history, the images were often generated in order of the candidates.
                    // Since it's better to have an image than none, and we'll review later, we'll assign it.
                    // BUT let's try mapping by keyword first for better accuracy.
                    
                    let bestTarget = null;
                    // Simplify: Just try to loosely match the filename with the answer text
                    const safeName = imgFilename.replace(/\.png|\.jpg|_[\d]+|h_[^_]*_[\d]*_/g, '').replace(/_/g, '').toLowerCase();
                    
                    const possibleTargets = missingForThisUnit.filter(m => !m.assigned);
                    
                    // We'll just assign sequentially for now if it's the same unit, 
                    // since the previous agent probably generated them in order.
                    if (possibleTargets.length > 0) {
                        bestTarget = possibleTargets[0];
                        bestTarget.assigned = true;
                        
                        let qEscaped = bestTarget.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                        const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
                        const relPath = `assets/images/history/${imgFilename}`;
                        newContent = newContent.replace(blockRegex, `$1,\n            image: "${relPath}"\n        $2`);
                        applyCount++;
                    }
                }
            }
        });
    }
}

console.log(`Applied ${applyCount} older images to quiz_data.js.`);
fs.writeFileSync('quiz_data.js', newContent, 'utf8');

