const fs = require('fs');

const content = fs.readFileSync('quiz_data_safely_restored.js', 'utf8');
const match = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const data = new Function('return ' + match[1])();

const origContent = fs.readFileSync('quiz_data_temp_require.js', 'utf8');
const origMatch = origContent.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const origData = new Function('return ' + origMatch[1])();

console.log("cw_1 has", data['cw_1'].length, "questions in restored.");
console.log("cw_1 has", origData['cw_1'].length, "questions in temp_require.");

if (origData['cw_1'].length > 0) {
    // Copy the correct objects over, but keep answerImg!
    origData['cw_1'].forEach(orig_q => {
        const matched = data['cw_1'].find(new_q => new_q.q === orig_q.q && new_q.a === orig_q.a);
        if(matched && matched.answerImg) {
            orig_q.answerImg = matched.answerImg;
            orig_q.imgCaption = matched.imgCaption;
        }
    });

    data['cw_1'] = origData['cw_1'];
    
    // Check if new choices are all clean
    const missing = data['cw_1'].filter(q => !q.choices || q.choices.length === 0);
    console.log("New cw_1 missing choices count:", missing.length);
    
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

    fs.writeFileSync('quiz_data_safely_restored.js', out);
    console.log('Restoration of cw_1 complete!');
}
