const fs = require('fs');

const parsedDataStr = fs.readFileSync('quiz_data_temp_update.js', 'utf8');

const matchQuiz = parsedDataStr.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/);
try {
    const backupData = new Function(`return ${matchQuiz[1]}`)();
    console.log("Found backup! gw_3 length:", backupData.gw_3.length);

    fs.writeFileSync('true_gw3.json', JSON.stringify(backupData.gw_3, null, 4));
    console.log("Saved correct Europe questions to true_gw3.json");

} catch(e) {
    console.error(e);
}
