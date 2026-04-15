const fs = require('fs');
const path = require('path');

try {
    const generatedImages = [
        { name: "h_ancient_6_taika_no_kaishin", ext: "png", section: "h_ancient_6", index: 0 },
        { name: "h_ancient_6_kochi_komin", ext: "png", section: "h_ancient_6", index: 1 },
        { name: "h_ancient_6_nakatomi_no_kamatari", ext: "png", section: "h_ancient_6", index: 2 },
        { name: "h_ancient_6_hakusukinoe", ext: "png", section: "h_ancient_6", index: 3 },
        { name: "h_ancient_6_tenchi_tenno", ext: "png", section: "h_ancient_6", index: 4 },
        { name: "h_ancient_6_jinshin_no_ran", ext: "png", section: "h_ancient_6", index: 5 },
        { name: "h_ancient_6_taiho_ritsuryo", ext: "png", section: "h_ancient_6", index: 7 },
        { name: "h_ancient_6_ritsuryo_kokka", ext: "png", section: "h_ancient_6", index: 8 },
        { name: "h_ancient_6_yo", ext: "png", section: "h_ancient_6", index: 11 },
        { name: "h_ancient_6_wado_kaichin", ext: "png", section: "h_ancient_6", index: 12 }
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
    const batchQuestions = JSON.parse(fs.readFileSync('ancient_batch_4.json', 'utf8'));

    let replacements = 0;
    for (let i = 0; i < batchQuestions.length; i++) {
        const qInfo = batchQuestions[i];
        const mapInfo = mappings.find(m => m.section === qInfo.section && m.index === qInfo.index);

        if (mapInfo) {
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
