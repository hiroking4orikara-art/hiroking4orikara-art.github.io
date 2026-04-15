const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const match = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const data = new Function('return ' + match[1])();

const TARGETS = ['世界遺産', '鹿児島県', '地中海性気候', 'ユーラシア大陸'];

let updatedCount = 0;

['g_1', 'g_2', 'g_3', 'g_4', 'g_5', 'gw_1'].forEach(k => {
    if (data[k]) {
        data[k].forEach(q => {
            if (TARGETS.includes(q.a)) {
                console.log(`Found ${q.a} in ${k}!`);
                if (q.a === '世界遺産' && q.q.includes('条約に基づいて')) {
                    // Update World Heritage image to a Japanese one
                    q.answerImg = 'assets/images/geo/g_geo_016_world_heritage.png';
                    updatedCount++;
                } else if (q.a === '鹿児島県') {
                    // Update Kagoshima map to blank Kyushu
                    q.img = 'assets/images/geo/g_geo_038_kyushu_blank.png';
                    updatedCount++;
                } else if (q.a === '地中海性気候') {
                    // Fix background loading issue (might be a missing img path)
                    if (!q.img) q.img = 'assets/images/geo/g_geo_005_mediterranean_climate.png';
                    updatedCount++;
                } else if (q.a === 'ユーラシア大陸') {
                    // Fix background loading issue
                    if (!q.img) q.img = 'assets/images/geo/g_geo_001_eurasia.png';
                    updatedCount++;
                }
            }
        });
    }
});

if (updatedCount > 0) {
    // Reserialize
    let out = 'window.QUIZ_DATA = {\n';
    const keys = Object.keys(data);
    for(let i=0; i<keys.length; i++) {
        const key = keys[i];
        out += '    "' + key + '": [\n';
        const qs = data[key].map(q => {
            let qStr = '        {\n            q: ' + JSON.stringify(q.q);
            if(q.img) qStr += ',\n            img: ' + JSON.stringify(q.img);
            if(q.choices) qStr += ',\n            choices: ' + JSON.stringify(q.choices);
            if(q.a) qStr += ',\n            a: ' + JSON.stringify(q.a);
            if(q.comment) qStr += ',\n            comment: ' + JSON.stringify(q.comment);
            if(q.answerImg) qStr += ',\n            answerImg: ' + JSON.stringify(q.answerImg);
            if(q.imgCaption) qStr += ',\n            imgCaption: ' + JSON.stringify(q.imgCaption);
            qStr += '\n        }';
            return qStr;
        }).join(',\n');
        out += qs + '\n    ]';
        if(i < keys.length -1) out += ',\n'; else out += '\n';
    }
    out += '};\n\nmodule.exports = window.QUIZ_DATA;\n';

    fs.writeFileSync('quiz_data.js', out);
    console.log(`Updated ${updatedCount} items!`);
} else {
    console.log("No exact matches found that needed updates.");
}
