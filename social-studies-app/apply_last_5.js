const fs = require('fs');

const jsPath = 'quiz_data.js';
let jsContent = fs.readFileSync(jsPath, 'utf8');

const updates = [
    { answer: '河上肇', img: 'images/h_modern_5_kawakami_1772244249505.png' },
    { answer: '学童疎開', img: 'images/h_modern_7_gakudo_sokai_1772244267399.png' },
    { answer: '冷蔵庫', img: 'images/h_contemporary_3_refrigerator_1772244281830.png' },
    { answer: '非核三原則', img: 'images/h_contemporary_3_hikaku_1772244298466.png' },
    { answer: '京都議定書', img: 'images/h_contemporary_5_kyoto_1772244316824.png' }
];

let lines = jsContent.split('\n');
let appliedCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const aMatch = line.match(/^\s*a:\s*"([^"]+)"/);
    if (aMatch) {
        let answerText = aMatch[1];
        const update = updates.find(u => u.answer === answerText || answerText.includes(u.answer));
        if (update) {
            let hasImg = false;
            let j = i + 1;
            while(j < lines.length && !lines[j].match(/^\s*},\s*$/) && !lines[j].match(/^\s*q:/)) {
                if (lines[j].includes('img:')) {
                    hasImg = true;
                    // Check if it's already exactly the same
                    if (lines[j].includes(update.img)) break;
                    
                    lines[j] = `            img: "${update.img}",`;
                    appliedCount++;
                    console.log(`Updated ${update.answer} with ${update.img}`);
                    break;
                }
                j++;
            }
            if (!hasImg) {
                const imgLine = `            img: "${update.img}",`;
                lines.splice(i + 1, 0, imgLine);
                appliedCount++;
                console.log(`Inserted ${update.img} for ${update.answer}`);
            }
        }
    }
}

fs.writeFileSync(jsPath, lines.join('\n'));
console.log(`Applied ${appliedCount} images to quiz_data.js`);
