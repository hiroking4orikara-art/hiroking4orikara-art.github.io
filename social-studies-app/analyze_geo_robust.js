const fs = require('fs');

const content = fs.readFileSync('quiz_data.js', 'utf8');

// The file sets window.QUIZ_DATA, so mock window
let scriptContent = `
const window = {};
${content}
module.exports = window.QUIZ_DATA;
`;

fs.writeFileSync('temp_eval.js', scriptContent);
const ObjectDestructuring = require('./temp_eval');

let geoQuestions = [];

for (const key in ObjectDestructuring) {
    // Geography keys are "gw_" for World and "gj_" for Japan
    if (key.startsWith('gw_') || key.startsWith('gj_')) {
        const unitContent = ObjectDestructuring[key];
        unitContent.forEach((qObj, index) => {
            const q = qObj.q;
            const a = qObj.a;
            
            // It has an image if img or image or answerImg is defined
            const hasImage = !!qObj.img || !!qObj.image || !!qObj.answerImg;

            // Pure map reading questions
            const isMapReading = /(地図|グラフ|雨温図|X|Y|A|B|C|県庁所在地|緯度|経度|ア|イ|ウ|エ|略地図|表から|図中の|次の図|次の表|線)/.test(q) || /(図|表|グラフ)/.test(q);
            
            // Good candidates for visual POST-answer images (landmarks, nature, food, events)
            const isVisualCandidate = /(山|川|平野|盆地|気候|農業|工業|特産物|世界遺産|祭り|漁業|林業|島|半島|湾|海峡|畑|米|果実|野菜|魚|伝統工芸|城|寺|海|砂漠|湖|滝|遺跡|名所|衣服|住居|食事)/.test(q) || /(山|川|平野|盆地|半島|島|りんご|みかん|茶|城|寺|湖|砂漠|遺跡|海)/.test(a);

            geoQuestions.push({
                unit: key,
                index: index,
                q: q,
                a: a,
                hasImage: hasImage,
                isMapReading: isMapReading,
                isVisualCandidate: isVisualCandidate,
                originalObj: qObj
            });
        });
    }
}

const total = geoQuestions.length;
const alreadyHasImage = geoQuestions.filter(q => q.hasImage).length;
const mapReading = geoQuestions.filter(q => q.isMapReading && !q.hasImage).length;
const potentialVisuals = geoQuestions.filter(q => !q.hasImage && q.isVisualCandidate && !q.isMapReading).length;
const generalKnowledge = total - alreadyHasImage - mapReading - potentialVisuals;

console.log(`--- Geography Questions Analysis ---`);
console.log(`Total Geography Questions: ${total}`);
console.log(`Already have images (usually maps): ${alreadyHasImage}`);
console.log(`Map reading/Graph questions without images (should remain text/maps): ${mapReading}`);
console.log(`\nPotential candidates for Answer Images (cultural/nature/food): ${potentialVisuals}`);
console.log(`Other general knowledge: ${generalKnowledge}`);

// Save candidates to review
const candidates = geoQuestions.filter(q => !q.hasImage && q.isVisualCandidate && !q.isMapReading);
fs.writeFileSync('geo_image_candidates.json', JSON.stringify(candidates, null, 2));

console.log(`\nSample Candidates for post-answer visuals:`);
candidates.slice(0, 10).forEach(c => {
  console.log(`[${c.unit}] Q: ${c.q}\n          A: ${c.a}\n`);
});

// Cleanup temp
if (fs.existsSync('temp_eval.js')) {
    fs.unlinkSync('temp_eval.js');
}
