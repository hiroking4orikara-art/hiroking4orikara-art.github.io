const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\fca36d2f-56ab-44a3-830a-28795ea17e04';
const destDir = 'modern_history_images';

const mappings = [
  {
    src: 'img_batch_13_0_1772936599474.png',
    dest: 'h_medieval_3_honen.png',
    q: '「南無阿弥陀仏」と唱えるだけで救われる（専修念仏）と説き、浄土宗を開いたのは？',
    a: '法然',
    unit: 'h_medieval_3'
  },
  {
    src: 'img_batch_13_1_1772936622869.png',
    dest: 'h_medieval_3_shinran.png',
    q: '法然の弟子で、悪人こそが救われるという「悪人正機」を説き、浄土真宗（一向宗）を開いたのは？',
    a: '親鸞',
    unit: 'h_medieval_3'
  },
  {
    src: 'img_batch_13_2_1772936641653.png',
    dest: 'h_medieval_3_ippen.png',
    q: '踊念仏によって教えを広め、時宗を開いたのは？',
    a: '一遍',
    unit: 'h_medieval_3'
  },
  {
    src: 'img_batch_13_3_1772936657167.png',
    dest: 'h_medieval_3_nichiren.png',
    q: '「南無妙法蓮華経」という題目を唱えれば救われると説き、日蓮宗（法華宗）を開いたのは？',
    a: '日蓮',
    unit: 'h_medieval_3'
  },
  {
    src: 'img_batch_13_4_1772936680259.png',
    dest: 'h_medieval_3_eisai.png',
    q: '座禅によって悟りを開こうとする「禅宗」の一つ、臨済宗を日本に伝えたのは？',
    a: '栄西',
    unit: 'h_medieval_3'
  },
  {
    src: 'img_batch_13_5_1772936697379.png',
    dest: 'h_medieval_3_dogen.png',
    q: '座禅にひたすら打ち込む（只管打坐）ことを説き、曹洞宗を伝えたのは？',
    a: '道元',
    unit: 'h_medieval_3'
  },
  {
    src: 'img_batch_13_6_1772936714143.png',
    dest: 'h_medieval_4_kenmu.png',
    q: '鎌倉幕府の滅亡後、後醍醐天皇が始めた、天皇中心の政治を何というか？',
    a: '建武の新政',
    unit: 'h_medieval_4'
  }
];

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

// Copy files
mappings.forEach(m => {
  const srcPath = path.join(srcDir, m.src);
  const destPath = path.join(destDir, m.dest);
  if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${m.src} to ${destPath}`);
  } else {
      console.error(`Missing source image: ${srcPath}`);
  }
});

// Update quiz_data.js
let content = fs.readFileSync('quiz_data.js', 'utf8');

mappings.forEach(m => {
    const qEscaped = m.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const aEscaped = m.a.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    const regex = new RegExp(`({[^}]*?q:\\s*['"]${qEscaped}['"][^}]*?a:\\s*['"]${aEscaped}['"][^}]*?)(})`);
    const checkRegex = new RegExp(`q:\\s*['"]${qEscaped}['"][^}]*?image:\\s*['"]`);
    
    if (checkRegex.test(content)) {
        console.log(`Warning: Image already exists for ${m.a}`);
    } else {
        if (regex.test(content)) {
            content = content.replace(regex, `$1, image: '${destDir}/${m.dest}' $2`);
            console.log(`Updated entry in quiz_data.js for ${m.a}`);
        } else {
            console.log(`Error: Could not find entry in quiz_data.js for ${m.a}`);
        }
    }
});

fs.writeFileSync('quiz_data.js', content);
console.log('Finished applying batch 13');
