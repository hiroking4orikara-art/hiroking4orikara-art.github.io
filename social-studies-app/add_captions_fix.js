const fs = require('fs');
let text = fs.readFileSync('quiz_data.js', 'utf8');

// Replace Kokusai Renmei
const regex1 = /(a:\s*"国際連盟",\s*img:\s*"images\/h_modern_6_kokusai_renmei_1772283419564\.png",)/;
if (regex1.test(text)) {
    text = text.replace(regex1, '$1\n            imgCaption: "※画像はイメージです",');
}

// Replace Okinawa Sen
const regex2 = /(a:\s*"沖縄県",\s*img:\s*"images\/h_modern_7_okinawa_sen_1772302848029\.png",)/;
if (regex2.test(text)) {
    text = text.replace(regex2, '$1\n            imgCaption: "※画像はイメージです",');
}

fs.writeFileSync('quiz_data.js', text);
console.log('Fixed missing captions for Okinawa and Kokusai Renmei');
