import fs from 'fs';
let missing = JSON.parse(fs.readFileSync('missing_questions.json', 'utf8'));
let images = JSON.parse(fs.readFileSync('unused_images.json', 'utf8'));

let out = "";
for (let i = 0; i < 50; i++) {
    if (i >= missing.length) break;
    out += `Topic: ${missing[i].topic}, Q: ${missing[i].q}, A: ${missing[i].a}\n`;
}
console.log(out);

out = "";
for (let i = 0; i < 50; i++) {
    if (i >= images.length) break;
    out += `${images[i]}\n`;
}
console.log(out);
