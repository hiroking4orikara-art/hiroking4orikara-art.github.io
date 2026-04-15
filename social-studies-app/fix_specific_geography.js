const fs = require('fs');

let qz = fs.readFileSync('quiz_data.js', 'utf8');

// Instead of parsing the whole AST which might fail, let's use exact string replacements
// by finding the target answers.

const targets = [
    { a: "世界遺産", img: "g_geo_world_heritage_fixed.png" },
    { a: "鹿児島県", img: "g_special_kagoshima_blank_1773760535098.png" },
    { a: "地中海性気候", img: "g_special_mediterranean_climate_1773760512743.png" },
    { a: "ユーラシア大陸", img: "g_special_eurasia_map_1773760492277.png" }
];

let replacedCount = 0;

targets.forEach(t => {
    // We want to replace answerImg / img specifically for these questions.
    // They are Geography questions.
    
    // We will find `a: "TARGET"` and replace the surrounding `answerImg: "..."` and `img: "..."` if they exist,
    // or insert if they don't, but since they had *wrong* images, they likely have `answerImg: "..."` already.
    
    // First, let's try to find blocks that have `a: "TARGET"`
    const regexStr = `(q:\\s*".*?"[\\s\\S]*?a:\\s*"${t.a}"[\\s\\S]*?\\})`;
    const blockRegex = new RegExp(regexStr, 'g');
    
    qz = qz.replace(blockRegex, (match) => {
        let newMatch = match;
        // Replace answerImg
        const ansImgRegex = /answerImg:\s*"[^"]+"/;
        if (ansImgRegex.test(newMatch)) {
            newMatch = newMatch.replace(ansImgRegex, `answerImg: "assets/images/geography/${t.img}"`);
        } else {
             // If no answerImg, add it before comment or end
             newMatch = newMatch.replace(/(\s*)(comment:\\s*".*?"|\\})$/, `$1answerImg: "assets/images/geography/${t.img}",$1$2`);
        }
        
        // Some of them (like Eurasia or Kagoshima map questions) also have `img: "..."` as the question image!
        if (t.a === "鹿児島県" || t.a === "ユーラシア大陸" || t.a === "地中海性気候") {
            const imgRegex = /img:\s*"[^"]+"/;
            if (imgRegex.test(newMatch)) {
                newMatch = newMatch.replace(imgRegex, `img: "assets/images/geography/${t.img}"`);
            }
        }
        
        if (newMatch !== match) replacedCount++;
        return newMatch;
    });
});

fs.writeFileSync('quiz_data.js', qz, 'utf8');
console.log(`Replaced Geography images: ${replacedCount}`);
