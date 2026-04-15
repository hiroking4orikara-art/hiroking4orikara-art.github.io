const fs = require('fs');
const path = require('path');

try {
    const generatedImages = [
        { name: "h_early_modern_1_luther", ext: "png", section: "h_early_modern_1", index: 1 },
        { name: "h_early_modern_1_columbus", ext: "png", section: "h_early_modern_1", index: 2 },
        { name: "h_early_modern_1_vasco_da_gama", ext: "png", section: "h_early_modern_1", index: 3 },
        { name: "h_early_modern_1_magellan", ext: "png", section: "h_early_modern_1", index: 4 },
        { name: "h_early_modern_1_francis_xavier", ext: "png", section: "h_early_modern_1", index: 6 },
        { name: "h_early_modern_1_nanban_boeki", ext: "png", section: "h_early_modern_1", index: 7 },
        { name: "h_early_modern_1_kirishitan_daimyo", ext: "png", section: "h_early_modern_1", index: 8 },
        { name: "h_early_modern_1_tensho_kenoh_shonen_shisetsu", ext: "png", section: "h_early_modern_1", index: 9 },
        { name: "h_modern_2_first_election", ext: "png", section: "h_modern_2", index: 13 },
        { name: "h_modern_4_mori_ogai", ext: "png", section: "h_modern_4", index: 9 }
    ];

    const sourceDir = path.join(__dirname, '..', '..', 'brain', '4c561b6f-be35-4031-ae87-09f3f7a5beb9');
    const destDir = path.join(__dirname, 'assets', 'images', 'history');

    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    const files = fs.readdirSync(sourceDir);
    const mappings = [];

    files.sort((a,b) => -1);

    for (const req of generatedImages) {
        const regex = new RegExp(`^${req.name}_\\d+\\.${req.ext}$`);
        const foundFile = files.find(f => regex.test(f));
        
        if (foundFile) {
            const srcPath = path.join(sourceDir, foundFile);
            const destPath = path.join(destDir, foundFile);
            fs.copyFileSync(srcPath, destPath);
            mappings.push({ ...req, filename: foundFile });
            console.log(`Ready to map: ${foundFile}`);
        } else {
            console.error(`Missing image for ${req.name}`);
        }
    }

    let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');

    let replacements = 0;
    for (let i = 0; i < mappings.length; i++) {
        const mapInfo = mappings[i];
        
        // Find the specific question by index in the section.
        // It's safer to use the exact question text to replace.
        const missingData = JSON.parse(fs.readFileSync('missing_history_detailed.json', 'utf8'));
        const qInfo = missingData.find(m => m.section === mapInfo.section && m.index === mapInfo.index);

        if (qInfo) {
            const qEscaped = qInfo.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
            
            const blockRegex = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(comment:\\s*".*?")(\\n*\\s*\\})`, 'g');
            const match = blockRegex.exec(quizDataStr);
            
            if (match) {
                const replacement = `${match[1]}${match[2]},\n            answerImg: "assets/images/history/${mapInfo.filename}",\n            imgCaption: "※画像はイメージです"${match[3]}`;
                quizDataStr = quizDataStr.replace(match[0], replacement);
                replacements++;
            } else {
                const blockRegex2 = new RegExp(`(q:\\s*"${qEscaped}"[\\s\\S]*?)(a:\\s*".*?")(\\n*\\s*\\})`, 'g');
                const match2 = blockRegex2.exec(quizDataStr);
                if (match2) {
                    const replacement = `${match2[1]}${match2[2]},\n            answerImg: "assets/images/history/${mapInfo.filename}",\n            imgCaption: "※画像はイメージです"${match2[3]}`;
                    quizDataStr = quizDataStr.replace(match2[0], replacement);
                    replacements++;
                } else {
                    console.log(`Could not find a place to insert image for: ${qInfo.q.substring(0,20)}...`);
                }
            }
        }
    }

    if (replacements > 0) {
        fs.writeFileSync('quiz_data.js', quizDataStr, 'utf8');
        console.log(`Successfully updated quiz_data.js with ${replacements} new images!`);
    } else {
        console.log("No replacements were made.");
    }

} catch(e) {
    console.error("Error:", e);
}
