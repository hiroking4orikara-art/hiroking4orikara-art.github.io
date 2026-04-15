const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const match = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const data = new Function('return ' + match[1])();

let updatedCount = 0;

Object.keys(data).forEach(k => {
    if (k.startsWith('g') || k.startsWith('gw')) {
        data[k].forEach(q => {
            if (q.q && (q.q.includes('鹿児島') || q.q.includes('遺産'))) {
                console.log(`Matched keyword in ${k}: ${q.q} -> A: ${q.a}`);
                
                if (q.a && q.a.includes('鹿児島')) {
                    q.img = 'assets/images/geo/g_geo_038_kyushu_blank.png';
                    console.log('Fixed Kagoshima Map');
                    updatedCount++;
                }
                
                if (q.a && q.a.includes('世界遺産') && q.q.includes('条約')) {
                    q.answerImg = 'assets/images/geo/g_geo_016_world_heritage.png';
                    console.log('Fixed World Heritage Image');
                    updatedCount++;
                }
            } else if (q.a && (q.a.includes('鹿児島') || q.a.includes('遺産'))) {
                console.log(`Matched keyword in A in ${k}: ${q.q} -> A: ${q.a}`);
                if (q.a.includes('鹿児島')) {
                    q.img = 'assets/images/geo/g_geo_038_kyushu_blank.png';
                    console.log('Fixed Kagoshima Map');
                    updatedCount++;
                }
                if (q.a.includes('世界遺産') && q.q.includes('条約')) {
                    q.answerImg = 'assets/images/geo/g_geo_016_world_heritage.png';
                    console.log('Fixed World Heritage Image');
                    updatedCount++;
                }
            }
        });
    }
});

if (updatedCount > 0) {
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
