const fs = require('fs');

const missingData = JSON.parse(fs.readFileSync('missing_history_images.json', 'utf8'));

// We have 175 images. 0-9 were done. Let's grab 10-24.
const batch = missingData.slice(10, 25);
let prompts = [];

batch.forEach(item => {
    const keyword = item.a;
    const qText = item.q;
    const expectedFileName = `${item.unit}_${keyword.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`;
    
    prompts.push({
        unit: item.unit,
        keyword: keyword,
        context: qText,
        filename: expectedFileName
    });
});

fs.writeFileSync('next_prompts.json', JSON.stringify(prompts, null, 2));
