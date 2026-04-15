const fs = require('fs');

// 1. Calculate actual lengths
const content = fs.readFileSync('quiz_data.js', 'utf8');
const data = new Function('return '+content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/)[1])();
let totals = {};
Object.keys(data).forEach(k => { totals[k] = data[k].length; });

// Note: gw_3 seems to have 507, but perhaps it's a combo test. Wait, gw_3 might be a copy-paste error duplication over time.
// Let's first clean gw_3 duplicates if any, just in case.
const uniqueGw3 = [];
const seenQ = new Set();
(data['gw_3'] || []).forEach(q => {
    if (!seenQ.has(q.q)) {
        seenQ.add(q.q);
        uniqueGw3.push(q);
    }
});
if (uniqueGw3.length !== data['gw_3']?.length) {
    console.log(`Cleaned up gw_3 from ${data['gw_3'].length} to ${uniqueGw3.length}`);
    data['gw_3'] = uniqueGw3;
    totals['gw_3'] = uniqueGw3.length;
    
    // Quick re-save if we cleaned it up
    let outStr = 'window.QUIZ_DATA = {\n';
    const finalKeys = Object.keys(data).sort();
    for (let i = 0; i < finalKeys.length; i++) {
        const key = finalKeys[i];
        outStr += `    "${key}": [\n        ` + data[key].map(q => JSON.stringify(q)).join(',\n        ') + `\n    ]`;
        if (i < finalKeys.length - 1) outStr += ',\n';
        else outStr += '\n';
    }
    outStr += '};\n\nmodule.exports = window.QUIZ_DATA;\n';
    // We do a fast JSON stringify for this specific rewrite of gw_3 just to be safe, but actually it ruins the formatting. 
    // I won't re-save quiz_data.js here, the user only asked to fix the HTML counts. I will rely on the lengths.
}


// 2. Update index.html
let html = fs.readFileSync('index.html', 'utf8');

// The HTML contains buttons like:
// <button onclick="startSpecificUnit('gw_1')">第1章：世界の姿（全XX問）</button>
// We need to replace `（全XX問）` or whatever is inside the button with actual counts.

// Map HTML to keys
const replaceRegex = /<button[^>]*onclick="startSpecificUnit\('([^']+)'\)"[^>]*>(.*?)(?:（全\d*問|[（\(]?[0-9]+問\)?）?)<\/button>/g;

let updatedHtml = html.replace(replaceRegex, (match, unitKey, title) => {
    const cleanTitle = title.replace(/（全\d+問）|（\d+問）/g, '').trim();
    if (totals[unitKey] !== undefined) {
        // Find exactly what matched to keep the button tag structure intact
        return match.replace(/(>)(.*?)(<\/button>)/, `$1${cleanTitle}（全${totals[unitKey]}問）$3`);
    }
    return match;
});

// Also handle the general reviews like startSection('Geography_World') - wait, the user said World Geography "Review" (総復習).
// "世界地理の「総復習」などはかなり問題数が多く表示されている"
// Ah! That button might sum up multiple keys!
// Let's check how index.html handles it.

fs.writeFileSync('index.html', updatedHtml, 'utf8');
console.log("Updated specific unit buttons in index.html.");

// Let's see the total review buttons
const lines = updatedHtml.split('\n');
lines.forEach((l, i) => {
    if (l.includes('startSection') || l.includes('総復習') || l.includes('全問')) {
        console.log(`L${i}:`, l.trim());
    }
});
