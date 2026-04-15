const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');

const updates = [
  // ========== Rivers ==========
  {
    q: "九州最大の河川で、「筑紫次郎」の異名を持つ川は？",
    overlay: `[
                { type: 'polyline', points: '62,42 50,41 37,41 30,42', color: '#3498db', strokeWidth: '5' }
            ]`
  },
  {
    q: "水不足を解消するため、吉野川から水を引いて作られた用水路は？",
    overlay: `[
                { type: 'polyline', points: '54,49 53,38 58,25', color: '#3498db', strokeWidth: '5' }
            ]`
  },
  {
    q: "日本最長の川（長さ約367km）で、越後平野を流れて日本海に注ぐ川は？",
    overlay: `[
                { type: 'polyline', points: '53,50 60,40 75,25 80,15', color: '#3498db', strokeWidth: '5' }
            ]`
  },
  {
    q: "流域面積が日本一の川で、「坂東太郎」の異名を持つ川は？",
    overlay: `[
                { type: 'polyline', points: '25,30 45,40 70,45 85,53', color: '#3498db', strokeWidth: '5' }
            ]`
  },
  // 北海道は既に手動でやっているのでスキップ
  
  // ========== Prefecture Masks ==========
  // Kyushu
  {
    q: "九州地方で人口が最も多く、アジアの玄関口とも呼ばれるこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '28%', y: '20%', width: '10%', height: '5%', fill: '#ffffff' },
                { type: 'text', x: '33%', y: '23%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "かつては外国との貿易窓口（出島）があり、造船業が盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '13%', y: '37%', width: '13%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '19.5%', y: '39%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "熊本県北東部にある、世界最大級のカルデラを持つ火山は？",
    overlay: `[
                { type: 'rect', x: '38%', y: '42%', width: '13%', height: '3%', fill: '#ffffff' },
                { type: 'text', x: '44.5%', y: '43.5%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "シラス台地が広がり、さつまいもや豚肉の生産が盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '35%', y: '56%', width: '13%', height: '3%', fill: '#ffffff' },
                { type: 'text', x: '41.5%', y: '57.5%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  // Chugoku
  {
    q: "中国地方にあり、原爆ドームや厳島神社などの世界遺産があるこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '45%', y: '60%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '50%', y: '62%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "日本最大級の砂丘があり、らっきょうや梨の栽培が盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '75%', y: '30%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '80%', y: '32%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  // Shikoku
  {
    q: "四国地方で面積が最も広く、南は太平洋に面して温暖なこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '43%', y: '68%', width: '13%', height: '5%', fill: '#ffffff' },
                { type: 'text', x: '49.5%', y: '70.5%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "四国地方にあり、みかんの生産量が全国トップクラスのこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '21%', y: '42%', width: '12%', height: '5%', fill: '#ffffff' },
                { type: 'text', x: '27%', y: '44.5%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  // Chubu
  {
    q: "中部地方にあり、自動車などの工業出荷額が日本一のこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '35%', y: '84%', width: '10%', height: '5%', fill: '#ffffff' },
                { type: 'text', x: '40%', y: '86.5%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "越後平野が広がり、「米どころ」として稲作が非常に盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '62%', y: '29%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '67%', y: '31%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "牧ノ原でお茶の栽培が盛んで、富士山の南側に位置するこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '50%', y: '83%', width: '12%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '56%', y: '85%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  // Kanto
  {
    q: "関東地方の北西部にあり、こんにゃくいもの生産やキャベツの抑制栽培が盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '27%', y: '25%', width: '10%', height: '5%', fill: '#ffffff' },
                { type: 'text', x: '32%', y: '27.5%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "成田国際空港があり、落花生などの近郊農業や工業が盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '68%', y: '58%', width: '10%', height: '5%', fill: '#ffffff' },
                { type: 'text', x: '73%', y: '60.5%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "東京の南に位置し、横浜港があり京浜工業地帯の一部となっているこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '38%', y: '63%', width: '12%', height: '5%', fill: '#ffffff' },
                { type: 'text', x: '44%', y: '65.5%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  // Tohoku
  {
    q: "本州の最北端にあり、りんごの生産量が日本一のこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '45%', y: '19%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '50%', y: '21%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "さくらんぼの生産量が日本一で、盆地が多いこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '44%', y: '57%', width: '11%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '49.5%', y: '59%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  },
  {
    q: "東北地方の中心都市である仙台市があるこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '63%', y: '57%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '68%', y: '59%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }
            ]`
  }
];

let failed = [];

updates.forEach(u => {
    // 確実な置換のために正規表現を使う
    // q: "質問文" の後に続く mapOverlay配列をまるごと置換する
    
    // まず該当する質問文の位置を探す
    const qIndex = content.indexOf(u.q);
    if (qIndex === -1) {
        failed.push(u.q);
        return;
    }
    
    // 質問文の開始インデックスから次の '}' までを抽出
    const blockStart = content.lastIndexOf('{', qIndex);
    const blockEnd = content.indexOf('}', qIndex) + 1;
    let block = content.substring(blockStart, blockEnd);
    
    let newBlock = block;
    
    if (block.includes('mapOverlay:')) {
        // mapOverlay: [ ... ] を置換
        newBlock = block.replace(/mapOverlay:\s*\[[\s\S]*?\]/m, 'mapOverlay: ' + u.overlay);
    } else {
        // mapOverlay がない場合は a: "..." の手前に挿入
        newBlock = block.replace(/(a:\s*".*?",?)/m, 'mapOverlay: ' + u.overlay + ',\n            $1');
    }
    
    content = content.replace(block, newBlock);
});

fs.writeFileSync('fix_data.js', content, 'utf8');
if (failed.length > 0) {
    console.log("Failed: ", failed);
} else {
    console.log("Success! check fix_data.js");
}
