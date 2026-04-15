const fs = require('fs');

const missingCivics = JSON.parse(fs.readFileSync('missing_civics_detailed.json', 'utf8'));
const civicsImagesKeywords = JSON.parse(fs.readFileSync('civics_images_keywords.json', 'utf8'));
const applyScriptStr = fs.existsSync('apply_civics_mappings.js') ? fs.readFileSync('apply_civics_mappings.js', 'utf8') : '';

// Images that are ALREADY in apply_civics_mappings.js
const matchedImageFilenames = [];
const regex = /answerImg: "assets\/images\/civics\/(g_civics_[^"]+\.png)"/g;
let match;
while ((match = regex.exec(applyScriptStr)) !== null) {
    matchedImageFilenames.push(match[1]);
}

const unmatchedMissing = [];
for (let q of missingCivics) {
    // Is this question already in the apply script?
    // We can't immediately tell without parsing the JSON array of mappings, let's just parse it.
}

let mappings = [];
try {
    const mappingsMatch = applyScriptStr.match(/const mappings = (\[[\s\S]*?\]);/);
    if(mappingsMatch) mappings = JSON.parse(mappingsMatch[1]);
} catch(e) {}

const matchedQuestionsIndices = new Set(mappings.map(m => m.question.section + '_' + m.question.index));

missingCivics.forEach(q => {
    if(!matchedQuestionsIndices.has(q.section + '_' + q.index)) {
        unmatchedMissing.push(q);
    }
});

const unmatchedImages = civicsImagesKeywords.filter(img => !matchedImageFilenames.includes(img.filename));

const dumpStr = `
=== Unmatched Questions (${unmatchedMissing.length}) ===
${unmatchedMissing.map(q => q.a).join('\n')}

=== Unmatched Images (${unmatchedImages.length}) ===
${unmatchedImages.map(img => img.keyword).join('\n')}
`;

fs.writeFileSync('remaining.txt', dumpStr);
console.log('Wrote remaining.txt');
