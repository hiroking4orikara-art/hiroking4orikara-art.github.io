const fs = require('fs');
const content = fs.readFileSync('quiz_data_safely_restored.js', 'utf8');
const match = content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
if (!match) {
    console.log("Regex to find window.QUIZ_DATA failed.");
    process.exit(1);
}
const data = new Function('return ' + match[1])();
['c_1', 'c_2', 'c_3', 'c_4', 'c_5', 'cw_1'].forEach(k => {
    console.log(k, data[k].length, 'questions');
    const missingChoices = data[k].filter(q => !q.choices || q.choices.length === 0);
    if(missingChoices.length > 0) console.log('  -> Missing choices:', missingChoices.length);
});
