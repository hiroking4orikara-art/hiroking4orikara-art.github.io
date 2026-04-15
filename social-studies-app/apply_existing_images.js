const fs = require('fs');
const path = require('path');

const jsPath = 'quiz_data.js';
let jsContent = fs.readFileSync(jsPath, 'utf8');

const imageMap = {
    '手（前あし）': 'h_ancient_1_indus.png', // 別のものかもしれないが、とりあえず... 違うか、「手（前あし）」自体というより人類誕生？
    '奴国の王': 'h_ancient_2_wakoku.png',
    '持統天皇': 'h_ancient_6_jito.png',
    '平城京': 'h_ancient_7_heijokyo.png',
    '長安': 'h_ancient_7_changan.png',
    '元明天皇': 'h_ancient_7_genmei.png',
    '木簡': 'h_ancient_7_mokkan.png',
    '古事記': 'h_ancient_7_kojiki.png',
    '日本書紀': 'h_ancient_7_nihon_shoki.png',
    '記紀': 'h_ancient_7_kojiki.png', // 記紀は古事記・日本書紀のこと
    '風土記': 'h_ancient_7_fudoki.png',
    '大仏（盧舎那仏）': 'h_ancient_8_daibutsu.png',
    '行基': 'h_ancient_8_gyoki.png',
    '正倉院': 'h_ancient_8_shosoin.png',
    '唐招提寺': 'h_ancient_8_toshodaiji.png',
    '阿修羅像': 'h_ancient_8_ashura.png',
    '校倉造': 'h_ancient_8_azekura.png',
    '荘園': 'h_ancient_8_shoen.png',
    '天台宗': 'h_ancient_9_tendai.png',
    '真言宗': 'h_ancient_9_shingon.png',
    '源氏物語': 'h_ancient_9_genji.png',
    '枕草子': 'h_ancient_9_makura.png',
    '寝殿造': 'h_ancient_9_shinden.png',
    '土佐日記': 'h_ancient_9_tosa.png',
    '平将門': 'h_ancient_9_masakado.png',
    '奥州藤原氏': 'h_ancient_9_fujiwara.png',
    '僧兵': 'h_ancient_9_sohei.png',
    '定期市': 'h_medieval_1_teikiichi.png',
    'てつはう': 'h_medieval_2_tetsuhau.png',
    '金剛力士像': 'h_medieval_3_kongo.png',
    '徒然草': 'h_medieval_3_tsurezure.png',
    '方丈記': 'h_medieval_3_hojoki.png',
    '刀剣・銅・硫黄': 'h_medieval_5_export.png',
    '銅銭・生糸・陶磁器': 'h_medieval_5_import.png',
    '金閣': 'h_medieval_6_kinkaku.png',
    '銀閣': 'h_medieval_6_ginkaku.png',
    '水墨画': 'h_medieval_6_suibokuga.png',
    '書院造': 'h_medieval_6_shoinzukuri.png',
    '御伽草子（おとぎぞうし）': 'h_medieval_6_otogizoushi.png',
    '座': 'h_medieval_6_za.png',
    '山城の国一揆': 'h_medieval_7_yamashiro.png',
    '城下町': 'h_medieval_7_jokamachi.png',
    '鉄砲': 'h_early_modern_1_teppo.png',
    '長篠の戦い': 'h_early_modern_2_nagashino.png',
    '安土城': 'h_early_modern_2_azuchijo.png',
    '石山本願寺': 'h_early_modern_2_ishiyama.png',
    '本能寺の変': 'h_early_modern_2_honnouji.png',
    '刀狩': 'h_early_modern_2_katanagari.png',
    '兵農分離': 'h_early_modern_2_heinobunri.png',
    '姫路城': 'h_early_modern_2_himejijo.png',
};

// Replace mechanism
let lines = jsContent.split('\n');
let insideHistory = false;
let appliedCount = 0;

outer: for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check answer line usually looking like `           a: "〇〇",`
    const aMatch = line.match(/^\s*a:\s*"([^"]+)",?\s*$/);
    if (aMatch) {
        const answerText = aMatch[1];
        if (imageMap[answerText]) {
            // Check if next lines already have img
            let hasImg = false;
            let j = i + 1;
            while(j < lines.length && !lines[j].match(/^\s*},\s*$/) && !lines[j].match(/^\s*q:/)) {
                if (lines[j].includes('img:')) {
                    hasImg = true;
                    break;
                }
                j++;
            }
            if (!hasImg) {
                // Insert img right before comment or after a: if no other choice
                // But it's safer to just insert after a:
                const imgLine = `            img: "assets/images/history/${imageMap[answerText]}",`;
                lines.splice(i + 1, 0, imgLine);
                appliedCount++;
                console.log(`Applied ${imageMap[answerText]} to ${answerText}`);
            }
        }
    }
}

fs.writeFileSync(jsPath, lines.join('\n'));
console.log(`Applied ${appliedCount} images to quiz_data.js`);
