const fs = require('fs');
const content = fs.readFileSync('quiz_data.js', 'utf8');
const targets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));

let missing = [];
targets.forEach(t => {
    let qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`q:\\s*["']${qEscaped}["'][^}]*?image:\\s*["']([^"']+)["']`);
    if (!regex.test(content)) {
        missing.push(t);
    }
});

console.log('Final Still missing targets:', missing.length);
if (missing.length > 0) {
    const byUnit = {};
    missing.forEach(m => byUnit[m.unit] = (byUnit[m.unit] || 0) + 1);
    console.log('Missing by unit:', JSON.stringify(byUnit, null, 2));
}

// Check how many assets images are left unused
const assetsDir = 'assets/images/history/';
const allAssets = fs.readdirSync(assetsDir).filter(f => f.endsWith('.png'));
let unusedAssets = [];

allAssets.forEach(img => {
    if(!content.includes(`"assets/images/history/${img}"`)) {
        unusedAssets.push(img);
    }
});

console.log(`Unused assets images: ${unusedAssets.length}`);
if(unusedAssets.length > 0) console.log(unusedAssets.slice(0, 5));
