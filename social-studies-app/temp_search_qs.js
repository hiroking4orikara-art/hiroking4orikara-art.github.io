const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
const data = fs.readFileSync(quizDataPath, 'utf8');

const matches = [...data.matchAll(/question:\s*(["'])(.*?)\1/g)];
const qs = matches.map(m => m[2]);

console.log('Total qs:', qs.length);
const searchTerms = [
    '混合農業', '酪農', 'ポルダー', 'ユーロ', 'EU'
];

searchTerms.forEach(term => {
    console.log(`\nSearching for "${term}":`);
    qs.filter(q => q.includes(term)).forEach(q => console.log(' -> ' + q));
});
