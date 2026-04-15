const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\c5dae31d-2261-4cab-86f6-e217b26cf303';
const targetDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\assets\\images\\history';

// The 13 targets
const targets = [
  { q: "1868年、天皇中心の新しい政府を作るために定められた、政治の基本方針は？", filename: "h_meiji_charter_oath_1773375454921.png" },
  { q: "征韓論に敗れて政府を去り、高知で立志社を作って自由民権運動を始めた人物は？", filename: "h_itagaki_taisuke_1773375469902.png" },
  { q: "大日本帝国憲法において、国民（臣民）の権利はどのように規定されていたか？", filename: "h_meiji_constitution_rights_1773375484380.png" },
  { q: "1886年、イギリス船が沈没した際に、日本人乗客が見殺しにされた事件は？", filename: "h_normanton_incident_1773375497759.png" },
  { q: "日清戦争の頃に軽工業（製糸・紡績）が、日露戦争の頃に重工業が発展したことを何というか？", filename: "h_japan_industrial_revolution_1773375512035.png" },
  { q: "米ぬかからオリザニン（ビタミンB1）を発見し、脚気の予防に貢献した人物は？", filename: "h_suzuki_umetaro_1773375525634.png" },
  { q: "「悲母観音」を描き、岡倉天心とともに日本画の改革に努めた画家は？", filename: "h_kano_hogai_1773375547428.png" },
  { q: "ロダンの影響を受け、「女」などの作品を残した近代彫刻の先駆者は？", filename: "h_ogiwara_morie_1773375561178.png" },
  { q: "1911年に起こった辛亥革命の中心人物で、「三民主義」を唱えたのは？", filename: "h_sun_yat_sen_1773375576470.png" },
  { q: "「青鞜」を発刊し、「元始、女性は太陽であった」と平塚らいてうらが訴えた運動は？", filename: "h_womens_liberation_1773375591562.png" },
  { q: "1925年に制定された、満25歳以上のすべての男子に選挙権を与えた法律は？", filename: "h_universal_suffrage_1773375604435.png" },
  { q: "普通選挙法と同時に制定された、社会主義運動などを取り締まる法律は？", filename: "h_peace_preservation_law_1773375622564.png" },
  { q: "平塚らいてうとともに新婦人協会を設立し、戦後も女性の地位向上に尽くした人物は？", filename: "h_ichikawa_fusae_1773375636600.png" }
];

let applied = 0;

// Read quiz_data.js
let quizData = fs.readFileSync('quiz_data.js', 'utf8');

for (const t of targets) {
  // Move file
  const sourceFile = path.join(sourceDir, t.filename);
  // Optional: rename it without timestamp for cleaner names, or keep it. Let's keep it exact so there's no mismatch.
  const targetFile = path.join(targetDir, t.filename);
  
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`Copied ${t.filename}`);
  } else if (fs.existsSync(targetFile)) {
    console.log(`Already exists: ${t.filename}`);
  } else {
    console.log(`Missing source file: ${t.filename}`);
    continue;
  }

  // Update quiz_data.js
  const qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const qRegex = new RegExp(`({\\s*["']?q["']?\\s*:\\s*["']${qEscaped}["'][^}]*?)(\\s*})`);
  
  if (qRegex.test(quizData)) {
    // Check if it already has an image
    const match = quizData.match(qRegex);
    if (!match[0].includes('img":') && !match[0].includes("img':")) {
      const imgPath = `assets/images/history/${t.filename}`;
      const insertStr = `,\n        "img": "${imgPath}",\n        "imgCaption": "※画像はイメージです"`;
      
      quizData = quizData.replace(qRegex, `$1${insertStr}$2`);
      applied++;
      console.log(`Applied to: ${t.q}`);
    } else {
      console.log(`Image already present for: ${t.q}`);
    }
  } else {
    console.log(`Could not find question piece: ${t.q}`);
  }
}

fs.writeFileSync('quiz_data.js', quizData);
console.log(`Total applied: ${applied}`);
