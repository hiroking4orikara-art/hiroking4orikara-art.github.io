const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');

// 1. 大雪山
content = content.replace(
    "{ type: 'text', x: '55%', y: '50%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }",
    "{ type: 'text', x: '52%', y: '53%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }"
);

// 2. 釧路湿原
content = content.replace(
    "{ type: 'circle', cx: '78', cy: '41', r: '5', fill: 'rgba(52, 152, 219, 0.5)', color: '#2980b9' }",
    "{ type: 'circle', cx: '78%', cy: '41%', r: '5', fill: 'rgba(52, 152, 219, 0.5)', color: '#2980b9' }"
);

// 3. 石狩川
content = content.replace(
    "{ type: 'polyline', points: '47,67 40,61 34,61', color: '#3498db', strokeWidth: '5' }",
    "{ type: 'polyline', points: '36,56 30,50 24,51', color: '#3498db', strokeWidth: '5' }"
);

// 4. 知床半島
content = content.replace(
    "{ type: 'polygon', points: '82,26 89,18 85,15 78,21', fill: 'rgba(230, 126, 34, 0.4)', color: '#d35400', strokeWidth: '2' }",
    "{ type: 'polygon', points: '74,34 81,26 77,23 70,29', fill: 'rgba(230, 126, 34, 0.4)', color: '#d35400', strokeWidth: '2' }"
);

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log("Hokkaido coords fixed!");
