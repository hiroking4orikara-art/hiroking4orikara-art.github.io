const fs = require('fs');
const content = fs.readFileSync('quiz_data.js', 'utf8');
const targets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));

let missing = [];
targets.forEach(t => {
    let qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`q:\\s*["']${qEscaped}["'][^}]*?(img|image):\\s*["']([^"']+)["']`);
    if (!regex.test(content)) {
        missing.push(t);
    }
});
fs.writeFileSync('missing_targets_32.json', JSON.stringify(missing, null, 2));
console.log(`Saved ${missing.length} missing targets.`);
