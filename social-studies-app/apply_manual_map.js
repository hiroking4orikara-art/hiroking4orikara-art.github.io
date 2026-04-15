const fs = require('fs');
const path = require('path');

const historyImagesDir = path.join(__dirname, 'assets', 'images', 'history');
const imageFiles = fs.readdirSync(historyImagesDir);

let content = fs.readFileSync('quiz_data.js', 'utf8');
const missing = JSON.parse(fs.readFileSync('missing_after_assets.json', 'utf8'));

// We need a mapping from Japanese answers to English filenames.
const exactMap = {
  // ancient 1
  'アウストラロピテクス': 'australopithecus',
  '北京原人': 'peking_man',
  'クロマニョン人': 'cro_magnon',
  'エジプト文明': 'egyptian_civ',
  'メソポタミア文明': 'mesopotamian_civ',
  'ハンムラビ法典': 'hammurabi_code',
  '楔形文字': 'cuneiform',
  '殷': 'shang_dynasty',
  '甲骨文字': 'oracle_bone',
  '仏教': 'buddhism',
  'キリスト教': 'christianity',
  'ナイル川': 'nile_river',
  '太陽暦': 'solar_calendar',
  'ユーフラテス川': 'euphrates_river',
  '太陰暦': 'lunar_calendar',
  'ヘレニズム文化': 'hellenistic',
  // ancient 2
  '秦': 'qin_dynasty',
  '漢': 'han_dynasty',
  'シルクロード（絹の道）': 'silk_road',
  '儒教': 'confucianism',
  '高句麗': 'koguryo',
  '百済': 'baekje',
  '新羅': 'silla',
  '任那（加羅）': 'mimana',
  '呉・蜀': 'wu_shu',
  // ancient 3
  '土偶': 'dogu',
  '稲作': 'rice_farming',
  'クニ（小国）': 'kuni',
  // ancient 4
  '大王（おおきみ）': 'okimi',
  '渡来人': 'toraijin',
  '王仁（わに）': 'wani_scholar',
  '氏姓制度': 'shisei_system',
  // ancient 5
  '蘇我氏': 'soga_clan',
  '聖徳太子（厩戸皇子）': 'shotoku_taishi',
  '推古天皇': 'suiko_tenno',
  '冠位十二階': 'kan_i_junikai',
  '十七条の憲法': 'jushichijo_kenpo',
  '遣隋使': 'kenzuishi',
  '隋': 'sui_dynasty',
  '小野妹子': 'ono_no_imoko',
  '飛鳥文化': 'asuka_culture',
  '天皇家（聖徳太子の一族）': 'tennoke',
  // ancient 6
  '大化の改新': 'taika_reform',
  '公地公民': 'kochi_komin',
  '中臣鎌足（藤原鎌足）': 'nakatomi_no_kamatari',
  '白村江の戦い': 'hakusukinoe',
  '天智天皇': 'tenji_tenno',
  '壬申の乱': 'jinshin_war',
  '大宝律令': 'taiho_code',
  '律令国家': 'ritsuryo_state',
  '班田収授法': 'handen_shuju_ho',
  '租': 'so_tax',
  '庸': 'yo_tax',
  '和同開珎': 'wadokaichin',
  // ancient 7
  '逃散': 'chosan',
  '万葉集': 'manyoshu',
  '山上憶良': 'yamanoue_no_okura',
  // ancient 8
  '聖武天皇': 'shomu_tenno',
  '天平文化': 'tenpyo_culture',
  '鑑真': 'ganjin',
  '光明皇后': 'komyo_kogo',
  '墾田永年私財法': 'konden_einen_shizai_ho',
  '阿倍仲麻呂': 'abe_no_nakamaro',
  // ancient 9
  '平安京': 'heiankyo',
  '坂上田村麻呂': 'sakanoue_no_tamuramaro',
  '遣唐使': 'kentoshi',
  '摂関政治': 'sekkan_politics',
  '藤原道長': 'fujiwara_no_michinaga',
  '藤原頼通': 'fujiwara_no_yorimichi',
  'かな文字': 'kana_characters',
  '古今和歌集': 'kokin_wakashu',
  '浄土信仰': 'jodo_belief',
  '空也': 'kuya_monk',
  '大輪田泊': 'owada_no_tomari',
  '藤原純友': 'fujiwara_no_sumitomo',
  '保元の乱': 'hogen_rebellion',
  '平治の乱': 'heiji_rebellion',
  '日宋貿易': 'nisso_trade'
};

let applyCount = 0;

missing.forEach(item => {
    let engName = exactMap[item.a];
    
    let matchIdx = -1;
    if (engName) {
        // Find exact match
        matchIdx = imageFiles.findIndex(f => f.startsWith(`${item.unit}_${engName}`) && f.endsWith('.png'));
    }
    
    if (matchIdx !== -1) {
        const actualImg = imageFiles[matchIdx];
        
        let qEscaped = item.q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const blockRegex = new RegExp(`(q:\\s*["']${qEscaped}["'][^}]*?a:\\s*["'][^"']+["']\\s*)(,}?)`, 'g');
        
        // Ensure not already applied
        if (!content.includes(`assets/images/history/${actualImg}`)) {
            content = content.replace(blockRegex, `$1,\n            image: "assets/images/history/${actualImg}"\n        $2`);
            applyCount++;
            // Remove from array so we don't map it twice to something else
            imageFiles[matchIdx] = ""; 
        }
    }
});

fs.writeFileSync('quiz_data.js', content, 'utf8');
console.log(`Successfully mapped ${applyCount} images to quiz_data.js using manual mapping.`);
