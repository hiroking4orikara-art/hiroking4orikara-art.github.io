const fs = require('fs');
let content = fs.readFileSync('quiz_data.js', 'utf8');

const TEXT_CFG = "{ type: 'text', x: '{x}%', y: '{y}%', text: '？', color: '#c0392b', fontSize: '15', anchor: 'middle', baseline: 'middle' }";
const RECT_CFG = "{ type: 'rect', x: '{x}%', y: '{y}%', width: '{w}%', height: '{h}%', fill: '#ffffff' }";

function makeOverlay(items) {
    return '[\n                ' + items.join(',\n                ') + '\n            ]';
}

const updates = [
  // ========== Rivers & Mountains ==========
  {
    q: "九州最大の河川で、「筑紫次郎」の異名を持つ川は？",
    overlay: makeOverlay([ "{ type: 'polyline', points: '55,26 45,26 38,30 33,34', color: '#3498db', strokeWidth: '5' }" ])
  },
  {
    q: "水不足を解消するため、吉野川から水を引いて作られた用水路は？",
    overlay: makeOverlay([ "{ type: 'polyline', points: '65,45 60,35 65,25', color: '#3498db', strokeWidth: '5' }" ])
  },
  {
    q: "日本最長の川（長さ約367km）で、越後平野を流れて日本海に注ぐ川は？",
    overlay: makeOverlay([ "{ type: 'polyline', points: '55,55 60,45 62,35 68,28 73,23', color: '#3498db', strokeWidth: '5' }" ])
  },
  {
    q: "流域面積が日本一の川で、「坂東太郎」の異名を持つ川は？",
    overlay: makeOverlay([ "{ type: 'polyline', points: '30,20 40,40 50,45 70,45 90,55', color: '#3498db', strokeWidth: '5' }" ])
  },
  {
    q: "中部地方の中央部を南北に走る、飛騨・木曽・赤石の3つの山脈の総称は？",
    overlay: makeOverlay([ "{ type: 'polygon', points: '45,40 55,50 50,70 40,55', fill: 'rgba(46, 204, 113, 0.4)', color: '#27ae60', strokeWidth: '2' }" ])
  },
  
  // ========== Prefecture Masks (Kyushu with text) ==========
  {
    q: "九州地方で人口が最も多く、アジアの玄関口とも呼ばれるこの県のなまえは？",
    overlay: makeOverlay([
        RECT_CFG.replace('{x}', '45').replace('{y}', '18').replace('{w}', '12').replace('{h}', '5'),
        TEXT_CFG.replace('{x}', '51').replace('{y}', '20.5')
    ])
  },
  {
    q: "かつては外国との貿易窓口（出島）があり、造船業が盛んなこの県のなまえは？",
    overlay: makeOverlay([
        RECT_CFG.replace('{x}', '23').replace('{y}', '38').replace('{w}', '14').replace('{h}', '5'),
        TEXT_CFG.replace('{x}', '30').replace('{y}', '40.5')
    ])
  },
  {
    q: "熊本県北東部にある、世界最大級のカルデラを持つ火山は？", 
    overlay: makeOverlay([
        RECT_CFG.replace('{x}', '48').replace('{y}', '45').replace('{w}', '16').replace('{h}', '5'),
        TEXT_CFG.replace('{x}', '56').replace('{y}', '47.5')
    ])
  },
  {
    q: "シラス台地が広がり、さつまいもや豚肉の生産が盛んなこの県のなまえは？",
    overlay: makeOverlay([
        RECT_CFG.replace('{x}', '44').replace('{y}', '68').replace('{w}', '15').replace('{h}', '5'),
        TEXT_CFG.replace('{x}', '51.5').replace('{y}', '70.5')
    ])
  },

  // ========== Prefecture Masks (Chubu with text) ==========
  {
    q: "中部地方にあり、自動車などの工業出荷額が日本一のこの県のなまえは？",
    overlay: makeOverlay([
        RECT_CFG.replace('{x}', '38').replace('{y}', '80').replace('{w}', '10').replace('{h}', '5'),
        TEXT_CFG.replace('{x}', '43').replace('{y}', '82.5')
    ])
  },
  {
    q: "越後平野が広がり、「米どころ」として稲作が非常に盛んなこの県のなまえは？",
    overlay: makeOverlay([
        RECT_CFG.replace('{x}', '70').replace('{y}', '27').replace('{w}', '12').replace('{h}', '5'),
        TEXT_CFG.replace('{x}', '76').replace('{y}', '29.5')
    ])
  },
  {
    q: "牧ノ原でお茶の栽培が盛んで、富士山の南側に位置するこの県のなまえは？",
    overlay: makeOverlay([
        RECT_CFG.replace('{x}', '54').replace('{y}', '80').replace('{w}', '14').replace('{h}', '5'),
        TEXT_CFG.replace('{x}', '61').replace('{y}', '82.5')
    ])
  },

  // ========== Prefecture Marks (Chugoku - NO text) ==========
  {
    q: "中国地方にあり、原爆ドームや厳島神社などの世界遺産があるこの県のなまえは？",
    overlay: makeOverlay([ TEXT_CFG.replace('{x}', '50').replace('{y}', '55') ])
  },
  {
    q: "日本最大級の砂丘があり、らっきょうや梨の栽培が盛んなこの県のなまえは？",
    overlay: makeOverlay([ TEXT_CFG.replace('{x}', '75').replace('{y}', '30') ])
  },

  // ========== Prefecture Marks (Shikoku - NO text) ==========
  {
    q: "四国地方で面積が最も広く、南は太平洋に面して温暖なこの県のなまえは？",
    overlay: makeOverlay([ TEXT_CFG.replace('{x}', '45').replace('{y}', '65') ])
  },
  {
    q: "四国地方にあり、みかんの生産量が全国トップクラスのこの県のなまえは？",
    overlay: makeOverlay([ TEXT_CFG.replace('{x}', '25').replace('{y}', '45') ])
  },

  // ========== Prefecture Marks (Kanto - NO text) ==========
  {
    q: "関東地方の北西部にあり、こんにゃくいもの生産やキャベツの抑制栽培が盛んなこの県のなまえは？",
    overlay: makeOverlay([ TEXT_CFG.replace('{x}', '25').replace('{y}', '25') ])
  },
  {
    q: "成田国際空港があり、落花生などの近郊農業や工業が盛んなこの県のなまえは？",
    overlay: makeOverlay([ TEXT_CFG.replace('{x}', '80').replace('{y}', '60') ])
  },
  {
    q: "東京の南に位置し、横浜港があり京浜工業地帯の一部となっているこの県のなまえは？",
    overlay: makeOverlay([ TEXT_CFG.replace('{x}', '40').replace('{y}', '70') ])
  },

  // ========== Prefecture Marks (Tohoku - NO text) ==========
  {
    q: "本州の最北端にあり、りんごの生産量が日本一のこの県のなまえは？",
    overlay: makeOverlay([ TEXT_CFG.replace('{x}', '50').replace('{y}', '15') ])
  },
  {
    q: "さくらんぼの生産量が日本一で、盆地が多いこの県のなまえは？",
    overlay: makeOverlay([ TEXT_CFG.replace('{x}', '35').replace('{y}', '65') ])
  },
  {
    q: "東北地方の中心都市である仙台市があるこの県のなまえは？",
    overlay: makeOverlay([ TEXT_CFG.replace('{x}', '65').replace('{y}', '60') ])
  }
];

let failed = [];

updates.forEach(u => {
    // Escape string for regex
    const escapedQ = u.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Search for q: "...", followed by anything until mapOverlay: [ ... ]
    const regex = new RegExp('(q:\\s*"' + escapedQ + '"[\\s\\S]*?mapOverlay:\\s*\\[)[\\s\\S]*?(\\])', 'm');
    
    if (regex.test(content)) {
        content = content.replace(regex, '$1\n                ' + u.overlay.replace('[\n                ', '').replace('\n            ]', '') + '\n            $2');
    } else {
        failed.push(u.q);
    }
});

fs.writeFileSync('quiz_data.js', content, 'utf8');

if (failed.length > 0) {
    console.log("Failed to update:");
    console.log(failed);
} else {
    console.log("SUCCESSFULLY UPDATED ALL COORDS!");
}
