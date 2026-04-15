const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\c5dae31d-2261-4cab-86f6-e217b26cf303';
const targetDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\assets\\images\\geography';

const targets = [
  { q: "世界で最も広い海洋はどれか？", filename: "g_gw_1_0_pacific_1773376211209.png" },
  { q: "モンゴルの遊牧民が移動生活で使用する組み立て式の住居を何というか？", filename: "g_gw_1_1_ger_1773376225399.png" },
  { q: "赤道周辺に広がる、一年中気温が高く雨が多い気候帯は？", filename: "g_gw_1_2_tropical_1773376240404.png" },
  { q: "樹木が育たないほど雨が少ない気候帯は？", filename: "g_gw_1_3_dry_1773376252908.png" },
  { q: "日本が属している、四季の変化がはっきりしている気候帯は？", filename: "g_gw_1_4_temperate_1773376264811.png" },
  { q: "寒帯のうち、短い夏にコケ類のみが育つ気候を何というか？", filename: "g_gw_1_5_tundra_1773376278600.png" },
  { q: "熱帯のうち、雨季と乾季がはっきり分かれ、背の高い草が生える気候は？", filename: "g_gw_1_6_savanna_1773376290331.png" },
  { q: "地中海沿岸の家々で、壁を白く塗ったり石造りにしたりする理由は？", filename: "g_gw_1_7_mediterranean_houses_1773376305008.png" },
  { q: "北緯40度以北の都市が多いヨーロッパで、冬でも比較的暖かい理由に関係する海流は？", filename: "g_gw_1_8_north_atlantic_drift_1773376317324.png" },
  { q: "三大洋に含まれない海洋は？", filename: "g_gw_1_9_arctic_ocean_1773376331985.png" }
];

let applied = 0;
let quizData = fs.readFileSync('quiz_data.js', 'utf8');

for (const t of targets) {
  const sourceFile = path.join(sourceDir, t.filename);
  const targetFile = path.join(targetDir, t.filename);
  
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`Copied ${t.filename}`);
  } else {
    console.log(`Missing source file: ${t.filename}`);
    continue;
  }

  // Update quiz_data.js
  const qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const qRegex = new RegExp(`({\\s*["']?q["']?\\s*:\\s*["']${qEscaped}["'][^}]*?)(\\s*})`);
  
  if (qRegex.test(quizData)) {
    const match = quizData.match(qRegex);
    if (!match[0].includes('answerImg":') && !match[0].includes("answerImg':")) {
      const imgPath = `assets/images/geography/${t.filename}`;
      const insertStr = `,\n        "answerImg": "${imgPath}",\n        "answerImgCaption": "※画像はイメージです"`;
      
      quizData = quizData.replace(qRegex, `$1${insertStr}$2`);
      applied++;
      console.log(`Applied answerImg to: ${t.q}`);
    } else {
      console.log(`answerImg already present for: ${t.q}`);
    }
  } else {
    console.log(`Could not find question piece: ${t.q}`);
  }
}

fs.writeFileSync('quiz_data.js', quizData);
console.log(`Total applied: ${applied}`);
