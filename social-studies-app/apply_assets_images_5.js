const fs = require('fs');
const path = require('path');

const quizDataFile = 'quiz_data.js';
let content = fs.readFileSync(quizDataFile, 'utf8');
const assetsDir = 'assets/images/history/';

// Parse the missing targets
const targets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));

let missingTargets = [];
targets.forEach(t => {
    let qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`q:\\s*["']${qEscaped}["'][^}]*?image:\\s*["']`);
    if (!regex.test(content)) {
        missingTargets.push(t);
    }
});

let applyCount = 0;
let updatedContent = content;

// Get all files in assets directory
const allFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.png'));

// We group files by unit
const filesByUnit = {};
allFiles.forEach(f => {
    const match = f.match(/^(h_[a-z]+_\d+)/);
    if(match) {
        if(!filesByUnit[match[1]]) filesByUnit[match[1]] = [];
        filesByUnit[match[1]].push(f);
    }
});

// For each unit that has missing targets
const missingByUnit = {};
missingTargets.forEach(m => {
    if(!missingByUnit[m.unit]) missingByUnit[m.unit] = [];
    missingByUnit[m.unit].push(m);
});

for (const unit of Object.keys(missingByUnit)) {
    const unitFiles = filesByUnit[unit] || [];
    const unitMissing = missingByUnit[unit];
    
    // Sort files to try and be consistent
    unitFiles.sort();
    
    // Create a mapping from image to a missing question
    let missingIdx = 0;
    
    for (const imgFilename of unitFiles) {
        // Check if this image is already in quizData
        if (!updatedContent.includes(imgFilename)) {
            // Assign this image to the next missing question in the unit, if it exists
            if (missingIdx < unitMissing.length) {
                const target = unitMissing[missingIdx];
                
                let qEscaped = target.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
                
                updatedContent = updatedContent.replace(blockRegex, `$1,\n            image: "assets/images/history/${imgFilename}"\n        $2`);
                applyCount++;
                missingIdx++; // Move to next missing question
            }
        }
    }
}

fs.writeFileSync(quizDataFile, updatedContent, 'utf8');
console.log(`Successfully mapped ${applyCount} unmapped older images to quiz_data.js.`);
