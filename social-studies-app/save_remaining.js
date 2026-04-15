const fs = require('fs');
const content = fs.readFileSync('quiz_data.js', 'utf8');

// The file format is:
// window.QUIZ_DATA = { ... };
// Extract just the JSON part:
const jsonStr = content.substring(content.indexOf('{'));
// In order to not break things, we need to modify the file via reliable string replacement
// Let's use the actual indices from actual_targets.json

const missing = JSON.parse(fs.readFileSync('missing_after_assets.json', 'utf8'));

// We will build a list of missing items by unit and index
const missingMap = {};
missing.forEach(m => {
    if (!missingMap[m.unit]) missingMap[m.unit] = [];
    missingMap[m.unit].push(m.index);
});

// For each remaining item, we want to generate an image or map an existing one.
// Let's first just list out the 83 missing items to see which ones they are.
fs.writeFileSync('remaining_83.json', JSON.stringify(missing, null, 2));
console.log("Wrote remaining_83.json with", missing.length, "items");
