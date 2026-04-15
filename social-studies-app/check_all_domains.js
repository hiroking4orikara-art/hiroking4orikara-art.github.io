const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');

const domainRegex = /\/\/\s*=+\r?\n\/\/\s*(地理|歴史|公民)\r?\n\/\/\s*=+/g;
let domains = [];
let match;
while ((match = domainRegex.exec(content)) !== null) {
  domains.push({ name: match[1], index: match.index });
}

if (domains.length === 0) {
  domains = [{ name: 'Unknown', index: 0 }];
}

function analyzeDomain(name, startIndex, endIndex) {
  let section = content.slice(startIndex, endIndex);
  let questions = section.match(/q\s*:\s*['"].*?['"]/g) || [];
  let images = section.match(/(?:img|image)\s*:\s*['"].*?['"]/g) || [];
  let placeholders = section.match(/(?:img|image)\s*:\s*['"](?:.*\/)?(?:replace|placeholder|missing).*?['"]/gi) || [];
  
  let validImages = images.length - placeholders.length;
  console.log(`--- ${name} ---`);
  console.log(`Questions: ${questions.length}`);
  console.log(`Images: ${images.length}`);
  console.log(`Placeholders: ${placeholders.length}`);
  console.log(`Missing: ${questions.length - validImages}`);
}

for (let i = 0; i < domains.length; i++) {
  let endIndex = (i + 1 < domains.length) ? domains[i+1].index : content.length;
  analyzeDomain(domains[i].name, domains[i].index, endIndex);
}
