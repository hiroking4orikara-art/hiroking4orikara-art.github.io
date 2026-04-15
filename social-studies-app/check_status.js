const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let content = fs.readFileSync(quizDataPath, 'utf-8');

// Extract the array string from "const quizData = [ ... ];"
const match = content.match(/const\s+quizData\s*=\s*(\[[\s\S]*\]);?/);
if (!match) {
    console.log("Could not find quizData array in the file.");
    process.exit(1);
}

try {
    // A bit hacky: we use Function to evaluate it rather than JSON.parse since it's JS, not JSON.
    const quizData = new Function(`return ${match[1]}`)();
    
    // Count questions by category and image presence
    let civicsCount = 0;
    let civicsWithImages = 0;

    // The categories are mixed, let's find the Civics category.
    // It seems the structure is array of { category: "...", questions: [...] }
    const civicsCategory = quizData.find(c => c.category === "公民");
    
    if (civicsCategory) {
        civicsCount = civicsCategory.questions.length;
        civicsCategory.questions.forEach((q, index) => {
            if (q.comment && q.comment.includes("assets/images/civics/")) {
                civicsWithImages++;
            }
        });
        console.log(`Civics Questions Total: ${civicsCount}`);
        console.log(`Civics Questions with images: ${civicsWithImages}`);
    } else {
        console.log("Could not find '公民' category.");
    }

} catch (e) {
    console.error("Error parsing quizData:", e);
}
