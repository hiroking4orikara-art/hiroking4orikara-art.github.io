const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\e8a8e4f9-69b8-40fc-9cdf-ef22df53e288';
const destDir = path.join(__dirname, 'assets', 'images', 'civics');
const dataFile = path.join(__dirname, 'quiz_data.js');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => f.startsWith('g_civics_12_') && f.endsWith('.png'));
console.log(`Found ${files.length} images to apply.`);

const orderedNames = [
    'ordinary_session',
    'special_session',
    'extraordinary_session',
    'emergency_session',
    'legislation',
    'members_bill',
    'house_of_reps',
    'house_of_councillors',
    'supremacy_house_reps',
    'investigate_state_affairs'
];

let content = fs.readFileSync(dataFile, 'utf8');
content = content.replace('window.QUIZ_DATA =', 'global.window={}; window.QUIZ_DATA =');
eval(content);
const quizData = window.QUIZ_DATA;
const gw_3 = quizData.gw_3;

let replacedContent = fs.readFileSync(dataFile, 'utf8');

let appliedCount = 0;

for (let i = 0; i < 10; i++) {
    const questionIndex = 110 + i;
    const namePrefix = orderedNames[i];
    
    // Find matching image file
    const file = files.find(f => f.includes(namePrefix));
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
    
    const questionData = gw_3[questionIndex];
    if (questionData && !questionData.answerImg) {
        // Need to do a text replacement because eval doesn't link back.
        const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const qStr = escapeRegExp(questionData.q);
        const commentStr = escapeRegExp(questionData.comment);
        
        // Find the block in the raw file
        const regex = new RegExp(`q:\\s*["']${qStr}["'],\\s*\\n\\s*choices:[\\s\\S]*?comment:\\s*["']${commentStr}["']`);
        const match = replacedContent.match(regex);
        
        if (match) {
            const replacement = match[0] + `,\n            answerImg: "${assetPath}",\n            imgCaption: "※画像はイメージです"`;
            replacedContent = replacedContent.replace(match[0], replacement);
            appliedCount++;
            console.log("Applied image to index " + questionIndex + ": " + assetPath);
        } else {
            console.log("Could not match regex for index " + questionIndex);
        }
    } else {
        console.log("Already has image or missing question for index " + questionIndex);
    }
}

fs.writeFileSync(dataFile, replacedContent);
console.log(`Successfully applied ${appliedCount} images.`);
