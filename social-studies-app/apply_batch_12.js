const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\fca36d2f-56ab-44a3-830a-28795ea17e04';
const destDir = 'modern_history_images';

const mappings = [
  {
    src: 'marco_polo_popart_1772936425977.png',
    dest: 'h_medieval_2_marcopolo.png',
    q: 'イタリアの商人で、フビライ・ハンに仕え、帰国後に『世界の記述（東方見聞録）』で日本を「黄金の国ジパング」と紹介した人物は？',
    a: 'マルコ・ポーロ',
    unit: 'h_medieval_2'
  },
  {
    src: 'ikki_uchi_popart_1772936444046.png',
    dest: 'h_medieval_2_ikkiuchi.png',
    q: '元寇の際、集団戦法をとる元軍に対し、日本軍がとった戦法は？',
    a: '一騎打ち',
    unit: 'h_medieval_2'
  },
  {
    src: 'einin_tokuseirei_popart_1772936463437.png',
    dest: 'h_medieval_2_einin.png',
    q: '1297年、鎌倉幕府が御家人を救うために出した、借金の帳消しを命じる法令は？',
    a: '永仁の徳政令',
    unit: 'h_medieval_2'
  },
  {
    src: 'akutou_outlaws_popart_1772936479790.png',
    dest: 'h_medieval_2_akutou.png',
    q: '鎌倉時代末期、荘園領主や幕府に従わず、年貢を奪うなどの乱暴を働いた武装集団を何というか？',
    a: '悪党',
    unit: 'h_medieval_2'
  },
  {
    src: 'shinkokin_wakashu_popart_1772936499726.png',
    dest: 'h_medieval_3_shinkokin.png',
    q: '後鳥羽上皇の命で藤原定家らが編集した、巧みな表現の和歌集は？',
    a: '新古今和歌集',
    unit: 'h_medieval_3'
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
console.log('Finished applying batch 2');
