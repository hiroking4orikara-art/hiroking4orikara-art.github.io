const fs = require('fs');
let qd = fs.readFileSync('quiz_data.js', 'utf8');
qd = qd.replace(/img: "assets\/images\/geography\/map_kyushu_blank_[0-9]+\.png",\s*\n\s*choices: \["鹿児島県"/g, 'img: "assets/images/geography/map_kagoshima_highlighted.png",\n            choices: ["鹿児島県"');

fs.writeFileSync('quiz_data.js', qd, 'utf8');
console.log("Updated kagoshima reference");
