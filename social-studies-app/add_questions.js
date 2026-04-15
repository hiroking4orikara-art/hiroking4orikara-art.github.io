const fs = require('fs');

// 1. Update quiz_data.js
let quizContent = fs.readFileSync('quiz_data.js', 'utf8');

const newHokkaidoQuestions = `        {
            q: "北海道の南東部に広がる、酪農が非常に盛んな台地は？",
            choices: ["根釧台地", "シラス台地", "牧ノ原", "洪積台地"],
            a: "根釧台地",
            comment: "冷涼な気候を活かして、乳牛を育てる酪農が盛んに行われています。",
            img: "assets/images/geography/map_hokkaido_blank.png",
            mapOverlay: [
                { type: 'text', x: '80%', y: '60%', text: '？', color: '#c0392b', fontSize: '3rem', anchor: 'middle', baseline: 'middle' }
            ]
        },
        {
            q: "北海道の中南部に広がる、じゃがいもやてんさいなどの畑作が盛んな日本有数の平野は？",
            choices: ["十勝平野", "石狩平野", "越後平野", "関東平野"],
            a: "十勝平野",
            comment: "広大な土地を活かした大規模な農業が行われています。",
            img: "assets/images/geography/map_hokkaido_blank.png",
            mapOverlay: [
                { type: 'text', x: '60%', y: '65%', text: '？', color: '#c0392b', fontSize: '3rem', anchor: 'middle', baseline: 'middle' }
            ]
        }
    ]`;

const newOkinawaQuestions = `        {
            q: "南西諸島の中で最も大きく、県庁所在地の那覇市がある島は？",
            choices: ["沖縄本島", "宮古島", "石垣島", "奄美大島"],
            a: "沖縄本島",
            comment: "かつては琉球王国として栄え、現在も独自の文化や自然が残っています。",
            img: "assets/images/geography/map_okinawa_blank.png",
            mapOverlay: [
                { type: 'text', x: '65%', y: '40%', text: '？', color: '#c0392b', fontSize: '3rem', anchor: 'middle', baseline: 'middle' }
            ]
        },
        {
            q: "沖縄県の沿岸部に広く見られる、石灰質の骨格を持つ生物が集まってできた地形は？",
            choices: ["サンゴ礁", "リアス海岸", "砂丘", "カルデラ"],
            a: "サンゴ礁",
            comment: "美しい海を形成し、多くの観光客が訪れる要因となっています。",
            img: "assets/images/geography/map_okinawa_blank.png"
        }
    ]`;

quizContent = quizContent.replace(/\s*\]\s*;\s*\/\/\s*---- 関東地方 ----/g, ',\n' + newHokkaidoQuestions + ';\n    // ---- 関東地方 ----'); // Replace end of gj_9 array
quizContent = quizContent.replace(/\s*\]\s*;\s*\/\/\s*---- 中国・四国地方 ----/g, ',\n' + newOkinawaQuestions + ';\n    // ---- 中国・四国地方 ----'); // Replace end of gj_3 array

fs.writeFileSync('quiz_data.js', quizContent, 'utf8');
console.log('quiz_data.js updated with new questions.');

// 2. Update data.js
let dataContent = fs.readFileSync('data.js', 'utf8');

// Find and update Hokkaido count: 16 -> 18
dataContent = dataContent.replace(/(id:\s*'gj_9',\s*title:\s*'北海道地方',\s*questionCount:\s*)16/g, '$118');
// Find and update Kyushu count: 36 -> 38
dataContent = dataContent.replace(/(id:\s*'gj_3',\s*title:\s*'九州地方',\s*questionCount:\s*)36/g, '$138');

fs.writeFileSync('data.js', dataContent, 'utf8');
console.log('data.js counts updated.');
