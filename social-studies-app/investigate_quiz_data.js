const fs = require('fs');
const vm = require('vm');

try {
  const code = fs.readFileSync('quiz_data.js', 'utf8');
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context);
  
  const data = context.window.QUIZ_DATA;
  console.log("Categories:", Object.keys(data));
  
  // Look at History (歴史)
  if (data['歴史'] && data['歴史'].length > 0) {
    console.log("First History unit keys:", Object.keys(data['歴史'][0]));
    console.log("First History unit snippet:", JSON.stringify(data['歴史'][0], null, 2).substring(0, 300));
  }
  
  // Check what video URL property exists in Civics maybe? The user mentioned Civics already has them, or the user wants to add them now.
  let videoProp = null;
  if(data['公民'] && data['公民'].length > 0) {
      const gKeys = Object.keys(data['公民'][0]);
      console.log("First Civics unit keys:", gKeys);
      if(data['公民'][0].video_url) console.log("Civics has video_url");
      if(data['公民'][0].videoUrl) console.log("Civics has videoUrl");
      if(data['公民'][0].youtube) console.log("Civics has youtube");
  }
} catch (e) {
  console.error("Error parsing quiz_data.js:", e.message);
}
