import fs from 'fs';
import mapping from './remaining_dict.js';

let quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const unusedImages = JSON.parse(fs.readFileSync('unused_images.json', 'utf8'));

let changes = 0;
for (const file of unusedImages) {
    if (file.startsWith('bg_')) continue;
    
    let base = file.replace(/\.[^/.]+$/, ""); 
    base = base.replace(/_\d{13,}/, '');
    base = base.replace(/^h_[a-z]+_\d*_?/, ''); 
    base = base.replace(/^h_[a-z]+_/, ''); 
    
    let jpAnswer = mapping[base];
    if (!jpAnswer) continue;
    
    const escapedAnswer = jpAnswer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    const regex = new RegExp(`(a:\\s*(?:\\[.*?|"|').*?${escapedAnswer}.*?(?:"|'|\\])\\s*,)`, 'g');
    let replaced = false;
    
    quizDataStr = quizDataStr.replace(regex, (match) => {
        replaced = true;
        return `${match}\n            img: "assets/images/history/${file}",`;
    });
    
    if (replaced) changes++;
}

fs.writeFileSync('quiz_data_temp2.js', quizDataStr);
console.log(`Applied ${changes} unused images in second pass.`);
