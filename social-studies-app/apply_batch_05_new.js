const fs = require('fs');
const path = require('path');

const destDir = 'modern_history_images';
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

const mappings = [
    {
        q: "現在発見されている最も古い人類の祖先（猿人）として、アフリカで骨が発見されたものを何というか？",
        a: "アウストラロピテクス",
        src: "australopithecus_popart_1772958565907.png",
        dest: "h_ancient_1_australopithecus.png"
    },
    {
        q: "氷河期などの厳しい環境に適応し、火や言葉を使用し始めた人類（原人）は？",
        a: "北京原人",
        src: "peking_man_popart_1772958579364.png",
        dest: "h_ancient_1_peking_man.png"
    },
    {
        q: "現在の人類の直接の祖先にあたる人類（新人）で、フランスで洞窟壁画などが発見されたのは？",
        a: "クロマニョン人",
        src: "cromagnon_man_popart_1772958637863.png",
        dest: "h_ancient_1_cromagnon.png"
    },
    {
        q: "奈良時代、重い税や労役の負担に耐えかねて、農民が口分田を捨てて逃げ出したことを何というか？",
        a: "逃散",
        src: "chosan_fleeing_popart_1772958653121.png",
        dest: "h_ancient_7_chosan.png"
    },
    {
        q: "天皇や貴族だけでなく、防人や農民の歌も収められている、日本最古の和歌集は？",
        a: "万葉集",
        src: "manyoshu_popart_1772958670520.png",
        dest: "h_ancient_7_manyoshu.png"
    }
];

let content = fs.readFileSync('quiz_data.js', 'utf8');

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
console.log('Finished applying batch 5');
