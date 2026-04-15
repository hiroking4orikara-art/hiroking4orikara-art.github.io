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
  {
    q: "流域面積が日本第2位の大河で、石狩平野を流れて日本海に注ぐ川は？",
    overlay: `[
                { type: 'polyline', points: '76,26 73,24 70,24', color: '#3498db', strokeWidth: '5' }
            ]`
  },
  
  // ========== Prefecture Masks ==========
  // Kyushu
  {
    q: "九州地方で人口が最も多く、アジアの玄関口とも呼ばれるこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '28%', y: '20%', width: '10%', height: '5%', fill: '#ffffff' },
                { type: 'text', x: '33%', y: '27%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "かつては外国との貿易窓口（出島）があり、造船業が盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '13%', y: '37%', width: '11%', height: '3%', fill: '#ffffff' },
                { type: 'text', x: '18%', y: '42%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "熊本県北東部にある、世界最大級のカルデラを持つ火山は？",
    overlay: `[
                { type: 'rect', x: '29%', y: '54%', width: '13%', height: '3%', fill: '#ffffff' },
                { type: 'text', x: '45%', y: '52%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "シラス台地が広がり、さつまいもや豚肉の生産が盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '29%', y: '81%', width: '13%', height: '3%', fill: '#ffffff' },
                { type: 'text', x: '35%', y: '75%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  // Chugoku
  {
    q: "中国地方にあり、原爆ドームや厳島神社などの世界遺産があるこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '45%', y: '60%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '45%', y: '50%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "日本最大級の砂丘があり、らっきょうや梨の栽培が盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '75%', y: '30%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '75%', y: '40%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  // Shikoku
  {
    q: "四国地方で面積が最も広く、南は太平洋に面して温暖なこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '45%', y: '75%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '50%', y: '75%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "四国地方にあり、みかんの生産量が全国トップクラスのこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '20%', y: '45%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '25%', y: '45%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  // Chubu
  {
    q: "中部地方にあり、自動車などの工業出荷額が日本一のこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '38%', y: '77%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '45%', y: '80%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "越後平野が広がり、「米どころ」として稲作が非常に盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '75%', y: '22%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '80%', y: '20%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "牧ノ原でお茶の栽培が盛んで、富士山の南側に位置するこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '58%', y: '77%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '65%', y: '80%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  // Kanto
  {
    q: "関東地方の北西部にあり、こんにゃくいもの生産やキャベツの抑制栽培が盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '25%', y: '23%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '30%', y: '30%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "成田国際空港があり、落花生などの近郊農業や工業が盛んなこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '66%', y: '60%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '62%', y: '70%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "東京の南に位置し、横浜港があり京浜工業地帯の一部となっているこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '35%', y: '60%', width: '10%', height: '5%', fill: '#ffffff' },
                { type: 'text', x: '35%', y: '65%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  // Tohoku
  {
    q: "本州の最北端にあり、りんごの生産量が日本一のこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '46%', y: '17%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '50%', y: '25%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "さくらんぼの生産量が日本一で、盆地が多いこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '42%', y: '53%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '48%', y: '58%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  },
  {
    q: "東北地方の中心都市である仙台市があるこの県のなまえは？",
    overlay: `[
                { type: 'rect', x: '65%', y: '50%', width: '10%', height: '4%', fill: '#ffffff' },
                { type: 'text', x: '70%', y: '55%', text: '？', color: '#c0392b', fontSize: '4rem', anchor: 'middle' }
            ]`
  }
];

let failed = [];

updates.forEach(u => {
    // Escape regex characters just in case, though q strings are simple here
    const qIndex = content.indexOf('q: "' + u.q + '"');
    if (qIndex === -1) {
        failed.push(u.q);
        return;
    }

    const nextBrace = content.indexOf('},', qIndex);
    const block = content.substring(qIndex, nextBrace);

    let newBlock = block;
    
    // Process existing mapOverlay
    if (block.includes('mapOverlay:')) {
        // Find existing mapOverlay array and replace it up to the closing ]
        const regex = /mapOverlay:\s*\[[\s\S]*?\]/m;
        newBlock = block.replace(regex, 'mapOverlay: ' + u.overlay);
    } else {
        // Find where to insert mapOverlay (preferably right before `comment:`)
        if (block.includes('comment:')) {
            newBlock = block.replace(/(comment:\s*".*?")/m, (match) => {
                return 'mapOverlay: ' + u.overlay + ',\\n            ' + match;
            });
        } else if (block.includes('a:')) {
            // If no comment, just insert before `a:` (which will shift order slightly, but it's fine)
            newBlock = block.replace(/(a:\s*".*?")/m, (match) => {
                return 'mapOverlay: ' + u.overlay + ',\\n            ' + match;
            });
        } else {
            failed.push("Could not inject into: " + u.q);
            return;
        }
    }

    // Apply replacement to the document
    // We must replace the EXACT substring to avoid matching identical partial strings elsewhere
    content = content.replace(block, newBlock);
});

if (failed.length > 0) {
    console.log("Failed to process some questions:");
    console.log(failed.join("\\n"));
} else {
    console.log("All questions successfully processed.");
}

fs.writeFileSync('quiz_data.js', content, 'utf8');
