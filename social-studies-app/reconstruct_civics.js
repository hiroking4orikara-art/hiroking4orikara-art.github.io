const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedData = new Function(`return ${matchQuiz[1]}`)();

let allCivics = {};

// We want to reconstruct the 11 units of civics + 1 comprehensive review
const civicsKeys = [
    'c_1_modern_society',
    'c_2_human_rights',
    'c_3_politics',
    'c_4_economy',
    'c_5_global',
    'cw_1_comprehensive'
];

civicsKeys.forEach(k => { allCivics[k] = []; });

for(let i=1; i<=50; i++) {
    const filename = `civics_batch_${i}.json`;
    if(fs.existsSync(filename)) {
        const batch = JSON.parse(fs.readFileSync(filename, 'utf8'));
        // Assign to the respective categories. But wait, how do we know which question goes to which category?
        // We know from the structure! Let's examine `check_remaining_civics.js` which has the counts.
        // Actually, without the original structure mapping, we can just look up `civics_extracted.json` or original source code if any.
    }
}
// Oh wait, `missing_civics_detailed.json` has `section` recorded!
// Wait no, `missing_civics_detailed.json` is missing... oh wait it has 116 missing questions, not ALL 500.

// Hold on, did I break it earlier? Let's check `git status` 
