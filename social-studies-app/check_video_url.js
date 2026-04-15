const fs = require('fs');
try {
  const content = fs.readFileSync('quiz_data.js', 'utf-8');
  // Look for any line containing 'youtube.com' or 'video' to see the property name
  const lines = content.split('\n');
  const matches = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].toLowerCase().includes('youtube.com')) {
      matches.push(lines[i].trim());
      if (matches.length >= 5) break;
    }
  }
  if (matches.length > 0) {
    console.log('Matches found:');
    console.log(matches.join('\n'));
  } else {
    // If not found, let's output the keys of the first unit to see if there's a video property
    const matchUnit = content.match(/title:\s*["'].+?["'],[\s\S]+?\]/);
    if (matchUnit) {
      console.log('Sample unit structure:');
      console.log(matchUnit[0].substring(0, 300));
    } else {
      console.log('No matches found for youtube.com');
    }
  }
} catch (e) {
  console.error(e);
}
