import fs from 'fs';

let unusedImages = JSON.parse(fs.readFileSync('unused_images.json', 'utf8'));
let words = new Set();
for (let img of unusedImages) { // e.g. "h_ancient_1_australopithecus.png"
    let base = img.replace(/\.[^/.]+$/, ""); // remove extension
    base = base.replace(/_\d{13,}/, ''); // remove trailing timestamp like _1771577122087
    // remove prefix
    base = base.replace(/^h_[a-z]+_\d*_?/, ''); 
    base = base.replace(/^h_[a-z]+_/, ''); 
    if (base) {
        words.add(base);
    }
}
console.log(Array.from(words).join(', '));
