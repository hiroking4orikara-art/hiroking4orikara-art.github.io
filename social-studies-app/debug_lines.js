const fs = require('fs');

const lines = fs.readFileSync('quiz_data.js', 'utf8').split('\n');
const fixed = [];
let deleteMode = false;

for(let i=0; i<lines.length; i++) {
    // If we see the start of the broken string:
    if (lines[i].includes('「ドイツ共和国憲法」が正式名称です。すべての国民に「人間たるに値する生活」を保障す')) {
        // Just write a clean comment line and skip the broken lines
        fixed.push('            comment: "「ドイツ共和国憲法」が正式名称です。すべての国民に「人間たるに値する生活」を保障することを規定しました。"');
        deleteMode = true;
        continue;
    }
    
    // We stop deleting when we see the END of a block `}`
    if (deleteMode) {
        if (lines[i].includes('}')) {
            deleteMode = false;
            fixed.push(lines[i]); // Keep the closing brace
        }
        continue;
    }
    
    fixed.push(lines[i]);
}

fs.writeFileSync('quiz_data.js', fixed.join('\n'), 'utf8');

try {
    const data = new Function('return '+fixed.join('\n').match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/)[1])();
    console.log("SUCCESSFULLY PARSED AND PATCHED.");
} catch(e) {
    console.log("Still broken:", e.message);
}
