const fs = require('fs');
const path = require('path');
const q = require('./quiz_data.js');

const destDir = path.join(__dirname, 'assets', 'images', 'history');
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Only the first two succeeded before the quota exhausted
const mappings = [
    {
        q: "15世紀初め、沖縄本島を統一し、琉球王国を建国した人物は？",
        a: "尚巴志",
        src: "shohashi_popart_1772960262475.png",
        dest: "h_medieval_5_shohashi.png"
    },
    {
        q: "琉球王国が、日本・中国・東南アジアの間で行った、各国の産物をやり取りする貿易を何というか？",
        a: "中継貿易",
        src: "chukei_boueki_popart_1772960273265.png",
        dest: "h_medieval_5_chukei_boueki.png"
    }
];

let appliedCount = 0;

mappings.forEach(m => {
  const srcPath = path.join('C:\\Users\\hirok\\.gemini\\antigravity\\brain\\026bfc53-a819-4187-b10e-7405ed25152a', m.src);
  const destPath = path.join(destDir, m.dest);
  
  if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log('Copied ' + m.src + ' to ' + destPath);
  } else {
      console.error('Missing source image: ' + srcPath);
      return;
  }

  for (const unit in q) {
      if (!unit.startsWith('h_')) continue;
      q[unit].forEach(item => {
          if (item.q === m.q && (!item.img)) {
              item.img = `assets/images/history/${m.dest}`;
              appliedCount++;
          }
      });
  }
});

function stringifyQuizData(data) {
    let out = 'const quizData = {\n';
    for (const [unit, items] of Object.entries(data)) {
        out += `    "${unit}": [\n`;
        items.forEach(item => {
            out += '        {\n';
            out += `            q: ${JSON.stringify(item.q)},\n`;
            if (item.choices) out += `            choices: ${JSON.stringify(item.choices)},\n`;
            out += `            a: ${JSON.stringify(item.a)},\n`;
            if (item.img) out += `            img: "${item.img}",\n`;
            if (item.comment) {
                out += `            comment: ${JSON.stringify(item.comment)}\n`;
            } else {
                out = out.replace(/,\n$/, '\n');
            }
            out += '        },\n';
        });
        out += `    ],\n`;
    }
    out += '};\n\ntry {\n    module.exports = quizData;\n} catch(e) {}\n';
    return out;
}

if (appliedCount > 0) {
    fs.writeFileSync('quiz_data.js', stringifyQuizData(q));
    console.log(`Successfully mapped ${appliedCount} images to quiz_data.js`);
} else {
    console.log('No new mappings were needed.');
}
