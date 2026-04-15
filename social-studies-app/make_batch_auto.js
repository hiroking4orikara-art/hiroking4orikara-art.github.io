const fs = require('fs');

const missingData = JSON.parse(fs.readFileSync('missing_after_assets.json', 'utf8'));
const batch = missingData.slice(0, 10);

console.log('--- PROMPTS ---');
const mappings = [];

batch.forEach((item, index) => {
    // create English identifier
    const identifier = item.a.replace(/（[^）]*）/g, '') // remove parens
                          .replace(/[^\w\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]/g, '') // remove non-alphanumeric/kana/kanji
                          .substring(0, 10);
    
    // We will use a generic name like imgX for the tool call
    const toolImageName = `img_batch_13_${index}`;
    const finalDest = `${item.unit}_${identifier}.png`.replace(/[^\w.-]/g, '_'); // safe filename
    
    console.log(`\nItem ${index + 1}: ${item.a}`);
    console.log(`toolImageName: ${toolImageName}`);
    console.log(`Prompt: A colorful pop-art illustration for a history textbook representing: ${item.a}. Context: ${item.q}. Style: vibrant colors, clear outlines, comic-book style dots, engaging, educational, simple background, NO TEXT.`);

    mappings.push({
        toolName: toolImageName,
        dest: finalDest,
        q: item.q,
        a: item.a,
        unit: item.unit
    });
});

console.log('\n--- MAPPINGS FOR NEXT SCRIPT ---');
console.log(JSON.stringify(mappings, null, 2));

const applyScriptTemplate = `
const fs = require('fs');
const path = require('path');

const destDir = 'modern_history_images';
const srcDir = 'C:\\\\Users\\\\hirok\\\\.gemini\\\\antigravity\\\\brain\\\\fca36d2f-56ab-44a3-830a-28795ea17e04';

const mappings = ${JSON.stringify(mappings, null, 2)};

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

// 1. You must update mapping's "src" with the actual generated filename string manually before running!
// Example: src: 'img_batch_13_0_1234567.png'

let content = fs.readFileSync('quiz_data.js', 'utf8');

mappings.forEach(m => {
  if(!m.src) { console.error('MISSING SRC FOR ' + m.a); return; }
  const srcPath = path.join(srcDir, m.src);
  const destPath = path.join(destDir, m.dest);
  
  if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log('Copied ' + m.src + ' to ' + destPath);
  } else {
      console.error('Missing source image: ' + srcPath);
  }

  const qEscaped = m.q.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');
  const aEscaped = m.a.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, '\\\\$&');
  const regex = new RegExp(\`({[^}]*?q:\\\\s*['"]\${qEscaped}['"][^}]*?a:\\\\s*['"]\${aEscaped}['"][^}]*?)(})\`);
  const checkRegex = new RegExp(\`q:\\\\s*['"]\${qEscaped}['"][^}]*?image:\\\\s*['"]\`);
  
  if (checkRegex.test(content)) {
      console.log('Warning: Image already exists for ' + m.a);
  } else {
      if (regex.test(content)) {
          content = content.replace(regex, \`$1, image: '\${destDir}/\${m.dest}' $2\`);
          console.log('Updated entry in quiz_data.js for ' + m.a);
      } else {
          console.log('Error: Could not find entry in quiz_data.js for ' + m.a);
      }
  }
});

fs.writeFileSync('quiz_data.js', content);
console.log('Finished applying batch');
`;

fs.writeFileSync('apply_batch_auto.js', applyScriptTemplate);
console.log('\nGenerated apply_batch_auto.js. Please fill in the src fields after generating images.');
