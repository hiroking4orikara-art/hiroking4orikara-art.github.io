const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
const data = fs.readFileSync(quizDataPath, 'utf8');

const searchTerms = [
    '混合農業', '酪農', 'ポルダー', 'ユーロ', 'EU', '乳製品', '干拓地', '共通通貨', '穀物', '栽培', 'ヨーロッパ北部', '冷涼', 'オランダ'
];

const matches = [];

const lines = data.split('\n');
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('q:')) {
        matches.push(line.trim());
    }
}

searchTerms.forEach(term => {
    console.log(`\nSearching for "${term}":`);
    matches.filter(q => q.includes(term)).forEach(q => console.log(' -> ' + q));
});
