const fs = require('fs');

const filesToCheck = [
    'quiz_data_civics_mapped_backup.js',
    'quiz_data_temp.js',
    'quiz_data_temp2.js',
    'quiz_data_backup_before_rebuild.js',
    'quiz_data_patched.js',
    'quiz_data_temp_require.js',
    'quiz_data_temp_update.js',
    'quiz_data.js' // Current
];

const allUniqueCivics = {
    'c_1': new Map(),
    'c_2': new Map(),
    'c_3': new Map(),
    'c_4': new Map(),
    'c_5': new Map(),
    'cw_1': new Map()
};

function safeExtractQuestions(filePath) {
    if (!fs.existsSync(filePath)) return;
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Manual block extraction instead of risky AST to avoid syntax errors causing full abort
        for (const sec of Object.keys(allUniqueCivics)) {
            const regex = new RegExp(`"${sec}"\\s*:\\s*\\[([\\s\\S]*?)\\]\\s*,\\s*"[a-z_0-9]+"`, 'g');
            // A more generic finder:
            const sectionIdx = content.indexOf(`"${sec}": [`);
            if (sectionIdx === -1) continue;
            
            // let's try a safer AST parsing just for the single file if possible
            const matchQuiz = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
            if(matchQuiz) {
                try {
                    const parsedData = new Function('return ' + matchQuiz[1])();
                    if(parsedData[sec]) {
                        parsedData[sec].forEach(q => {
                            if (!allUniqueCivics[sec].has(q.q)) {
                                allUniqueCivics[sec].set(q.q, q);
                            } else {
                                // If the new one has an image and the old didn't, upgrade it
                                const existing = allUniqueCivics[sec].get(q.q);
                                if (!existing.answerImg && q.answerImg) {
                                    allUniqueCivics[sec].set(q.q, q);
                                }
                            }
                        });
                    }
                } catch(e) {
                    // console.log(`Parse error in ${filePath} for AST, skipping AST.`);
                }
            }
        }
    } catch(err) {
        console.error("Error reading", filePath, err.message);
    }
}

// 1. First we try AST safely on all
filesToCheck.forEach(safeExtractQuestions);

// Let's also parse the batches directly to ensure NO questions from batches are missing
for (let i = 1; i <= 50; i++) {
    const batchFile = `civics_batch_${i}.json`;
    if (fs.existsSync(batchFile)) {
        try {
            const batchQs = JSON.parse(fs.readFileSync(batchFile, 'utf8'));
            batchQs.forEach(q => {
                const sec = q.section;
                if (allUniqueCivics[sec]) {
                    // Normalize the question object to match what quiz_data expects
                    const cleanQ = {
                        q: q.q,
                        choices: q.choices,
                        a: q.a,
                        comment: q.comment
                    };
                    
                    if (!allUniqueCivics[sec].has(q.q)) {
                        allUniqueCivics[sec].set(q.q, cleanQ);
                    }
                }
            });
        } catch(e) {
            // ignore
        }
    }
}

// And check missing_civics_detailed.json
try {
    const missingDetailed = JSON.parse(fs.readFileSync('missing_civics_detailed.json', 'utf8'));
    missingDetailed.forEach(q => {
        const sec = q.section;
        if(allUniqueCivics[sec] && !allUniqueCivics[sec].has(q.q)) {
             allUniqueCivics[sec].set(q.q, {
                 q: q.q,
                 choices: q.choices || [], // We'll need choices...
                 a: q.a,
                 comment: q.comment
             });
        }
    });
} catch(e){}

let grandTotal = 0;
for (const [sec, map] of Object.entries(allUniqueCivics)) {
    console.log(`${sec}: ${map.size} questions`);
    grandTotal += map.size;
}
console.log(`Grand Total Civics Questions Recovered: ${grandTotal}`);

// We will write a restoration script that injects these back into quiz_data.js
fs.writeFileSync('recovered_civics_questions.json', JSON.stringify(
    Object.fromEntries(
        Object.entries(allUniqueCivics).map(([k, v]) => [k, Array.from(v.values())])
    ), null, 2
));
