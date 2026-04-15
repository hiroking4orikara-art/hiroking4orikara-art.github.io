const fs = require('fs');

let c = fs.readFileSync('quiz_data.js', 'utf8');

// Looking at the error log, the stringification failed because there was a raw newline inside the string or quotes inside quotes.
// Oh! Wait! The original script `restore_civics.js` used:
// `            comment: ${JSON.stringify(q.comment)}`;
// JSON.stringify handles newlines and quotes securely for JavaScript!
// Let's find exactly the line causing the error.

const lines = c.split('\n');
lines.forEach((l, i) => {
   if (l.includes('「人間たるに値する生活」')) {
       console.log(`Line ${i}:`, l);
       console.log(`Line ${i+1}:`, lines[i+1]);
   }
});
