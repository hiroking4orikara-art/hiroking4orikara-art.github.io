const fs = require('fs');

const content = fs.readFileSync('quiz_data_safely_restored.js', 'utf8');
const match = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const data = new Function('return ' + match[1])();

console.log("cw_1 has", data['cw_1'].length, "questions. Rebuilding from c_1 to c_5...");

// Rebuild cw_1 completely from the restored c_1~c_5
data['cw_1'] = [];
['c_1', 'c_2', 'c_3', 'c_4', 'c_5'].forEach(k => {
    if(data[k]) {
        // Deep copy the questions so they are separate objects
        data[k].forEach(q => {
            data['cw_1'].push(JSON.parse(JSON.stringify(q)));
        });
    }
});

console.log("cw_1 now has", data['cw_1'].length, "questions (sum of c_1 to c_5).");

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
