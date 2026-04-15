const fs = require('fs');

const match1 = fs.readFileSync('quiz_data_temp_require.js', 'utf8').match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const match2 = fs.readFileSync('quiz_data.js', 'utf8').match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);

const q1 = new Function('return ' + match1[1])();
const q2 = new Function('return ' + match2[1])();

const civicsKeys = ['c_1', 'c_2', 'c_3', 'c_4', 'c_5', 'cw_1'];

civicsKeys.forEach(k => {
    if (q1[k]) {
        // We want to keep the answerImg that we generated in q2!
        q1[k].forEach(orig_q => {
            const matchedQ2 = q2[k].find(new_q => new_q.q === orig_q.q && new_q.a === orig_q.a);
            if(matchedQ2 && matchedQ2.answerImg) {
                orig_q.answerImg = matchedQ2.answerImg;
                orig_q.imgCaption = matchedQ2.imgCaption;
            } else {
                // If it was shifted to another array for some reason...
                for (let other_k of civicsKeys) {
                    const matchedOther = q2[other_k] ? q2[other_k].find(new_q => new_q.q === orig_q.q && new_q.a === orig_q.a) : null;
                    if(matchedOther && matchedOther.answerImg) {
                        orig_q.answerImg = matchedOther.answerImg;
                        orig_q.imgCaption = matchedOther.imgCaption;
                        break;
                    }
                }
            }
        });
        q2[k] = q1[k]; // Overwrite with correct length array
    }
});

let out = 'window.QUIZ_DATA = {\n';
const keys = Object.keys(q2);
for(let i=0; i<keys.length; i++) {
    const key = keys[i];
    out += '    "' + key + '": [\n';
    const qs = q2[key].map(q => {
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
console.log('Restoration complete! Wrote to quiz_data_safely_restored.js');
