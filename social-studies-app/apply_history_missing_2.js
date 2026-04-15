const fs = require('fs');
const path = require('path');

try {
    const generatedImages = [
        { name: "h_modern_4_kuroda_seiki", ext: "png", section: "h_modern_4", index: 14 },
        { name: "h_modern_5_kome_sodo", ext: "png", section: "h_modern_5", index: 6 },
        { name: "h_modern_5_taisho_democracy", ext: "png", section: "h_modern_5", index: 10 },
        { name: "h_contemporary_1_sengo_kaikaku", ext: "png", section: "h_contemporary_1", index: 0 },
        { name: "h_contemporary_1_tenno_shocho", ext: "png", section: "h_contemporary_1", index: 4 },
        { name: "h_contemporary_1_article_9_renunciation_of_war", ext: "png", section: "h_contemporary_1", index: 5 },
        { name: "h_contemporary_2_keisatsu_yobitai", ext: "png", section: "h_contemporary_2", index: 2 },
        { name: "h_contemporary_3_kankyocho", ext: "png", section: "h_contemporary_3", index: 7 },
        { name: "h_contemporary_4_malta_conference", ext: "png", section: "h_contemporary_4", index: 3 },
        { name: "h_contemporary_5_rachi_mondai", ext: "png", section: "h_contemporary_5", index: 8 },
        { name: "h_contemporary_5_futenma", ext: "png", section: "h_contemporary_5", index: 9 },
        { name: "h_contemporary_5_senkaku_shoto", ext: "png", section: "h_contemporary_5", index: 10 }
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
