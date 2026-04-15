const fs = require('fs');
const path = require('path');
const q = require('./quiz_data.js');

const destDir = path.join(__dirname, 'assets', 'images', 'history');
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const mappings = [
    {
        q: "1232年、北条泰時が定めた、御家人の権利や裁判の基準を示した日本初の武家法は？",
        a: "御成敗式目（貞永式目）",
        src: "goseibai_shikimoku_popart_1772960155764.png",
        dest: "h_medieval_1_goseibai_shikimoku.png"
    },
    {
        q: "二期作が始まり、定期市が開かれるなど、鎌倉時代の民衆の生活が向上した背景には何の発達があるか？",
        a: "農業技術",
        src: "agricultural_tech_popart_1772960169293.png",
        dest: "h_medieval_1_agricultural_tech.png"
    },
    {
        q: "鎌倉時代の農業で、西日本を中心に広まった、同じ耕地で米と麦を交互に作る農法は？",
        a: "二毛作",
        src: "nimosaku_popart_1772960182529.png",
        dest: "h_medieval_1_nimosaku.png"
    },
    {
        q: "1297年、鎌倉幕府が御家人を救うために出した、借金の帳消しを命じる法令は？",
        a: "永仁の徳政令",
        src: "tokuseirei_popart_1772960195279.png",
        dest: "h_medieval_2_tokuseirei.png"
    },
    {
        q: "朝鮮半島や中国沿岸を荒らし回った、日本の海賊集団を何というか？",
        a: "倭寇",
        src: "wako_pirates_popart_1772960208936.png",
        dest: "h_medieval_4_wako.png"
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

  // Update quiz_data.js using our reliable parse approach
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
