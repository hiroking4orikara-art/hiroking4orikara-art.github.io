const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

console.log('Original gw_3 length:', parsedData.gw_3.length);

console.log(parsedData.gw_3.slice(0,10).map(q=>q.q).join('\n'));

// Let's also check if they are identical identical.
const keys = parsedData.gw_3.map(q => q.q + '|' + q.a);
const uniqueKeys = new Set(keys);
console.log('Unique q+a combos:', uniqueKeys.size);

// Find what's actually duplicated
const countMap = {};
keys.forEach(k => {
    countMap[k] = (countMap[k] || 0) + 1;
});

const duplicates = Object.keys(countMap).filter(k => countMap[k] > 1);
console.log('Number of questions that have duplicates:', duplicates.length);
if (duplicates.length > 0) {
    console.log('Example duplicated:', duplicates[0], 'Count:', countMap[duplicates[0]]);
} else {
    console.log('No duplicates found. All 506 are unique????');
}
