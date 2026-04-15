const fs = require('fs');

let content = fs.readFileSync('quiz_data.js', 'utf8');

// Find the first question "世界で最も広い海洋はどれか？" and add an answerImg
const targetString = 'q: "世界で最も広い海洋はどれか？",\n            a: "太平洋"';
const replaceString = 'q: "世界で最も広い海洋はどれか？",\n            a: "太平洋",\n            answerImg: "assets/images/geography/map_world_blank_pacific_1771577772064.png",\n            answerImgCaption: "※画像はイメージです"';

if (content.includes(targetString)) {
    content = content.replace(targetString, replaceString);
    fs.writeFileSync('quiz_data.js', content);
    console.log('Dummy answer image injected for testing.');
} else {
    console.log('Target string not found, might have already been modified.');
}
