const fs = require('fs');

let qz = fs.readFileSync('quiz_data.js', 'utf8');

// The file format might be slightly garbled at the end or start. Clean it up for Function execution.
qz = qz.replace('module.exports = window.QUIZ_DATA;', '');
qz = qz.replace('let window = {};', '');
qz = qz.replace('window.QUIZ_DATA', 'return'); 

try {
    const fn = new Function('window={}; ' + qz + ' window.QUIZ_DATA;');
    const data = fn();
    
    let targets = [];
    for (const [k, v] of Object.entries(data)) {
        if (k.startsWith('g_')) {
            v.forEach(item => {
                if (['世界遺産', '鹿児島県', '地中海性気候', 'ユーラシア大陸'].some(word => item.a.includes(word) || item.q.includes(word))) {
                    targets.push({
                        section: k,
                        q: item.q,
                        a: item.a,
                        img: item.img,
                        answerImg: item.answerImg
                    });
                }
            });
        }
    }
    console.log(JSON.stringify(targets, null, 2));
} catch(e) {
    console.log("Error parsing:", e);
}

const geoAssetsPath = 'assets/images/geography';
if(fs.existsSync(geoAssetsPath)) {
    const files = fs.readdirSync(geoAssetsPath);
    console.log("Filtered Geo Files:");
    console.log(files.filter(f => f.includes('kagoshima') || f.includes('heritage') || f.includes('mediterranean') || f.includes('eurasia') || f.includes('kinkakuji') || f.includes('shirakawa')));
}
