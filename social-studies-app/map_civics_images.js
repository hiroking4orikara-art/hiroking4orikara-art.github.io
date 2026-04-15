const fs = require('fs');
const path = require('path');

try {
    const missingCivics = JSON.parse(fs.readFileSync('missing_civics_detailed.json', 'utf8'));
    const civicsImages = JSON.parse(fs.readFileSync('civics_images_list.json', 'utf8'));

    // Group missing questions by section
    const questionsBySection = {};
    missingCivics.forEach(q => {
        if (!questionsBySection[q.section]) questionsBySection[q.section] = [];
        questionsBySection[q.section].push(q);
    });

    // Group images by prefix (e.g., g_civics_1_...)
    const imagesByPrefix = {};
    civicsImages.forEach(img => {
        // format is g_civics_NUMBER_description_timestamp.png
        const match = img.match(/^g_civics_(\d+)_/);
        if (match) {
            const num = match[1];
            if (!imagesByPrefix[num]) imagesByPrefix[num] = [];
            imagesByPrefix[num].push(img);
        }
    });
    
    // Sort images by timestamp to try matching the generation order
    Object.keys(imagesByPrefix).forEach(num => {
        imagesByPrefix[num].sort((a,b) => {
             const timeA = a.match(/_(\d+)\.png$/)[1];
             const timeB = b.match(/_(\d+)\.png$/)[1];
             return parseInt(timeA) - parseInt(timeB);
        });
    });

    console.log("Analyzing mapping possibilities...");

    const mappingToApply = [];
    
    // Civics sections generally map to c_1, c_2... etc.  Wait, the images have 1 to 50 prefixes!
    // But sections in quiz_data are c_1 to c_5 and cw_1
    // The previous generation broke Civics into 50 smaller units probably? Or does g_civics_1 map to c_1?
    
    // Let's look at missing questions in c_1:
    // c_1 has 27 missing questions.
    // g_civics_1 has 10 images. g_civics_2 has 9 images. g_civics_3 has 10 images.
    // The images are broken down by sub-unit.
    // Let's create an exact mapping using the filenames to figure out which question they belong to.
    
    // We can do this manually by reading the filenames, but there are 500 of them.
    // Let's write out the image filenames to a text file to make manual mapping easier if needed, 
    // OR we can map them automatically if we can correlate the keywords with the question descriptions.
    
    // Let's just create a quick CSV/JSON of the images with their keywords
    const imageKeywords = civicsImages.map(img => {
        const parts = img.split('_');
        const timestamp = parts.pop();
        const prefix = parts.shift() + '_' + parts.shift(); // g_civics
        const unitNum = parts.shift(); // 1, 2, ...
        const keyword = parts.join('_');
        return { filename: img, unitNum, keyword };
    });
    
    fs.writeFileSync('civics_images_keywords.json', JSON.stringify(imageKeywords, null, 2));
    console.log("Wrote image keywords to civics_images_keywords.json");
    
    // Let's check how cw_1 defines things.
    // Actually, looking at the number, cw_1 has 99 questions missing. c_1 to c_5 have around 30 each.
    // Total missing = 265 questions but we have 500 images.
    // Many images might already be applied, or some might be extras.
    
    // To be perfectly safe, since the user said "It seems they are just not mapped yet",
    // We can write a script to insert them based on prompt matching or just output the data for the LLM to analyze.

} catch(e) {
    console.error("Error:", e);
}
