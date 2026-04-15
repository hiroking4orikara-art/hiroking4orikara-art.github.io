const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');
const data = new Function('return '+content.match(/window\.QUIZ_DATA\s*=\s*(\{[\s\S]*\}\s*);?/)[1])();

let totals = {};
Object.keys(data).forEach(k => { totals[k] = data[k].length; });

// Tally the total sections
let total_jgeo = 0;
let total_wgeo = 0;
let total_civics = 0;
let total_his = 0;

Object.keys(totals).forEach(k => {
    if (k.startsWith('gj_')) total_jgeo += totals[k];
    if (k.startsWith('gw_')) total_wgeo += totals[k];
    if (k.startsWith('c_') || k.startsWith('cw_')) total_civics += totals[k];
    if (k.startsWith('h_') || k.startsWith('hw_')) total_his += totals[k];
});

let html = fs.readFileSync('index.html', 'utf8');

// Replace specific unit button counts
const unitRegex = /<button[^>]*onclick="startSpecificUnit\('([^']+)'\)"[^>]*>.*?<\/button>/g;
html = html.replace(unitRegex, (match, unitKey) => {
    if (totals[unitKey] !== undefined) {
        // Strip previous count
        let newMatch = match.replace(/（全\d+問）|（\d+問）/, '');
        // Inject new count
        return newMatch.replace(/<\/button>/, `（全${totals[unitKey]}問）</button>`);
    }
    return match;
});

// Replace aggregate geography/history/civics counts
// onclick="showUnitSelection('Geography_World')" > 世界地理（全XX問）
// onclick="startSection('Geography_World')" > 総復習（全XX問）
const sectionRegex = /<button[^>]*onclick="(?:showUnitSelection|startSection)\('([^']+)'\)"[^>]*>.*?<\/button>/g;
html = html.replace(sectionRegex, (match, sectionKey) => {
    let count = 0;
    if (sectionKey === 'Geography_World') count = total_wgeo;
    if (sectionKey === 'Geography_Japan') count = total_jgeo;
    if (sectionKey === 'Civics') count = total_civics;
    if (sectionKey === 'History') count = total_his;

    if (count > 0) {
        let newMatch = match.replace(/（全\d+問）|（\d+問）/, '');
        return newMatch.replace(/<\/button>/, `（全${count}問）</button>`);
    }
    return match;
});

fs.writeFileSync('index.html', html, 'utf8');
console.log(`Updated HTML counts: JGeo=${total_jgeo}, WGeo=${total_wgeo}, Civics=${total_civics}, History=${total_his}`);
