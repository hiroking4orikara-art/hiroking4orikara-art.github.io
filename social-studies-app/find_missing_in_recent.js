const fs = require('fs');

try {
  const data = fs.readFileSync('quiz_data.js', 'utf8');
  
  // extract h_modern_5 through h_contemporary_6
  const regex = /"(h_modern_5|h_modern_6|h_modern_7|h_contemporary_1|h_contemporary_2|h_contemporary_3|h_contemporary_4|h_contemporary_5|h_contemporary_6)":\s*\[(.*?)\](?=\n\s*"h_|$)/gs;
  
  let match;
  let missingImages = [];
  
  while ((match = regex.exec(data)) !== null) {
    const unitName = match[1];
    const unitContent = match[2];
    
    // Parse objects inside unit
    const qRegex = /{\s*q:(.*?),\s*a:(.*?),\s*(img:(.*?),)?[^}]*}/g;
    let qMatch;
    
    while ((qMatch = qRegex.exec(unitContent)) !== null) {
      if (!qMatch[3] || qMatch[4].trim() === '""' || qMatch[4].trim() === "''") {
         missingImages.push({ unit: unitName, q: qMatch[1].trim() });
      }
    }
  }
  
  console.log(`Found ${missingImages.length} missing images in modern/contemporary units.`);
  if (missingImages.length > 0) {
      console.log(missingImages);
      fs.writeFileSync('missing_modern_contemporary.json', JSON.stringify(missingImages, null, 2));
  }
} catch (e) {
  console.error(e);
}
