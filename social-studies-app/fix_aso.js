const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');

// 神奈川: y:70% -> y:75%
content = content.replace(
    "{ type: 'text', x: '40%', y: '70%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }",
    "{ type: 'text', x: '40%', y: '75%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }"
);

// 千葉: y:60% -> y:65%
content = content.replace(
    "{ type: 'text', x: '80%', y: '60%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }",
    "{ type: 'text', x: '80%', y: '65%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }"
);

// 阿蘇山の問題の誤った画像置換を修正する
const asoRegex = /(q:\s*"熊本県北東部にある、世界最大級のカルデラを持つ火山は？"[\s\S]*?a:\s*"阿蘇山",\n\s*)img:\s*"assets\/images\/geography\/map_kyushu_blank_1771591728285\.png",\n\s*mapOverlay:\s*\[[\s\S]*?\],\n(\s*comment:\s*"「火の国」熊本のシンボルです。")/m;

// この阿蘇山の問題はおそらく元々「画像なし（テキストのみ）」の問題だったと思われるので画像プロパティ自体を削除します。
content = content.replace(asoRegex, '$1$2');

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log('Fixed additional bugs.');
