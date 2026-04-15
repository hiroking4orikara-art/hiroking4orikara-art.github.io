const fs = require('fs');
const missingData = JSON.parse(fs.readFileSync('missing_history_images.json', 'utf8'));

// Get the next 10 images
const batch = missingData.slice(2, 12);

batch.forEach(item => {
    const keyword = item.a;
    const qText = item.q;
    
    let answerText = typeof keyword === 'object' ? keyword[0] : keyword;
    
    const prompt = `A colorful pop-art illustration for a history textbook representing: ${answerText} - ${qText}. Style: vibrant colors, clear outlines, comic-book style dots, engaging, educational, simple background, NO TEXT.`;

    // Try to guess English name for image file
    // I can't guess easily, so let's just use the index or a transliterated name
    console.log(`Answer: ${answerText}`);
    console.log(`Prompt: ${prompt}\n`);
});
