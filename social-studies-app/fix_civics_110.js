const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'assets', 'images', 'civics');
const dataFile = path.join(__dirname, 'quiz_data.js');

let content = fs.readFileSync(dataFile, 'utf8');

// Find the real ordinary session image
const files = fs.readdirSync(destDir).filter(f => f.startsWith('g_civics_12_ ordinary') || f.match(/^g_civics_12_ordinary_session_\d+\.png$/));
if(files.length > 0) {
    const correctFile = files[0];
    const correctPath = `assets/images/civics/${correctFile}`;
    
    // Evaluate to find exactly the question for 110
    let tempContent = content.replace('window.QUIZ_DATA =', 'global.window={}; window.QUIZ_DATA =');
    eval(tempContent);
    const gw_3 = window.QUIZ_DATA.gw_3;
    const q110 = gw_3[110];
    
    if(q110) {
        const qStr = q110.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const commentStr = q110.comment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        const regex = new RegExp(`(q:\\s*["']${qStr}["'],\\s*\\n\\s*choices:[\\s\\S]*?comment:\\s*["']${commentStr}["'],\\s*\\n\\s*answerImg:\\s*)"([^"]+)"`);
        content = content.replace(regex, `$1"${correctPath}"`);
        
        fs.writeFileSync(dataFile, content);
        console.log("Fixed image for index 110 to: " + correctPath);
    }
} else {
    console.log("Could not find the original ordinary_session image in " + destDir);
}
