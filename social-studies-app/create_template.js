import fs from 'fs';

const unusedImages = JSON.parse(fs.readFileSync('unused_images.json', 'utf8'));

let template = `const mapping = {\n`;

for (const img of unusedImages) {
    if (img.startsWith('bg_')) continue;
    let base = img.replace(/\.[^/.]+$/, ""); // remove extension
    base = base.replace(/_\d{13,}/, ''); // remove trailing timestamp
    base = base.replace(/^h_[a-z]+_\d*_?/, ''); 
    base = base.replace(/^h_[a-z]+_/, ''); 
    
    template += `    '${base}': '', // ${img}\n`;
}

template += `};\n\nmodule.exports = mapping;\n`;

fs.writeFileSync('remaining_template.js', template);
console.log("Template generated at remaining_template.js");
