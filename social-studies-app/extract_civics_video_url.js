const fs = require('fs');
try {
  const datajs = fs.readFileSync('data.js', 'utf8');
  if (datajs.includes('youtube') || datajs.includes('video')) {
    console.log("Found video/youtube in data.js");
  } else {
    console.log("No video/youtube found in data.js");
  }

  const scriptjs = fs.readFileSync('script.js', 'utf8');
  const videoLines = scriptjs.split('\n').filter(l => l.toLowerCase().includes('youtube') || l.toLowerCase().includes('shorts') || l.toLowerCase().includes('video'));
  console.log("Matches in script.js (first 5):");
  console.log(videoLines.slice(0, 5).join('\n'));

} catch (e) { console.error(e); }
