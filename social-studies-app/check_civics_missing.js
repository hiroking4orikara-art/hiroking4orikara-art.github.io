const fs = require('fs');
const content = fs.readFileSync('quiz_data.js', 'utf8');
let tempContent = content.replace('window.QUIZ_DATA =', 'global.window={}; window.QUIZ_DATA =');
eval(tempContent);
const gw3 = window.QUIZ_DATA.gw_3;
const missing = [];
for (let i = 0; i < gw3.length; i++) {
    if (!gw3[i].answerImg) {
        missing.push(i);
    }
}
console.log(`Missing Civics images: ${missing.length}`);
if (missing.length > 0) {
    console.log(`First missing index: ${missing[0]}`);
    console.log(`Missing indices: ${missing.slice(0, 20).join(', ')}`);
}
