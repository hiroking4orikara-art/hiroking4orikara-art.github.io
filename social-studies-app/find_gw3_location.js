const fs = require('fs');

const data = fs.readFileSync('quiz_data.js', 'utf8');
const lines = data.split('\n');

const targetStr = "北アメリカ大陸の西岸に沿って連なる、険しい山脈は？";

let found = false;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(targetStr)) {
        found = true;
        console.log(`\nFound target question at line ${i + 1}:`);
        for (let j = Math.max(0, i - 10); j <= Math.min(lines.length - 1, i + 10); j++) {
            console.log(`${j + 1}: ${lines[j]}`);
        }
        break; // 最初だけ見つける
    }
}

if (!found) {
    console.log("Target string not found, even though the earlier check said 0 missing? Let's check regex.");
}
