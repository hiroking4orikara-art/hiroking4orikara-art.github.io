const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, 'quiz_data.js');
let quizData = fs.readFileSync(quizDataPath, 'utf8');

const updates = [
  // modern 1
  { a: '五榜の掲示', img: 'assets/images/history/h_modern_1_gobou.png' },
  { a: '版籍奉還', img: 'assets/images/history/h_modern_1_hanseki.png' },
  { a: '廃藩置県', img: 'assets/images/history/h_modern_1_haihan.png' },
  { a: '苗字（名字）', img: 'assets/images/history/h_modern_1_myouji.png' },
  { a: '徴兵令', img: 'assets/images/history/h_modern_1_chouhei.png' },
  { a: '地租改正', img: 'assets/images/history/h_modern_1_chiso.png' },
  { a: '学制', img: 'assets/images/history/h_modern_1_gakusei.png' },
  { a: '鉄道', img: 'assets/images/history/h_modern_1_tetsudou.png' },
  { a: '前島密', img: 'assets/images/history/h_modern_1_maejima.png' },
  { a: '富国強兵', img: 'assets/images/history/h_modern_1_fukoku.png' },
  { a: '文明開化', img: 'assets/images/history/h_modern_1_bunmei.png' },
  { a: '佐賀の乱', img: 'assets/images/history/h_modern_1_saga.png' },
  { a: '西南戦争', img: 'assets/images/history/h_modern_1_seinan.png' },

  // modern 2
  { a: '自由党', img: 'assets/images/history/h_modern_2_jiyutou.png' },
  { a: '新聞紙条例・讒謗律（ざんぼうりつ）', img: 'assets/images/history/h_modern_2_shinbun.png' },
  { a: '伊藤博文', img: 'assets/images/history/h_modern_2_itou.png' },
  { a: '井上馨', img: 'assets/images/history/h_modern_2_inoue.png' },
  { a: '大日本帝国憲法', img: 'assets/images/history/h_modern_2_dainippon.png' },
  { a: '法律の範囲内で認められた', img: 'assets/images/history/h_modern_2_houritsu.png' },
  { a: '教育勅語', img: 'assets/images/history/h_modern_2_kyouiku.png' },
  { a: '帝国議会', img: 'assets/images/history/h_modern_2_teikoku.png' },
  { a: '直接国税15円以上を納める満25歳以上の男子', img: 'assets/images/history/h_modern_2_senkyoken.png' },

  // modern 3
  { a: '陸奥宗光', img: 'assets/images/history/h_modern_3_mutsu.png' },
  { a: '日清戦争', img: 'assets/images/history/h_modern_3_nisshin.png' },
  { a: '李鴻章', img: 'assets/images/history/h_modern_3_rikyoushou.png' },
  { a: '遼東半島', img: 'assets/images/history/h_modern_3_ryoutou.png' },
  { a: '三国干渉', img: 'assets/images/history/h_modern_3_sangoku.png' },
  { a: '義和団事件', img: 'assets/images/history/h_modern_3_giwadan.png' },
  { a: '日英同盟', img: 'assets/images/history/h_modern_3_nichiei.png' },
  { a: '与謝野晶子', img: 'assets/images/history/h_modern_3_yosano.png' },
  { a: '日露戦争', img: 'assets/images/history/h_modern_3_nichiro.png' },
  { a: 'セオドア・ルーズベルト', img: 'assets/images/history/h_modern_3_roosevelt.png' },
  { a: '樺太（サハリン）の南半分', img: 'assets/images/history/h_modern_3_karafuto.png' },
  { a: '日比谷焼き打ち事件', img: 'assets/images/history/h_modern_3_hibiya.png' },
  { a: '韓国併合', img: 'assets/images/history/h_modern_3_kankoku.png' },
  { a: '小村寿太郎', img: 'assets/images/history/h_modern_3_komura.png' },

  // modern 4
  { a: '鈴木梅太郎', img: 'assets/images/history/h_modern_4_suzuki.png' },
  { a: '高峰譲吉', img: 'assets/images/history/h_modern_4_takamine.png' },
  { a: '高村光雲', img: 'assets/images/history/h_modern_4_takamura.png' },
  { a: '狩野芳崖', img: 'assets/images/history/h_modern_4_kanou.png' },
  { a: '荻原守衛', img: 'assets/images/history/h_modern_4_ogiwara.png' },

  // modern 5
  { a: '国際連盟', img: 'assets/images/history/h_modern_5_kokusai.png' },
  { a: '三・一独立運動', img: 'assets/images/history/h_modern_5_san_ichi.png' },
  { a: '女性解放運動', img: 'assets/images/history/h_modern_5_josei.png' },
  { a: '全国水平社', img: 'assets/images/history/h_modern_5_suiheisha.png' },
  { a: '普通選挙法', img: 'assets/images/history/h_modern_5_fusen.png' },
  { a: '治安維持法', img: 'assets/images/history/h_modern_5_chian.png' },
  { a: 'ラジオ放送', img: 'assets/images/history/h_modern_5_radio.png' },
  { a: '成金', img: 'assets/images/history/h_modern_5_narikin.png' },
  { a: '美濃部達吉', img: 'assets/images/history/h_modern_5_minobe.png' },
  { a: '市川房枝', img: 'assets/images/history/h_modern_5_ichikawa.png' },
  { a: '西田幾多郎', img: 'assets/images/history/h_modern_5_nishida.png' },
  { a: '本多光太郎', img: 'assets/images/history/h_modern_5_honda.png' },
  { a: '柳宗悦', img: 'assets/images/history/h_modern_5_yanagi.png' },

  // contemporary 1
  { a: '教育基本法', img: 'assets/images/history/h_contemporary_1_kyouiku_kihon.png' },
  { a: '女性議員', img: 'assets/images/history/h_contemporary_1_josei_giin.png' },
  { a: '労働三法', img: 'assets/images/history/h_contemporary_1_roudou_sanpou.png' },
  { a: '国際連合', img: 'assets/images/history/h_contemporary_1_kokuren.png' },
  { a: '人間宣言', img: 'assets/images/history/h_contemporary_1_ningen_sengen.png' },

  // contemporary 2
  { a: '中華人民共和国', img: 'assets/images/history/h_contemporary_2_chuuka.png' },
  { a: 'アジア・アフリカ会議（バンドン会議）', img: 'assets/images/history/h_contemporary_2_bandung.png' },
  { a: '日ソ共同宣言', img: 'assets/images/history/h_contemporary_2_nisso.png' },
  { q: '1955年に自由民主党が結成されて以来', a: '55年体制', img: 'assets/images/history/h_contemporary_2_55nen.png' },
  { a: '安保闘争', img: 'assets/images/history/h_contemporary_2_anpo.png' },
  { a: '湯川秀樹', img: 'assets/images/history/h_contemporary_2_yukawa.png' },

  // contemporary 3
  { a: '日韓基本条約', img: 'assets/images/history/h_contemporary_3_nikkan.png' },
  { a: 'ASEAN（東南アジア諸国連合）', img: 'assets/images/history/h_contemporary_3_asean.png' },
  { a: '小笠原諸島', img: 'assets/images/history/h_contemporary_3_ogasawara.png' },
  { a: '日中共同声明', img: 'assets/images/history/h_contemporary_3_nicchu_kyoudou.png' },
  { a: '日中平和友好条約', img: 'assets/images/history/h_contemporary_3_nicchu_heiwa.png' },

  // contemporary 4
  { a: '湾岸戦争', img: 'assets/images/history/h_contemporary_4_wangan.png' },
  { a: 'PKO協力法', img: 'assets/images/history/h_contemporary_4_pko.png' },
  { a: 'EU（欧州連合）', img: 'assets/images/history/h_contemporary_4_eu.png' },
  { a: '阪神・淡路大震災', img: 'assets/images/history/h_contemporary_4_hanshin_awaji.png' },
  { a: 'オウム真理教', img: 'assets/images/history/h_contemporary_4_aum.png' },
  { a: '消費税', img: 'assets/images/history/h_contemporary_4_shouhizei.png' },
  { q: '1993年、細川護煕を首相とする連立政権が誕生し', a: '55年体制', img: 'assets/images/history/h_contemporary_4_55nen_owari.png' },

  // contemporary 5
  { a: 'アメリカ同時多発テロ', img: 'assets/images/history/h_contemporary_5_911.png' },
  { a: 'パリ協定', img: 'assets/images/history/h_contemporary_5_paris.png' },
  { a: 'SDGs', img: 'assets/images/history/h_contemporary_5_sdgs.png' },
  { a: '竹島', img: 'assets/images/history/h_contemporary_5_takeshima.png' }
];

let addedCount = 0;

for (const update of updates) {
  const parsedAnswer = update.a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  if (update.q) {
      // Need to match specific q to distinguish duplicate 'a'
      const parsedQ = update.q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const complexRegex = new RegExp(`(q:\\s*["'].*?${parsedQ}.*?["']\\s*,\\s*\\n\\s*a:\\s*["']${parsedAnswer}["']\\s*,)`);
      if (complexRegex.test(quizData)) {
          let matchIndex = quizData.search(complexRegex);
          const subsequentText = quizData.substring(matchIndex, matchIndex + 300);
          if (!subsequentText.includes('img:')) {
              quizData = quizData.replace(complexRegex, `$1\n            img: "${update.img}",`);
              console.log(`Added img for: ${update.a} (with q restriction)`);
              addedCount++;
          }
      } else {
          console.log(`Warning: Q/A pair not found -> Q:${update.q} A:${update.a}`);
      }
  } else {
      // Normal replacement
      const regex = new RegExp(`(a:\\s*["']${parsedAnswer}["']\\s*,)`);
      if (regex.test(quizData)) {
          let matchIndex = quizData.search(regex);
          const subsequentText = quizData.substring(matchIndex, matchIndex + 200);
          if (!subsequentText.includes('img:')) {
              quizData = quizData.replace(regex, `$1\n            img: "${update.img}",`);
              console.log(`Added img for: ${update.a}`);
              addedCount++;
          }
      } else {
          console.log(`Warning: Answer not found in quiz_data.js -> ${update.a}`);
      }
  }
}

fs.writeFileSync(quizDataPath, quizData, 'utf8');
console.log('Update completed successfully. Added ' + addedCount + ' images.');
