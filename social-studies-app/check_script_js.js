const fs = require('fs');

let s = fs.readFileSync('script.js', 'utf8');

// There's a mess in the `renderChapterSelection` and `renderUnits` functions from previous bad replacements.
// Let's first dump the functions so we know what they look like, because they are clearly corrupted.
const renderChapterRegex = /renderChapterSelection\b[\s\S]*?renderUnits/s;
const renderUnitsRegex = /renderUnits\b[^\(]*\([\s\S]*?startQuiz/s;

console.log("--- renderChapterSelection ---");
const rcMatch = s.match(renderChapterRegex);
if(rcMatch) console.log(rcMatch[0].substring(0, 1000));

console.log("--- renderUnits ---");
const ruMatch = s.match(renderUnitsRegex);
if(ruMatch) console.log(ruMatch[0].substring(0, 1000));
