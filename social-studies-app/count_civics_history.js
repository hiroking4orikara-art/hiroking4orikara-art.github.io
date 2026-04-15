const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.includes('quiz_data') && f.endsWith('.js')).sort((a,b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);

files.forEach(b => {
    try {
        let s = fs.readFileSync(b,'utf8');
        // Simple regex to extract JSON-like object
        const match = s.match(/(?:window\.QUIZ_DATA|module\.exports)\s*=\s*(\{[\s\S]*\}\s*);?/);
        if (!match) {
            console.log(b, 'NO MATCH');
            return;
        }
        const d = new Function(`return ${match[1]}`)();
        let civicsCount = 0;
        for(let k in d) {
            if(k.startsWith('c_') || k.startsWith('cw_')) {
                civicsCount += d[k].length;
            }
        }
        console.log(b, civicsCount);
    } catch(e) {
        console.log(b, 'FAILED TO PARSE');
    }
});
