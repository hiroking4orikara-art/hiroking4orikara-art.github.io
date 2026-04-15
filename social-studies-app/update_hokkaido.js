const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');

// Hokkaido Map Updates
const hokkaidoUpdates = [
  {
    q: "流域面積が日本第2位の大河で、石狩平野を流れて日本海に注ぐ川は？",
    overlay: `[
                { type: 'polyline', points: '47,67 40,61 34,61', color: '#3498db', strokeWidth: '5' }
            ]`,
    img: "assets/images/geography/map_hokkaido_blank.png"
  },
  {
    q: "北海道の東部に位置し、冬には流氷が見られ、世界自然遺産に登録されている半島は？",
    overlay: `[
                { type: 'polygon', points: '82,26 89,18 85,15 78,21', fill: 'rgba(230, 126, 34, 0.4)', color: '#d35400', strokeWidth: '2' }
            ]`,
    img: "assets/images/geography/map_hokkaido_blank.png"
  },
  {
    q: "日本最大の湿原で、ラムサール条約に登録されているのは？",
    overlay: `[
                { type: 'circle', cx: '78', cy: '41', r: '5', fill: 'rgba(52, 152, 219, 0.5)', color: '#2980b9' }
            ]`,
    img: "assets/images/geography/map_hokkaido_blank.png"
  }
];

hokkaidoUpdates.forEach(u => {
    const qIndex = content.indexOf('q: "' + u.q + '"');
    if (qIndex !== -1) {
        const nextBrace = content.indexOf('},', qIndex);
        let block = content.substring(qIndex, nextBrace);
        
        let newBlock = block.replace(/img:\s*".*?"/, 'img: "' + u.img + '"');
        newBlock = newBlock.replace(/mapOverlay:\s*\[[\s\S]*?\]/m, 'mapOverlay: ' + u.overlay);
        
        content = content.replace(block, newBlock);
    }
});

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log("Hokkaido updates applied.");
