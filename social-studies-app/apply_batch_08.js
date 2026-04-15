const fs = require('fs');

const jsContent = fs.readFileSync('quiz_data.js', 'utf8');

const replacements = [
  {
    find: `q: "藤原道長の子で、京都の宇治に平等院鳳凰堂を建てた人物は？",`,
    add: `img: "assets/images/history/h_ancient_yorimichi_1772414883279.png",`
  },
  {
    find: `q: "平安時代の中頃に生まれた、漢字を変形させて日本語の音を表せるようにした文字は？",`,
    add: `img: "assets/images/history/h_ancient_kana_1772414903142.png",`
  },
  {
    find: `q: "醍醐天皇の命で編集された、日本最初の勅撰和歌集は？",`,
    add: `img: "assets/images/history/h_ancient_kokin_1772414918054.png",`
  },
  {
    find: `q: "平安時代中期、京の市中で念仏を広め、「市聖（いちのひじり）」と呼ばれた僧は？",`,
    add: `img: "assets/images/history/h_ancient_kuya_1772414931137.png",`
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
