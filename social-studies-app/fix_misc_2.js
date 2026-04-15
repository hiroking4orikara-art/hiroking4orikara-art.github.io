const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');

// 1. 琵琶湖の青丸の%表記漏れ修正
content = content.replace(
    "{ type: 'circle', cx: '65', cy: '40', r: '6', fill: 'rgba(52, 152, 219, 0.7)', color: '#2980b9' }",
    "{ type: 'circle', cx: '65%', cy: '40%', r: '6', fill: 'rgba(52, 152, 219, 0.7)', color: '#2980b9' }"
);

// 2. 釧路湿原の青丸の%表記漏れ修正
content = content.replace(
    "{ type: 'circle', cx: '78', cy: '41', r: '5', fill: 'rgba(52, 152, 219, 0.5)', color: '#2980b9' }",
    "{ type: 'circle', cx: '78%', cy: '41%', r: '5', fill: 'rgba(52, 152, 219, 0.5)', color: '#2980b9' }"
);

// 3. 大雪山の画像パスの修正
content = content.replace(
    /img: "images\/geography\/japan_hokkaido_map\.png"/g,
    'img: "assets/images/geography/map_hokkaido_blank.png"'
);

// 大雪山にマーカーが設定されていなかったので、ついでに中央付近に？を設定しておく
const daisetsuzanRegex = /(q:\s*"北海道の中央部にある火山群で、最高峰の旭岳（2291m）などを含む場所は？"[\s\S]*?img:\s*"assets\/images\/geography\/map_hokkaido_blank\.png",\n)(\s*comment)/m;
content = content.replace(daisetsuzanRegex, '$1            mapOverlay: [\n                { type: \'text\', x: \'55%\', y: \'50%\', text: \'？\', color: \'#c0392b\', fontSize: \'15\', anchor: \'middle\', baseline: \'middle\' }\n            ],\n$2');


// 4. 鹿児島県のrectの幅を広げる (15% -> 20%) と少し左に寄せる (44% -> 42%)
content = content.replace(
    "{ type: 'rect', x: '44%', y: '68%', width: '15%', height: '5%', fill: '#ffffff' }",
    "{ type: 'rect', x: '42%', y: '68%', width: '20%', height: '5%', fill: '#ffffff' }"
);

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log('Fixed Biwa, Kushiro, Daisetsuzan, Kagoshima.');
