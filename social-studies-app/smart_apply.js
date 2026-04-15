const fs = require('fs');
const path = require('path');

const historyImagesDir = path.join(__dirname, 'assets', 'images', 'history');
const imageFiles = fs.readdirSync(historyImagesDir).map(f => f.toLowerCase());
const originalImageFiles = fs.readdirSync(historyImagesDir);

let content = fs.readFileSync('quiz_data.js', 'utf8');
const missing = JSON.parse(fs.readFileSync('missing_after_assets.json', 'utf8'));

let applyCount = 0;

missing.forEach(item => {
    // Generate the base filename pattern that was used
    let baseA = item.a.replace(/（[^）]*）/g, '').replace(/[^\w\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/g, '').substring(0, 10);
    // There are some cases where A is blank or different, but this was the logic.
    let expectedPattern = `${item.unit}_${baseA}`.toLowerCase();
    
    // Find matching file
    let matchIdx = imageFiles.findIndex(f => f.startsWith(expectedPattern) && f.endsWith('.png'));
    if (matchIdx === -1) {
        // Fallback: try just searching by answer in filename
        matchIdx = imageFiles.findIndex(f => f.includes(baseA.toLowerCase()) && f.startsWith(item.unit.toLowerCase()));
    }
    
    // Fallback 2: if unit and answer didn't match perfectly, just look for any file starting with unit that isn't mapped yet
    // Actually, let's keep it strict for now to avoid wrong mappings.
    if (matchIdx !== -1) {
        const actualImg = originalImageFiles[matchIdx];
        
        let qEscaped = item.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
        
        // Ensure not already applied
        if (!content.includes(`assets/images/history/${actualImg}`)) {
            content = content.replace(blockRegex, `$1,\n            image: "assets/images/history/${actualImg}"\n        $2`);
            applyCount++;
            // Remove from array so we don't map it twice to something else
            imageFiles[matchIdx] = ""; 
        }
    }
});

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log(`Successfully mapped ${applyCount} extra images to quiz_data.js.`);
