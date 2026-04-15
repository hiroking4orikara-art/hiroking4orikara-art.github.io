const fs = require('fs');
const path = require('path');

try {
    const civicsImgDir = path.join(__dirname, 'assets', 'images', 'civics');
    if (!fs.existsSync(civicsImgDir)) {
        console.log("Civics image directory does not exist:", civicsImgDir);
        process.exit(1);
    }
    
    const civicsImages = fs.readdirSync(civicsImgDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
    console.log(`Found ${civicsImages.length} images in assets/images/civics/.`);
    
    // Let's get the list of missing civics questions first
    const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
    const match = quizDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
    if (!match) {
        console.log("Could not find window.QUIZ_DATA");
        process.exit(1);
    }
    const parsedData = new Function(`return ${match[1]}`)();
    
    const missingCivics = [];
    
    for (const [section, questions] of Object.entries(parsedData)) {
        if (section.startsWith('c_') || section.startsWith('cw_')) {
            questions.forEach((q, index) => {
                let hasImg = false;
                if (q.answerImg && q.answerImg.includes('assets/images/') && !q.answerImg.includes('dummy') && !q.answerImg.includes('placeholder')) hasImg = true;
                if (q.img && q.img.includes('assets/images/') && !q.img.includes('dummy') && !q.img.includes('placeholder')) hasImg = true;
                
                if (!hasImg) {
                    missingCivics.push({
                        section,
                        index,
                        q: q.q,
                        a: q.a
                    });
                }
            });
        }
    }
    
    console.log(`Found ${missingCivics.length} missing Civics questions in quiz_data.js.`);
    
    // Create a mapping strategy. 
    // The images are likely named based on the section and index, e.g., c_1_0.png, or something similar.
    // Let's check the format of the image files.
    console.log("\nSample image names:");
    civicsImages.slice(0, 10).forEach(img => console.log(img));
    
    // We want to write a script that can apply these images if a matching pattern is found.
    // Or we can just create a JSON file with the available images to analyze.
    fs.writeFileSync('civics_images_list.json', JSON.stringify(civicsImages, null, 2));
    fs.writeFileSync('missing_civics_detailed.json', JSON.stringify(missingCivics, null, 2));

} catch(e) {
    console.error("Error:", e);
}
