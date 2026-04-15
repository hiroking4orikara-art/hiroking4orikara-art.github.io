const fs = require('fs');
const missing = JSON.parse(fs.readFileSync('missing_after_assets.json', 'utf8'));
const files = fs.readdirSync('assets/images/history');
let out = '';
missing.forEach(m => {
    const unitFiles = files.filter(f => f.startsWith(m.unit + '_'));
    out += `Unit: ${m.unit}, Answer: ${m.a}\n`;
    out += `  Candidates: ${unitFiles.join(', ')}\n`;
});
fs.writeFileSync('candidates_list.txt', out);
