const fs = require('fs');

const mappingFile = fs.readFileSync('temp_mapping.json', 'utf8');
const mappings = JSON.parse(mappingFile).found;

let quizData = fs.readFileSync('quiz_data.js', 'utf8');
let applyCount = 0;

mappings.forEach(m => {
    let qEscaped = m.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
    
    // Ensure not already applied
    if (!quizData.includes(m.newPath)) {
        // Also check if it already has an image tag
        const checkRegex = new RegExp(`q:\\s*["']${qEscaped}["'][^}]*?image:\\s*["']`);
        if (!checkRegex.test(quizData)) {
            quizData = quizData.replace(blockRegex, `$1,\n            image: "${m.newPath}"\n        $2`);
            applyCount++;
        }
    }
});

fs.writeFileSync('quiz_data.js', quizData, 'utf8');
console.log(`Applied ${applyCount} mappings.`);
