const fs = require('fs');
const content = fs.readFileSync('quiz_data.js', 'utf8');
const targets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));

let missing = [];
targets.forEach(t => {
    let qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Find the block for this question
    const qRegex = new RegExp(`{\\s*["']?q["']?\\s*:\\s*["']${qEscaped}["'][^}]*?}`);
    const match = content.match(qRegex);
    
    if (match) {
        if (!match[0].includes('"img":') && !match[0].includes("'img':") && !match[0].includes("img:") && !match[0].includes('"image":') && !match[0].includes("'image':") && !match[0].includes("image:")) {
            missing.push(t);
        }
    } else {
        console.log("Could not find question in quiz_data.js:", t.q);
    }
});

console.log('Still missing targets:', missing.length);
if(missing.length > 0) {
    fs.writeFileSync('missing_after_assets.json', JSON.stringify(missing, null, 2));
    console.log(missing.slice(0, 5));
}
