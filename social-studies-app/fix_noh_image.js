const fs = require('fs');
const q = require('./quiz_data.js');

let fixed = false;

for (const unit in q) {
    if (unit === 'h_medieval_6') {
        q[unit].forEach(item => {
            const aStr = Array.isArray(item.a) ? item.a.join() : String(item.a||'');
            if (aStr.includes('能')) {
                // If it's the Noh question, and it has kinkaku as image
                if (item.img && item.img.includes('kinkaku')) {
                    console.log('Found Noh question with kinkaku image!');
                    delete item.img;
                    fixed = true;
                }
            }
        });
    }
}

function stringifyQuizData(data) {
    let out = 'const QUIZ_DATA = {\n';
    for (const [unit, items] of Object.entries(data)) {
        out += `    "${unit}": [\n`;
        items.forEach((item, index) => {
            out += '        {\n';
            out += `            q: ${JSON.stringify(item.q)},\n`;
            if (item.choices) out += `            choices: ${JSON.stringify(item.choices)},\n`;
            out += `            a: ${JSON.stringify(item.a)},\n`;
            if (item.img) out += `            img: "${item.img}",\n`;
            if (item.comment) {
                out += `            comment: ${JSON.stringify(item.comment)}\n`;
            } else {
                out = out.replace(/,\n$/, '\n');
            }
            out += '        },\n';
        });
        out += `    ],\n`;
    }
    out += '};\n\ntry {\n    if(typeof window !== "undefined") window.QUIZ_DATA = QUIZ_DATA;\n    module.exports = QUIZ_DATA;\n} catch(e) {}\n';
    return out;
}

if (fixed) {
    fs.writeFileSync('quiz_data.js', stringifyQuizData(q));
    console.log('Fixed Noh image bug successfully.');
} else {
    console.log('No fix needed or question not found.');
}
