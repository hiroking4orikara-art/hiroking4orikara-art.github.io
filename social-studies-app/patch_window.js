const fs = require('fs');
let t = fs.readFileSync('quiz_data.js', 'utf8');

if (!t.includes('window.QUIZ_DATA = QUIZ_DATA;')) {
    t += '\nif(typeof window !== "undefined") {\n    window.QUIZ_DATA = QUIZ_DATA;\n}\n';
    fs.writeFileSync('quiz_data.js', t);
    console.log('Added window.QUIZ_DATA binding successfully.');
} else {
    console.log('Already has window.QUIZ_DATA binding.');
}
