const fs = require('fs');

let qzStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = qzStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const data = new Function(`return ${matchQuiz[1]}`)();

// Calculate actual question counts per branch category
let counts = {};

for(const [key, arr] of Object.entries(data)) {
    counts[key] = arr.length;
}

// Special accumulated counts
const geoWorldReview = Object.keys(data).filter(k => k.startsWith('gw_')).reduce((sum, k) => sum + data[k].length, 0);
const geoJapanReview = Object.keys(data).filter(k => k.startsWith('gj_')).reduce((sum, k) => sum + data[k].length, 0);
const historyReview = Object.keys(data).filter(k => k.startsWith('h_') || k.startsWith('hm_')).reduce((sum, k) => sum + data[k].length, 0);
const civicsReview = Object.keys(data).filter(k => k.startsWith('c_') || k.startsWith('cw_')).reduce((sum, k) => sum + data[k].length, 0);

console.log("Calculated Counts:");
console.log("- Geo World Review (gw_*):", geoWorldReview);
console.log("- Geo Japan Review (gj_*):", geoJapanReview);
console.log("- History Review (h_*, hm_*):", historyReview);
console.log("- Civics Review (c_*, cw_*):", civicsReview);

let scriptStr = fs.readFileSync('script.js', 'utf8');

// The UI code hardcodes strings like `(全152問)` but uses variables for some.
// Let's analyze line 135 and others
const lines = scriptStr.split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('世界地理<br>総復習<br><small') && lines[i].includes('全')) {
        // Change it to use correct template or correct number
        lines[i] = lines[i].replace(/\(全\d+問\)/, `(全${geoWorldReview}問)`);
    } else if (lines[i].includes('日本地理<br>総復習<br><small') && lines[i].includes('全')) {
        lines[i] = lines[i].replace(/\(全\d+問\)/, `(全${geoJapanReview}問)`);
    } else if (lines[i].includes('歴史<br>総復習チャレンジ<br><small') && lines[i].includes('全')) {
        lines[i] = lines[i].replace(/\(全\d+問\)/, `(全${historyReview}問)`);
    } else if (lines[i].includes('公民全問チャレンジ<br><small') && lines[i].includes('全')) {
        lines[i] = lines[i].replace(/\(全\d+問\)/, `(全${civicsReview}問)`);
    }
}

// Also, the individual chapters have their lengths hardcoded in some renderers! Wait, some are dynamically generated.
// Let's check `renderChapterSelection` in script.js to see if it reads `window.QUIZ_DATA[key].length`
// Actually, I should just print the counts and see if there are any replace matches.

fs.writeFileSync('script_fixed_counts.js', lines.join('\n'));
console.log("Wrote draft script to test counts.");
