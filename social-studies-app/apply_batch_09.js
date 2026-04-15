const fs = require('fs');

const jsContent = fs.readFileSync('quiz_data.js', 'utf8');

const replacements = [
  {
    find: `q: "平安時代末期、平清盛によって整備され、日宋貿易の拠点となった港は？",`,
    add: `img: "assets/images/history/h_ancient_owada_1772414997019.png",`
  },
  {
    find: `q: "939年、伊予（愛媛県）の国司であったが、瀬戸内海で海賊を率いて反乱を起こした人物は？",`,
    add: `img: "assets/images/history/h_ancient_sumitomo_1772415012889.png",`
  },
  {
    find: `q: "1156年、崇徳上皇と後白河天皇の対立から都で起こった戦乱は？",`,
    add: `img: "assets/images/history/h_ancient_hogen_1772415030167.png",`
  },
  {
    find: `q: "1159年、源義朝と平清盛が対立し、平清盛が勝利して平氏政権の基盤を築いた戦乱は？",`,
    add: `img: "assets/images/history/h_ancient_heiji_1772415054446.png",`
  }
];

let newContent = jsContent;
let changed = 0;

for (const rep of replacements) {
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
