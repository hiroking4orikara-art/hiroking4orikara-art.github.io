const fs = require('fs');

try {
    const rawContent = fs.readFileSync('quiz_data.js', 'utf8');
    
    // Only append if not already there
    if (!rawContent.includes('window.QUIZ_DATA = QUIZ_DATA;')) {
        const fixedContent = rawContent + '\nwindow.QUIZ_DATA = QUIZ_DATA;\n';
        fs.writeFileSync('quiz_data.js', fixedContent, 'utf8');
        fs.writeFileSync('../social-studies-app-android/www/quiz_data.js', fixedContent, 'utf8');
        console.log('Successfully appended window.QUIZ_DATA assignment.');
    } else {
        console.log('Already assigned.');
    }
} catch (e) {
    console.error("Failed: ", e);
}
