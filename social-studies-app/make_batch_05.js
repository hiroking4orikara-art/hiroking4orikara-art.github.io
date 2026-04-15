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

const batch = missing.slice(0, 15);
fs.writeFileSync('batch_05.json', JSON.stringify(batch, null, 2));

console.log(`Found ${missing.length} missing targets.`);
console.log('Batch 5 targets:');
batch.forEach((t, i) => {
    console.log(`${i+1}. [${t.unit}] Q: ${t.q} -> A: ${t.a}`);
});
