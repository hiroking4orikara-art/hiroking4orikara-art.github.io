const fs = require('fs');
const path = require('path');

try {
    const batch = JSON.parse(fs.readFileSync('civics_batch_2.json', 'utf8'));
    let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
    
    let replaced = 0;
    const destDir = 'assets/images/civics';
    
    batch.forEach(item => {
        const brainDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\4c561b6f-be35-4031-ae87-09f3f7a5beb9';
        const files = fs.readdirSync(brainDir);
        
        const baseName = item.filename.replace('.png', '').replace(/_+/g, '_');
        const timestamp = item.filename.match(/_(\d+)\.png$/)?.[1];
        
        let matchedFile = files.find(f => f.includes(`_${timestamp}_`) || f.includes(`_${timestamp}.`));
        if (!matchedFile) {
            matchedFile = files.find(f => f.includes('.png') && item.filename.replace(/_+/g, '') === f.replace(/_+/g, '').replace(/_png_\d+/, ''));
        }
        
        if (matchedFile) {
            const sourcePath = path.join(brainDir, matchedFile);
            const destPath = path.join(destDir, matchedFile);
            
            // Copy file to assets
            fs.copyFileSync(sourcePath, destPath);
            console.log(`Copied ${matchedFile} to assets.`);
            
            // Apply to quiz_data.js
            const qEscaped = item.question.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
            const blockRegex = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(a:\\s*".*?")(\\n*\\s*\\})`, 'g');
            const match = blockRegex.exec(quizDataStr);
            if (match) {
                const replacement = `${match[1]}${match[2]},\n            answerImg: "assets/images/civics/${matchedFile}",\n            imgCaption: "※画像はイメージです"${match[3]}`;
                quizDataStr = quizDataStr.replace(match[0], replacement);
                replaced++;
            } else {
                const blockRegex2 = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(comment:\\s*".*?")(\\n*\\s*\\})`, 'g');
                const match2 = blockRegex2.exec(quizDataStr);
                if (match2) {
                    const replacement = `${match2[1]}${match2[2]},\n            answerImg: "assets/images/civics/${matchedFile}",\n            imgCaption: "※画像はイメージです"${match2[3]}`;
                    quizDataStr = quizDataStr.replace(match2[0], replacement);
                    replaced++;
                } else {
                     console.log(`Failed to find question in quiz_data: ${item.question}`);
                }
            }
        } else {
            console.log(`Could not find generated image for ${item.filename}`);
        }
    });

    if (replaced > 0) {
        fs.writeFileSync('quiz_data.js', quizDataStr, 'utf8');
        console.log(`Successfully applied ${replaced} new images to quiz_data.js! (Batch 2)`);
    } else {
        console.log("No new mappings applied.");
    }
} catch(e) {
    console.error("Error:", e);
}
