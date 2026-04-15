const fs = require('fs');
const quizDataRaw = fs.readFileSync('quiz_data.js', 'utf8');
const searchWords = ['刀剣', '銅銭', '長安', '阿修羅像', '天台宗', '源氏物語', '寝殿造', '定期市', 'てつはう', '金剛力士'];

searchWords.forEach(word => {
    // Search for the line containing `a:` and the word
    const regex = new RegExp('.*a:.*' + word + '.*', 'g');
    const matches = quizDataRaw.match(regex);
    if (matches) {
        console.log(`--- Exact 'a:' lines for: ${word} ---`);
        matches.forEach(m => console.log(m.trim()));
    } else {
        console.log(`No 'a:' line matches for: ${word}`);
    }
});
