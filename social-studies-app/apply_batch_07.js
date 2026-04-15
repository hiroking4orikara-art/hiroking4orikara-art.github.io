const fs = require('fs');
const jsContent = fs.readFileSync('quiz_data.js', 'utf8');

const replacements = [
  {
    find: `q: "6世紀半ば、百済の聖明王から日本の欽明天皇に伝えられたものは？",`,
    add: `img: "assets/images/history/h_ancient_buddhism_1772414564492.png",`
  },
  {
    find: `q: "593年、推古天皇の摂政となり、天皇中心の国づくりを進めた人物は？",`,
    add: `img: "assets/images/history/h_ancient_shotoku_1772414719515.png",`
  },
  {
    find: `q: "律令制度のもとで、6歳以上の男女に口分田を与え、死ぬと国に返させる制度は？",`,
    add: `img: "assets/images/history/h_ancient_handen_1772414732823.png",`
  },
  {
    find: `q: "894年、菅原道真の提案によって停止されたものは？",`,
    add: `img: "assets/images/history/h_ancient_kentoshi_1772414751956.png",`
  },
  {
    find: `q: "「南無阿弥陀仏」と念仏を唱えれば、死後に極楽浄土へ行けると説いた教えは？",`,
    add: `img: "assets/images/history/h_ancient_buddhism_1772414564492.png",`
  }
];

let newContent = jsContent;
let changed = 0;

for (const rep of replacements) {
    // Basic check to see if the question doesn't have an img field right after
    const regex = new RegExp(rep.find.replace(/[.*+?^$\{()|[\\]\\\\]/g, '\\\\$&') + "(?!\\\\s*img:)", "g");
    
    // Check if it already has 'img:' within a few lines (a bit hacky but works for this structure)
    const exactMatchStr = rep.find + '\\n            img:';
    if (newContent.includes(rep.find) && !newContent.includes(exactMatchStr)) {
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
