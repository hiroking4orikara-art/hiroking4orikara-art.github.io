const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\e6175c4a-bce4-40c4-9032-70e3609794d6';
const destDir = path.join(__dirname, 'assets', 'images', 'civics');
const dataFile = path.join(__dirname, 'quiz_data.js');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => f.startsWith('g_civics_49_') && f.endsWith('.png'));
console.log(`Found ${files.length} images to apply.`);

const orderedNames = [
    'terrorism',
    '911_attacks',
    'iraq_war',
    'islamic_state',
    'ngo',
    'npo',
    'npo_act',
    'human_security',
    'pdca_cycle',
    'sdgs'
];

let content = fs.readFileSync(dataFile, 'utf8');

let appliedCount = 0;

for (let i = 0; i < 10; i++) {
    const questionIndex = 480 + i;
    const namePrefix = orderedNames[i];
    
    // Find matching image file
    const file = files.find(f => f.match(new RegExp(`^g_civics_49_${namePrefix}_\\d+\\.png$`)));
    if (!file) {
        console.log("Missing image for: " + namePrefix);
        continue;
    }
    
    // Move file
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    fs.copyFileSync(srcPath, destPath);
    
    // Build path string to insert
    const assetPath = `assets/images/civics/${file}`;
    
    // Read target text by regex extraction via eval trick
    let tempContent = content.replace('window.QUIZ_DATA =', 'global.window={}; window.QUIZ_DATA =');
    try {
        eval(tempContent);
        const qData = window.QUIZ_DATA.gw_3[questionIndex];
        if (qData && !qData.answerImg) {
            const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const qStr = escapeRegExp(qData.q);
            const commentStr = escapeRegExp(qData.comment);
            
            const regex = new RegExp(`(q:\\s*["']${qStr}["'],\\s*\\n\\s*choices:[\\s\\S]*?comment:\\s*["']${commentStr}["'])`);
            const match = content.match(regex);
            if (match) {
                const replacement = match[1] + `,\n            answerImg: "${assetPath}",\n            imgCaption: "※画像はイメージです"`;
                content = content.replace(match[0], replacement);
                appliedCount++;
                console.log("Applied image to index " + questionIndex + ": " + assetPath);
            } else {
                console.log("Regex match failed for index " + questionIndex);
            }
        } else {
            console.log("Already has image or missing index " + questionIndex);
        }
    } catch(e) {
        console.log("Error evaluating block:", e.message);
    }
}

fs.writeFileSync(dataFile, content);
console.log(`Successfully applied ${appliedCount} images.`);
