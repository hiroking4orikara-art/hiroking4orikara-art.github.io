const fs = require('fs');
const path = require('path');
const src = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\e6175c4a-bce4-40c4-9032-70e3609794d6\\g_civics_23_rationalization_of_distribution_1773545731761.png';
const dest = path.join(__dirname, 'assets', 'images', 'civics', 'g_civics_23_rationalization_of_distribution_1773545731761.png');
fs.copyFileSync(src, dest);

let content = fs.readFileSync('quiz_data.js', 'utf8');
content = content.replace('g_civics_23_rationalization_of_distribution_1773545582485.png', 'g_civics_23_rationalization_of_distribution_1773545731761.png');
fs.writeFileSync('quiz_data.js', content);
console.log('Fixed index 228 image');
