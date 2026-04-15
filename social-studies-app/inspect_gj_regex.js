const fs = require('fs');
const quizDataText = fs.readFileSync('C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\quiz_data.js', 'utf8');

// Find all matches for gj_XX: [ 
const regex = /(gj_\d+)\s*:\s*\[\s*\{\s*question\s*:\s*"([^"]+)"/g;
let match;
console.log("=== 日本地理 (gj) 単元リスト一覧 ===");
while ((match = regex.exec(quizDataText)) !== null) {
    console.log(`${match[1]}: ${match[2].substring(0, 50)}...`);
}
