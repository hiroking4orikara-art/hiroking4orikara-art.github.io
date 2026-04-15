const fs = require('fs');
const path = require('path');

const historyImagesDir = path.join(__dirname, 'assets', 'images', 'history');
const imageFiles = fs.readdirSync(historyImagesDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
const quizDataPath = path.join(__dirname, 'quiz_data.js');

let quizDataStr = fs.readFileSync(quizDataPath, 'utf8');

// Replace old paths to new ones
quizDataStr = quizDataStr.replace(/["']images\/(h_[a-z]+_\d+_[a-zA-Z0-9_]+)\.(png|jpg)["']/g, '"assets/images/history/$1.$2"');

fs.writeFileSync('temp_quiz_data.js', quizDataStr.replace('window.QUIZ_DATA = ', 'module.exports = ').replace(/window\.QUIZ_DATA\s*=\s*/g, 'module.exports = '));
const quizData = require('./temp_quiz_data.js');

// Helper to escape regex
const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let newlyApplied = 0;

for (let unit in quizData) {
    if (!unit.startsWith('h_')) continue;

    const questions = quizData[unit];
    for (let i=0; i < questions.length; i++) {
        const q = questions[i];
        
        // Skip if already applied
        if (q.img && q.img.startsWith('assets/images/history/')) continue;

        // Try to find a matching image file for this question
        const candidates = imageFiles.filter(f => f.startsWith(unit));
        if (candidates.length === 0) continue;

        let matchedFile = null;

        for (const file of candidates) {
            const match = file.match(/^(h_[a-z]+_\d+)_(.+?)(?:_\d+)?\.(png|jpg)$/);
            if (!match) continue;
            const key = match[2];

            // Very loose keyword matching
            const aString = JSON.stringify(q.a).replace(/["\[\]]/g, '');
            const qString = q.q;

            const mappings = {
                'egyptian_civ': 'エジプト文明', 'egypt': 'エジプト', 'mesopotamian_civ': 'メソポタミア', 'mesopotamia': 'メソポタミア',
                'hammurabi_code': 'ハンムラビ', 'hammurabi': 'ハンムラビ', 'cuneiform': '楔形', 'shang_dynasty': '殷',
                'oracle_bone': '甲骨', 'buddhism': '仏教', 'christianity': 'キリスト教', 'nile_river': 'ナイル',
                'solar_calendar': '太陽暦', 'euphrates_river': 'ユーフラテス', 'lunar_calendar': '太陰暦', 'hellenistic': 'ヘレニズム',
                'qin_dynasty': '秦', 'han_dynasty': '漢', 'silk_road': 'シルクロード', 'confucianism': '儒教',
                'goguryeo': '高句麗', 'baekje': '百済', 'silla': '新羅', 'mimana': '任那', 'wu_shu': '呉・蜀',
                'dogu': '土偶', 'rice_farming': '稲作', 'kuni_small_countries': 'クニ', 'okimi_great_king': '大王',
                'toraijin': '渡来人', 'wani_scholar': '王仁', 'buddhism_arrival': '仏教', 'uji_kabane': '氏姓',
                'soga_clan': '蘇我', 'shotoku': '聖徳太子', 'suiko_empress': '推古', 'twelve_ranks': '冠位十二階',
                'seventeen_article_constitution': '十七条の憲法', 'kenzuishi': '遣隋使', 'sui_dynasty': '隋', 'ono_no_imoko': '小野妹子',
                'asuka_culture': '飛鳥文化', 'imperial_family': '天皇家', 'taika_reforms': '大化の改新', 'kochi_komin': '公地公民',
                'nakatomi_no_kamatari': '中臣鎌足', 'hakusukinoe': '白村江', 'emperor_tenji': '天智天皇', 'jinshin_war': '壬申',
                'taiho_code': '大宝律令', 'ritsuryo_state': '律令', 'handen': '班田', 'so_tax': '租', 'yo_tax': '庸',
                'wadokaichin': '和同開珎', 'chosan_fleeing': '逃散', 'manyoshu': '万葉集', 'yamanoue_no_okura': '山上憶良',
                'emperor_shomu': '聖武天皇', 'tenpyo_culture': '天平', 'ganjin': '鑑真', 'empress_komyo': '光明皇后',
                'konden_einen_shizai_ho': '墾田永年', 'abe_no_nakamaro': '阿倍仲麻呂', 'heian_kyo': '平安京', 'sakanoue_no_tamuramaro': '坂上田村麻呂',
                'kentoushi_stop': '遣唐使', 'kentoshi': '遣唐使', 'sekkan_seiji': '摂関', 'fujiwara_no_michinaga': '藤原道長', 'yorimichi': '頼通',
                'kana': 'かな', 'kokin': '古今和歌集', 'kuya': '空也', 'owada': '大輪田泊', 'sumitomo': '藤原純友',
                'hogen': '保元', 'heiji': '平治', 'yoritomo': '源頼朝', 'bakufu': '鎌倉幕府', 'shugo': '守護', 'jito': '地頭',
                'goon_hoko': '御恩', 'rokuhara': '六波羅', 'jokyu': '承久', 'hojo_masako': '北条政子', 'tetsuhau': '一騎打ち',
                'hojoki': '方丈記', 'tsurezure': '徒然草', 'kongo': '金剛力士', 'export': '輸出', 'import': '輸入',
                'ginkaku': '銀閣', 'kinkaku': '金閣', 'otogizoushi': '御伽草子', 'shoinzukuri': '書院造', 'suibokuga': '水墨画',
                'za': '座', 'jokamachi': '城下町', 'yamashiro': '山城', 'iwakura': '岩倉', 'chichibu': '秩父',
                'minsen': '民撰', 'petition': '建白', 'yawata': '八幡', 'fukuzawa': '福沢', 'futabatei': '二葉亭',
                'kuroda': '黒田', 'masaoka': '正岡', 'mori': '森鴎外', 'natsume': '夏目', 'taki': '滝廉太郎',
                'tanaka': '田中正造', 'kobayashi': '小林多喜二', 'kawakami': '川上音二郎', 'kenpou': '憲法', 'yamiichi': '闇市',
                'sanfran': 'サンフランシスコ', 'hikaku': '非核', 'koudo': '高度経済', 'kougai': '公害', 'refrigerator': '冷蔵庫',
                'tokyo_oly': 'オリンピック', 'berlin': 'ベルリン', 'bubble': 'バブル', 'it': 'IT', 'junkangata': '循環型',
                'kyoto': '京都議定書', 'shoushi': '少子', '226_jihen': '二・二六', '515_jihen': '五・一五', 'block_keizai': 'ブロック',
                'daitoua_kyoueiken': '大東亜', 'gandhi': 'ガンディー', 'hakkou_ichiu': '八紘一宇', 'hitler': 'ヒトラー',
                'kokka_soudouin': '国家総動員', 'kokusai_renmei': '国際連盟', 'manshu_jihen': '満州事変', 'nankin_jihen': '南京',
                'nitchu_sensou': '日中', 'sekai_kyoukou': '世界恐慌', 'taisei_yokusankai': '大政翼賛会', 'abcd_houijin': 'ABCD',
                'gakudo_sokai': '学童疎開', 'gakuto_shutsujin': '学徒出陣', 'genbaku': '原爆', 'ghq': 'GHQ', 'haikyuusei': '配給',
                'midway': 'ミッドウェー', 'okinawa_sen': '沖縄', 'potsdam': 'ポツダム', 'sangoku_doumei': '三国',
                'taiheiyou_sensou': '太平洋戦争', 'tokyo_daikuushuu': '大空襲', 'tonarigumi': '隣組', 'yalta_kaidan': 'ヤルタ',
                'zeitaku_teki': 'ぜいたく'
            };

            const kw = mappings[key] || key;
            if (aString.includes(kw) || qString.includes(kw)) {
                matchedFile = file;
                break;
            }
        }

        if (matchedFile) {
            const escapedQ = escapeRegExp(q.q);
            const qRegex = new RegExp(`(q:\\s*["']${escapedQ}["']\\s*,[\\s\\S]*?a:\\s*[^,}]+,)`);
            
            if (qRegex.test(quizDataStr)) {
                const replacement = quizDataStr.match(qRegex)[1] + `\n            img: "assets/images/history/${matchedFile}",`;
                quizDataStr = quizDataStr.replace(qRegex, replacement);
                newlyApplied++;
            }
        }
    }
}

fs.writeFileSync(quizDataPath, quizDataStr, 'utf8');
console.log(`Updated paths in quiz_data.js. Newly matched and applied: ${newlyApplied} images.`);
