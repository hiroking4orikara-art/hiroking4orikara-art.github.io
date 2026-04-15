const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
let dataObjStr = parsedDataStr.replace(/module\.exports\s*=\s*/g, 'window.QUIZ_DATA = ');

const matchQuiz = dataObjStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

console.log('Total in gw_3:', parsedData['gw_3'].length);

console.log('\n--- First 10 in gw_3 ---');
parsedData['gw_3'].slice(0, 10).forEach(q => console.log(q.q));

console.log('\n--- Next 10 in gw_3 ---');
parsedData['gw_3'].slice(40, 50).forEach(q => console.log(q.q));

console.log('\n--- Last 10 in gw_3 ---');
parsedData['gw_3'].slice(-10).forEach(q => console.log(q.q));
