const fs = require('fs');

if(fs.existsSync('quiz_data_civics_mapped_backup.js')) {
    let c = fs.readFileSync('quiz_data_civics_mapped_backup.js', 'utf8');
    fs.writeFileSync('quiz_data.js', c);
    console.log("Reset back to clean mapped backup");
} else {
    console.log("Could not find backup!");
}
