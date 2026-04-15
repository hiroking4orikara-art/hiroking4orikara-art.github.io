const fs = require('fs');
const path = require('path');

const destDir = 'modern_history_images';
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

// Map the items
const mappings = [
    {
        q: "建武の新政に不満を持つ武士を率いて反乱を起こし、1338年に征夷大将軍となって幕府を開いた人物は？",
        a: "足利尊氏",
        src: "h_medieval_2_ashikaga.png",
        dest: "h_medieval_4_ashikaga_takauji.png",
        isExisting: true
    },
    {
        q: "足利尊氏が京都に立てた北朝と、後醍醐天皇が奈良の吉野に逃れて立てた南朝が対立し、約60年間争った時代を何というか？",
        a: "南北朝時代",
        src: "nanbokucho_period_popart_1772958319869.png",
        dest: "h_medieval_4_nanbokucho.png"
    },
    {
        q: "南北朝の動乱を終わらせ、1392年に南北朝を統一した室町幕府の第3代将軍は？",
        a: "足利義満",
        src: "ashikaga_yoshimitsu_popart_1772958334279.png",
        dest: "h_medieval_4_ashikaga_yoshimitsu.png"
    },
    {
        q: "室町幕府において、将軍を補佐する役職を何というか？",
        a: "管領",
        src: "kanrei_deputy_popart_1772958257054.png",
        dest: "h_medieval_4_kanrei.png"
    },
    {
        q: "鎌倉時代の守護が力を強め、一国全体を支配するようになった大名を何というか？",
        a: "守護大名",
        src: "shugo_daimyo_popart_1772958268645.png",
        dest: "h_medieval_4_shugo_daimyo.png"
    },
    {
        q: "足利義満が中国（明）との間で行った、正式な貿易船に合い札を持たせた貿易を何というか？",
        a: "勘合貿易（日明貿易）",
        src: "kango_boueki_popart_1772958283238.png",
        dest: "h_medieval_4_kango_boueki.png"
    }
];

// I'll add the remaining 2 once generated!

let content = fs.readFileSync('quiz_data.js', 'utf8');

mappings.forEach(m => {
  const srcPath = m.isExisting ? path.join(destDir, m.src) : path.join('C:\\Users\\hirok\\.gemini\\antigravity\\brain\\026bfc53-a819-4187-b10e-7405ed25152a', m.src);
  const destPath = path.join(destDir, m.dest);
  
  if (!m.isExisting) {
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log('Copied ' + m.src + ' to ' + destPath);
    } else {
        console.error('Missing source image: ' + srcPath);
        return;
    }
  } else {
    // If we're reusing an existing image within the same directory but want a new name, copy it.
    if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log('Copied ' + m.src + ' to ' + destPath);
    }
  }

  const qEscaped = m.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const aEscaped = m.a.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(`({[^}]*?q:\\s*['"]${qEscaped}['"][^}]*?a:\\s*['"]${aEscaped}['"][^}]*?)(})`);
  
  if (regex.test(content)) {
      if (!new RegExp(`q:\\s*['"]${qEscaped}['"][^}]*?img:\\s*['"]`).test(content)) {
          content = content.replace(regex, `$1, img: '${destDir}/${m.dest}' $2`);
          console.log('Updated entry in quiz_data.js for ' + m.a);
      } else {
          console.log('Warning: Image already exists for ' + m.a);
      }
  } else {
      console.log('Error: Could not find entry in quiz_data.js for ' + m.a);
  }
});

fs.writeFileSync('quiz_data.js', content);
console.log('Finished applying batch');
