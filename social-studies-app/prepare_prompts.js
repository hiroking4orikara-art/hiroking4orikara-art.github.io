const fs = require('fs');

const missingData = JSON.parse(fs.readFileSync('missing_history_images.json', 'utf8'));

// We have 238 images to generate. Let's do a small batch of 5 to test first.
const batch = missingData.slice(0, 5);

batch.forEach(item => {
    // Generate a good prompt
    // For h_medieval_1, index 11: 御成敗式目（貞永式目）
    const keyword = item.a;
    const qText = item.q;
    
    const prompt = `A colorful pop-art illustration for a history textbook representing: ${keyword}. 
    Context: ${qText}.
    Style: vibrant colors, clear outlines, comic-book style dots, engaging, educational, simple background, NO TEXT.`;

    const expectedFileName = `${item.unit}_${keyword.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`;
    
    console.log(`Prompt for ${keyword}: ${prompt}`);
    console.log(`Suggested Filename: ${expectedFileName}\n`);
});
