const fs = require('fs');
const path = require('path');

const quizDataStr = fs.readFileSync('quiz_data.js', 'utf8');
const missingData = JSON.parse(fs.readFileSync('all_missing_images.json', 'utf8'));
const files = fs.readdirSync('images/history').filter(f => f.startsWith('pop_'));

const getEnglishKeywords = (answer) => {
    const a = answer;
    if (a.includes('農業技術')) return ['agricultural_tech'];
    if (a.includes('阿氐河荘')) return ['ategawa_no_sho'];
    if (a.includes('百済')) return ['baekje'];
    if (a.includes('仏教')) return ['buddhism'];
    if (a.includes('分割相続')) return ['bunkatsu_sozoku'];
    if (a.includes('キリスト教')) return ['christianity'];
    if (a.includes('儒教')) return ['confucianism'];
    if (a.includes('くさび形')) return ['cuneiform'];
    if (a.includes('土偶')) return ['dogu'];
    if (a.includes('ピラミッド')) return ['egypt_pyramid'];
    if (a.includes('ユーフラテス')) return ['euphrates'];
    if (a.includes('加耶')) return ['gaya'];
    if (a.includes('元寇')) return ['genko'];
    if (a.includes('高句麗')) return ['goguryeo'];
    if (a.includes('御成敗式目')) return ['goseibai_shikimoku'];
    if (a.includes('牛馬耕')) return ['gyubako'];
    if (a.includes('ハンムラビ')) return ['hammurabi'];
    if (a === '漢') return ['han_dynasty'];
    if (a.includes('ヘレニズム')) return ['hellenistic'];
    if (a.includes('北条時政')) return ['hojo_tokimasa'];
    if (a.includes('北条時宗')) return ['hojo_tokimune'];
    if (a.includes('北条義時')) return ['hojo_yoshitoki'];
    if (a === '国（小国）') return ['kuni'];
    if (a.includes('太陰暦')) return ['lunar_calendar'];
    if (a.includes('政所')) return ['mandokoro'];
    if (a.includes('メソポタミア')) return ['mesopotamia'];
    if (a.includes('源実朝')) return ['minamoto_sanetomo'];
    if (a.includes('木曽義仲')) return ['minamoto_yoshinaka'];
    if (a.includes('問注所')) return ['monchujo'];
    if (a.includes('ナイル川')) return ['nile_river'];
    if (a.includes('二毛作')) return ['nimosaku'];
    if (a.includes('大王')) return ['okimi'];
    if (a.includes('甲骨文字')) return ['oracle_bone'];
    if (a === '秦') return ['qin_dynasty'];
    if (a.includes('稲作')) return ['rice_farming'];
    if (a.includes('侍所')) return ['samurai_dokoro'];
    if (a === '殷') return ['shang_dynasty'];
    if (a.includes('シルクロード')) return ['silk_road'];
    if (a.includes('新羅')) return ['silla'];
    if (a.includes('太陽暦')) return ['solar_calendar'];
    if (a.includes('三国時代')) return ['three_kingdoms'];
    if (a.includes('徳政令')) return ['tokuseirei'];
    if (a.includes('渡来人')) return ['toraijin'];
    if (a.includes('王仁')) return ['wani'];
    if (a.includes('流鏑馬')) return ['yabusame'];
    return [];
};

let content = quizDataStr;
let matchedCount = 0;

for (const item of missingData) {
    if (!item.unit.startsWith('h_')) continue;
    
    const keys = getEnglishKeywords(item.answer);
    if (keys.length > 0) {
        // Find matching file
        const matchingFile = files.find(f => keys.some(k => f.includes('pop_' + k)));
        if (matchingFile) {
            const qEscaped = item.question.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const aEscaped = item.answer.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const regex = new RegExp(`({[^}]*?q:\\s*['"]${qEscaped}['"][^}]*?a:\\s*['"]${aEscaped}['"][^}]*?)(})`);
            
            if (regex.test(content)) {
                content = content.replace(regex, `$1, img: 'images/history/${matchingFile}' $2`);
                console.log(`Mapped ${item.answer} -> ${matchingFile}`);
                matchedCount++;
            }
        }
    }
}

fs.writeFileSync('quiz_data.js', content);
console.log(`Done! Mapped ${matchedCount} images.`);
