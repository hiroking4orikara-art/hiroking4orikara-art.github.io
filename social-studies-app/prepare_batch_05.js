const fs = require('fs');
const data = JSON.parse(fs.readFileSync('all_missing_images.json', 'utf8'));
const hItems = data.filter(d => d.unit.startsWith('h_'));
const next5 = hItems.slice(0, 5).map(item => {
  const safeName = item.answer.replace(/（[^）]*）/g, '').replace(/[^\w\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/g, '').substring(0, 10);
  return {
    unit: item.unit,
    index: item.index,
    q: item.question,
    a: item.answer,
    prompt: `A colorful pop-art illustration for a history textbook representing: ${item.answer}. Context: ${item.question}. Style: vibrant colors, clear outlines, comic-book style dots, engaging, educational, simple background, NO TEXT.`,
    filename: `${item.unit}_${safeName}.png`
  };
});
fs.writeFileSync('next_batch.json', JSON.stringify(next5, null, 2));
console.log(JSON.stringify(next5, null, 2));
