const fs = require('fs');

const jsPath = 'quiz_data.js';
let jsContent = fs.readFileSync(jsPath, 'utf8');

const updates = [
    { answer: '日本国憲法', img: 'images/h_contemporary_1_kenpou_' },
    { answer: '闇市', img: 'images/h_contemporary_1_yamiichi_' },
    { answer: 'サンフランシスコ平和条約', img: 'images/h_contemporary_2_sanfran_' },
    { answer: '高度経済成長', img: 'images/h_contemporary_3_koudo_' },
    { answer: '東京オリンピック', img: 'images/h_contemporary_3_tokyo_oly_' },
    { answer: '公害', img: 'images/h_contemporary_3_kougai_' },
    { answer: 'バブル', img: 'images/h_contemporary_4_bubble_' },
    { answer: 'ベルリンの壁崩壊', img: 'images/h_contemporary_4_berlin_' },
    { answer: 'IT革命', img: 'images/h_contemporary_5_it_' },
    { answer: '少子高齢化', img: 'images/h_contemporary_5_shoushi_' },
    { answer: '循環型社会', img: 'images/h_contemporary_5_junkangata_' }
];

// Helper to find actual filename in the images dir
const files = fs.readdirSync('images');

updates.forEach(update => {
    const filename = files.find(f => f.startsWith(update.img.replace('images/', '')) && f.endsWith('.png'));
    if (filename) {
        update.img = 'images/' + filename;
    } else {
        // Fallback or might still be in the brain dir
        const brainFiles = fs.readdirSync('C:/Users/hirok/.gemini/antigravity/brain/784d1901-76ee-4c02-aa3a-842df9e37702');
        const brainFilename = brainFiles.find(f => f.startsWith(update.img.replace('images/', '')) && f.endsWith('.png'));
        if (brainFilename) {
            update.img = 'images/' + brainFilename;
        } else {
             console.log("Could not find image file for " + update.answer);
        }
    }
});

let lines = jsContent.split('\n');
let appliedCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const aMatch = line.match(/^\s*a:\s*"([^"]+)"/);
    if (aMatch) {
        let answerText = aMatch[1];
        // Match if it includes the target substring to handle nuances in quiz_data answer text
        const update = updates.find(u => answerText.includes(u.answer));
        if (update && update.img.endsWith('.png')) {
            let hasImg = false;
            let j = i + 1;
            while(j < lines.length && !lines[j].match(/^\s*},\s*$/) && !lines[j].match(/^\s*q:/)) {
                if (lines[j].includes('img:')) {
                    hasImg = true;
                    // Check if already exactly same
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
