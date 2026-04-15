const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

const sectionCounts = {};

for (const [section, questions] of Object.entries(parsedData)) {
    sectionCounts[section] = questions.length;
}

const geoSections = Object.keys(sectionCounts).filter(k => k.startsWith('g_') || k.startsWith('gw_'));
const historySections = Object.keys(sectionCounts).filter(k => k.startsWith('h_') || k.startsWith('hw_'));
const civicsSections = Object.keys(sectionCounts).filter(k => k.startsWith('c_') || k.startsWith('cw_'));

console.log("=== Geography ===");
geoSections.forEach(k => console.log(`${k}: ${sectionCounts[k]} questions`));
console.log(`Total Geography: ${geoSections.reduce((acc, k) => acc + sectionCounts[k], 0)}`);

console.log("\n=== History ===");
historySections.forEach(k => console.log(`${k}: ${sectionCounts[k]} questions`));
console.log(`Total History: ${historySections.reduce((acc, k) => acc + sectionCounts[k], 0)}`);

console.log("\n=== Civics ===");
civicsSections.forEach(k => console.log(`${k}: ${sectionCounts[k]} questions`));
console.log(`Total Civics: ${civicsSections.reduce((acc, k) => acc + sectionCounts[k], 0)}`);
