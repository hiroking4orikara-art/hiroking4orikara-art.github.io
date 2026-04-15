const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
let dataObjStr = parsedDataStr.replace(/module\.exports\s*=\s*/g, 'window.QUIZ_DATA = ');

const matchQuiz = dataObjStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

// The previous script check_remaining_civics.js tells us there are 272 Civics questions.
// Let's identify which questions in gw_3 belong to gw_3, and which ones belong to Civics.
// Standard gw_3 questions are about Europe.
// If it's in c_X, we shouldn't have it in gw_3.

// Wait, the real backup of quiz_data.js DID NOT have this issue.
// Let's check when gw_3 got corrupted by checking the lengths in temp_quiz_data.js.
const backupStr = fs.readFileSync('temp_quiz_data.js', 'utf8');
const backupMatch = backupStr.replace(/module\.exports\s*=\s*/g, 'window.QUIZ_DATA = ').match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const backupData = new Function(`return ${backupMatch[1]}`)();

console.log('backup gw_3 length:', backupData['gw_3'].length);
console.log('backup c_1 length:', backupData['c_1']?.length);

// It seems in the backup itself, gw_3 was already 507! Which means the backup we restored was ALREADY corrupted.
// We need to find an OLDER backup before the civics questions were accidentally pushed into gw_3.
