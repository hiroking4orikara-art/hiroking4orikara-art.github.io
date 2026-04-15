const fs = require('fs');

function checkCounts(filename) {
    console.log(`\n--- Checking ${filename} ---`);
    try {
        const str = fs.readFileSync(filename, 'utf8');
        const match = str.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
        if(!match) {
            console.log("Could not find window.QUIZ_DATA");
            return;
        }
        const data = new Function(`return ${match[1]}`)();
        let civicsTotal = 0;
        let geoTotal = 0;
        let histTotal = 0;
        
        for (const [key, questions] of Object.entries(data)) {
            if (key.startsWith('c_') || key.startsWith('cw_')) civicsTotal += questions.length;
            else if (key.startsWith('g_') || key.startsWith('gw_')) geoTotal += questions.length;
            else if (key.startsWith('h_') || key.startsWith('hw_')) histTotal += questions.length;
        }
        
        console.log(`Civics: ${civicsTotal} questions`);
        console.log(`Geo:    ${geoTotal} questions`);
        console.log(`Hist:   ${histTotal} questions`);
        console.log(`Total:  ${civicsTotal + geoTotal + histTotal} questions`);
    } catch(e) {
        console.error("Error reading", e.message);
    }
}

checkCounts('quiz_data.js');
checkCounts('quiz_data_civics_mapped_backup.js');
checkCounts('quiz_data_temp2.js');
checkCounts('quiz_data_patched.js');
