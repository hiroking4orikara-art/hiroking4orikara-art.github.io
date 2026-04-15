const fs = require('fs');

const jsContent = fs.readFileSync('quiz_data.js', 'utf8');

// Replace using regex or simple match
const replacements = [
  {
    find: `q: "紀元前6世紀ごろにインドでシャカ（釈迦）が開いた宗教は？",`,
    add: `img: "assets/images/history/h_ancient_buddhism_1772414564492.png",`
  },
  {
    find: `q: "パレスチナ地方でイエスが広め、「神の愛」を説いた宗教は？",`,
    add: `img: "assets/images/history/h_ancient_christianity_1772414580245.png",`
  },
  {
    find: `q: "エジプト文明の農業に大きな恵みをもたらした、アフリカ大陸を北上して地中海に注ぐ世界最長の川は？",`,
    add: `img: "assets/images/history/h_ancient_nile_1772414594835.png",`
  },
  {
    find: `q: "紀元前4世紀ごろ、大陸から伝わり、日本の生活を大きく変化させた農業技術は？",`,
    add: `img: "assets/images/history/h_ancient_rice_farming_1772414609121.png",`
  },
  {
    find: `q: "6世紀半ば、百済の聖明王から日本の欽明天皇に伝えられたものは？",`,
    add: `img: "assets/images/history/h_ancient_buddhism_1772414564492.png",`
  }
];

let newContent = jsContent;
let changed = 0;

for (const rep of replacements) {
    if (newContent.includes(rep.find) && !newContent.includes(rep.add)) {
        newContent = newContent.replace(
            rep.find,
            `${rep.find}\n            ${rep.add}`
        );
        changed++;
        console.log(`Applied image for: ${rep.find.substring(0, 30)}...`);
    } else {
        console.log(`Skipped or already applied: ${rep.find.substring(0, 30)}...`);
    }
}

fs.writeFileSync('quiz_data.js', newContent);
console.log(`Applied ${changed} images to quiz_data.js`);
