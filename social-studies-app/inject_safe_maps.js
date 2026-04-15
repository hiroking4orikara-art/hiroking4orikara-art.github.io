const fs = require('fs');

try {
    const injections = require('./map_injection_safe.json');
    const rawContent = fs.readFileSync('quiz_data.js', 'utf8');
    
    fs.writeFileSync('temp_data_eval.js', rawContent + '\nmodule.exports = QUIZ_DATA;');
    const QUIZ_DATA = require('./temp_data_eval.js');

    let count = 0;
    for (const inj of injections) {
        if (inj.new_image) {
            QUIZ_DATA[inj.unit][inj.index].img = inj.new_image;
            QUIZ_DATA[inj.unit][inj.index].answerImg = inj.new_image; 
            QUIZ_DATA[inj.unit][inj.index].imgCaption = "※現在位置が示されたオリジナルマップです";
            count++;
        }
    }

    const finalOutput = 'const QUIZ_DATA = ' + JSON.stringify(QUIZ_DATA, null, 2) + ';\n';
    fs.writeFileSync('quiz_data.js', finalOutput, 'utf8');

    // Also copy to android www
    fs.writeFileSync('../social-studies-app-android/www/quiz_data.js', finalOutput, 'utf8');

    console.log('Successfully injected ' + count + ' safe custom map URLs into quiz_data.js (both web and android-www folders).');
} catch (e) {
    console.error("Injection failed: ", e);
}
