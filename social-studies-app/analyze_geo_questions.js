const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');

// Regex to find geography units (starting with 'g_')
// We'll extract each question object by finding its start and end
const unitRegex = /(?:'(g_[^']+)'|"(g_[^"]+)")\s*:\s*\[([\s\S]*?)(?=\n\s*(?:'[a-z]_[^']+'|"[a-z]_[^"]+")\s*:|};)/g;

let geoQuestions = [];
let match;
while ((match = unitRegex.exec(content)) !== null) {
  const unitName = match[1] || match[2];
  const unitContent = match[3];

  const qRegex = /{\s*(?:"q"|'q'|q)\s*:\s*(["'])(.*?)\1(?:[\s\S]*?)(?:"a"|'a'|a)\s*:\s*(["'])(.*?)\3(?:[\s\S]*?)}/g;
  let qMatch;
  let index = 0;
  while ((qMatch = qRegex.exec(unitContent)) !== null) {
    const q = qMatch[2];
    const a = qMatch[4];
    
    // Check if it already has an image
    const hasImage = qMatch[0].includes('"img"') || qMatch[0].includes("'img'") || qMatch[0].includes("img:") || qMatch[0].includes('image:');

    // Simple heuristic: Does it sound like visual subject matter that wouldn't be purely a map coordinate?
    // Exclude things like "この地図のX川は？" (What is X river on this map?)
    // Exclude climate graphs (雨温図)
    const isMapReading = /(地図|グラフ|雨温図|X|Y|A|B|C|県庁所在地|緯度|経度)/.test(q);
    
    // Include things that might be good for images: food, landmarks, agriculture, industry, nature
    const isVisualCandidate = /(山|川|平野|盆地|気候|農業|工業|特産物|世界遺産|祭り|漁業|林業|島|半島|湾|海峡|畑|米|果実)/.test(q) || /(山|川|平野|盆地|半島|島|りんご|みかん|茶)/.test(a);

    geoQuestions.push({
      unit: unitName,
      index: index++,
      q: q,
      a: a,
      hasImage: hasImage,
      isMapReading: isMapReading,
      isVisualCandidate: isVisualCandidate
    });
  }
}

const total = geoQuestions.length;
const alreadyHasImage = geoQuestions.filter(q => q.hasImage).length;
const needsImageCandidate = geoQuestions.filter(q => !q.hasImage && q.isVisualCandidate && !q.isMapReading).length;
const purelyMapReading = geoQuestions.filter(q => q.isMapReading).length;

console.log(`--- Geography Questions Analysis ---`);
console.log(`Total Geography Questions: ${total}`);
console.log(`Already have images (usually maps): ${alreadyHasImage}`);
console.log(`Pure map reading/graph questions: ${purelyMapReading}`);
console.log(`\nPotential candidates for new generation (cultural, natural, agricultural, landmarks): ${needsImageCandidate}`);

// Save candidates to review
const candidates = geoQuestions.filter(q => !q.hasImage && q.isVisualCandidate && !q.isMapReading);
fs.writeFileSync('geo_image_candidates.json', JSON.stringify(candidates, null, 2));

console.log(`\nSample Candidates:`);
candidates.slice(0, 5).forEach(c => {
  console.log(`Q: ${c.q}\nA: ${c.a}\n`);
});
