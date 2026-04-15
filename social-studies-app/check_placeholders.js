const fs = require('fs');

try {
  const data = fs.readFileSync('quiz_data.js', 'utf8');
  const missingImgRegex = /img:\s*(""|''|"assets\/images\/placeholder.png"|"placeholder.png")/g;
  const matches = data.match(missingImgRegex);
  
  if (matches) {
    console.log(`Found ${matches.length} missing/placeholder images.`);
  } else {
    console.log("All images seem to be set!");
    
    // Check if there are ANY placeholders
    const anyPlaceholder = data.match(/placeholder/gi);
    if (anyPlaceholder) {
        console.log(`Found ${anyPlaceholder.length} 'placeholder' strings in the file.`);
    }
  }
} catch (e) {
  console.error("Error reading file:", e);
}
