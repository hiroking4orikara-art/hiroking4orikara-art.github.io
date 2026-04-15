const fs = require('fs');
const targets = require('./target_map_questions.json');

const filtered = targets.filter(q => q.image && typeof q.image === 'string' && q.image.includes('blank'));
fs.writeFileSync('filtered_map_questions.json', JSON.stringify(filtered, null, 2));
console.log('Filtered down to ' + filtered.length + ' strict map questions.');
