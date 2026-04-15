const fs = require('fs');
const path = require('path');

const destDir = path.join(__dirname, 'assets', 'images', 'civics');
const srcDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\e8a8e4f9-69b8-40fc-9cdf-ef22df53e288';
const dataFile = path.join(__dirname, 'quiz_data.js');

let content = fs.readFileSync(dataFile, 'utf8');

// The incorrect assigned image for 110 was extraordinary session. Let's find ordinary session in srcDir.
const files = fs.readdirSync(srcDir).filter(f => f.match(/^g_civics_12_ordinary_session_\d+\.png$/));
if(files.length > 0) {
    const correctFile = files[0];
    const correctPath = `assets/images/civics/${correctFile}`;
    fs.copyFileSync(path.join(srcDir, correctFile), path.join(destDir, correctFile));
    
    // Split into lines
    const lines = content.split('\n');
    let fixed = false;
    for(let i=0; i<lines.length; i++) {
        if(lines[i].includes('q: "毎年1月に召集される国会を何というか。"')) {
            // Found index 110. Now look ahead a few lines for answerImg
            for(let j=1; j<10; j++) {
                if(lines[i+j] && lines[i+j].includes('answerImg:')) {
                    lines[i+j] = `            answerImg: "${correctPath}",`;
                    fixed = true;
                    break;
                }
            }
            break;
        }
    }
    
    if(fixed) {
        fs.writeFileSync(dataFile, lines.join('\n'));
        console.log("Successfully fixed index 110 to point to " + correctFile);
    } else {
        console.log("Could not find line to edit.");
    }
} else {
    console.log("Could not find the original ordinary_session image in " + srcDir);
}
