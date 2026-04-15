const fs = require('fs');
const path = require('path');

const dirs = ['歴史', '地理', '公民'];

let totalFiles = 0;
const fileList = [];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else {
      if (item.match(/\.(png|jpe?g|gif)$/i)) {
        fileList.push(fullPath);
        totalFiles++;
      }
    }
  }
}

for (const dir of dirs) {
  scanDir(dir);
}

console.log(`Found ${totalFiles} image files in the provided directories.`);
fs.writeFileSync('available_assets.json', JSON.stringify(fileList, null, 2));
