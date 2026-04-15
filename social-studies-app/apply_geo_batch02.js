const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\brain\\c5dae31d-2261-4cab-86f6-e217b26cf303';
const targetDir = 'C:\\Users\\hirok\\.gemini\\antigravity\\scratch\\social-studies-app\\assets\\images\\geography';

const targets = [
  { q: "中国北部を流れ、かつて古代文明が栄えた川は？", filename: "g_gw_2_10_yellow_river_1773376568212.png" },
  { q: "中国北部（華北）などの降水量が少ない地域で盛んな農業は？", filename: "g_gw_2_11_wheat_field_1773376581443.png" },
  { q: "かつて中国南東部から海外へ移住し、現地の経済に大きな影響力を持つ人々を何というか？", filename: "g_gw_2_12_chinatown_1773376600876.png" },
  { q: "同じ土地で1年に2回米を作ることを何というか？", filename: "g_gw_2_13_double_cropping_1773376615294.png" },
  { q: "世界で最も高い山脈は？", filename: "g_gw_2_14_himalayas_1773376629006.png" },
  { q: "ヨーロッパ南部を東西に走る、険しい山脈は？", filename: "g_gw_3_15_alps_1773376642078.png" },
  { q: "ヨーロッパ北部を流れ、複数の国を通って黒海や北海に注ぐ川のことを何というか？", filename: "g_gw_3_16_international_river_1773376655800.png" },
  { q: "ヨーロッパ西岸沖を流れる暖流を何というか？", filename: "g_gw_3_17_north_atlantic_drift_2_1773376671810.png" },
  { q: "地中海沿岸で見られる、夏は乾燥し冬に雨が降る気候は？", filename: "g_gw_3_18_mediterranean_climate_1773376683785.png" },
  { q: "オランダやデンマークなどの涼しい地域で盛んな、乳牛を飼育して乳製品を作る農業は？", filename: "g_gw_3_19_dairy_farming_1773376695971.png" },
  { q: "ヨーロッパ最大の工業国であり、自動車や化学工業が盛んな国は？", filename: "g_gw_3_20_germany_industry_1773376718523.png" },
  { q: "地中海性気候の住居の特徴は？", filename: "g_gw_3_21_mediterranean_wall_1773376735666.png" },
  { q: "サハラ砂漠の南縁に広がる、砂漠化が進行している半乾燥地域を何というか？", filename: "g_gw_4_22_sahel_1773376751159.png" },
  { q: "カカオ、コーヒー、茶などの輸出用作物を、大規模な農園で栽培する農業を何というか？", filename: "g_gw_4_23_plantation_1773376769203.png" },
  { q: "サハラ砂漠より南の地域を指す言葉として使われるのは？", filename: "g_gw_4_24_sub_saharan_1773376781364.png" }
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
