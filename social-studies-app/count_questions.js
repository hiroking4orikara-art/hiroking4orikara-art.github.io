const fs = require('fs');
const quizStr = fs.readFileSync('quiz_data.js', 'utf8');

const matchQuiz = quizStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
const parsedQuiz = new Function('return ' + matchQuiz[1])();

const counts = {};
for(const [k, v] of Object.entries(parsedQuiz)) {
    counts[k] = v.length;
}

console.log('Quiz Counts:', counts);

// Let's also parse `script.js` UNIT_DATA to see how they are rendered
const scriptStr = fs.readFileSync('script.js', 'utf8');
const matchUnits = scriptStr.match(/const UNIT_DATA\s*=\s*(\{[\s\S]*?\});\n/);
if(matchUnits) {
    const unitData = eval('(' + matchUnits[1] + ')');
    
    // Sum up the exam sections if they contain all branch questions
    let h_all_count = 0;
    if(unitData['history']) {
        unitData['history'].forEach(branch => {
            branch.units.forEach(u => {
                if(counts[u.id]) h_all_count += counts[u.id];
            });
        });
    }
    
    let gw_all = 0;
    let gj_all = 0;
    if(unitData['geography']) {
        const gw = unitData['geography'].find(b => b.id === 'g_world');
        if(gw) gw.units.forEach(u => {
            if(u.id !== 'gw_exam' && counts[u.id]) gw_all += counts[u.id];
        });
        
        const gj = unitData['geography'].find(b => b.id === 'g_japan');
        if(gj) gj.units.forEach(u => {
            if(u.id !== 'gj_exam' && counts[u.id]) gj_all += counts[u.id];
        });
    }
    
    let c_all = 0;
    if(unitData['civics']) {
        unitData['civics'].forEach(branch => {
            branch.units.forEach(u => {
                if(counts[u.id]) c_all += counts[u.id];
            });
        });
    }
    
    console.log(`Computed ALLs: h_exam_all=${h_all_count}, gw_exam=${gw_all}, gj_exam=${gj_all}, c_exam_all=${c_all}`);
}
