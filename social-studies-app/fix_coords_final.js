const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');

// 1. 石狩川
content = content.replace(
    /points: '47,67 40,61 34,61'/g,
    "points: '38,40 33,43 28,48'"
);

// 2. 知床半島
content = content.replace(
    /points: '82,26 89,18 85,15 78,21'/g,
    "points: '65,35 83,16 85,20 68,38'"
);

// 3. 釧路湿原
content = content.replace(
    /cx: '78%', cy: '41%'/g,
    "cx: '65%', cy: '48%'"
);

// 4. 大雪山
content = content.replace(
    /x: '48%', y: '46%', text: '？'/g,
    "x: '45%', y: '40%', text: '？'"
);

// 5. 琵琶湖
content = content.replace(
    /cx: '65%', cy: '40%'/g,
    "cx: '67%', cy: '33%'"
);

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log('Final coordinates applied successfully.');
