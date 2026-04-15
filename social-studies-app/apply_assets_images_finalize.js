const fs = require('fs');
const path = require('path');

const quizDataFile = 'quiz_data.js';
let content = fs.readFileSync(quizDataFile, 'utf8');

// The unused images from previous step
const unusedAssets = [
  'h_ancient_1_australopithecus.png',
  'h_ancient_1_cro_magnon.png',
  'h_ancient_1_egypt_1772304266987.png',
  'h_ancient_1_hammurabi_code.png',
  'h_ancient_1_mesopotamian_civ.png',
  'h_ancient_1_mesopotamia_1772304284010.png',
  'h_ancient_1_nile_river.png',
  'h_ancient_1_peking_man.png',
  'h_ancient_1_solar_calendar.png',
  'h_ancient_2_silk_road.png',
  'h_ancient_4_wani_scholar.png',
  'h_ancient_7_konden_einen_shizai_ho.png',
  'h_ancient_8_manyoshu.png',
  'h_ancient_8_tenpyo_culture.png',
  'h_ancient_8_yamanoue_no_okura.png',
  'h_ancient_buddhism_1772414564492.png',
  'h_ancient_christianity_1772414580245.png',
  'h_ancient_handen_1772414732823.png',
  'h_ancient_heiji_1772415054446.png',
  'h_ancient_hogen_1772415030167.png',
  'h_ancient_kana_1772414903142.png',
  'h_ancient_kentoshi_1772414751956.png',
  'h_ancient_kokin_1772414918054.png',
  'h_ancient_kuya_1772414931137.png',
  'h_ancient_nile_1772414594835.png',
  'h_ancient_owada_1772414997019.png',
  'h_ancient_rice_farming_1772414609121.png',
  'h_ancient_shotoku_1772414719515.png',
  'h_ancient_sumitomo_1772415012889.png',
  'h_ancient_yorimichi_1772414883279.png',
  'h_medieval_shugo_1772415147724.png',
  'h_medieval_yoritomo_1772415133001.png',
  'h_modern_7_gakudo_sokai_1772302809433.png',
  'h_modern_7_genbaku_1772302903759.png'
];

const targets = JSON.parse(fs.readFileSync('actual_targets.json', 'utf8'));

let missingTargets = [];
targets.forEach(t => {
    let qEscaped = t.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`q:\\s*["']${qEscaped}["'][^}]*?image:\\s*["']`);
    if (!regex.test(content)) {
        missingTargets.push(t);
    }
});

let applyCount = 0;

unusedAssets.forEach(imgFilename => {
    // Try to guess the unit
    let unitPrefixMatch = imgFilename.match(/^(h_[a-z]+_\d+)/);
    let unit = unitPrefixMatch ? unitPrefixMatch[1] : null;
    
    // For general prefixes like h_ancient_
    if (!unit) {
        let genPrefixMatch = imgFilename.match(/^(h_[a-z]+_)/);
        if (genPrefixMatch) {
            // Find any missing in this broad era
            const broadUnit = genPrefixMatch[1].replace('_','');
            const possible = missingTargets.find(m => m.unit.startsWith(genPrefixMatch[1]) && !m.assigned);
            if(possible) unit = possible.unit;
        }
    }

    if (unit) {
        const unitMissing = missingTargets.filter(m => m.unit === unit && !m.assigned);
        if (unitMissing.length > 0) {
            const bestMatch = unitMissing[0];
            bestMatch.assigned = true;
            
            let qEscaped = bestMatch.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
            
            content = content.replace(blockRegex, `$1,\n            image: "assets/images/history/${imgFilename}"\n        $2`);
            applyCount++;
        }
    }
});

fs.writeFileSync(quizDataFile, content, 'utf8');
console.log(`Successfully mapped ${applyCount} extra variant images to quiz_data.js.`);
