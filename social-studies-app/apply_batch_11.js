const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\fca36d2f-56ab-44a3-830a-28795ea17e04';
const destDir = 'modern_history_images';

const mappings = [
  {
    src: 'godaigo_emperor_popart_1772936288113.png',
    dest: 'h_medieval_2_godaigo.png',
    q: '鎌倉幕府に不満を持つ武士たちを呼びかけ、1333年に鎌倉幕府を滅亡に追い込んだ天皇は？',
    a: '後醍醐天皇',
    unit: 'h_medieval_2'
  },
  {
    src: 'ashikaga_takauji_popart_1772936304709.png',
    dest: 'h_medieval_2_ashikaga.png',
    q: '後醍醐天皇の呼びかけに応じ、六波羅探題を攻め落とした有力御家人は？',
    a: '足利尊氏',
    unit: 'h_medieval_2'
  },
  {
    src: 'nitta_yoshisada_popart_1772936321205.png',
    dest: 'h_medieval_2_nitta.png',
    q: '後醍醐天皇の呼びかけに応じ、鎌倉に攻め込んで北条氏を滅ぼした有力御家人は？',
    a: '新田義貞',
    unit: 'h_medieval_2'
  },
  {
    src: 'kamikaze_storm_popart_1772936339598.png',
    dest: 'h_medieval_2_kamikaze.png',
    q: '元寇の際、日本軍の防備を助けたとされる、二度とも吹いた暴風雨を何と呼んだか？',
    a: '神風',
    unit: 'h_medieval_2'
  },
  {
    src: 'stone_defense_wall_1772936359196.png',
    dest: 'h_medieval_2_bourui.png',
    q: '元寇防備のために九州北部の海岸に築かれた、石で作られた防壁は？',
    a: '防塁（石築地）',
    unit: 'h_medieval_2'
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
console.log('Finished applying batch 1');
