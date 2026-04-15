const QUIZ_DATA = {
    "gw_1": [
        {
            q: "地球の表面積のうち、陸地と海洋の割合はおよそいくつか？",
            choices: ["3：7","7：3","4：6","5：5"],
            a: "3：7",
            comment: "陸地が約3、海洋が約7の割合です。",
            answerImg: "assets/images/geography/g_gw_1_01_earth_surface_1773408157220.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "地球上で最も面積が大きい大陸はどれか？",
            choices: ["ユーラシア大陸","アフリカ大陸","北アメリカ大陸","南アメリカ大陸"],
            a: "ユーラシア大陸",
            comment: "ユーラシア大陸が最大で、オーストラリア大陸が最小です。",
            answerImg: "assets/images/geography/g_gw_1_02_eurasia_continent_1773408174374.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "世界で最も広い海洋はどれか？",
            choices: ["太平洋","大西洋","インド洋","北極海"],
            a: "太平洋",
            comment: "太平洋、大西洋、インド洋を「三大洋」と呼びます。",
            answerImg: "assets/images/geography/g_gw_1_0_pacific_1773376211209.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "本初子午線が通る都市はどこか？",
            choices: ["ロンドン","パリ","ニューヨーク","東京"],
            a: "ロンドン",
            comment: "イギリスのロンドン（旧グリニッジ天文台）を通る線が経度0度です。",
            answerImg: "assets/images/geography/g_gw_1_04_prime_meridian_1773408212217.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "緯度0度の線を何というか？",
            choices: ["赤道","本初子午線","日付変更線","回帰線"],
            a: "赤道",
            comment: "赤道を境に北を北半球、南を南半球と呼びます。",
            answerImg: "assets/images/geography/g_gw_1_05_equator_1773408232565.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "東南アジアや南アジアでよく見られる、高温多湿な気候に適した住居は？",
            choices: ["高床式の住居","レンガ造りの家","ゲル","イグルー"],
            a: "高床式の住居",
            comment: "風通しを良くし、湿気や熱を防ぐために床を高くしています。",
            answerImg: "assets/images/geography/g_gw_1_06_stilt_house_1773408251697.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "乾燥した地域で、日干しレンガを使って作られる家の特徴は？",
            choices: ["窓が小さい","屋根が急勾配","高床式になっている","木材を多く使う"],
            a: "窓が小さい",
            comment: "外の熱気が中に入らないように、窓を小さく壁を厚くします。",
            answerImg: "assets/images/geography/g_gw_1_07_adobe_house_1773408276138.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "モンゴルの遊牧民が移動生活で使用する組み立て式の住居を何というか？",
            choices: ["ゲル","パオ","イグルー","高床式住居"],
            a: "ゲル",
            comment: "中国ではパオとも呼ばれますが、モンゴルではゲルと呼びます。",
            answerImg: "assets/images/geography/g_gw_1_1_ger_1773376225399.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "赤道周辺に広がる、一年中気温が高く雨が多い気候帯は？",
            choices: ["熱帯","乾燥帯","温帯","冷帯"],
            a: "熱帯",
            comment: "熱帯雨林やサバナ気候が含まれます。",
            answerImg: "assets/images/geography/g_gw_1_2_tropical_1773376240404.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "樹木が育たないほど雨が少ない気候帯は？",
            choices: ["乾燥帯","熱帯","冷帯","寒帯"],
            a: "乾燥帯",
            comment: "砂漠気候やステップ気候が含まれます。",
            answerImg: "assets/images/geography/g_gw_1_3_dry_1773376252908.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本が属している、四季の変化がはっきりしている気候帯は？",
            choices: ["温帯","熱帯","冷帯","寒帯"],
            a: "温帯",
            comment: "温暖湿潤気候などが含まれます。",
            answerImg: "assets/images/geography/g_gw_1_4_temperate_1773376264811.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "北半球の北部に見られる、冬の寒さが厳しく、タイガと呼ばれる針葉樹林が広がる気候帯は？",
            choices: ["冷帯（亜寒帯）","寒帯","温帯","乾燥帯"],
            a: "冷帯（亜寒帯）",
            comment: "夏は短いが気温が上がり、樹木が育ちます。",
            answerImg: "assets/images/geography/g_gw_1_12_subarctic_climate_1773408377471.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "最も小さい大陸はどれか？",
            choices: ["オーストラリア大陸","南極大陸","南アメリカ大陸","北アメリカ大陸"],
            a: "オーストラリア大陸",
            comment: "六大陸の中で最小です。",
            answerImg: "assets/images/geography/g_gw_1_13_australia_continent_1773408398552.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "地球儀における、距離や面積、方位などが正しいかを表すための「縦の線」を何というか？",
            choices: ["経線","緯線","赤道","回帰線"],
            a: "経線",
            comment: "北極と南極を結ぶ縦の線を経線と呼びます。",
            answerImg: "assets/images/geography/g_gw_1_14_longitude_1773408421627.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "地球儀における「横の線」を何というか？",
            choices: ["緯線","経線","子午線","日付変更線"],
            a: "緯線",
            comment: "赤道に平行な横の線を緯線と呼びます。",
            answerImg: "assets/images/geography/g_gw_1_15_latitude_1773408442096.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "経度180度の線のほぼ上にある、日付が変わる基準となる線を何というか？",
            img: "assets/images/geography/map_world_blank_pacific_1771577772064.png",
            choices: ["日付変更線","本初子午線","赤道","北回帰線"],
            a: "日付変更線",
            comment: "この線を東に越えるときは日付を1日戻し、西に越えるときは1日進めます。",
            answerImg: "assets/images/geography/g_gw_1_16_international_date_line_1773408586038.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "経度が15度違うと、時間の差（時差）は何時間になるか？",
            choices: ["1時間","2時間","3時間","4時間"],
            a: "1時間",
            comment: "360度 ÷ 24時間 ＝ 15度 なので、15度で1時間の時差が生まれます。",
            answerImg: "assets/images/geography/g_gw_1_17_time_difference_1773408631161.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "北極を中心とした地図（正距方位図法）の特徴として正しいものは？",
            choices: ["中心からの距離と方位が正しい","面積が正しい","角度が正しい","すべて正しい"],
            a: "中心からの距離と方位が正しい",
            comment: "航空図などに利用されます。",
            answerImg: "assets/images/geography/g_gw_1_18_azimuthal_projection_1773408654977.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "面積が正しい地図（モルワイデ図法など）は何に使われることが多いか？",
            choices: ["分布図","航海図","航空図","路線図"],
            a: "分布図",
            comment: "人口密度や生産量などの分布を表すの適しています。",
            answerImg: "assets/images/geography/g_gw_1_19_mollweide_projection_1773408677177.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "角度が正しい地図（メルカトル図法）は何に使われることが多いか？",
            choices: ["航海図","分布図","航空図","面積図"],
            a: "航海図",
            comment: "等角航路が直線で表されるため、航海に適しています。",
            answerImg: "assets/images/geography/g_gw_1_20_mercator_projection_1773408702471.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "世界を6つの州に分けたとき、日本が含まれる州はどこか？",
            choices: ["アジア州","オセアニア州","ヨーロッパ州","北アメリカ州"],
            a: "アジア州",
            comment: "ユーラシア大陸の東部に位置します。",
            answerImg: "assets/images/geography/g_gw_1_21_asia_1773408723490.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ヨーロッパ州とアジア州を合わせた大陸を何と呼ぶか？",
            img: "assets/map_eurasia.png",
            choices: ["ユーラシア大陸","パンゲア大陸","アフロユーラシア大陸","ゴンドワナ大陸"],
            a: "ユーラシア大陸",
            comment: "ヨーロッパ（Europe）とアジア（Asia）を合わせた造語です。",
            answerImg: "assets/images/geography/g_gw_1_22_eurasia_1773408745792.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "カナダのイヌイットがかつて冬の住居として使っていた、雪を固めて作ったドーム型の家は？",
            choices: ["イグルー","ゲル","高床式住居","テント"],
            a: "イグルー",
            comment: "寒さを防ぐための工夫がされています。",
            answerImg: "assets/images/geography/g_gw_1_23_igloo_1773408761912.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アンデス山脈などの高地で飼育されている、毛を利用するための家畜は？",
            img: "assets/images/geography/map_samerica_blank_1771578045409.png",
            choices: ["アルパカ・リャマ","ヒツジ","ラクダ","ウシ"],
            a: "アルパカ・リャマ",
            comment: "高地の環境に適応した動物です。",
            answerImg: "assets/images/geography/g_gw_1_24_alpaca_1773408784872.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "地中海沿岸で見られる、夏の乾燥と冬の降雨という気候は何というか？",
            img: "assets/map_europe_climate.png",
            choices: ["地中海性気候","西岸海洋性気候","温暖湿潤気候","熱帯モンスーン気候"],
            a: "地中海性気候",
            comment: "オリーブやブドウの栽培（地中海式農業）が盛んです。",
            answerImg: "assets/images/geography/g_gw_1_25_mediterranean_climate_1773408807615.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "偏西風と暖流の影響で、高緯度のわりに冬でも温暖な西ヨーロッパの気候は？",
            img: "assets/map_europe_climate.png",
            choices: ["西岸海洋性気候","地中海性気候","温暖湿潤気候","冷帯湿潤気候"],
            a: "西岸海洋性気候",
            comment: "ロンドンなどがこの気候に属します。",
            answerImg: "assets/images/geography/g_gw_1_26_west_coast_marine_climate_1773408822749.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "寒帯のうち、短い夏にコケ類のみが育つ気候を何というか？",
            choices: ["ツンドラ気候","氷雪気候","冷帯気候","乾燥気候"],
            a: "ツンドラ気候",
            comment: "氷雪気候は一年中氷と雪に覆われています。",
            answerImg: "assets/images/geography/g_gw_1_5_tundra_1773376278600.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "南半球のオーストラリアなどが属する州を何というか？",
            choices: ["オセアニア州","アジア州","南アメリカ州","南極州"],
            a: "オセアニア州",
            comment: "多くの島々が含まれます。",
            answerImg: "assets/images/geography/g_gw_1_28_oceania_1773408866236.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "世界で最も人口が多い国（2023年時点）はどこか？",
            choices: ["インド","中国","アメリカ","インドネシア"],
            a: "インド",
            comment: "中国を抜いて世界一となりました。",
            answerImg: "assets/images/geography/g_gw_1_29_high_population_1773408883320.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国境線が直線的になっていることが多い地域はどこか？",
            choices: ["アフリカ","アジア","ヨーロッパ","南アメリカ"],
            a: "アフリカ",
            comment: "植民地時代に緯線や経線を使って人為的に引かれたためです。",
            answerImg: "assets/images/geography/g_gw_1_30_africa_borders_1773408905035.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "地球の反対側の地点のことを何というか？",
            choices: ["対蹠点（たいせきてん）","子午線","偏西風","回帰線"],
            a: "対蹠点（たいせきてん）",
            comment: "日本の対蹠点は南アメリカのアマゾン川河口付近（ブラジル沖）です。",
            answerImg: "assets/images/geography/g_gw_1_31_antipode_1773409009447.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ロンドンが昼の12時のとき、日本の時刻は何時か？（時差は9時間）",
            choices: ["午後9時（21時）","午前3時","午後3時（15時）","翌日の午前9時"],
            a: "午後9時（21時）",
            comment: "日本はイギリスより9時間進んでいます（GMT+9）。",
            answerImg: "assets/images/geography/g_gw_1_32_london_japan_time_1773409029828.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "南アメリカのブラジルで主に話されている言語は何か？",
            choices: ["ポルトガル語","スペイン語","英語","フランス語"],
            a: "ポルトガル語",
            comment: "南アメリカの多くの国はスペイン語ですが、ブラジルはポルトガル語です。",
            answerImg: "assets/images/geography/g_gw_1_33_brazil_portuguese_1773409041623.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "東南アジア諸国連合の略称は？",
            img: "assets/images/history/h_contemporary_3_asean_1773343491452.png",
            choices: ["ASEAN","EU","NATO","APEC"],
            a: "ASEAN",
            comment: "東南アジアの経済・文化的発展を目的に結成されました。",
            answerImg: "assets/images/geography/g_gw_1_34_asean_1773409059880.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ヨーロッパ連合の略称は？",
            img: "assets/images/history/h_contemporary_4_eu_1773343658446.png",
            choices: ["EU","UN","NATO","ASEAN"],
            a: "EU",
            comment: "多くの加盟国で共通通貨ユーロが導入されています。",
            answerImg: "assets/images/geography/g_gw_1_35_eu_1773409080888.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "イスラム教徒が食べない肉は何か？",
            choices: ["豚肉","牛肉","鶏肉","羊肉"],
            a: "豚肉",
            comment: "イスラム教では豚肉を食べることが禁じられています。",
            answerImg: "assets/images/geography/g_gw_1_36_islam_pork_1773409093824.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ヒンドゥー教で神聖な動物とされ、食べることを避けられているのは？",
            choices: ["牛","豚","鶏","羊"],
            a: "牛",
            comment: "インドの人口の多くを占めるヒンドゥー教徒は牛肉を食べません。",
            answerImg: "assets/images/geography/g_gw_1_37_hindu_cow_1773409114989.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "世界で最も信者数が多い宗教は？",
            img: "assets/images/history/h_ancient_christianity_1772414580245.png",
            choices: ["キリスト教","イスラム教","ヒンドゥー教","仏教"],
            a: "キリスト教",
            comment: "ヨーロッパ、南北アメリカ、オセアニアなどで広く信仰されています。",
            answerImg: "assets/images/geography/g_gw_1_38_christianity_1773409130615.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "インドの女性が着る、一枚の長い布を巻く民族衣装は？",
            choices: ["サリー","ポンチョ","チャドル","キルト"],
            a: "サリー",
            comment: "地域やカーストによって着方が異なります。",
            answerImg: "assets/images/geography/g_gw_1_39_sari_1773409150172.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アンデス山脈の先住民が着る、防寒用のマントのような衣服は？",
            choices: ["ポンチョ","サリー","アオザイ","キルト"],
            a: "ポンチョ",
            comment: "高地の寒さに対応するため、リャマやアルパカの毛で織られます。",
            answerImg: "assets/images/geography/g_gw_1_40_poncho_1773409171359.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "東南アジアや東アジアの主食として広く栽培されている作物は？",
            choices: ["米","小麦","トウモロコシ","ジャガイモ"],
            a: "米",
            comment: "雨が多く高温な地域（モンスーンアジア）に稲作が適しています。",
            answerImg: "assets/images/geography/g_gw_1_41_rice_paddy_1773409184522.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ヨーロッパや北アメリカで主食として広く食べられている作物は？",
            choices: ["小麦","米","トウモロコシ","キャッサバ"],
            a: "小麦",
            comment: "比較的乾燥した涼しい気候でも育ち、パンやパスタに加工されます。",
            answerImg: "assets/images/geography/g_gw_1_42_wheat_field_1773409202935.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "熱帯のうち、雨季と乾季がはっきり分かれ、背の高い草が生える気候は？",
            choices: ["サバナ気候","熱帯雨林気候","ステップ気候","砂漠気候"],
            a: "サバナ気候",
            comment: "ライオンやキリンなどの野生動物が多く生息しています。",
            answerImg: "assets/images/geography/g_gw_1_6_savanna_1773376290331.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "熱帯雨林地域でよく見られる、午後に降る激しい雨を何というか？",
            choices: ["スコール","モンスーン","タイフーン","サイクロン"],
            a: "スコール",
            comment: "短時間に激しく降り、気温を一時的に下げます。",
            answerImg: "assets/images/geography/g_gw_1_44_squall_1773409244561.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "地中海沿岸の家々で、壁を白く塗ったり石造りにしたりする理由は？",
            choices: ["夏の強い日差しや熱を防ぐため","冬の寒さを防ぐため","雨を防ぐため","宗教的な理由"],
            a: "夏の強い日差しや熱を防ぐため",
            comment: "石造りは熱を通しにくく、白壁は日光を反射します。",
            answerImg: "assets/images/geography/g_gw_1_7_mediterranean_houses_1773376305008.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "オーストラリアやニュージーランドの国旗に描かれている、イギリスとの結びつきを示す模様は？",
            choices: ["ユニオンジャック","星条旗","トリコロール","日の丸"],
            a: "ユニオンジャック",
            comment: "かつてイギリスの植民地であった歴史を示しています。",
            answerImg: "assets/images/geography/g_gw_1_46_union_jack_flag_1773409327640.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ブラジル、ロシア、インド、中国、南アフリカなどの新興経済国を総称して何と呼ぶか？",
            choices: ["BRICS","ASEAN","EU","OPEC"],
            a: "BRICS",
            comment: "それぞれの国名の頭文字をとっています（Brazil, Russia, India, China, South Africa）。",
            answerImg: "assets/images/geography/g_gw_1_47_brics_1773409347816.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "西アジア（中東）の国々が多く産出し、経済を支えている資源は？",
            choices: ["石油（原油）","石炭","鉄鉱石","ダイヤモンド"],
            a: "石油（原油）",
            comment: "石油埋蔵量が多く、OPEC（石油輸出国機構）に加盟する国が多いです。",
            answerImg: "assets/images/geography/g_gw_1_48_middle_east_oil_1773409362400.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "世界で最も面積の大きい国は？",
            choices: ["ロシア","カナダ","アメリカ","中国"],
            a: "ロシア",
            comment: "ユーラシア大陸の北部に広がる世界最大の国です。",
            answerImg: "assets/images/geography/g_gw_1_49_russia_1773409382295.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本の標準時子午線は東経何度か？",
            choices: ["東経135度","東経140度","東経130度","東経180度"],
            a: "東経135度",
            comment: "兵庫県明石市を通る線です。",
            answerImg: "assets/images/geography/g_gw_1_50_akashi_meridian_1773409400594.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本から見て、地球上で最も遠い（裏側にある）大陸は？",
            choices: ["南アメリカ大陸","アフリカ大陸","北アメリカ大陸","ヨーロッパ大陸"],
            a: "南アメリカ大陸",
            comment: "日本の対蹠点（裏側）は南米付近です。",
            answerImg: "assets/images/geography/g_gw_1_51_south_america_antipode_1773409416566.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "南極大陸にある、各国の観測基地での活動が制限されている条約は？",
            choices: ["南極条約","ワシントン条約","ラムサール条約","京都議定書"],
            a: "南極条約",
            comment: "軍事利用の禁止や領有権の凍結などが定められています。",
            answerImg: "assets/images/geography/g_gw_1_52_antarctic_treaty_1773409439983.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "北緯40度以北の都市が多いヨーロッパで、冬でも比較的暖かい理由に関係する海流は？",
            choices: ["北大西洋海流（暖流）","黒潮（日本海流）","親潮（千島海流）","ペルー海流"],
            a: "北大西洋海流（暖流）",
            comment: "暖流の上を吹く偏西風が暖かさを運びます。",
            answerImg: "assets/images/geography/g_gw_1_8_north_atlantic_drift_1773376317324.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "イタリアやフランスなどで盛んな、オリーブやブドウを作る農業を何というか？",
            choices: ["地中海式農業","焼畑農業","プランテーション農業","酪農"],
            a: "地中海式農業",
            comment: "夏の乾燥に強い作物を育てます。",
            answerImg: "assets/images/geography/g_gw_1_54_mediterranean_agriculture_1773409483665.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アメリカ合衆国のように、多様な民族や文化が混在している社会を何というか？",
            choices: ["多文化社会","単一民族国家","カースト社会","福祉国家"],
            a: "多文化社会",
            comment: "「人種のるつぼ」や「サラダボウル」と呼ばれたりします。",
            answerImg: "assets/images/geography/g_gw_1_55_melting_pot_1773409504851.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中国の人口の9割以上を占める民族は？",
            choices: ["漢民族","チベット民族","ウイグル民族","モンゴル民族"],
            a: "漢民族",
            comment: "中国には55の少数民族も暮らしています。",
            answerImg: "assets/images/geography/g_gw_1_56_han_chinese_1773409522197.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "東南アジアで信仰する人が多い、仏教やイスラム教以外の宗教は、フィリピンなどで何が多いか？",
            img: "assets/images/history/h_ancient_christianity_1772414580245.png",
            choices: ["キリスト教","ヒンドゥー教","ユダヤ教","神道"],
            a: "キリスト教",
            comment: "フィリピンはスペインの植民地時代の影響でキリスト教徒（カトリック）が多いです。",
            answerImg: "assets/images/geography/g_gw_1_57_christianity_philippines_1773409542155.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アフリカ大陸で広く話されている、植民地時代の宗主国の言葉ではない言語群は？",
            choices: ["スワヒリ語など","英語","フランス語","ポルトガル語"],
            a: "スワヒリ語など",
            comment: "現地の共通語としてスワヒリ語などが使われますが、公用語として英語やフランス語が使われる国も多いです。",
            answerImg: "assets/images/geography/g_gw_1_58_african_languages_1773409555890.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "オーストラリアの先住民を何というか？",
            choices: ["アボリジニ","マオリ","インディアン","イヌイット"],
            a: "アボリジニ",
            comment: "独自の文化や美術（アボリジナルアート）を持っています。マオリはニュージーランドです。",
            answerImg: "assets/images/geography/g_gw_1_59_aboriginal_1773409575649.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ニュージーランドの先住民を何というか？",
            choices: ["マオリ","アボリジニ","インディオ","サーミ"],
            a: "マオリ",
            comment: "ラグビーの試合前に行う「ハカ」という踊りが有名です。",
            answerImg: "assets/images/geography/g_gw_1_60_maori_1773409589887.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "三大洋に含まれない海洋は？",
            choices: ["北極海","太平洋","大西洋","インド洋"],
            a: "北極海",
            comment: "北極海は三大洋には含まれません。",
            answerImg: "assets/images/geography/g_gw_1_9_arctic_ocean_1773376331985.png",
            imgCaption: "※画像はイメージです"
        }
    ],
    "gw_2": [
        {
            q: "中国の人口の9割以上を占める民族は何か？",
            choices: ["漢民族","チベット民族","ウイグル民族","モンゴル民族"],
            a: "漢民族",
            comment: "残りの約1割は55の少数民族です。"
        },
        {
            q: "中国で人口増加を抑制するために、1979年から2015年まで行われていた政策は？",
            choices: ["一人っ子政策","二人っ子政策","人口抑制政策","家族計画政策"],
            a: "一人っ子政策",
            comment: "この政策の結果、少子高齢化（ヘイハイツ）が急速に進んでいます。",
            answerImg: "assets/images/geography/g_gw_1_63_one_child_policy_1773409684810.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中国の沿岸部に設けられた、外国の資本や技術を導入するために優遇措置をとった地域を何というか？",
            choices: ["経済特区","経済技術開発区","ハイテク産業区","自由貿易地域"],
            a: "経済特区",
            comment: "シェンチェン（深圳）などが代表的です。",
            answerImg: "assets/images/geography/g_gw_1_64_sez_china_1773409705230.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "香港の隣に位置し、経済特区として急速に発展した都市は？",
            choices: ["シェンチェン","シャンハイ","ペキン","コワンチョウ"],
            a: "シェンチェン",
            comment: "かつては静かな漁村でしたが、巨大な工業・ハイテク都市に成長しました。",
            answerImg: "assets/images/geography/g_gw_1_65_shenzhen_1773409724617.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中国の急速な経済発展に伴い、農村部から都市部へ働きに出る人々を何というか？",
            choices: ["民工（農民工）","華僑","難民","客家"],
            a: "民工（農民工）",
            comment: "都市部の労働力不足を補う重要な存在です。",
            answerImg: "assets/images/geography/g_gw_1_66_mingong_1773409740681.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "経済格差を是正するため、中国内陸部の開発を進める政策を何というか？",
            choices: ["西部大開発","内陸部開発計画","一帯一路","大躍進政策"],
            a: "西部大開発",
            comment: "道路や鉄道の整備、資源開発などが進められています。",
            answerImg: "assets/images/geography/g_gw_1_67_western_development_1773409760010.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中国の農村部で1980年代から発展した、郷や鎮などが経営する中小企業を何というか？",
            choices: ["郷鎮企業","国営企業","人民公社","財閥"],
            a: "郷鎮企業",
            comment: "農家の余剰労働力を吸収し、経済の活性化に貢献しました。",
            answerImg: "assets/images/geography/g_gw_1_68_township_enterprises_1773409783964.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中国を流れる世界で3番目、アジアで最も長い川は？",
            choices: ["長江","黄河","メコン川","ガンジス川"],
            a: "長江",
            comment: "中流域には世界最大級の三峡ダムがあります。",
            answerImg: "assets/images/geography/g_gw_1_69_chang_jiang_1773409803569.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中国北部を流れ、かつて古代文明が栄えた川は？",
            choices: ["黄河","長江","アムール川","パール川"],
            a: "黄河",
            comment: "多量の土砂（黄土）を含んで流れるため黄色く濁って見えます。",
            answerImg: "assets/images/geography/g_gw_2_10_yellow_river_1773376568212.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中国北部（華北）などの降水量が少ない地域で盛んな農業は？",
            choices: ["畑作（小麦など）","稲作（米）","酪農","プランテーション"],
            a: "畑作（小麦など）",
            comment: "麺類や点心（ギョーザ・肉まん）などの食文化が発達しました。",
            answerImg: "assets/images/geography/g_gw_2_11_wheat_field_1773376581443.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中国南部（華南）などの温暖で雨が多い地域で盛んな農業は？",
            img: "assets/images/history/h_ancient_rice_farming_1772414609121.png",
            choices: ["稲作（米）","畑作（小麦）","遊牧","酪農"],
            a: "稲作（米）",
            comment: "米を主食とし、二期作が行われる地域もあります。",
            answerImg: "assets/images/geography/g_gw_1_72_wet_rice_farming_1773409858341.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1997年にイギリスから中国に返還された、金融や貿易の中心地は？",
            choices: ["香港","マカオ","台湾","海南島"],
            a: "香港",
            comment: "「一国二制度」のもとで高度な自治が認められてきました。",
            answerImg: "assets/images/geography/g_gw_1_73_hong_kong_1773409879854.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "かつて中国南東部から海外へ移住し、現地の経済に大きな影響力を持つ人々を何というか？",
            choices: ["華人・華僑","印僑","日系人","難民"],
            a: "華人・華僑",
            comment: "東南アジアの国々などで経済の実権を握っていることが多いです。",
            answerImg: "assets/images/geography/g_gw_2_12_chinatown_1773376600876.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "大韓民国（韓国）の首都は？",
            choices: ["ソウル","プサン","ピョンヤン","インチョン"],
            a: "ソウル",
            comment: "政治・経済・文化の中心地です。",
            answerImg: "assets/images/geography/g_gw_1_75_south_korea_1773409912685.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "朝鮮半島を北緯38度付近で分断している境界線を何というか？",
            choices: ["軍事境界線","本初子午線","日付変更線","休戦ライン"],
            a: "軍事境界線",
            comment: "北側が朝鮮民主主義人民共和国、南側が大韓民国です。",
            answerImg: "assets/images/geography/g_gw_1_76_38th_parallel_1773409980230.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "韓国の伝統的な民族衣装を何というか？",
            img: "assets/images/geography/geo_hanbok_1771576904795.png",
            choices: ["チマ・チョゴリ","チャイナドレス","アオザイ","サリー"],
            a: "チマ・チョゴリ",
            comment: "「チマ」はスカート、「チョゴリ」は上着を意味します。",
            answerImg: "assets/images/geography/g_gw_1_77_hanbok_1773410000028.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "東南アジア諸国連合の略称は？",
            img: "assets/images/history/h_contemporary_3_asean_1773343491452.png",
            choices: ["ASEAN","APEC","EU","OPEC"],
            a: "ASEAN",
            comment: "地域の平和と安定、経済成長を目的に結成されました。"
        },
        {
            q: "東南アジアの大河の河口付近の三角州などで盛んな農業は？",
            img: "assets/images/history/h_ancient_rice_farming_1772414609121.png",
            choices: ["稲作","畑作","酪農","遊牧"],
            a: "稲作",
            comment: "タイのチャオプラヤ川やベトナムのメコン川流域が有名です。",
            answerImg: "assets/images/geography/g_gw_1_78_delta_rice_1773410015395.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "同じ土地で1年に2回米を作ることを何というか？",
            choices: ["二期作","二毛作","輪作","単作"],
            a: "二期作",
            comment: "二毛作は「米と麦」など異なる作物を作ることを指します。",
            answerImg: "assets/images/geography/g_gw_2_13_double_cropping_1773376615294.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "かつて欧米諸国の植民地時代に開かれた、特定の商品作物を大規模に栽培する農園を何というか？",
            img: "assets/images/geography/geo_plantation_1771577122087.png",
            choices: ["プランテーション","バイオテクノロジー","棚田","段々畑"],
            a: "プランテーション",
            comment: "天然ゴム、油やし、コーヒー、バナナなどが栽培されています。",
            answerImg: "assets/images/geography/g_gw_1_80_plantation_1773410052167.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "マレーシアなどで生産量が多い、洗剤や食用油の原料となる作物は？",
            choices: ["油やし（パーム油）","天然ゴム","綿花","ジュート"],
            a: "油やし（パーム油）",
            comment: "アブラヤシから採れるパーム油は世界中で利用されています。",
            answerImg: "assets/images/geography/g_gw_1_81_oil_palm_1773410075494.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ベトナムが世界有数の輸出国となっている、嗜好品（飲み物）の原料は？",
            choices: ["コーヒー豆","茶葉","カカオ豆","ホップ"],
            a: "コーヒー豆",
            comment: "ブラジルに次ぐ世界第2位の輸出国です（時期による）。",
            answerImg: "assets/images/geography/g_gw_1_82_vietnam_coffee_1773410092549.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "インドネシアやマレーシアで多くの人々が信仰している宗教は？",
            choices: ["イスラム教","仏教","キリスト教","ヒンドゥー教"],
            a: "イスラム教",
            comment: "インドネシアは世界最大のイスラム教徒人口を抱える国です。",
            answerImg: "assets/images/geography/g_gw_1_83_islam_indonesia_1773410114096.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "フィリピンで多くの人々が信仰している宗教は？",
            img: "assets/images/history/h_ancient_christianity_1772414580245.png",
            choices: ["キリスト教","イスラム教","仏教","ヒンドゥー教"],
            a: "キリスト教",
            comment: "かつてスペインの植民地だった影響です。",
            answerImg: "assets/images/geography/g_gw_1_84_christianity_philippines_2_1773410130380.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "タイやミャンマーなど、インドシナ半島で広く信仰されている宗教は？",
            img: "assets/images/history/h_ancient_buddhism_1772414564492.png",
            choices: ["仏教","イスラム教","キリスト教","ヒンドゥー教"],
            a: "仏教",
            comment: "町中に多くの寺院があり、僧侶は尊敬されています。",
            answerImg: "assets/images/geography/g_gw_1_85_buddhism_indochina_1773410149337.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "シンガポールのように、アジアで急速に工業化が進んだ国や地域の総称を何というか？",
            choices: ["アジアNIES","ASEAN","BRICS","G7"],
            a: "アジアNIES",
            comment: "韓国、台湾、香港、シンガポールの4つを指します。",
            answerImg: "assets/images/geography/g_gw_1_88_asian_nies_1773417115708.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ベトナムで行われている、市場経済を導入する改革政策を何というか？",
            choices: ["ドイモイ（刷新）","開放政策","ペレストロイカ","ニューディール"],
            a: "ドイモイ（刷新）",
            comment: "社会主義体制を維持しつつ、経済の自由化を進めています。",
            answerImg: "assets/images/geography/g_gw_1_89_doi_moi_1773417132860.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "インドの人口は現在どうなっているか？（2023年推計）",
            choices: ["中国を抜いて世界1位","世界2位","世界3位","世界4位"],
            a: "中国を抜いて世界1位",
            comment: "約14億人を超え、世界最大の人口大国となりました。",
            answerImg: "assets/images/geography/g_gw_1_90_india_population_1773417148377.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "インドで最も多くの人が信仰している宗教は？",
            choices: ["ヒンドゥー教","仏教","イスラム教","キリスト教"],
            a: "ヒンドゥー教",
            comment: "人口の約8割が信仰しています。",
            answerImg: "assets/images/geography/g_gw_1_91_hinduism_1773417174652.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ヒンドゥー教で神聖な動物とされ、食べることを禁じられているのは？",
            choices: ["牛","豚","鶏","羊"],
            a: "牛",
            comment: "街中を牛が歩いていても大切に扱われます。"
        },
        {
            q: "インドの女性が身につける、一枚の布を巻く伝統的な衣装は？",
            choices: ["サリー","チャドル","チマ・チョゴリ","アオザイ"],
            a: "サリー",
            comment: "色鮮やかな布を体に巻き付けて着ます。",
            answerImg: "assets/images/geography/g_gw_1_93_sari_1773417206482.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "かつてインドにあった身分制度の影響が現在も残っていることを何というか？",
            choices: ["カースト制度","アパルトヘイト","農奴制","奴隷制"],
            a: "カースト制度",
            comment: "憲法では差別が禁止されていますが、社会慣習として残っています。",
            answerImg: "assets/images/geography/g_gw_1_94_caste_system_1773417221738.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "インド南部のベンガルールなどで盛んな、コンピュータ・ソフトウェア関連の産業は？",
            img: "assets/images/geography/geo_it_worker_1771577325115.png",
            choices: ["ICT（情報通信技術）産業","自動車産業","繊維産業","鉄鋼業"],
            a: "ICT（情報通信技術）産業",
            comment: "アメリカとの時差を利用して24時間体制で開発などができます。",
            answerImg: "assets/images/geography/g_gw_1_95_it_bengaluru_1773417236969.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "インドのアッサム地方やスリランカで生産が盛んな作物は？",
            choices: ["茶","コーヒー","カカオ","天然ゴム"],
            a: "茶",
            comment: "イギリス植民地時代にプランテーションが開かれました。",
            answerImg: "assets/images/geography/g_gw_1_96_assam_tea_1773417262046.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "インド北西部やパキスタンで栽培が盛んな、繊維の原料となる作物は？",
            choices: ["綿花","ジュート","羊毛","絹"],
            a: "綿花",
            comment: "デカン高原のレグール土という土壌が栽培に適しています。",
            answerImg: "assets/images/geography/g_gw_1_97_cotton_1773417276053.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "西アジアや北アフリカで広く信仰されている宗教は？",
            choices: ["イスラム教","キリスト教","仏教","ヒンドゥー教"],
            a: "イスラム教",
            comment: "聖地メッカに向かって1日5回お祈りをします。",
            answerImg: "assets/images/geography/g_gw_1_98_islam_middle_east_1773417289437.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "イスラム教の聖展（経典）を何というか？",
            choices: ["コーラン","聖書","仏典","ヴェーダ"],
            a: "コーラン",
            comment: "アラビア語で書かれており、翻訳されたものは厳密にはコーランとは認められません。",
            answerImg: "assets/images/geography/g_gw_1_99_quran_1773417306299.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "イスラム教徒が断食を行う月を何というか？",
            choices: ["ラマダン","ハッジ","イード","クリスマス"],
            a: "ラマダン",
            comment: "この期間、日中は水も食事も口にしません。",
            answerImg: "assets/images/geography/g_gw_1_100_ramadan_1773417319169.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ペルシア湾周辺の国々が多く産出する地下資源は？",
            img: "assets/images/geography/geo_oil_rig_1771577294360.png",
            choices: ["石油（原油）","石炭","鉄鉱石","ウラン"],
            a: "石油（原油）",
            comment: "世界有数の産油地帯です。",
            answerImg: "assets/images/geography/g_gw_1_103_persian_gulf_oil_1773417533629.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "石油産出国が利益を守るために結成した組織は？",
            choices: ["OPEC（石油輸出国機構）","WTO","WHO","NATO"],
            a: "OPEC（石油輸出国機構）",
            comment: "サウジアラビアやイランなどが加盟しています。",
            answerImg: "assets/images/geography/g_gw_1_104_opec_1773417552741.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "乾燥した地域で、貴重な水がある場所に行われる農業を何というか？",
            img: "assets/images/geography/geo_dates_1771577267268.png",
            choices: ["オアシス農業","焼畑農業","プランテーション","近郊農業"],
            a: "オアシス農業",
            comment: "ナツメヤシや小麦などが栽培されます。",
            answerImg: "assets/images/geography/g_gw_1_105_oasis_agriculture_1773417568605.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "羊やヤギを連れて草や水を求めて移動する牧畜を何というか？",
            choices: ["遊牧","酪農","放牧","移牧"],
            a: "遊牧",
            comment: "モンゴルや西アジアの乾燥地帯で行われています。",
            answerImg: "assets/images/geography/g_gw_1_106_nomadic_herding_1773417588024.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "夏と冬で風向きが逆になる風を何というか？",
            choices: ["季節風（モンスーン）","偏西風","貿易風","海陸風"],
            a: "季節風（モンスーン）",
            comment: "夏は海から陸へ、冬は陸から海へ吹き、雨季と乾季をもたらします。",
            answerImg: "assets/images/geography/g_gw_1_107_monsoon_1773417604026.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "世界で最も高い山脈は？",
            choices: ["ヒマラヤ山脈","アルプス山脈","アンデス山脈","ロッキー山脈"],
            a: "ヒマラヤ山脈",
            comment: "最高峰エベレスト（チョモランマ）があります。",
            answerImg: "assets/images/geography/g_gw_2_14_himalayas_1773376629006.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ヨーロッパとアジアの境目とされる山脈は？",
            choices: ["ウラル山脈","カフカス山脈","ヒマラヤ山脈","ピレネー山脈"],
            a: "ウラル山脈",
            comment: "ロシアの中を南北に走っています。",
            answerImg: "assets/images/geography/g_gw_1_109_ural_mountains_1773417633124.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "サウジアラビア、イラン、イラクなどに囲まれた、石油の積み出しで重要な湾は？",
            choices: ["ペルシア湾","メキシコ湾","ベンガル湾","東京湾"],
            a: "ペルシア湾",
            comment: "日本に輸入される原油の多くがここを通ります。",
            answerImg: "assets/images/geography/g_gw_1_110_strait_of_hormuz_1773417647135.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中央アジアのカザフスタンやウズベキスタンで産出される、希少金属をカタカナで何というか？",
            choices: ["レアメタル","バイオマス","シェールガス","メタンハイドレート"],
            a: "レアメタル",
            comment: "携帯電話やハイテク製品の製造に不可欠な金属です。",
            answerImg: "assets/images/geography/g_gw_1_111_rare_metals_1773417670401.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アンコール・ワットなどの遺跡がある東南アジアの国は？",
            img: "assets/images/geography/geo_angkor_wat_1771577387899.png",
            choices: ["カンボジア","タイ","ベトナム","ミャンマー"],
            a: "カンボジア",
            comment: "国旗にもアンコール・ワットが描かれています。",
            answerImg: "assets/images/geography/g_gw_1_112_angkor_wat_1773417685497.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ブラジル、ロシア、インド、中国、南アフリカの新興5か国を指す言葉は？",
            choices: ["BRICS","VISTA","NEXT11","G5"],
            a: "BRICS",
            comment: "経済発展が著しく、世界経済への影響力を強めています。"
        },
        {
            q: "イスラム教徒の女性が外出時に身につける、髪や肌を覆う布を何というか？",
            img: "assets/images/geography/geo_chador_1771576874789.png",
            choices: ["チャドル（ヒジャブ）","サリー","チマ・チョゴリ","ポンチョ"],
            a: "チャドル（ヒジャブ）",
            comment: "国や地域によって呼び名や形が異なります。",
            answerImg: "assets/images/geography/g_gw_1_114_hijab_1773417714540.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "東南アジアの都市部で発生している、交通渋滞や大気汚染、スラムなどの問題を総称して何というか？",
            choices: ["都市問題","人口問題","食糧問題","南北問題"],
            a: "都市問題",
            comment: "急速な都市化にインフラ整備が追いついていないことが原因です。",
            answerImg: "assets/images/geography/g_gw_1_116_urban_issues_1773417757911.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "サウジアラビアの大部分を占める気候帯は？",
            choices: ["乾燥帯（砂漠気候）","熱帯","地中海性気候","温帯"],
            a: "乾燥帯（砂漠気候）",
            comment: "国土の大部分が砂漠におおわれています。",
            answerImg: "assets/images/geography/g_gw_1_117_saudi_desert_1773417774192.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "インドネシアなどが位置する、火山活動が活発な地域一帯を何というか？",
            choices: ["環太平洋造山帯","アルプス・ヒマラヤ造山帯","安定陸塊","中央海嶺"],
            a: "環太平洋造山帯",
            comment: "日本もここに含まれ、地震や火山が多いです。",
            answerImg: "assets/images/geography/g_gw_1_118_volcanic_activity_1773417786261.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "マレーシアがかつて目指した、日本や韓国の経済発展を見習おうという政策は？",
            choices: ["ルックイースト政策","ドイモイ政策","一人っ子政策","白豪主義"],
            a: "ルックイースト政策",
            comment: "マハティール首相が提唱しました。",
            answerImg: "assets/images/geography/g_gw_1_119_look_east_policy_1773417801375.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本が原油の多くを輸入している地域はどこか？",
            choices: ["西アジア（中東）","東南アジア","北アメリカ","オセアニア"],
            a: "西アジア（中東）",
            comment: "サウジアラビアやアラブ首長国連邦などからの輸入が多いです。",
            answerImg: "assets/images/geography/g_gw_1_120_oil_import_1773417817540.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中国の通貨の単位は？",
            choices: ["元","ウォン","円","ドン"],
            a: "元",
            comment: "「人民元」とも呼ばれます。",
            answerImg: "assets/images/geography/g_gw_1_121_yuan_1773417836666.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "韓国の通貨の単位は？",
            choices: ["ウォン","元","バーツ","ルピー"],
            a: "ウォン",
            comment: "K-POPやドラマなどの文化輸出も盛んです。",
            answerImg: "assets/images/geography/g_gw_1_122_won_1773417850204.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "経済特区などを設け、「世界の工場」と呼ばれるまでに経済成長を遂げた国は？",
            choices: ["中国","インド","ベトナム","バングラデシュ"],
            a: "中国",
            comment: "所得の向上により、巨大な消費市場としても注目されています。",
            answerImg: "assets/images/geography/g_gw_1_123_factory_of_the_world_1773417863372.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "インドにある、ムガル帝国の皇帝が愛妃のために建てた白大理石の美しい廟（お墓）は？",
            img: "assets/images/geography/gw_asia_tajmahal_1771578460695.png",
            choices: ["タージ・マハル","アンコール・ワット","ボロブドゥール","ピラミッド"],
            a: "タージ・マハル",
            comment: "世界遺産に登録されており、イスラム建築の傑作とされています。",
            answerImg: "assets/images/geography/g_gw_1_124_taj_mahal_1773417877736.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "中国の長江中流に建設された、世界最大級の水力発電用ダムは？",
            img: "assets/images/geography/geo_three_gorges_dam_1771577417498.png",
            choices: ["三峡ダム","アスワン・ハイ・ダム","フーバーダム","黒部ダム"],
            a: "三峡ダム",
            comment: "洪水防止や水力発電の目的で作られましたが、環境への影響も懸念されています。",
            answerImg: "assets/images/geography/g_gw_1_126_three_gorges_dam_1773417948634.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "東南アジアなどの蒸し暑い地域で見られる、風通しを良くし、湿気や動物を防ぐための住居は？",
            img: "assets/images/geography/geo_stilt_house_1771576783281.png",
            choices: ["高床式の住居","石造りの家","日干しレンガの家","氷の家（イグルー）"],
            a: "高床式の住居",
            comment: "床を高くすることで、涼しく過ごせる工夫がされています。",
            answerImg: "assets/images/geography/g_gw_1_127_stilt_house_asia_1773417962078.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アジア州の中で人口や面積が非常に大きく、首都を北京とするこの国のなまえは？",
            img: "assets/images/geography/map_asia_blank_1771577832482.png",
            choices: ["中国","インド","インドネシア","サウジアラビア"],
            a: "中国",
            comment: "世界有数の経済大国です。",
            answerImg: "assets/images/geography/g_gw_1_128_china_map_1773417979328.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "南アジアに位置し、IT産業が盛んで、近年人口が世界一となったこの国のなまえは？",
            img: "assets/images/geography/map_asia_blank_1771577832482.png",
            choices: ["インド","パキスタン","バングラデシュ","中国"],
            a: "インド",
            comment: "ヒンドゥー教徒が多い国です。",
            answerImg: "assets/images/geography/g_gw_1_129_india_it_1773417999869.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "西アジア（中東）にあり、世界有数の石油の産出国であるこの国のなまえは？",
            img: "assets/images/geography/map_asia_blank_1771577832482.png",
            choices: ["サウジアラビア","イラン","イラク","トルコ"],
            a: "サウジアラビア",
            comment: "イスラム教の聖地メッカがあります。",
            answerImg: "assets/images/geography/g_gw_1_130_saudi_arabia_oil_1773418021874.png",
            imgCaption: "※画像はイメージです"
        }
    ],
    "gw_3": [
        {
            q: "人が生まれながらにもっている、人間らしく生きるためにある、だれにも侵すことができない権利を何というか。",
            choices: ["基本的人権","自由権","平等権","社会権"],
            a: "基本的人権",
            comment: "人間らしく生きるために、だれにも侵すことができない、生まれながらに持っている権利です。",
            answerImg: "assets/images/civics/g_civics_1_human_rights_1773475366229.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1215年にイギリスで、国王の権力を制限した法は何か。",
            choices: ["マグナカルタ（大憲章）","権利の章典","フランス人権宣言","アメリカ独立宣言"],
            a: "マグナカルタ（大憲章）",
            comment: "国王の勝手な政治に不満を持った貴族たちが、国王の権力を制限させたものです。",
            answerImg: "assets/images/civics/g_civics_1_magna_carta_1773475394699.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1689年にイギリスで発布された、議会の承認なしに課税しないことなどを定めた法律は何か。",
            choices: ["権利の章典","マグナカルタ","人権宣言","独立宣言"],
            a: "権利の章典",
            comment: "名誉革命ののち、議会の要求を国王が承認する形で発布されました。",
            answerImg: "assets/images/civics/g_civics_1_john_locke_1773475422306.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1787年に制定された、世界で初めての成文憲法であり、民主主義や三権分立について規定している憲法は何か。",
            choices: ["アメリカ合衆国憲法","フランス人権宣言","ワイマール憲法","大日本帝国憲法"],
            a: "アメリカ合衆国憲法",
            comment: "アメリカ独立戦争ののち、合衆国の基本的なあり方を定めました。",
            answerImg: "assets/images/civics/g_civics_1_rousseau_1773475451346.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1919年にドイツで制定され、世界ではじめて社会権を保障した憲法は何か。",
            choices: ["ワイマール憲法","アメリカ合衆国憲法","フランス人権宣言","日本国憲法"],
            a: "ワイマール憲法",
            comment: "人間たるに値する生活を営む権利（生存権）などの社会権を初めて保障しました。",
            answerImg: "assets/images/civics/g_civics_1_weimar_constitution_1773475478108.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国のあり方を最終的に判断する権利を持つ人を何というか。",
            choices: ["主権者","君主","大統領","国民"],
            a: "主権者",
            comment: "日本国憲法では国民が主権者ですが、大日本帝国憲法では天皇でした。",
            answerImg: "assets/images/civics/g_civics_1_human_rights_declaration_1773475502792.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1889年に発布された、日本最初の近代的な憲法は何か。",
            choices: ["大日本帝国憲法（明治憲法）","日本国憲法","十七条の憲法","御成敗式目"],
            a: "大日本帝国憲法（明治憲法）",
            comment: "主権者は天皇で、国民の人権は「臣民の権利」として天皇から与えられたものでした。",
            answerImg: "assets/images/civics/g_civics_1_human_rights_covenant_1773475527009.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "『統治二論（市民政府二論）』を著し、人間が生命や自由、財産に対する権利を持つと主張したイギリスの思想家は誰か。",
            choices: ["ロック","モンテスキュー","ルソー","ホッブズ"],
            a: "ロック",
            comment: "権力が不当に行使されているときには、それに抵抗する権利（抵抗権）があるとも主張しました。",
            answerImg: "assets/images/civics/g_civics_1_international_court_of_justice_1773475552645.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "『法の精神』を著し、国家の権力を立法・行政・司法に分けるべきだという「三権分立」を主張したフランスの思想家は誰か。",
            choices: ["モンテスキュー","ルソー","ロック","リンカーン"],
            a: "モンテスキュー",
            comment: "権力が一つに集中することを防ぐため、三つの権力が互いに抑制し合うことが必要だと説きました。",
            answerImg: "assets/images/civics/g_civics_1_international_criminal_court_1773475580940.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "『社会契約論』を著し、政治は人民の意思にもとづいて行われるべきだとする「人民主権」を唱えたフランスの思想家は誰か。",
            choices: ["ルソー","モンテスキュー","ロック","カント"],
            a: "ルソー",
            comment: "人民全体の意思にもとづいて社会が作られるべきだとし、フランス革命に大きな影響を与えました。",
            answerImg: "assets/images/civics/g_civics_1_human_rights_council_1773475608980.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "社会で人々が生活していくために必要なきまりの中で、国家が強制力をもつものを何というか。",
            choices: ["法","道徳","慣習","条約"],
            a: "法",
            comment: "日本では、日本国憲法が最高の効力を持つ法（最高法規）です。",
            answerImg: "assets/images/civics/g_civics_2_law_1773475857972.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国における法の中で、最も基本となるものを何というか。",
            choices: ["憲法","法律","命令","条例"],
            a: "憲法",
            comment: "憲法に反する法は無効となります。日本では日本国憲法がこれにあたります。",
            answerImg: "assets/images/civics/g_civics_2_constitutionalism_1773475917334.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "人権を保障するために、憲法によって政治権力を制限するという考え方やしくみを何というか。",
            choices: ["立憲主義","民主主義","国民主権","三権分立"],
            a: "立憲主義",
            comment: "権力を制限する憲法にもとづく政治のあり方を立憲政治といいます。",
            answerImg: "assets/images/civics/g_civics_2_constitutionalism_1773475917334.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本国憲法の三大原則は、「基本的人権の尊重」「平和主義」ともう一つは何か。",
            choices: ["国民主権","象徴天皇制","三権分立","地方自治"],
            a: "国民主権",
            comment: "国の政治のあり方を決定する権利（主権）が国民にあるということです。",
            answerImg: "assets/images/civics/g_civics_2_popular_sovereignty_1773475962274.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国民一人ひとりの意思を尊重した民主主義にもとづいて行われる政治を何というか。",
            choices: ["民主政治","立憲政治","独裁政治","絶対王政"],
            a: "民主政治",
            comment: "起源は古代ギリシャのアテネでの市民集会での話し合いだとされています。",
            answerImg: "assets/images/civics/g_civics_2_democratic_politics_1773475992505.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国家や社会集団において、統治権力が中央に集中・統一されている形態を何というか。",
            choices: ["中央集権","地方分権","連邦制","民主制"],
            a: "中央集権",
            comment: "対立する言葉として、地方に権限を分散させる「地方分権」があります。",
            answerImg: "assets/images/civics/g_civics_2_centralization_1773476021853.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "天皇が日本国と日本国民統合の象徴であるとするしくみを何というか。",
            choices: ["象徴天皇制","天皇主権","立憲君主制","絶対君主制"],
            a: "象徴天皇制",
            comment: "日本国憲法第1条に定められており、天皇は政治的な権力を持たず、国事行為のみを行います。",
            answerImg: "assets/images/civics/g_civics_2_symbolic_emperor_1773476050066.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本国憲法第7条に定められた、天皇の形式的・儀礼的な行為を何というか。",
            choices: ["国事行為","国務行為","政治行為","象徴行為"],
            a: "国事行為",
            comment: "国事行為を行うには、内閣の助言と承認が必要とされています。",
            answerImg: "assets/images/civics/g_civics_2_state_acts_1773476067649.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本にある法のうち、皇室の制度や構成などについて定めた法律は何か。",
            choices: ["皇室典範","日本国憲法","大日本帝国憲法","民法"],
            a: "皇室典範",
            comment: "大日本帝国憲法のもとでは憲法と同じ権威を持っていましたが、現在は国会が内容を変えられる法律です。",
            answerImg: "assets/images/civics/g_civics_2_imperial_house_law_1773476086115.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "すべての人間が等しく扱われることを保障する権利を何というか。",
            choices: ["平等権","自由権","社会権","参政権"],
            a: "平等権",
            comment: "日本国憲法第14条では、「法の下の平等」として規定されています。",
            answerImg: "assets/images/civics/g_civics_2_equality_right_1773476109171.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "それぞれの個人を、1人の人間として最大限大切にすることを何というか。",
            choices: ["個人の尊重","基本的人権","国民主権","平和主義"],
            a: "個人の尊重",
            comment: "人権保障の基礎となる考え方で、日本国憲法第13条に定められています。",
            answerImg: "assets/images/civics/g_civics_3_individual_respect_1773476236879.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "被差別部落の出身者に対する差別を何というか。",
            choices: ["部落差別","人種差別","性差別","民族差別"],
            a: "部落差別",
            comment: "江戸時代の身分制度に端を発し、現在も残る日本の重要な人権問題の一つです。",
            answerImg: "assets/images/civics/g_civics_3_buraku_discrimination_1773476252358.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本の先住民族と位置づけられ、独自の文化を持つ人々を何というか。",
            choices: ["アイヌ","琉球民族","在日韓国・朝鮮人","大和民族"],
            a: "アイヌ",
            comment: "北海道を中心に住んでおり、独自の言語や伝統文化を持っています。",
            answerImg: "assets/images/civics/g_civics_3_ainu_people_1773476270551.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ある特定の団体や個人、民族や人種に対して行われる差別的な発言や行動を何というか。",
            choices: ["ヘイトスピーチ","パワーハラスメント","ドメスティックバイオレンス","セクシュアルハラスメント"],
            a: "ヘイトスピーチ",
            comment: "2016年にこの問題に対する対策法が制定されました。",
            answerImg: "assets/images/civics/g_civics_3_gender_equality_1773476288021.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "主に日本国籍を持たずに日本に住んでいる人に対し、地方選挙などでの投票を認めるべきだという考えに関わる権利を何というか。",
            choices: ["外国人参政権","社会権","生存権","基本的人権"],
            a: "外国人参政権",
            comment: "最高裁は「憲法はこの権利を禁止していない」としていますが、現在日本では法律として認められていません。",
            answerImg: "assets/images/civics/g_civics_3_gender_roles_1773476306287.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "人が互いに個人として自分と相手を大切にし、ともに助け合って生きていく社会を何というか。",
            choices: ["共生社会","男女共同参画社会","大衆社会","情報社会"],
            a: "共生社会",
            comment: "年齢や性別、国籍、障がいの有無などに関わらず、すべての人が個人として尊重される社会を目指すものです。",
            answerImg: "assets/images/civics/g_civics_3_freedom_of_thought_1773476325061.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "障がい者や高齢者などが安全・快適に暮らせるように、生活する上で障害となるものを取り除こうという考え方を何というか。",
            choices: ["バリアフリー","ユニバーサルデザイン","ノーマライゼーション","インクルージョン"],
            a: "バリアフリー",
            comment: "段差にスロープをつけたり、点字ブロックを設置したりすることなどがこれにあたります。",
            answerImg: "assets/images/civics/g_civics_3_civil_liberties_1773476345863.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "年齢や障がいの有無にかかわらず、すべての人が使いやすいようにあらかじめつくられたデザインを何というか。",
            choices: ["ユニバーサルデザイン","バリアフリー","ノーマライゼーション","サステナビリティ"],
            a: "ユニバーサルデザイン",
            comment: "シャンプーの容器のギザギザや、多目的トイレなど、誰もが最初から使いやすいように設計されたものです。",
            answerImg: "assets/images/civics/g_civics_3_social_rights_1773476362140.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "障がいがある人もない人も、高齢者も子どもも、それぞれを分けるのではなく、ともに地域の中で暮らしていこうという考え方を何というか。",
            choices: ["ノーマライゼーション","バリアフリー","ユニバーサルデザイン","共生社会"],
            a: "ノーマライゼーション",
            comment: "現代の社会福祉において、最も基本的な理念の一つとされています。",
            answerImg: "assets/images/civics/g_civics_3_normalization_1773476381825.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "職場などで起きる、相手の意思に反した性的な嫌がらせを何というか。",
            choices: ["セクシュアル・ハラスメント（セクハラ）","パワー・ハラスメント","マタニティ・ハラスメント","モラル・ハラスメント"],
            a: "セクシュアル・ハラスメント（セクハラ）",
            comment: "労働者の尊厳を傷つけ、職場の秩序を乱す行為として、男女雇用機会均等法などで防ぐことが義務付けられています。",
            answerImg: "assets/images/civics/g_civics_3_universal_design_1773476413957.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "男性と女性が互いに人権を尊重し合い、責任を分け合って対等な立場で能力をいかすことができる社会を何というか。",
            choices: ["男女共同参画社会","共生社会","福祉社会","持続可能な社会"],
            a: "男女共同参画社会",
            comment: "1999年にはこれを推進するための男女共同参画社会基本法が施行されました。",
            answerImg: "assets/images/civics/g_civics_4_gender_equal_society_1773480280690.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "すべての人が生きていく上で、自由にものを考え、意見を述べ、行動することを保障する権利を何というか。",
            choices: ["自由権","平等権","社会権","参政権"],
            a: "自由権",
            comment: "日本国憲法では「身体の自由」「精神の自由」「経済活動の自由」の3つに大きく分けられます。",
            answerImg: "assets/images/civics/g_civics_4_gender_equal_law_1773480300108.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "正当な理由なしに、人間の身体が他者から拘束されない権利のことを何というか。",
            choices: ["身体の自由","精神の自由","思想および良心の自由","基本的人権"],
            a: "身体の自由",
            comment: "奴隷的拘束からの自由や、拷問・残虐な刑罰の禁止などがこれに含まれます。",
            answerImg: "assets/images/civics/g_civics_4_barrier_free_1773480321721.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "被疑者や被告人に認められている、取り調べや裁判で自分に不利益となることを話さなくてもよい権利を何というか。",
            choices: ["黙秘権","肖像権","プライバシーの権利","知る権利"],
            a: "黙秘権",
            comment: "日本国憲法第38条で、「何人も、自己に不利益な供述を強要されない」と定められています。",
            answerImg: "assets/images/civics/g_civics_4_mental_freedoms_1773480339590.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "個人が自由にものを考え、思想や信仰をもち、自分の意見を述べる自由を指す、自由権の1つは何か。",
            choices: ["精神の自由","身体の自由","経済活動の自由","表現の自由"],
            a: "精神の自由",
            comment: "思想・良心の自由、信教の自由、集会・結社・表現の自由、学問の自由などがあります。",
            answerImg: "assets/images/civics/g_civics_4_public_welfare_1773480361880.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "「精神の自由」のうち、個人がどのような宗教を信じるのも信じないのも自由とするものを何というか。",
            choices: ["信教の自由","思想および良心の自由","表現の自由","集会の自由"],
            a: "信教の自由",
            comment: "これに関連して、国が特定の宗教に特権を与えたり政治的権力を持たせたりしない「政教分離の原則」があります。",
            answerImg: "assets/images/civics/g_civics_4_economic_freedom_1773480386746.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "「精神の自由」のうち、人々が目的を持って集まったり団体をつくったりする自由や、考えを外部に発表する自由をまとめて何というか。",
            choices: ["集会・結社・表現の自由","思想および良心の自由","信教の自由","学問の自由"],
            a: "集会・結社・表現の自由",
            comment: "マスメディアによる報道の自由も含まれます。検閲は憲法で禁止されています。",
            answerImg: "assets/images/civics/g_civics_4_property_rights_1773480402656.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "「精神の自由」のうち、学問を研究したり、研究の成果を発表したり、教えたりする自由を何というか。",
            choices: ["学問の自由","表現の自由","教育の自由","思想の自由"],
            a: "学問の自由",
            comment: "思想や研究の内容が国家などによって制限・干渉されないことを保障しています。",
            answerImg: "assets/images/civics/g_civics_4_assembly_association_1773480419349.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "個人が住む場所を決めたり、職業を選んだり、自分の財産を利用したりする自由をまとめて何というか。",
            choices: ["経済活動の自由","身体の自由","精神の自由","所有権の絶対"],
            a: "経済活動の自由",
            comment: "居住・移転および職業選択の自由や、財産権の保障などの権利が含まれます。",
            answerImg: "assets/images/civics/g_civics_4_freedom_of_speech_1773480438628.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "人権は最大限保障されるが、他人の人権と衝突する場合などに、社会全体の利益のために人権が制限される原理を何というか。",
            choices: ["公共の福祉","権利の濫用禁止","立憲主義","公益の優先"],
            a: "公共の福祉",
            comment: "日本国憲法第12条などで、国民は人権を「公共の福祉のためにこれを利用する責任を負ふ」と定められています。",
            answerImg: "assets/images/civics/g_civics_4_academic_freedom_1773480455553.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本国憲法第25条の「すべて国民は、健康で文化的な最低限度の生活を営む権利を有する」という条文で保障されている権利は何か。",
            choices: ["生存権","教育を受ける権利","勤労の権利","幸福追求権"],
            a: "生存権",
            comment: "社会権の中でも最も基本となる権利で、これに基づき生活保護法などが制定されています。",
            answerImg: "assets/images/civics/g_civics_5_minimum_living_1773480658216.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国や年金を運営している組織に保険料を支払い、受け取る資格を満たした場合に支給されるお金のしくみを何というか。",
            choices: ["年金","医療保険","雇用保険","生活保護"],
            a: "年金",
            comment: "国民全員が加入して共通で支給される基礎年金などがあり、老後や障がいを負った際などに支給されます。",
            answerImg: "assets/images/civics/g_civics_5_pension_1773480720993.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "すべての国民が能力に応じてひとしく教育を受けることができる社会権の一つを何というか。",
            choices: ["教育を受ける権利","学習権","生存権","勤労の権利"],
            a: "教育を受ける権利",
            comment: "この権利を保障するため、義務教育は無償とされています。",
            answerImg: "assets/images/civics/g_civics_5_education_right_1773480739184.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "社会権の一つで、働く意思と能力のある人が、国に対して労働の機会を求めることができる権利を何というか。",
            choices: ["勤労の権利","労働基本権","生存権","職業選択の自由"],
            a: "勤労の権利",
            comment: "日本国憲法第27条で規定されており、勤労は権利であると同時に国民の義務でもあります。",
            answerImg: "assets/images/civics/g_civics_5_right_to_work_1773480751463.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "労働三権とも呼ばれる、労働者の権利を守るために定められている権利の総称を何というか。",
            choices: ["労働基本権","勤労の権利","社会権","生存権"],
            a: "労働基本権",
            comment: "団結権、団体交渉権、団体行動権（争議権）の3つからなります。",
            answerImg: "assets/images/civics/g_civics_5_labor_rights_1773480777972.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "労働基本権の1つで、労働者が団結して行動できるように労働組合をつくる権利を何というか。",
            choices: ["団結権","団体交渉権","団体行動権（争議権）","結社の自由"],
            a: "団結権",
            comment: "一人ひとりの力では弱い労働者が、使用者（会社など）と対等な立場で交渉するための土台となる権利です。",
            answerImg: "assets/images/civics/g_civics_5_right_to_organize_1773480791653.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国民が政治に参加する権利を総称して何というか。",
            choices: ["参政権","社会権","自由権","請求権"],
            a: "参政権",
            comment: "選挙権や被選挙権のほか、最高裁判所裁判官の国民審査権や、憲法改正の国民投票権なども含まれます。",
            answerImg: "assets/images/civics/g_civics_5_political_rights_1773480811046.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "同じ親の細胞などからつくられた個体を何というか。",
            choices: ["クローン","iPS細胞","ES細胞","ゲノム"],
            a: "クローン",
            comment: "日本では、人間へのクローン技術の適用を禁止する法律が施行されています。",
            answerImg: "assets/images/civics/g_civics_5_clone_1773480830160.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "卵子と精子を体内でなく体外で受精させることを何というか。",
            choices: ["体外受精","人工授精","クローン","遺伝子操作"],
            a: "体外受精",
            comment: "不妊治療などの一環として用いられることがあります。",
            answerImg: "assets/images/civics/g_civics_5_in_vitro_1773480842983.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "HIV（ヒト免疫不全ウイルス）への感染によって、体の免疫力が低下する病気を何というか。",
            choices: ["エイズ（後天性免疫不全症候群）","結核","マラリア","コレラ"],
            a: "エイズ（後天性免疫不全症候群）",
            comment: "HIVに感染してもすぐに発症するわけではなく、現在は発症を遅らせる治療が行われています。",
            answerImg: "assets/images/civics/g_civics_5_aids_1773480862898.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "自分の意思で自分の技術や時間を提供して、社会的な人助けをする人やその行為を何というか。",
            choices: ["ボランティア","NPO","NGO","クラウドファンディング"],
            a: "ボランティア",
            comment: "基本的に無報酬で行われ、阪神・淡路大震災や東日本大震災などをきっかけに重要性が再認識されました。",
            answerImg: "assets/images/civics/g_civics_6_volunteer_1773481358706.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "社会集団のなかでさまざまな意見が出て対立や争いが発生したときに、それを調整するために話し合いをしたり、ルールを決めたりして解決していくことを何というか。",
            choices: ["政治","経済","裁判","行政"],
            a: "政治",
            comment: "国や地方公共団体が行う政治がその代表例です。",
            answerImg: "assets/images/civics/g_civics_6_politics_1773481377359.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国民の意思にしたがって政治を行うという考え方を何というか。",
            choices: ["民主主義","全体主義","専制政治","貴族政"],
            a: "民主主義",
            comment: "紀元前のアテネで行われた市民参加の政治が起源とされ、近現代の市民革命を経て成立しました。",
            answerImg: "assets/images/civics/g_civics_6_democracy_1773481395832.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "全員で直接話し合って政治的な決定を行う仕組みを何というか。",
            choices: ["直接民主制","間接民主制（代議制）","多数決","共和制"],
            a: "直接民主制",
            comment: "古代ギリシャのアテネなどで行われていましたが、国家規模が大きくなると実施が難しくなります。",
            answerImg: "assets/images/civics/g_civics_6_direct_democracy_1773481410986.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "選挙で選ばれた代表者が話し合って政治を決定する仕組みを何というか。",
            choices: ["間接民主制（代議制）","直接民主制","大統領制","議院内閣制"],
            a: "間接民主制（代議制）",
            comment: "現代の多くの民主主義国家で採用されている方式です。",
            answerImg: "assets/images/civics/g_civics_6_indirect_democracy_1773481431077.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "話し合っても意見が一致しない場合に、数が多いほうの意見にしたがうという民主主義の基本原理を何というか。",
            choices: ["多数決の原理","少数意見の尊重","全会一致","独裁"],
            a: "多数決の原理",
            comment: "多数決においても、決定の過程で少数意見の発表や批判を自由に行えることが重要です。",
            answerImg: "assets/images/civics/g_civics_6_majority_rule_1773481450709.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "多数決の原理において、決定する前に少数の意見も十分に聞き入れるべきであるという考え方を何というか。",
            choices: ["少数意見の尊重","多数決の原理","直接民主制","立憲主義"],
            a: "少数意見の尊重",
            comment: "これがなされていないと、多数派による独断的な支配になってしまうおそれがあります。",
            answerImg: "assets/images/civics/g_civics_6_minority_rights_1773481469657.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国政について話し合うための代表者を選ぶ、18歳以上のすべての国民に認められている権利は何か。",
            choices: ["選挙権","被選挙権","請願権","国民審査権"],
            a: "選挙権",
            comment: "国会議員、地方公共団体の長（都道府県知事や市区町村長）、地方議会議員を選出する権利です。",
            answerImg: "assets/images/civics/g_civics_6_election_right_1773481489228.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "選挙に立候補して、国会議員や地方公共団体の長、地方議会議員になることができる権利は何か。",
            choices: ["被選挙権","選挙権","請願権","国民審査権"],
            a: "被選挙権",
            comment: "参議院議員と都道府県知事は満30歳以上、衆議院議員や市区町村長などは満25歳以上と定められています。",
            answerImg: "assets/images/civics/g_civics_6_right_to_be_elected_1773481505441.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "最高裁判所の裁判官が適任かどうかを、衆議院議員総選挙の際に国民が投票で審査する権利は何か。",
            choices: ["国民審査権","国民投票権","裁判を受ける権利","罷免権"],
            a: "国民審査権",
            comment: "やめさせる（罷免する）べきとする票が過半数を占めた場合、その裁判官は罷免されます。",
            answerImg: "assets/images/civics/g_civics_6_national_review_1773481523335.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国や地方公共団体に対して、政治上の要望を平穏に行うことができる権利は何か。",
            choices: ["請願権","請求権","知る権利","参政権"],
            a: "請願権",
            comment: "人権侵害の救済や、法律の制定・改廃などを求めることができます。",
            answerImg: "assets/images/civics/g_civics_7_petition_right_1773481701998.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国会が憲法改正の発議を行った際に、国民がそれに対して賛成か反対かの意思を示す権利は何か。",
            choices: ["国民投票権","国民審査権","選挙権","請願権"],
            a: "国民投票権",
            comment: "満18歳以上の日本国民に認められており、有効投票の過半数の賛成があれば改正が承認されます。",
            answerImg: "assets/images/civics/g_civics_7_national_referendum_1773481718966.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "人権が侵害されたときに、国などに救済を求めることができる権利の総称は何か。",
            choices: ["請求権","参政権","社会権","自由権"],
            a: "請求権",
            comment: "国家賠償請求権、刑事補償請求権、裁判を受ける権利などがあります。",
            answerImg: "assets/images/civics/g_civics_7_right_to_claim_1773481729682.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "公務員の不法行為などによって損害を受けた場合に、国や地方公共団体に賠償を求めることができる権利は何か。",
            choices: ["国家賠償請求権","刑事補償請求権","裁判を受ける権利","請願権"],
            a: "国家賠償請求権",
            comment: "請求権の一つで、国民の権利を守るための重要な権利です。",
            answerImg: "assets/images/civics/g_civics_7_state_redress_1773481747167.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "刑事裁判で無罪が確定した場合などに、国に対して金銭による補償を求めることができる権利は何か。",
            choices: ["刑事補償請求権","国家賠償請求権","裁判を受ける権利","生存権"],
            a: "刑事補償請求権",
            comment: "不当な身柄拘束などによる損害を回復するための制度です。",
            answerImg: "assets/images/civics/g_civics_7_criminal_compensation_1773481767306.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国や地方公共団体が持っている情報の公開を求めることができる権利は何か。",
            choices: ["知る権利","プライバシーの権利","肖像権","自己決定権"],
            a: "知る権利",
            comment: "これを保障するため、1999年には情報公開法が制定されました。",
            answerImg: "assets/images/civics/g_civics_7_right_to_know_1773481779167.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "私的な生活を他人に勝手に公開されない権利や、自分の情報をコントロールする権利を何というか。",
            choices: ["プライバシーの権利","知る権利","肖像権","自己決定権"],
            a: "プライバシーの権利",
            comment: "情報のデジタル化が進む中で重要視されており、個人情報保護法などで守られています。",
            answerImg: "assets/images/civics/g_civics_7_privacy_1773481800773.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "個人のプライバシーを守るため、企業や行政機関などに個人情報の適切な取り扱いを義務付けた法律は何か。",
            choices: ["個人情報保護法","情報公開法","プロバイダ責任制限法","マイナンバー法"],
            a: "個人情報保護法",
            comment: "個人情報が外部に漏れたり、悪用されたりすることを防ぐための法律です。",
            answerImg: "assets/images/civics/g_civics_7_personal_info_1773481816116.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "自分の顔や姿を無断で撮影されたり、公表されたり、商品に利用されたりしない権利は何か。",
            choices: ["肖像権","プライバシーの権利","著作権","知る権利"],
            a: "肖像権",
            comment: "プライバシーの権利の一部として、また有名人の場合は財産的な価値を持つ権利としても問題になります。",
            answerImg: "assets/images/civics/g_civics_7_portrait_rights_1773481835003.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "職場において、地位の優位性を背景に、業務の適正な範囲を超えて精神的・身体的苦痛を与える行為を何というか。",
            choices: ["パワーハラスメント（パワハラ）","セクシュアル・ハラスメント（セクハラ）","モラル・ハラスメント（モラハラ）","マタニティ・ハラスメント（マタハラ）"],
            a: "パワーハラスメント（パワハラ）",
            comment: "暴力や暴言、無理な仕事の強要、仕事を与えないことなどが含まれます。",
            answerImg: "assets/images/civics/g_civics_7_power_harassment_1773481851641.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "思想や感情を創作的に表現した文芸、学術、美術、音楽などの作品の作者に与えられる権利を何というか。",
            choices: ["著作権","肖像権","特許権","商標権"],
            a: "著作権",
            comment: "知的財産権の一つで、日本では原則として著作者の死後70年まで保護されます。",
            answerImg: "assets/images/civics/g_civics_8_copyright_1773482547930.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "個人が自分の生き方や生活について、他から干渉されずに自由に決定する権利は何か。",
            choices: ["自己決定権","知る権利","プライバシーの権利","幸福追求権"],
            a: "自己決定権",
            comment: "医療現場でのインフォームド・コンセントや、臓器提供の意思表示などもこの権利に基づいています。",
            answerImg: "assets/images/civics/g_civics_8_self_determination_1773482568703.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "「生命、自由及び幸福追求に対する国民の権利」として、日本国憲法第13条で保障されており、新しい人権の根拠ともなる権利は何か。",
            choices: ["幸福追求権","自己決定権","生存権","基本的人権の尊重"],
            a: "幸福追求権",
            comment: "プライバシーの権利や環境権など、憲法に明記されていない新しい人権を主張する際の拠り所となります。",
            answerImg: "assets/images/civics/g_civics_8_happiness_pursuit_1773482588996.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "生活する上で、きれいで快適な環境を求める権利を何というか。",
            choices: ["環境権","生存権","日照権","幸福追求権"],
            a: "環境権",
            comment: "公害などの問題が深刻化した高度経済成長期以降に、生存権や幸福追求権を根拠に主張されるようになりました。",
            answerImg: "assets/images/civics/g_civics_8_environmental_right_1773482605636.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "大規模な開発を行う前に、それが周囲の環境にどのような影響を及ぼすかを事前に調査・評価し、対策を立てる制度を何というか。",
            choices: ["環境アセスメント（環境影響評価）","環境基本計画","ゼロエミッション","公害対策基本法"],
            a: "環境アセスメント（環境影響評価）",
            comment: "環境破壊を未然に防ぐため、一部の大規模な事業には法律でこの実施が義務付けられています。",
            answerImg: "assets/images/civics/g_civics_8_environmental_assessment_1773482628858.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1948年に国連総会で採択された、すべての人類が生まれながらにして持つ基本的人権と自由の保障を世界に向けて示した宣言を何というか。",
            choices: ["世界人権宣言","国際人権規約","児童の権利条約","人種差別撤廃条約"],
            a: "世界人権宣言",
            comment: "法的な拘束力はありませんが、各国の人権保障の目標として大きな影響を与えています。",
            answerImg: "assets/images/civics/g_civics_8_udhr_1773482647496.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "世界人権宣言の内容を条約化し、批准した国に法的な拘束力を持たせた国際条約を何というか。",
            choices: ["国際人権規約","世界人権宣言","児童の権利条約","ジェノサイド条約"],
            a: "国際人権規約",
            comment: "1966年に国連総会で採択され、日本は1979年に批准しました（一部留保あり）。",
            answerImg: "assets/images/civics/g_civics_8_icescr_1773482663761.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "不当に逮捕・拘禁されている人々の釈放や死刑の廃止などを訴え、1977年にノーベル平和賞を受賞した国際的な人権団体（NGO）は何か。",
            choices: ["アムネスティ・インターナショナル","国境なき医師団","赤十字国際委員会","セーブ・ザ・チルドレン"],
            a: "アムネスティ・インターナショナル",
            comment: "世界中の人権侵害状況を調査し、改善を求める活動を行っています。",
            answerImg: "assets/images/civics/g_civics_8_amnesty_1773482685832.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "生き物の親から子に遺伝子がどのように受けつがれているかを調べることで、遺伝によって起こる病気などを解明することを何というか。",
            choices: ["遺伝子診断","遺伝子組み換え","ゲノム編集","クローン技術"],
            a: "遺伝子診断",
            comment: "病気の予防や治療に役立つ一方で、差別やプライバシーの侵害につながる懸念も指摘されています。",
            answerImg: "assets/images/civics/g_civics_8_genetic_diagnosis_1773482705214.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ある生物の細胞に別の生物の遺伝子を組み込む技術によって、新しい性質を持たせて作られた作物を何というか。",
            choices: ["遺伝子組み換え食品","オーガニック食品","特定保健用食品","培養肉"],
            a: "遺伝子組み換え食品",
            comment: "害虫に強い、特定の除草剤で枯れないなどの特徴を持たせることができます。日本では表示が義務付けられています。",
            answerImg: "assets/images/civics/g_civics_8_gmo_1773482722933.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "選挙の基本原則の1つで、性別や財産、納税額に関係なく、一定の年齢（日本では満18歳）に達したすべての国民に選挙権が与えられる選挙を何というか。",
            choices: ["普通選挙","平等選挙","直接選挙","秘密選挙"],
            a: "普通選挙",
            comment: "これに対し、性別や財産などで制限をする選挙を制限選挙といいます。日本では第二次世界大戦後の1945年に完全な普通選挙が実現しました。",
            answerImg: "assets/images/civics/g_civics_9_universal_suffrage_1773482862704.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "選挙の基本原則の1つで、1人1票の投票をし、1票の価値はみな同じであるとする選挙を何というか。",
            choices: ["平等選挙","普通選挙","直接選挙","秘密選挙"],
            a: "平等選挙",
            comment: "財産や身分などによって1人の投票数を増減することは認められません。",
            answerImg: "assets/images/civics/g_civics_9_equal_suffrage_1773482879320.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "選挙の基本原則の1つで、有権者が候補者に対して直接投票する選挙を何というか。",
            choices: ["直接選挙","間接選挙","普通選挙","秘密選挙"],
            a: "直接選挙",
            comment: "これに対し、有権者が選んだ選挙人が候補者に対して投票する選挙を間接選挙（例：アメリカ大統領選挙）といいます。",
            answerImg: "assets/images/civics/g_civics_9_direct_election_1773482898610.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "選挙の基本原則の1つで、だれがだれに投票したのかがわからないようになっている選挙を何というか。",
            choices: ["秘密選挙","普通選挙","平等選挙","直接選挙"],
            a: "秘密選挙",
            comment: "投票用紙には自分の名前を書かなくてよいことになっており、投票する人の自由な意思を守るために行われます。",
            answerImg: "assets/images/civics/g_civics_9_secret_ballot_1773482909476.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "選挙が公正に行われるように管理する機関で、国民の意思が政治に正しく反映されることを目的としているのはどこか。",
            choices: ["選挙管理委員会","国家公安委員会","公正取引委員会","中央労働委員会"],
            a: "選挙管理委員会",
            comment: "中央選挙管理会と都道府県選挙管理委員会、市（区）町村選挙管理委員会から構成されています。",
            answerImg: "assets/images/civics/g_civics_9_election_commission_1773482925375.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1950年に制定された、衆議院議員選挙、参議院議員選挙、地方公共団体の首長や地方議会議員の選挙について定めている法律を何というか。",
            choices: ["公職選挙法","政党助成法","政治資金規正法","国民投票法"],
            a: "公職選挙法",
            comment: "選挙が正しく行われ、民主政治が行われることが目的であり、選挙権や投票のしかた、選挙運動などについて具体的に定めています。",
            answerImg: "assets/images/civics/g_civics_9_election_law_1773482944875.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "有権者に対する投票者の割合を何というか。",
            choices: ["投票率","得票率","支持率","有効投票率"],
            a: "投票率",
            comment: "近年、日本の国政選挙の投票率は7割以下であることが多く、特に若い世代で投票率が低い傾向にあります。",
            answerImg: "assets/images/civics/g_civics_9_turnout_1773482961728.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "選挙の期日（投票日）に仕事や用事などがある場合、投票日より前に投票を行うことができる制度を何というか。",
            choices: ["期日前投票","不在者投票","在外投票","郵便投票"],
            a: "期日前投票",
            comment: "投票率の向上のため、棄権を減らす取り組みとして導入されています。",
            answerImg: "assets/images/civics/g_civics_9_early_voting_1773482983805.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1つの選挙区から2人以上の代表を選出する選挙方法を何というか。",
            choices: ["大選挙区制","小選挙区制","比例代表制","中選挙区制"],
            a: "大選挙区制",
            comment: "小さい政党も当選する可能性が高く国民の意思が反映されやすい反面、政党が多くなり政治が不安定になるおそれがあるなどの問題点があります。",
            answerImg: "assets/images/civics/g_civics_9_large_electoral_district_1773482995706.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1つの選挙区から1人の代表を選出する選挙方法を何というか。",
            choices: ["小選挙区制","大選挙区制","比例代表制","中選挙区制"],
            a: "小選挙区制",
            comment: "大きな政党に有利になり政治が安定しやすい反面、死票が多くなり、国民の意思が正確に反映されないことなどが問題点としてあげられます。",
            answerImg: "assets/images/civics/g_civics_9_small_electoral_district_1773483013727.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "投票の際、政党名などを記入し、各政党の得票数に応じて議席を配分する選挙方法を何というか。",
            choices: ["比例代表制","小選挙区制","大選挙区制","中選挙区制"],
            a: "比例代表制",
            comment: "死票（落選者に投票された票）が少なく国民の意思が反映されやすいですが、小さい政党が多くなり政治が不安定になるおそれがあります。",
            answerImg: "assets/images/civics/g_civics_10_proportional_representation_1773484033688.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日本の比例代表制で議席の配分を行う際にとられている、各政党の得票数÷整数の商の数字の大きい方から当選する計算方式を何というか。",
            choices: ["ドント式","サン・ラグ式","ヘア拘束名簿式","単記移譲式"],
            a: "ドント式",
            comment: "衆議院議員選挙と参議院議員選挙の比例代表で取り入れられています。",
            answerImg: "assets/images/civics/g_civics_10_dhondt_1773484051016.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "現在の衆議院議員選挙でとられている、1選挙区から1名を選ぶ方法と、得票数に応じて政党に議席を配分する方法を組み合わせた選挙方法を何というか。",
            choices: ["小選挙区比例代表並立制","大選挙区制","中選挙区制","完全比例代表制"],
            a: "小選挙区比例代表並立制",
            comment: "小選挙区制で289名、比例代表制で176名が選出されます（第48回選挙より）。候補者は両方に重複立候補できる場合があります。",
            answerImg: "assets/images/civics/g_civics_10_parallel_system_1773484064177.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "おもに有権者に対して、政権を担ったときに行う政策などを政党が具体的に示したものを何というか。",
            choices: ["政権公約（マニフェスト）","マスメディア","世論","政党交付金"],
            a: "政権公約（マニフェスト）",
            comment: "政策の内容や実施期間、財源などがきちんと示されており、その政党が政権をにぎった場合には確実に実行するものだと考えられています。",
            answerImg: "assets/images/civics/g_civics_10_manifesto_1773484081663.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "権利があるのに行使しないこと。選挙において有権者が投票しないことを指す言葉は何か。",
            choices: ["棄権","無効票","白票","死票"],
            a: "棄権",
            comment: "政治への無力感や不信感が背景にあると指摘されています。",
            answerImg: "assets/images/civics/g_civics_10_abstention_1773484102301.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "選挙において、選挙区ごとに有権者の数と議員定数の比率に差が出ているため、一票の価値に差が出てしまっている状態のことを何というか。",
            choices: ["一票の格差","死票","比例代表制","連座制"],
            a: "一票の格差",
            comment: "平等選挙の原則に反するとして、たびたび裁判で問題になっています。",
            answerImg: "assets/images/civics/g_civics_10_vote_disparity_1773484121945.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "一定の条件を満たしている政党に対して、政党助成法にもとづいて、活動にかかる費用の一部として国から交付されるお金を何というか。",
            choices: ["政党交付金","政治献金","協賛金","寄付金"],
            a: "政党交付金",
            comment: "民主政治が正しく行われるために、政党の活動が公正に行われることを目的としています。",
            answerImg: "assets/images/civics/g_civics_10_party_subsidy_1773484142744.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "選挙運動の中心人物が選挙違反をした場合に、候補者の当選が無効になる制度を何というか。",
            choices: ["連座制","小選挙区制","比例代表制","ドント式"],
            a: "連座制",
            comment: "選挙運動の責任者や親族などが違反をして刑罰が確定したとき、その後も立候補することが制限されます。",
            answerImg: "assets/images/civics/g_civics_10_joint_responsibility_1773484163167.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国民の間にある共通した多くの意見のことで、民主政治において重要な役割を担っているものを何というか。",
            choices: ["世論","マスメディア","政権公約","マニフェスト"],
            a: "世論",
            comment: "民主政治においては国民の意思にしたがった政治を行う必要があるため、世論は重要です。",
            answerImg: "assets/images/civics/g_civics_10_public_opinion_1773484181193.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "国会法で定められている、衆議院・参議院にある少数の国会議員からなる組織で、本会議の前に特定の議題について検討する場を何というか。",
            choices: ["委員会","本会議","公聴会","両院協議会"],
            a: "委員会",
            comment: "国会での審議を慎重かつスムーズに行うために設置されており、予算委員会など17の常任委員会があります。",
            answerImg: "assets/images/civics/g_civics_10_committee_1773484198990.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "衆議院・参議院にそれぞれ設置されている常任委員会の1つで、予算についての審査や調査を行う委員会を何というか。",
            choices: ["予算委員会","法務委員会","外務委員会","内閣委員会"],
            a: "予算委員会",
            comment: "国の重要な予算を審議する委員会です。"
        },
        {
            q: "衆議院・参議院それぞれの議員全体による会議で、国会の意思が最終的に決定される場所を何というか。",
            choices: ["本会議","委員会","公聴会","両院協議会"],
            a: "本会議",
            comment: "開くには総議員の3分の1以上の出席が必要で、公開が原則です。通常は出席議員の過半数で議事が決められます。"
        },
        {
            q: "衆議院と参議院の委員会において、議題の関係者や知識がある人を招いて意見を聞く会を何というか。",
            choices: ["公聴会","本会議","両院協議会","党首討論"],
            a: "公聴会",
            comment: "予算や税金などに関する重要な法案については必ず開かなければなりません。"
        },
        {
            q: "衆議院と参議院の議決が異なるときに、それぞれの議院から10名ずつ選出され、意見を調整するために開かれる会を何というか。",
            choices: ["両院協議会","本会議","委員会","公聴会"],
            a: "両院協議会",
            comment: "予算の議決、条約の承認、内閣総理大臣の指名で両院の議決が異なったときは必ず開かれます。"
        },
        {
            q: "国の支出と収入の見積もりである予算を、国会で審議し決定することを何というか。",
            choices: ["予算の議決","法律案の議決","条約の承認","弾劾裁判"],
            a: "予算の議決",
            comment: "予算は必ず先に衆議院に提出されます（予算先議権）。衆議院の優越が認められています。"
        },
        {
            q: "内閣が外国と結んだ条約を、国会で認めることを何というか。",
            choices: ["条約の承認","法律案の議決","予算の議決","内閣総理大臣の指名"],
            a: "条約の承認",
            comment: "承認は締結の「前」でも「後」でもよいとされています。衆議院の優越が認められています。"
        },
        {
            q: "国会の議決によって、国会議員の中から行政の最高責任者を指名することを何というか。",
            choices: ["内閣総理大臣の指名","国務大臣の任命","最高裁判所長官の指名","衆議院議長の選出"],
            a: "内閣総理大臣の指名",
            comment: "両院協議会を開いても意見が一致しない場合などは、衆議院の議決が国会の議決となる「衆議院の優越」が認められています。"
        },
        {
            q: "国民が選んだ代表者からなる議会を通じて行われる民主主義の政治のしくみを何というか。",
            choices: ["議会制民主主義（代表制民主主義）","直接民主制","大統領制","専制政治"],
            a: "議会制民主主義（代表制民主主義）",
            comment: "日本の国会や地方議会は、このしくみをとり入れています。"
        },
        {
            q: "国民の中から選挙を通じて選ばれた国会議員によってなりたっている機関を何というか。",
            choices: ["国会","内閣","裁判所","地方議会"],
            a: "国会",
            comment: "国民の代表機関であり、日本国憲法では「国権の最高機関」であり「国の唯一の立法機関」と定められています。"
        },
        {
            q: "日本の国会は、衆議院と参議院の2つの議院から構成されています。このような制度を何というか。",
            choices: ["二院制（両院制）","一院制","連邦制","三権分立"],
            a: "二院制（両院制）",
            comment: "国会の構成のことです。国民のさまざまな意見を広く政治に反映させる目的があります。"
        },
        {
            q: "毎年1月に召集される国会を何というか。",
            choices: ["常会（通常国会）","特別会（特別国会）","臨時会（臨時国会）","参議院の緊急集会"],
            a: "常会（通常国会）",
            comment: "おもに次年度の予算の審議が行われます。会期は150日です。"
        },
        {
            q: "衆議院解散後の総選挙の日から30日以内に召集される国会を何というか。",
            choices: ["特別会（特別国会）","常会（通常国会）","臨時会（臨時国会）","参議院の緊急集会"],
            a: "特別会（特別国会）",
            comment: "内閣総理大臣の指名が中心となります。"
        },
        {
            q: "内閣が必要と認めたとき、または、いずれかの議院の総議員の4分の1以上の要求があったとき召集される国会を何というか。",
            choices: ["臨時会（臨時国会）","常会（通常国会）","特別会（特別国会）","参議院の緊急集会"],
            a: "臨時会（臨時国会）",
            comment: "おもに政治上で緊急を要する問題などを審議します。"
        },
        {
            q: "衆議院の解散中に緊急の必要があるとき、内閣によって召集される参議院の集会を何というか。",
            choices: ["参議院の緊急集会","特別会（特別国会）","臨時会（臨時国会）","常会（通常国会）"],
            a: "参議院の緊急集会",
            comment: "ここで決められたことは、次の国会開会後10日以内に衆議院での同意が必要となり、同意がなされなかったときは無効となります。"
        },
        {
            q: "日本国憲法において「国の唯一の立法機関」と定められている機関における、法律を制定する権限（行為）を何というか。",
            choices: ["立法","行政","司法","国政調査"],
            a: "立法",
            comment: "国会の最も重要な仕事の一つです。"
        },
        {
            q: "国会議員が提出した法律案のことを何というか。",
            choices: ["議員立法","内閣提出法案","条約","政令"],
            a: "議員立法",
            comment: "これに対し、内閣が提出したものを閣法と呼びます。"
        },
        {
            q: "日本の国会を構成する議院の1つで、解散があり、任期も4年と短いため、民意をより反映しやすいとされる議院は何か。",
            choices: ["衆議院","参議院","貴族院","元老院"],
            a: "衆議院",
            comment: "被選挙権は満25歳以上です。法律の制定や内閣総理大臣の指名などで参議院より強い権限（衆議院の優越）が認められています。"
        },
        {
            q: "日本の国会を構成する議院の1つで、任期は6年で3年ごとに半数ずつ改選され、解散がなく慎重に審議ができるとされる議院は何か。",
            choices: ["参議院","衆議院","貴族院","元老院"],
            a: "参議院",
            comment: "被選挙権は満30歳以上です。衆議院の行き過ぎをおさえる役割が期待されています。"
        },
        {
            q: "国会の議決では原則として衆参両院の一致が必要ですが、意見が異なった場合に衆議院の議決が参議院よりも優先されることを何というか。",
            choices: ["衆議院の優越","多数決の原理","弾劾裁判","国政調査権"],
            a: "衆議院の優越",
            comment: "衆議院の方が任期が短く、解散があるため国民の意思をより早く反映していると考えられているためです。予算の議決や内閣総理大臣の指名、条約の承認などに認められています。"
        },
        {
            q: "政治が正しく行われているかどうか調査するために、衆参両院それぞれに与えられている権利を何というか。",
            choices: ["国政調査権","国政審議権","弾劾裁判権","立法権"],
            a: "国政調査権",
            comment: "証人を呼んで質問（証人喚問）したり、記録の提出を求めたりすることができます。この権限に衆議院の優越はありません。"
        },
        {
            q: "国会で衆参それぞれの総議員の3分の2以上の賛成によって憲法の改正を国民に提案することを何というか。",
            choices: ["憲法改正の発議","国民投票","法律案の議決","国民審査"],
            a: "憲法改正の発議",
            comment: "その後の国民投票で有効投票の過半数の賛成が得られれば、改正が成立します。"
        },
        {
            q: "国会などの議会で多数を占め、内閣（政権）を担当している政党を何というか。",
            choices: ["与党","野党","無所属","第三党"],
            a: "与党",
            comment: "議院内閣制では、通常、議会で多数を占める政党が与党となります。"
        },
        {
            q: "政権を担当せず、与党の監視や批判を行う政党を何というか。",
            choices: ["野党","与党","無所属","連立政権"],
            a: "野党",
            comment: "与党とは違う政策を国民に示すことで、国民が政治を判断する際に役立ちます。"
        },
        {
            q: "複数の政党によって内閣が組織、運営されている状態を何というか。",
            choices: ["連立政権（連立内閣）","一党独裁","単独政権","二大政党制"],
            a: "連立政権（連立内閣）",
            comment: "違う政党同士がいっしょになって政治を行うため、政策については話し合いで合意する必要があります。"
        },
        {
            q: "支持している特定の政党がない人々のことを何というか。",
            choices: ["無党派層","浮動票","固定票","圧力団体"],
            a: "無党派層",
            comment: "近年増えており、選挙の際にどの党に投票するかで政権が決まることもあります。"
        },
        {
            q: "選挙のときにだれに投票するかわからない人々の票を何というか。",
            choices: ["浮動票","固定票","無党派層","死票"],
            a: "浮動票",
            comment: "これに対し、毎回同じように特定の政党や候補者に投票に行く人の票を「固定票」といいます。"
        },
        {
            q: "自分たちの利益の実現のために、政府や議会・政党などにさまざまな圧力をかける団体を何というか。",
            choices: ["圧力団体（利益団体）","ボランティア","NPO","NGO"],
            a: "圧力団体（利益団体）",
            comment: "自分たちだけの特殊な利益を求める要求をすることがあるため、民主政治をゆがめることもあるといわれています。"
        },
        {
            q: "国会が制定した法律や予算にもとづいて政治を行うことを何というか。",
            choices: ["行政","立法","司法","国政調査"],
            a: "行政",
            comment: "日本国憲法でこの権限は内閣に属すると定められています。"
        },
        {
            q: "国の行政機関の最高機関で、内閣総理大臣（首相）とその他の国務大臣で構成される組織は何か。",
            choices: ["内閣","国会","裁判所","各省庁"],
            a: "内閣",
            comment: "法律の執行や条約の締結、予算の作成などを行います。"
        },
        {
            q: "政治の中心にいる内閣の首長で、国会議員の中から国会の議決によって指名され、天皇によって任命される役職は何か。",
            choices: ["内閣総理大臣（首相）","国務大臣","最高裁判所長官","衆議院議長"],
            a: "内閣総理大臣（首相）",
            comment: "内閣を代表し、他の国務大臣を任命・罷免する権限を持ちます。"
        },
        {
            q: "法にもとづいてもめごとなどを解決することを指し、その権限は最高裁判所と下級裁判所に属すると定められているものを何というか。",
            choices: ["司法","立法","行政","警察"],
            a: "司法",
            comment: "日本国憲法第76条で規定されています。"
        },
        {
            q: "法律にもとづいてもめごとなどを解決する「裁判」を行うための国の司法機関は何か。",
            choices: ["裁判所","国会","内閣","警察庁"],
            a: "裁判所",
            comment: "最高裁判所と下級裁判所（高等裁判所、地方裁判所、家庭裁判所、簡易裁判所）で構成されます。"
        },
        {
            q: "長官と14名の裁判官で構成される、日本最高の司法機関であり終審裁判所であるものを何というか。",
            choices: ["最高裁判所","高等裁判所","地方裁判所","家庭裁判所"],
            a: "最高裁判所",
            comment: "長官は内閣の指名にもとづいて天皇が任命し、その他の裁判官は内閣が任命します。違憲立法審査権の最終判断を行うため「憲法の番人」と呼ばれます。"
        },
        {
            q: "最高裁判所の下位に置かれる裁判所で、高等・地方・家庭・簡易の4種類の裁判所の総称を何というか。",
            choices: ["下級裁判所","特別裁判所","弾劾裁判所","終審裁判所"],
            a: "下級裁判所",
            comment: "それぞれ扱う事件の種類や重さなどによって担当が分かれています。"
        },
        {
            q: "国会などの議会で、内閣の政治が信頼できないと思ったときに、衆議院が行うことができる決議を何というか。",
            choices: ["内閣不信任の決議","問責決議","弾劾裁判","違憲立法の審査"],
            a: "内閣不信任の決議",
            comment: "この決議が行われた場合、内閣は10日以内に総辞職するか、衆議院を解散しなければなりません。"
        },
        {
            q: "内閣が4年の任期の途中で、衆議院議員全員の資格を終わらせることを何というか。",
            choices: ["衆議院の解散","内閣総辞職","内閣不信任の決議","総選挙"],
            a: "衆議院の解散",
            comment: "内閣不信任の決議に対して、内閣から衆議院に対して働きかける方法の1つで、議院内閣制のしくみにもとづいています。"
        },
        {
            q: "内閣総理大臣と国務大臣の全員が辞職することを何というか。",
            choices: ["総辞職","解散","更迭","弾劾"],
            a: "総辞職",
            comment: "内閣不信任の決議が行われ衆議院の解散をしなかった場合や、衆議院議員総選挙のあとに初めて国会が開かれたとき、内閣総理大臣が欠けたときに行われます。"
        },
        {
            q: "内閣の指揮監督のもとにおかれている行政機関で、専門分野ごとに分けられているものを何というか。",
            choices: ["省庁","国会","裁判所","地方公共団体"],
            a: "省庁",
            comment: "省の下に庁がおかれています。"
        },
        {
            q: "農業、林業、漁業に関する国の行政機関で、食料の安定供給の確保などを担っているのはどこか。",
            choices: ["農林水産省","経済産業省","国土交通省","環境省"],
            a: "農林水産省",
            comment: "農林水産業の振興を行っています。"
        },
        {
            q: "日本の安全を守り、災害などから人々の命や財産を守る国の行政機関で、自衛隊の管理・運営を行っているのはどこか。",
            choices: ["防衛省","法務省","外務省","総務省"],
            a: "防衛省",
            comment: "自衛隊の管理や運営など、国防に関する職務を担っています。"
        },
        {
            q: "国がかかわる裁判の処理や検察、司法制度などを担当する国の行政機関で、出入国管理や人権擁護の活動も行っているのはどこか。",
            choices: ["法務省","総務省","警察庁","外務省"],
            a: "法務省",
            comment: "法秩序の維持や国民の権利擁護に関わる業務を行っています。"
        },
        {
            q: "選挙や公務員制度、消防など国の仕事や郵政事業を担当する国の行政機関はどこか。",
            choices: ["総務省","法務省","国土交通省","財務省"],
            a: "総務省",
            comment: "地方行財政や情報通信に関する業務なども幅広く担っています。"
        },
        {
            q: "経済を活性化させるために、産業や貿易などにかかわる政策を担当する国の行政機関はどこか。",
            choices: ["経済産業省","財務省","農林水産省","国土交通省"],
            a: "経済産業省",
            comment: "資源やエネルギーなど、経済にかかわる幅広い仕事をしています。"
        },
        {
            q: "道路や空港などの交通網や、国土開発、河川の管理などを行う国の行政機関で、海上の安全も担当しているのはどこか。",
            choices: ["国土交通省","経済産業省","総務省","環境省"],
            a: "国土交通省",
            comment: "国土の総合的かつ体系的な利用、開発および保全などを担っています。"
        },
        {
            q: "教育や科学技術、文化・スポーツの振興を担当する国の行政機関はどこか。",
            choices: ["文部科学省","厚生労働省","経済産業省","総務省"],
            a: "文部科学省",
            comment: "教育に関する政策の立案・実施などを行っています。"
        },
        {
            q: "外交に関する仕事を担当する国の行政機関はどこか。",
            choices: ["外務省","財務省","法務省","防衛省"],
            a: "外務省",
            comment: "国の外交政策の立案や条約に関する事務を行います。"
        },
        {
            q: "予算、税制、通貨、国債に関する仕事を担当する国の行政機関はどこか。",
            choices: ["財務省","経済産業省","総務省","外務省"],
            a: "財務省",
            comment: "国家財政の管理や外国為替の安定の確保などが主な仕事です。"
        },
        {
            q: "社会福祉や社会保障の推進、雇用の確保、労働条件の整備などを担当する国の行政機関はどこか。",
            choices: ["厚生労働省","文部科学省","経済産業省","総務省"],
            a: "厚生労働省",
            comment: "高齢者介護・福祉施策や医療保険制度の推進なども担っています。"
        },
        {
            q: "国や地方公共団体といった公的機関に勤務する者で、日本国憲法第15条で「全体の奉仕者」と定められている人々を何というか。",
            choices: ["公務員","会社員","労働組合員","NGO職員"],
            a: "公務員",
            comment: "国の仕事をする国家公務員と地方の仕事をする地方公務員があり、一部の人間だけでなく国民全体に奉仕しなければならないとされています。"
        },
        {
            q: "おもに国や地方公共団体の政策決定にかかわる公務員のこと。とくに省庁のトップクラスの公務員を指すことが多い言葉は何か。",
            choices: ["官僚","政治家","代議士","裁判官"],
            a: "官僚",
            comment: "政治の重要な決定を通じて、本来の主権者の代表である国会よりも大きな権限を持ってしまう「官僚政治」が問題視されることがあります。"
        },
        {
            q: "行政機関が、行政目的を実現するために企業や団体などに行う指導、勧告、助言などを何というか。",
            choices: ["行政指導","行政処分","行政命令","法律の執行"],
            a: "行政指導",
            comment: "強制力はなく、相手方に任意の協力を求めるものです。"
        },
        {
            q: "行政権の肥大化を解消し、政府の役割を最小限におさえる「小さな政府」をめざすために、国や地方公共団体の行政組織などを見直す改革を何というか。",
            choices: ["行政改革","政治改革","司法制度改革","選挙制度改革"],
            a: "行政改革",
            comment: "規制緩和や公務員の数の削減、国立学校や美術館などの独立行政法人化などが進められています。"
        },
        {
            q: "内閣が提出した法律案のことを「議員立法」に対して何というか。",
            choices: ["閣法（内閣提出法律案）","政令","省令","条約"],
            a: "閣法（内閣提出法律案）",
            comment: "現在の通常国会などでは、議員立法に比べて閣法の成立件数の方が多い傾向にあります。"
        },
        {
            q: "法律で決めたことを実施するために内閣が制定する命令を何というか。",
            choices: ["政令","法律","条例","省令"],
            a: "政令",
            comment: "憲法や法律の細かい取り決めを、国会を通さずに行うことが多いです。"
        },
        {
            q: "内閣は国会の信任の上になりたち、国会に対し、連帯して責任を負うというしくみを何というか。",
            choices: ["議院内閣制","大統領制","三権分立","立憲君主制"],
            a: "議院内閣制",
            comment: "イギリスや日本でとり入れられているしくみで、内閣の政治が信頼できないときには、衆議院は内閣不信任の決議を行うことができます。"
        },
        {
            q: "内閣総理大臣とともに内閣を構成する大臣で、内閣総理大臣によって任免され、過半数が国会議員でなければならないのは何か。",
            choices: ["国務大臣","副大臣","政務官","事務次官"],
            a: "国務大臣",
            comment: "各省庁の長などを務めます。"
        },
        {
            q: "内閣総理大臣によって開かれ、すべての国務大臣が出席する会議で、内閣の意思が決定される場を何というか。",
            choices: ["閣議","本会議","委員会","両院協議会"],
            a: "閣議",
            comment: "閣議で物事を決めるには、全員の意見を1つにする全会一致でなければなりません。"
        },
        {
            q: "1つの事件について、3回まで裁判を受けることができるしくみを何というか。",
            choices: ["三審制","陪審制","裁判員制度","検察審査会"],
            a: "三審制",
            comment: "裁判を慎重・公正に行い、えん罪を防ぐためにとられています。第一審に不服がある場合は「控訴」、第二審に不服がある場合は「上告」ができます。"
        },
        {
            q: "無実の人に罪があると考えられている状態のことを何というか。",
            choices: ["えん罪","再審","控訴","上告"],
            a: "えん罪",
            comment: "これを防ぐために三審制などがとられていますが、判決が確定した後でも新たな証拠によって再審で無罪となる場合もあります。"
        },
        {
            q: "判決が確定したあと、新たな証拠が出てきて判決が間違っていたのではないかといったときに、不服の申し立てを受けて行われる裁判のやり直しを何というか。",
            choices: ["再審","控訴","上告","特別上告"],
            a: "再審",
            comment: "えん罪を救済するために重要な制度です。"
        },
        {
            q: "裁判官が、国会や内閣などからの影響を受けず、独立して公正中立に裁判を行う原則を何というか。",
            choices: ["司法権の独立","三権分立","議院内閣制","立憲主義"],
            a: "司法権の独立",
            comment: "日本国憲法第76条で「裁判官は自らの良心に従い、拘束されるのは憲法と法律だけである」と定められています。"
        },
        {
            q: "法律や行政が憲法に違反していないかどうかを裁判所が審査する権限を何というか。",
            choices: ["違憲立法審査権（違憲審査権）","国政調査権","弾劾裁判権","国民審査権"],
            a: "違憲立法審査権（違憲審査権）",
            comment: "下級裁判所でも判断できますが、最終的な判断を行う最高裁判所は「憲法の番人」とよばれます。"
        },
        {
            q: "借金の返済や離婚、企業間の争いなどに関するもめごとを解決するための裁判を何というか。",
            choices: ["民事裁判","刑事裁判","行政裁判","少年審判"],
            a: "民事裁判",
            comment: "訴えをおこした者を「原告」、訴えられた者を「被告」といい、当事者の話し合いで解決する和解や当事者の主張をもとに裁判官が判決を下します。"
        },
        {
            q: "2009年から実施されている、殺人など重大な刑事裁判の第一審に、国民が裁判官といっしょに話し合って参加する制度を何というか。",
            choices: ["裁判員制度","陪審制","検察審査会","司法改革"],
            a: "裁判員制度",
            comment: "裁判員は満18歳以上の有権者から抽選で選ばれ、被告人が有罪か無罪か、有罪の場合はどのような刑罰にするかを決めます。"
        },
        {
            q: "被疑者が検察官によって起訴されなかった場合に、それがよかったかどうかを国民から選ばれた審査員が審査する組織を何というか。",
            choices: ["検察審査会","裁判員制度","弾劾裁判所","国会"],
            a: "検察審査会",
            comment: "「起訴すべきである」などの議決が出た場合、検察官は再度事件を検討することになります。"
        },
        {
            q: "国の権力を「立法」「行政」「司法」の3つに分散・独立させているしくみを何というか。",
            choices: ["三権分立（権力分立）","議院内閣制","連邦制","地方自治"],
            a: "三権分立（権力分立）",
            comment: "権力が1つに集中して乱用されるのを防ぎ、たがいに抑制しあい均衡を保つためにとり入れられています。"
        },
        {
            q: "国や地方公共団体といった行政機関を相手におこす民事裁判の一種で、行政処分の取り消しや賠償を求める裁判を何というか。",
            choices: ["行政裁判","刑事裁判","民事裁判","弾劾裁判"],
            a: "行政裁判",
            comment: "選挙の無効を求めたりする裁判なども含まれます。"
        },
        {
            q: "刑法で定めている犯罪を犯した疑いのある人（被疑者）に対して、検察官が起訴して行われる裁判を何というか。",
            choices: ["刑事裁判","民事裁判","行政裁判","少年審判"],
            a: "刑事裁判",
            comment: "裁判所は被告人が有罪か無罪か、有罪のときはどれくらいの刑罰かの判決を下します。"
        },
        {
            q: "刑事事件において警察官といっしょに捜査をし、被疑者を裁判所に起訴するかしないかを決める国家公務員は誰か。",
            choices: ["検察官","裁判官","弁護士","警察官"],
            a: "検察官",
            comment: "検察庁に属しており、刑事裁判において原告となります。"
        },
        {
            q: "刑事事件で犯罪を犯した疑いのある人（被疑者）を、検察官が原告となって裁判所に裁判を求めることを何というか。",
            choices: ["起訴","告訴","告発","上告"],
            a: "起訴",
            comment: "起訴により刑事裁判が始まります。"
        },
        {
            q: "刑事裁判において、検察官に起訴された人のことを何というか。",
            choices: ["被告人","被疑者","原告","証人"],
            a: "被告人",
            comment: "起訴されるまでは被疑者とよばれ、有罪判決が確定するまでは無罪であると考えることが刑事裁判のきまりとされています。"
        },
        {
            q: "刑事裁判において、被告人のえん罪を防ぐため、または不当な扱いを受けないために、被告人の代わりに証拠を提出したり意見を述べたりする役割を果たす人を何というか。",
            choices: ["弁護人","検察官","裁判員","書記官"],
            a: "弁護人",
            comment: "被告人となった人は、だれでも弁護人を依頼できます。おもに弁護士がその役目にあたります。"
        },
        {
            q: "刑事裁判における弁護人になる資格を持つ人であり、民事裁判の代理人になったり、紛争を予防するための法律相談にのったりする人のことを何というか。",
            choices: ["弁護士","司法書士","行政書士","検察官"],
            a: "弁護士",
            comment: "国民の権利を守るための重要な役割を担っています。"
        },
        {
            q: "裁判所で実際に裁判を担当する国家公務員で、日本国憲法第76条で「自らの良心に従い、拘束されるのは憲法と法律だけである」と定められているのは誰か。",
            choices: ["裁判官","検察官","弁護士","裁判員"],
            a: "裁判官",
            comment: "最高裁判所長官は内閣が指名し、天皇が任命します。その他の裁判官は内閣が任命します。"
        },
        {
            q: "逮捕や住居侵入、捜索などを行うには、裁判官または裁判所の出す令状が必要であるという原則を何というか。",
            choices: ["令状主義","罪刑法定主義","三審制","司法権の独立"],
            a: "令状主義",
            comment: "人権侵害を防ぐための考え方ですが、現行犯逮捕の場合は必要ありません。"
        },
        {
            q: "警察などの捜査機関が被疑者を逮捕するときに必要となる令状を何というか（現行犯逮捕の場合は必要ない）。",
            choices: ["逮捕令状","捜索令状","起訴状","判決書"],
            a: "逮捕令状",
            comment: "基本的人権の1つである身体の自由を保障するために定められています。"
        },
        {
            q: "刑を言い渡したうえで、その期間中に再び犯罪などを犯さなければ、その刑を受けなくてもよくなる制度を何というか。",
            choices: ["執行猶予","恩赦","仮釈放","保護観察"],
            a: "執行猶予",
            comment: "犯罪を犯しても自分の非を認め、立ち直ろうとしているのであれば、刑罰を与えなくてもよいのではないかという考えからつくられました。"
        },
        {
            q: "国民にとって身近で信頼できる司法制度とするために行われている、法科大学院の設置や裁判員制度の導入などの改革を総称して何というか。",
            choices: ["司法制度改革","行政改革","政治改革","教育改革"],
            a: "司法制度改革",
            comment: "裁判にかかる時間を短くしたり、裁判官などを増やす取り組みも含まれます。"
        },
        {
            q: "刑事裁判において経済的な理由などで弁護人を依頼できない被告人に対し、国の費用で裁判所がつける弁護人を何というか。",
            choices: ["国選弁護人","私選弁護人","当番弁護士","公選弁護人"],
            a: "国選弁護人",
            comment: "法テラスが制度の運営にあたっています。"
        },
        {
            q: "法的トラブルの解決を支援する組織である日本司法支援センターの愛称は何か。",
            choices: ["法テラス","消費者庁","国民生活センター","人権擁護委員"],
            a: "法テラス",
            comment: "司法サービスを利用しやすくすることを目的に、2006年に設立されました。"
        },
        {
            q: "裁判官が職務上の義務違反などをしたときに、裁判官を辞めさせるかどうかについてきめるために国会に設置される裁判を何というか。",
            choices: ["弾劾裁判","行政裁判","違憲立法審査","国政調査"],
            a: "弾劾裁判",
            comment: "裁判官には司法権の独立があるため、心身の故障以外で辞めさせられる場合はこの弾劾裁判に限られています。"
        },
        {
            q: "都道府県や市（区）町村など、地方自治が行われる単位となる団体を何というか。",
            choices: ["地方公共団体（地方自治体）","非政府組織（NGO）","特定非営利活動法人（NPO）","公共企業体"],
            a: "地方公共団体（地方自治体）",
            comment: "警察、消防、ごみの収集や学校・図書館の運営など、地域住民の生活に結びついた仕事を行っています。"
        },
        {
            q: "それぞれの地域の住民が、自分たちの住んでいる地域の政治を自らの手で行うことであり、「民主主義の学校」といわれるものを何というか。",
            choices: ["地方自治","国政","直接民主制","中央集権"],
            a: "地方自治",
            comment: "地方自治法に定められており、民主政治のあり方を学ぶことができるとされています。"
        },
        {
            q: "住民の意思にもとづいて地方の政治を行うことであり、地方自治を行うための要素の1つである原則を何というか。",
            choices: ["住民自治","団体自治","地方分権","国民主権"],
            a: "住民自治",
            comment: "もう1つの要素として、国から独立して地方公共団体の権限で政治を行う「団体自治」があります。"
        },
        {
            q: "都道府県知事や市（区）町村長など、地方公共団体をまとめ、代表となる者のことをまとめて何というか。",
            choices: ["首長","議員","議長","委員長"],
            a: "首長",
            comment: "住民の直接選挙で選ばれ、任期は4年です。地方議会が議決した条例や予算に反対する場合、拒否権を行使して再議決を求めることができます。"
        },
        {
            q: "地方公共団体における議決機関で、条例の制定・改廃や予算の審議などを行う、都道府県議会や市（区）町村議会を指して何というか。",
            choices: ["地方議会","国会","内閣","裁判所"],
            a: "地方議会",
            comment: "一院制で、議員は住民の直接選挙で選ばれます。首長に対する不信任決議権を持っています。"
        },
        {
            q: "地方議会が制定し、その地方公共団体にのみ適用される法令で、法律の範囲内でのみ制定できるものを何というか。",
            choices: ["条例","法律","政令","規則"],
            a: "条例",
            comment: "住民の直接請求権により、住民が制定や改正・廃止を要求することもできます。"
        },
        {
            q: "国民全員に住民票コードを割りあて、全国どこの市区町村からでも住民票の交付が受けられるようにしたコンピューターシステムを何というか。",
            choices: ["住民基本台帳ネットワークシステム（住基ネット）","マイナンバー制度","e-Tax","電子政府"],
            a: "住民基本台帳ネットワークシステム（住基ネット）",
            comment: "これにより、転入・転出届が転入時の1回ですむようになりました。"
        },
        {
            q: "従来の国が画一的に政治を行う中央集権を改め、地方公共団体が自主的に地域の実情にあった政治を行うことを何というか。",
            choices: ["地方分権","中央集権","地方自治","道州制"],
            a: "地方分権",
            comment: "国の事務権限や財源を地方に移したりしています。"
        },
        {
            q: "地方公共団体の財政のこと。歳入と歳出からなる。",
            choices: ["地方財政","国家財政","財政投融資","金融政策"],
            a: "地方財政",
            comment: "歳出で最も多い割合を占めているのは、一般的に民生費や教育費などです。"
        },
        {
            q: "地方公共団体が自ら得ることができる収入で、大部分は地方税（住民税や固定資産税など）である財源を何というか。",
            choices: ["自主財源","依存財源","地方交付税交付金","国庫支出金"],
            a: "自主財源",
            comment: "地方公共団体が自由に使える財源ですが、歳入全体に占める割合はそれほど多くありません。"
        },
        {
            q: "地方交付税交付金や国庫支出金など、国からの財源に頼らざるを得ないことを指す言葉は何か。",
            choices: ["依存財源","自主財源","地方債","地方税"],
            a: "依存財源",
            comment: "地方公共団体の自主財源が少ないため、これに頼らざるを得ないことが問題となっています。"
        },
        {
            q: "国から地方公共団体に支給される、国に委任された特定の活動（義務教育費や生活保護費など）を行うための資金で、使いみちが指定されているものを何というか。",
            choices: ["国庫支出金","地方交付税交付金","地方債","地方税"],
            a: "国庫支出金",
            comment: "使いみちが指定されているため、地方の独自の政策には使えません。"
        },
        {
            q: "地方公共団体の財源不足を補うとともに収入の格差を調整するため、国から配分される資金で、使いみちが自由であるものを何というか。",
            choices: ["地方交付税交付金","国庫支出金","地方債","地方税"],
            a: "地方交付税交付金",
            comment: "法人税や所得税といった国税収入の一定割合が交付されます。"
        },
        {
            q: "地方公共団体が、公営事業や災害復旧などの財源にするため、民間から資金を借り入れるために発行する債券（いわば借金）を何というか。",
            choices: ["地方債","国債","社債","株式"],
            a: "地方債",
            comment: "毎年利子を支払い、満期がきたら全額返済しなければならないため、大量に発行すると返済にかかる費用が大きくなる問題があります。"
        },
        {
            q: "地方自治で、住民が重要事項に対して直接意思を反映し、一定数以上の署名をもとに首長や議員の解職、条例の制定・改廃などを請求できる権利を何というか。",
            choices: ["直接請求権","参政権","請願権","国政調査権"],
            a: "直接請求権",
            comment: "条例の制定・改廃請求（イニシアティブ）や、解職請求（リコール）などがあります。"
        },
        {
            q: "住民の立場に立って、行政が適正に行われているか監視したり、住民からの苦情を処理したりする制度を何というか。",
            choices: ["オンブズマン制度","クーリング・オフ制度","インフォームド・コンセント","パブリック・コメント"],
            a: "オンブズマン制度",
            comment: "地方公共団体に導入されていることが多い行政監視制度です。"
        },
        {
            q: "地域経済を活性化させるため、他の地域では規制がかかっていてできないことを特別に規制をゆるめて実施することが認められた地域を何というか。",
            choices: ["構造改革特区","経済特区","地方分権特区","過疎地域"],
            a: "構造改革特区",
            comment: "成功した場合、他の地域でも規制をゆるめることで全国的な構造改革につながることが期待されています。"
        },
        {
            q: "行政や財政の効率化を目的として、ある市町村が周辺の市町村といっしょになり、1つの市町村となることを何というか。",
            choices: ["市町村合併","道州制","地方分権","過疎化"],
            a: "市町村合併",
            comment: "2005年までに合併手続きを完了すれば手厚い財政支援が受けられたため、「平成の大合併」と呼ばれる合併が盛んに行われました。"
        },
        {
            q: "行政と民間組織などいくつかの組織や集団が、同じ目的に向かって協力しながら進んでいくことを何というか。",
            choices: ["協働","競争","合併","対立"],
            a: "協働",
            comment: "それぞれの得意分野をいかすことで、バランスのとれた発展が可能になります。"
        },
        {
            q: "中心部に都市機能や居住地をコンパクトにまとめたまち、またはそのまちづくりを何というか。",
            choices: ["コンパクトシティ","エコタウン","ニュータウン","スマートシティ"],
            a: "コンパクトシティ",
            comment: "中心市街地の活性化、暮らしやすさの向上、行政サービス費用の節約をはかることができると考えられています。"
        },
        {
            q: "地方議会の解散や首長・議員の解職請求などに際して、その地方公共団体の住民が賛成・反対の意思を示すために行う投票を何というか。",
            choices: ["住民投票","国民投票","総選挙","直接選挙"],
            a: "住民投票",
            comment: "重要な地域の課題について、条例にもとづいて行われることもあります。"
        },
        {
            q: "市町村や特定の地域において、地域社会が主体となって独自の特産品開発などを行い、地域の活性化を進めようとする運動を何というか。",
            choices: ["村おこし（町おこし）","町内会","自治会","NPO"],
            a: "村おこし（町おこし）",
            comment: "「一村一品運動」やB級グルメなど、様々な取り組みが行われています。"
        },
        {
            q: "財やサービスを生産・消費するしくみのこと、また、生産や消費を行う活動そのものを何というか。",
            choices: ["経済（経済活動）","流通","家計","政治"],
            a: "経済（経済活動）",
            comment: "政府、企業、家計の3つの経済主体によって行われます。"
        },
        {
            q: "政府、企業とともに経済主体の1つであり、労働などによって得た収入をもとに消費を行ったり貯蓄を行ったりする、家庭の経済活動のことを何というか。",
            choices: ["家計","企業","政府","市場"],
            a: "家計",
            comment: "経済活動の基礎となる単位です。"
        },
        {
            q: "日常生活で使う食料品や衣類など、形のある商品のことをまとめて何というか。",
            choices: ["財（消費財）","サービス","貨幣","資本"],
            a: "財（消費財）",
            comment: "消費財のうち、自動車や電気製品といった長期間使用できるものを耐久消費財といいます。"
        },
        {
            q: "医療や教育、福祉など、形はないが見たりさわったりできないが人間に必要な商品のことを何というか。",
            choices: ["サービス","財","通貨","公共財"],
            a: "サービス",
            comment: "現代の経済ではサービスに関する産業の割合が大きくなっています。"
        },
        {
            q: "お金のやり取りによって、生活のために必要な商品やサービスを手に入れることを何というか。",
            choices: ["消費","生産","流通","交換"],
            a: "消費",
            comment: "おもに家計によって行われる経済活動の1つです。"
        },
        {
            q: "家計における支出のうち、日常生活を営むために必要な商品やサービスを購入するために使われる支出（食料費や住居費など）を何というか。",
            choices: ["消費支出","非消費支出","貯蓄","投資"],
            a: "消費支出",
            comment: "これに対し、税金や社会保険料など、消費を目的としない支出を非消費支出といいます。"
        },
        {
            q: "家計の消費支出において、食料費の占める割合（パーセント）を何というか。",
            choices: ["エンゲル係数","ジニ係数","完全失業率","有効求人倍率"],
            a: "エンゲル係数",
            comment: "一般的に、収入の少ない家庭ほど食費以外に使える金額が低くなることから、この数値が高くなるといわれ、家計の生活水準をはかる目安とされます。"
        },
        {
            q: "家計において将来の支出のために、銀行預金や生命保険のかけ金など、金融機関などに蓄えられるものを何というか。",
            choices: ["貯蓄","消費支出","非消費支出","投資"],
            a: "貯蓄",
            comment: "企業に資金を供給する役割も果たします。"
        },
        {
            q: "すべてを自ら生産するのではなく、それぞれが得意なものを専門的に生産することを何というか。",
            choices: ["分業","交換","協業","流通"],
            a: "分業",
            comment: "分業によって生産されたものを、互いに補うために「交換」が行われます。"
        },
        {
            q: "個人が勤労、事業、財産などによって得た家計の収入のことを何というか。",
            choices: ["所得","消費支出","貯蓄","資本"],
            a: "所得",
            comment: "勤労所得、事業所得、財産所得などに分けられます。"
        },
        {
            q: "所得額から税金や社会保険料を差し引いた額で、家計が自由に使えるお金（消費や貯蓄に回されるお金）を何というか。",
            choices: ["可処分所得","非消費支出","基礎的財政収支","国内総生産"],
            a: "可処分所得",
            comment: "実際の手取り収入のことです。"
        },
        {
            q: "求められている量に対して、財やサービスの量が不足している状態のことを何というか。",
            choices: ["希少性","豊富","需要過多","供給過多"],
            a: "希少性",
            comment: "資源や財の量が限られているため、経済ではこの問題が生じます。"
        },
        {
            q: "代金の後払いで買い物や飲食ができる仕組みのカードで、あらかじめ決められた日に銀行口座から代金が引き落とされるものを何というか。",
            choices: ["クレジットカード","デビットカード","プリペイドカード","キャッシュカード"],
            a: "クレジットカード",
            comment: "カード会社が代金をいったん立て替えて支払う仕組みです。"
        },
        {
            q: "経済活動において、企業よりも消費者に主権があるとする考え方にもとづき、消費者が自らの意思と判断により商品を購入することを何というか。",
            choices: ["消費者主権","契約自由の原則","自己責任","消費者の4つの権利"],
            a: "消費者主権",
            comment: "消費者が経済を動かす力を持っているという考えです。"
        },
        {
            q: "不当・違法な手段や方法で消費者に商品を売り付ける商法を何というか。",
            choices: ["悪質商法","訪問販売","通信販売","割賦販売"],
            a: "悪質商法",
            comment: "絶対にもうかるなどといってお金を出させたり、おどして不要な商品を購入させたりする手口です。"
        },
        {
            q: "街角などでよぼとめ、店舗や事務所に連れて行って商品やサービスを契約させる悪質商法の一種を何というか。",
            choices: ["キャッチセールス","アポイントメントセールス","マルチ商法","ネガティブ・オプション"],
            a: "キャッチセールス",
            comment: "言葉巧みに誘い込まれることが多いです。"
        },
        {
            q: "電話などで「景品が当たった」などといって飲食店や事務所によび出し、商品やサービスを契約させる悪質商法の一種を何というか。",
            choices: ["アポイントメントセールス","キャッチセールス","マルチ商法","霊感商法"],
            a: "アポイントメントセールス",
            comment: "有利な条件を語って消費者を呼び出すのが特徴です。"
        },
        {
            q: "商品を購入した会員を販売員として勧誘し、さらに次の会員を勧誘させるという形で次々に組織を拡大しながら行う販売取引のことを何というか。",
            choices: ["マルチ商法","キャッチセールス","アポイントメントセールス","訪問販売"],
            a: "マルチ商法",
            comment: "法律で厳しく規制されています（連鎖販売取引）。"
        },
        {
            q: "商品の欠陥によって生命や身体、財産などに被害が生じた場合、製造者に過失がなくても損害賠償を義務づけた法律（1995年施行）を何というか。",
            choices: ["製造物責任法（PL法）","消費者保護基本法","消費者基本法","消費者契約法"],
            a: "製造物責任法（PL法）",
            comment: "この法律により、消費者は製造業者の過失を証明しなくても責任を問えるようになりました。"
        },
        {
            q: "不当な勧誘などで結ばれた、消費者にとって一方的に不利になる契約を取り消したり無効にしたりできることを定めた法律（2001年施行）を何というか。",
            choices: ["消費者契約法","製造物責任法","消費者基本法","クーリング・オフ制度"],
            a: "消費者契約法",
            comment: "契約上のトラブルから弱い立場である消費者を守るための法律です。"
        },
        {
            q: "1968年制定の消費者保護基本法を大きく改正し、消費者の権利にもとづき、消費者がより自立できるよう支援することを目的として2004年に制定された法律は何か。",
            choices: ["消費者基本法","消費者契約法","製造物責任法","独占禁止法"],
            a: "消費者基本法",
            comment: "国や地方公共団体、企業の責務だけでなく、消費者の自立も規定されています。"
        },
        {
            q: "「安全を求める権利」「知らされる権利」「選択できる権利」「意見を反映させる権利」の4つからなる、1962年にアメリカのケネディ大統領が示した権利を何というか。",
            choices: ["消費者の4つの権利","消費者主権","基本的人権","知る権利"],
            a: "消費者の4つの権利",
            comment: "消費者保護運動の基本となり、日本でも消費者基本法に取り入れられました。"
        },
        {
            q: "消費者の権利を尊重し、自立を支援するために、ほかの省庁や地方公共団体などと連携して施策を行う国の行政機関はどこか。",
            choices: ["消費者庁","国民生活センター","公正取引委員会","金融庁"],
            a: "消費者庁",
            comment: "消費者行政の司令塔として2009年に設置されました。"
        },
        {
            q: "訪問販売などで購入契約をし、代金を支払ったあとでも、一定期間内であれば無条件で契約を解除することができる制度を何というか。",
            choices: ["クーリング・オフ","PL法適用","リコール","インフォームド・コンセント"],
            a: "クーリング・オフ",
            comment: "契約解除の際は、書面で契約解除を伝える必要があります。（訪問販売では8日以内）"
        },
        {
            q: "生産者の生産した商品が、さまざまな業者の手を通り、消費者に届くまでの流れのことを何というか。",
            choices: ["流通","消費","生産","分配"],
            a: "流通",
            comment: "卸売業や小売業などの商業の活動がこの役割を担っています。"
        },
        {
            q: "流通の費用をおさえるため、小売業者が生産者から直接仕入れるなど、流通経路を短縮したり工夫したりすることを何というか。",
            choices: ["流通の合理化","産業の空洞化","情報化","グローバル化"],
            a: "流通の合理化",
            comment: "消費者に少しでも安く商品をとどけるための取り組みです。"
        },
        {
            q: "流通のなかで、品物を仕入れ、小売業者に販売する業者を何というか。（一般に問屋ともいわれる）",
            choices: ["卸売業（おろしうりぎょう）","小売業","製造業","サービス業"],
            a: "卸売業（おろしうりぎょう）",
            comment: "生産者が大量に出荷する商品の流通量を調節したり、生産者と小売業者を結びつける働きをしています。"
        },
        {
            q: "デパート（百貨店）、スーパーマーケット、コンビニエンスストアなど、消費者に対して商品を直接販売する業者を何というか。",
            choices: ["小売業","卸売業","製造業","一次産業"],
            a: "小売業",
            comment: "消費者が日常的に利用する店舗のことです。"
        },
        {
            q: "小売業者や卸売業者が自ら企画し、販売する独自ブランドの商品を何というか。",
            choices: ["プライベート・ブランド","ナショナル・ブランド","ジェネリック商品","地産地消"],
            a: "プライベート・ブランド",
            comment: "自分たちの店の特性や顧客の要望に合う商品をつくることができ、流通の合理化をはかることができます。"
        },
        {
            q: "小売店における販売の動きを、商品のバーコードを読み取ることでコンピューターを使って管理し、在庫や発注などに役立てるシステムを何というか。",
            choices: ["POSシステム","ジャスト・イン・タイム","かんばん方式","eコマース"],
            a: "POSシステム",
            comment: "「販売時点情報管理システム」とも呼ばれ、コンビニエンスストアなどで多く使われています。"
        },
        {
            q: "消費者問題の解決や防止と、消費者の権利の確立をめざし、消費者が団結して行う活動のことを何というか。",
            choices: ["消費者運動","労働組合運動","住民運動","環境保護運動"],
            a: "消費者運動",
            comment: "欠陥商品や誇大広告などに対して、消費者自身が生活を守るために行われます。"
        },
        {
            q: "消費生活に関する消費者からの相談を受け付ける機関で、地方公共団体が運営しているものは何か。",
            choices: ["消費生活センター","国民生活センター","消費者庁","法テラス"],
            a: "消費生活センター",
            comment: "国民生活センターと連携して苦情や処理の相談、紛争の解決などを行っています。"
        },
        {
            q: "期間を定めずに雇用されている正規労働者のことを何というか。",
            choices: ["正社員","パートタイム労働者","派遣労働者","契約社員"],
            a: "正社員",
            comment: "これ以外の労働者を総称して非正規労働者といいます。"
        },
        {
            q: "時間を定めて働くパートタイム労働者や、登録した派遣会社からほかの会社に派遣される派遣労働者など、正社員以外の労働者の総称を何というか。",
            choices: ["非正規労働者","正規労働者","個人事業主","フリーランス"],
            a: "非正規労働者",
            comment: "現在は全労働者のうち約4割を占めています。"
        },
        {
            q: "非労働力人口のうち、就学・就業をしていない15〜34歳の未婚の男女で、家事も通学もしていない若年者のことを何というか。",
            choices: ["ニート","フリーター","ワーキングプア","失業者"],
            a: "ニート",
            comment: "（Not in Education, Employment or Training）の略です。"
        },
        {
            q: "働く意思や能力があるのに、職がなく失業し、働く機会が得られない人のことを何というか。",
            choices: ["失業者","ニート","フリーター","非労働力人口"],
            a: "失業者",
            comment: "不況（不景気）になると増加し、好況（好景気）になると減少します。"
        },
        {
            q: "雇用における男女平等を目的とし、女性への不当な差別などを禁止した法律（1986年施行）を何というか。",
            choices: ["男女雇用機会均等法","男女共同参画社会基本法","労働基準法","労働組合法"],
            a: "男女雇用機会均等法",
            comment: "その後何度か改正され、男女双方に対する差別が禁止されています。"
        },
        {
            q: "「仕事と生活の調和」と訳され、仕事と生活を両立させるための考え方を何というか。",
            choices: ["ワーク・ライフ・バランス","ワークシェアリング","テレワーク","フレックスタイム制"],
            a: "ワーク・ライフ・バランス",
            comment: "育児や介護を支援したり、在宅勤務（テレワーク）を実施したりして実現がはかられています。"
        },
        {
            q: "職業の無料紹介や雇用保険の失業給付などを行う行政機関である公共職業安定所の通称は何か。",
            choices: ["ハローワーク","労働基準監督署","法テラス","消費生活センター"],
            a: "ハローワーク",
            comment: "職業安定法に基づいて設置されています。"
        },
        {
            q: "働いていても収入が乏しく、生活を維持するのが困難な貧困層のことを何というか。",
            choices: ["ワーキングプア","ニート","フリーター","ホームレス"],
            a: "ワーキングプア",
            comment: "非正規労働者の増加などが背景にあります。"
        },
        {
            q: "雇用を増やしたり維持したりするために、労働者一人あたりの労働時間を短縮し、仕事をより多くの人々で分け合うことを何というか。",
            choices: ["ワークシェアリング","ワーク・ライフ・バランス","フレックスタイム制","裁量労働制"],
            a: "ワークシェアリング",
            comment: "失業率が下がるという効果が期待されています。"
        },
        {
            q: "企業などが資本を元手に、利潤の追求を目的として生産活動を行う経済のしくみを何というか。",
            choices: ["資本主義経済","社会主義経済","計画経済","混合経済"],
            a: "資本主義経済",
            comment: "産業革命によって確立され、現在多くの国で取られている体制です。"
        },
        {
            q: "生産手段を国家など統制組織が所有し、生産や流通を統制組織が指導する計画経済が行われている経済を何というか。",
            choices: ["社会主義経済","資本主義経済","市場経済","自由主義経済"],
            a: "社会主義経済",
            comment: "北朝鮮などでとられています。"
        },
        {
            q: "経済の重点が、第1次・第2次産業から第3次産業に移ることを経済の何というか。",
            choices: ["サービス化","ソフト化","グローバル化","情報化"],
            a: "サービス化",
            comment: "生産額のなかでサービス産業の生産額の割合が増加したり、従事者数が増えたりすることをいいます。"
        },
        {
            q: "産業の中心が重化学工業から、サービスやコンピュータープログラムなど目に見えないものをさす分野に移ることを経済の何というか。",
            choices: ["ソフト化","サービス化","空洞化","IT化"],
            a: "ソフト化",
            comment: "機械など目に見えるハードに対して、目に見えないものをさします。"
        },
        {
            q: "家計、政府とともに経済主体の1つであり、おもに生産を担うのは何か。",
            choices: ["企業","家計","銀行","市場"],
            a: "企業",
            comment: "生産物をつくり、人々に販売して利益を上げることを目的としています。"
        },
        {
            q: "利益を見込んでお金を出すことを何というか。株式や公債の購入などがある。",
            choices: ["投資","貯蓄","消費","融資"],
            a: "投資",
            comment: "利益が得られる可能性がある反面、利益を得られなくなるリスクもあります。"
        },
        {
            q: "企業が生産の拡大に必要な建物や機械に資金を投入することを何というか。",
            choices: ["設備投資","在庫投資","公共投資","海外直接投資"],
            a: "設備投資",
            comment: "新しく工場を建てたり新しい機械を導入したりして、生産力を向上させるために行います。"
        },
        {
            q: "従業員数や資本金などが中規模以下の企業のことを何というか。",
            choices: ["中小企業","大企業","多国籍企業","ベンチャー企業"],
            a: "中小企業",
            comment: "日本の全企業数のうち約99％を占めていますが、大企業との間で賃金などの格差があります。"
        },
        {
            q: "公共の利益のために国や地方公共団体が経営する企業を何というか。",
            choices: ["公企業","私企業","法人企業","株式会社"],
            a: "公企業",
            comment: "地方公営企業（上下水道や公営バスなど）や独立行政法人などがあります。"
        },
        {
            q: "利潤を追求するために民間企業によって経営される企業を何というか。",
            choices: ["私企業","公企業","特殊法人","協同組合"],
            a: "私企業",
            comment: "個人企業や法人企業（株式会社など）が含まれます。"
        },
        {
            q: "私企業の代表的なもので、株式を発行することにより、多くの人から資本を集めて経営される会社を何というか。",
            choices: ["株式会社","合同会社","合名会社","合資会社"],
            a: "株式会社",
            comment: "現在の企業の中心的な形態です。出資者は株主とよばれます。"
        },
        {
            q: "株式会社への出資を表す単位のことで、自由に売買できるものを何というか。",
            choices: ["株式","社債","国債","手形"],
            a: "株式",
            comment: "株式が売買される市場を株式市場といい、証券取引所などが開設しています。"
        },
        {
            q: "株式を購入した出資者のことを何というか。",
            choices: ["株主","債権者","取締役","監査役"],
            a: "株主",
            comment: "株主総会に出席して意見を述べる権利（議決権）を持ち、利益の一部を配当として受け取ります。"
        },
        {
            q: "株主によって組織され、株式会社の意思を決定する最高機関を何というか。",
            choices: ["株主総会","取締役会","監査役会","労働組合"],
            a: "株主総会",
            comment: "経営上の基本方針の決定や取締役の選出、決算の承認などを行います。"
        },
        {
            q: "会社が利益を生み出した場合、その一部を株主が受け取るお金を何というか。",
            choices: ["配当","利子","役員報酬","内部留保"],
            a: "配当",
            comment: "株主の持っている株式の数に応じて配分されます。"
        },
        {
            q: "株式会社において、実際に会社の経営を行うのは、株主総会で選ばれた取締役により構成される何という機関か。",
            choices: ["取締役会","株主総会","監査役会","経営会議"],
            a: "取締役会",
            comment: "会社の業務執行の意思決定などを行います。"
        },
        {
            q: "会社が倒産したとき、株主が負う責任は、負債に対して責任を負うべき額にあらかじめ定めた限度があるしくみである。これを何というか。",
            choices: ["有限責任制","無限責任制","連帯責任","瑕疵担保責任"],
            a: "有限責任制",
            comment: "株主は、自分が出資した額以上の責任は負わなくてよいしくみです。"
        },
        {
            q: "新しい技術や経営方式、機械などを取り入れる技術革新のことをカタカナで何というか。",
            choices: ["イノベーション","コンプライアンス","クラウドファンディング","ベンチャー"],
            a: "イノベーション",
            comment: "これによって生産コストを削減し、企業の利潤を拡大することができます。"
        },
        {
            q: "インターネット上で多数の人から資金を集めるしくみを何というか。",
            choices: ["クラウドファンディング","ベンチャーキャピタル","オンライン・ショッピング","電子マネー"],
            a: "クラウドファンディング",
            comment: "新しいアイデアや事業計画を提示して、応援したいと思った人が出資や寄付を行います。"
        },
        {
            q: "企業などが法令をきちんと守る（法令遵守）ことをカタカナで何というか。",
            choices: ["コンプライアンス","コーポレート・ガバナンス","ディスクロージャー","フィランソロピー"],
            a: "コンプライアンス",
            comment: "違法残業や商品のデータ偽装などを防ぎ、社会的な信頼を保つために重要です。"
        },
        {
            q: "企業が社会に対してさまざまな貢献をし、社会的責任を果たすことをアルファベット3文字で何というか。",
            choices: ["CSR","NPO","NGO","ODA"],
            a: "CSR",
            comment: "利潤の追求だけでなく、環境保護や芸術文化の支援（メセナ）なども求められています。"
        },
        {
            q: "さまざまな市場が社会のすみずみにまではりめぐらされている経済のしくみで、市場を通じて需要量や供給量、価格の調節が行われるものを何というか。",
            choices: ["市場経済","計画経済","統制経済","伝統的経済"],
            a: "市場経済",
            comment: "資本主義経済の特色の1つであり、自由な競争が行われます。"
        },
        {
            q: "市場において、消費者が買おうとする量のことを何というか。",
            choices: ["需要量","供給量","取引量","在庫量"],
            a: "需要量",
            comment: "価格が上昇すれば需要量は減少し、価格が下落すれば需要量は増大します（需要曲線は右下がり）。"
        },
        {
            q: "市場において、生産者が売ろうとする量のことを何というか。",
            choices: ["供給量","需要量","生産量","出荷量"],
            a: "供給量",
            comment: "価格が上昇すれば供給量は増大し、価格が下落すれば供給量は減少します（供給曲線は右上がり）。"
        },
        {
            q: "市場において、商品の需要量と供給量によって変化する価格のことを何というか。",
            choices: ["市場価格","独占価格","均衡価格","公共料金"],
            a: "市場価格",
            comment: "需要量が供給量を上回っている場合は価格が上昇し、逆に供給量が需要量を上回っている場合は価格は下落します。"
        },
        {
            q: "市場において、需要量と供給量が一致する点で決まる価格のことを何というか。",
            choices: ["均衡価格","市場価格","独占価格","管理価格"],
            a: "均衡価格",
            comment: "需要曲線と供給曲線の交点で示されます。"
        },
        {
            q: "1つの企業が市場を支配している状態。もし複数の少数の企業が市場を支配している場合は寡占という。",
            choices: ["独占","寡占","カルテル","トラスト"],
            a: "独占",
            comment: "こうした状態では自由競争が行われず、企業は高い利潤を維持するために価格を引き下げる価格競争を避けようとします。"
        },
        {
            q: "企業が利益を増やすために、同種の企業どうしで生産量や販売価格などについて協定を結ぶことを何というか。",
            choices: ["カルテル（企業連合）","トラスト（企業合同）","コンツェルン（企業連携）","フランチャイズ"],
            a: "カルテル（企業連合）",
            comment: "消費者に不利になるため、原則として独占禁止法で禁止されています。"
        },
        {
            q: "同じ産業や業種で、いくつかの会社が合併することを何というか。",
            choices: ["トラスト（企業合同）","カルテル（企業連合）","コンツェルン（企業連携）","M&A"],
            a: "トラスト（企業合同）",
            comment: "合併によって市場の競争が働かなくなり独占・寡占の状態になるため、日本では独占禁止法により禁止されています。"
        },
        {
            q: "ひとつの企業が、株式を保有して色々な分野の企業を支配して形成する企業集団を何というか。",
            choices: ["コンツェルン（企業連携）","トラスト（企業合同）","カルテル（企業連合）","フランチャイズ"],
            a: "コンツェルン（企業連携）",
            comment: "株式を保有する親会社が、子会社や孫会社を支配します。"
        },
        {
            q: "本部と加盟店が契約を結ぶことによって展開される事業形態で、コンビニエンスストアなどに多いものを何というか。",
            choices: ["フランチャイズ","コンツェルン","M&A","オンライン・ショッピング"],
            a: "フランチャイズ",
            comment: "加盟店は本部の商標を使用させてもらったり、商品を提供してもらうかわりに、本部に対し対価を支払います。"
        },
        {
            q: "消費者の利益を守るため、企業の自由な競争をうながすことを目的とする法律（1947年制定）を何というか。",
            choices: ["独占禁止法","消費者基本法","製造物責任法","労働基準法"],
            a: "独占禁止法",
            comment: "企業の独占を制限したり、不公正な取引を制限・禁止したりしています。公正取引委員会が実際の運用にあたります。"
        },
        {
            q: "国民生活に大きな影響をおよぼすことから、国や地方公共団体が決定したり、認可したりする価格（水道・鉄道運賃など）を何というか。",
            choices: ["公共料金","市場価格","均衡価格","独占価格"],
            a: "公共料金",
            comment: "価格は自由な競争ではなく、政府が関与することになっています。"
        },
        {
            q: "資金を必要とする者と資金に余裕のある者との間で資金の貸し借りをし、融通しあうことを何というか。",
            choices: ["金融","流通","消費","投資"],
            a: "金融",
            comment: "株式などを発行して直接資金を集める直接金融と、金融機関からお金を借りる間接金融があります。"
        },
        {
            q: "資金の借り手と貸し手との間に立って仲立ちをする機関で、銀行や保険会社、証券会社などを何というか。",
            choices: ["金融機関","行政機関","消費者庁","公正取引委員会"],
            a: "金融機関",
            comment: "家計や企業から資金を預かり、それを資金を必要とする家計や企業に融通しています。"
        },
        {
            q: "資金を必要とする人に資金を貸すことを何というか。",
            choices: ["融資","出資","貯蓄","投資"],
            a: "融資",
            comment: "金融機関は家計や企業に融資を行い、利息を得て利潤を得ています。"
        },
        {
            q: "資金の貸し借りが行われた場合、その対価として借り手が貸し手に支払うお金を何というか。",
            choices: ["利子","配当","元金","手数料"],
            a: "利子",
            comment: "借り入れ額（元金）に対する利子の割合を金利（利子率、利率）といいます。"
        },
        {
            q: "国の金融機関の中心となる銀行で、銀行券を発行したり、一般の銀行を相手に資金を貸し出したりするものを何というか。",
            choices: ["中央銀行","メガバンク","地方銀行","信用金庫"],
            a: "中央銀行",
            comment: "日本では日本銀行がこの役目にあたります。"
        },
        {
            q: "日本における中央銀行で、「発券銀行」「政府の銀行」「銀行の銀行」という3つの役割を持つ銀行はどこか。",
            choices: ["日本銀行","日本政策金融公庫","ゆうちょ銀行","世界銀行"],
            a: "日本銀行",
            comment: "紙幣（日本銀行券）を発行し、市場に出回る通貨の量を調節しています。"
        },
        {
            q: "日本銀行が一般の銀行に行った政策で、銀行が日本銀行に預ける預金の金利をマイナスにすることを何というか。",
            choices: ["マイナス金利","ゼロ金利","金融緩和政策","売りオペレーション"],
            a: "マイナス金利",
            comment: "各金融機関が企業などに融資や投資をしやすくすることで、企業の生産や雇用が拡大し、景気回復につながるという予測のもとで実施されました。"
        },
        {
            q: "金融機関が破綻した場合、預金者への払い戻しを一定額（元本1000万円とその利息）に制限する制度を何というか。",
            choices: ["ペイオフ","預金保険制度","セーフティネット","クーリング・オフ"],
            a: "ペイオフ",
            comment: "それ以上の預金の払い戻しは保証されません。"
        },
        {
            q: "現金を電子情報化したもので、ICカードやスマートフォンに価値を変換しておき、紙幣や硬貨を使わずに支払いができるものを何というか。",
            choices: ["電子マネー","仮想通貨","暗号資産","クレジットカード"],
            a: "電子マネー",
            comment: "キャッシュレス決済の普及に大きく貢献しています。"
        },
        {
            q: "クレジットカードやICカード、スマートフォンのアプリなどを使って、現金を使わないで支払いをすることを何というか。",
            choices: ["キャッシュレス決済","オンライン・ショッピング","電子商取引","デビット決済"],
            a: "キャッシュレス決済",
            comment: "店側には盗難の心配がなく、支払う側には現金を持ち歩く必要がないなどのメリットがあります。"
        },
        {
            q: "日本銀行が、通貨の量や流れを調節して、物価の安定や経済の安定のために行う政策を何というか。",
            choices: ["金融政策","財政政策","為替政策","産業政策"],
            a: "金融政策",
            comment: "現在は、一般の金融機関との間で公債の売買などを行う公開市場操作が中心的な手段となっています。"
        },
        {
            q: "政府や中央銀行が、金の保有量に関係なく通貨の発行量を決定できる制度を何というか。",
            choices: ["管理通貨制度","金本位制","変動相場制","固定相場制"],
            a: "管理通貨制度",
            comment: "日本をはじめ、ほとんどの国がこの制度を採用しています。（これに対し、金の保有量によって通貨発行量が決まる制度を金本位制といいます）"
        },
        {
            q: "不景気のときは商品の売れ行きが悪く、企業は生産を減らし（縮小再生産）、どのような人が増加するか。",
            choices: ["失業者","投資家","公務員","起業家"],
            a: "失業者",
            comment: "好景気のときは逆に企業は生産を増やし（拡大再生産）、雇用も増加します。"
        },
        {
            q: "物価が持続的に上昇し、貨幣価値が下がり続ける現象のことを何というか。",
            choices: ["インフレーション（インフレ）","デフレーション（デフレ）","スタグフレーション","デフレスパイラル"],
            a: "インフレーション（インフレ）",
            comment: "好景気におこりやすく、商品がよく売れて品不足の状態となり、物価が上昇します。"
        },
        {
            q: "物価が持続的に下落し、貨幣価値が上がり続ける現象のことを何というか。",
            choices: ["デフレーション（デフレ）","インフレーション（インフレ）","スタグフレーション","デノミネーション"],
            a: "デフレーション（デフレ）",
            comment: "不景気におこりやすく、商品が売れない状態になり、企業の業績が悪化します。"
        },
        {
            q: "景気が停滞している中で、物価が上昇し続ける現象のことを何というか。",
            choices: ["スタグフレーション","デフレスパイラル","インフレーション","デフレーション"],
            a: "スタグフレーション",
            comment: "景気の停滞（スタグネーション）と物価上昇（インフレーション）のかばん語です。"
        },
        {
            q: "景気の安定を目的として、国や地方公共団体が行う経済政策を何というか。",
            choices: ["財政政策","金融政策","成長戦略","通商政策"],
            a: "財政政策",
            comment: "不景気のときは公共投資を増やしたり減税を行ったりし、好景気のときは増税を行ったりして景気の行き過ぎを抑えます。"
        },
        {
            q: "国や地方公共団体が公共の利益のために行う事業で、道路や港湾、ダム、上下水道の整備、学校や病院の建設などを行うものを何というか。",
            choices: ["公共事業","民間事業","第三セクター事業","PFI事業"],
            a: "公共事業",
            comment: "そのための支出を公共投資といいます。"
        },
        {
            q: "行政を担当する機関で、国や地方公共団体のことを指し、家計・企業とともに経済主体の1つであるものを何というか。",
            choices: ["政府","議会","裁判所","中央銀行"],
            a: "政府",
            comment: "社会資本の供給や公共サービスの提供、福祉の充実といった役割を担っています。"
        },
        {
            q: "おもに国や地方公共団体によって提供される、社会全体にとって基本的一必要となる施設（道路、港湾、学校など）を何というか。",
            choices: ["社会資本（インフラストラクチャー）","私的資本","人的資本","金融資本"],
            a: "社会資本（インフラストラクチャー）",
            comment: "インフラともよばれます。"
        },
        {
            q: "国や地方公共団体が、家計や企業から徴収するお金（租税）を何というか。",
            choices: ["税金（租税）","社会保険料","罰金","寄付金"],
            a: "税金（租税）",
            comment: "国税と地方税に分かれ、さらに直接税と間接税に分類されます。"
        },
        {
            q: "税金を納める義務のある納税者と、実際に負担する担税者が一致する税金（所得税や法人税、住民税など）を何というか。",
            choices: ["直接税","間接税","国税","地方税"],
            a: "直接税",
            comment: "所得が多いほど税率が高くなる累進課税制度がとられているものが多いです。"
        },
        {
            q: "税金を納める義務のある納税者と、実際に負担する担税者が一致しない税金（消費税や関税など）を何というか。",
            choices: ["間接税","直接税","国税","地方税"],
            a: "間接税",
            comment: "所得にかかわらず税率は一定であるため、所得の少ない人ほど所得に占める税負担の割合が高くなる傾向（逆進性）があります。"
        },
        {
            q: "国に納める税金（所得税や法人税、消費税など）のことをまとめて何というか。",
            choices: ["国税","地方税","直接税","間接税"],
            a: "国税",
            comment: "国の活動の主な財源となります。"
        },
        {
            q: "地方公共団体に納める税金（都道府県民税や市町村民税など）のことをまとめて何というか。",
            choices: ["地方税","国税","直接税","間接税"],
            a: "地方税",
            comment: "地方公共団体の自主財源となります。"
        },
        {
            q: "1月1日から12月31日までの1年間の売上、経費、所得など、または消費税額を計算し、税務署に申告して納税額を確定する手続きを何というか。",
            choices: ["確定申告","年末調整","決算","源泉徴収"],
            a: "確定申告",
            comment: "個人事業主やフリーランスにとって重要な手続きです。"
        },
        {
            q: "国や地方公共団体が税金（租税）などをもとに行う経済活動を何というか。",
            choices: ["財政","金融","市場経済","公共事業"],
            a: "財政",
            comment: "社会資本の充実や公共サービスの提供、社会保障の充実などにより、国民生活の向上をはかることを目的としています。"
        },
        {
            q: "財政における一会計年度（日本では4月〜翌年3月）の歳入・歳出の計画を何というか。",
            choices: ["予算","決算","財政投融資","公債"],
            a: "予算",
            comment: "国の場合、国家予算は内閣が作成し、国会の議決によって成立します。"
        },
        {
            q: "国や地方公共団体の、一会計年度における財政上の収入のことを何というか。",
            choices: ["歳入","歳出","所得","公債"],
            a: "歳入",
            comment: "税金（租税）や、印紙収入、公債金収入などがあります。"
        },
        {
            q: "国や地方公共団体の、一会計年度における財政上の支出のことを何というか。",
            choices: ["歳出","歳入","消費支出","投資"],
            a: "歳出",
            comment: "国のおもな歳出は、社会保障関係費や公共事業関係費といった一般歳出がもっとも多くを占めます。"
        },
        {
            q: "経済全体の動向のことであり、良い状態や悪い状態があるものを何というか。",
            choices: ["景気","物価","金利","為替"],
            a: "景気",
            comment: "好景気（好況）と不景気（不況）のくり返しを景気変動（景気循環）といいます。"
        },
        {
            q: "資本主義経済において、好景気（好況）と不景気（不況）が交互にくり返されることを何というか。",
            choices: ["景気変動（景気循環）","インフレーション","デフレーション","経済成長"],
            a: "景気変動（景気循環）",
            comment: "景気上昇、好景気、景気後退、不景気、景気回復の波を描きます。"
        },
        {
            q: "商品の売れ行きがよくなるので、企業は生産を増やし（拡大再生産）、売り上げも増加するため、賃金も上昇する経済状態を何というか。",
            choices: ["好景気（好況）","不景気（不況）","インフレーション","スタグフレーション"],
            a: "好景気（好況）",
            comment: "一方で物価が上昇しやすくなります。"
        },
        {
            q: "公害が深刻化したため、公害を防ぎ、国民の健康と生活環境を守ることを目的に1967年に制定された法律を何というか。",
            choices: ["公害対策基本法","環境基本法","製造物責任法","消費者基本法"],
            a: "公害対策基本法",
            comment: "公害を7種類と定め、企業や国、地方公共団体の公害防止の責任を明記していました。1993年の環境基本法の制定により廃止されました。"
        },
        {
            q: "環境を保全するため、国の基本的な方針や原則を定めた法律。それまでの公害対策基本法にかわって1993年に制定されたものは何か。",
            choices: ["環境基本法","公害対策基本法","循環型社会形成推進基本法","自然環境保全法"],
            a: "環境基本法",
            comment: "地球温暖化やオゾン層の破壊といった地球環境問題に対する方針も示しています。"
        },
        {
            q: "様々な環境問題に取り組むため、公害防止や自然環境の保護などのために設置された国の行政機関はどこか。",
            choices: ["環境省","厚生労働省","経済産業省","国土交通省"],
            a: "環境省",
            comment: "1971年に設置された環境庁が、2001年の省庁再編にともない「省」へ格上げされて誕生しました。"
        },
        {
            q: "資源を有効に活用していくための考え方で、リデュース、リユース、リサイクルの3つの行動の頭文字をとった言葉は何か。",
            choices: ["3R（3つのR）","LCA","SDGs","ISO"],
            a: "3R（3つのR）",
            comment: "ごみをそもそも出さない、くり返し使用する、資源にもどして再び利用する、という重要な考え方です。"
        },
        {
            q: "一度使ったものを資源として考え、リサイクルを行うことによって天然資源の消費をおさえ、環境への影響を最小限にする社会を何というか。",
            choices: ["循環型社会","情報化社会","大衆社会","グローバル社会"],
            a: "循環型社会",
            comment: "これまでの「大量生産・大量消費・大量廃棄型」の社会にかわるものとして示されました。"
        },
        {
            q: "不景気（不況）のときにとられる財政政策の1つで、家計や企業から徴収する税金（租税）を減らすことを何というか。",
            choices: ["減税","増税","公共投資","金融緩和"],
            a: "減税",
            comment: "税金が減ると自由に使えるお金が増えるため、家計では消費を、企業では投資を増やすようになり、景気が刺激されます。"
        },
        {
            q: "国や地方公共団体が、税金（租税）収入の不足を補うために発行する債券（借金）を何というか。",
            choices: ["公債","株式","社債","投資信託"],
            a: "公債",
            comment: "国が発行するものを国債、地方公共団体が発行するものを地方債といいます。"
        },
        {
            q: "公債のうち、国が発行するものを何というか。",
            choices: ["国債","地方債","社債","外国債"],
            a: "国債",
            comment: "大量に発行すると、その返済（利払い含む）のための費用が大きくなるという問題があり、国債残高は年々増加しています。"
        },
        {
            q: "公債のうち、地方公共団体が発行するものを何というか。",
            choices: ["地方債","国債","社債","政府保証債"],
            a: "地方債",
            comment: "国債と同様、将来世代への負担となることが懸念されています。"
        },
        {
            q: "政府が、特別な債券を発行して市場から資金を調達し、その資金を政府関係機関や地方公共団体などに投資したり、融資（貸し付け）したりする活動を何というか。",
            choices: ["財政投融資","公開市場操作","量的緩和","補助金交付"],
            a: "財政投融資",
            comment: "「第二の予算」とも呼ばれ、大規模な公共事業などに資金が供給されます。"
        },
        {
            q: "商品の売り買いで流通し、その価値を示す「お金」を何というか。",
            choices: ["貨幣","証券","手形","小切手"],
            a: "貨幣",
            comment: "かつては金や銀などで造られ貨幣自体に価値がありましたが、現在の貨幣はその材料そのものに価値があるわけではありません。"
        },
        {
            q: "社会の中で実際に使われているお金のことで、日本銀行券や硬貨（現金通貨）と、銀行の預金（預金通貨）をあわせて何というか。",
            choices: ["通貨","外貨","仮想通貨","証券"],
            a: "通貨",
            comment: "預金も口座振替や小切手などにより支払いに用いられるため通貨に含まれます。"
        },
        {
            q: "現金を直接輸送しない資金の決済方法を何というか。銀行振込や口座からの引き落とし、手形や小切手などがある。",
            choices: ["為替","融資","投資","貯蓄"],
            a: "為替",
            comment: "遠隔地間の取引などで、現金を送る危険や手間を省くことができます。"
        },
        {
            q: "円とドルなど、違う通貨を交換する場合の交換比率のことを何というか。",
            choices: ["為替相場（為替レート）","公定歩合","政策金利","エンゲル係数"],
            a: "為替相場（為替レート）",
            comment: "基本的には市場での外国為替の需要と供給により決定されます（変動相場制）。"
        },
        {
            q: "高齢者や障がい者、母子家庭など社会的に弱い立場にある人たちの生活を保障するため、施設やサービスを提供するしくみを何というか。",
            choices: ["社会福祉","公衆衛生","社会保険","公的扶助"],
            a: "社会福祉",
            comment: "社会保障制度の1つです。老人福祉、児童福祉などがあります。"
        },
        {
            q: "国民の健康の保持・増進のため、病気の予防や生活環境の整備などを行うしくみを何というか。",
            choices: ["公衆衛生","社会福祉","社会保険","公的扶助"],
            a: "公衆衛生",
            comment: "予防接種などの感染症対策や、上下水道の整備、公害対策などを行っています。"
        },
        {
            q: "40歳以上の全国民が加入し、介護が必要となったときに介護サービスが受けられるしくみ（2000年から実施）を何というか。",
            choices: ["介護保険制度","医療保険制度","年金保険制度","雇用保険制度"],
            a: "介護保険制度",
            comment: "社会保険の1つであり、介護サービスを受けるためには介護が必要な程度の認定を受ける必要があります。"
        },
        {
            q: "身体が不自由な人の手助けをするために、特別に訓練された犬のことを何というか。",
            choices: ["介助犬","盲導犬","聴導犬","警察犬"],
            a: "介助犬",
            comment: "盲導犬や聴導犬と同じように、公共施設や公共交通機関などに同伴することができます。"
        },
        {
            q: "水俣病、イタイイタイ病、新潟水俣病、四日市ぜんそくのことをまとめて何というか。",
            choices: ["四大公害病","特定疾患","風土病","公害等調整委員会対象事件"],
            a: "四大公害病",
            comment: "熊本、富山、新潟、三重でそれぞれ水質汚濁や大気汚染が原因で発生しました。"
        },
        {
            q: "おもにプラスチックなどの塩素をふくむごみを燃焼すると発生し、大気や土壌を汚染する、強い毒性をもつ有機塩素系化合物を何というか。",
            choices: ["ダイオキシン","フロンガス","二酸化炭素","光化学オキシダント"],
            a: "ダイオキシン",
            comment: "強い発がん性などがあるとされ、ダイオキシン類対策特別措置法が制定されました。"
        },
        {
            q: "地域でおこっている問題について、そこに住んでいる人々が、国や地方公共団体、企業に対して解決を訴えたり、求めたりする運動を何というか。",
            choices: ["住民運動","消費者運動","労働組合運動","オンブズマン制度"],
            a: "住民運動",
            comment: "おもに公害問題や大規模な開発問題などで発生することが多いです。"
        },
        {
            q: "環境を汚染した者が、汚染の防止や環境の復元、被害補償に必要な費用を負担するという原則を何というか。",
            choices: ["PPP（汚染者負担の原則）","NIMBY","アセスメント","マニフェスト"],
            a: "PPP（汚染者負担の原則）",
            comment: "この原則から、環境汚染が未然に防げると考えられています。"
        },
        {
            q: "購入する商品・サービスにかけられる税金で、国税であり間接税であるものは何か。",
            choices: ["消費税","所得税","法人税","住民税"],
            a: "消費税",
            comment: "所得の少ない人ほど所得に占める税負担の割合が高くなるため、「逆進性」の問題があると言われます。"
        },
        {
            q: "個人の所得に対してかけられる税金で、国税であり直接税であるものは何か。",
            choices: ["所得税","消費税","法人税","固定資産税"],
            a: "所得税",
            comment: "それぞれの所得に応じて税を負担するように、累進課税の方法がとり入れられています。"
        },
        {
            q: "所得が多くなるほど税率が高くなるように設定されている課税制度を何というか。",
            choices: ["累進課税","逆進課税","一律課税","分離課税"],
            a: "累進課税",
            comment: "所得の多い人には大きな負担を求め、国民の所得の再分配を行うはたらきをしています。"
        },
        {
            q: "所得の分配のかたよりを数値で表したもので、0から1までの値で表され、1に近づくほど不平等が大きいことを示すものを何というか。",
            choices: ["ジニ係数","エンゲル係数","有効求人倍率","消費者物価指数"],
            a: "ジニ係数",
            comment: "収入格差がない完全に平等な集団では0になります。"
        },
        {
            q: "外国通貨に対し、円の価値が上がることを何というか。（例：1ドル＝105円から1ドル＝100円になること）",
            choices: ["円高","円安","インフレーション","デフレーション"],
            a: "円高",
            comment: "日本では輸入品の価格が安くなるため輸入量が増加する一方、外国では日本の輸出品の価格が高くなるため日本の輸出量は減少します。"
        },
        {
            q: "外国通貨に対し、円の価値が下がることを何というか。（例：1ドル＝105円から1ドル＝110円になること）",
            choices: ["円安","円高","インフレーション","デフレーション"],
            a: "円安",
            comment: "日本では外国からの輸入品の価格が高くなるため輸入量が減少しますが、外国では日本の輸出品の価格が安くなるため日本の輸出量は増加します。"
        },
        {
            q: "すべての国民が健康で文化的な生活を送ることができるように、国が国民の最低限度の生活を保障しようとするしくみを何というか。",
            choices: ["社会保障","基本的人権","公的扶助","社会福祉"],
            a: "社会保障",
            comment: "日本国憲法第25条の「生存権」にもとづいて整備されており、公的扶助、社会保険、社会福祉、公衆衛生の4つの分野からなります。"
        },
        {
            q: "社会保障制度の1つで、経済的に生活が困難な人に対して、生活費などを支給するしくみを何というか。生活保護法にもとづいて行われる。",
            choices: ["公的扶助","社会保険","社会福祉","公衆衛生"],
            a: "公的扶助",
            comment: "生活扶助や住宅扶助、教育扶助、医療扶助などが行われます。"
        },
        {
            q: "社会保障制度の1つで、あらかじめ保険料を払っておき、病気をしたり、高齢になったりして必要になったときに、現金の給付やサービスの提供を受けるしくみを何というか。",
            choices: ["社会保険","公的扶助","社会福祉","公衆衛生"],
            a: "社会保険",
            comment: "医療保険、年金保険、雇用保険、介護保険、労災保険の5つがあります。"
        },
        {
            q: "社会保険のうち、病気やけがをしたときのための保険を何というか。",
            choices: ["医療保険","年金保険","介護保険","労災保険"],
            a: "医療保険",
            comment: "国民の多くが加入しており、病院などでの窓口負担割合が軽減されます。"
        },
        {
            q: "社会保険のうち、高齢になったときなどのための保険を何というか。",
            choices: ["年金保険","医療保険","雇用保険","介護保険"],
            a: "年金保険",
            comment: "基礎年金（国民年金）や厚生年金などがあります。"
        },
        {
            q: "社会保険のうち、失業したときのための保険を何というか。",
            choices: ["雇用保険","労災保険","年金保険","医療保険"],
            a: "雇用保険",
            comment: "失業給付などを行い、労働者の生活の安定や再就職を支援します。"
        },
        {
            q: "社会保険のうち、職場でけがなどをしたときのための保険を何というか。",
            choices: ["労災保険","雇用保険","医療保険","介護保険"],
            a: "労災保険",
            comment: "業務中や通勤中の災害に対して、労働者やその遺族を保護するための制度です。"
        },
        {
            q: "資源を循環させて、環境への影響を最小限にする循環型社会をつくることを目的とする法律（2000年制定）を何というか。",
            choices: ["循環型社会形成推進基本法","環境基本法","資源有効利用促進法","容器包装リサイクル法"],
            a: "循環型社会形成推進基本法",
            comment: "容器包装リサイクル法、家電リサイクル法など、各種のリサイクル法の基本的な枠組みとなっています。"
        },
        {
            q: "日本の景勝地や貴重な自然環境が残されている場所で、国によって指定された公園を何というか。",
            choices: ["国立公園","国定公園","都市公園","世界遺産"],
            a: "国立公園",
            comment: "環境省が保護・管理を行っており、尾瀬や伊勢志摩などがあります。"
        },
        {
            q: "リサイクルされた再生紙や環境にやさしいつめかえ容器など、環境への影響が少なく環境保全に役立つと認められた商品につけられるマークを何というか。",
            choices: ["エコマーク","グリーンマーク","リサイクルマーク","SGマーク"],
            a: "エコマーク",
            comment: "消費者が環境によりよい商品を選ぶときの基準となるよう導入されました。"
        },
        {
            q: "ある産業で排出された廃棄物を、別の産業が原材料などとして有効活用することにより、社会全体の廃棄物をゼロにするという考え方を何というか。",
            choices: ["ゼロエミッション","3R","循環型社会","持続可能な開発"],
            a: "ゼロエミッション",
            comment: "産業間の連携によって資源を完全に循環させることを目指します。"
        },
        {
            q: "環境に大きなマイナスの影響をあたえると考えられるものに課される税で、おもに電気・ガスやガソリンなどのエネルギーに課税することにより、二酸化炭素の排出量に応じて税金を負担させるしくみを何というか。",
            choices: ["環境税","環境目的税","炭素税","石油石炭税"],
            a: "環境税",
            comment: "地球温暖化防止を目的としており、1990年にフィンランドで初めて導入されました。"
        },
        {
            q: "金融機関が企業などに融資（資金を貸すこと）した貸付金のうち、返してもらうことが困難となりそうな貸付金のことを何というか。",
            choices: ["不良債権","国債","社債","地方債"],
            a: "不良債権",
            comment: "バブル経済後に急増し、金融機関の資金不足や経営悪化を招き、問題視されました。"
        },
        {
            q: "銀行、証券会社、保険会社の業務をはじめ、金利や金融商品などに対する規制を緩和することを何というか。",
            choices: ["金融の自由化","金融ビッグバン","規制緩和","護送船団方式の崩壊"],
            a: "金融の自由化",
            comment: "外国資本の金融機関への参入や、金利や各種手数料などの競争が行われることにより、消費者の選択の輪を広げることを目的としています。"
        },
        {
            q: "物価下落と経済活動の縮小が相互に作用して、景気が悪化する悪循環のことを何というか。",
            choices: ["デフレスパイラル","スタグフレーション","インフレーション","バブル経済"],
            a: "デフレスパイラル",
            comment: "物価の下落が企業の収益を悪化させ、それにより所得が減少して消費がふるわなくなり、結果さらに物価が下落するという形がくり返されます。"
        },
        {
            q: "サービスやコンピューターのプログラムなど、人間の目に見えない情報や知識、アイデアのことを何というか。工場や機械など、人間の目に見える物（ハード）に対して使われる。",
            choices: ["ソフト","ハード","インフラ","サービス"],
            a: "ソフト",
            comment: "経済のソフト化・サービス化にかかわる重要な概念です。"
        },
        {
            q: "ネットワークと結びつけたパソコンや携帯電話などを利用して、情報通信にかかわる産業を何というか。",
            choices: ["情報技術産業（IT産業）","サービス産業","通信産業","電子産業"],
            a: "情報技術産業（IT産業）",
            comment: "情報を提供する産業、情報の送受信を提供する産業、関連ソフトを製造する産業などがあります。"
        },
        {
            q: "高度な技術力と専門知識をもとに、新しい市場を開拓したり、起業して会社を始めたりして急成長する企業のこと。独創的・革新的な商品・サービスを提供し、チャレンジ精神と行動力により独自の市場を開拓する企業を何というか。",
            choices: ["ベンチャー企業","多国籍企業","大企業","中小企業"],
            a: "ベンチャー企業",
            comment: "日本では、情報産業やエレクトロニクス、コンサルティングなどの分野を中心として1970年代に誕生し、発達してきました。"
        },
        {
            q: "とることができる年数が限られているエネルギーのことで、石油、石炭、天然ガスといった化石燃料をさして何というか。",
            choices: ["有限エネルギー","無限エネルギー","再生可能エネルギー","代替エネルギー"],
            a: "有限エネルギー",
            comment: "これに対し、なくなる可能性のないエネルギーを無限エネルギーといいます。"
        },
        {
            q: "なくなる可能性のない自然エネルギーのことで、太陽光や風力、地熱、水力、波力、バイオマスなどをまとめて何というか。",
            choices: ["再生可能エネルギー","有限エネルギー","化石燃料","コージェネレーション"],
            a: "再生可能エネルギー",
            comment: "環境への負荷が少ないという特徴もあります。"
        },
        {
            q: "化石燃料にかわる新しいエネルギーの総称を何というか。",
            choices: ["代替エネルギー","自然エネルギー","再生可能エネルギー","有限エネルギー"],
            a: "代替エネルギー",
            comment: "化石燃料が環境問題の原因となることや、枯渇する懸念から注目されており、原子力や再生可能エネルギー（太陽光、風力など）が代表的です。"
        },
        {
            q: "普段の生活で使用するあらゆるものにコンピューターが組み込まれ、だれもがそれらを通して情報のやり取りをすることができる社会を、ラテン語で「どこにでもある」という意味の言葉を使って何というか。",
            choices: ["ユビキタス社会","情報通信社会","ネットワーク社会","高度情報社会"],
            a: "ユビキタス社会",
            comment: "現在のIoT（モノのインターネット）などが普及した社会を指す言葉です。"
        },
        {
            q: "必要な情報を選び、活用する能力のことを何というか。",
            choices: ["情報リテラシー","情報モラル","メディアリテラシー","ITスキル"],
            a: "情報リテラシー",
            comment: "情報を得るときや発信する場合に、正しく判断し行動する能力が必要です。"
        },
        {
            q: "情報を正しく利用するための態度や考え方のことを何というか。",
            choices: ["情報モラル","情報リテラシー","コンプライアンス","ネチケット"],
            a: "情報モラル",
            comment: "他人の権利を尊重することや、不確かな情報にまどわされないことなどが大切です。"
        },
        {
            q: "記憶・学習といった人間が知能を使う活動を行い、言語を理解したり、論理的に考えたりすることが期待されたコンピュータープログラムのことを何というか。",
            choices: ["人工知能（AI）","バーチャルリアリティ（VR）","IoT","ロボット工学"],
            a: "人工知能（AI）",
            comment: "人が行うと時間も手間もかかるデータ分析などを効率的に行うことができます。"
        },
        {
            q: "国際社会において、経済や文化などが国境をこえて一体化していくこと（国際化）をカタカナで何というか。",
            choices: ["グローバル化","ボーダレス化","ダイバーシティ","ユニバーサル化"],
            a: "グローバル化",
            comment: "人、もの、お金、情報などが国境をこえて移動し、結びつきが強くなっています。"
        },
        {
            q: "特定の国や地域、企業などに限らず、世界中どこでも通用する共通したルールや基準のことを何というか。",
            choices: ["グローバル・スタンダード","国際基準","ユニバーサルデザイン","ISO規格"],
            a: "グローバル・スタンダード",
            comment: "交通信号機の色や、長さ（m）や重さ（g）などの計量単位もその一つです。"
        },
        {
            q: "国やある地域での需要や消費に対して、どの程度自分たちで生産、供給できているかの割合を何というか。",
            choices: ["自給率","生産性","供給率","依存度"],
            a: "自給率",
            comment: "食料の自給率をあらわす食料自給率が代表的ですが、日本の食料自給率は他の先進国と比べて低くなっています。"
        },
        {
            q: "マスメディアやインターネットなどが身近にあり、それらがもたらす情報が生活に大きな役割を果たしている社会を何というか。",
            choices: ["情報社会（IT社会）","工業社会","知識社会","ポスト工業社会"],
            a: "情報社会（IT社会）",
            comment: "大量の情報が生産・伝達・利用されており、情報化社会ともいいます。"
        },
        {
            q: "世界中のコンピューターを結ぶ通信網のことを何というか。",
            choices: ["インターネット","イントラネット","LAN","WAN"],
            a: "インターネット",
            comment: "これを利用して情報の受発信や商品の売買などを行うことができ、2000年ごろから急速に普及しました。"
        },
        {
            q: "スマートフォンや家電など、様々なモノとインターネットをつなぐしくみをアルファベット3文字で何というか。",
            choices: ["IoT","ICT","AI","VR"],
            a: "IoT",
            comment: "「Internet of Things」の頭文字をとったもので、「物のインターネット」と訳されます。"
        },
        {
            q: "インターネットを通じて、口座の残高照会や振込・振替の銀行のサービスが利用できるシステムを何というか。",
            choices: ["インターネットバンキング","オンラインバンキング","モバイルバンキング","電子マネー"],
            a: "インターネットバンキング",
            comment: "インターネットを利用できる環境があれば、いつでもどこでも利用できる利点があります。"
        },
        {
            q: "利用者同士が交流できる、インターネット上の会員制サービスをアルファベット3文字で何というか。",
            choices: ["SNS","BBS","ブログ","クラウド"],
            a: "SNS",
            comment: "ソーシャル・ネットワーキング・サービスの略。共通の趣味を持つ人々が集まり、コミュニケーションを深める目的で提供されます。"
        },
        {
            q: "コンピューターがつくった三次元空間のなかで、視覚などの感覚を通じてその場にいるような体験ができる技術やその製品を何というか。",
            choices: ["バーチャルリアリティ（VR）","拡張現実（AR）","複合現実（MR）","メタバース"],
            a: "バーチャルリアリティ（VR）",
            comment: "2016年はVR元年といわれ、ゲーム業界で大きく取り入れられました。"
        },
        {
            q: "情報通信技術の利用が進むにつれて生じる、年齢、教育、所得などの違いによるコンピューターを使う能力の差から生じる格差を何というか。",
            choices: ["デジタルディバイド（情報格差）","経済格差","教育格差","世代間格差"],
            a: "デジタルディバイド（情報格差）",
            comment: "これによって経済的な不平等が拡大すると考えられています。"
        },
        {
            q: "外国人登録制度にもとづいて、日本に連続して90日以上滞在することが認められた外国人を何というか。",
            choices: ["外国人登録者","永住者","特別永住者","帰化者"],
            a: "外国人登録者",
            comment: "2012年7月からは在留管理制度に変わり、在留外国人と呼ばれるようになりました。"
        },
        {
            q: "災害、疫病など地球規模の問題に対し、各国が力を合わせて取り組むことを何というか。",
            choices: ["国際協力","国際貢献","国際連合","NGO活動"],
            a: "国際協力",
            comment: "グローバル化の進展により、一国では解決できない地球規模の問題が増えています。"
        },
        {
            q: "各国が他国より有利に生産できる商品を生産して輸出し、そうでない商品は他国から輸入することを何というか。",
            choices: ["国際分業","自由貿易","保護貿易","比較優位"],
            a: "国際分業",
            comment: "先進国同士の水平的分業と、先進国と発展途上国間の垂直的分業があります。"
        },
        {
            q: "国際市場における、企業や国家間の競争のことを何というか。",
            choices: ["国際競争","価格競争","独占競争","自由競争"],
            a: "国際競争",
            comment: "グローバル化が進んだことで、国内商品と輸入品のどちらがより良い品を安く提供できるかなどで競争が激しくなっています。"
        },
        {
            q: "さまざまな国や民族の文化が共存する社会のことを何というか。",
            choices: ["多文化社会（多文化共生社会）","多様性社会","グローバル社会","ボーダレス社会"],
            a: "多文化社会（多文化共生社会）",
            comment: "おたがいの価値観や文化的な違いを認め合いながら、ともに生きていくことが大切です。"
        },
        {
            q: "ある年に生まれた人たちが、平均して、生まれたときから何年生きられるかを表した年数を何というか。",
            choices: ["平均寿命","健康寿命","平均余命","最高寿命"],
            a: "平均寿命",
            comment: "日本人の平均寿命は、世界で1・2位を争う高さです。"
        },
        {
            q: "1年間に生まれた子どもの数の、人口に対する割合（人口1000人当たりの数値）を何というか。",
            choices: ["出生率","合計特殊出生率","人口増加率","自然増加率"],
            a: "出生率",
            comment: "日本の出生率は低下傾向にあり、少子化の原因となっています。"
        },
        {
            q: "2003年に制定された、国や地方公共団体、企業も参加し、育児休暇制度や保育サービスなど、子育てを支援するための施策の充実をはかることが目的の法律は何か。",
            choices: ["少子化社会対策基本法","児童福祉法","育児・介護休業法","次世代育成支援対策推進法"],
            a: "少子化社会対策基本法",
            comment: "少子化対策を進めるための基本理念を定めています。"
        },
        {
            q: "高齢化が進み、核家族世帯が増えたことで増加している、高齢者による高齢者の介護のことを何というか。",
            choices: ["老老介護","認認介護","ヤングケアラー","ダブルケア"],
            a: "老老介護",
            comment: "介護者の肉体的・精神的負担が大きく、社会問題となっています。"
        },
        {
            q: "日本の少子高齢化を止め、家庭や職場、地域の人々誰もが活躍できる社会をめざし、50年後も人口1億人を維持しようとする政策をめざす社会を何というか。",
            choices: ["1億総活躍社会","地方創生","持続可能な社会","生涯現役社会"],
            a: "1億総活躍社会",
            comment: "2015年10月に発足した第3次安倍晋三改造内閣が掲げた政策です。"
        },
        {
            q: "さまざまな技術を生み出すための研究や、知識、学問のことを何というか。",
            choices: ["科学","技術","工学","理学"],
            a: "科学",
            comment: "医療技術や宇宙開発、情報技術などを発展させ、人々の生活を向上させます。"
        },
        {
            q: "歴史の中ではぐくまれ、人々の間で価値あるものとして古くから継承されてきた文化のことを何というか。",
            choices: ["伝統文化","大衆文化","生活文化","外来文化"],
            a: "伝統文化",
            comment: "能や歌舞伎などの専門性が高い文化と、衣食住や年中行事などの生活文化があります。"
        },
        {
            q: "七夕や七五三など、毎年同じ時期に行われる昔から続く行事を何というか。",
            choices: ["年中行事","冠婚葬祭","伝統行事","祭礼"],
            a: "年中行事",
            comment: "農作を祈る祭りから始まったものや、外国からきた行事が日本に定着したものがあります。"
        },
        {
            q: "文化財保護法に定められている、建造物や絵画、工芸品などの有形文化財や、演劇や音楽などの無形文化財などを総称して何というか。",
            choices: ["文化財","世界遺産","国宝","重要文化財"],
            a: "文化財",
            comment: "民俗文化財や史跡などの記念物、文化的景観なども含まれます。"
        },
        {
            q: "海外で「かっこいい」と評価されている、日本のアニメや漫画などの文化を何というか。",
            choices: ["クールジャパン","ポップカルチャー","サブカルチャー","ジャパニメーション"],
            a: "クールジャパン",
            comment: "日本の魅力を世界に発信するコンテンツとして注目されています。"
        },
        {
            q: "1人の女性が一生に産む子どもの数の平均を何というか。",
            choices: ["合計特殊出生率","出生率","人口増加率","自然増加率"],
            a: "合計特殊出生率",
            comment: "その年の15歳から49歳までの女性が産んだ子どもの数をもとに算出されます。"
        },
        {
            q: "おもに結婚や血縁をもとにして夫婦、親子、きょうだいなどで構成されている社会集団を何というか。",
            choices: ["家族","親族","世帯","地域社会"],
            a: "家族",
            comment: "かつての日本ではいくつの世代が集まった大家族が一般的でしたが、近年は核家族世帯や単独世帯が増加しています。"
        },
        {
            q: "夫婦のみ、もしくは夫婦と未婚の子ども、または父母のうち一方と未婚の子どもからなる家族形態のことを何というか。",
            choices: ["核家族世帯","拡大家族世帯","単独世帯","ステップファミリー"],
            a: "核家族世帯",
            comment: "高度経済成長期以降、その世帯数は増え続け、家族形態の内訳では現在最も割合が多くなっています。"
        },
        {
            q: "婚姻や相続といった家族にまつわることや、社会生活のなかで必要な関係を定めている法律を何というか。",
            choices: ["民法","刑法","憲法","商法"],
            a: "民法",
            comment: "個人の尊厳と両性の本質的平等を基本的な考え方としています。"
        },
        {
            q: "一組の男女が夫婦となること。両者の自由な意思にもとづく合意と届け出によって成立するものを何というか。",
            choices: ["婚姻","婚約","結納","同棲"],
            a: "婚姻",
            comment: "日本においては、満18歳以上であれば成立します。"
        },
        {
            q: "初婚年齢の平均が高くなっていくことを何というか。少子化の原因の1つと考えられている。",
            choices: ["晩婚化","非婚化","未婚化","少子化"],
            a: "晩婚化",
            comment: "相手にめぐり合えないことや、仕事と家事の両立が難しく結婚を諦めてしまうことなどが背景にあります。"
        },
        {
            q: "人が死亡したとき、その財産や借金などを他の者（相続人）が受けつぐことを何というか。",
            choices: ["相続","贈与","承継","遺贈"],
            a: "相続",
            comment: "夫あるいは妻や子どもは相続人となり、子どもは性別や年齢にかかわりなく等しく相続することができます（均分相続制）。"
        },
        {
            q: "第二次世界大戦前の日本でとられていた、個人よりも家を重視する家族制度を何というか。",
            choices: ["家制度","戸主制度","長子相続制","家督制度"],
            a: "家制度",
            comment: "家族をまとめる「戸主」を中心とし、家族は戸主に従わなければなりませんでした。第二次大戦後、民法の改正により廃止されました。"
        },
        {
            q: "結婚後も夫婦がおたがいに結婚前のそれぞれの名字をなのることを何というか。",
            choices: ["夫婦別姓","夫婦同姓","事実婚","通称使用"],
            a: "夫婦別姓",
            comment: "現在、民法では正式には夫婦どちらかの名字をなのることになっており、夫婦別姓にできるかどうかが議論されています。"
        },
        {
            q: "保護者が希望しているにもかかわらず、希望する保育施設の定員がうまっていたりして、保育施設に入れないでいる児童のことを何というか。",
            choices: ["待機児童","学童保育児童","鍵っ子","放置児童"],
            a: "待機児童",
            comment: "共働き世帯の増加により保育施設の需要が増えている反面、受け入れ環境の整備が遅れていることなどが原因です。"
        },
        {
            q: "総人口に占める子どもの割合が小さくなり、高齢者（65歳以上の人々）の占める割合が大きくなる社会のことを何というか。",
            choices: ["少子高齢社会","高齢化社会","超高齢社会","人口減少社会"],
            a: "少子高齢社会",
            comment: "医療費や年金など社会保障の費用が増加する一方で、保険料や税金を支払う働く世代が少なくなり、負担が増えることが問題となっています。"
        },
        {
            q: "人が集まっている集団のこと。家族や地域社会のほか、目的をもってつくられた学校や企業のようなものがあるものを何というか。",
            choices: ["社会集団","利益集団","圧力団体","コミュニティ"],
            a: "社会集団",
            comment: "集団としてのまとまりをもたせるため、それぞれに応じたルールがあり、それを守っていくことが必要です。"
        },
        {
            q: "社会の一員として社会集団と関わって生きていく人間のありかたのことを何と言うか。",
            choices: ["社会的存在","経済人","政治的動物","文化的動物"],
            a: "社会的存在",
            comment: "人間は社会集団と関わらずに生きていくことはできないので、誰もが社会的存在です。"
        },
        {
            q: "おたがいに納得し、合意した上で結ぶ約束を何というか。商品の売り買いや労働契約などがあてはまる。",
            choices: ["契約","協定","条約","合意"],
            a: "契約",
            comment: "法律にもとづいて約束を守る義務があり、約束が守られなかった場合は責任をとる必要があります。"
        },
        {
            q: "社会の中で、おたがいの意見や主張がぶつかることを何というか。",
            choices: ["対立","競争","抗争","紛争"],
            a: "対立",
            comment: "対立が生じた場合は、合意に達することで解消します。"
        },
        {
            q: "ルール（きまり）をつくるとき、それぞれの人が最大の利益を得られ、かつ時間やものをむだなく使うやり方を選ぼうとする考え方を何というか。",
            choices: ["効率","公正","公平","平等"],
            a: "効率",
            comment: "対立を解決して合意を目指すための判断基準の一つです。"
        },
        {
            q: "ルール（きまり）をつくるとき、個人を尊重すること。対等な立場で話し合う手続きの正しさや、特定の人が不当な制限や差別を受けない機会や結果の正しさを求める考え方を何というか。",
            choices: ["公正","効率","自由","平等"],
            a: "公正",
            comment: "対立を解決して合意を目指すための判断基準の一つです。"
        },
        {
            q: "対立がおきたとき、おたがいに納得する解決手段をつくり、その手段を実行することを何というか。",
            choices: ["合意","妥協","調停","仲裁"],
            a: "合意",
            comment: "合意にいたるための手段として、全会一致や多数決によって決める方法があります。"
        },
        {
            q: "さまざまな人が暮らす社会の中で、おたがいの利害を調整し、共存していくために定められる約束事を何というか。",
            choices: ["ルール（きまり）","法律","道徳","慣習"],
            a: "ルール（きまり）",
            comment: "しきたりやならわしといった慣習から、強制力を持つ法律まで様々な種類があります。"
        },
        {
            q: "法律によって認められている権限や自由のことを何というか。",
            choices: ["権利","義務","特権","自由"],
            a: "権利",
            comment: "日本国憲法では第3章で「国民の権利及び義務」を定めています。"
        },
        {
            q: "したがうべきとされること、当然しなければならないこと。ルールをつくる際には権利とともに明らかにすることが大切なものは何か。",
            choices: ["義務","権利","責任","規律"],
            a: "義務",
            comment: "日本国憲法では「勤労・納税・子どもに普通教育を受けさせる」という三大義務が定められています。"
        },
        {
            q: "人が生まれながらにもっている、人間らしく生きるためにある、だれにも侵すことができない権利を何というか。",
            choices: ["基本的人権","生存権","自然権","公民権"],
            a: "基本的人権",
            comment: "人権ともいい、自由権、平等権、社会権、参政権などがあります。"
        },
        {
            q: "1215年にイギリスで、国王のジョンが議会を無視して政治を行うことにがまんできなかった貴族たちが、国王の権力を制限させた法を何というか。",
            choices: ["マグナカルタ（大憲章）","権利の章典","権利請願","人権宣言"],
            a: "マグナカルタ（大憲章）",
            comment: "議会の同意なしに税金をかけないこと、正しい手続きなしに逮捕しないことなどを国王に認めさせました。"
        },
        {
            q: "1689年にイギリスで発布された法律。名誉革命がおこり、議会の要求を国王が承認して発布されたものを何というか。",
            choices: ["権利の章典","マグナカルタ","独立宣言","人権宣言"],
            a: "権利の章典",
            comment: "議会の同意なしで税金をかけないことや、国王も法を守ること（法の支配）などが定められました。"
        },
        {
            q: "1787年にアメリカで制定された憲法。世界で最初の成文憲法であり、民主主義や三権分立について規定している憲法は何か。",
            choices: ["アメリカ合衆国憲法","フランス憲法","ワイマール憲法","大日本帝国憲法"],
            a: "アメリカ合衆国憲法",
            comment: "アメリカ独立戦争の後に制定されました。"
        },
        {
            q: "1919年にドイツで制定された憲法。世界ではじめて社会権が保障された憲法は何か。",
            choices: ["ワイマール憲法","ボン基本法","アメリカ合衆国憲法","フランス人権宣言"],
            a: "ワイマール憲法",
            comment: "「ドイツ共和国憲法」が正式名称です。すべての国民に「人間たるに値する生活」を保障することを規定しました。"
        },
        {
            q: "国のあり方を最終的に判断する権利を持つ人のことを何というか。",
            choices: ["主権者","君主","大統領","国民"],
            a: "主権者",
            comment: "日本国憲法においては国民が主権者ですが、大日本帝国憲法においては天皇でした。"
        },
        {
            q: "1889年2月11日に発布された、日本最初の近代的な憲法を何というか。",
            choices: ["大日本帝国憲法（明治憲法）","日本国憲法","五箇条の御誓文","十七条の憲法"],
            a: "大日本帝国憲法（明治憲法）",
            comment: "主権者は天皇で、国民の人権は「臣民ノ権利」として天皇からあたえられたものと規定されていました。"
        },
        {
            q: "イギリスの思想家で、『統治二論』をあらわし、すべての人間は生まれながらに生命や自由、財産に対する権利をもち、権力が不当に行使されているときには抵抗する権利（抵抗権）があることを主張した人物は誰か。",
            choices: ["ロック","ルソー","モンテスキュー","ホッブズ"],
            a: "ロック",
            comment: "彼の思想は名誉革命を正当化し、アメリカ独立宣言にも大きな影響をあたえました。"
        },
        {
            q: "資源やエネルギーを効率的に利用し、むだな消費をしないことを何というか。",
            choices: ["省資源・省エネルギー","リサイクル","地球にやさしい生活","循環型社会"],
            a: "省資源・省エネルギー",
            comment: "石油危機をきっかけに日本でも進み、資源有効利用促進法などができました。"
        },
        {
            q: "ガソリンで動くエンジンと電気で動くモーターの2つの動力を組み合わせて走る自動車を何というか。",
            choices: ["ハイブリッドカー","電気自動車","燃料電池車","プラグインハイブリッド車"],
            a: "ハイブリッドカー",
            comment: "ガソリン車と比べて二酸化炭素をふくむ排気ガスの排出量が少ないことから注目されています。"
        },
        {
            q: "ガソリンを燃料とせず、電気を使って走る自動車を何というか。",
            choices: ["電気自動車","燃料電池車","ハイブリッドカー","ソーラーカー"],
            a: "電気自動車",
            comment: "走行中は二酸化炭素が出ないことから、環境に優しい自動車として注目されています。"
        },
        {
            q: "タンクの水素と空気中の酸素を化学的に反応させることで電気を発生させて走る車で、発電の際に水しか排出されない自動車を何というか。",
            choices: ["燃料電池車","電気自動車","ハイブリッドカー","水素自動車"],
            a: "燃料電池車",
            comment: "環境に影響を与えない車として注目されています。"
        },
        {
            q: "1997年に日本で開かれた、地球温暖化防止条約の第3回締約国会議（COP3）のことを何というか。",
            choices: ["地球温暖化防止京都会議","国連環境開発会議","国連人間環境会議","パリ会議"],
            a: "地球温暖化防止京都会議",
            comment: "この会議で、京都議定書が採択されました。"
        },
        {
            q: "1997年の会議で採択された、先進国に温室効果ガスの排出削減目標を定めた国際的な約束を何というか。",
            choices: ["京都議定書","パリ協定","ラムサール条約","ワシントン条約"],
            a: "京都議定書",
            comment: "2008年から2012年の間に、1990年の水準から先進国全体で5.2%、日本で6%減らすことなどを定めました。"
        },
        {
            q: "地球環境問題の原因の一つである、地球規模での環境汚染や環境破壊がもとで発生するさまざまな問題をまとめて何というか。",
            choices: ["地球環境問題","公害問題","南北問題","人口問題"],
            a: "地球環境問題",
            comment: "地球温暖化、酸性雨、砂漠化、オゾン層の破壊などがあり、各国が連携して取り組む必要があります。"
        },
        {
            q: "1972年にスウェーデンのストックホルムで開催され、「かけがえのない地球」がスローガンとなった国連の環境会議を何というか。",
            choices: ["国連人間環境会議","国連環境開発会議","環境開発サミット","気候変動枠組条約締約国会議"],
            a: "国連人間環境会議",
            comment: "環境問題に取り組む方向性を示した「人間環境宣言」が採択され、国連環境計画（UNEP）の設立が決められました。"
        },
        {
            q: "人間環境宣言を実施するため、1972年に設立された、環境保護を目的とする国連機関を何というか。",
            choices: ["国連環境計画（UNEP）","国連開発計画（UNDP）","世界保健機関（WHO）","国連教育科学文化機関（UNESCO）"],
            a: "国連環境計画（UNEP）",
            comment: "環境保護のための活動、国際協力の推進に取り組んでいます。"
        },
        {
            q: "1992年にブラジルのリオデジャネイロで開かれた、「持続可能な開発」を基本理念とする環境に関する国際会議を何というか。",
            choices: ["国連環境開発会議（地球サミット）","国連人間環境会議","地球温暖化防止京都会議","持続可能な開発に関する世界首脳会議"],
            a: "国連環境開発会議（地球サミット）",
            comment: "「環境と開発に関するリオ宣言」などが採択され、地球温暖化防止条約が調印されました。"
        },
        {
            q: "将来の世代に資源と良好な環境を残せるように、開発と環境保全を調和させようとする考えを何というか（1992年の地球サミットの基本理念）。",
            choices: ["持続可能な開発","人間環境宣言","ゼロエミッション","循環型社会"],
            a: "持続可能な開発",
            comment: "2002年の環境開発サミットでもテーマとされました。"
        },
        {
            q: "気候変動枠組条約締約国会議などを指す「締約国会議」の略称をアルファベット3文字で何というか。",
            choices: ["COP","NPT","PKO","NGO"],
            a: "COP",
            comment: "生物多様性条約の締約国会議を指す場合もあります。"
        },
        {
            q: "大気中の温室効果ガスの濃度を安定化させることを目標とし、1992年の地球サミットで採択された条約を何というか。",
            choices: ["気候変動枠組条約（地球温暖化防止条約）","京都議定書","モントリオール議定書","ワシントン条約"],
            a: "気候変動枠組条約（地球温暖化防止条約）",
            comment: "この枠組みの中で、各国の話し合い（COP）が継続して行われています。"
        },
        {
            q: "気候変動枠組条約を批准した国々による会議を何というか。1997年の第3回会議（COP3）では京都議定書が採択された。",
            choices: ["気候変動枠組条約締約国会議","国連総会","安全保障理事会","主要国首脳会議"],
            a: "気候変動枠組条約締約国会議",
            comment: "COP（コップ）と略されます。"
        },
        {
            q: "2015年のCOP21で採択された、すべての国が自国で目標を作成・提出し、温室効果ガス削減の措置を実施することを義務付けた新たな枠組みを何というか。",
            choices: ["パリ協定","京都議定書","ラムサール条約","ワシントン条約"],
            a: "パリ協定",
            comment: "先進国のみに削減目標を課していた京都議定書に代わるものです。"
        },
        {
            q: "価値ある自然環境や歴史的に貴重な文化遺産などを保存することを目的とする民間組織や市民運動を何というか。19世紀終わりにイギリスで始まった。",
            choices: ["ナショナル・トラスト","ボランティア","NPO法人","NGO"],
            a: "ナショナル・トラスト",
            comment: "日本でも知床（北海道）や狭山丘陵（埼玉県）など全国各地で広く行われています。"
        },
        {
            q: "経済が発展し、工業がさかんな国のことを何というか。おもに地球の北側に位置する、アメリカ合衆国やEU諸国、日本などがあてはまる。",
            choices: ["先進工業国（先進国）","発展途上国","新興国","後発開発途上国"],
            a: "先進工業国（先進国）",
            comment: "発展途上国に対して使われることばです。"
        },
        {
            q: "経済発展の水準が先進国に比べて低く、発展の途上にある国のことを何というか。おもに地球の南側に位置する大半の国があてはまる。",
            choices: ["発展途上国","先進工業国","新興国","社会主義国"],
            a: "発展途上国",
            comment: "貧困や飢餓が深刻な問題になっている国が多いです。"
        },
        {
            q: "発展途上国のなかで、近年経済が急速に成長している国や地域（NIESやBRICSなど）を何というか。",
            choices: ["新興国","先進工業国","後発開発途上国","産油国"],
            a: "新興国",
            comment: "世界経済において影響力を増しています。"
        },
        {
            q: "15歳以上の人口に対する、日常的な文字の読み書きができる人口の割合を何というか。",
            choices: ["識字率","就学率","進学率","出生率"],
            a: "識字率",
            comment: "発展途上国では、男性より女性のほうが低い傾向にあります。"
        },
        {
            q: "先進国と発展途上国との間の経済格差の問題と、それによりおこる政治・社会問題のことを何というか。",
            choices: ["南北問題","南南問題","東西問題","地域格差"],
            a: "南北問題",
            comment: "おもに地球の北側に先進国が多く、南側に発展途上国が多いことからこのようにいなわれます。"
        },
        {
            q: "発展途上国どうしの間での、経済格差からおこる問題を何というか。",
            choices: ["南南問題","南北問題","東西問題","民族問題"],
            a: "南南問題",
            comment: "工業化が進んでいる国と、最貧国などの間の問題です。"
        },
        {
            q: "一定の領土と国民をもっており、他国から支配されたり干渉されたりしない独立した国家のことを何というか。",
            choices: ["主権国家","独立国家共同体","連邦国家","属国"],
            a: "主権国家",
            comment: "内政不干渉の原則と主権平等の原則にもとづいています。"
        },
        {
            q: "他国の国内政治については干渉してはならないとする、国際法上の原則の1つを何というか。",
            choices: ["内政不干渉の原則","主権平等の原則","平和的生存権","専守防衛"],
            a: "内政不干渉の原則",
            comment: "主権国家の国内の政治や経済のあり方は、その国の国民が決めるべきであるとする考えにもとづいています。"
        },
        {
            q: "主権国家はすべて平等にあつかわれ、他国とたがいに対等であるとする、国際法上の原則の1つを何というか。",
            choices: ["主権平等の原則","内政不干渉の原則","相互主義","最恵国待遇"],
            a: "主権平等の原則",
            comment: "大国であっても小国であっても、主権をもつ国家として平等とされます。"
        },
        {
            q: "1955年、インドネシアのバンドンで開かれたアジア・アフリカ地域29か国による会議で、平和十原則を宣言した会議を何というか。",
            choices: ["アジア・アフリカ会議（バンドン会議）","非同盟諸国首脳会議","アフリカ開発会議","AAPE会議"],
            a: "アジア・アフリカ会議（バンドン会議）",
            comment: "民族の自立と国際平和を求めて開かれました。"
        },
        {
            q: "アフリカの開発をテーマとする国際会議で、1993年より日本が主導して開催しているものを何というか。",
            choices: ["アフリカ開発会議（TICAD）","アジア・アフリカ会議","アフリカ連合会議","G20首脳会議"],
            a: "アフリカ開発会議（TICAD）",
            comment: "国連やアフリカ連合（AU）委員会、世界銀行と共同で開催しています。"
        },
        {
            q: "たがいに独立した主権国家によって構成される社会のことを何というか。",
            choices: ["国際社会","地域社会","グローバル社会","ボーダレス社会"],
            a: "国際社会",
            comment: "第二次世界大戦後、アジアやアフリカの植民地が次々に独立して主権国家となったことから拡大しました。"
        },
        {
            q: "国際社会において国家間の関係を取り決めた法で、条約と国際慣習法に大きく分けられるものを何というか。",
            choices: ["国際法","国内法","万民法","自然法"],
            a: "国際法",
            comment: "条約は国家間の文書による合意、国際慣習法は長年にわたる慣習から法となったものです。"
        },
        {
            q: "利害関係が一致する国々がまとまりをつくり、政治的・経済的に協力を強めようとする動きのことを何というか。",
            choices: ["地域主義（リージョナリズム）","グローバリズム","ナショナリズム","単独行動主義"],
            a: "地域主義（リージョナリズム）",
            comment: "EUやASEAN、USMCAなどが代表的です。"
        },
        {
            q: "国を象徴する歌。日本では1999年に制定された国旗国歌法により、「君が代」が定められたものを何というか。",
            choices: ["国歌","国旗","国家","国花"],
            a: "国歌",
            comment: "オリンピックの表彰式や式典などで演奏されます。"
        },
        {
            q: "国を象徴する旗。日本では1999年に制定された国旗国歌法により、「日の丸」と呼ばれる日章旗が定められたものを何というか。",
            choices: ["国旗","国歌","県旗","市章"],
            a: "国旗",
            comment: "国や国民の象徴として扱われます。"
        },
        {
            q: "貧困状態にある人々に対し、少額の融資を行う金融サービスを何というか。起業のための融資で、現金収入を得る機会をあたえ、生活改善に結びつけることが目的である。",
            choices: ["マイクロクレジット","クラウドファンディング","ベンチャーキャピタル","プロジェクトファイナンス"],
            a: "マイクロクレジット",
            comment: "バングラデシュのグラミン銀行などが有名です。"
        },
        {
            q: "発展途上国にみられる、住む家もなく路上で生活する子どもたちのことを何というか。",
            choices: ["ストリートチルドレン","児童労働","難民","国内避難民"],
            a: "ストリートチルドレン",
            comment: "路上で物売りをしたり、通行人に物やお金をもらったりして生活しています。"
        },
        {
            q: "世界各国の総人口に対する栄養不足人口の割合を色で分けて示すことによって、世界の飢餓状況を表現した地図を何というか。",
            choices: ["ハンガーマップ","ハザードマップ","貧困マップ","食料自給率マップ"],
            a: "ハンガーマップ",
            comment: "国連の世界食糧計画（WFP）によって作成されています。"
        },
        {
            q: "1989年に国際連合総会で採択された、子どもの基本的人権を国際的に保障することを目的とした条約を何というか。日本は1994年に批准した。",
            choices: ["子どもの権利条約（児童の権利条約）","世界人権宣言","国際人権規約","女子差別撤廃条約"],
            a: "子どもの権利条約（児童の権利条約）",
            comment: "18歳未満の子どもを保護するとともに、教育を受ける権利や意見を表明する権利などを保障しています。"
        },
        {
            q: "子どもの権利条約において大きく4つに分けられる子どもの権利は、生きる権利、育つ権利、守られる権利と、もう一つは何か。",
            choices: ["参加する権利","労働する権利","選挙する権利","所有する権利"],
            a: "参加する権利",
            comment: "自由に意見を表したり、グループを作って活動したりする権利です。"
        },
        {
            q: "海外在住の国民もふくめて、1年間に1国の国民によって新たに生産された財・サービスの合計額から、中間生産物の価格を引いたものをアルファベット3文字で何というか。",
            choices: ["GNP","GDP","GNI","NNP"],
            a: "GNP",
            comment: "国民総生産のこと。現在ではGDPのほうが重視されています。"
        },
        {
            q: "国内にある外国企業もふくめて、1年間に1国内で新たに生産された財・サービスの合計額から、中間生産物の価格を引いたものをアルファベット3文字で何というか。",
            choices: ["GDP","GNP","GNI","NI"],
            a: "GDP",
            comment: "国内総生産のこと。1国の経済規模を示す指標として用いられています。"
        },
        {
            q: "日本企業の海外支店等の所得など海外からの所得もふくめて、1年間に1国の国民が得た所得の合計をアルファベット3文字で何というか。",
            choices: ["GNI","GDP","GNP","NNP"],
            a: "GNI",
            comment: "国民総所得のこと。GNPにかわって用いられている概念です。"
        },
        {
            q: "太平洋をとりかこむ21の国・地域が参加する経済協力組織をアルファベットで何というか。",
            choices: ["APEC","ASEAN","EU","USMCA"],
            a: "APEC",
            comment: "アジア太平洋経済協力会議のこと。貿易・投資の自由化などを目的としています。"
        },
        {
            q: "特定の国・地域間において、関税や輸出入制限をなくすことなどを取り決めた協定をアルファベット3文字で何というか。",
            choices: ["FTA","EPA","TPP","WTO"],
            a: "FTA",
            comment: "自由貿易協定のこと。貿易を活発にすることを目的としています。"
        },
        {
            q: "アメリカ合衆国、カナダ、メキシコの3か国間で2018年に署名された、NAFTA（北米自由貿易協定）に代わる新たな協定をアルファベットで何というか。",
            choices: ["USMCA","MERCOSUR","EU","ASEAN"],
            a: "USMCA",
            comment: "米国・メキシコ・カナダ協定のこと。管理貿易の傾向が見られます。"
        },
        {
            q: "韓国、台湾、香港、シンガポールの4つの国と地域をさす、新興工業経済地域のことをアルファベットで何というか。",
            choices: ["アジアNIES","BRICS","ASEAN","APEC"],
            a: "アジアNIES",
            comment: "1970年代以降、急速に工業が発展しました。"
        },
        {
            q: "サンフランシスコ会議で採択された憲章にもとづき、1945年に発足した国際平和機構を何というか。",
            choices: ["国際連合","国際連盟","北大西洋条約機構","世界貿易機関"],
            a: "国際連合",
            comment: "本部はニューヨークにあります。"
        },
        {
            q: "人を傷つける目的で地中に設置されることが多く、紛争が終わったあとでも一般市民が被害にあうことが問題となっている兵器は何か。",
            choices: ["地雷","クラスター爆弾","化学兵器","生物兵器"],
            a: "地雷",
            comment: "1999年には、対人地雷の生産・使用などを全面的に禁止するオタワ条約が発効しました。"
        },
        {
            q: "1999年に発効した、対人地雷の生産・使用などを全面的に禁止する条約を、通称で何というか。",
            choices: ["オタワ条約","オスロ条約","ワシントン条約","ジュネーブ条約"],
            a: "オタワ条約",
            comment: "正式名称は対人地雷禁止条約です。"
        },
        {
            q: "すでに世界にある核兵器を減らすための取り組みを何というか。",
            choices: ["核軍縮交渉","軍備拡張","非核三原則","核抑止力"],
            a: "核軍縮交渉",
            comment: "冷戦期にアメリカとソ連がお互いの核兵器の数を制限するSALTから始まりました。"
        },
        {
            q: "1987年にアメリカ合衆国とソ連との間で結ばれた、ミサイルを使って核爆弾を運ぶ兵器の廃棄に関する条約を何というか（2019年に失効）。",
            choices: ["INF全廃条約（中距離核戦力全廃条約）","START（戦略兵器削減条約）","SALT（戦略兵器制限交渉）","NPT（核拡散防止条約）"],
            a: "INF全廃条約（中距離核戦力全廃条約）",
            comment: "地上から発射するミサイルに限定されたものでした。"
        },
        {
            q: "アメリカ合衆国とソ連（ロシア）との間で結ばれた、大陸間をこえて直接攻撃できる核ミサイルの削減に関する条約をアルファベットで何というか。",
            choices: ["START（戦略兵器削減条約）","SALT（戦略兵器制限交渉）","INF（中距離核戦力）","NPT（核拡散防止条約）"],
            a: "START（戦略兵器削減条約）",
            comment: "これによりアメリカとロシアの戦略核弾頭数は、冷戦期の約60%にまで減少しました。"
        },
        {
            q: "1963年にアメリカ、ソ連、イギリスの間で結ばれた、大気圏内と宇宙空間、水中における核実験をやめる条約をアルファベットで何というか。",
            choices: ["PTBT","CTBT","NPT","START"],
            a: "PTBT",
            comment: "部分的核実験停止条約のこと。地下での核実験を禁止していないため、部分的とされています。"
        },
        {
            q: "1968年に調印された、核兵器をもつ国を拡大させないための条約をアルファベットで何というか。",
            choices: ["NPT","PTBT","CTBT","SALT"],
            a: "NPT",
            comment: "核拡散防止条約のこと。アメリカ、ロシア、フランス、イギリス、中国の5か国を核保有国と定めています。"
        },
        {
            q: "教育や科学、文化の面での協力を通じて、世界平和を促進することを目的とする国連の専門機関をアルファベットで何というか。",
            choices: ["UNESCO","UNICEF","WHO","UNHCR"],
            a: "UNESCO",
            comment: "国連教育科学文化機関のこと。世界遺産の決定や保護なども行っています。"
        },
        {
            q: "世界の人々の健康保持と増進を目的とする国連の専門機関をアルファベットで何というか。",
            choices: ["WHO","UNESCO","UNICEF","FAO"],
            a: "WHO",
            comment: "世界保健機関のこと。感染症の発生状況の報告なども行っています。"
        },
        {
            q: "国際通貨の安定や世界貿易の拡大をはかることを目的とする国連の専門機関をアルファベットで何というか。",
            choices: ["IMF","IBRD","WTO","OECD"],
            a: "IMF",
            comment: "国際通貨基金のこと。通貨危機におちいった国に対して短期的な貸し出しなどを行っています。"
        },
        {
            q: "飢えや病気、貧困などから子どもたちを守り、健やかな発達をうながすことを目的とする国連の機関をアルファベットで何というか。",
            choices: ["UNICEF","UNESCO","UNHCR","WHO"],
            a: "UNICEF",
            comment: "国連児童基金のこと。発展途上国の子どもに対する保健衛生や栄養補給などの援助活動を行っています。"
        },
        {
            q: "難民を国際的に保護し支援することを目的とする国連の機関をアルファベットで何というか（1991年から緒方貞子が代表を務めた）。",
            choices: ["UNHCR","UNICEF","UNESCO","UNDP"],
            a: "UNHCR",
            comment: "国連難民高等弁務官事務所のことです。"
        },
        {
            q: "南北問題の解決のため、発展途上国の経済開発と貿易の促進をはかることを目的として設立された国連の機関をアルファベットで何というか。",
            choices: ["UNCTAD","UNICEF","UNESCO","UNHCR"],
            a: "UNCTAD",
            comment: "国連貿易開発会議のことです。"
        },
        {
            q: "ヨーロッパ諸国やアメリカ合衆国、日本などが加盟する、先進国による経済協力組織をアルファベットで何というか。",
            choices: ["OECD","OPEC","APEC","ASEAN"],
            a: "OECD",
            comment: "経済協力開発機構のこと。発展途上国の経済発展を援助する目的でも組織されました。"
        },
        {
            q: "原子力の平和的利用を促進するとともに、原子力が軍事的に利用されることを防止するために設立された国際機関をアルファベットで何というか。",
            choices: ["IAEA","NPT","CTBT","WHO"],
            a: "IAEA",
            comment: "国際原子力機関のこと。核物質のあつかわれ方について調査（査察）を行ったりします。"
        },
        {
            q: "GATT（関税および貿易に関する一般協定）にかわり設立された、世界における自由貿易を促進することを目的とする国際機関をアルファベットで何というか。",
            choices: ["WTO","WHO","IMF","OECD"],
            a: "WTO",
            comment: "世界貿易機関のこと。貿易をめぐり各国間で紛争がおこった場合の解決方法が強化されました。"
        },
        {
            q: "国どうしの間で、貿易の自由化だけでなく、人の移動や投資などさまざまな分野において協力し、経済協力をしようとする協定をアルファベット3文字で何というか。",
            choices: ["EPA","FTA","TPP","WTO"],
            a: "EPA",
            comment: "経済連携協定のことです。"
        },
        {
            q: "アジア・太平洋地域において、経済分野で自由な協力をしようという協定をアルファベットで何というか。2018年に11か国で発効した。",
            choices: ["TPP","EPA","FTA","APEC"],
            a: "TPP",
            comment: "環太平洋戦略的経済連携協定のこと。アメリカが離脱しましたが、2024年にイギリスが加盟しました。"
        },
        {
            q: "政治上の目的を達成するために、暗殺や建造物の破壊など暴力的な手段でうったえることを何というか。",
            choices: ["テロリズム（テロ）","クーデター","ハイジャック","ゲリラ"],
            a: "テロリズム（テロ）",
            comment: "一般市民を巻きこんだ大量無差別テロや自爆テロなどがおこって問題となっています。"
        },
        {
            q: "2001年9月11日に、アメリカ合衆国のニューヨークやワシントンなどで同時におこった旅客機によるテロ事件を何というか。",
            choices: ["同時多発テロ","冷戦の終結","湾岸戦争","イラク戦争"],
            a: "同時多発テロ",
            comment: "世界貿易センタービルなどに旅客機が突入し、多くの犠牲者が出ました。"
        },
        {
            q: "2003年3月、イラクが大量破壊兵器を保有しているとして、アメリカやイギリスがイラクを攻撃して始まった戦争を何というか。",
            choices: ["イラク戦争","湾岸戦争","アフガニスタン紛争","シリア内戦"],
            a: "イラク戦争",
            comment: "この戦争の結果、フセイン政権が倒されました。"
        },
        {
            q: "イラクとシリアにまたがる地域を中心に活動し、一方的に国家の樹立を宣言したイスラム教の過激派組織を、アルファベット2文字または日本語で何というか。",
            choices: ["IS（イスラム国）","アルカイダ","タリバン","ハマス"],
            a: "IS（イスラム国）",
            comment: "ISILとも呼び、世界中でテロ行為などを行っています。"
        },
        {
            q: "政府によってつくられたのではなく、民間によってつくられた国際的な協力組織をアルファベットで何というか。",
            choices: ["NGO（非政府組織）","NPO（非営利組織）","ODA（政府開発援助）","PKO（平和維持活動）"],
            a: "NGO（非政府組織）",
            comment: "平和や人権問題、環境問題など地球規模のテーマに取り組んでおり、国境をこえて活動しています。"
        },
        {
            q: "社会に貢献するサービスに取り組む、利益の追求を目的としない民間組織をアルファベットで何というか。",
            choices: ["NPO（非営利組織）","NGO（非政府組織）","ODA（政府開発援助）","PKO（平和維持活動）"],
            a: "NPO（非営利組織）",
            comment: "福祉や教育・文化、まちづくり、環境などの分野で活動しています。"
        },
        {
            q: "日本では1998年に、一定の要件を満たせばNPOが法人として認められるようになった法律は何か。",
            choices: ["特定非営利活動促進法（NPO法）","会社法","一般社団法人法","公益法人認定法"],
            a: "特定非営利活動促進法（NPO法）",
            comment: "これにより、法律上の権利・義務の主体となることができるようになりました。"
        },
        {
            q: "1994年に国連開発計画（UNDP）が提唱した、人間一人ひとりの人権や生命、尊厳を大切にしていこうという考え方を何というか。",
            choices: ["人間の安全保障","国家の安全保障","基本的人権","生存権"],
            a: "人間の安全保障",
            comment: "紛争や環境破壊などに対して、国家の安全保障だけでは不十分であるという考え方に基づきます。"
        },
        {
            q: "事業を継続的に改善していくための考え方で、方針・計画(Plan)、実施(Do)、点検(Check)、是正・見直し(Act)の頭文字を取って何というか。",
            choices: ["PDCAサイクル","OODAループ","KPT法","マトリックス法"],
            a: "PDCAサイクル",
            comment: "国際規格を定めるISOでは、環境規格においてこのサイクルを取り入れています。"
        },
        {
            q: "国連が2015年に定めた、2030年までに達成すべき17の目標をアルファベットで何というか。",
            choices: ["SDGs（持続可能な開発目標）","MDGs（ミレニアム開発目標）","ESD","COP"],
            a: "SDGs（持続可能な開発目標）",
            comment: "教育の普及や、貧困や飢餓をなくすことなどが含まれています。"
        },
        {
            q: "1996年に国連総会で採択された、地下核実験をふくむあらゆる核実験を禁止する条約をアルファベットで何というか。",
            choices: ["CTBT（包括的核実験禁止条約）","NPT（核拡散防止条約）","PTBT（部分的核実験停止条約）","INF（中距離核戦力全廃条約）"],
            a: "CTBT（包括的核実験禁止条約）",
            comment: "アメリカや中国などが批准しておらず、発効の見通しは立っていません。"
        },
        {
            q: "核兵器を非人道的な兵器として、その使用や使用の威嚇などの活動を例外なく禁止するとした条約で、2021年1月に発効したものを何というか。",
            choices: ["核兵器禁止条約","包括的核実験禁止条約","核拡散防止条約","戦略兵器削減条約"],
            a: "核兵器禁止条約",
            comment: "アメリカやロシアなど核保有国と、日本など「核の傘」にある国は参加していません。"
        },
        {
            q: "北朝鮮の核開発問題について、日本、アメリカ、韓国、中国、ロシア、北朝鮮の担当者が話し合う会議を何というか（2003年〜2008年）。",
            choices: ["6か国協議","サミット","国連安保理","G20"],
            a: "6か国協議",
            comment: "議長国である中国で開催されましたが、2008年以降は開催されていません。"
        },
        {
            q: "1975年以降、ほぼ毎年開かれている先進国首脳会議のことを何というか。（1998年からは主要国首脳会議）",
            choices: ["サミット（主要国首脳会議）","国連総会","APEC","ダボス会議"],
            a: "サミット（主要国首脳会議）",
            comment: "現在は先進工業国によるG7や、新興工業国などを加えたG20などが開かれています。"
        },
        {
            q: "発展途上国に対して、先進工業国などの政府が行う資金援助や技術協力のことをアルファベット3文字で何というか。",
            choices: ["ODA","NGO","PKO","NPO"],
            a: "ODA",
            comment: "政府開発援助のこと。発展途上国の経済開発や福祉の向上を目的としています。"
        },
        {
            q: "政府開発援助（ODA）の実施業務を行っている日本の独立行政法人をアルファベットで何というか。",
            choices: ["JICA（国際協力機構）","JETRO（日本貿易振興機構）","JBIC（国際協力銀行）","NGO"],
            a: "JICA（国際協力機構）",
            comment: "無償資金協力業務や、青年海外協力隊の派遣などを行っています。"
        },
        {
            q: "政府開発援助（ODA）の一環として、JICA（国際協力機構）が行っている海外ボランティア事業を何というか。",
            choices: ["海外協力隊","国境なき医師団","アムネスティ・インターナショナル","平和維持部隊"],
            a: "海外協力隊",
            comment: "専門の技術をもった人々が発展途上国に派遣され活動しています。"
        },
        {
            q: "全加盟国で構成される国際連合の中心的機関を何というか。",
            choices: ["国連総会","安全保障理事会","経済社会理事会","信託統治理事会"],
            a: "国連総会",
            comment: "加盟国にはそれぞれ1票の議決権が与えられ、通常総会は年1回定期的に行われます。"
        },
        {
            q: "国際連合の主要機関の一つで、世界の平和と安全の維持を目的とし、常任理事国5か国と非常任理事国10か国で構成される機関を何というか。",
            choices: ["安全保障理事会","国連総会","経済社会理事会","国際司法裁判所"],
            a: "安全保障理事会",
            comment: "常任理事国には拒否権があります。"
        },
        {
            q: "安全保障理事会の常任理事国がもつ、1か国でも反対すると議決できないという権利を何というか。",
            choices: ["拒否権","拒絶権","否決権","棄権"],
            a: "拒否権",
            comment: "重要な問題について議決するには、必ず5常任理事国の賛成が必要となります。"
        },
        {
            q: "安全や平和をおびやかす行動を取った国に対して、その他の国々が集団で制裁を加える制度や考え方を何というか。",
            choices: ["集団安全保障","個別的自衛権","集団的自衛権","専守防衛"],
            a: "集団安全保障",
            comment: "国際連合は、安全保障理事会の決定により、経済制裁や武力制裁を加えることができます。"
        },
        {
            q: "国際連合の主要機関の一つで、貿易や工業化といった経済問題や、子どもや女性の権利といった社会問題について研究や勧告を行う機関を何というか。",
            choices: ["経済社会理事会","安全保障理事会","国連総会","人権理事会"],
            a: "経済社会理事会",
            comment: "総会で選ばれた54理事国で構成され、専門機関などと連携して活動しています。"
        },
        {
            q: "国際連合の主要機関の一つで、国家間における法的な争いについて、国際法にもとづき裁判を行い、平和的な解決をはかる機関を何というか。",
            choices: ["国際司法裁判所","国際刑事裁判所","常設仲裁裁判所","欧州人権裁判所"],
            a: "国際司法裁判所",
            comment: "オランダのハーグにあります。"
        },
        {
            q: "平和をおびやかす地域紛争などの事態の悪化や国際的な拡大を防止するために国連が行う活動をアルファベットで何というか。",
            choices: ["PKO","PKF","NGO","ODA"],
            a: "PKO",
            comment: "平和維持活動のこと。紛争地域に平和維持軍（PKF）などを派遣します。"
        },
        {
            q: "平和維持活動（PKO）などに対し、自衛隊などが参加できるようにするため、1992年に日本で制定された法律を何というか。",
            choices: ["国連平和維持活動協力法（PKO協力法）","周辺事態法","テロ対策特別措置法","武力攻撃事態法"],
            a: "国連平和維持活動協力法（PKO協力法）",
            comment: "これによりカンボジアなどに自衛隊が派遣されました。"
        },
        {
            q: "経済・社会・文化などに関する国際問題を専門的に扱い、経済社会理事会を通じて国際連合と連携している国際機関を総称して何というか（UNESCOやILOなど）。",
            choices: ["専門機関","補助機関","常設機関","諮問機関"],
            a: "専門機関",
            comment: "FAO（国連食糧農業機関）やWHO（世界保健機関）なども含まれます。"
        },
        {
            q: "国連の専門機関の一つで、世界の労働者の地位の向上や労働問題の解決をはかることを目的としている機関をアルファベットで何というか。",
            choices: ["ILO","WHO","UNESCO","IMF"],
            a: "ILO",
            comment: "国際労働機関のことです。"
        }
    ],
    "gw_4": [
        {
            q: "アフリカ大陸北部を占める、世界最大の砂漠は？",
            choices: ["サハラ砂漠","ナミブ砂漠","ゴビ砂漠","カラハリ砂漠"],
            a: "サハラ砂漠",
            comment: "日本の約24倍もの面積があります。"
        },
        {
            q: "サハラ砂漠の南縁に広がる、砂漠化が進行している半乾燥地域を何というか？",
            choices: ["サヘル","オアシス","ステップ","サバンナ"],
            a: "サヘル",
            comment: "過放牧や過耕作、人口増加などが原因で砂漠化が進んでいます。",
            answerImg: "assets/images/geography/g_gw_4_22_sahel_1773376751159.png"
        },
        {
            q: "アフリカ大陸を北上して地中海に注ぐ、世界最長の川は？",
            img: "assets/images/history/h_ancient_nile_1772414594835.png",
            choices: ["ナイル川","コンゴ川","ニジェール川","ザンベジ川"],
            a: "ナイル川",
            comment: "流域では古くから文明が栄え、現在も農業用水として重要です。"
        },
        {
            q: "赤道付近のアフリカ西部に位置し、カカオ豆の栽培が盛んな湾岸地域は？",
            choices: ["ギニア湾","ベンガル湾","メキシコ湾","ペルシア湾"],
            a: "ギニア湾",
            comment: "コートジボワールやガーナなどの国々が面しています。"
        },
        {
            q: "アフリカ大陸の最高峰であり、赤道直下にありながら山頂に雪がある山は？",
            choices: ["キリマンジャロ山","ケニア山","エベレスト山","アトラス山脈"],
            a: "キリマンジャロ山",
            comment: "「アフリカの屋根」とも呼ばれます。"
        },
        {
            q: "アフリカ中部の赤道直下に広がる、熱帯雨林におおわれた盆地は？",
            choices: ["コンゴ盆地","アマゾン盆地","四川盆地","パリ盆地"],
            a: "コンゴ盆地",
            comment: "ゴリラやチンパンジーなどの野生動物が生息しています。"
        },
        {
            q: "かつてアフリカの国々を植民地として支配していた主な地域は？",
            choices: ["ヨーロッパ","アジア","北アメリカ","南アメリカ"],
            a: "ヨーロッパ",
            comment: "イギリスやフランスなどが多くの植民地を持っていました。"
        },
        {
            q: "アフリカの国境線が直線的である理由として最も適切なものは？",
            choices: ["植民地時代に宗主国が人為的に決めたから","山脈や川に沿っているから","古代文明の境界だから","民族の分布に合わせているから"],
            a: "植民地時代に宗主国が人為的に決めたから",
            comment: "民族の分布を無視して引かれたため、独立後も紛争の原因となりました。"
        },
        {
            q: "1960年にアフリカの17カ国が一斉に独立したことから、この年は何と呼ばれるか？",
            choices: ["アフリカの年","独立の年","解放の年","革命の年"],
            a: "アフリカの年",
            comment: "その後も多くの国が独立を果たしました。"
        },
        {
            q: "かつて南アフリカ共和国で行われていた、極端な人種隔離政策を何というか？",
            choices: ["アパルトヘイト","カースト制度","公民権運動","白豪主義"],
            a: "アパルトヘイト",
            comment: "黒人の居住地や職業を制限し、白人を優遇しました。1991年に廃止されました。"
        },
        {
            q: "アパルトヘイト撤廃に尽力し、南アフリカ共和国初の黒人大統領となった人物は？",
            choices: ["マンデラ","キング牧師","ガンディー","オバマ"],
            a: "マンデラ",
            comment: "長年の投獄生活を経て、民族融和を進めました。"
        },
        {
            q: "アフリカ諸国の主権と領土を守り、統合を目指す目的で組織された連合は？",
            choices: ["AU（アフリカ連合）","OAU（アフリカ統一機構）","EU","ASEAN"],
            a: "AU（アフリカ連合）",
            comment: "2002年に発足し、ほぼ全ての国が加盟しています。"
        },
        {
            q: "特定の農産物や鉱産資源の輸出に頼る経済構造を何というか？",
            choices: ["モノカルチャー経済","プランテーション農業","自由貿易","市場経済"],
            a: "モノカルチャー経済",
            comment: "国際価格の変動や天候の影響を受けやすく、経済が不安定になりがちです。"
        },
        {
            q: "コバルトやクロムなど、埋蔵量は少ないがハイテク産業に不可欠な金属を何というか？",
            choices: ["レアメタル（希少金属）","鉄鉱石","貴金属","ベースメタル"],
            a: "レアメタル（希少金属）",
            comment: "南アフリカ共和国などで多く産出されます。"
        },
        {
            q: "カカオ、コーヒー、茶などの輸出用作物を、大規模な農園で栽培する農業を何というか？",
            choices: ["プランテーション農業","焼畑農業","近郊農業","オアシス農業"],
            a: "プランテーション農業",
            comment: "植民地時代にヨーロッパ人によって開かれました。",
            answerImg: "assets/images/geography/g_gw_4_23_plantation_1773376769203.png"
        },
        {
            q: "発展途上国の産物を公正な価格で取引し、生産者の生活を支える貿易の仕組みは？",
            choices: ["フェアトレード","自由貿易","保護貿易","関税自主権"],
            a: "フェアトレード",
            comment: "コーヒーやチョコレートなどで広まっています。"
        },
        {
            q: "アフリカ大陸最大の人口と石油産出量を誇る、ギニア湾岸の国は？",
            choices: ["ナイジェリア","エジプト","南アフリカ","ケニア"],
            a: "ナイジェリア",
            comment: "OPECにも加盟している産油国です。"
        },
        {
            q: "世界有数のカカオ豆の生産国で、かつて「ゴールドコースト」と呼ばれた国は？",
            choices: ["ガーナ","コートジボワール","カメルーン","セネガル"],
            a: "ガーナ",
            comment: "日本のチョコレートの原料の多くがガーナ産です（コートジボワールも多い）。"
        },
        {
            q: "コーヒーの原産地とされ、アフリカ最古の独立国の一つでもある国は？",
            choices: ["エチオピア","ケニア","タンザニア","コロンビア"],
            a: "エチオピア",
            comment: "高原地帯でのコーヒー栽培が盛んです。"
        },
        {
            q: "茶の栽培や野生動物の保護（サファリ観光）が盛んな、赤道直下の国は？",
            img: "assets/images/geography/gw_africa_savanna_1771578489631.png",
            choices: ["ケニア","エチオピア","ソマリア","スーダン"],
            a: "ケニア",
            comment: "イギリス植民地時代に茶のプランテーションが開かれました。"
        },
        {
            q: "アフリカ大陸最大の経済力を持ち、金やダイヤモンドの産出が多い国は？",
            choices: ["南アフリカ共和国","エジプト","ナイジェリア","モロッコ"],
            a: "南アフリカ共和国",
            comment: "BRICSの一員としても数えられます。"
        },
        {
            q: "古代文明発祥の地であり、スエズ運河がある国は？",
            choices: ["エジプト","リビア","アルジェリア","スーダン"],
            a: "エジプト",
            comment: "ナイル川の恵みを受けて農業や観光業が盛んです。"
        },
        {
            q: "アラビア語を話し、イスラム教徒が多いのはアフリカのどの地域か？",
            choices: ["北部","南部","中部","全域"],
            a: "北部",
            comment: "北アフリカは西アジアとのつながりが深いです。"
        },
        {
            q: "キリスト教徒が多く、英語やフランス語を公用語とする国が多いのはアフリカのどの地域か？",
            choices: ["中・南部（サハラ以南）","北部","東部のみ","西部のみ"],
            a: "中・南部（サハラ以南）",
            comment: "植民地時代の宗主国の言語や宗教の影響を受けています。"
        },
        {
            q: "アフリカの都市部で発生している、居住環境の悪い地域（貧民街）を何というか？",
            choices: ["スラム","ニュータウン","ゲットー","ダウンタウン"],
            a: "スラム",
            comment: "農村から職を求めて都市に人が集まり、形成されます。"
        },
        {
            q: "2011年にスーダンから独立した、アフリカで最も新しい国は？",
            choices: ["南スーダン","エリトリア","ナミビア","東ティモール"],
            a: "南スーダン",
            comment: "石油資源などがありますが、政情不安定が続いています。"
        },
        {
            q: "コートジボワールやガーナの主食としても食べられる、キャッサバやヤムイモなどを何と呼ぶか？",
            choices: ["いも類（根茎類）","穀物","果実","野菜"],
            a: "いも類（根茎類）",
            comment: "これらをすりつぶして餅のようにした「フフ」などの料理があります。"
        },
        {
            q: "アフリカの人口について正しい記述はどれか？",
            choices: ["急速に増加しており、「人口爆発」と呼ばれる","減少傾向にある","横ばいである","高齢化が深刻である"],
            a: "急速に増加しており、「人口爆発」と呼ばれる",
            comment: "21世紀中に世界で最も人口が増える地域と予測されています。"
        },
        {
            q: "地中海と紅海を結ぶ、エジプトにある運河は？",
            choices: ["スエズ運河","パナマ運河","キール運河","コリントス運河"],
            a: "スエズ運河",
            comment: "ヨーロッパとアジアを結ぶ海上交通の要衝です。"
        },
        {
            q: "南アフリカ共和国などで産出される、自動車の排ガス浄化装置に使われる白金（プラチナ）などの金属も何に含まれるか？",
            choices: ["レアメタル","宝石","合金","化石燃料"],
            a: "レアメタル",
            comment: "世界的な産出地となっています。"
        },
        {
            q: "タンザニアやケニアでマサイ族などが伝統的に行ってきた、牛などの家畜を飼うスタイルは？",
            choices: ["遊牧","酪農","混合農業","養殖"],
            a: "遊牧",
            comment: "草や水を求めて移動しながら生活してきましたが、定住化も進んでいます。"
        },
        {
            q: "アフリカで携帯電話の普及に伴い急速に広がったサービスは？",
            choices: ["モバイル送金（電子決済）","オンラインゲーム","動画配信","VR体験"],
            a: "モバイル送金（電子決済）",
            comment: "ケニアの「M-Pesa（エムペサ）」などが有名で、銀行口座がなくても送金できます。"
        },
        {
            q: "サハラ砂漠より南の地域を指す言葉として使われるのは？",
            choices: ["サブサハラ","北アフリカ","中東","オリエント"],
            a: "サブサハラ",
            comment: "「サハラ（砂漠）の下」という意味です。",
            answerImg: "assets/images/geography/g_gw_4_24_sub_saharan_1773376781364.png"
        },
        {
            q: "かつてアメリカ大陸へ労働力として強制的に連れて行かれた人々は？",
            choices: ["黒人奴隷","移民","難民","華僑"],
            a: "黒人奴隷",
            comment: "「三角貿易」によって多くの人々が故郷を追われました。"
        },
        {
            q: "ダイヤモンドの産出が多いアフリカ南部の国は？",
            choices: ["ボツワナ・南アフリカ","ナイジェリア・ガーナ","ケニア・エチオピア","エジプト・リビア"],
            a: "ボツワナ・南アフリカ",
            comment: "ボツワナはダイヤモンド産業で経済成長しています。"
        },
        {
            q: "マダガスカル島に生息する、キツネザルなどの独自の生態系が見られる理由は？",
            choices: ["大陸から早くに分離して孤立していたから","人が住んでいないから","気候が特殊だから","人工的に作られた島だから"],
            a: "大陸から早くに分離して孤立していたから",
            comment: "「進化の実験場」や「第8の大陸」とも呼ばれます。",
            answerImg: "assets/images/geography/g_gw_4_25_madagascar_1773397724287.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: undefined,
            a: "アディスアベバ（エチオピア）",
            comment: "エチオピアの首都です。"
        },
        {
            q: "アフリカ大陸の北東部に位置し、ナイル川が流れピラミッドがあるこの国のなまえは？",
            img: "assets/images/geography/map_africa_blank_1771577902246.png",
            choices: ["エジプト","スーダン","リビア","ケニア"],
            a: "エジプト",
            comment: "首都はカイロです。"
        },
        {
            q: "アフリカ大陸の最南端に位置し、かつてアパルトヘイト（人種隔離政策）が行われていた国は？",
            img: "assets/images/geography/map_africa_blank_1771577902246.png",
            choices: ["南アフリカ共和国","ケニア","ナイジェリア","エチオピア"],
            a: "南アフリカ共和国",
            comment: "金やダイヤモンドなどの鉱産資源が豊富です。"
        },
        {
            q: "ギニア湾に面し、アフリカで最も人口が多い産油国は？",
            img: "assets/images/geography/map_africa_blank_1771577902246.png",
            choices: ["ナイジェリア","エジプト","南アフリカ共和国","ケニア"],
            a: "ナイジェリア",
            comment: "急速な経済成長を続けています。"
        }
    ],
    "gw_5": [
        {
            q: "北アメリカ大陸の西部を南北に走る、高く険しい山脈は？",
            choices: ["ロッキー山脈","アパラチア山脈","アンデス山脈","ヒマラヤ山脈"],
            a: "ロッキー山脈",
            comment: "環太平洋造山帯に属し、標高4000m級の山々が連なっています。"
        },
        {
            q: "北アメリカ大陸の東部になだらかに広がる、比較的低い山脈は？",
            choices: ["アパラチア山脈","ロッキー山脈","アルプス山脈","ウラル山脈"],
            a: "アパラチア山脈",
            comment: "なだらかな山並みで、良質な石炭が産出されます。"
        },
        {
            q: "アメリカ合衆国の中央部を北から南へ流れ、メキシコ湾に注ぐ同国最長の川は？",
            choices: ["ミシシッピ川","アマゾン川","ナイル川","コロラド川"],
            a: "ミシシッピ川",
            comment: "流域には肥沃な平原が広がり、農業の中心地となっています。"
        },
        {
            q: "アメリカ合衆国とカナダの国境付近にある、世界最大級の淡水湖群を何というか？",
            choices: ["五大湖","カスピ海","ビクトリア湖","バイカル湖"],
            a: "五大湖",
            comment: "スペリオル湖、ミシガン湖、ヒューロン湖、エリー湖、オンタリオ湖の5つです。"
        },
        {
            q: "アメリカ南東部にある、北回帰線に近い温暖な半島は？",
            choices: ["フロリダ半島","ユカタン半島","カリフォルニア半島","スカンディナビア半島"],
            a: "フロリダ半島",
            comment: "リゾート地として知られ、宇宙センターなどもあります。"
        },
        {
            q: "アメリカと南アメリカの間にある、多くの島々が浮かぶ海域は？",
            choices: ["カリブ海","地中海","バルト海","オホーツク海"],
            a: "カリブ海",
            comment: "キューバやジャマイカなどの国々（西インド諸島）があります。"
        },
        {
            q: "西経100度の経線は、アメリカの農業において何の境界とほぼ一致するか？",
            choices: ["年降水量500mm（湿潤と乾燥の境界）","年降水量1000mm","熱帯と温帯の境界","日付変更線"],
            a: "年降水量500mm（湿潤と乾燥の境界）",
            comment: "この線を境に、東側は畑作や酪農、西側は牧畜や灌漑農業が主になります。"
        },
        {
            q: "8月から9月にかけてメキシコ湾岸地域などを襲う、発達した熱帯低気圧を何というか？",
            choices: ["ハリケーン","タイフーン（台風）","サイクロン","トルネード"],
            a: "ハリケーン",
            comment: "日本でいう台風と同じような強烈な嵐です。",
            answerImg: "assets/images/geography/g_gw_5_26_hurricane_1773397738894.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "地域の気候や土壌などの自然条件に合わせて、最適な作物を栽培することを何というか？",
            choices: ["適地適作","二期作","輪作","単一耕作"],
            a: "適地適作",
            comment: "アメリカの農業の特徴の一つです。",
            answerImg: "assets/images/geography/g_gw_5_27_agriculture_1773397752071.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ロッキー山脈の東側に広がる、雨が少ない草原地帯（乾燥平原）を何というか？",
            choices: ["グレートプレーンズ","プレーリー","パンパ","サバンナ"],
            a: "グレートプレーンズ",
            comment: "主に牧畜や灌漑農業が行われています。",
            answerImg: "assets/images/geography/g_gw_5_28_great_plains_1773397776230.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ミシシッピ川の西からロッキー山脈にかけて広がる、かつて大草原だった肥沃な地域は？",
            choices: ["プレーリー","グレートプレーンズ","パンパ","セルバ"],
            a: "プレーリー",
            comment: "小麦やトウモロコシの大産地となっています。",
            answerImg: "assets/images/geography/g_gw_5_29_prairie_1773397792532.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "五大湖の南から西にかけて広がる、世界有数のトウモロコシ栽培地域を何と呼ぶか？",
            choices: ["コーンベルト","小麦地帯","綿花地帯","酪農地帯"],
            a: "コーンベルト",
            comment: "大豆も多く栽培され、家畜の飼料となります。"
        },
        {
            q: "かつてアメリカ南部で黒人奴隷を使って広大なプランテーションで作られた作物は？",
            choices: ["綿花","小麦","米","茶"],
            a: "綿花",
            comment: "現在は機械化が進んでいますが、かつては「綿花地帯（コットンベルト）」と呼ばれました。"
        },
        {
            q: "乾燥した地域で、地下水をくみ上げてスプリンクラーで円形に散水する灌漑方式を何というか？",
            choices: ["センターピボット","棚田","点滴灌漑","焼畑"],
            a: "センターピボット",
            comment: "空から見ると巨大な緑の円形農地が見えます。"
        },
        {
            q: "肉牛を出荷前に集中して肥育するための施設を何というか？",
            img: "assets/images/geography/geo_cow_1771577030990.png",
            choices: ["フィードロット","サイロ","牧場","ロデオ"],
            a: "フィードロット",
            comment: "効率よく肉を生産するための大規模なシステムです。"
        },
        {
            q: "アメリカ合衆国南西部のコロラド川に削られてできた、世界的に有名な大峡谷は？",
            img: "assets/images/geography/gw_namerica_grandcanyon_1771578535886.png",
            choices: ["グランドキャニオン","グレートバリアリーフ","イグアスの滝","ナイアガラの滝"],
            a: "グランドキャニオン",
            comment: "長い年月をかけて川が大地を削った、壮大な自然景観です。"
        },
        {
            q: "農産物の生産だけでなく、加工・流通・販売までを一体的に行う農業関連産業を何というか？",
            choices: ["アグリビジネス","バイオテクノロジー","フェアトレード","モノカルチャー"],
            a: "アグリビジネス",
            comment: "巨大な穀物商社などが世界的な影響力を持っています。",
            answerImg: "assets/images/geography/g_gw_5_30_agribusiness_1773397805643.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "世界の穀物取引に巨大な影響力を持つ、多国籍の穀物商社を総称して何というか？",
            choices: ["穀物メジャー","GAFA","財閥","コングロマリット"],
            a: "穀物メジャー",
            comment: "カーギル社などが有名です。"
        },
        {
            q: "アメリカでかつて工業の中心だった北緯37度以北の地域から、近年工場が移転している南部の地域を何というか？",
            choices: ["サンベルト","ラストベルト","コーンベルト","シリコンバレー"],
            a: "サンベルト",
            comment: "温暖な気候、安価な労働力や土地、石油資源などを背景に発展しました。"
        },
        {
            q: "サンフランシスコ郊外にある、ICT（情報通信技術）関連の企業が集中している地域は？",
            choices: ["シリコンバレー","ハリウッド","ウォール街","デトロイト"],
            a: "シリコンバレー",
            comment: "GoogleやAppleなどの世界的なIT企業が集まっています。"
        },
        {
            q: "五大湖周辺のデトロイトでかつて盛んだった、アメリカを象徴する産業は？",
            choices: ["自動車産業","航空宇宙産業","繊維産業","映画産業"],
            a: "自動車産業",
            comment: "近年は日本車などとの競争や工場の海外移転で変化しています。"
        },
        {
            q: "ヒューストンなどで盛んな、NASAの宇宙センターなどがある産業は？",
            choices: ["航空宇宙産業","自動車産業","電子産業","製鉄業"],
            a: "航空宇宙産業",
            comment: "広大な土地と晴天率の高さが適していました。"
        },
        {
            q: "世界中の国々に拠点を置き、国境を越えて活動する巨大企業を何というか？",
            choices: ["多国籍企業","国営企業","中小企業","ベンチャー企業"],
            a: "多国籍企業",
            comment: "生産コストの安い国に工場を置くなど、世界規模で活動します。"
        },
        {
            q: "アメリカ合衆国は、世界中から多くの人々が移り住んでできたことから何と呼ばれるか？",
            choices: ["移民の国","ゆりかごの国","常夏の国","太陽の国"],
            a: "移民の国",
            comment: "建国以来、ヨーロッパやアフリカ、アジアなどから多くの移民を受け入れてきました。"
        },
        {
            q: "近年アメリカで急増している、メキシコやカリブ海諸国などからのスペイン語を話す移民を何というか？",
            choices: ["ヒスパニック","ネイティブ・アメリカン","ワスプ（WASP）","アングロサクソン"],
            a: "ヒスパニック",
            comment: "人口の約2割近くを占め、スペイン語の看板なども増えています。"
        },
        {
            q: "かつてのアメリカ社会は、多様な文化が溶け合うとして何に例えられたか？",
            choices: ["人種のるつぼ","人種のサラダボウル","人種のモザイク","人種のパズル"],
            a: "人種のるつぼ",
            comment: "「メルティング・ポット」と呼ばれました。"
        },
        {
            q: "現在のアメリカ社会は、それぞれの文化の独自性を尊重するとして何に例えられるか？",
            choices: ["人種のサラダボウル","人種のるつぼ","人種のシチュー","人種のサンドイッチ"],
            a: "人種のサラダボウル",
            comment: "野菜（文化）が混ざり合いながらも、それぞれの味（個性）を残している状態です。"
        },
        {
            q: "アメリカの先住民族を何と呼ぶか？（コロンブスがインド人と間違えたことに由来する呼称もあるが現在は下記が一般的）",
            choices: ["ネイティブ・アメリカン","アボリジニ","マオリ","イヌイット"],
            a: "ネイティブ・アメリカン",
            comment: "以前は「インディアン」と呼ばれていました。"
        },
        {
            q: "ボストンからワシントンD.C.にかけての、巨大都市が連なった地域を何というか？",
            choices: ["メガロポリス（巨帯都市）","メトロポリス","ニュータウン","ベッドタウン"],
            a: "メガロポリス（巨帯都市）",
            comment: "ニューヨーク、フィラデルフィアなど政治・経済の中枢が集中しています。"
        },
        {
            q: "世界中に広まっている、ハンバーガーやフライドチキンなどの食事スタイルを何というか？",
            choices: ["ファストフード","スローフード","エスニック料理","精進料理"],
            a: "ファストフード",
            comment: "手軽に短時間で食べられることから世界中で普及しました。"
        },
        {
            q: "カナダで英語とともに公用語となっている言語は？",
            choices: ["フランス語","スペイン語","ドイツ語","ポルトガル語"],
            a: "フランス語",
            comment: "特にケベック州にはフランス系住民が多く住んでいます。"
        },
        {
            q: "カナダの国旗に描かれている、同国の象徴ともいえる植物の葉は？",
            choices: ["カエデ（メープル）","サクラ","シダ","クローバー"],
            a: "カエデ（メープル）",
            comment: "メープルシロップの産地としても有名です。"
        },
        {
            q: "メキシコの公用語は何か？",
            choices: ["スペイン語","ポルトガル語","英語","フランス語"],
            a: "スペイン語",
            comment: "かつてスペインの植民地だったためです。"
        },
        {
            q: "アメリカ、カナダ、メキシコの3国間で結ばれている、自由貿易協定を何というか（新協定）？",
            choices: ["USMCA（米国・メキシコ・カナダ協定）","NAFTA","TPP","EU"],
            a: "USMCA（米国・メキシコ・カナダ協定）",
            comment: "旧NAFTA（北米自由貿易協定）が見直され、新しくなりました。"
        },
        {
            q: "メキシコとアメリカの国境付近で見られる、アメリカ企業の組み立て工場などを何というか？（発展）",
            choices: ["マキラドーラ","プランテーション","ポルダー","フィヨルド"],
            a: "マキラドーラ",
            comment: "安価な労働力を求めてアメリカ企業が進出しています。"
        },
        {
            q: "ニューヨークにある、世界の金融の中心地とされる街路は？",
            choices: ["ウォール街","ブロードウェイ","5番街","タイムズスクエア"],
            a: "ウォール街",
            comment: "世界恐慌のきっかけとなった場所でもあります。"
        },
        {
            q: "アメリカで開発された、地下の岩盤層に含まれる天然ガスを何というか？",
            choices: ["シェールガス","天然ガスハイドレート","バイオガス","LPガス"],
            a: "シェールガス",
            comment: "新しい掘削技術により生産量が急増し「シェール革命」と呼ばれました。"
        },
        {
            q: "世界最大のスーパーマーケットチェーンなどを生んだ、大量に仕入れて安く売る仕組みは？",
            choices: ["チェーンストア（流通革命）","個人商店","行商","闇市"],
            a: "チェーンストア（流通革命）",
            comment: "ウォルマートなどが代表的です。"
        },
        {
            q: "北アメリカ大陸の五大湖周辺や東海岸の気候は？",
            choices: ["冷帯（亜寒帯）湿潤気候","地中海性気候","熱帯雨林気候","砂漠気候"],
            a: "冷帯（亜寒帯）湿潤気候",
            comment: "冬は寒さが厳しく、夏は比較的涼しいです（南部は温暖湿潤気候）。"
        },
        {
            q: "アメリカ合衆国の首都は？",
            choices: ["ワシントンD.C.","ニューヨーク","ロサンゼルス","シカゴ"],
            a: "ワシントンD.C.",
            comment: "政治の中心地です（経済の中心はニューヨーク）。"
        },
        {
            q: "1960年代に公民権運動を指導した人物は？",
            choices: ["キング牧師","リンカーン","ケネディ","エジソン"],
            a: "キング牧師",
            comment: "「私には夢がある（I Have a Dream）」の演説で知られます。"
        },
        {
            q: "キューバ危機などで知られる、カリブ海の社会主義国は？",
            choices: ["キューバ","ジャマイカ","ハイチ","パナマ"],
            a: "キューバ",
            comment: "砂糖（サトウキビ）の生産が盛んです。",
            answerImg: "assets/images/geography/g_gw_5_31_cuba_1773397828437.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "北アメリカの中心に位置し、世界最大の経済力と農業生産力を持つこの国のなまえは？",
            img: "assets/images/geography/map_namerica_blank_1771577997657.png",
            choices: ["アメリカ合衆国","カナダ","メキシコ","ブラジル"],
            a: "アメリカ合衆国",
            comment: "首都はワシントンD.C.です。"
        },
        {
            q: "北アメリカ大陸の北部に位置し、世界で2番目に広い面積を持つ国は？",
            img: "assets/images/geography/map_namerica_blank_1771577997657.png",
            choices: ["カナダ","アメリカ合衆国","メキシコ","ロシア"],
            a: "カナダ",
            comment: "首都はオタワで、公用語は英語とフランス語です。"
        },
        {
            q: "北アメリカの南部にあり、スペイン語が公用語であるこの国のなまえは？",
            img: "assets/images/geography/map_namerica_blank_1771577997657.png",
            choices: ["メキシコ","アメリカ合衆国","カナダ","ブラジル"],
            a: "メキシコ",
            comment: "かつてアステカ文明が栄えました。"
        }
    ],
    "gw_6": [
        {
            q: "南アメリカ大陸の西部を、太平洋に沿って南北に走る険しい山脈は？",
            choices: ["アンデス山脈","ロッキー山脈","アルプス山脈","アトラス山脈"],
            a: "アンデス山脈",
            comment: "環太平洋造山帯に属し、標高6000mを超える山々があります。"
        },
        {
            q: "世界最大の流域面積を誇る、南アメリカ大陸北部を流れる川は？",
            img: "assets/images/geography/gw_samerica_amazon_1771578564099.png",
            choices: ["アマゾン川","ミシシッピ川","ナイル川","ラプラタ川"],
            a: "アマゾン川",
            comment: "流域には世界最大の熱帯雨林が広がっています。"
        },
        {
            q: "アマゾン川流域に広がる、密林（熱帯雨林）を何というか？",
            choices: ["セルバ","パンパ","サバンナ","ステップ"],
            a: "セルバ",
            comment: "「地球の肺」とも呼ばれますが、開発による破壊が進んでいます。"
        },
        {
            q: "アルゼンチン中部などに広がる、肥沃な温帯の草原を何というか？",
            choices: ["パンパ","セルバ","プレーリー","ステップ"],
            a: "パンパ",
            comment: "小麦の栽培や牛の牧畜が盛んです。"
        },
        {
            q: "アルゼンチンとウルグアイの国境を流れ、大西洋に注ぐ大きな河口を持つ川は？",
            choices: ["ラプラタ川","アマゾン川","オリノコ川","パラナ川"],
            a: "ラプラタ川",
            comment: "河口部はエスチュアリー（三角江）となっており、良港が発達しています。"
        },
        {
            q: "数年に一度、ペルー沖の海水温が異常に高くなり、世界的な以上気象の原因ともなる現象は？",
            choices: ["エルニーニョ現象","ラニーニャ現象","フェーン現象","ヒートアイランド現象"],
            a: "エルニーニョ現象",
            comment: "本来は冷たい海域ですが、暖かくなることで魚が獲れなくなるなどの被害も出ます。",
            answerImg: "assets/images/geography/g_gw_6_32_el_nino_1773397840356.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "13世紀頃からアンデス山脈中心に栄え、16世紀にスペインに滅ぼされた帝国は？",
            choices: ["インカ帝国","アステカ帝国","マヤ文明","ローマ帝国"],
            a: "インカ帝国",
            comment: "クスコを首都とし、高度な石造建築技術や段々畑を持っていました。"
        },
        {
            q: "「空中都市」とも呼ばれる、アンデス山脈の山中にあるインカ帝国の遺跡は？",
            choices: ["マチュピチュ","ナスカの地上絵","テオティワカン","アンコールワット"],
            a: "マチュピチュ",
            comment: "世界遺産に登録されており、多くの観光客が訪れます。"
        },
        {
            q: "16世紀以降、南アメリカの多くの地域を植民地として支配した国は？",
            choices: ["スペイン","ポルトガル","イギリス","フランス"],
            a: "スペイン",
            comment: "ブラジルを除くほとんどの国がスペイン領でした。"
        },
        {
            q: "ブラジルを植民地として支配し、現在も同国で公用語となっている言語の国は？",
            choices: ["ポルトガル","スペイン","フランス","オランダ"],
            a: "ポルトガル",
            comment: "南アメリカで唯一のポルトガル語圏です。"
        },
        {
            q: "ヨーロッパ系の白人と先住民（インディオ）との混血の人々を何というか？",
            choices: ["メスチソ","ムラート","ザンボ","クリオーリョ"],
            a: "メスチソ",
            comment: "南アメリカの多くの国で人口の大きな割合を占めています。"
        },
        {
            q: "南アメリカの先住民を総称して何と呼ぶか？（コロンブスの誤解に由来する呼称）",
            choices: ["インディオ","インディアン","アボリジニ","マオリ"],
            a: "インディオ",
            comment: "ネイティブ・アメリカンとも呼ばれますが、中南米ではインディオという呼称も一般的です。"
        },
        {
            q: "アンデス地域などで先住民が着用する、四角い布の真ん中に穴を開けて頭からかぶる伝統的な衣服は？",
            img: "assets/images/geography/geo_poncho_1771576832748.png",
            choices: ["ポンチョ","サリー","アオザイ","チャドル"],
            a: "ポンチョ",
            comment: "防寒や雨よけに優れ、アルパカなどの毛で作られます。"
        },
        {
            q: "特定の農産物や鉱産資源の生産・輸出に依存する、かつての南米諸国に多く見られた経済構造は？",
            choices: ["モノカルチャー経済","プランテーション農業","加工貿易","中継貿易"],
            a: "モノカルチャー経済",
            comment: "コーヒーや銅など、一つの品目に頼りすぎると経済が不安定になります。",
            answerImg: "assets/images/geography/g_gw_6_33_monoculture_1773397853842.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "サトウキビやトウモロコシなどの植物を原料として作られる、自動車などの燃料を何というか？",
            choices: ["バイオエタノール","シェールガス","天然ガス","化石燃料"],
            a: "バイオエタノール",
            comment: "ブラジルではサトウキビから作られ、ガソリンに混ぜて使われます。"
        },
        {
            q: "アルゼンチン、ブラジル、パラグアイ、ウルグアイなどで結成された、地域経済統合組織は？",
            choices: ["MERCOSUR（南米南部共同市場）","USMCA","EU","ASEAN"],
            a: "MERCOSUR（南米南部共同市場）",
            comment: "域内の関税撤廃や対外共通関税などを目指しています。"
        },
        {
            q: "アンデス山脈で放牧されている、ラクダ科の動物は？（毛織物の原料や荷運び用）",
            img: "assets/images/geography/geo_alpaca_1771576964998.png",
            choices: ["リャマ・アルパカ","羊・ヤギ","牛・馬","ラクダ・ロバ"],
            a: "リャマ・アルパカ",
            comment: "高地に適応した家畜として古くから利用されています。"
        },
        {
            q: "南アメリカ大陸で最大の面積と人口を持ち、BRICSの一員でもある国は？",
            choices: ["ブラジル","アルゼンチン","チリ","コロンビア"],
            a: "ブラジル",
            comment: "コーヒー豆や鉄鉱石の生産でも世界有数です。"
        },
        {
            q: "ブラジル高原などで栽培が盛んな、世界一の生産量を誇る農産物は？",
            choices: ["コーヒー豆","小麦","茶","綿花"],
            a: "コーヒー豆",
            comment: "「サンパウロ」などが集散地として発展しました。"
        },
        {
            q: "ブラジルなどで多く産出される、鉄の原料となる鉱産資源は？",
            choices: ["鉄鉱石","銅","ボーキサイト","銀"],
            a: "鉄鉱石",
            comment: "カラジャス鉱山などが有名で、日本にも多く輸出されています。"
        },
        {
            q: "南北に細長い国土を持ち、銅の生産量が世界一の国は？",
            choices: ["チリ","ペルー","アルゼンチン","エクアドル"],
            a: "チリ",
            comment: "アンデス山脈沿いに鉱山が多くあります。"
        },
        {
            q: "かつてインカ帝国の中心地であり、銀や銅の産出も多い国は？",
            choices: ["ペルー","ボリビア","コロンビア","ベネズエラ"],
            a: "ペルー",
            comment: "首都はリマ。魚粉（アンチョビ）の生産も盛んです。"
        },
        {
            q: "アルゼンチンの主食であり、世界的な輸出品でもある穀物は？",
            choices: ["小麦","米","ライ麦","そば"],
            a: "小麦",
            comment: "パンパで大規模に栽培されています。"
        },
        {
            q: "かつてブラジルに、多くの日本人が移住した目的は主に何の栽培のためか？",
            choices: ["コーヒー","ゴム","サトウキビ","大豆"],
            a: "コーヒー",
            comment: "現在、ブラジルには世界最大の日系人社会があります（約200万人）。"
        },
        {
            q: "アマゾンの熱帯雨林開発のために建設された、内陸部を横断する道路を何というか？",
            choices: ["トランスアマゾニアンハイウェー","パンアメリカンハイウェー","シルクロード","ルート６６"],
            a: "トランスアマゾニアンハイウェー",
            comment: "開発が進む一方で、環境破壊や先住民への影響も問題視されています。"
        },
        {
            q: "ブラジルで近年生産が急増している、食用油や飼料の原料となる作物は？",
            choices: ["大豆","トウモロコシ","ひまわり","アブラヤシ"],
            a: "大豆",
            comment: "セラードと呼ばれる地域などの開発により生産が増えています。"
        },
        {
            q: "南アメリカ原産のイモ類で、タピオカの原料にもなるものは？",
            choices: ["キャッサバ（マニオク）","ジャガイモ","サツマイモ","タロイモ"],
            a: "キャッサバ（マニオク）",
            comment: "熱帯地域で広く栽培され、主食の一つとなっています。"
        },
        {
            q: "赤道直下の国だが、高地にあるため春のように涼しい首都を持つ国は？（キト、ボゴタなど）",
            choices: ["エクアドル・コロンビア","ブラジル・アルゼンチン","チリ・パラグアイ","ウルグアイ・ベネズエラ"],
            a: "エクアドル・コロンビア",
            comment: "低緯度でも標高が高いと気温が下がる「高山気候」を利用して常春のような気候になります。"
        },
        {
            q: "ブラジルの首都はどこか？（リオデジャネイロから内陸部に遷都された）",
            choices: ["ブラジリア","リオデジャネイロ","サンパウロ","サルバドール"],
            a: "ブラジリア",
            comment: "内陸部の開発を進めるために建設された計画都市で、飛行機の形をしています。"
        },
        {
            q: "アルゼンチンの首都で、「南米のパリ」とも呼ばれる美しい街並みの都市は？",
            choices: ["ブエノスアイレス","サンティアゴ","モンテビデオ","ラパス"],
            a: "ブエノスアイレス",
            comment: "ラプラタ川の河口に位置します。"
        },
        {
            q: "南アメリカの多くの国で信仰されている宗教は？",
            img: "assets/images/history/h_ancient_christianity_1772414580245.png",
            choices: ["キリスト教（カトリック）","キリスト教（プロテスタント）","イスラム教","仏教"],
            a: "キリスト教（カトリック）",
            comment: "スペインやポルトガルなど、カトリック教国の植民地だった影響です。"
        },
        {
            q: "チリ北部にある、世界で最も乾燥した砂漠の一つとされる砂漠は？",
            choices: ["アタカマ砂漠","パタゴニア砂漠","ナミブ砂漠","ゴビ砂漠"],
            a: "アタカマ砂漠",
            comment: "銅鉱山が多く分布しています。",
            answerImg: "assets/images/geography/g_gw_6_34_atacama_1773397877053.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ベネズエラが加盟している、石油輸出国機構の略称は？",
            choices: ["OPEC","WTO","WHO","NATO"],
            a: "OPEC",
            comment: "南アメリカ有数の産油国です。"
        },
        {
            q: "南アメリカで面積が最も広く、アマゾン川が流れるこの国のなまえは？",
            img: "assets/images/geography/map_samerica_blank_1771578045409.png",
            choices: ["ブラジル","アルゼンチン","チリ","ペルー"],
            a: "ブラジル",
            comment: "ポルトガル語が公用語となっています。"
        },
        {
            q: "南アメリカ大陸の南部にあり、パンパと呼ばれる大草原が広がる国は？",
            img: "assets/images/geography/map_samerica_blank_1771578045409.png",
            choices: ["アルゼンチン","ブラジル","チリ","ペルー"],
            a: "アルゼンチン",
            comment: "牛肉や小麦の生産が盛んです。"
        },
        {
            q: "南アメリカ大陸の西岸に沿って、南北に細長く伸びている国は？",
            img: "assets/images/geography/map_samerica_blank_1771578045409.png",
            choices: ["チリ","アルゼンチン","ペルー","コロンビア"],
            a: "チリ",
            comment: "銅の生産量が世界一です。"
        }
    ],
    "gw_7": [
        {
            q: "オセアニア州に含まれる、世界最小の大陸は？",
            choices: ["オーストラリア大陸","ユーラシア大陸","南極大陸","南アメリカ大陸"],
            a: "オーストラリア大陸",
            comment: "日本の約20倍の面積がありますが、人口は日本の約4分の1程度です。"
        },
        {
            q: "オーストラリアの東側に連なる、険しい山脈は？",
            choices: ["グレートディバイディング山脈","アルプス山脈","アンデス山脈","ロッキー山脈"],
            a: "グレートディバイディング山脈",
            comment: "「大分水嶺」とも呼ばれ、雨を降らせる風を遮るため内陸部は乾燥します。"
        },
        {
            q: "オーストラリア北東岸に広がる、世界最大のサンゴ礁地帯は？",
            choices: ["グレートバリアリーフ","沖縄トラフ","ガラパゴス諸島","マリアナ海溝"],
            a: "グレートバリアリーフ",
            comment: "全長約2000kmに及び、世界遺産にも登録されています。"
        },
        {
            q: "オーストラリア内陸部にある、世界最大級の一枚岩は？（先住民の聖地）",
            img: "assets/images/geography/gw_oceania_uluru_1771578587441.png",
            choices: ["ウルル（エアーズロック）","ガンガラーの谷","グランドキャニオン","マウントクック"],
            a: "ウルル（エアーズロック）",
            comment: "先住民アボリジニの聖地であり、現在は登山が禁止されています。"
        },
        {
            q: "オーストラリアの大部分を占める気候帯は？",
            choices: ["乾燥帯","熱帯","冷帯","温帯"],
            a: "乾燥帯",
            comment: "内陸部（アウトバック）には広大な砂漠が広がっています。"
        },
        {
            q: "オーストラリアの先住民族を何というか？",
            choices: ["アボリジニ","マオリ","インディオ","イヌイット"],
            a: "アボリジニ",
            comment: "独自の文化を持っていましたが、イギリス人の入植により迫害されました。"
        },
        {
            q: "18世紀後半からオーストラリアを植民地として支配した国は？",
            choices: ["イギリス","フランス","オランダ","スペイン"],
            a: "イギリス",
            comment: "国旗にもユニオンジャック（イギリス国旗）が描かれています。"
        },
        {
            q: "かつてオーストラリアでとられていた、白人以外の移民を制限する政策は？",
            choices: ["白豪主義","アパルトヘイト","鎖国政策","モンロー主義"],
            a: "白豪主義",
            comment: "1970年代に廃止され、現在は多文化社会を目指しています。"
        },
        {
            q: "多様な民族や文化が共生することを目指す社会を何というか？",
            choices: ["多文化社会","格差社会","情報化社会","高齢化社会"],
            a: "多文化社会",
            comment: "アジアからの移民も増え、多様性を尊重する動きが進んでいます。"
        },
        {
            q: "オーストラリアで盛んな、地下水を掘り抜き井戸でくみ上げて行う牧畜は？",
            choices: ["羊や牛の放牧","豚の飼育","鶏の養鶏","ラクダの放牧"],
            a: "羊や牛の放牧",
            comment: "牛は肉牛として、羊は羊毛（メリノ種）や肉として輸出されます。"
        },
        {
            q: "オーストラリア北西部で露天掘りによって大規模に採掘される鉱産資源は？",
            choices: ["鉄鉱石","石炭","銅","金"],
            a: "鉄鉱石",
            comment: "日本や中国などに大量に輸出されています。"
        },
        {
            q: "オーストラリア東部で多く産出され、日本にも輸出されている燃料資源は？",
            choices: ["石炭","石油","ウラン","天然ガス"],
            a: "石炭",
            comment: "良質な石炭がとれる炭田があります。"
        },
        {
            q: "オーストラリア北部で産出される、アルミニウムの原料となる鉱石は？",
            choices: ["ボーキサイト","鉄鉱石","銅鉱石","ダイヤモンド"],
            a: "ボーキサイト",
            comment: "赤土のような見た目をしています。"
        },
        {
            q: "1960年代までオーストラリアの最大の貿易相手国だったが、現在その地位が低下した国は？",
            choices: ["イギリス","アメリカ","日本","中国"],
            a: "イギリス",
            comment: "イギリスがEU（EC）に加盟したことなどにより、アジアとの結びつきを強めました。"
        },
        {
            q: "現在、オーストラリアの最大の貿易相手国となっている国は？",
            choices: ["中国","日本","アメリカ","インド"],
            a: "中国",
            comment: "鉄鉱石などの資源を大量に輸出しています。"
        },
        {
            q: "日本とオーストラリアなど、季節が逆になることを利用した貿易の利点は？",
            choices: ["端境期（作物がとれない時期）に野菜などを供給できる","同じ作物を一年中同じ場所で作れる","輸送コストが安くなる","品質が変わらない"],
            a: "端境期（作物がとれない時期）に野菜などを供給できる",
            comment: "冬の日本に、夏のアーストラリアからアスパラガスなどが届きます。"
        },
        {
            q: "ニュージーランドの北島・南島などが属する、地震や火山が多い造山帯は？",
            choices: ["環太平洋造山帯","アルプス・ヒマラヤ造山帯","安定陸塊","古期造山帯"],
            a: "環太平洋造山帯",
            comment: "温泉を利用した地熱発電も行われています。",
            answerImg: "assets/images/geography/g_gw_7_35_pacific_ring_1773397893610.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ニュージーランドの先住民族を何というか？",
            choices: ["マオリ","アボリジニ","ポリネシアン","メラネシアン"],
            a: "マオリ",
            comment: "独自の文化（ハカなど）が尊重され、公用語の一つにもなっています。"
        },
        {
            q: "ニュージーランドで人口よりも飼育数の方が多い家畜は？",
            img: "assets/images/geography/geo_sheep_1771577007001.png",
            choices: ["羊","馬","豚","ヤギ"],
            a: "羊",
            comment: "羊肉や羊毛、酪農製品が重要な輸出品です。"
        },
        {
            q: "太平洋に点在する島々は、ミクロネシア、メラネシアン、あと一つは何という地域に分けられるか？",
            choices: ["ポリネシア","インドネシア","マレーシア","オーストラリア"],
            a: "ポリネシア",
            comment: "ハワイやニュージーランドもポリネシアに含まれます。"
        },
        {
            q: "サンゴ礁の島々など、標高が低いために地球温暖化による海面上昇の危機にある国々は？",
            choices: ["ツバルやキリバスなどの島国","日本やイギリスなどの島国","オーストラリアなどの大陸","アンデス山脈の国々"],
            a: "ツバルやキリバスなどの島国",
            comment: "国土の水没や井戸水の塩害などが深刻な問題となっています。",
            answerImg: "assets/images/geography/g_gw_7_36_tuvalu_1773397909750.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "オセアニアの島国にとって、貴重な外貨獲得源となっている産業は？",
            choices: ["観光業","自動車産業","精密機械工業","金融業"],
            a: "観光業",
            comment: "美しい海や自然を求めて世界中から観光客が訪れます。"
        },
        {
            q: "日本とオーストラリアは経度が近いため、どういった特徴があるか？",
            choices: ["時差が少ない（1～2時間程度）","季節が同じ","気候が同じ","言語が同じ"],
            a: "時差が少ない（1～2時間程度）",
            comment: "ビジネスや旅行での連絡がとりやすい利点があります。"
        },
        {
            q: "オーストラリアの首都はどこか？（シドニーとメルボルンの間の計画都市）",
            choices: ["キャンベラ","シドニー","メルボルン","パース"],
            a: "キャンベラ",
            comment: "二大都市の対立を避けるために建設されました。"
        },
        {
            q: "ニュージーランドの首都はどこか？",
            choices: ["ウェリントン","オークランド","クライストチャーチ","クイーンズタウン"],
            a: "ウェリントン",
            comment: "世界で最も南にある首都といわれます。"
        },
        {
            q: "オーストラリアの国旗にある、南半球で見られる星座は？",
            choices: ["南十字星（サザンクロス）","オリオン座","北斗七星","カシオペア座"],
            a: "南十字星（サザンクロス）",
            comment: "ニュージーランドの国旗にも描かれています。"
        },
        {
            q: "オーストラリアが加盟している、アジア太平洋地域の経済協力会議は？",
            choices: ["APEC（アジア太平洋経済協力）","ASEAN","EU","OPEC"],
            a: "APEC（アジア太平洋経済協力）",
            comment: "環太平洋の国々で経済的な結びつきを強めています。"
        },
        {
            q: "オーストラリアの内陸部で、医師が飛行機を使って巡回診療を行う仕組みを何というか？",
            choices: ["フライングドクター","ドクターヘリ","遠隔医療","訪問看護"],
            a: "フライングドクター",
            comment: "広大な国土で医療を届けるための工夫です。"
        },
        {
            q: "若い人が海外で働きながら長期滞在できる制度で、オーストラリアなどが人気なのは？",
            choices: ["ワーキングホリデー","留学","ホームステイ","インターンシップ"],
            a: "ワーキングホリデー",
            comment: "日本との間で協定が結ばれており、多くの若者が利用しています。"
        },
        {
            q: "オーストラリアの乾燥地域で見られる、地面を掘り下げて作られた住居を何というか？",
            choices: ["地下住居（ダグ・アウト・ハウス）","高床式倉庫","ゲル","イグルー"],
            a: "地下住居（ダグ・アウト・ハウス）",
            comment: "オパール採掘地であるクーバーペディなどが有名で、暑さを避けるためです。"
        },
        {
            q: "オセアニア州で最も広い面積を持ち、鉄鉱石などの資源が豊富なこの国のなまえは？",
            img: "assets/images/geography/map_oceania_blank_1771577958434.png",
            choices: ["オーストラリア","ニュージーランド","パプアニューギニア","インドネシア"],
            a: "オーストラリア",
            comment: "カンガルーやコアラなどの独自の動物が生息しています。"
        },
        {
            q: "オーストラリアの南東に位置し、北島と南島からなる島国は？",
            img: "assets/images/geography/map_oceania_blank_1771577958434.png",
            choices: ["ニュージーランド","オーストラリア","パプアニューギニア","フィジー"],
            a: "ニュージーランド",
            comment: "羊の飼育が盛んで、マオリの文化があります。"
        },
        {
            q: undefined,
            comment: "地震や火山活動が活発な地域です。"
        },
        {
            q: "ヨーロッパのアルプス山脈からアジアのヒマラヤ山脈へ続く造山帯は？",
            choices: ["アルプス・ヒマラヤ造山帯","環太平洋造山帯","アパラチア造山帯","ウラル造山帯"],
            a: "アルプス・ヒマラヤ造山帯",
            comment: "高く険しい山脈が連なっています。"
        },
        {
            q: "地震の発生源となった地下の場所を何というか？",
            choices: ["震源","震央","マグニチュード","震度"],
            a: "震源",
            comment: "震源の真上の地表の地点を震央といいます。"
        },
        {
            q: "三陸海岸や志摩半島に見られる、入り江と岬が複雑に入り組んだ海岸地形は？",
            choices: ["リアス海岸","砂浜海岸","岩石海岸","フィヨルド"],
            a: "リアス海岸",
            comment: "波が静かなため、養殖業や港として利用されます。",
            answerImg: "assets/images/geography/g_gw_7_37_ria_coast_1773397934958.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "鳥取県などで見られる、風によって運ばれた砂が積もってできた丘状の地形は？",
            choices: ["砂丘","砂州","砂嘴","干潟"],
            a: "砂丘",
            comment: "鳥取砂丘は観光地としても有名で、らっきょうなどの栽培も行われます。"
        },
        {
            q: "川が山地から平地に出るところに、土砂が積もってできる扇形の地形は？",
            choices: ["扇状地","三角州","台地","盆地"],
            a: "扇状地",
            comment: "水はけが良いため、果樹園などに利用されることが多いです。",
            answerImg: "assets/images/geography/g_gw_7_38_alluvial_fan_1773397946889.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "川が海や湖に流れ出る河口付近に、細かい土砂が積もってできる地形は？",
            choices: ["三角州","扇状地","氾濫原","ラグーン"],
            a: "三角州",
            comment: "水はけが悪く湿地になりやすいため、水田として利用されることが多いです。",
            answerImg: "assets/images/geography/g_gw_7_39_river_delta_1773397961402.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "まわりを山に囲まれた、低く平らな土地を何というか？",
            choices: ["盆地","台地","平野","高原"],
            a: "盆地",
            comment: "京都盆地や甲府盆地などがあり、夏は暑く冬は寒いのが特徴です。"
        },
        {
            q: "太平洋岸を南から北へ流れる暖流で、カツオなどが獲れる世界的にも強い海流は？",
            choices: ["黒潮（日本海流）","親潮（千島海流）","対馬海流","リマン海流"],
            a: "黒潮（日本海流）",
            comment: "「日本海流」とも呼ばれます。"
        },
        {
            q: "太平洋岸を北から南へ流れる寒流で、プランクトンが豊富な海流は？",
            choices: ["親潮（千島海流）","黒潮（日本海流）","対馬海流","リマン海流"],
            a: "親潮（千島海流）",
            comment: "「魚を育てる親」という意味で名付けられました。"
        },
        {
            q: "暖流と寒流がぶつかる場所で、良い漁場となっている海域を何というか？",
            choices: ["潮目（潮境）","大陸棚","排他的経済水域","三角江"],
            a: "潮目（潮境）",
            comment: "三陸海岸沖などが有名です。"
        },
        {
            q: "大陸の沿岸に広がる、深さ約200mくらいまでの浅く平らな海底を何というか？",
            choices: ["大陸棚","海溝","海嶺","トラフ"],
            a: "大陸棚",
            comment: "日光が届くためプランクトンが多く、好漁場となります。"
        },
        {
            q: "石灰岩が雨水などに侵食されてできた、山口県の秋吉台のような地形を何というか？",
            choices: ["カルスト地形","火山地形","氷河地形","乾燥地形"],
            a: "カルスト地形",
            comment: "地下には鍾乳洞が見られることが多いです。"
        }
    ],
    "gj_1": [
        {
            q: "日本列島の東端に位置する島は？（東京都に属する）",
            choices: ["南鳥島","与那国島","沖ノ鳥島","父島"],
            a: "南鳥島",
            comment: "日本で最も早く日の出が見られる場所の一つです。"
        },
        {
            q: "日本列島の西端に位置する島は？（沖縄県に属する）",
            choices: ["与那国島","南鳥島","波照間島","石垣島"],
            a: "与那国島",
            comment: "台湾まで約110kmの距離にあります。"
        },
        {
            q: "領海の外側で、沿岸から200海里（約370km）以内の海域を何というか？",
            choices: ["排他的経済水域（EEZ）","公海","接続水域","領海"],
            a: "排他的経済水域（EEZ）",
            comment: "沿岸国が水産資源や鉱産資源を優先的に利用できる権利を持ちます。"
        },
        {
            q: "日本の国土面積は約38万㎢ですが、これはヨーロッパのどの国とほぼ同じか？",
            choices: ["ドイツ","フランス","イギリス","イタリア"],
            a: "ドイツ",
            comment: "世界で見ると約60番目の広さです。"
        },
        {
            q: "国の主権が及ぶ範囲である「領域」を構成する３つの要素は？",
            choices: ["領土・領海・領空","領土・領海・公海","領土・EEZ・領空","陸地・海洋・大気"],
            a: "領土・領海・領空",
            comment: "領空は、領土と領海の上空のことです。"
        },
        {
            q: "領海の幅は、沿岸から最大何海里までと定められているか？",
            choices: ["12海里（約22km）","200海里（約370km）","24海里（約44km）","3海里（約5.5km）"],
            a: "12海里（約22km）",
            comment: "かつては3海里でしたが、現在は多くの国が12海里を採用しています。"
        },
        {
            q: "本州の中央部を南北に縦断する、地質の境目となる大きな溝状の地形は？",
            choices: ["フォッサマグナ","中央構造線","日本海溝","南海トラフ"],
            a: "フォッサマグナ",
            comment: "西の縁は糸魚川・静岡構造線と呼ばれ、ここを境に東日本と西日本の地質が分かれます。"
        },
        {
            q: "本州の中央部に位置し、「日本の屋根」とも呼ばれる３つの山脈（日本アルプス）に含まれないのは？",
            choices: ["奥羽山脈","飛騨山脈","木曽山脈","赤石山脈"],
            a: "奥羽山脈",
            comment: "奥羽山脈は東北地方を縦断する山脈です。日本アルプスは飛騨（北）・木曽（中央）・赤石（南）山脈です。"
        },
        {
            q: "海洋プレートが大陸プレートの下に沈み込むことでできる、海底の深く溝状になった地形は？",
            choices: ["海溝","海嶺","トラフ","大陸棚"],
            a: "海溝",
            comment: "日本海溝などは水深8000mを超えます。"
        },
        {
            q: "西南日本の太平洋沖にある、水深4000m前後の海溝よりも浅い溝状の地形は？",
            choices: ["南海トラフ","日本海溝","伊豆・小笠原海溝","千島海溝"],
            a: "南海トラフ",
            comment: "巨大地震（南海トラフ地震）の発生が懸念されています。"
        },
        {
            q: "日本の気候に大きな影響を与える、夏と冬で吹く方向が変わる風を何というか？",
            choices: ["季節風（モンスーン）","偏西風","貿易風","海陸風"],
            a: "季節風（モンスーン）",
            comment: "夏は南東から、冬は北西から吹きます。"
        },
        {
            q: "冬に北西からの季節風の影響で、雪や雨が多くなるのは日本のどの地域か？",
            choices: ["日本海側","太平洋側","瀬戸内","中央高地"],
            a: "日本海側",
            comment: "日本海を渡る風が大量の水蒸気を含むためです。"
        },
        {
            q: "夏に南東からの季節風の影響で降水量が多くなり、冬は乾燥して晴天が続くのはどの地域か？",
            choices: ["太平洋側","日本海側","北海道","南西諸島"],
            a: "太平洋側",
            comment: "東京や大阪などの大都市はこの気候帯に含まれます。"
        },
        {
            q: "周囲を山地に囲まれているため、年間を通して降水量が少なく、夏と冬の気温差が大きい気候は？",
            choices: ["中央高地の気候","瀬戸内の気候","北海道の気候","南西諸島の気候"],
            a: "中央高地の気候",
            comment: "長野県などに見られる内陸性の気候です。"
        },
        {
            q: "中国山地と四国山地に挟まれ、年間を通して降水量が少なく温暖な気候は？",
            choices: ["瀬戸内の気候","中央高地の気候","日本海側の気候","太平洋側の気候"],
            a: "瀬戸内の気候",
            comment: "ため池が多く作られているのが特徴です。"
        },
        {
            q: "年間を通して気温と湿度が高く、降水量が多い沖縄などの気候は？",
            choices: ["南西諸島の気候","北海道の気候","太平洋側の気候","日本海側の気候"],
            a: "南西諸島の気候",
            comment: "亜熱帯気候に属し、冬でも温暖です。"
        },
        {
            q: "冬の寒さが厳しく、梅雨がなく、台風の影響も比較的少ない気候は？",
            choices: ["北海道の気候","東北の気候","北陸の気候","山陰の気候"],
            a: "北海道の気候",
            comment: "冷帯（亜寒帯）に属します。"
        },
        {
            q: "ある地域の人口を面積で割って求められる、人口の密集度合いを表す数値は？",
            choices: ["人口密度","人口増加率","出生率","高齢化率"],
            a: "人口密度",
            comment: "1㎢あたりの人数（人/㎢）で表されます。"
        },
        {
            q: "総人口に占める子どもの割合が低下し、高齢者の割合が増加する現象を何というか？",
            choices: ["少子高齢化","人口爆発","ドーナツ化現象","過密・過疎"],
            a: "少子高齢化",
            comment: "日本では世界に先駆けて進行しており、労働力不足や社会保障費の増大が課題です。"
        },
        {
            q: "1950年代以降、アジアやアフリカなどの発展途上国で起きている急激な人口増加を何というか？",
            choices: ["人口爆発","ベビーブーム","人口ボーナス","都市化"],
            a: "人口爆発",
            comment: "医療の発展などによる死亡率の低下などが原因です。"
        },
        {
            q: "電気、水道、ガスなど、生活に必要不可欠な供給網を何というか？",
            choices: ["ライフライン","インフラ","ホットライン","ネットワーク"],
            a: "ライフライン",
            comment: "災害時にはこれらの復旧が最優先されます。"
        },
        {
            q: "自然災害に備えて被害をできるだけ少なくしようとする取り組みを何というか？",
            choices: ["減災","防災","公助","復興"],
            a: "減災",
            comment: "災害を完全に防ぐこと（防災）だけでなく、起きた時の被害を最小限にする考え方です。"
        },
        {
            q: "災害時に、行政などの公的機関による支援・救助活動を何というか？",
            choices: ["公助","自助","共助","互助"],
            a: "公助",
            comment: "自らを助ける「自助」、地域で助け合う「共助」と合わせて重要です。"
        }
    ],
    "gj_2": [
        {
            q: "鉄の原料となる金属資源で、オーストラリアやブラジルが主な輸入先であるものは？",
            choices: ["鉄鉱石","銅","ボーキサイト","レアメタル"],
            a: "鉄鉱石",
            comment: "自動車や建築材料として大量に使われます。"
        },
        {
            q: "アルミニウムの原料となる鉱石で、オーストラリアやインドネシアから輸入しているものは？",
            choices: ["ボーキサイト","鉄鉱石","ウラン","石灰石"],
            a: "ボーキサイト",
            comment: "製錬に大量の電気を必要とするため「電気の缶詰」とも呼ばれます。"
        },
        {
            q: "天然ガスを零下162度まで冷却して液体にしたものを何というか？",
            choices: ["LNG（液化天然ガス）","LPG（液化石油ガス）","バイオエタノール","メタンハイドレート"],
            a: "LNG（液化天然ガス）",
            comment: "体積が600分の1になり、専用のタンカーで輸送されます。"
        },
        {
            q: "携帯電話やハイテク製品に不可欠な、埋蔵量が少なかったり抽出が難しい希少な金属を何というか？",
            choices: ["レアメタル（希少金属）","貴金属","ベースメタル","重金属"],
            a: "レアメタル（希少金属）",
            comment: "ニッケル、コバルト、リチウムなどが含まれます。"
        },
        {
            q: "かつて日本のエネルギーの主力だったが、現在はオーストラリアなどから輸入している「黒いダイヤ」と呼ばれる資源は？",
            choices: ["石炭","石油","天然ガス","ウラン"],
            a: "石炭",
            comment: "火力発電や製鉄の燃料として現在も重要です。"
        },
        {
            q: "エネルギー資源に占める各電源などの割合構成のことを何というか？",
            choices: ["エネルギーミックス","ベストミックス","カーボンニュートラル","電力自由化"],
            a: "エネルギーミックス",
            comment: "安定供給、環境適合、経済効率などを考慮して決定されます。"
        },
        {
            q: "石油や石炭などの化石燃料を大量に消費することで排出される、地球温暖化の原因となるガスは？",
            choices: ["二酸化炭素（CO2）","フロンガス","メタン","オゾン"],
            a: "二酸化炭素（CO2）",
            comment: "温室効果ガスの一種です。"
        },
        {
            q: "冷蔵庫やエアコンの冷媒として使われ、オゾン層を破壊する原因となったガスは？",
            choices: ["フロンガス","二酸化炭素","窒素酸化物","硫黄酸化物"],
            a: "フロンガス",
            comment: "現在は特定フロンの生産・使用が規制されています。"
        },
        {
            q: "有害な紫外線を吸収し、地上の生物を守る役割を果たしている大気の層は？",
            choices: ["オゾン層","電離層","対流圏","成層圏"],
            a: "オゾン層",
            comment: "上空20〜30km付近に存在します。"
        },
        {
            q: "都市部において、冷暖房や自動車の排熱、高層ビルなどにより、郊外より気温が高くなる現象は？",
            choices: ["ヒートアイランド現象","フェーン現象","エルニーニョ現象","ラニーニャ現象"],
            a: "ヒートアイランド現象",
            comment: "熱中症のリスクを高める要因にもなっています。"
        },
        {
            q: "工場や自動車から排出される硫黄酸化物や窒素酸化物が溶け込み、森林を枯らす原因となる雨は？",
            choices: ["酸性雨","集中豪雨","ゲリラ豪雨","氷雨"],
            a: "酸性雨",
            comment: "コンクリートの建物を溶かす被害も出ています。"
        },
        {
            q: "東京、大阪、名古屋とその周辺地域をまとめて何というか？",
            choices: ["三大都市圏","太平洋ベルト","メガロポリス","政令指定都市"],
            a: "三大都市圏",
            comment: "日本の人口の大部分がここに集中しています。"
        },
        {
            q: "札幌市、仙台市、広島市、福岡市のように、各地方の中心となり政治・経済の拠点となる都市は？",
            choices: ["地方中枢都市","政令指定都市","企業城下町","衛星都市"],
            a: "地方中枢都市",
            comment: "それぞれの地方ブロック（北海道、東北、中国、九州）の中心です。"
        },
        {
            q: "大都市の周辺に位置し、通勤・通学者の居住地としての役割を持つ都市を何というか？",
            choices: ["衛星都市（ベッドタウン）","地方中枢都市","工業都市","学園都市"],
            a: "衛星都市（ベッドタウン）",
            comment: "昼間の人口よりも夜間の人口の方が多くなる傾向があります。"
        },
        {
            q: "人口や産業が集中しすぎて、交通渋滞やゴミ問題などが発生している状態を何というか？",
            choices: ["過密","過疎","空洞化","ドーナツ化現象"],
            a: "過密",
            comment: "都市部特有の問題です。"
        },
        {
            q: "人口が減少しすぎて、防災や地域社会の維持が困難になっている状態を何というか？",
            choices: ["過疎","過密","スプロール現象","スラム化"],
            a: "過疎",
            comment: "農山村地域などで深刻化しています。"
        },
        {
            q: "人口50万人以上の都市で、政府から指定を受け、都道府県並みの権限を持つ都市を何というか？",
            choices: ["政令指定都市","中核市","特例市","特別区"],
            a: "政令指定都市",
            comment: "行政区（〇〇市△△区）が設置されます。"
        },
        {
            q: "都心部の人口が減少し、郊外の人口が増加することで、人口分布がドーナツ状になる現象は？",
            choices: ["ドーナツ化現象","スプロール現象","ヒートアイランド現象","インナーシティ問題"],
            a: "ドーナツ化現象",
            comment: "地価の高騰などが原因で起きました（近年は都心回帰も見られます）。"
        },
        {
            q: "都市の再開発などにより、一度郊外へ流出した人口が再び都心部に戻ってくる現象は？",
            choices: ["都心回帰","Uターン","Iターン","Jターン"],
            a: "都心回帰",
            comment: "高層マンションの建設などが背景にあります。"
        },
        {
            q: "第二次世界大戦後の1947〜1949年に起きた、出生数が急激に増えた時期を何というか？",
            choices: ["第一次ベビーブーム","高度経済成長期","バブル経済期","人口ボーナス期"],
            a: "第一次ベビーブーム",
            comment: "この時期に生まれた世代を団塊の世代と呼びます。"
        },
        {
            q: "米の生産量が消費量を上回ったため、水田での米作りを休ませたり他の作物を作らせたりした政策は？",
            choices: ["減反政策（生産調整）","農地改革","食管制度","六次産業化"],
            a: "減反政策（生産調整）",
            comment: "現在は廃止されていますが、飼料用米への転作などが進められています。"
        },
        {
            q: "同じ耕地で、1年間に2種類の作物を栽培すること（例：米のあとに麦）を何というか？",
            img: "assets/images/history/h_medieval_1_nimosaku.png",
            choices: ["二毛作","二期作","輪作","単作"],
            a: "二毛作",
            comment: "「毛」は作物の種類を意味します。"
        },
        {
            q: "同じ耕地で、1年間に同じ作物を2回栽培すること（例：沖縄や高知での米作り）を何というか？",
            choices: ["二期作","二毛作","連作","混合農業"],
            a: "二期作",
            comment: "温暖な気候を利用して行われます。"
        },
        {
            q: "大都市の周辺で、野菜や草花などを栽培し、新鮮なうちに市場へ出荷する農業は？",
            choices: ["近郊農業","輸送園芸農業","施設園芸農業","有機農業"],
            a: "近郊農業",
            comment: "輸送コストが安く済むメリットがあります。"
        },
        {
            q: "ビニールハウスや温室などの施設を利用して、野菜や果実などを栽培する農業は？",
            choices: ["施設園芸農業","近郊農業","露地栽培","有機栽培"],
            a: "施設園芸農業",
            comment: "季節に関係なく出荷でき、品質も管理しやすくなります。"
        },
        {
            q: "宮崎平野や高知平野で行われている、温暖な気候を利用して出荷時期を早める栽培方法は？",
            choices: ["促成栽培","抑制栽培","露地栽培","水耕栽培"],
            a: "促成栽培",
            comment: "冬から春にかけて、ピーマンやきゅうりなどを出荷します。"
        },
        {
            q: "長野県や群馬県の高冷地で行われている、涼しい気候を利用して出荷時期を遅らせる栽培方法は？",
            choices: ["抑制栽培","促成栽培","施設栽培","有機栽培"],
            a: "抑制栽培",
            comment: "夏にレタスやキャベツ（高原野菜）を出荷します。"
        },
        {
            q: "農業収入よりも、工場勤務や公務員などの農業以外の収入の方が多い農家を何というか？",
            choices: ["第二種兼業農家","第一種兼業農家","主業農家","専業農家"],
            a: "第二種兼業農家",
            comment: "日本の農家の多くを占めていましたが、近年は減少傾向にあります。"
        },
        {
            q: "化学肥料や農薬を使わず、堆肥などの有機肥料を使って作物を育てる栽培方法は？",
            choices: ["有機栽培（オーガニック）","促成栽培","抑制栽培","水耕栽培"],
            a: "有機栽培（オーガニック）",
            comment: "食の安全への関心の高まりから注目されています。"
        },
        {
            q: "魚介類を人工的に卵から稚魚まで育て、自然の海や川に放流し、大きくなってからとる漁業は？",
            choices: ["栽培漁業（育てる漁業）","養殖漁業","遠洋漁業","沖合漁業"],
            a: "栽培漁業（育てる漁業）",
            comment: "「とる漁業」から「育てる漁業」への転換が進められています。"
        },
        {
            q: "いけすや養殖場などで、魚介類を成魚になるまで人工的に育てる漁業は？",
            choices: ["養殖漁業","栽培漁業","沿岸漁業","沖合漁業"],
            a: "養殖漁業",
            comment: "真珠、カキ、ホタテ、ノリ、ハマチ、マダイなどが盛んです。"
        },
        {
            q: "海岸から遠く離れた海域で行い、数ヶ月から1年以上かけて行う漁業は？",
            choices: ["遠洋漁業","沖合漁業","沿岸漁業","定置網漁業"],
            a: "遠洋漁業",
            comment: "各国の200海里水域の設定などにより、漁獲量は減少しています。"
        },
        {
            q: "潮の満ち引きの差が大きい有明海などで見られる、干潮時に現れる砂や泥の土地を何というか？",
            choices: ["干潟","砂丘","リアス海岸","大陸棚"],
            a: "干潟",
            comment: "ムツゴロウなどの生物が生息し、ノリの養殖も盛んです。"
        },
        {
            q: "日本の国土の約3分の2を占める、豊富な資源は何か？",
            choices: ["森林","農地","宅地","湖沼"],
            a: "森林",
            comment: "フィンランドなどに次ぐ世界有数の森林国です。"
        },
        {
            q: "青森県の津軽半島などに分布し、日本三大美林の一つとされる天然の針葉樹は？",
            choices: ["青森ひば","秋田すぎ","木曽ひのき","屋久杉"],
            a: "青森ひば",
            comment: "腐りにくく、建築材として優れています。"
        },
        {
            q: "関東地方から九州北部にかけての太平洋側の沿岸部に形成された、工業が発達した帯状の地域は？",
            choices: ["太平洋ベルト","シリコンアイランド","工業団地","テクノポリス"],
            a: "太平洋ベルト",
            comment: "日本の工業生産額の多くがこの地域に集中しています。"
        },
        {
            q: "東京・神奈川を中心とし、機械工業や印刷業が盛んな、日本最大級の工業地帯は？",
            choices: ["京浜工業地帯","中京工業地帯","阪神工業地帯","北九州工業地対"],
            a: "京浜工業地帯",
            comment: "「京」は東京、「浜」は横浜を指します。"
        },
        {
            q: "愛知・三重・岐阜に広がり、自動車工業が特に盛んな、日本一の出荷額を誇る工業地帯は？",
            choices: ["中京工業地帯","京浜工業地帯","阪神工業地帯","瀬戸内工業地域"],
            a: "中京工業地帯",
            comment: "豊田市（自動車）や四日市市（石油化学）などが中心です。"
        },
        {
            q: "大阪・兵庫を中心とし、金属・化学・食品工業など多種多様な工業が発達している工業地帯は？",
            choices: ["阪神工業地帯","京浜工業地帯","中京工業地帯","北九州工業地帯"],
            a: "阪神工業地帯",
            comment: "中小企業の工場が多いのも特徴です。"
        },
        {
            q: "明治時代に八幡製鉄所が作られたことで発展したが、現在は自動車工場なども増えている工業地域は？",
            choices: ["北九州工業地域","北陸工業地域","東海工業地域","京葉工業地域"],
            a: "北九州工業地域",
            comment: "かつては四大工業地帯の一つでしたが、地位が低下し「地域」と呼ばれています。"
        },
        {
            q: "関東内陸部（栃木・群馬など）に広がり、自動車や電気機械の工場が多い工業地域は？",
            choices: ["北関東工業地域","京葉工業地域","東海工業地域","鹿島臨海工業地域"],
            a: "北関東工業地域",
            comment: "高速道路網の発達により工場が進出しました。"
        },
        {
            q: "千葉県の東京湾岸に位置し、石油化学コンビナートや製鉄所、火力発電所が並ぶ工業地域は？",
            choices: ["京葉工業地域","鹿島臨海工業地域","東海工業地域","北陸工業地域"],
            a: "京葉工業地域",
            comment: "化学工業の割合が高いのが特徴です。"
        },
        {
            q: "岡山県の水島地区や山口県の周南地区など、石油化学コンビナートが発達している工業地域は？",
            choices: ["瀬戸内工業地域","東海工業地域","北陸工業地域","北関東工業地域"],
            a: "瀬戸内工業地域",
            comment: "海上輸送の便利さを活かしています。"
        },
        {
            q: "工場が海外へ移転したことにより、国内の産業が衰退してしまう現象を何というか？",
            choices: ["産業の空洞化","ドーナツ化現象","貿易摩擦","デフレーション"],
            a: "産業の空洞化",
            comment: "円高や安い労働力を求めて海外進出が進んだことが原因です。"
        },
        {
            q: "原材料を輸入し、加工して製品を輸出する貿易の形態を何というか？",
            choices: ["加工貿易","中継貿易","自由貿易","保護貿易"],
            a: "加工貿易",
            comment: "資源の乏しい日本のかつての典型的な貿易スタイルでした。"
        },
        {
            q: "複数の路線が乗り入れ、地域の航空輸送の中心となる空港を何というか？",
            choices: ["ハブ空港","国際空港","地方空港","特定空域"],
            a: "ハブ空港",
            comment: "車輪の中心（ハブ）のように路線が放射状に伸びることから名付けられました。"
        },
        {
            q: "IC（集積回路）など、小型で軽量だが高価な製品を運ぶのに適している輸送手段は？",
            choices: ["航空輸送","海上輸送","鉄道輸送","自動車輸送"],
            a: "航空輸送",
            comment: "九州などの空港周辺にIC工場が集まる理由の一つです。"
        },
        {
            q: "石油や石炭、鉄鉱石など、重くて大量の物資を運ぶのに適している輸送手段は？",
            choices: ["海上輸送（船舶）","航空輸送","鉄道輸送","パイプライン"],
            a: "海上輸送（船舶）",
            comment: "輸送コストが最も安く済みます。"
        },
        {
            q: "1964年に東京・新大阪間で開業した、日本初の高速鉄道は？",
            choices: ["東海道新幹線","山陽新幹線","東北新幹線","北陸新幹線"],
            a: "東海道新幹線",
            comment: "東京オリンピックの開催に合わせて開業しました。"
        },
        {
            q: "小売業、サービス業、情報通信業などは、第何次産業に分類されるか？",
            choices: ["第三次産業","第二次産業","第一次産業","第四次産業"],
            a: "第三次産業",
            comment: "現在の日本で働く人の約7割がこの産業に従事しています。"
        },
        {
            q: "特定の農産物や鉱産資源（一次産品）の輸出に経済を依存している状態を何というか？",
            choices: ["モノカルチャー経済","プランテーション農業","開発独裁","フェアトレード"],
            a: "モノカルチャー経済",
            comment: "価格変動の影響を受けやすく、経済が不安定になりがちです。"
        },
        {
            q: "再生可能エネルギーのうち、植物や家畜の糞尿などの生物資源を燃料とする発電は？",
            choices: ["バイオマス発電","地熱発電","風力発電","太陽光発電"],
            a: "バイオマス発電",
            comment: "カーボンニュートラルなエネルギーとして期待されています。"
        },
        {
            q: "火山の地下にあるマグマの熱を利用して蒸気を作り、タービンを回す発電方法は？",
            choices: ["地熱発電","火力発電","原子力発電","水力発電"],
            a: "地熱発電",
            comment: "日本は火山国であるため、潜在的な資源量は多いです。"
        },
        {
            q: "ある2点間のへだたりを、移動にかかる時間で表したものを何というか？（例：「駅から徒歩5分」）",
            choices: ["時間距離","物理距離","直線距離","道のり"],
            a: "時間距離",
            comment: "交通機関の発達により、物理的な距離が変わらなくても時間距離は短縮されます。"
        }
    ],
    "gj_3": [
        {
            q: "九州地方の中央部を北東から南西に走る、険しい山地は？",
            img: "assets/images/geography/map_kyushu_blank_1771591728285.png",
            choices: ["九州山地","筑紫山地","中国山地","四国山地"],
            a: "九州山地",
            comment: "温暖で降水量が多く、林業や水力発電が盛んです。"
        },
        {
            q: "九州地方の北部（福岡・佐賀・大分）に広がる、かつて石炭産業で栄えた山地は？",
            choices: ["筑紫山地","九州山地","脊振山地","六甲山地"],
            a: "筑紫山地",
            comment: "なだらかな山地で、筑豊炭田などがありました。"
        },
        {
            q: "九州最大の河川で、「筑紫次郎」の異名を持つ川は？",
            img: "assets/images/geography/map_kyushu_blank_1771591728285.png",
            choices: ["筑後川","球磨川","大野川","遠賀川"],
            a: "筑後川",
            comment: "熊本・大分・福岡・佐賀を流れ、有明海に注ぎます。"
        },
        {
            q: "筑後川の下流に広がる、九州一の稲作地帯となっている平野は？",
            choices: ["筑紫平野","宮崎平野","熊本平野","佐賀平野"],
            a: "筑紫平野",
            comment: "有明海沿岸の干拓地も含みます。"
        },
        {
            q: "かつて筑紫平野などで見られた、網の目のように張り巡らされた用排水路を何というか？",
            choices: ["クリーク","水門","運河","干拓堤防"],
            a: "クリーク",
            comment: "農業用水の確保や洪水調整のために作られましたが、最近は減少しています。"
        },
        {
            q: "潮の満ち引きの差が大きく、広大な干潟が見られる九州北西部の海は？",
            img: "assets/images/history/h_medieval_5_ming.png",
            choices: ["有明海","不知火海","玄界灘","豊後水道"],
            a: "有明海",
            comment: "ムツゴロウなどの珍しい生物が生息し、ノリの養殖も日本一です。"
        },
        {
            q: "山の斜面や谷間の傾斜地に、階段状に作られた水田を何というか？",
            img: "assets/images/geography/geo_jp_tanada_1771590803814.png",
            choices: ["棚田（千枚田）","段々畑","プランテーション","輪中"],
            a: "棚田（千枚田）",
            comment: "美しい景観から観光地としても注目されています。"
        },
        {
            q: "熊本県北東部にある、世界最大級のカルデラを持つ火山は？",
            choices: ["阿蘇山","桜島","雲仙岳","霧島山"],
            a: "阿蘇山",
            comment: "「火の国」熊本のシンボルです。"
        },
        {
            q: "火山の噴火や陥没によってできた、大きな円形のくぼ地を何というか？",
            choices: ["カルデラ","シラス台地","盆地","火口湖"],
            a: "カルデラ",
            comment: "スペイン語で「大鍋」という意味です。"
        },
        {
            q: "鹿児島県の錦江湾（鹿児島湾）にある、現在も活発な火山活動を続けている山は？",
            choices: ["桜島","阿蘇山","霧島山","開聞岳"],
            a: "桜島",
            comment: "かつては島でしたが、大正時代の大噴火で大隅半島と陸続きになりました。"
        },
        {
            q: "1990年から噴火活動が続き、火砕流などによる大きな被害をもたらした長崎県の火山は？",
            choices: ["雲仙岳（普賢岳）","桜島","阿蘇山","新燃岳"],
            a: "雲仙岳（普賢岳）",
            comment: "平成新山という新しい溶岩ドームが形成されました。"
        },
        {
            q: "南九州に広がる、火山の噴出物や火山灰が厚く積もってできた台地を何というか？",
            choices: ["シラス台地","関東ローム層","カルスト地形","扇状地"],
            a: "シラス台地",
            comment: "水はけが良すぎるため稲作には不向きで、畑作や畜産が中心です。"
        },
        {
            q: "1993年に日本初の世界自然遺産として登録された、鹿児島県の島は？",
            choices: ["屋久島","種子島","奄美大島","徳之島"],
            a: "屋久島",
            comment: "樹齢数千年の「縄文杉」などの屋久杉で有名です。"
        },
        {
            q: "鉄砲伝来の地として知られ、現在は宇宙センターがある鹿児島県の島は？",
            choices: ["種子島","屋久島","奄美大島","沖永良部島"],
            a: "種子島",
            comment: "日本のロケット打ち上げの拠点となっています。"
        },
        {
            q: "サンゴ礁が発達し、温暖な亜熱帯気候が見られる南西諸島の県は？",
            img: "assets/images/history/h_modern_7_okinawa_sen_1772302848029.png",
            choices: ["沖縄県","鹿児島県","宮崎県","高知県"],
            a: "沖縄県",
            comment: "かつては琉球王国として栄えました。"
        },
        {
            q: "宮崎平野などで盛んな、温暖な気候を利用して野菜の出荷時期を早める栽培方法は？",
            choices: ["促成栽培","抑制栽培","近郊農業","施設園芸農業"],
            a: "促成栽培",
            comment: "きゅうりやピーマンなどが東京や大阪へ出荷されます。"
        },
        {
            q: "水はけの良いシラス台地で栽培が盛んな、デンプンや焼酎の原料となる作物は？",
            choices: ["さつまいも","じゃがいも","キャベツ","レタス"],
            a: "さつまいも",
            comment: "鹿児島県はさつまいもの生産量が日本一です。"
        },
        {
            q: "シラス台地で栽培が盛んな、静岡県に次ぐ生産量を誇る工芸作物は？",
            choices: ["茶","たばこ","綿花","こんにゃくいも"],
            a: "茶",
            comment: "知覧茶などが有名です。"
        },
        {
            q: "鹿児島県や宮崎県で非常に盛んな、豚、肉用牛、鶏などを育てる農業は？",
            choices: ["畜産","酪農","稲作","畑作"],
            a: "畜産",
            comment: "鹿児島県の畜産産出額は全国トップクラスです（ブロイラー、黒豚など）。"
        },
        {
            q: "熊本県の八代平野が主な産地である、畳表（たたみおもて）の原料となる植物は？",
            choices: ["い草","麻","綿","よし"],
            a: "い草",
            comment: "日本国内の生産量のほとんどを熊本県が占めています。"
        },
        {
            q: "有明海で最も盛んに行われている養殖業は？",
            choices: ["のり","真珠","かき","はまち"],
            a: "のり",
            comment: "遠浅の干潟を利用して行われます。"
        },
        {
            q: "1901年に操業を開始した、北九州工業地帯の発展の中心となった製鉄所は？",
            img: "assets/images/history/h_modern_4_yawata.png",
            choices: ["八幡製鉄所","釜石製鉄所","室蘭製鉄所","君津製鉄所"],
            a: "八幡製鉄所",
            comment: "現在は「明治日本の産業革命遺産」の一部として世界遺産に登録されています。"
        },
        {
            q: "かつて日本のエネルギー源の中心が石炭から石油へ転換したことを何というか？",
            choices: ["エネルギー革命","産業革命","燃料革命","高度経済成長"],
            a: "エネルギー革命",
            comment: "これにより筑豊炭田などの炭鉱は閉山しました。"
        },
        {
            q: "九州地方にIC（集積回路）工場が多く集まっていることから呼ばれる愛称は？",
            choices: ["シリコンアイランド","テクノアイランド","サイエンスアイランド","ICアイランド"],
            a: "シリコンアイランド",
            comment: "綺麗な水、空気、空港や高速道路の利便性が背景にあります。"
        },
        {
            q: "北九州市などが進めている、廃棄物をリサイクルして資源として活用し、ゴミをゼロにしようとする事業は？",
            choices: ["エコタウン事業","ニュータウン事業","スマートシティ構想","コンパクトシティ"],
            a: "エコタウン事業",
            comment: "かつての公害克服の経験が生かされています。"
        },
        {
            q: "廃棄物の発生を抑制し、再利用することでゴミをゼロにすることを目指す考え方は？",
            choices: ["ゼロエミッション","リサイクル","リユース","リデュース"],
            a: "ゼロエミッション",
            comment: "循環型社会の実現に向けた重要な概念です。"
        },
        {
            q: "四大公害病の一つで、熊本県の水俣湾沿岸で発生した公害病は？",
            choices: ["水俣病","イタイイタイ病","四日市ぜんそく","新潟水俣病"],
            a: "水俣病",
            comment: "工場排水に含まれていたメチル水銀が原因でした。"
        },
        {
            q: "プランクトンが異常発生し、海や川が赤褐色に染まる現象を何というか？",
            choices: ["赤潮","青潮","白化現象","汚濁"],
            a: "赤潮",
            comment: "養殖魚が窒息死するなど大きな被害が出ることがあります。"
        },
        {
            q: "自然環境や歴史的遺産を保護・保全し、未来へ引き継ぐためにユネスコが登録するものは？",
            img: "assets/images/history/h_early_modern_1_silver.png",
            choices: ["世界遺産","国宝","重要文化財","天然記念物"],
            a: "世界遺産",
            comment: "文化遺産、自然遺産、複合遺産の3種類があります。"
        },
        {
            q: "自然環境を観光資源として体験・学習し、環境保全につなげる観光のあり方を何というか？",
            choices: ["エコツーリズム","グリーンツーリズム","メディカルツーリズム","マスツーリズム"],
            a: "エコツーリズム",
            comment: "屋久島などで盛んに行われています。"
        },
        {
            q: "九州地方で最も人口が多く、アジアの玄関口として発展している政令指定都市は？",
            choices: ["福岡市","北九州市","熊本市","鹿児島市"],
            a: "福岡市",
            comment: "国の出先機関や企業の支店が多く集まる地方中枢都市です。"
        },
        {
            q: "アメリカ軍基地が多く存在し、パイナップルやサトウキビの栽培が盛んな県は？",
            img: "assets/images/history/h_modern_7_okinawa_sen_1772302848029.png",
            choices: ["沖縄県","鹿児島県","長崎県","宮崎県"],
            a: "沖縄県",
            comment: "観光業も主要な産業となっています。"
        },
        {
            q: "日本が加盟している、国際的な平和と安全を維持するための機関（本部はニューヨーク）は？",
            img: "assets/images/history/united_nations_1773368765000.png",
            choices: ["国際連合（国連）","ユネスコ","WHO","WTO"],
            a: "国際連合（国連）",
            comment: "1956年に加盟しました。"
        },
        {
            q: "九州地方で人口が最も多く、アジアの玄関口とも呼ばれるこの県のなまえは？",
            img: "assets/images/geography/map_kyushu_blank_1771591728285.png",
            choices: ["福岡県","佐賀県","大分県","熊本県"],
            a: "福岡県",
            comment: "福岡市や北九州市などの政令指定都市があります。"
        },
        {
            q: "かつては外国との貿易窓口（出島）があり、造船業が盛んなこの県のなまえは？",
            img: "assets/images/geography/map_kyushu_blank_1771591728285.png",
            choices: ["長崎県","佐賀県","熊本県","大分県"],
            a: "長崎県",
            comment: "リアス海岸が広がり、島がとても多い県です。"
        },
        {
            q: "シラス台地が広がり、さつまいもや豚肉の生産が盛んなこの県のなまえは？",
            img: "assets/images/geography/map_kyushu_blank_1771591728285.png",
            choices: ["鹿児島県","宮崎県","熊本県","大分県"],
            a: "鹿児島県",
            comment: "桜島などの火山があります。"
        }
    ],
    "gj_4": [
        {
            q: "中国山地と四国山地に挟まれた、年間を通して降水量が少なく晴れの日が多い地域は？",
            img: "assets/images/geography/map_chugoku_blank_1771591689143.png",
            choices: ["瀬戸内海沿岸（瀬戸内）","南四国（太平洋側）","山陰（日本海側）","中央高地"],
            a: "瀬戸内海沿岸（瀬戸内）",
            comment: "季節風が山地に遮られるため、雨が少なく温暖です。"
        },
        {
            q: "冬に北西からの季節風の影響で、雨や雪が多くなる中国地方北部の地域は？",
            choices: ["山陰（日本海側）","山陽（瀬戸内側）","南四国","北九州"],
            a: "山陰（日本海側）",
            comment: "鳥取砂丘などの砂丘も見られます。"
        },
        {
            q: "南東の季節風の影響を受け、夏に降水量が多く台風の被害も受けやすい地域は？",
            choices: ["南四国（太平洋側）","瀬戸内","山陰","北陸"],
            a: "南四国（太平洋側）",
            comment: "高知県などは「雨の多い地域」として知られます。"
        },
        {
            q: "降水量が少ない香川県の讃岐平野などで、農業用水を確保するために古くから作られてきたものは？",
            choices: ["ため池","ダム","地下水路","海あし"],
            a: "ため池",
            comment: "日本最大のため池「満濃池」などが有名です。"
        },
        {
            q: "水不足を解消するため、吉野川から水を引いて作られた用水路は？",
            img: "assets/images/geography/map_shikoku_blank_1771591711033.png",
            choices: ["香川用水","愛知用水","明治用水","琵琶湖疏水"],
            a: "香川用水",
            comment: "徳島県を流れる吉野川から、香川県の讃岐平野へ水を送っています。"
        },
        {
            q: "風によって運ばれた砂が堆積してできた、鳥取県にある日本最大級の地形は？",
            choices: ["鳥取砂丘","吹上浜","中田島砂丘","庄内砂丘"],
            a: "鳥取砂丘",
            comment: "らっきょうやメロンなどの栽培に利用されています。"
        },
        {
            q: "1945年8月6日に世界で初めて原子爆弾が投下された都市は？",
            choices: ["広島市","長崎市","岡山市","高松市"],
            a: "広島市",
            comment: "太田川の三角州（デルタ）上に発達した都市です。"
        },
        {
            q: "「恒久の平和を誠実に実現しようとする理想の象徴」として、広島市が指定されている呼称は？",
            choices: ["平和記念都市","国際文化観光都市","環境モデル都市","政令指定都市"],
            a: "平和記念都市",
            comment: "原爆ドームや平和記念公園があり、世界中から多くの人が訪れます。"
        },
        {
            q: "本州と四国を結ぶ3つのルートの橋の総称を何というか？",
            choices: ["本州四国連絡橋","瀬戸内海横断橋","しまなみ海道","夢の大橋"],
            a: "本州四国連絡橋",
            comment: "神戸・鳴門ルート、児島・坂出ルート、尾道・今治ルートの3つがあります。"
        },
        {
            q: "1988年に最初に開通した、岡山県児島と香川県坂出を結ぶルートの橋は？",
            choices: ["瀬戸大橋","明石海峡大橋","大鳴門橋","しまなみ海道"],
            a: "瀬戸大橋",
            comment: "道路と鉄道が併用されているのが特徴です。"
        },
        {
            q: "兵庫県神戸市と淡路島を結ぶ、世界最大級のつり橋は？",
            img: "assets/images/history/h_medieval_5_ming.png",
            choices: ["明石海峡大橋","大鳴門橋","瀬戸大橋","来島海峡大橋"],
            a: "明石海峡大橋",
            comment: "全長3911mあります。"
        },
        {
            q: "広島県尾道市と愛媛県今治市を結び、自転車でも渡ることができるルートの愛称は？",
            choices: ["瀬戸内しまなみ海道","瀬戸大橋","パールロード","オレンジロード"],
            a: "瀬戸内しまなみ海道",
            comment: "サイクリングの聖地としても人気があります。"
        },
        {
            q: "中国・四国地方の地方中枢都市であり、政令指定都市でもある都市は？",
            choices: ["広島市","岡山市","松山市","高松市"],
            a: "広島市",
            comment: "人口100万人を超える大都市です。"
        },
        {
            q: "本州四国連絡橋の開通により、人や物が大都市（大阪など）へ吸い寄せられ、地方の経済が衰退する現象を何というか？",
            choices: ["ストロー現象","ドーナツ化現象","空洞化現象","過疎化"],
            a: "ストロー現象",
            comment: "コップの飲み物をストローで吸い上げる様子に例えられました。"
        },
        {
            q: "高知平野で盛んな、温暖な気候を利用してなすやピーマンの出荷時期を早める栽培方法は？",
            choices: ["促成栽培","抑制栽培","施設園芸農業","近郊農業"],
            a: "促成栽培",
            comment: "ビニールハウスを利用して栽培されます。"
        },
        {
            q: "鳥取砂丘などで栽培が盛んな、砂地に適した農作物は？",
            choices: ["らっきょう・梨","みかん・レモン","キャベツ・レタス","さつまいも"],
            a: "らっきょう・梨",
            comment: "「二十世紀梨」などが有名です。"
        },
        {
            q: "愛媛県が全国有数の生産量を誇る果物は？",
            choices: ["みかん（柑橘類）","りんご","ぶどう","もも"],
            a: "みかん（柑橘類）",
            comment: "水はけの良い山の斜面を利用して栽培されます。"
        },
        {
            q: "岡山県で栽培が盛んな、高級フルーツとして知られる果物は？",
            choices: ["ぶどう（マスカット）・もも","りんご・さくらんぼ","メロン・スイカ","マンゴー"],
            a: "ぶどう（マスカット）・もも",
            comment: "「フルーツ王国」とも呼ばれます。"
        },
        {
            q: "香川県の小豆島などで栽培が盛んな、地中海原産の植物は？",
            choices: ["オリーブ","ラベンダー","チューリップ","ひまわり"],
            a: "オリーブ",
            comment: "気候が地中海性気候に似ているため栽培に適しています。"
        },
        {
            q: "瀬戸内海沿岸に広がる、石油化学や製鉄、自動車産業などが盛んな工業地域は？",
            choices: ["瀬戸内工業地域","阪神工業地帯","北九州工業地帯","中京工業地帯"],
            a: "瀬戸内工業地域",
            comment: "埋め立て地を利用して広い工場用地を確保しています。"
        },
        {
            q: "石油精製工場を中心に関連する工場が集まり、パイプラインで結ばれて生産を行う工場群を何というか？",
            choices: ["石油化学コンビナート","工業団地","テクノポリス","カルテル"],
            a: "石油化学コンビナート",
            comment: "岡山県の水島地区や山口県の周南地区などが代表的です。"
        },
        {
            q: "瀬戸内工業地域に含まれる、岡山県倉敷市にある大規模な工業地区は？",
            choices: ["水島地区","鹿島地区","京葉地区","四日市地区"],
            a: "水島地区",
            comment: "製鉄所や石油化学コンビナート、自動車工場が集まっています。"
        },
        {
            q: "広島県府中町（マツダ）などで盛んな工業は？",
            choices: ["自動車工業","繊維工業","精密機械工業","食品工業"],
            a: "自動車工業",
            comment: "広島湾に面し、輸出にも有利です。"
        },
        {
            q: "かつて瀬戸内の海岸で見られた、海水を蒸発させて塩を作る施設を何というか？",
            choices: ["塩田","油田","ガス田","棚田"],
            a: "塩田",
            comment: "現在は廃止され、その跡地は工業用地などに利用されています。"
        },
        {
            q: "中国山地や四国山地の山間部で進行している、人口が減少し高齢化が進む現象は？",
            choices: ["過疎化","過密化","都市化","ドーナツ化現象"],
            a: "過疎化",
            comment: "地域社会の維持が困難になる深刻な問題です。"
        },
        {
            q: "65歳以上の人口が半数を超え、社会的共同生活の維持が難しくなりつつある集落を何というか？",
            choices: ["限界集落","ニュータウン","スマートシティ","ゴーストタウン"],
            a: "限界集落",
            comment: "村おこしなどの地域活性化策が模索されています。"
        },
        {
            q: "古くからの町並みや特産品を活かして観光客を呼び込み、地域経済を活性化させる取り組みを何というか？",
            choices: ["町おこし（村おこし）","企業誘致","都市再開発","区画整理"],
            a: "町おこし（村おこし）",
            comment: "「B-1グランプリ」などのご当地グルメもその一つです。"
        },
        {
            q: "島根県の宍道湖などで水揚げされる、汽水域に生息する貝は？",
            choices: ["しじみ","あさり","はまぐり","さざえ"],
            a: "しじみ",
            comment: "宍道湖は日本有数のしじみの産地です。"
        },
        {
            q: "広島県の宮島にある世界遺産で、海上に立つ鳥居で有名な神社は？",
            choices: ["厳島神社","出雲大社","伊勢神宮","春日大社"],
            a: "厳島神社",
            comment: "平清盛によって整備されました。"
        },
        {
            q: "島根県にある、縁結びの神様として知られ、旧暦10月（神無月）に全国の神々が集まるとされる神社は？",
            choices: ["出雲大社","厳島神社","宇佐神宮","日光東照宮"],
            a: "出雲大社",
            comment: "本殿は国宝に指定されています。"
        },
        {
            q: "中国地方にあり、原爆ドームや厳島神社などの世界遺産があるこの県のなまえは？",
            img: "assets/images/geography/map_chugoku_blank_1771591689143.png",
            choices: ["広島県","岡山県","山口県","島根県"],
            a: "広島県",
            comment: "カキの養殖や自動車工業も盛んです。"
        },
        {
            q: "日本最大級の砂丘があり、らっきょうや梨の栽培が盛んなこの県のなまえは？",
            img: "assets/images/geography/map_chugoku_blank_1771591689143.png",
            choices: ["鳥取県","島根県","岡山県","山口県"],
            a: "鳥取県",
            comment: "中国地方の日本海側（山陰地方）にあります。"
        },
        {
            q: "四国地方で面積が最も広く、南は太平洋に面して温暖なこの県のなまえは？",
            img: "assets/images/geography/map_shikoku_blank_1771591711033.png",
            choices: ["高知県","愛媛県","香川県","徳島県"],
            a: "高知県",
            comment: "なすやピーマンの促成栽培が盛んです。"
        },
        {
            q: "四国地方にあり、みかんの生産量が全国トップクラスのこの県のなまえは？",
            img: "assets/images/geography/map_shikoku_blank_1771591711033.png",
            choices: ["愛媛県","香川県","徳島県","高知県"],
            a: "愛媛県",
            comment: "瀬戸内海に面し、しまなみ海道が通っています。"
        }
    ],
    "gj_5": [
        {
            q: "日本最大の湖で、近畿地方の約1450万人の飲料水として利用されているため「近畿地方の水がめ」と呼ばれるのは？",
            img: "assets/images/geography/map_kinki_blank_1771591655064.png",
            choices: ["琵琶湖","霞ヶ浦","サロマ湖","猪苗代湖"],
            a: "琵琶湖",
            comment: "滋賀県の面積の約6分の1を占めています。"
        },
        {
            q: "水鳥の生息地として国際的に重要な湿地を保全するための条約で、琵琶湖も登録されているものは？",
            choices: ["ラムサール条約","ワシントン条約","京都議定書","パリ協定"],
            a: "ラムサール条約",
            comment: "イランのラムサールで採択されました。北海道の釧路湿原なども登録されています。"
        },
        {
            q: "紀伊半島の大部分を占める、険しい山々が連なる地域は？",
            img: "assets/images/geography/map_kinki_blank_1771591655064.png",
            choices: ["紀伊山地","四国山地","中国山地","飛騨山脈"],
            a: "紀伊山地",
            comment: "温暖で降水量が非常に多く、日本有数の多雨地帯です。"
        },
        {
            q: "紀伊山地で盛んな産業で、「吉野すぎ」や「尾鷲ヒノキ」などのブランド材で知られるのは？",
            choices: ["林業","農業","水産業","鉱業"],
            a: "林業",
            comment: "豊富な雨と温暖な気候が樹木の生育に適しています。"
        },
        {
            q: "志摩半島などで見られる、海岸線が複雑に入り組んだ地形を何というか？",
            choices: ["リアス海岸","砂浜海岸","フィヨルド","三角州"],
            a: "リアス海岸",
            comment: "波が静かなため、真珠やカキの養殖に適しています。"
        },
        {
            q: "瀬戸内海で最も大きな島で、たまねぎの栽培などが盛んな島は？",
            choices: ["淡路島","小豆島","隠岐の島","佐渡島"],
            a: "淡路島",
            comment: "兵庫県に属し、明石海峡大橋で神戸市と結ばれています。"
        },
        {
            q: "江戸時代に「天下の台所」と呼ばれ、現在も卸売業が盛んな都市は？",
            choices: ["大阪市","京都市","神戸市","堺市"],
            a: "大阪市",
            comment: "全国から物資が集まり、商業の中心地として栄えました。"
        },
        {
            q: "大阪府の東大阪市などに多く集まっている、高度な技術力を持つ工場群の特徴は？",
            choices: ["中小工場が多い","巨大工場が多い","国営工場が多い","海外企業が多い"],
            a: "中小工場が多い",
            comment: "歯ブラシから人工衛星の部品まで、多種多様な製品を作っています。"
        },
        {
            q: "高度経済成長期に、都市の過密を解消するために郊外に計画的に建設された大規模な住宅団地を何というか？",
            choices: ["ニュータウン","ベッドタウン","コンパクトシティ","企業城下町"],
            a: "ニュータウン",
            comment: "大阪の千里ニュータウンや泉北ニュータウンなどが有名ですが、現在は住民の高齢化が進んでいます。"
        },
        {
            q: "神戸市の沿岸部を埋め立てて造られた、ポートアイランドや六甲アイランドのような人工島を何というか？",
            choices: ["人工島","干拓地","埋立地","ニュータウン"],
            a: "人工島",
            comment: "六甲山を削った土砂を使って海を埋め立て、「山、海へ行く」と言われました。"
        },
        {
            q: "大阪湾の泉州沖に造られた、騒音問題の解消などを目的とした日本初の24時間利用可能な空港は？",
            choices: ["関西国際空港","大阪国際空港（伊丹）","神戸空港","中部国際空港"],
            a: "関西国際空港",
            comment: "完全な人工島の上に建設された空港です。"
        },
        {
            q: "大阪湾岸地域に広がる、かつては金属・化学工業が中心だったが、現在はハイテク産業なども見られる工業地帯は？",
            choices: ["阪神工業地帯","中京工業地帯","京浜工業地帯","北九州工業地帯"],
            a: "阪神工業地帯",
            comment: "戦前は日本最大の工業地帯でした。"
        },
        {
            q: "大阪湾岸地域に液晶やプラズマなどの薄型テレビ工場が相次いで建設されたことから名付けられた呼び名は？",
            choices: ["パネルベイ","シリコンアイランド","テクノポリス","ICベルト"],
            a: "パネルベイ",
            comment: "現在は海外との競争激化により生産は減少していますが、蓄電池などの新産業も生まれています。"
        },
        {
            q: "大都市の消費者に向けた、野菜などを新鮮なうちに届ける農業の形態は？",
            choices: ["近郊農業","輸送園芸農業","施設園芸農業","有機農業"],
            a: "近郊農業",
            comment: "京都や大阪の周辺で盛んに行われています。"
        },
        {
            q: "温暖な気候を利用して、和歌山県や愛媛県などの傾斜地で栽培が盛んな果物は？",
            choices: ["みかん","りんご","ぶどう","なし"],
            a: "みかん",
            comment: "和歌山県はみかんの生産量が日本一です（年により変動あり）。"
        },
        {
            q: "794年に都が置かれ、千年以上日本の首都だった都市は？",
            choices: ["京都市（平安京）","奈良市（平城京）","鎌倉市","大阪市"],
            a: "京都市（平安京）",
            comment: "碁盤の目状の道路区画などの古い町並みが残っています。"
        },
        {
            q: "710年に都が置かれ、東大寺や法隆寺などの文化財が多く残る都市は？",
            choices: ["奈良市（平城京）","京都市","大津市","飛鳥"],
            a: "奈良市（平城京）",
            comment: "シルクロードの終着点とも呼ばれ、国際色豊かな天平文化が栄えました。"
        },
        {
            q: "京都市の西陣地区で作られる、高級絹織物の伝統的工芸品は？",
            choices: ["西陣織","京友禅","加賀友禅","博多織"],
            a: "西陣織",
            comment: "応仁の乱の後に発展しました。"
        },
        {
            q: "扇子や着物の絵柄のように、華やかな色彩で描かれる京都の染物を何というか？",
            choices: ["京友禅","加賀友禅","西陣織","結城紬"],
            a: "京友禅",
            comment: "水で洗ってのりを落とす「友禅流し」が有名です。"
        },
        {
            q: "京都の八坂神社で行われる、日本三大祭りの一つの伝統的な祭りは？",
            choices: ["祇園祭","天神祭","神田祭","ねぶた祭り"],
            a: "祇園祭",
            comment: "7月の1ヶ月間にわたって行われ、山鉾巡行がハイライトです。"
        },
        {
            q: "歴史上・芸術上で価値が高く、国が特に重要として指定した文化財を何というか？",
            choices: ["重要文化財","国宝","世界遺産","天然記念物"],
            a: "重要文化財",
            comment: "その中でも特に価値の高いものが「国宝」に指定されます。"
        },
        {
            q: "歴史的な町並みを守るため、建物の高さやデザインを規制する法律は？",
            choices: ["古都保存法","文化財保護法","建築基準法","景観法"],
            a: "古都保存法",
            comment: "京都、奈良、鎌倉などが指定されています。"
        },
        {
            q: "紀伊山地の霊場と参詣道として世界遺産に登録されている著名な修験道の聖地は？",
            choices: ["高野山・熊野三山・吉野大峯","比叡山延暦寺","清水寺","厳島神社"],
            a: "高野山・熊野三山・吉野大峯",
            comment: "自然崇拝と結びついた文化的景観が評価されました。"
        },
        {
            q: "経済産業大臣により指定される、地域に根付いた伝統的な技術で作られる製品は？",
            choices: ["伝統的工芸品","重要文化財","地域ブランド","特産品"],
            a: "伝統的工芸品",
            comment: "西陣織、清水焼、京友禅などが指定されています。"
        },
        {
            q: "近畿地方の中心であり、江戸時代には「天下の台所」と呼ばれたこの府のなまえは？",
            img: "assets/images/geography/map_kinki_blank_1771591655064.png",
            choices: ["大阪府","京都府","兵庫県","奈良県"],
            a: "大阪府",
            comment: "面積は小さいですが、人口がとても多いです。"
        },
        {
            q: "日本最大の湖「琵琶湖」があり、近畿地方の水がめとなっているこの県のなまえは？",
            img: "assets/images/geography/map_kinki_blank_1771591655064.png",
            choices: ["滋賀県","奈良県","和歌山県","三重県"],
            a: "滋賀県",
            comment: "県の中央に大きな湖があります。"
        },
        {
            q: "紀伊半島の南西部にあり、みかんや梅などの果樹栽培が盛んなこの県のなまえは？",
            img: "assets/images/geography/map_kinki_blank_1771591655064.png",
            choices: ["和歌山県","奈良県","三重県","兵庫県"],
            a: "和歌山県",
            comment: "温暖な気候を利用して果物がたくさん作られています。"
        }
    ],
    "gj_6": [
        {
            q: "中部地方の中央部を南北に走る、飛騨・木曽・赤石の3つの山脈の総称は？",
            img: "assets/images/geography/map_chubu_blank_1771591636012.png",
            choices: ["日本アルプス","奥羽山脈","中国山地","日高山脈"],
            a: "日本アルプス",
            comment: "「日本の屋根」とも呼ばれる、3000m級の山々です。"
        },
        {
            q: "日本で最も高い山（標高3776m）で、2013年に世界文化遺産に登録されたのは？",
            choices: ["富士山","北岳","奥穂高岳","槍ヶ岳"],
            a: "富士山",
            comment: "静岡県と山梨県にまたがる美しい独立峰です。"
        },
        {
            q: "日本最長の川（長さ約367km）で、越後平野を流れて日本海に注ぐ川は？",
            img: "assets/images/geography/map_chubu_blank_1771591636012.png",
            choices: ["信濃川","利根川","石狩川","木曽川"],
            a: "信濃川",
            comment: "長野県では千曲川と呼ばれます。"
        },
        {
            q: "木曽川、長良川、揖斐川の下流域に広がる低湿地で、かつて水害から集落や田畑を守るために「輪中」が作られた平野は？",
            choices: ["濃尾平野","越後平野","庄内平野","つくば平野"],
            a: "濃尾平野",
            comment: "堤防で囲まれた集落の工夫が今も見られます。"
        },
        {
            q: "甲府盆地の扇状地などで栽培が盛んな、水はけの良い土地を好む農作物は？",
            choices: ["ぶどう・もも","みかん・りんご","なし・柿","さくらんぼ"],
            a: "ぶどう・もも",
            comment: "昼夜の気温差が大きい盆地の気候が果樹栽培に適しています。"
        },
        {
            q: "野辺山原や浅間山麓などの高冷地で、夏の涼しい気候を利用してレタスやキャベツなどを栽培することを何というか？",
            choices: ["抑制栽培","促成栽培","施設栽培","有機栽培"],
            a: "抑制栽培",
            comment: "他の産地が出荷できない夏に出荷時期をずらすことで、高い価格で売ることができます。"
        },
        {
            q: "渥美半島の豊川用水を利用して行われている、電照菊やメロンなどを栽培する農業は？",
            choices: ["施設園芸農業","近郊農業","焼畑農業","プランテーション農業"],
            a: "施設園芸農業",
            comment: "温暖な気候を利用し、ビニールハウスなどで栽培します。"
        },
        {
            q: "北陸地方の冬の積雪が多いため、裏作ができず、夏の間だけ稲作を行うことを何というか？",
            choices: ["水田単作","二毛作","二期作","棚田"],
            a: "水田単作",
            comment: "越後平野などは日本有数の穀倉地帯となっています。"
        },
        {
            q: "牧ノ原などの台地で盛んに栽培されている、静岡県が全国有数の生産地である作物は？",
            choices: ["茶","みかん","キャベツ","レタス"],
            a: "茶",
            comment: "明治時代に開墾が始まりました。"
        },
        {
            q: "愛知県を中心とする、自動車産業などが盛んで製造品出荷額等が日本一の工業地帯は？",
            choices: ["中京工業地帯","阪神工業地帯","京浜工業地帯","北九州工業地帯"],
            a: "中京工業地帯",
            comment: "豊田市の自動車、四日市市の石油化学コンビナートなどが有名です。"
        },
        {
            q: "静岡県の浜松市などで盛んな、オートバイや楽器の製造を中心とする工業地域は？",
            choices: ["東海工業地域","北関東工業地域","瀬戸内工業地域","鹿島臨海工業地域"],
            a: "東海工業地域",
            comment: "富士市では製紙・パルプ工業も盛んです。"
        },
        {
            q: "かつて製糸業で栄えた諏訪盆地で、戦後発展し「東洋のスイス」とも呼ばれた産業は？",
            choices: ["精密機械工業","繊維工業","食品工業","鉄鋼業"],
            a: "精密機械工業",
            comment: "時計やカメラ、現在は電子部品の生産が盛んです。"
        },
        {
            q: "その土地の原料や技術と結びついて発達した、福井県鯖江市の眼鏡フレームや、新潟県燕市の金属洋食器などの産業を何というか？",
            choices: ["地場産業","伝統的工芸品","ベンチャー企業","多国籍企業"],
            a: "地場産業",
            comment: "地域経済を支える重要な産業です。"
        },
        {
            q: "岐阜県の白川郷や富山県の五箇山に見られる、雪を滑り落ちやすくするための急な茅葺き屋根を持つ家屋造りは？",
            choices: ["合掌造り","高床倉庫","竪穴住居","寝殿造"],
            a: "合掌造り",
            comment: "世界文化遺産に登録されています。屋根裏ではかつて養蚕が行われていました。"
        },
        {
            q: "石川県輪島市で生産される、堅牢で優美な装飾が特徴の伝統的工芸品は？",
            choices: ["輪島塗","加賀友禅","九谷焼","南部鉄器"],
            a: "輪島塗",
            comment: "「沈金」や「螺鈿」などの技法が使われます。"
        },
        {
            q: "愛知県の知多半島沖に建設された、24時間利用可能な海上空港の愛称は？",
            choices: ["セントレア（中部国際空港）","成田国際空港","関西国際空港","神戸空港"],
            a: "セントレア（中部国際空港）",
            comment: "中部地方の空の玄関として、地域の活性化に貢献しています。"
        },
        {
            q: "中部地方にあり、自動車などの工業出荷額が日本一のこの県のなまえは？",
            img: "assets/images/geography/map_chubu_blank_1771591636012.png",
            choices: ["愛知県","静岡県","岐阜県","三重県"],
            a: "愛知県",
            comment: "中京工業地帯の中心的な県です。"
        },
        {
            q: "越後平野が広がり、「米どころ」として稲作が非常に盛んなこの県のなまえは？",
            img: "assets/images/geography/map_chubu_blank_1771591636012.png",
            choices: ["新潟県","富山県","石川県","福井県"],
            a: "新潟県",
            comment: "日本海に面した長い海岸線を持つ県です。"
        },
        {
            q: "牧ノ原でお茶の栽培が盛んで、富士山の南側に位置するこの県のなまえは？",
            img: "assets/images/geography/map_chubu_blank_1771591636012.png",
            choices: ["静岡県","山梨県","長野県","愛知県"],
            a: "静岡県",
            comment: "ピアノなどの楽器やオートバイの生産も盛んです。"
        }
    ],
    "gj_7": [
        {
            q: "日本最大の面積を持つ平野で、関東地方の大部分を占めているのは？",
            img: "assets/images/geography/map_kanto_blank_1771591579833.png",
            choices: ["関東平野","石狩平野","十勝平野","濃尾平野"],
            a: "関東平野",
            comment: "火山灰が堆積した赤土の台地が広がっています。"
        },
        {
            q: "関東平野の台地を覆っている、富士山や浅間山などの噴火による火山灰が堆積してできた赤黒い土を何というか？",
            choices: ["関東ローム","シラス","扇状地","黒潮"],
            a: "関東ローム",
            comment: "水はけが良いため、畑作に適しています。"
        },
        {
            q: "流域面積が日本一の川で、「坂東太郎」の異名を持つ川は？",
            img: "assets/images/geography/map_kanto_blank_1771591579833.png",
            choices: ["利根川","信濃川","荒川","多摩川"],
            a: "利根川",
            comment: "かつては洪水を防ぐために流路が変えられました（利根川東遷）。"
        },
        {
            q: "冬の間、関東地方に強く吹く、北西からの乾燥した季節風を何というか？",
            choices: ["からっ風","やませ","春一番","木枯らし"],
            a: "からっ風",
            comment: "日本海側で雪を降らせた後の乾いた風です。"
        },
        {
            q: "東京の南方約1000kmの太平洋上にあり、独自の生態系を持つことから世界自然遺産に登録されている島々は？",
            img: "assets/images/history/ogasawara_islands_1773369026963.png",
            choices: ["小笠原諸島","伊豆諸島","南西諸島","佐渡島"],
            a: "小笠原諸島",
            comment: "「東洋のガラパゴス」とも呼ばれます。"
        },
        {
            q: "日本の政治・経済の中心地である東京都区部などに、人口や機能が過度に集中している状態を何というか？",
            choices: ["一極集中","過疎化","ドーナツ化現象","スプロール現象"],
            a: "一極集中",
            comment: "交通渋滞や地価の高騰、ゴミ問題などの原因となっています。"
        },
        {
            q: "国会議事堂、最高裁判所、中央官庁などが集中している、日本の政治の中心地は？",
            choices: ["霞が関・永田町","新宿・渋谷","丸の内・大手町","お台場・有明"],
            a: "霞が関・永田町",
            comment: "千代田区に位置しています。"
        },
        {
            q: "都心の過密を解消するために指定された、さいたま新都心や幕張新都心、横浜みなとみらい21などを何というか？",
            choices: ["新都心（業務核都市）","ニュータウン","副都心","政令指定都市"],
            a: "新都心（業務核都市）",
            comment: "首都機能の分散などが目的とされています。"
        },
        {
            q: "複数の鉄道路線が乗り入れ、都心と郊外を結ぶ起点・終点となる巨大な駅（新宿、渋谷、池袋など）を何というか？",
            choices: ["ターミナル駅","新幹線駅","貨物駅","地下鉄駅"],
            a: "ターミナル駅",
            comment: "駅周辺には百貨店やオフィスビルが立ち並び、副都心を形成しています。"
        },
        {
            q: "東京湾岸の埋立地を開発して生まれた、お台場や有明などの新しい商業・居住エリアを何というか？",
            choices: ["臨海副都心","ウォーターフロント","ポートアイランド","みなとみらい"],
            a: "臨海副都心",
            comment: "「東京テレポートタウン」などとも呼ばれます。"
        },
        {
            q: "2012年に完成した世界一高い自立式電波塔（634m）は？",
            choices: ["東京スカイツリー","東京タワー","通天閣","福岡タワー"],
            a: "東京スカイツリー",
            comment: "かつての「武蔵国」にちなんで634mとなりました。"
        },
        {
            q: "東京湾の西側に広がる、東京都・神奈川県・埼玉県にまたがる日本有数の工業地帯は？",
            choices: ["京浜工業地帯","京葉工業地域","北関東工業地域","阪神工業地帯"],
            a: "京浜工業地帯",
            comment: "機械工業や印刷業の割合が高いことが特徴です。"
        },
        {
            q: "千葉県の東京湾岸に埋め立てによって作られた、火力発電所や石油化学コンビナートが立ち並ぶ工業地域は？",
            choices: ["京葉工業地域","鹿島臨海工業地域","東海工業地域","瀬戸内工業地域"],
            a: "京葉工業地域",
            comment: "化学工業の割合が非常に高いです。"
        },
        {
            q: "高速道路網の整備に伴い、栃木・群馬・茨城県の内陸部に発達した、自動車工場や電気機械工場が多い工業地域は？",
            choices: ["北関東工業地域","関東内陸工業地域","中京工業地帯","東海工業地域"],
            a: "北関東工業地域",
            comment: "地価が安く、交通の便が良いことから工場が進出しました。"
        },
        {
            q: "東京都大田区にある、国内線の中心であり、近年は国際線の発着も増えている空港は？",
            choices: ["東京国際空港（羽田空港）","成田国際空港","関西国際空港","中部国際空港"],
            a: "東京国際空港（羽田空港）",
            comment: "旅客数で世界有数の規模を誇ります。"
        },
        {
            q: "千葉県にある、日本の国際線の中心となっており、貿易額が日本一の空港は？",
            choices: ["成田国際空港","東京国際空港（羽田空港）","関西国際空港","福岡空港"],
            a: "成田国際空港",
            comment: "多くの国際貨物が取り扱われています。"
        },
        {
            q: "研究機関や筑波大学が移転して作られた、茨城県にある計画的な研究学園都市は？",
            choices: ["筑波研究学園都市","関西文化学術研究都市","光の森","シリコンバレー"],
            a: "筑波研究学園都市",
            comment: "東京への一極集中を緩和する目的もありました。"
        },
        {
            q: "大都市の消費地に近い利点を活かして、野菜（ほうれん草、小松菜など）や花などを栽培する農業は？",
            choices: ["近郊農業","施設園芸農業","抑制栽培","促成栽培"],
            a: "近郊農業",
            comment: "新鮮な農産物を少ない輸送コストで供給できます。"
        },
        {
            q: "群馬県の嬬恋村などで盛んな、夏の涼しい気候を利用してキャベツなどを栽培する農業は？",
            choices: ["抑制栽培（高原野菜）","促成栽培","近郊農業","稲作"],
            a: "抑制栽培（高原野菜）",
            comment: "浅間山の麓などの高冷地で行われています。"
        },
        {
            q: "関東地方の北西部にあり、こんにゃくいもの生産やキャベツの抑制栽培が盛んなこの県のなまえは？",
            img: "assets/images/geography/map_kanto_blank_1771591579833.png",
            choices: ["群馬県","栃木県","茨城県","埼玉県"],
            a: "群馬県",
            comment: "草津温泉などの温泉でも有名です。"
        },
        {
            q: "成田国際空港があり、落花生などの近郊農業や工業が盛んなこの県のなまえは？",
            img: "assets/images/geography/map_kanto_blank_1771591579833.png",
            choices: ["千葉県","茨城県","埼玉県","神奈川県"],
            a: "千葉県",
            comment: "東京湾に面し、京葉工業地域が広がっています。"
        },
        {
            q: "東京の南に位置し、横浜港があり京浜工業地帯の一部となっているこの県のなまえは？",
            img: "assets/images/geography/map_kanto_blank_1771591579833.png",
            choices: ["神奈川県","千葉県","埼玉県","茨城県"],
            a: "神奈川県",
            comment: "人口が東京都に次いで多く、鎌倉などの観光地もあります。"
        }
    ],
    "gj_8": [
        {
            q: "東北地方の中央部を南北に走る、日本の背骨とも呼ばれる山脈は？",
            img: "assets/images/geography/map_tohoku_blank_1771591614790.png",
            choices: ["奥羽山脈","日高山脈","飛騨山脈","木曽山脈"],
            a: "奥羽山脈",
            comment: "この山脈によって、太平洋側と日本海側の気候が分かれます。"
        },
        {
            q: "夏にオホーツク海の方から太平洋側に吹く、冷たく湿った北東の風を何というか？",
            choices: ["やませ","からっ風","フェーン現象","モンスーン"],
            a: "やませ",
            comment: "気温が上がらず、イネの生育が悪くなる「冷害」の原因となります。"
        },
        {
            q: "青森県と秋田県にまたがる山地で、世界最大級のブナの原生林が広がっていることから世界自然遺産に登録されたのは？",
            img: "assets/images/geography/map_tohoku_blank_1771591614790.png",
            choices: ["白神山地","屋久島","知床","小笠原諸島"],
            a: "白神山地",
            comment: "1993年に日本で初めて世界遺産に登録されました。"
        },
        {
            q: "三陸海岸南部に見られる、複雑に入り組んだ海岸地形を何というか？",
            choices: ["リアス海岸","砂浜海岸","サンゴ礁","干潟"],
            a: "リアス海岸",
            comment: "波が静かなため養殖業に適していますが、津波の被害を受けやすい地形でもあります。"
        },
        {
            q: "三陸海岸沖の、暖流（日本海流）と寒流（千島海流）がぶつかる良い漁場のことを何というか？",
            choices: ["潮目（潮境）","大陸棚","海溝","三角州"],
            a: "潮目（潮境）",
            comment: "プランクトンが豊富で、多くの魚が集まります。"
        },
        {
            q: "津軽平野などで栽培が盛んな、青森県が全国一の生産量を誇る果物は？",
            choices: ["りんご","みかん","もも","さくらんぼ"],
            a: "りんご",
            comment: "涼しい気候が栽培に適しています。"
        },
        {
            q: "山形盆地などで栽培が盛んな、山形県が全国一の生産量を誇る果物は？",
            choices: ["さくらんぼ","りんご","ぶどう","なし"],
            a: "さくらんぼ",
            comment: "「佐藤錦」などの品種が有名です。"
        },
        {
            q: "東北地方で広く行われている農業で、庄内平野や仙台平野などが代表的な産地となっているのは？",
            img: "assets/images/history/h_ancient_rice_farming_1772414609121.png",
            choices: ["稲作","畑作","酪農","茶の栽培"],
            a: "稲作",
            comment: "「あきたこまち」や「ひとめぼれ」などの銘柄米が開発されています。"
        },
        {
            q: "岩手県の盛岡市や奥州市で作られている、伝統的な鉄器は？",
            choices: ["南部鉄器","高岡銅器","堺打刃物","燕三条の金物"],
            a: "南部鉄器",
            comment: "保温性に優れ、丈夫なことから古くから親しまれています。"
        },
        {
            q: "山形県の天童市が生産量日本一を誇る、あるゲームの道具は？",
            choices: ["将棋の駒","碁石","花札","けん玉"],
            a: "将棋の駒",
            comment: "全国の約9割を生産しています。"
        },
        {
            q: "福島県の会津若松市や、青森県の津軽地方で盛んな伝統工芸品は？",
            choices: ["漆器（会津塗・津軽塗）","陶磁器","和紙","ガラス細工"],
            a: "漆器（会津塗・津軽塗）",
            comment: "独特の模様や技法が受け継がれています。"
        },
        {
            q: "東北自動車道などの高速道路のインターチェンジ（IC）周辺に作られた、工場が集まる区域を何というか？",
            choices: ["工業団地","コンビナート","ニュータウン","門前町"],
            a: "工業団地",
            comment: "交通の便が良い場所に、自動車や電子部品の工場が進出しています。"
        },
        {
            q: "青森市で行われる、巨大な人形の灯籠（ねぶた）を引いて練り歩く祭りは？",
            choices: ["青森ねぶた祭","秋田竿燈まつり","仙台七夕まつり","山形花笠まつり"],
            a: "青森ねぶた祭",
            comment: "東北三大祭りの一つで、ハネトと呼ばれる踊り手が盛り上げます。"
        },
        {
            q: "長い竹竿に提灯をたくさん吊るし、バランスを取りながら操る秋田県の祭りは？",
            choices: ["秋田竿燈まつり","青森ねぶた祭","仙台七夕まつり","阿波踊り"],
            a: "秋田竿燈まつり",
            comment: "稲穂に見立てて豊作を祈ります。"
        },
        {
            q: "豪華な和紙の飾りを楽しむ、宮城県仙台市で行われる祭りは？",
            choices: ["仙台七夕まつり","青森ねぶた祭","博多どんたく","京都祇園祭"],
            a: "仙台七夕まつり",
            comment: "伊達政宗の時代から続く伝統行事です。"
        },
        {
            q: "「ヤッショ、マカショ」の掛け声とともに、花飾りをつけた笠を持って踊る山形県の祭りは？",
            choices: ["山形花笠まつり","盛岡さんさ踊り","郡山うねめまつり","福島わらじまつり"],
            a: "山形花笠まつり",
            comment: "紅花をあしらった笠が特徴的です。"
        },
        {
            q: "本州の最北端にあり、りんごの生産量が日本一のこの県のなまえは？",
            img: "assets/images/geography/map_tohoku_blank_1771591614790.png",
            choices: ["青森県","秋田県","岩手県","山形県"],
            a: "青森県",
            comment: "津軽平野でりんご栽培が盛んです。"
        },
        {
            q: "さくらんぼの生産量が日本一で、盆地が多いこの県のなまえは？",
            img: "assets/images/geography/map_tohoku_blank_1771591614790.png",
            choices: ["山形県","秋田県","宮城県","福島県"],
            a: "山形県",
            comment: "夏場の盆地の暑さを利用して果物栽培が行われています。"
        },
        {
            q: "東北地方の中心都市である仙台市があるこの県のなまえは？",
            img: "assets/images/geography/map_tohoku_blank_1771591614790.png",
            choices: ["宮城県","岩手県","福島県","山形県"],
            a: "宮城県",
            comment: "仙台平野では米作りも盛んです。"
        }
    ],
    "gj_9": [
        {
            q: "北海道の中央部にある火山群で、最高峰の旭岳（2291m）などを含む場所は？",
            img: "assets/images/geography/map_hokkaido_blank.png",
            choices: ["大雪山","日高山脈","阿蘇山","富士山"],
            a: "大雪山",
            comment: "「北海道の屋根」とも呼ばれる国立公園があります。"
        },
        {
            q: "流域面積が日本第2位の大河で、石狩平野を流れて日本海に注ぐ川は？",
            img: "assets/images/geography/map_hokkaido_blank.png",
            choices: ["石狩川","信濃川","十勝川","天塩川"],
            a: "石狩川",
            comment: "アイヌ語で「曲がりくねって流れる川」という意味があります。"
        },
        {
            q: "北海道の東部に位置し、冬には流氷が見られ、世界自然遺産に登録されている半島は？",
            img: "assets/images/geography/map_hokkaido_blank.png",
            choices: ["知床半島","根室半島","積丹半島","渡島半島"],
            a: "知床半島",
            comment: "貴重な動植物が生息し、独自の生態系が保たれています。"
        },
        {
            q: "日本最大の湿原で、ラムサール条約に登録されているのは？",
            img: "assets/images/geography/map_hokkaido_blank.png",
            choices: ["釧路湿原","尾瀬ヶ原","サロベツ原野","霧多布湿原"],
            a: "釧路湿原",
            comment: "タンチョウなどの貴重な野鳥が生息しています。"
        },
        {
            q: "北海道の東、オホーツク海にあり、現在ロシアによって不法に占拠されている択捉島・国後島・色丹島・歯舞群島の総称は？",
            choices: ["北方領土","竹島","千島列島","尖閣諸島"],
            a: "北方領土",
            comment: "日本固有の領土であり、返還を求める運動が続いています。"
        },
        {
            q: "北海道の気候の特徴として正しいものは？",
            choices: ["梅雨がなく、台風の影響が少ない","夏は高温多湿である","冬は温暖で雨が多い","年間を通じて温暖である"],
            a: "梅雨がなく、台風の影響が少ない",
            comment: "冷帯（亜寒帯）に属し、冬は寒さが厳しく雪が多いですが、夏は涼しく過ごしやすいです。"
        },
        {
            q: "かつて北海道などの北方の地域で暮らしていた、独自の言語や文化を持つ先住民族は？",
            choices: ["アイヌの人々","琉球の人々","ウィルタ","ニヴフ"],
            a: "アイヌの人々",
            comment: "自然界のあらゆるものに魂が宿ると考える独自の信仰を持っていました。"
        },
        {
            q: "明治時代に北海道の開拓と警備にあたった、全国から移住してきた兵士たちを何というか？",
            choices: ["屯田兵","防人","御家人","足軽"],
            a: "屯田兵",
            comment: "厳しい自然と闘いながら、原野を切り開いていきました。"
        },
        {
            q: "北海道の道庁所在地で、明治時代に計画的に建設された碁盤の目状の街路が特徴的な都市は？",
            choices: ["札幌市","旭川市","函館市","帯広市"],
            a: "札幌市",
            comment: "日本最北の政令指定都市で、人口は約200万人です。"
        },
        {
            q: "北海道の農業の特徴で、広い耕地を大型機械を使って効率よく行う農業を何というか？",
            choices: ["大規模農業","集約農業","近郊農業","園芸農業"],
            a: "大規模農業",
            comment: "農家1戸あたりの耕地面積は、都府県の平均の10倍以上あります。"
        },
        {
            q: "十勝平野などで盛んな、連作障害を防ぐために同じ土地で異なる作物を順番に作る栽培方法は？",
            choices: ["輪作","二毛作","二期作","単作"],
            a: "輪作",
            comment: "じゃがいも、小麦、てんさい（ビート）、豆類などを組み合わせて栽培します。"
        },
        {
            q: "涼しい気候と広い草地を活かして、根釧台地などで盛んに行われている産業は？",
            choices: ["酪農","果樹栽培","稲作","茶の栽培"],
            a: "酪農",
            comment: "乳牛を飼育し、生乳やバター、チーズなどの乳製品を生産しています。"
        },
        {
            q: "石狩平野などで盛んな稲作において、泥炭地を改良するために他の場所から良質な土を運び入れることを何というか？",
            choices: ["客土","干拓","埋め立て","灌漑"],
            a: "客土",
            comment: "品種改良や技術の進歩により、北海道は日本有数の米の産地となりました。"
        },
        {
            q: "かつて北海道で盛んだったが、エネルギー革命などにより衰退した鉱産資源は？",
            choices: ["石炭","石油","鉄鉱石","銅"],
            a: "石炭",
            comment: "夕張や釧路などに炭鉱がありましたが、現在はほとんど閉山しています。"
        },
        {
            q: "オホーツク海沿岸や噴火湾などで盛んな、ホタテや昆布などを育てる漁業を何というか？",
            choices: ["養殖漁業（栽培漁業）","遠洋漁業","沖合漁業","定置網漁業"],
            a: "養殖漁業（栽培漁業）",
            comment: "「とる漁業」から「育てる漁業」への転換が進んでいます。"
        },
        {
            q: "知床などの豊かな自然環境を活かして行われている、自然保護と観光を両立させる取り組みは？",
            choices: ["エコツーリズム","グリーンツーリズム","マスツーリズム","インバウンド"],
            a: "エコツーリズム",
            comment: "自然観察ツアーなどが人気を集めています。"
        }
    ],
    "gj_10": [
        {
            q: "国土地理院が発行している、土地の様子や高低、利用状況などを詳しく表した基本的な地図を何というか？",
            choices: ["地形図","地勢図","分布図","路線図"],
            a: "地形図",
            comment: "2万5千分の1や5万分の1などの縮尺があります。"
        },
        {
            q: "地図上で、方位記号がない場合、通常はどちらの方角が北になっているか？",
            choices: ["上","下","右","左"],
            a: "上",
            comment: "特に指定がない限り、地図の上側が北です。"
        },
        {
            q: "海面からの高さが同じ地点を結んだ線のことを何というか？",
            choices: ["等高線","等圧線","等温線","等深線"],
            a: "等高線",
            comment: "土地の高低や傾斜の様子を知ることができます。"
        },
        {
            q: "等高線の間隔がせまいところは、傾斜はどうなっているか？",
            choices: ["急である","緩やかである","平坦である","窪地である"],
            a: "急である",
            comment: "反対に、間隔が広いところは傾斜が緩やかです。"
        },
        {
            q: "2万5千分の1の地形図で、主曲線（細い線）は何メートルごとに引かれているか？",
            choices: ["10m","20m","50m","100m"],
            a: "10m",
            comment: "計曲線（太い線）は50mごとに引かれています。"
        },
        {
            q: "5万分の1の地形図で、主曲線（細い線）は何メートルごとに引かれているか？",
            choices: ["20m","10m","50m","100m"],
            a: "20m",
            comment: "計曲線（太い線）は100mごとに引かれています。"
        },
        {
            q: "実際の距離を地図上に縮小して表した割合を何というか？",
            choices: ["縮尺","倍率","密度","勾配"],
            a: "縮尺",
            comment: "「実際の距離 × 縮尺の分母」で地図上の長さを計算できます。"
        },
        {
            q: "地図記号「◎」が表す施設は何か？",
            choices: ["市役所（東京都の区役所）","警察署","消防署","郵便局"],
            a: "市役所（東京都の区役所）",
            comment: "二重丸のような記号です。"
        },
        {
            q: "地図記号「文」が表す施設は何か？",
            choices: ["小・中学校","高等学校","図書館","博物館"],
            a: "小・中学校",
            comment: "漢字の「文」をデザインしたものです。"
        },
        {
            q: "地図記号「Ⓧ」のような、丸の中に×が入っている記号が表す施設は？",
            choices: ["警察署","交番","消防署","病院"],
            a: "警察署",
            comment: "交番の記号「✕」とは区別されます。"
        },
        {
            q: "その場所の正確な位置（緯度・経度）を測るための基準となる、地図上では三角の中に点の記号で表されるものは？",
            choices: ["三角点","水準点","電子基準点","標高点"],
            a: "三角点",
            comment: "見通しのよい山頂などに設置されます。"
        },
        {
            q: "その場所の標高を測るための基準となる、主要道路沿いなどに設置される記号は？",
            choices: ["水準点","三角点","道路元標","マイルストーン"],
            a: "水準点",
            comment: "四角形の中に小さな四角がある記号です。"
        },
        {
            q: "現地に出かけて、地形や土地利用の様子などを観察したり、聞き取りを行ったりする調査方法は？",
            choices: ["野外調査（フィールドワーク）","文献調査","実験","アンケート"],
            a: "野外調査（フィールドワーク）",
            comment: "実際の様子を肌で感じることが大切です。"
        },
        {
            q: "図書館や役所、インターネットなどで、本や統計資料を集めて調べる方法は？",
            choices: ["文献調査","野外調査","聞き取り調査","観察"],
            a: "文献調査",
            comment: "野外調査の前に行う予備調査としても重要です。"
        },
        {
            q: "特定のテーマ（主題）に重点をおいて、その分布などを分かりやすく表現した地図を何というか？",
            choices: ["主題図","一般図","地形図","地勢図"],
            a: "主題図",
            comment: "土地利用図、人口分布図、ハザードマップなどがこれにあたります。"
        },
        {
            q: "統計数値を点（ドット）の多さや密度で表した、人口分布などを表すのに適した地図は？",
            choices: ["ドットマップ","階級区分図","流線図","等値線図"],
            a: "ドットマップ",
            comment: "点の集まり具合で、分布の偏りが視覚的にわかります。"
        }
    ],
    "h_ancient_1": [
        {
            q: "現在発見されている最も古い人類の祖先（猿人）として、アフリカで骨が発見されたものを何というか？",
            choices: ["アウストラロピテクス","ネアンデルタール人","クロマニョン人","ジャワ原人"],
            a: "アウストラロピテクス",
            comment: "約700万年～600万年前にアフリカに現れました。"
        },
        {
            q: "人類が二足歩行を始めたことで発達した、道具を作ったり使ったりするための体の部位は？",
            img: "assets/images/history/h_ancient_1_evolution_hand.png",
            choices: ["手（前あし）","あご","犬歯","足の指"],
            a: "手（前あし）",
            comment: "手が自由になったことで道具の使用が可能になり、脳が発達しました。"
        },
        {
            q: "氷河期などの厳しい環境に適応し、火や言葉を使用し始めた人類（原人）は？",
            choices: ["北京原人","アウストラロピテクス","クロマニョン人","縄文人"],
            a: "北京原人",
            comment: "ジャワ原人や北京原人などが「原人」に含まれます。"
        },
        {
            q: "現在の人類の直接の祖先にあたる人類（新人）で、フランスで洞窟壁画などが発見されたのは？",
            img: "assets/images/history/h_ancient_1_cromagnon.png",
            choices: ["クロマニョン人","ネアンデルタール人","アウストラロピテクス","北京原人"],
            a: "クロマニョン人",
            comment: "ラスコー（フランス）やアルタミラ（スペイン）の洞窟壁画を残しました。"
        },
        {
            q: "旧石器時代に使われていた、石を打ち砕いて鋭くしただけの石器を何というか？",
            img: "assets/images/history/h_ancient_1_dasei.png",
            choices: ["打製石器","磨製石器","青銅器","鉄器"],
            a: "打製石器",
            comment: "狩りや採集に使われました。"
        },
        {
            q: "新石器時代に使われ始めた、石を磨いて形を整えた石器を何というか？",
            img: "assets/images/history/h_ancient_1_masei.png",
            choices: ["磨製石器","打製石器","黒曜石","石斧"],
            a: "磨製石器",
            comment: "木を切ったり加工したりするのに適しています。"
        },
        {
            q: "紀元前3000年頃、ナイル川の流域で栄えた文明は？",
            img: "assets/images/history/h_ancient_1_egyptian_civ.png",
            choices: ["エジプト文明","メソポタミア文明","インダス文明","中国文明"],
            a: "エジプト文明",
            comment: "ナイル川の定期的な氾濫を利用して農業が行われました。"
        },
        {
            q: "エジプト文明で作られた、国王の墓と考えられる巨大な建造物は？",
            img: "assets/images/history/h_ancient_1_pyramid.png",
            choices: ["ピラミッド","ジッグラト","万里の長城","ストゥーパ"],
            a: "ピラミッド",
            comment: "クフ王のピラミッドなどが有名です。"
        },
        {
            q: "エジプト文明で使用された、絵のような形をした文字は？",
            img: "assets/images/history/h_ancient_1_hieroglyphs.png",
            choices: ["象形文字","楔形文字","甲骨文字","ラテン文字"],
            a: "象形文字",
            comment: "ヒエログリフとも呼ばれます。"
        },
        {
            q: "チグリス川・ユーフラテス川の流域で栄えた文明は？",
            img: "assets/images/history/h_ancient_1_mesopotamian_civ.png",
            choices: ["メソポタミア文明","エジプト文明","インダス文明","アンデス文明"],
            a: "メソポタミア文明",
            comment: "現在のイラク周辺で栄えました。"
        },
        {
            q: "メソポタミア文明で作られた、「目には目を、歯には歯を」で有名な法律は？",
            img: "assets/images/history/h_ancient_1_hammurabi_1772304299374.png",
            choices: ["ハンムラビ法典","ローマ法大全","ナポレオン法典","御成敗式目"],
            a: "ハンムラビ法典",
            comment: "復讐法の原則で知られますが、身分による違いもありました。"
        },
        {
            q: "粘土板に刻んで使用された、メソポタミア文明の文字は？",
            choices: ["楔形文字","象形文字","甲骨文字","アルファベット"],
            a: "楔形文字",
            comment: "葦の茎などを押し付けて文字を書きました。"
        },
        {
            q: "インダス川流域で栄え、モヘンジョ・ダロなどの都市遺跡を残した文明は？",
            img: "assets/images/history/h_ancient_1_indus.png",
            choices: ["インダス文明","ガンジス文明","黄河文明","メソポタミア文明"],
            a: "インダス文明",
            comment: "レンガ造りの建物や下水道が整備されていました。"
        },
        {
            q: "黄河流域で栄えた、現在確認されている中国最古の王朝は？",
            choices: ["殷","秦","漢","周"],
            a: "殷",
            comment: "青銅器や甲骨文字が使用されました。"
        },
        {
            q: "亀の甲羅や牛の骨に刻まれ、現在の漢字の元となった文字は？",
            img: "assets/images/history/h_ancient_1_oracle_bone.png",
            choices: ["甲骨文字","金石文字","篆書体","楔形文字"],
            a: "甲骨文字",
            comment: "占いの結果などを記録するために使われました。"
        },
        {
            q: "紀元前6世紀ごろにインドでシャカ（釈迦）が開いた宗教は？",
            img: "assets/images/history/h_ancient_1_buddhism.png",
            choices: ["仏教","キリスト教","イスラム教","ヒンドゥー教"],
            a: "仏教",
            comment: "人は平等であり、修行によって苦しみから救われると説きました。"
        },
        {
            q: "パレスチナ地方でイエスが広め、「神の愛」を説いた宗教は？",
            img: "assets/images/history/h_ancient_christianity_1772414580245.png",
            choices: ["キリスト教","ユダヤ教","イスラム教","仏教"],
            a: "キリスト教",
            comment: "聖書（新約聖書）を聖典とします。"
        },
        {
            q: "エジプト文明の農業に大きな恵みをもたらした、アフリカ大陸を北上して地中海に注ぐ世界最長の川は？",
            img: "assets/images/history/h_ancient_nile_1772414594835.png",
            choices: ["ナイル川","チグリス川","インダス川","黄河"],
            a: "ナイル川",
            comment: "「エジプトはナイルのたまもの」という言葉で知られています。"
        },
        {
            q: "エジプト文明で作られた、ナイル川の氾濫の時期を知るために星の動きなどを元にした暦は？",
            choices: ["太陽暦","太陰暦","太陰太陽暦","グレゴリオ暦"],
            a: "太陽暦",
            comment: "現在の私たちが使っている暦（グレゴリオ暦）の元になりました。"
        },
        {
            q: "メソポタミア文明が栄えた地域を流れる2つの川は、チグリス川と、もう一つは何川？",
            choices: ["ユーフラテス川","ナイル川","ガンジス川","揚子江"],
            a: "ユーフラテス川",
            comment: "この2つの川の間の地域を「メソポタミア（川の間の土地）」と呼びます。"
        },
        {
            q: "メソポタミア文明で作られた、月の満ち欠けを基準にした暦は？",
            choices: ["太陰暦","太陽暦","ユリウス暦","マヤ暦"],
            a: "太陰暦",
            comment: "1年が354日となるため、うるう月を設けて調整していました。"
        },
        {
            q: "古代中国の「殷」の時代に使われた、占いの結果などを記録するための文字（漢字の原型）は？",
            img: "assets/images/history/h_ancient_1_oracle_bone.png",
            choices: ["甲骨文字","象形文字","楔形文字","金石文"],
            a: "甲骨文字",
            comment: "亀の甲羅や牛の骨に刻まれました。"
        },
        {
            q: "日本で「旧石器時代」の存在が証明されるきっかけとなった、群馬県で相沢忠洋氏が発見した遺跡は？",
            img: "assets/images/history/h_ancient_1_iwajuku.png",
            choices: ["岩宿遺跡","三内丸山遺跡","吉野ヶ里遺跡","登呂遺跡"],
            a: "岩宿遺跡",
            comment: "関東ローム層の中から打製石器が発見されました。"
        },
        {
            q: "アレクサンドロス大王の遠征によって生まれた、ギリシャ文化とオリエント文化が融合した文化は？",
            choices: ["ヘレニズム文化","ルネサンス","ガンダーラ美術","天平文化"],
            a: "ヘレニズム文化",
            comment: "「ギリシャ風の」という意味があります。"
        }
    ],
    "h_ancient_2": [
        {
            q: "紀元前221年に中国を統一し、最初の皇帝（始皇帝）となった人物が建てた国は？",
            choices: ["秦","漢","殷","周"],
            a: "秦",
            comment: "貨幣や文字、物差しの統一を行いました。"
        },
        {
            q: "秦の始皇帝が、北方の遊牧民の侵入を防ぐために修築した巨大な建造物は？",
            img: "assets/images/history/h_ancient_2_greatwall.png",
            choices: ["万里の長城","ピラミッド","コロッセオ","紫禁城"],
            a: "万里の長城",
            comment: "宇宙から見える建造物と言われることもあります（実際には肉眼では見えにくいですが）。"
        },
        {
            q: "秦の後に中国を統一し、約400年続いた帝国は？",
            choices: ["漢","唐","隋","宋"],
            a: "漢",
            comment: "この時代に現在の中国の民族（漢民族）の基礎ができました。"
        },
        {
            q: "漢の時代に開かれた、中国と西方（ローマ帝国など）を結ぶ交易路を何というか？",
            choices: ["シルクロード（絹の道）","象牙の道","塩の道","茶の道"],
            a: "シルクロード（絹の道）",
            comment: "中国からは絹織物が、西方からは馬やブドウなどが伝わりました。"
        },
        {
            q: "紀元前6世紀ごろの中国で、孔子が説いた教えは？",
            choices: ["儒教","道教","仏教","キリスト教"],
            a: "儒教",
            comment: "「仁（思いやり）」や「礼（礼儀）」を重視し、後の政治に大きな影響を与えました。"
        },
        {
            q: "朝鮮半島北部から中国東北部にかけ、紀元前後こ頃に栄えた国は？",
            choices: ["高句麗","新羅","百済","任那"],
            a: "高句麗",
            comment: "広大な領土を持ち、強大な勢力を誇りました。"
        },
        {
            q: "4世紀ごろ、朝鮮半島の南西部（日本に近い側）にあった国は？",
            choices: ["百済","新羅","高句麗","伽耶"],
            a: "百済",
            comment: "日本（ヤマト政権）と友好関係にあり、仏教などを伝えました。"
        },
        {
            q: "4世紀ごろ、朝鮮半島の南東部にあった国は？",
            choices: ["新羅","百済","高句麗","秦"],
            a: "新羅",
            comment: "後に唐と結んで朝鮮半島を統一しました。"
        },
        {
            q: "古代の日本が朝鮮半島南部の地域（伽耶諸国など）と深い関わりを持っていたことを示す、鉄資源などを求めて進出していた地域の呼び名は？",
            choices: ["任那（加羅）","楽浪郡","帯方郡","倭"],
            a: "任那（加羅）",
            comment: "日本はここから鉄や進んだ技術を取り入れました。"
        },
        {
            q: "中国の歴史書『漢書』地理志に記された、紀元前1世紀ごろの日本の呼び名は？",
            img: "assets/images/history/h_ancient_2_wakoku.png",
            choices: ["倭","日本","大和","東夷"],
            a: "倭",
            comment: "「百余りの国に分かれていた」と記されています。"
        },
        {
            q: "57年、後漢の光武帝から金印を授かったとされる、九州北部にあった国の王は？",
            img: "assets/images/history/h_ancient_2_nakoku.png",
            choices: ["奴国の王","邪馬台国の女王","大和の大王","百済の王"],
            a: "奴国の王",
            comment: "金印には「漢委奴国王」と刻まれています。"
        },
        {
            q: "福岡県の志賀島で発見された、国宝でもある金で作られた印は？",
            img: "assets/images/history/h_ancient_2_kinin.png",
            choices: ["金印","銅鐸","銅鏡","鉄剣"],
            a: "金印",
            comment: "江戸時代に農作業中の甚兵衛さんによって発見されました。"
        },
        {
            q: "3世紀ごろ、中国の歴史書『魏志』倭人伝に登場する、30余りの国を従えた女王は？",
            img: "assets/images/history/h_ancient_2_himiko.png",
            choices: ["卑弥呼","推古天皇","持統天皇","北条政子"],
            a: "卑弥呼",
            comment: "邪馬台国の女王として、占いやまじないで国を治めました。"
        },
        {
            q: "卑弥呼が使いを送り、親魏倭王の称号や鏡などを授かった中国の王朝は？",
            img: "assets/images/history/h_ancient_2_wei.png",
            choices: ["魏","呉","蜀","漢"],
            a: "魏",
            comment: "三国志の時代の国の一つです。"
        },
        {
            q: "邪馬台国の女王・卑弥呼が使いを送った「魏」は、中国の三国時代の国の一つですが、残りの二つは？",
            choices: ["呉・蜀","秦・漢","隋・唐","宋・明"],
            a: "呉・蜀",
            comment: "魏・呉・蜀が争った三国志の時代です。"
        }
    ],
    "h_ancient_3": [
        {
            q: "約1万年以上前から始まった、狩りや採集を行い、縄目の文様がある土器を使用していた時代は？",
            img: "assets/images/history/h_ancient_3_jomon.png",
            choices: ["縄文時代","弥生時代","旧石器時代","古墳時代"],
            a: "縄文時代",
            comment: "気候が温暖になり、海面が上昇して日本列島が形成されました。"
        },
        {
            q: "縄文時代の人々が住んでいた、地面を掘り下げて床を作り、柱を立てて屋根をかけた住居は？",
            img: "assets/images/history/h_ancient_3_tateana.png",
            choices: ["竪穴住居","高床倉庫","平地住居","洞窟"],
            a: "竪穴住居",
            comment: "集落を作って定住生活を始めるようになりました。"
        },
        {
            q: "縄文時代の人々が食べ物の残りかすなどを捨てた場所で、当時の生活を知る手がかりとなるものは？",
            img: "assets/images/history/h_ancient_3_kaizuka.png",
            choices: ["貝塚","古墳","遺跡","土偶"],
            a: "貝塚",
            comment: "東京の大森貝塚が有名です（モースが発見）。"
        },
        {
            q: "縄文時代に作られた、魔除けや豊作を祈るために使われたと考えられる人形（ひとがた）の土製品は？",
            choices: ["土偶","埴輪","銅鐸","土器"],
            a: "土偶",
            comment: "女性をかたどったものが多く発見されています。"
        },
        {
            q: "青森県にある、縄文時代の最大級の集落遺跡は？",
            img: "assets/images/history/h_ancient_3_sannaimaruyama.png",
            choices: ["三内丸山遺跡","吉野ヶ里遺跡","登呂遺跡","岩宿遺跡"],
            a: "三内丸山遺跡",
            comment: "栗の栽培なども行われていたことがわかっています。"
        },
        {
            q: "紀元前4世紀ごろ、大陸から伝わり、日本の生活を大きく変化させた農業技術は？",
            img: "assets/images/history/h_ancient_rice_farming_1772414609121.png",
            choices: ["稲作","畑作","酪農","養蚕"],
            a: "稲作",
            comment: "九州北部から伝わり、西日本を中心に広がりました。"
        },
        {
            q: "稲作が広まったことによって始まった、薄手で硬く、赤褐色の土器が使われた時代は？",
            img: "assets/images/history/h_ancient_3_yayoi.png",
            choices: ["弥生時代","縄文時代","古墳時代","飛鳥時代"],
            a: "弥生時代",
            comment: "東京都の弥生町で土器が発見されたことから名付けられました。"
        },
        {
            q: "弥生時代に稲の穂を摘み取るために使われた、石で作られた道具は？",
            img: "assets/images/history/h_ancient_3_ishibocho.png",
            choices: ["石包丁","打製石器","磨製石器","鉄の鎌"],
            a: "石包丁",
            comment: "穂首刈りという方法で収穫を行いました。"
        },
        {
            q: "収穫した米を湿気やネズミから守るために作られた、床を高くした建物は？",
            img: "assets/images/history/h_ancient_3_takayuka.png",
            choices: ["高床倉庫","竪穴住居","穀物倉庫","貯蔵庫"],
            a: "高床倉庫",
            comment: "柱に「ねずみ返し」という板がつけられていました。"
        },
        {
            q: "稲作とともに大陸から伝わった、祭りの道具（銅鐸など）や武器・工具として使われた道具は？",
            img: "assets/images/history/h_ancient_3_kinzokuki.png",
            choices: ["金属器","石器","骨角器","土器"],
            a: "金属器",
            comment: "青銅器と鉄器がほぼ同時に伝わりました。"
        },
        {
            q: "佐賀県にある、弥生時代の大規模な環濠集落の遺跡は？",
            img: "assets/images/history/h_ancient_3_yoshinogari.png",
            choices: ["吉野ヶ里遺跡","三内丸山遺跡","登呂遺跡","荒神谷遺跡"],
            a: "吉野ヶ里遺跡",
            comment: "集落の周りに濠（ほり）を巡らせて、敵の侵入を防いでいました。"
        },
        {
            q: "静岡県にある、水田跡や住居跡が見つかった弥生時代の代表的な遺跡は？",
            img: "assets/images/history/h_ancient_3_toro.png",
            choices: ["登呂遺跡","三内丸山遺跡","板付遺跡","菜畑遺跡"],
            a: "登呂遺跡",
            comment: "木製の農具なども発見されています。"
        },
        {
            q: "弥生時代、稲作が広まるにつれて、土地や水をめぐる争いが起き、やがて何が形成されていったか？",
            choices: ["クニ（小国）","帝国","幕府","県"],
            a: "クニ（小国）",
            comment: "指導者が現れ、身分の差も生まれていきました。"
        }
    ],
    "h_ancient_4": [
        {
            q: "3世紀後半から作られ始めた、大王（天皇）などの有力者の墓を何というか？",
            img: "assets/images/history/h_ancient_4_kofun.png",
            choices: ["古墳","貝塚","ピラミッド","陵墓"],
            a: "古墳",
            comment: "各地に作られ、その広がりからヤマト政権の支配力がわかります。"
        },
        {
            q: "日本独特の古墳の形で、円と四角を組み合わせた鍵穴のような形をしているものを何というか？",
            img: "assets/images/history/h_ancient_4_zenpokoenfun.png",
            choices: ["前方後円墳","円墳","方墳","上円下方墳"],
            a: "前方後円墳",
            comment: "世界最大級の墓である「大仙古墳」もこの形です。"
        },
        {
            q: "大阪府にある、世界最大級の面積を持つ日本最大の前方後円墳は？",
            img: "assets/images/history/h_ancient_4_daisenkofun.png",
            choices: ["大仙古墳（仁徳天皇陵）","五色塚古墳","稲荷山古墳","江田船山古墳"],
            a: "大仙古墳（仁徳天皇陵）",
            comment: "クフ王のピラミッド（エジプト）、秦の始皇帝陵（中国）と並ぶ世界三大墳墓の一つです。"
        },
        {
            q: "古墳の頂上や周囲に並べられた、人や馬、家などの形をした焼物は？",
            img: "assets/images/history/h_ancient_4_haniwa.png",
            choices: ["埴輪","土偶","銅鐸","土器"],
            a: "埴輪",
            comment: "死者の魂を守ったり、権威を示したりするために置かれたと考えられています。"
        },
        {
            q: "古墳時代を中心に、大和（奈良県）地方の勢力が中心となって各地の豪族を従えて作った政治連合は？",
            img: "assets/images/history/h_ancient_4_yamato.png",
            choices: ["ヤマト政権","鎌倉幕府","室町幕府","江戸幕府"],
            a: "ヤマト政権",
            comment: "後の朝廷へと発展していきました。"
        },
        {
            q: "ヤマト政権のトップである王は、のちに天皇と呼ばれるようになるが、当時は何と呼ばれていたか？",
            choices: ["大王（おおきみ）","将軍","国王","皇帝"],
            a: "大王（おおきみ）",
            comment: "中国や朝鮮の記録にも登場します。"
        },
        {
            q: "埼玉県の稲荷山古墳から出土した鉄剣に刻まれていた名前から、関東地方まで勢力を伸ばしていたことがわかる大王は？",
            img: "assets/images/history/h_ancient_4_wakatakeru.png",
            choices: ["ワカタケル大王（雄略天皇）","聖徳太子","天智天皇","聖武天皇"],
            a: "ワカタケル大王（雄略天皇）",
            comment: "熊本県の江田船山古墳からも同じ名前が刻まれた鉄刀が見つかっています。"
        },
        {
            q: "中国の歴史書『宋書』倭国伝に記されている、中国に使いを送った5人の倭の王をまとめて何というか？",
            img: "assets/images/history/h_ancient_4_fivekings.png",
            choices: ["倭の五王","五摂家","五賢帝","五大老"],
            a: "倭の五王",
            comment: "讃・珍・済・興・武の5人で、武はワカタケル大王と考えられています。"
        },
        {
            q: "朝鮮半島などから日本に移り住み、漢字や儒教、土木技術などを伝えた人々を何というか？",
            choices: ["渡来人","遣唐使","遣隋使","防人"],
            a: "渡来人",
            comment: "日本の文化や技術の発展に大きく貢献しました。"
        },
        {
            q: "渡来人によって伝えられた、高温で焼かれた硬い灰色の土器を何というか？",
            img: "assets/images/history/h_ancient_4_sueki.png",
            choices: ["須恵器","縄文土器","弥生土器","土師器"],
            a: "須恵器",
            comment: "朝鮮半島の技術で作られました。"
        },
        {
            q: "漢字を伝えたとされる、百済から来た渡来人は？",
            choices: ["王仁（わに）","鑑真","行基","空海"],
            a: "王仁（わに）",
            comment: "『論語』や『千字文』を伝えたと言われています。"
        },
        {
            q: "6世紀半ば、百済の聖明王から日本の欽明天皇に伝えられたものは？",
            img: "assets/images/history/h_ancient_4_buddhism_arrival.png",
            choices: ["仏教","キリスト教","イスラム教","鉄砲"],
            a: "仏教",
            comment: "仏像や経典が贈られました。"
        },
        {
            q: "4世紀末、倭（日本）が朝鮮半島へ進出し、高句麗と戦ったことなどが刻まれている石碑は？",
            img: "assets/images/history/h_ancient_4_gwanggaeto.png",
            choices: ["好太王碑（広開土王碑）","金印","多胡碑","那須国造碑"],
            a: "好太王碑（広開土王碑）",
            comment: "中国の吉林省（高句麗の都があった場所）にあります。"
        },
        {
            q: "ヤマト政権が、豪族に氏（うじ）や姓（かばね）を与えて、身分や役割を定めた制度は？",
            choices: ["氏姓制度","身分制度","律令制度","幕藩体制"],
            a: "氏姓制度",
            comment: "臣（おみ）や連（むらじ）などの姓（カバネ）が与えられました。"
        }
    ],
    "h_ancient_5": [
        {
            q: "6世紀末、対立していた物部氏を倒し、政治の実権を握った豪族は？",
            choices: ["蘇我氏","藤原氏","平氏","源氏"],
            a: "蘇我氏",
            comment: "仏教の受け入れを巡って物部氏と対立していました。"
        },
        {
            q: "593年、推古天皇の摂政となり、天皇中心の国づくりを進めた人物は？",
            img: "assets/images/history/h_ancient_shotoku_1772414719515.png",
            choices: ["聖徳太子（厩戸皇子）","中大兄皇子","天武天皇","聖武天皇"],
            a: "聖徳太子（厩戸皇子）",
            comment: "「摂政」とは、天皇が女性や幼少の際に代わりに政治を行う職のことです。"
        },
        {
            q: "日本で最初の女性の天皇であり、聖徳太子を摂政とした天皇は？",
            choices: ["推古天皇","持統天皇","元明天皇","斉明天皇"],
            a: "推古天皇",
            comment: "飛鳥京（奈良県）に都を置きました。"
        },
        {
            q: "603年、家柄にとらわれず、才能や功績のある人物を役人に取り立てるために定められた制度は？",
            choices: ["冠位十二階","十七条の憲法","班田収授法","大宝律令"],
            a: "冠位十二階",
            comment: "冠の色（紫・青・赤・黄・白・黒の濃淡）で位を区別しました。"
        },
        {
            q: "604年、役人の心構えを示すために定められた、「和を以て貴しと為す」で始まる法は？",
            choices: ["十七条の憲法","御成敗式目","武家諸法度","大宝律令"],
            a: "十七条の憲法",
            comment: "天皇の命令に従うことや、仏教を敬うことなどが説かれました。"
        },
        {
            q: "中国（隋）の進んだ制度や文化を取り入れるために派遣された使節を何というか？",
            choices: ["遣隋使","遣唐使","遣明使","朝鮮通信使"],
            a: "遣隋使",
            comment: "対等な外交を目指して送られました。"
        },
        {
            q: "607年、小野妹子らが派遣された中国の王朝は？",
            choices: ["隋","唐","漢","宋"],
            a: "隋",
            comment: "日本（倭）の王から隋の皇帝への手紙を持参しました。"
        },
        {
            q: "遣隋使として派遣され、「日出づる処の天子…」で始まる手紙を隋の皇帝（煬帝）に渡した人物は？",
            choices: ["小野妹子","阿倍仲麻呂","鑑真","菅原道真"],
            a: "小野妹子",
            comment: "隋の皇帝を怒らせましたが、国交を開くことに成功しました。"
        },
        {
            q: "聖徳太子が建立したとされる、現存する世界最古の木造建築物は？",
            img: "assets/images/history/h_ancient_5_horyuji.png",
            choices: ["法隆寺","東大寺","唐招提寺","平等院鳳凰堂"],
            a: "法隆寺",
            comment: "奈良県にあり、世界遺産に登録されています。"
        },
        {
            q: "飛鳥時代に栄えた、日本で最初の仏教文化を何というか？",
            img: "assets/images/history/h_ancient_5_asuka_culture.png",
            choices: ["飛鳥文化","天平文化","国風文化","化政文化"],
            a: "飛鳥文化",
            comment: "北魏（中国）や朝鮮半島の影響を受けた、素朴で力強い文化です。"
        },
        {
            q: "法隆寺に安置されている、飛鳥文化を代表する仏像のひとつで、アルカイックスマイル（古風な微笑み）で知られるものは？",
            img: "assets/images/history/h_ancient_5_shakasonzo.png",
            choices: ["釈迦三尊像","興福寺阿修羅像","東大寺大仏","弥勒菩薩半跏思惟像"],
            a: "釈迦三尊像",
            comment: "鞍作鳥（止利仏師）によって作られました。"
        },
        {
            q: "聖徳太子が亡くなった後、蘇我氏（蝦夷・入鹿）が権力を独占し、対立したのは誰の一族か？",
            img: "assets/images/history/h_ancient_shotoku_1772414719515.png",
            choices: ["天皇家（聖徳太子の一族）","藤原氏","平氏","源氏"],
            a: "天皇家（聖徳太子の一族）",
            comment: "聖徳太子の息子（山背大兄王）を攻め滅ぼすなど、専横を極めました。"
        }
    ],
    "h_ancient_6": [
        {
            q: "645年、中大兄皇子と中臣鎌足らが協力して蘇我氏（蘇我入鹿）を倒し、始めた政治改革を何というか？",
            choices: ["大化の改新","明治維新","建武の新政","寛政の改革"],
            a: "大化の改新",
            comment: "天皇中心の政治を目指しました。"
        },
        {
            q: "大化の改新で示された、土地と人民を国家（天皇）のものとする方針を何というか？",
            choices: ["公地公民","版籍奉還","廃藩置県","墾田永年私財法"],
            a: "公地公民",
            comment: "それまで豪族が支配していた土地や人民を、国が直接支配するようにしました。"
        },
        {
            q: "大化の改新の中心人物の一人で、中大兄皇子とともに蘇我氏を倒し、のちに藤原の姓を賜った人物は？",
            choices: ["中臣鎌足（藤原鎌足）","小野妹子","坂上田村麻呂","鑑真"],
            a: "中臣鎌足（藤原鎌足）",
            comment: "藤原氏の繁栄の基礎を築きました。"
        },
        {
            q: "663年、百済の復興を助けるために朝鮮半島へ出兵したが、唐・新羅の連合軍に大敗した戦いは？",
            choices: ["白村江の戦い","壬申の乱","壇ノ浦の戦い","元寇"],
            a: "白村江の戦い",
            comment: "敗戦後、九州に大宰府や防人（さきもり）を置いて防備を固めました。"
        },
        {
            q: "中大兄皇子が即位した後の名前（天皇名）は？",
            choices: ["天智天皇","天武天皇","聖武天皇","推古天皇"],
            a: "天智天皇",
            comment: "日本初の全国的な戸籍（庚午年籍）を作りました。"
        },
        {
            q: "天智天皇の死後、跡継ぎを巡って弟（大海人皇子）と息子（大友皇子）が争い、弟が勝利した戦いは？",
            choices: ["壬申の乱","承久の乱","保元の乱","平治の乱"],
            a: "壬申の乱",
            comment: "勝利した大海人皇子は天武天皇として即位し、強力な政治を行いました。"
        },
        {
            q: "天武天皇の皇后で、夫の後を継いで即位し、本格的な都である藤原京を造営した天皇は？",
            img: "assets/images/history/h_ancient_6_jito.png",
            choices: ["持統天皇","推古天皇","元明天皇","称徳天皇"],
            a: "持統天皇",
            comment: "百人一首の「春過ぎて夏来にけらし…」の歌でも有名です。"
        },
        {
            q: "701年に制定された、唐の法律にならって政治の仕組みや刑罰の決まりを定めた法律は？",
            choices: ["大宝律令","御成敗式目","武家諸法度","十七条の憲法"],
            a: "大宝律令",
            comment: "「律」は刑罰の決まり、「令」は政治の仕組みの決まりのことです。"
        },
        {
            q: "法律（律令）に基づいて国を治める国家体制を何というか？",
            choices: ["律令国家","封建国家","立憲国家","民主国家"],
            a: "律令国家",
            comment: "天皇を中心に、貴族や役人が政治を行う仕組みが整いました。"
        },
        {
            q: "律令制度のもとで、6歳以上の男女に口分田を与え、死ぬと国に返させる制度は？",
            img: "assets/images/history/h_ancient_handen_1772414732823.png",
            choices: ["班田収授法","墾田永年私財法","地租改正","検地"],
            a: "班田収授法",
            comment: "人々には租・調・庸などの税や兵役の負担が課せられました。"
        },
        {
            q: "収穫量の約3%の稲を納める税を何というか？",
            img: "assets/images/history/h_ancient_6_so_tax.png",
            choices: ["租","調","庸","雑徭"],
            a: "租",
            comment: "地方の倉に納められました。"
        },
        {
            q: "都での労役の代わりに布などを納める税を何というか？",
            choices: ["庸","調","租","公出挙"],
            a: "庸",
            comment: "「調」は特産物を納める税です。"
        },
        {
            q: "708年に発行された、唐の貨幣にならって作られた日本最初の流通貨幣は？",
            choices: ["和同開珎","寛永通宝","明銭","円"],
            a: "和同開珎",
            comment: "「富本銭」というさらに古いお金も見つかっていますが、広く流通したのはこちらです。"
        }
    ],
    "h_ancient_7": [
        {
            q: "710年、唐の都「長安」にならって奈良に造られた都は？",
            img: "assets/images/history/h_ancient_7_heijokyo.png",
            choices: ["平城京","平安京","藤原京","長岡京"],
            a: "平城京",
            comment: "元明天皇が都を移し、「なんと（710）立派な平城京」の語呂合わせで知られます。"
        },
        {
            q: "平城京のモデルとなった、中国（唐）の都は？",
            img: "assets/images/history/h_ancient_7_changan.png",
            choices: ["長安","洛陽","北京","建康"],
            a: "長安",
            comment: "東西南北に道路が碁盤の目のように走る計画都市でした。"
        },
        {
            q: "平城京に都を移した時の天皇は？",
            img: "assets/images/history/h_ancient_7_genmei.png",
            choices: ["元明天皇","聖武天皇","持統天皇","推古天皇"],
            a: "元明天皇",
            comment: "藤原京から遷都しました。"
        },
        {
            q: "平城京で使われた、役人が文字や記録を書くために使った木の札を何というか？",
            img: "assets/images/history/h_ancient_7_mokkan.png",
            choices: ["木簡","竹簡","パピルス","羊皮紙"],
            a: "木簡",
            comment: "紙は貴重だったため、木簡が多く使われました。"
        },
        {
            q: "奈良時代、重い税や労役の負担に耐えかねて、農民が口分田を捨てて逃げ出したことを何というか？",
            choices: ["逃散","一揆","打ちこわし","ストライキ"],
            a: "逃散",
            comment: "戸籍を偽って税を逃れようとする人（偽籍）もいました。"
        },
        {
            q: "神話や伝承をもとに、天武天皇の命で編纂され、712年に完成した日本最古の歴史書は？",
            img: "assets/images/history/h_ancient_7_kojiki.png",
            choices: ["古事記","日本書紀","風土記","万葉集"],
            a: "古事記",
            comment: "太安万侶（おおのやすまろ）が筆録しました。"
        },
        {
            q: "720年に完成した、国造りの様子などが漢文で年代順に記された歴史書は？",
            img: "assets/images/history/h_ancient_7_nihon_shoki.png",
            choices: ["日本書紀","古事記","魏志倭人伝","竹取物語"],
            a: "日本書紀",
            comment: "舎人親王らが中心となって編纂されました。"
        },
        {
            q: "『古事記』と『日本書紀』をあわせて何と呼ぶか？",
            choices: ["記紀","六国史","四鏡","史記"],
            a: "記紀",
            comment: "古代史研究の重要な史料となっています。"
        },
        {
            q: "地方の国ごとに、自然、産物、伝説などを記録して提出させた書物は？",
            img: "assets/images/history/h_ancient_7_fudoki.png",
            choices: ["風土記","日本書紀","古事記","万葉集"],
            a: "風土記",
            comment: "出雲国風土記などがほぼ完全な形で残っています。"
        },
        {
            q: "天皇や貴族だけでなく、防人や農民の歌も収められている、日本最古の和歌集は？",
            img: "assets/images/history/h_ancient_8_manyoshu.png",
            choices: ["万葉集","古今和歌集","新古今和歌集","百人一首"],
            a: "万葉集",
            comment: "大伴家持らが編集に関わったとされ、約4500首が収められています。"
        },
        {
            q: "万葉集に収められている「貧窮問答歌」を詠み、農民の苦しい生活を描いた人物は？",
            img: "assets/images/history/h_ancient_8_yamanoue_no_okura.png",
            choices: ["山上憶良","大伴家持","柿本人麻呂","額田王"],
            a: "山上憶良",
            comment: "「世の中を 憂しとやさしと おもへども…」の歌も有名です。"
        }
    ],
    "h_ancient_8": [
        {
            q: "奈良時代、仏教の力で国を守り、災害や疫病を鎮めようとした天皇は？",
            choices: ["聖武天皇","天智天皇","天武天皇","桓武天皇"],
            a: "聖武天皇",
            comment: "国ごとに国分寺・国分尼寺を建てるよう命じました。"
        },
        {
            q: "聖武天皇の命令で、都（奈良）の東大寺に作られた巨大な仏像は？",
            img: "assets/images/history/h_ancient_8_daibutsu.png",
            choices: ["大仏（盧舎那仏）","釈迦三尊像","阿修羅像","弥勒菩薩像"],
            a: "大仏（盧舎那仏）",
            comment: "国民の協力を呼びかけて作られました。"
        },
        {
            q: "大仏建立に協力し、民衆への布教や社会事業（橋や池を作るなど）を行った僧は？",
            img: "assets/images/history/h_ancient_8_gyoki.png",
            choices: ["行基","鑑真","空海","最澄"],
            a: "行基",
            comment: "初めは朝廷から弾圧されましたが、民衆の絶大な支持を得て大僧正となりました。"
        },
        {
            q: "聖武天皇の時代に栄えた、中国（唐）や西域などの影響を受けた国際色豊かな仏教文化を何というか？",
            choices: ["天平文化","飛鳥文化","国風文化","元禄文化"],
            a: "天平文化",
            comment: "シルクロードを通じてもたらされた文物が数多く残っています。"
        },
        {
            q: "聖武天皇の遺品などが収められている、東大寺にある校倉造（あぜくらづくり）の建物は？",
            img: "assets/images/history/h_ancient_8_shosoin.png",
            choices: ["正倉院","法隆寺夢殿","平等院鳳凰堂","唐招提寺金堂"],
            a: "正倉院",
            comment: "「シルクロードの終着点」とも呼ばれ、ペルシャ風のガラス器や楽器などが保管されていました。"
        },
        {
            q: "度重なる遭難や失明を乗り越えて来日し、正しい仏教の戒律を伝えた唐の僧は？",
            choices: ["鑑真","行基","最澄","空海"],
            a: "鑑真",
            comment: "6回目の航海でようやく日本に到着しました。"
        },
        {
            q: "鑑真が奈良に開いた、金堂などの天平様式の建物が残る寺院は？",
            img: "assets/images/history/h_ancient_8_toshodaiji.png",
            choices: ["唐招提寺","東大寺","薬師寺","興福寺"],
            a: "唐招提寺",
            comment: "鑑真の像（鑑真和上坐像）も安置されています。"
        },
        {
            q: "興福寺にある、三つの顔と六つの腕を持つ仏像で、天平文化を代表する彫刻作品は？",
            img: "assets/images/history/h_ancient_8_ashura.png",
            choices: ["阿修羅像","弥勒菩薩像","金剛力士像","四天王像"],
            a: "阿修羅像",
            comment: "少年のような表情をした繊細な作りが特徴です。"
        },
        {
            q: "「春過ぎて　夏来にけらし　白妙の　衣ほすてふ　天の香久山」の歌を詠んだ天皇は？",
            img: "assets/images/history/h_ancient_6_jito.png",
            choices: ["持統天皇","天智天皇","聖武天皇","元明天皇"],
            a: "持統天皇",
            comment: "天智天皇の娘であり、天武天皇の皇后です。"
        },
        {
            q: "東大寺の正倉院に見られる、湿気を調整する機能に優れた建築様式は？",
            img: "assets/images/history/h_ancient_8_azekura.png",
            choices: ["校倉造","寝殿造","権現造","書院造"],
            a: "校倉造",
            comment: "三角の材木（校木）を井桁に積み上げて壁を作っています。"
        },
        {
            q: "聖武天皇の后で、聖武天皇とともに仏教を厚く信仰し、孤児や病人のための施設を作った人物は？",
            img: "assets/images/history/h_ancient_8_empress_komyo.png",
            choices: ["光明皇后","持統天皇","推古天皇","北条政子"],
            a: "光明皇后",
            comment: "藤原不比等の娘であり、皇族以外で初めて皇后になりました。"
        },
        {
            q: "743年、聖武天皇が出した、新しく開墾した土地の永久私有を認める法律は？",
            img: "assets/images/history/h_ancient_7_konden_einen_shizai_ho.png",
            choices: ["墾田永年私財法","三世一身法","班田収授法","太閤検地"],
            a: "墾田永年私財法",
            comment: "これにより、公地公民の原則が崩れ始めました。"
        },
        {
            q: "墾田永年私財法によって広がった、貴族や寺社の私有地を何というか？",
            img: "assets/images/history/h_ancient_8_shoen.png",
            choices: ["荘園","公領","幕府","屯田兵"],
            a: "荘園",
            comment: "平安時代にかけてどんどん増えていきました。"
        },
        {
            q: "遣唐使として唐に渡り、玄宗皇帝に重用されたが、日本への帰国を果たせずに現地で亡くなった人物は？",
            img: "assets/images/history/h_ancient_8_abe_no_nakamaro.png",
            choices: ["阿倍仲麻呂","小野妹子","菅原道真","吉備真備"],
            a: "阿倍仲麻呂",
            comment: "「天の原 ふりさけ見れば 春日なる…」という和歌を詠みました。"
        }
    ],
    "h_ancient_9": [
        {
            q: "794年、桓武天皇が京都に移した、以後1000年以上日本の都となった都市は？",
            choices: ["平安京","平城京","長岡京","鎌倉"],
            a: "平安京",
            comment: "「鳴くよ（794）ウグイス平安京」の語呂合わせで知られます。"
        },
        {
            q: "桓武天皇の命を受け、東北地方の蝦夷（えみし）を平定するために征夷大将軍に任命された人物は？",
            choices: ["坂上田村麻呂","阿倍仲麻呂","源頼朝","足利尊氏"],
            a: "坂上田村麻呂",
            comment: "京都の清水寺を建てたことでも知られています。"
        },
        {
            q: "最澄が開き、比叡山延暦寺を総本山とする仏教の宗派は？",
            img: "assets/images/history/h_ancient_9_tendai.png",
            choices: ["天台宗","真言宗","浄土宗","浄土真宗"],
            a: "天台宗",
            comment: "最澄は遣唐使として唐に渡り、教えを持ち帰りました。"
        },
        {
            q: "空海が開き、高野山金剛峯寺を総本山とする仏教の宗派は？",
            img: "assets/images/history/h_ancient_9_shingon.png",
            choices: ["真言宗","天台宗","禅宗","日蓮宗"],
            a: "真言宗",
            comment: "加持祈祷（お祈り）によって災いを取り除くことを重視しました。"
        },
        {
            q: "894年、菅原道真の提案によって停止されたものは？",
            img: "assets/images/history/h_ancient_kentoshi_1772414751956.png",
            choices: ["遣唐使","遣隋使","勘合貿易","朱印船貿易"],
            a: "遣唐使",
            comment: "唐の衰えと、往来の危険性が理由でした。これにより日本独自の文化（国風文化）が育ちました。"
        },
        {
            q: "藤原氏が、天皇が幼い時は「摂政」、成人してからは「関白」という職について行った政治を何というか？",
            choices: ["摂関政治","院政","武家政治","執権政治"],
            a: "摂関政治",
            comment: "娘を天皇の后にし、その子を天皇にすることで権力を握りました。"
        },
        {
            q: "「この世をば　わが世とぞ思う…」の歌を詠み、摂関政治の全盛期を築いた人物は？",
            choices: ["藤原道長","藤原頼通","平清盛","源頼朝"],
            a: "藤原道長",
            comment: "この歌は「望月の欠けたることもなしと思へば」と続きます。"
        },
        {
            q: "藤原道長の子で、京都の宇治に平等院鳳凰堂を建てた人物は？",
            img: "assets/images/history/h_ancient_yorimichi_1772414883279.png",
            choices: ["藤原頼通","藤原不比等","藤原鎌足","藤原秀衡"],
            a: "藤原頼通",
            comment: "10円玉に描かれている建物です。"
        },
        {
            q: "平安時代の中頃に生まれた、漢字を変形させて日本語の音を表せるようにした文字は？",
            img: "assets/images/history/h_ancient_kana_1772414903142.png",
            choices: ["かな文字","のぼり文字","楔形文字","象形文字"],
            a: "かな文字",
            comment: "平仮名と片仮名が生まれ、女性文学の発達につながりました。"
        },
        {
            q: "紫式部によって書かれた、光源氏を主人公とする長編小説は？",
            img: "assets/images/history/h_ancient_9_genji.png",
            choices: ["源氏物語","枕草子","土佐日記","古今和歌集"],
            a: "源氏物語",
            comment: "世界最古の長編小説とも言われています。"
        },
        {
            q: "清少納言によって書かれた、「春はあけぼの」で始まる随筆集は？",
            img: "assets/images/history/h_ancient_9_makura.png",
            choices: ["枕草子","徒然草","方丈記","奥の細道"],
            a: "枕草子",
            comment: "宮廷生活の様子や自然の美しさなどが書かれています。"
        },
        {
            q: "醍醐天皇の命で編集された、日本最初の勅撰和歌集は？",
            img: "assets/images/history/h_ancient_kokin_1772414918054.png",
            choices: ["古今和歌集","万葉集","新古今和歌集","百人一首"],
            a: "古今和歌集",
            comment: "紀貫之らが編集しました。"
        },
        {
            q: "平安時代の貴族の住居に見られる、庭園や池を持った日本風の建築様式は？",
            img: "assets/images/history/h_ancient_9_shinden.png",
            choices: ["寝殿造","書院造","校倉造","合掌造り"],
            a: "寝殿造",
            comment: "ふすまや屏風で部屋を仕切り、畳は必要な場所にだけ置かれていました。"
        },
        {
            q: "「南無阿弥陀仏」と念仏を唱えれば、死後に極楽浄土へ行けると説いた教えは？",
            img: "assets/images/history/h_ancient_9_jodo_shinko_1773374588229.png",
            choices: ["浄土信仰","天台宗","真言宗","禅宗"],
            a: "浄土信仰",
            comment: "社会の不安を背景に、貴族から庶民へ広まりました。"
        },
        {
            q: "紀貫之が、女性の仮名文字をまねて書いたとされる日記文学は？",
            img: "assets/images/history/h_ancient_9_tosa.png",
            choices: ["土佐日記","蜻蛉日記","紫式部日記","更級日記"],
            a: "土佐日記",
            comment: "「男もすなる日記といふものを…」の書き出しで有名です。"
        },
        {
            q: "平安時代中期、京の市中で念仏を広め、「市聖（いちのひじり）」と呼ばれた僧は？",
            img: "assets/images/history/h_ancient_kuya_1772414931137.png",
            choices: ["空也","親鸞","法然","一遍"],
            a: "空也",
            comment: "口から6体の阿弥陀仏が出ている像が有名です。"
        },
        {
            q: "平安時代末期、平清盛によって整備され、日宋貿易の拠点となった港は？",
            img: "assets/images/history/h_ancient_owada_1772414997019.png",
            choices: ["大輪田泊","博多之津","堺","坊津"],
            a: "大輪田泊",
            comment: "現在の神戸港の一部にあたります。"
        },
        {
            q: "935年、下総（千葉県北部・茨城県）で反乱を起こし、「新皇」と名乗って関東地方を一時的に支配した人物は？",
            img: "assets/images/history/h_ancient_9_masakado.png",
            choices: ["平将門","藤原純友","菅原道真","足利尊氏"],
            a: "平将門",
            comment: "朝廷から独立した国を作ろうとしましたが、討たれました。"
        },
        {
            q: "939年、伊予（愛媛県）の国司であったが、瀬戸内海で海賊を率いて反乱を起こした人物は？",
            img: "assets/images/history/h_ancient_sumitomo_1772415012889.png",
            choices: ["藤原純友","平将門","楠木正成","大塩平八郎"],
            a: "藤原純友",
            comment: "平将門の乱とほぼ同時期に起こったため、朝廷を震え上がらせました（承平・天慶の乱）。"
        },
        {
            q: "平安時代後期、奥州（東北地方）で金や馬の産物で富を築き、中尊寺金色堂などを建てて栄えた一族は？",
            img: "assets/images/history/h_ancient_9_fujiwara.png",
            choices: ["奥州藤原氏","平氏","源氏","北条氏"],
            a: "奥州藤原氏",
            comment: "清衡・基衡・秀衡の三代にわたって栄えましたが、源頼朝に滅ぼされました。"
        },
        {
            q: "1156年、崇徳上皇と後白河天皇の対立から都で起こった戦乱は？",
            img: "assets/images/history/h_ancient_hogen_1772415030167.png",
            choices: ["保元の乱","平治の乱","応仁の乱","承久の乱"],
            a: "保元の乱",
            comment: "武士の力が政治上重要になるきっかけとなりました。"
        },
        {
            q: "1159年、源義朝と平清盛が対立し、平清盛が勝利して平氏政権の基盤を築いた戦乱は？",
            img: "assets/images/history/h_ancient_heiji_1772415054446.png",
            choices: ["平治の乱","保元の乱","治承・寿永の乱","戊辰戦争"],
            a: "平治の乱",
            comment: "源頼朝は伊豆へ流されました。"
        },
        {
            q: "大寺院が朝廷や摂関家に要求を通すために使った、武装した僧侶を何というか？",
            img: "assets/images/history/h_ancient_9_sohei.png",
            choices: ["僧兵","国司","防人","御家人"],
            a: "僧兵",
            comment: "奈良の興福寺や比叡山延暦寺の僧兵が有名で、神木や神輿をかついで強訴しました。"
        },
        {
            q: "平清盛が兵庫の港（現在の神戸港）を修築して推進した、中国の宋との貿易は？",
            img: "assets/images/history/h_contemporary_2_nisso_1773343394014.png",
            choices: ["日宋貿易","勘合貿易","朱印船貿易","南蛮貿易"],
            a: "日宋貿易",
            comment: "宋銭や絹織物を輸入し、日本からは金・水銀・硫黄・刀剣などを輸出しました。"
        }
    ],
    "h_medieval_1": [
        {
            q: "1185年、壇ノ浦の戦いで平氏を滅ぼした後、国ごとに守護・地頭を置くことを朝廷に認めさせた人物は？",
            img: "assets/images/history/h_medieval_yoritomo_1772415133001.png",
            choices: ["源頼朝","源義経","平清盛","北条政子"],
            a: "源頼朝",
            comment: "鎌倉幕府の初代征夷大将軍となりました。"
        },
        {
            q: "源頼朝が開いた、日本初の本格的な武家政権を何というか？",
            img: "assets/images/history/h_medieval_1_bakufu.png",
            choices: ["鎌倉幕府","室町幕府","江戸幕府","ヤマト政権"],
            a: "鎌倉幕府",
            comment: "神奈川県の鎌倉に拠点を置きました（「イイクニ（1192）作ろう」または「イイハコ（1185）作ろう」）。"
        },
        {
            q: "鎌倉幕府が、軍事・警察の仕事として国ごとに置いた役職は？",
            img: "assets/images/history/h_medieval_4_shugo_daimyo.png",
            choices: ["守護","地頭","管領","執権"],
            a: "守護",
            comment: "平氏の残党を探すことなどが目的でした。"
        },
        {
            q: "鎌倉幕府が、年貢の取り立てや土地の管理を行うために荘園や公領ごとに置いた役職は？",
            img: "assets/images/history/h_medieval_1_goon_hoko.png",
            choices: ["地頭","守護","代官","国司"],
            a: "地頭",
            comment: "しだいに土地の支配権を強めていきました。"
        },
        {
            q: "将軍と御家人の間の「御恩と奉公」の関係による支配の仕組みを何制度というか？",
            img: "assets/images/history/h_medieval_1_goseibaishikimoku_1772801818714.png",
            choices: ["封建制度","律令制度","氏姓制度","幕藩体制"],
            a: "封建制度",
            comment: "土地（領地）を仲立ちとした主従関係です。"
        },
        {
            q: "将軍が御家人に対して領地を保護したり、新しい領地を与えたりすることを何というか？",
            img: "assets/images/history/h_medieval_1_goseibai_shikimoku.png",
            choices: ["御恩","奉公","公領","知行"],
            a: "御恩",
            comment: "「本領安堵」や「新恩給与」などがありました。"
        },
        {
            q: "御家人が将軍のために、戦いの時に命がけで戦ったり、京都や鎌倉の警備をしたりすることを何というか？",
            img: "assets/images/history/h_medieval_1_goon_hoko.png",
            choices: ["奉公","御恩","参勤交代","兵役"],
            a: "奉公",
            comment: "「いざ鎌倉」という言葉があります。"
        },
        {
            q: "源頼朝の死後、政治の実権を握った北条氏が就いた、将軍を補佐する役職は？",
            img: "assets/images/history/h_medieval_1_hojo_masako.png",
            choices: ["執権","管領","老中","関白"],
            a: "執権",
            comment: "北条時政が初代執権となり、以後北条氏が世襲しました。"
        },
        {
            q: "源頼朝の妻で、頼朝の死後「尼将軍」と呼ばれ、幕府の危機を救った人物は？",
            img: "assets/images/history/h_medieval_1_jito.png",
            choices: ["北条政子","日野富子","紫式部","卑弥呼"],
            a: "北条政子",
            comment: "承久の乱の際、御家人たちに頼朝の恩を説き、結束を呼びかけました。"
        },
        {
            q: "1221年、後鳥羽上皇が鎌倉幕府を倒そうとして兵を挙げたが、敗れた戦いは？",
            img: "assets/images/history/h_medieval_1_jokyu.png",
            choices: ["承久の乱","保元の乱","平治の乱","応仁の乱"],
            a: "承久の乱",
            comment: "朝廷側が武家政権に敗れた最初の戦いとなり、朝廷の力は衰えました。"
        },
        {
            q: "承久の乱の後、幕府が朝廷や西国の武士を監視するために京都に設置した役所は？",
            img: "assets/images/history/h_medieval_1_minamotoyoshinaka_1772802530993.png",
            choices: ["六波羅探題","京都所司代","鎌倉府","鎮西探題"],
            a: "六波羅探題",
            comment: "かつての平氏の拠点の跡地に置かれました。"
        },
        {
            q: "1232年、北条泰時が定めた、御家人の権利や裁判の基準を示した日本初の武家法は？",
            img: "assets/images/history/h_medieval_1_goseibaishikimoku_1772801818714.png",
            choices: ["御成敗式目（貞永式目）","武家諸法度","公事方御定書","十七条の憲法"],
            a: "御成敗式目（貞永式目）",
            comment: "51ヶ条からなり、公平な裁判を行うための基準となりました。"
        },
        {
            q: "二期作が始まり、定期市が開かれるなど、鎌倉時代の民衆の生活が向上した背景には何の発達があるか？",
            img: "assets/images/history/h_medieval_1_nimousaku_1772802594834.png",
            choices: ["農業技術","工業技術","航海技術","建築技術"],
            a: "農業技術",
            comment: "肥料（草木灰）の使用や牛馬耕などが広まりました。"
        },
        {
            q: "1183年、砺波山（くりから峠）の戦いで平氏を破って京都に入ったが、後に源義経らに追われて敗死した人物は？",
            img: "assets/images/history/h_medieval_1_nogyogijutsu_1772801855861.png",
            choices: ["源義仲（木曽義仲）","源義経","源頼朝","源実朝"],
            a: "源義仲（木曽義仲）",
            comment: "「朝日将軍」とも呼ばれましたが、京での乱暴な振る舞いで支持を失いました。"
        },
        {
            q: "鎌倉幕府において、一般政務や財政を担当した役所は？",
            img: "assets/images/history/h_medieval_1_rokuhara.png",
            choices: ["政所（まんどころ）","問注所","侍所","六波羅探題"],
            a: "政所（まんどころ）",
            comment: "長官は執事が務めました。大江広元などが有名です。"
        },
        {
            q: "鎌倉幕府において、御家人の統率や軍事・警察を担当した役所は？",
            img: "assets/images/history/h_medieval_1_samurai_dokoro_1773374601126.png",
            choices: ["侍所","政所","問注所","評定衆"],
            a: "侍所",
            comment: "長官は和田義盛などが務めました。"
        },
        {
            q: "鎌倉幕府において、裁判を担当した役所は？",
            img: "assets/images/history/h_medieval_1_monchujo_1773374615836.png",
            choices: ["問注所","政所","侍所","検非違使"],
            a: "問注所",
            comment: "三好康信が初代執事となりました。"
        },
        {
            q: "鎌倉幕府の初代執権で、源頼朝の妻・北条政子の父である人物は？",
            img: "assets/images/history/h_medieval_1_hojo_tokimasa_1773374628970.png",
            choices: ["北条時政","北条義時","北条泰時","北条時宗"],
            a: "北条時政",
            comment: "頼朝の死後、他の有力御家人を次々と排除して権力を握りました。"
        },
        {
            q: "承久の乱の時の執権で、朝廷軍を破り、執権政治を確立させた人物は？",
            img: "assets/images/history/h_medieval_1_hojo_yoshitoki_1773374641862.png",
            choices: ["北条義時","北条時政","北条泰時","足利尊氏"],
            a: "北条義時",
            comment: "北条政子の演説により御家人が結束し、勝利しました。"
        },
        {
            q: "鎌倉幕府の3代将軍で、鶴岡八幡宮で公暁（くぎょう）に暗殺され、源氏の正統が絶える原因となった人物は？",
            img: "assets/images/history/h_medieval_1_minamoto_no_sanetomo_1773374657116.png",
            choices: ["源実朝","源頼家","源義経","足利義満"],
            a: "源実朝",
            comment: "歌人としても優れ、『金槐和歌集』を残しました。"
        },
        {
            q: "鎌倉時代初期の荘園で、地頭の非道を訴えた「ミミヲキリハナヲソギ…」という訴状で有名な和歌山県の荘園は？",
            img: "assets/images/history/h_medieval_1_ategawa_no_sho_1773374670654.png",
            choices: ["阿充河荘（あてがわのしょう）","大田文","東大寺領","興福寺領"],
            a: "阿充河荘（あてがわのしょう）",
            comment: "地頭の強引な支配に苦しむ農民の姿が伝えられています。"
        },
        {
            q: "鎌倉時代、武士の間で広まった、馬に乗って疾走しながら的を射る訓練を何というか？",
            img: "assets/images/history/h_medieval_1_yabusame_1772802564519.png",
            choices: ["流鏑馬（やぶさめ）","犬追物","笠懸","相撲"],
            a: "流鏑馬（やぶさめ）",
            comment: "「弓馬の道」として重んじられました。"
        },
        {
            q: "鎌倉時代の農業で、西日本を中心に広まった、同じ耕地で米と麦を交互に作る農法は？",
            img: "assets/images/history/h_medieval_1_nimosaku.png",
            choices: ["二毛作","二期作","水耕栽培","焼畑農業"],
            a: "二毛作",
            comment: "裏作として麦を作ることで、収穫量が増えました。"
        },
        {
            q: "鎌倉時代に広まった、牛や馬を利用して田畑を耕す農法は？",
            img: "assets/images/history/h_medieval_1_gyubakou_1772802622169.png",
            choices: ["牛馬耕","深耕","乾田","早場米"],
            a: "牛馬耕",
            comment: "深く耕すことができるようになり、生産力が向上しました。"
        },
        {
            q: "鎌倉時代、交通の要所や寺社の門前などで、月に数回開かれた市を何というか？",
            img: "assets/images/history/h_medieval_1_teikiichi.png",
            choices: ["定期市","楽市・楽座","朝市","公設市場"],
            a: "定期市",
            comment: "ここでお金（宋銭）を使った取引も盛んになりました。"
        },
        {
            q: "鎌倉時代の武士の相続方法で、親の領地を兄弟などで分けて相続することを何というか？",
            img: "assets/images/history/h_medieval_1_bunkatsusozoku_1772802687732.png",
            choices: ["分割相続","単独相続","長男相続","末子相続"],
            a: "分割相続",
            comment: "代を重ねるごとに領地が細分化され、生活が苦しくなる原因となりました。"
        }
    ],
    "h_medieval_2": [
        {
            q: "13世紀初め、チンギス・ハンが建国し、ユーラシア大陸にまたがる大帝国を築いた国は？",
            img: "assets/images/history/h_medieval_2_akutou.png",
            choices: ["モンゴル帝国","元","明","清"],
            a: "モンゴル帝国",
            comment: "孫のフビライ・ハンの時代に国号を「元」と定めて中国を支配しました。"
        },
        {
            q: "モンゴル帝国の皇帝フビライ・ハンが、日本に従うよう求めたが拒否されたため、二度にわたって日本を攻めた出来事を何というか？",
            img: "assets/images/history/h_medieval_2_ashikaga.png",
            choices: ["元寇","倭寇","承久の乱","白村江の戦い"],
            a: "元寇",
            comment: "文永の役（1274年）と弘安の役（1281年）の二度です。"
        },
        {
            q: "元寇の時の鎌倉幕府の執権で、元の要求を拒否し、御家人を指揮して戦った人物は？",
            img: "assets/images/history/h_medieval_2_bourui.png",
            choices: ["北条時宗","北条泰時","北条政子","足利尊氏"],
            a: "北条時宗",
            comment: "8代執権として、若くして難局にあたりました。"
        },
        {
            q: "元軍が使った、火薬を詰めて爆発させる武器を何というか？",
            img: "assets/images/history/h_medieval_2_tetsuhau.png",
            choices: ["てつはう","鉄砲","大砲","火縄銃"],
            a: "てつはう",
            comment: "集団戦法と合わせて、日本の武士（一騎打ち戦法）を苦しめました。"
        },
        {
            q: "元寇の後、御家人が借金に苦しむようになったため、幕府が出した借金を帳消しにする法令は？",
            img: "assets/images/history/h_medieval_2_tokuseirei.png",
            choices: ["徳政令","御成敗式目","墾田永年私財法","撰銭令"],
            a: "徳政令",
            comment: "「永仁の徳政令」が有名ですが、かえって経済の混乱を招きました。"
        },
        {
            q: "鎌倉幕府に不満を持つ武士たちを呼びかけ、1333年に鎌倉幕府を滅亡に追い込んだ天皇は？",
            img: "assets/images/history/h_medieval_2_genko_1772802750152.png",
            choices: ["後醍醐天皇","後鳥羽上皇","桓武天皇","聖武天皇"],
            a: "後醍醐天皇",
            comment: "隠岐に流されましたが、脱出して倒幕を呼びかけました。"
        },
        {
            q: "後醍醐天皇の呼びかけに応じ、六波羅探題を攻め落とした有力御家人は？",
            img: "assets/images/history/h_medieval_2_godaigo.png",
            choices: ["足利尊氏","新田義貞","楠木正成","源頼朝"],
            a: "足利尊氏",
            comment: "後に室町幕府を開きました。"
        },
        {
            q: "後醍醐天皇の呼びかけに応じ、鎌倉に攻め込んで北条氏を滅ぼした有力御家人は？",
            img: "assets/images/history/h_medieval_2_godaigotenno_1772802837831.png",
            choices: ["新田義貞","足利尊氏","楠木正成","平清盛"],
            a: "新田義貞",
            comment: "稲村ヶ崎から鎌倉へ侵入したという伝説があります。"
        },
        {
            q: "元寇の際、日本軍の防備を助けたとされる、二度とも吹いた暴風雨を何と呼んだか？",
            img: "assets/images/history/h_medieval_2_hojotokimune_1772802779789.png",
            choices: ["神風","台風","季節風","貿易風"],
            a: "神風",
            comment: "「神国思想」が強まる一因となりました。"
        },
        {
            q: "元寇防備のために九州北部の海岸に築かれた、石で作られた防壁は？",
            img: "assets/images/history/h_medieval_2_ikkiuchi.png",
            choices: ["防塁（石築地）","城壁","土塁","万里の長城"],
            a: "防塁（石築地）",
            comment: "博多湾沿岸に約20kmにわたって築かれました。"
        },
        {
            q: "イタリアの商人で、フビライ・ハンに仕え、帰国後に『世界の記述（東方見聞録）』で日本を「黄金の国ジパング」と紹介した人物は？",
            img: "assets/images/history/h_medieval_2_kamikaze.png",
            choices: ["マルコ・ポーロ","コロンブス","ザビエル","マゼラン"],
            a: "マルコ・ポーロ",
            comment: "この記述が、後のヨーロッパ人の大航海時代への関心を高めました。"
        },
        {
            q: "元寇の際、集団戦法をとる元軍に対し、日本軍がとった戦法は？",
            img: "assets/images/history/h_medieval_2_marcopolo.png",
            choices: ["一騎打ち","鉄砲隊","騎馬隊突撃","ゲリラ戦"],
            a: "一騎打ち",
            comment: "「やあやあ我こそは…」と名乗りを上げて戦う伝統的な戦法で、苦戦しました。"
        },
        {
            q: "1297年、鎌倉幕府が御家人を救うために出した、借金の帳消しを命じる法令は？",
            img: "assets/images/history/h_medieval_2_einin.png",
            choices: ["永仁の徳政令","寛政の改革","享保の改革","墾田永年私財法"],
            a: "永仁の徳政令",
            comment: "一時的には借金がなくなりましたが、その後はお金を貸してもらえなくなり、かえって困窮しました。"
        },
        {
            q: "鎌倉時代末期、荘園領主や幕府に従わず、年貢を奪うなどの乱暴を働いた武装集団を何というか？",
            img: "assets/images/history/h_medieval_2_nitta.png",
            choices: ["悪党","野盗","海賊","一揆"],
            a: "悪党",
            comment: "楠木正成なども悪党的な性格を持っていたと言われています。"
        }
    ],
    "h_medieval_3": [
        {
            q: "鎌倉時代に生まれた、素朴で力強い武士の気風を反映した文化を何というか？",
            img: "assets/images/history/h_medieval_3_dogen.png",
            choices: ["鎌倉文化","国風文化","天平文化","東山文化"],
            a: "鎌倉文化",
            comment: "運慶や快慶による東大寺南大門金剛力士像などが代表的です。"
        },
        {
            q: "東大寺南大門にある、運慶・快慶らが作った力強い仏像は？",
            img: "assets/images/history/h_medieval_3_kongo.png",
            choices: ["金剛力士像","阿修羅像","弥勒菩薩像","大仏"],
            a: "金剛力士像",
            comment: "寄木造（よせぎづくり）という技法で、短期間に作られました。"
        },
        {
            q: "「祇園精舎の鐘の声…」で始まり、平氏の繁栄と没落を描いた軍記物は？",
            img: "assets/images/history/h_medieval_3_eisai.png",
            choices: ["平家物語","源氏物語","竹取物語","太平記"],
            a: "平家物語",
            comment: "琵琶法師によって語り継がれました。"
        },
        {
            q: "平家物語を語り継いだ、琵琶を弾きながら物語を語る盲目の芸人を何というか？",
            img: "assets/images/history/h_medieval_3_biwa_hoshi_1773374684764.png",
            choices: ["琵琶法師","能楽師","歌舞伎役者","講談師"],
            a: "琵琶法師",
            comment: "文字の読めない庶民にも物語が広まりました。"
        },
        {
            q: "兼好法師（吉田兼好）が書いた、無常観がつづられた随筆集は？",
            img: "assets/images/history/h_medieval_3_tsurezure.png",
            choices: ["徒然草","方丈記","枕草子","奥の細道"],
            a: "徒然草",
            comment: "「つれづれなるままに…」の書き出しで有名です。"
        },
        {
            q: "鴨長明が書いた、大火や飢饉などの災害と世の無常をつづった随筆集は？",
            img: "assets/images/history/h_medieval_3_hojoki.png",
            choices: ["方丈記","徒然草","枕草子","土佐日記"],
            a: "方丈記",
            comment: "「ゆく河の流れは絶えずして…」の書き出しで有名です。"
        },
        {
            q: "後鳥羽上皇の命で藤原定家らが編集した、巧みな表現の和歌集は？",
            img: "assets/images/history/h_medieval_3_shinkokin.png",
            choices: ["新古今和歌集","古今和歌集","万葉集","金槐和歌集"],
            a: "新古今和歌集",
            comment: "武士や僧の歌も多く収められています。"
        },
        {
            q: "「南無阿弥陀仏」と唱えるだけで救われる（専修念仏）と説き、浄土宗を開いたのは？",
            img: "assets/images/history/h_medieval_3_ippen.png",
            choices: ["法然","親鸞","一遍","日蓮"],
            a: "法然",
            comment: "誰でも極楽往生できると説き、広まりました。"
        },
        {
            q: "法然の弟子で、悪人こそが救われるという「悪人正機」を説き、浄土真宗（一向宗）を開いたのは？",
            img: "assets/images/history/h_medieval_3_shinran.png",
            choices: ["親鸞","法然","一遍","日蓮"],
            a: "親鸞",
            comment: "「善人なほもて往生をとぐ、いはんや悪人をや」の言葉が有名です。"
        },
        {
            q: "踊念仏によって教えを広め、時宗を開いたのは？",
            img: "assets/images/history/h_medieval_3_nichiren.png",
            choices: ["一遍","法然","親鸞","空也"],
            a: "一遍",
            comment: "盆踊りの起源の一つとも言われています。"
        },
        {
            q: "「南無妙法蓮華経」という題目を唱えれば救われると説き、日蓮宗（法華宗）を開いたのは？",
            img: "assets/images/history/h_medieval_3_shinkokin.png",
            choices: ["日蓮","栄西","道元","法然"],
            a: "日蓮",
            comment: "他宗を激しく批判し、幕府にも警告を行いました。"
        },
        {
            q: "座禅によって悟りを開こうとする「禅宗」の一つ、臨済宗を日本に伝えたのは？",
            img: "assets/images/history/h_medieval_3_shinran.png",
            choices: ["栄西","道元","隠元","鑑真"],
            a: "栄西",
            comment: "中国からお茶の種を持ち帰ったことでも知られます。"
        },
        {
            q: "座禅にひたすら打ち込む（只管打坐）ことを説き、曹洞宗を伝えたのは？",
            img: "assets/images/history/h_medieval_3_dogen.png",
            choices: ["道元","栄西","親鸞","一遍"],
            a: "道元",
            comment: "越前（福井県）に永平寺を開きました。"
        }
    ],
    "h_medieval_4": [
        {
            q: "鎌倉幕府の滅亡後、後醍醐天皇が始めた、天皇中心の政治を何というか？",
            img: "assets/images/history/h_medieval_4_ashikaga_takauji.png",
            choices: ["建武の新政","大化の改新","徳政令","寛政の改革"],
            a: "建武の新政",
            comment: "公家を重視しすぎたため、武士の不満が高まり、わずか2年余りで崩れました。"
        },
        {
            q: "建武の新政に不満を持つ武士を率いて反乱を起こし、1338年に征夷大将軍となって幕府を開いた人物は？",
            img: "assets/images/history/h_medieval_4_ashikaga_yoshimitsu.png",
            choices: ["足利尊氏","足利義満","足利義政","源頼朝"],
            a: "足利尊氏",
            comment: "京都に室町幕府を開きました。"
        },
        {
            q: "足利尊氏が京都に立てた北朝と、後醍醐天皇が奈良の吉野に逃れて立てた南朝が対立し、約60年間争った時代を何というか？",
            img: "assets/images/history/h_medieval_4_kango_boueki.png",
            choices: ["南北朝時代","戦国時代","安土桃山時代","平安時代"],
            a: "南北朝時代",
            comment: "『太平記』にはこの時代の動乱が描かれています。"
        },
        {
            q: "南北朝の動乱を終わらせ、1392年に南北朝を統一した室町幕府の第3代将軍は？",
            img: "assets/images/history/h_medieval_4_kanrei.png",
            choices: ["足利義満","足利尊氏","足利義政","足利義昭"],
            a: "足利義満",
            comment: "京都の室町に「花の御所」を建て、幕府の全盛期を築きました。"
        },
        {
            q: "室町幕府において、将軍を補佐する役職を何というか？",
            img: "assets/images/history/h_medieval_4_kenmu.png",
            choices: ["管領","執権","老中","家老"],
            a: "管領",
            comment: "有力な守護大名（細川・斯波・畠山氏）が交代で任命されました。"
        },
        {
            q: "鎌倉時代の守護が力を強め、一国全体を支配するようになった大名を何というか？",
            img: "assets/images/history/h_medieval_4_shugo_daimyo.png",
            choices: ["守護大名","戦国大名","外様大名","親藩大名"],
            a: "守護大名",
            comment: "領国内の武士を家臣とし、独自の支配を行いました。"
        },
        {
            q: "足利義満が中国（明）との間で行った、正式な貿易船に合い札を持たせた貿易を何というか？",
            img: "assets/images/history/h_medieval_4_kango_boueki.png",
            choices: ["勘合貿易（日明貿易）","朱印船貿易","南蛮貿易","日宋貿易"],
            a: "勘合貿易（日明貿易）",
            comment: "倭寇（海賊）と正式な貿易船を区別するため、「勘合」を用いました。"
        },
        {
            q: "朝鮮半島や中国沿岸を荒らし回った、日本の海賊集団を何というか？",
            img: "assets/images/history/h_medieval_4_wako.png",
            choices: ["倭寇","水軍","海援隊","防人"],
            a: "倭寇",
            comment: "「前期倭寇」は日本人が中心でしたが、後に中国人も加わりました。"
        }
    ],
    "h_medieval_5": [
        {
            q: "14世紀、元を北へ追いやり、漢民族が再び中国に建てた国は？",
            img: "assets/images/history/h_medieval_5_ming.png",
            choices: ["明","清","宋","唐"],
            a: "明",
            comment: "足利義満は明の皇帝に臣下の礼をとり、日本国王（のちの日本国王）として貿易を行いました。"
        },
        {
            q: "14世紀末、高麗を倒して朝鮮半島に建てられた国は？",
            img: "assets/images/history/h_early_modern_3_chosen.png",
            choices: ["朝鮮国（李氏朝鮮）","新羅","百済","大韓帝国"],
            a: "朝鮮国（李氏朝鮮）",
            comment: "ハングル（訓民正音）が作られました。"
        },
        {
            q: "15世紀初め、沖縄本島を統一し、琉球王国を建国した人物は？",
            img: "assets/images/history/h_medieval_5_shohashi.png",
            choices: ["尚巴志","阿倍仲麻呂","コシャマイン","シャクシャイン"],
            a: "尚巴志",
            comment: "首里城を都としました。"
        },
        {
            q: "琉球王国が、日本・中国・東南アジアの間で行った、各国の産物をやり取りする貿易を何というか？",
            img: "assets/images/history/h_medieval_5_hangeul.png",
            choices: ["中継貿易","勘合貿易","南蛮貿易","三角貿易"],
            a: "中継貿易",
            comment: "「万国津梁（世界の架け橋）」として繁栄しました。"
        },
        {
            q: "北海道の先住民族で、狩りや漁を行い、独自の文化を持っていた人々は？",
            img: "assets/images/history/h_medieval_5_ainu_1772980283499.png",
            choices: ["アイヌ民族","琉球民族","ウィルタ","ニヴフ"],
            a: "アイヌ民族",
            comment: "和人（本州の人々）と交易を行っていました。"
        },
        {
            q: "和人が蝦夷地（北海道）に進出し、館（やかた）を築いて交易を独占したことに対し、1457年に蜂起したアイヌの首長は？",
            img: "assets/images/history/h_medieval_5_joseon.png",
            choices: ["コシャマイン","シャクシャイン","アテルイ","尚巴志"],
            a: "コシャマイン",
            comment: "コシャマインの戦いと呼ばれます。"
        },
        {
            q: "室町時代に朝鮮で作られた、現在も使われている独自の文字は？",
            img: "assets/images/history/h_medieval_5_koshamain_1772980296643.png",
            choices: ["ハングル","かな文字","漢字","アルファベット"],
            a: "ハングル",
            comment: "世宗（セジョン）大王によって制定されました。"
        },
        {
            q: "日明貿易（勘合貿易）において、日本からの主な輸出品は？",
            img: "assets/images/history/h_medieval_5_export.png",
            choices: ["刀剣・銅・硫黄","生糸・陶磁器","綿花・鉄砲","銀・海産物"],
            a: "刀剣・銅・硫黄",
            comment: "日本刀は武器としてだけでなく美術品としても珍重されました。"
        },
        {
            q: "日明貿易（勘合貿易）において、明からの主な輸入品は？",
            img: "assets/images/history/h_medieval_5_import.png",
            choices: ["銅銭・生糸・陶磁器","刀剣・銅","鉄砲・火薬","砂糖・ガラス"],
            a: "銅銭・生糸・陶磁器",
            comment: "輸入された銅銭（永楽通宝など）は、日本国内で貨幣として流通しました。"
        }
    ],
    "h_medieval_6": [
        {
            q: "足利義満の頃の、公家文化と武家文化が融合した、明るく華やかな文化を何というか？",
            img: "assets/images/history/h_medieval_6_bashaku_1772980331219.png",
            choices: ["北山文化","東山文化","鎌倉文化","桃山文化"],
            a: "北山文化",
            comment: "金閣（鹿苑寺）が代表的です。"
        },
        {
            q: "足利義満が京都の北山に建てた、金箔が貼られた華麗な建物は？",
            img: "assets/images/history/h_medieval_6_kinkaku.png",
            choices: ["金閣","銀閣","鳳凰堂","中尊寺金色堂"],
            a: "金閣",
            comment: "一層は寝殿造、二層は武家造、三層は禅宗様という建築様式です。"
        },
        {
            q: "観阿弥・世阿弥親子によって大成された、面をつけて演じる歌舞劇は？",
            img: "assets/images/history/h_medieval_6_doikki_1772980315893.png",
            choices: ["能（能楽）","歌舞伎","狂言","文楽"],
            a: "能（能楽）",
            comment: "足利義満の保護を受け、洗練された芸術となりました。"
        },
        {
            q: "能の合間に演じられる、庶民の生活や風刺を扱った滑稽な劇は？",
            img: "assets/images/history/h_medieval_6_doso_1772980404797.png",
            choices: ["狂言","漫才","落語","人形浄瑠璃"],
            a: "狂言",
            comment: "当時の話し言葉が使われています。"
        },
        {
            q: "足利義政の頃の、禅宗の影響を受けた、簡素で深みのある文化を何というか？",
            img: "assets/images/history/h_medieval_6_ginkaku.png",
            choices: ["東山文化","北山文化","元禄文化","化政文化"],
            a: "東山文化",
            comment: "銀閣（慈照寺）が代表的で、現在の和風文化の元となりました。"
        },
        {
            q: "足利義政が京都の東山に建てた、簡素で落ち着いた美しさを持つ建物は？",
            img: "assets/images/history/h_early_modern_1_silver.png",
            choices: ["銀閣","金閣","三十三間堂","清水寺"],
            a: "銀閣",
            comment: "正式名称は慈照寺銀閣です。"
        },
        {
            q: "書院造の部屋に飾る絵画として発達した、墨の濃淡で自然の風景などを描く絵画は？",
            img: "assets/images/history/h_medieval_6_suibokuga.png",
            choices: ["水墨画","大和絵","浮世絵","唐絵"],
            a: "水墨画",
            comment: "雪舟が日本独自の水墨画を完成させました。"
        },
        {
            q: "明で水墨画を学び、日本独自の水墨画を大成した人物は？",
            img: "assets/images/history/h_medieval_6_kinkaku.png",
            choices: ["雪舟","狩野永徳","葛飾北斎","尾形光琳"],
            a: "雪舟",
            comment: "「秋冬山水図」などが有名です。"
        },
        {
            q: "畳、障子、ふすま、床の間などを備えた、現在の和風住宅の元となった建築様式は？",
            img: "assets/images/history/h_medieval_6_shoinzukuri.png",
            choices: ["書院造","寝殿造","校倉造","合掌造り"],
            a: "書院造",
            comment: "銀閣の東求堂同仁斎などが最古の遺構です。"
        },
        {
            q: "室町時代に流行した、絵入りの短編物語（「一寸法師」など）を何というか？",
            img: "assets/images/history/h_medieval_6_otogizoushi.png",
            choices: ["御伽草子（おとぎぞうし）","絵巻物","浮世草子","草双紙"],
            a: "御伽草子（おとぎぞうし）",
            comment: "子どもや女性など広い層に親しまれました。"
        },
        {
            q: "室町時代、農民たちが作った自治組織を何というか？",
            img: "assets/images/history/h_medieval_6_noh.png",
            choices: ["惣（惣村）","座","株仲間","結"],
            a: "惣（惣村）",
            comment: "寄合を開いて村の掟を決めたり、共同作業を行ったりしました。"
        },
        {
            q: "農民たちが団結して、年貢の軽減や借金の帳消し（徳政）を求めて起こした反乱を何というか？",
            img: "assets/images/history/h_medieval_6_otogizoushi.png",
            choices: ["土一揆","国一揆","百姓一揆","打ちこわし"],
            a: "土一揆",
            comment: "「正長の土一揆」が有名です。"
        },
        {
            q: "室町時代、馬を使って物資を運んだ運送業者を何というか？",
            img: "assets/images/history/h_medieval_6_shocho_1772980421165.png",
            choices: ["馬借（ばしゃく）","問屋","株仲間","飛脚"],
            a: "馬借（ばしゃく）",
            comment: "近江（滋賀県）の坂本や大津などで活躍し、時には土一揆に加わることもありました。"
        },
        {
            q: "室町時代、港などで商品の保管や運送、販売を行った業者を何というか？",
            img: "assets/images/history/h_medieval_6_shoinzukuri.png",
            choices: ["問（問屋）","土倉","座","株仲間"],
            a: "問（問屋）",
            comment: "後に卸売業者へと発展しました。"
        },
        {
            q: "室町時代、高利貸しを営んだ質屋のような業者を何というか？",
            img: "assets/images/history/h_medieval_6_suibokuga.png",
            choices: ["土倉（どそう）","酒屋","馬借","両替商"],
            a: "土倉（どそう）",
            comment: "酒屋が土倉を兼ねることも多く、土一揆の襲撃対象となりました。"
        },
        {
            q: "室町時代、商工業者が同業者ごとに結成し、朝廷や寺社に税を納める代わりに営業の独占権を認められた組織は？",
            img: "assets/images/history/h_medieval_6_za.png",
            choices: ["座","株仲間","惣","ギルド"],
            a: "座",
            comment: "「楽市・楽座」によって廃止されるまで続きました。"
        },
        {
            q: "1428年、近江の馬借らが徳政令を求めて蜂起し、京都に乱入した、日本初の大規模な土一揆は？",
            img: "assets/images/history/h_medieval_6_toiya_1772980345705.png",
            choices: ["正長の土一揆","加賀の一向一揆","山城の国一揆","島原の乱"],
            a: "正長の土一揆",
            comment: "「代始めの徳政」をスローガンにし、公家の日記に「日本開闢（かいびゃく）以来、土民蜂起これ初めなり」と記されました。"
        }
    ],
    "h_medieval_7": [
        {
            q: "1467年、将軍（足利義政）の跡継ぎ問題などをきっかけに始まり、11年間続いて京都を焼け野原にした戦乱は？",
            img: "assets/images/history/h_medieval_7_bunkokuho_1772980452183.png",
            choices: ["応仁の乱","保元の乱","平治の乱","承久の乱"],
            a: "応仁の乱",
            comment: "これをきっかけに幕府の力は衰え、戦国時代へと突入しました。"
        },
        {
            q: "応仁の乱のきっかけとなった跡継ぎ問題で、争いに関係した第8代将軍は？",
            img: "assets/images/history/h_medieval_7_bunkokuho_1772980625957.png",
            choices: ["足利義政","足利義満","足利尊氏","足利義昭"],
            a: "足利義政",
            comment: "政治を顧みず、東山文化に没頭しました。"
        },
        {
            q: "応仁の乱で東軍の総大将となった人物は？",
            img: "assets/images/history/h_medieval_7_gekokujo_1772980555958.png",
            choices: ["細川勝元","山名宗全","足利義政","日野富子"],
            a: "細川勝元",
            comment: "対する西軍の総大将は山名宗全（持豊）でした。"
        },
        {
            q: "京都の山城国（現在の京都府南部）で、武士や農民が守護大名を追い出し、8年間にわたって自治を行った出来事は？",
            img: "assets/images/history/h_medieval_7_yamashiro.png",
            choices: ["山城の国一揆","加賀の一向一揆","正長の土一揆","島原・天草一揆"],
            a: "山城の国一揆",
            comment: "平等院に集まって掟を定めました。"
        },
        {
            q: "加賀国（現在の石川県）で、浄土真宗の信者らが守護大名を倒し、約100年間にわたって自治を行った出来事は？",
            img: "assets/images/history/h_medieval_7_gion.png",
            choices: ["加賀の一向一揆","山城の国一揆","島原の乱","三河一向一揆"],
            a: "加賀の一向一揆",
            comment: "「一向宗」とは浄土真宗のことです。"
        },
        {
            q: "身分の低い者が、実力で上の者を倒して地位を奪う風潮を何というか？",
            img: "assets/images/history/h_medieval_7_hakata_1772980601685.png",
            choices: ["下剋上","一所懸命","御恩と奉公","尊皇攘夷"],
            a: "下剋上",
            comment: "戦国時代の特徴的な風潮です。"
        },
        {
            q: "応仁の乱の後、各地の守護大名や守護代などが成長し、独自の領国支配を行うようになった大名を何というか？",
            img: "assets/images/history/h_medieval_7_hosokawa.png",
            choices: ["戦国大名","守護大名","譜代大名","外様大名"],
            a: "戦国大名",
            comment: "分国法を定めて領地を治め、領土拡大を目指しました。"
        },
        {
            q: "戦国大名が、領地を治めるために独自に定めた法律を何というか？",
            img: "assets/images/history/h_medieval_7_jinkaishu_1772980569807.png",
            choices: ["分国法","御成敗式目","武家諸法度","律令"],
            a: "分国法",
            comment: "「喧嘩両成敗」などが有名です。"
        },
        {
            q: "戦国時代、甲斐（山梨県）の武田信玄が定めた分国法は？",
            img: "assets/images/history/h_medieval_7_jokamachi.png",
            choices: ["甲州法度之次第","塵芥集","今川仮名目録","武家諸法度"],
            a: "甲州法度之次第",
            comment: "「喧嘩両成敗」などが規定されています。"
        },
        {
            q: "戦国時代、東北地方の伊達氏が定めた分国法は？",
            img: "assets/images/history/h_medieval_7_kaga_ikko_ikki_1772980540508.png",
            choices: ["塵芥集（じんかいしゅう）","甲州法度之次第","御成敗式目","武家諸法度"],
            a: "塵芥集（じんかいしゅう）",
            comment: "分国法の中で最も条文が多いことで知られます。"
        },
        {
            q: "戦国大名が、家臣や商工業者を住まわせるために城の周辺に作った町を何というか？",
            img: "assets/images/history/h_medieval_7_jokamachi.png",
            choices: ["城下町","門前町","寺内町","宿場町"],
            a: "城下町",
            comment: "商工業の発展にも力を入れました。"
        },
        {
            q: "日明貿易で栄え、「東洋のベニス」とも呼ばれた、36人の会合衆（えごうしゅう）によって自治が行われた都市は？",
            img: "assets/images/history/h_medieval_7_koshu_hatto_1772980468342.png",
            choices: ["堺（大阪府）","博多（福岡県）","長崎","石山"],
            a: "堺（大阪府）",
            comment: "鉄砲の生産地としても知られ、織田信長に屈服するまで自治を守りました。"
        },
        {
            q: "日宋貿易以来の貿易港として栄え、12人の年行司によって自治が行われた都市は？",
            img: "assets/images/history/h_medieval_7_sakai_1772980587543.png",
            choices: ["博多（福岡県）","堺","鎌倉","平戸"],
            a: "博多（福岡県）",
            comment: "豪商たちが市政を運営しました。"
        },
        {
            q: "応仁の乱の後、京都で町衆（まちしゅう）と呼ばれる裕福な商工業者たちが復興させ、現在まで続く祭りは？",
            img: "assets/images/history/h_medieval_7_sengoku_daimyo_1772980436077.png",
            choices: ["祇園祭","天神祭","神田祭","阿波踊り"],
            a: "祇園祭",
            comment: "自分たちで町式目（まちしきもく）を作って自治を行いました。"
        }
    ],
    "h_early_modern_1": [
        {
            q: "14世紀から16世紀にかけてヨーロッパで広まった、古代ギリシャ・ローマの文化を学び直そうとする動きを何というか？",
            img: "assets/images/history/h_early_modern_1_renaissance_1772980680705.png",
            choices: ["ルネサンス（文芸復興）","宗教改革","大航海時代","産業革命"],
            a: "ルネサンス（文芸復興）",
            comment: "イタリアなどで始まり、科学や芸術が大きく発展しました。"
        },
        {
            q: "免罪符（贖宥状）の販売を批判し、ドイツで宗教改革を始めた人物は？",
            choices: ["ルター","カルバン","ザビエル","コロンブス"],
            a: "ルター",
            comment: "聖書中心主義を唱え、プロテスタント（新教）が生まれました。"
        },
        {
            q: "1492年、西インド諸島に到達し、アメリカ大陸発見のきっかけを作った人物は？",
            choices: ["コロンブス","バスコ・ダ・ガマ","マゼラン","マルコ・ポーロ"],
            a: "コロンブス",
            comment: "スペインの女王イサベルの援助を受けて航海しました。"
        },
        {
            q: "1498年、喜望峰を回ってインド航路を発見したポルトガルの探検家は？",
            choices: ["バスコ・ダ・ガマ","マゼラン","コロンブス","ディアス"],
            a: "バスコ・ダ・ガマ",
            comment: "これにより香辛料貿易が盛んになりました。"
        },
        {
            q: "世界一周を成し遂げ、地球が球体であることを実証した一行の指揮者は？",
            choices: ["マゼラン","コロンブス","ドレーク","クック"],
            a: "マゼラン",
            comment: "マゼラン自身はフィリピンで戦死しましたが、部下が航海を続けました。"
        },
        {
            q: "1543年、種子島に漂着したポルトガル人が伝えた武器は？",
            img: "assets/images/history/h_early_modern_1_teppo.png",
            choices: ["鉄砲","大砲","火縄銃","弓矢"],
            a: "鉄砲",
            comment: "戦国時代の戦い方を大きく変えました。"
        },
        {
            q: "1549年、鹿児島に上陸し、日本にキリスト教を伝えたイエズス会の宣教師は？",
            choices: ["フランシスコ・ザビエル","ルイス・フロイス","ヴァリニャーノ","ペリー"],
            a: "フランシスコ・ザビエル",
            comment: "「以後よく（1549）広まるキリスト教」と覚えましょう。"
        },
        {
            q: "ポルトガル人やスペイン人との間で行われた貿易を何というか？",
            choices: ["南蛮貿易","勘合貿易","朱印船貿易","日宋貿易"],
            a: "南蛮貿易",
            comment: "鉄砲、火薬、時計、カステラ、ガラス製品などが輸入されました。"
        },
        {
            q: "キリスト教の信者となった大名を何というか？",
            choices: ["キリシタン大名","守護大名","戦国大名","南蛮大名"],
            a: "キリシタン大名",
            comment: "大友宗麟や有馬晴信、高山右近などが有名です。"
        },
        {
            q: "1582年、九州のキリシタン大名たちがローマ教皇のもとへ送った使節団は？",
            choices: ["天正遣欧少年使節","岩倉使節団","遣唐使","遣隋使"],
            a: "天正遣欧少年使節",
            comment: "伊東マンショら4人の少年が派遣されました。"
        },
        {
            q: "南蛮貿易で、日本から主に輸出された鉱物は？",
            img: "assets/images/history/h_early_modern_1_silver.png",
            choices: ["銀","銅","金","硫黄"],
            a: "銀",
            comment: "当時の日本は世界有数の銀の産出国でした。"
        }
    ],
    "h_early_modern_2": [
        {
            q: "1560年、桶狭間の戦いで今川義元を破った戦国大名は？",
            img: "assets/images/history/h_early_modern_2_oda_nobunaga_1773020370684.png",
            choices: ["織田信長","豊臣秀吉","徳川家康","武田信玄"],
            a: "織田信長",
            comment: "少数の兵で大軍を破る奇襲作戦でした。"
        },
        {
            q: "織田信長が将軍・足利き義昭を追放し、滅ぼした幕府は？",
            img: "assets/images/history/h_early_modern_2_muromachi_bakufu_1773020387281.png",
            choices: ["室町幕府","鎌倉幕府","江戸幕府","六波羅探題"],
            a: "室町幕府",
            comment: "1573年、室町幕府は事実上の滅亡を迎えました。"
        },
        {
            q: "織田信長が鉄砲を有効に使い、武田勝頼の騎馬隊を破った戦いは？",
            img: "assets/images/history/h_early_modern_2_nagashino.png",
            choices: ["長篠の戦い","桶狭間の戦い","関ヶ原の戦い","山崎の戦い"],
            a: "長篠の戦い",
            comment: "馬防柵（ばぼうさく）を作り、鉄砲隊を交代で撃たせたとされています。"
        },
        {
            q: "織田信長が琵琶湖のほとりに築いた、豪華な城は？",
            img: "assets/images/history/h_early_modern_2_azuchijo.png",
            choices: ["安土城","大阪城","姫路城","江戸城"],
            a: "安土城",
            comment: "天守（天主）を持つ初めての本格的な城といわれています。"
        },
        {
            q: "織田信長が行った、座を廃止して自由な商工業を認めた政策は？",
            img: "assets/images/history/h_early_modern_2_rakuichi_rakuza_1773020402162.png",
            choices: ["楽市・楽座","検地","刀狩","武家諸法度"],
            a: "楽市・楽座",
            comment: "関所の廃止なども行い、経済を活性化させました。"
        },
        {
            q: "一向一揆の拠点であったが、信長に降伏し、後に大阪城が築かれた場所にあった寺は？",
            img: "assets/images/history/h_early_modern_2_ishiyama.png",
            choices: ["石山本願寺","延暦寺","東大寺","法隆寺"],
            a: "石山本願寺",
            comment: "10年以上にわたる戦いの末、信長に明け渡されました。"
        },
        {
            q: "1582年、明智光秀に本能寺で襲われ、自害した出来事を何というか？",
            img: "assets/images/history/h_early_modern_2_honnouji.png",
            choices: ["本能寺の変","桶狭間の戦い","関ヶ原の戦い","応仁の乱"],
            a: "本能寺の変",
            comment: "天下統一を目前にして倒れました。"
        },
        {
            q: "明智光秀を山崎の戦いで破り、信長の後継者としての地位を固めた人物は？",
            img: "assets/images/history/h_early_modern_2_toyotomi_hideyoshi_1773020414593.png",
            choices: ["豊臣秀吉","徳川家康","柴田勝家","石田三成"],
            a: "豊臣秀吉",
            comment: "その後、大阪城を築いて全国統一を進めました。"
        },
        {
            q: "豊臣秀吉が、農民から武器を取り上げるために行った政策は？",
            img: "assets/images/history/h_early_modern_2_katanagari.png",
            choices: ["刀狩","太閤検地","楽市・楽座","兵農分離"],
            a: "刀狩",
            comment: "農民が一揆を起こすのを防ぎ、農業に専念させることが目的でした。"
        },
        {
            q: "豊臣秀吉が、全国の土地の良し悪しや広さを調べ、収穫量を石高で表した政策は？",
            img: "assets/images/history/h_early_modern_2_taiko_kenchi_1773020441454.png",
            choices: ["太閤検地","地租改正","班田収授法","墾田永年私財法"],
            a: "太閤検地",
            comment: "枡（ます）の大きさを統一し、検地帳を作成しました。"
        },
        {
            q: "太閤検地と刀狩により、武士と農民の身分がはっきりと分かれたことを何というか？",
            img: "assets/images/history/h_early_modern_2_heinobunri.png",
            choices: ["兵農分離","身分統制","四民平等","廃藩置県"],
            a: "兵農分離",
            comment: "武士は城下町に住み、農民は村で農業を行うようになりました。"
        },
        {
            q: "豊臣秀吉が行った、朝鮮への出兵（侵略）を何というか？",
            img: "assets/images/history/h_early_modern_2_bunroku_keicho_1773020457634.png",
            choices: ["文禄・慶長の役","白村江の戦い","日清戦争","元寇"],
            a: "文禄・慶長の役",
            comment: "明（中国）の征服を目指しましたが、秀吉の病死により撤退しました。"
        },
        {
            q: "織田信長や豊臣秀吉の頃の、大名や豪商の富を背景とした、豪華で雄大な文化を何というか？",
            img: "assets/images/history/h_early_modern_2_momoyama_culture_1773020471924.png",
            choices: ["桃山文化","元禄文化","化政文化","東山文化"],
            a: "桃山文化",
            comment: "金箔を多用した障壁画などが特徴です。"
        },
        {
            q: "桃山文化を代表する建築物で、別名「白鷺城」とも呼ばれる世界遺産は？",
            img: "assets/images/history/h_early_modern_2_himejijo.png",
            choices: ["姫路城","安土城","大阪城","熊本城"],
            a: "姫路城",
            comment: "美しい白い壁と天守閣が特徴です。"
        },
        {
            q: "「唐獅子図屏風」などを描いた、桃山文化を代表する画家は？",
            img: "assets/images/history/h_early_modern_2_kanoeitoku.png",
            choices: ["狩野永徳","雪舟","尾形光琳","葛飾北斎"],
            a: "狩野永徳",
            comment: "力強い筆使いと豪華な色彩が特徴です。"
        },
        {
            q: "「わび茶」を大成させ、茶道を精神的な文化に高めた人物は？",
            img: "assets/images/history/h_early_modern_2_sen_no_rikyu_1773020487799.png",
            choices: ["千利休","古田織部","今井宗久","足利義政"],
            a: "千利休",
            comment: "後に秀吉の怒りに触れ、切腹させられました。"
        },
        {
            q: "出雲の阿国が京都で始め、後の歌舞伎の起源となった踊りは？",
            img: "assets/images/history/h_early_modern_2_kabuki_odori_1773020515070.png",
            choices: ["かぶき踊り","盆踊り","能","狂言"],
            a: "かぶき踊り",
            comment: "派手な衣装や変わった振る舞いが人気を集めました。"
        }
    ],
    "h_early_modern_3": [
        {
            q: "1600年、徳川家康が石田三成らを破り、天下分け目の戦いと呼ばれた戦いは？",
            img: "assets/images/history/h_early_modern_3_sekigahara.png",
            choices: ["関ヶ原の戦い","大阪冬の陣","長篠の戦い","桶狭間の戦い"],
            a: "関ヶ原の戦い",
            comment: "この戦いに勝利した家康は、3年後に征夷大将軍となりました。"
        },
        {
            q: "徳川家康が建てた、尾張・紀伊・水戸の3つの徳川家のことを何というか？",
            img: "assets/images/history/h_early_modern_3_gosanke.png",
            choices: ["御三家","親藩","譜代大名","外様大名"],
            a: "御三家",
            comment: "将軍家に次ぐ高い地位で、将軍の跡継ぎがいない場合はここから選ばれました。"
        },
        {
            q: "関ヶ原の戦い以前から徳川氏に従っていた大名を何というか？",
            img: "assets/images/history/h_early_modern_3_fudai_daimyo.png",
            choices: ["譜代大名","親藩","外様大名","守護大名"],
            a: "譜代大名",
            comment: "重要な役職につくことができましたが、領地はそれほど大きくありませんでした。"
        },
        {
            q: "大名を1年ごとに江戸と領地を往復させ、妻子を江戸に住まわせた制度は？",
            img: "assets/images/history/h_early_modern_3_sankin_kotai.png",
            choices: ["参勤交代","武家諸法度","御成敗式目","楽市・楽座"],
            a: "参勤交代",
            comment: "3代将軍家光の時に制度化され、大名の経済力を削ぐ目的がありました。"
        },
        {
            q: "幕府が大名を統制するために定めた法律を何というか？",
            img: "assets/images/history/h_early_modern_3_buke_shohatto.png",
            choices: ["武家諸法度","禁中並公家諸法度","御成敗式目","公事方御定書"],
            a: "武家諸法度",
            comment: "違反すると、領地を没収されたり減らされたりすることもありました。"
        },
        {
            q: "1637年、九州でキリスト教徒への弾圧や重い税に苦しむ人々が起こした一揆は？",
            img: "assets/images/history/h_early_modern_3_shimabara_amakusa.png",
            choices: ["島原・天草一揆","土一揆","加賀の一向一揆","大塩平八郎の乱"],
            a: "島原・天草一揆",
            comment: "天草四郎（時貞）が大将となりました。これを機に鎖国が強化されました。"
        },
        {
            q: "キリスト教徒を見つけ出すために、聖母マリアやイエスの像を踏ませた行為は？",
            img: "assets/images/history/h_early_modern_3_ebumi.png",
            choices: ["絵踏","踏み絵","宗門改","魔女狩り"],
            a: "絵踏",
            comment: "その際に使われた像などを「踏み絵」といいます。"
        },
        {
            q: "キリスト教徒でないことを仏教の寺院に証明させた制度を何というか？",
            img: "assets/images/history/h_early_modern_3_shumon.png",
            choices: ["宗門改（寺請制度）","五人組","人別改","株仲間"],
            a: "宗門改（寺請制度）",
            comment: "人々は必ずどこかの寺の檀家になることが義務付けられました。"
        },
        {
            q: "鎖国中、長崎の出島で貿易を許された国は、中国（清）とどこか？",
            img: "assets/images/history/h_early_modern_3_oranda.png",
            choices: ["オランダ","ポルトガル","スペイン","イギリス"],
            a: "オランダ",
            comment: "キリスト教を布教しないことを約束したため、貿易が許されました。"
        },
        {
            q: "「鎖国の四つの窓」のうち、対馬藩を通じて国交のあった国は？",
            img: "assets/images/history/h_early_modern_3_chosen.png",
            choices: ["朝鮮","琉球王国","明","オランダ"],
            a: "朝鮮",
            comment: "将軍の代がわりごとに朝鮮通信使が来日しました。"
        },
        {
            q: "「鎖国の四つの窓」のうち、薩摩藩（鹿児島県）が実質的に支配していたのは？",
            img: "assets/images/history/h_early_modern_3_ryukyu.png",
            choices: ["琉球王国","アイヌ民族","台湾","小笠原諸島"],
            a: "琉球王国",
            comment: "中国とも貿易を行っており、謝恩使や慶賀使を江戸に派遣しました。"
        },
        {
            q: "松前藩（北海道）が独自の支配権を認められ、交易を行っていた相手は？",
            img: "assets/images/history/h_early_modern_3_chosen.png",
            choices: ["アイヌ民族","ロシア","朝鮮","中国"],
            a: "アイヌ民族",
            comment: "後にアイヌの人々は、シャクシャインの戦いなどで松前藩の支配に抵抗しました。"
        },
        {
            q: "江戸時代、朝鮮との外交を担当し、釜山に「倭館」を置いて貿易を行った藩は？",
            img: "assets/images/history/h_early_modern_3_tsushima.png",
            choices: ["対馬藩（宗氏）","松前藩（松前氏）","薩摩藩（島津氏）","長州藩（毛利氏）"],
            a: "対馬藩（宗氏）",
            comment: "朝鮮通信使の来日にも尽力しました。"
        },
        {
            q: "オランダ船が来航するたびに提出させた、海外の情勢を記した報告書は？",
            img: "assets/images/history/h_early_modern_3_fusetsusho.png",
            choices: ["オランダ風説書","解体新書","東方見聞録","古事記伝"],
            a: "オランダ風説書",
            comment: "幕府はこれによって海外の情報を独占しました。"
        },
        {
            q: "江戸時代の貨幣制度で、金・銀・銭の三種類の貨幣が使われたことを何というか？",
            img: "assets/images/history/h_early_modern_3_sanka.png",
            choices: ["三貨制度","金本位制","管理通貨制度","両替"],
            a: "三貨制度",
            comment: "交換比率が変動するため、両替商が活躍しました。"
        }
    ],
    "h_early_modern_4": [
        {
            q: "江戸時代に発明された、脱穀（米の粒を茎から外す）ための農具は？",
            img: "assets/images/history/h_early_modern_4_senbakoki.png",
            choices: ["千歯こき","備中ぐわ","唐箕","踏車"],
            a: "千歯こき",
            comment: "作業能率が大幅に向上し、後家倒し（未亡人の仕事を奪う）とも呼ばれました。"
        },
        {
            q: "深く耕すことができるようになった、江戸時代に広まった耕作道具は？",
            img: "assets/images/history/h_early_modern_4_bitchuguwa.png",
            choices: ["備中ぐわ","千歯こき","唐箕","竜骨車"],
            a: "備中ぐわ",
            comment: "深く耕すことで、農作物の収穫量が増えました。"
        },
        {
            q: "商品として売るために栽培された、綿花・菜種・藍などの作物を何というか？",
            img: "assets/images/history/h_early_modern_4_cash_crops_1773374713255.png",
            choices: ["商品作物","工芸作物","換金作物","穀物"],
            a: "商品作物",
            comment: "農村でも貨幣経済が広まるきっかけとなりました。"
        },
        {
            q: "犯罪の防止や年貢の納入において、共同責任を負わせるために作られた5～6軒のグループは？",
            img: "assets/images/history/h_early_modern_4_goningumi.png",
            choices: ["五人組","株仲間","座","惣村"],
            a: "五人組",
            comment: "相互監視の役割も果たしました。"
        },
        {
            q: "江戸時代、大阪は全国の物資が集まる中心地として何と呼ばれたか？",
            img: "assets/images/history/h_early_modern_4_tenka_no_daidokoro.png",
            choices: ["天下の台所","将軍のおひざもと","千年の都","東洋のマンチェスター"],
            a: "天下の台所",
            comment: "諸藩の蔵屋敷が立ち並び、米や特産物が取引されました。"
        },
        {
            q: "上方（大阪・京都）を中心に栄えた、町人たちの活気あふれる文化を何というか？",
            img: "assets/images/history/h_early_modern_4_genroku_bunka.png",
            choices: ["元禄文化","化政文化","桃山文化","東山文化"],
            a: "元禄文化",
            comment: "17世紀末から18世紀初めの文化です。"
        },
        {
            q: "「奥の細道」などで知られ、新しい俳諧の作風を確立した人物は？",
            img: "assets/images/history/h_early_modern_4_matsuo_basho.png",
            choices: ["松尾芭蕉","小林一茶","与謝蕪村","井原西鶴"],
            a: "松尾芭蕉",
            comment: "全国を旅して多くの名句を残しました。"
        },
        {
            q: "「日本永代蔵」などの浮世草子で、町人の生活を描いた作家は？",
            img: "assets/images/history/h_early_modern_4_ihara_saikaku.png",
            choices: ["井原西鶴","近松門左衛門","松尾芭蕉","十返舎一九"],
            a: "井原西鶴",
            comment: "「好色一代男」なども有名です。"
        },
        {
            q: "人形浄瑠璃の脚本を書き、心中物などで人気を博した人物は？",
            img: "assets/images/history/h_early_modern_4_chikamatsu.png",
            choices: ["近松門左衛門","井原西鶴","歌川広重","市川団十郎"],
            a: "近松門左衛門",
            comment: "「曽根崎心中」などが代表作です。"
        },
        {
            q: "「見返り美人図」などで知られる、浮世絵の創始者とされる人物は？",
            img: "assets/images/history/h_early_modern_4_hishikawa.png",
            choices: ["菱川師宣","喜多川歌麿","葛飾北斎","東洲斎写楽"],
            a: "菱川師宣",
            comment: "当初は墨一色でしたが、後に多色刷り（錦絵）へと発展しました。"
        },
        {
            q: "華やかな装飾画である「紅白梅図屏風」や「燕子花図屏風」を描いた画家は？",
            img: "assets/images/history/h_early_modern_4_korin.png",
            choices: ["尾形光琳","俵屋宗達","狩野永徳","雪舟"],
            a: "尾形光琳",
            comment: "そのデザイン性は「琳派」として後世に影響を与えました。"
        },
        {
            q: "江戸時代の農業技術で、イワシなどを干して作った販売用の肥料を何というか？",
            img: "assets/images/history/h_early_modern_4_hoshi_ka.png",
            choices: ["干鰯（金肥）","堆肥","厩肥","緑肥"],
            a: "干鰯（金肥）",
            comment: "お金で買う肥料（金肥）が普及し、生産性が向上しました。"
        },
        {
            q: "江戸時代、大阪と江戸の間で、木綿や油・酒などの生活物資を運んだ定期船は？",
            img: "assets/images/history/h_early_modern_4_higaki_kaisen.png",
            choices: ["菱垣廻船・樽廻船","北前船","朱印船","遣唐使船"],
            a: "菱垣廻船・樽廻船",
            comment: "樽廻船は酒を輸送するために分離・発展しました。"
        },
        {
            q: "幕府の命令で、西回り航路や東回り航路を整備した商人は？",
            img: "assets/images/history/h_early_modern_4_kawamura_zuiken.png",
            choices: ["河村瑞賢","角倉了以","紀伊国屋文左衛門","三井高利"],
            a: "河村瑞賢",
            comment: "東北地方の米を江戸や大阪に効率よく運べるようになりました。"
        },
        {
            q: "江戸幕府の財政を支えた、世界最大級の産出量を誇った金山は？",
            img: "assets/images/history/h_early_modern_4_sado_kinzan.png",
            choices: ["佐渡金山","石見銀山","生野銀山","足尾銅山"],
            a: "佐渡金山",
            comment: "天領（幕府の直轄地）として奉行が置かれました。"
        }
    ],
    "h_early_modern_5": [
        {
            q: "8代将軍徳川吉宗が行った、質素倹約や新田開発を進めた改革は？",
            img: "assets/images/history/h_early_modern_5_kyoho_no_kaikaku.png",
            choices: ["享保の改革","寛政の改革","天保の改革","田沼の政治"],
            a: "享保の改革",
            comment: "「米将軍」と呼ばれました。裁判の基準となる「公事方御定書」も制定しました。"
        },
        {
            q: "徳川吉宗が、庶民の意見を聞くために設置したものは？",
            img: "assets/images/history/h_early_modern_5_meyasubako.png",
            choices: ["目安箱","評定衆","問注所","六波羅探題"],
            a: "目安箱",
            comment: "これによって小石川養生所などが作られました。"
        },
        {
            q: "徳川吉宗が定めた、大名に米を献上させる代わりに参勤交代の期間を短くした制度は？",
            img: "assets/images/history/h_early_modern_5_agemai.png",
            choices: ["上げ米の制","武家諸法度","五箇条の御誓文","地租改正"],
            a: "上げ米の制",
            comment: "幕府の財政を立て直すための苦肉の策でした。"
        },
        {
            q: "飢饉に備えて、徳川吉宗が青木昆陽に栽培を奨励させた作物は？",
            img: "assets/images/history/h_early_modern_5_satsumaimo.png",
            choices: ["サツマイモ（甘藷）","ジャガイモ","トウモロコシ","カボチャ"],
            a: "サツマイモ（甘藷）",
            comment: "やせた土地でも育ち、多くの人々を飢えから救いました。"
        },
        {
            q: "株仲間の結成を認めて商業を奨励したが、賄賂が横行した老中は？",
            img: "assets/images/history/h_early_modern_5_tanuma_okitsugu.png",
            choices: ["田沼意次","松平定信","水野忠邦","新井白石"],
            a: "田沼意次",
            comment: "長崎貿易での海産物（俵物）の輸出も奨励しました。"
        },
        {
            q: "田沼意次の後、老中となり、寛政の改革を行った人物は？",
            img: "assets/images/history/h_early_modern_5_matsudaira_sadanobu_1773374727486.png",
            choices: ["松平定信","水野忠邦","徳川吉宗","井伊直弼"],
            a: "松平定信",
            comment: "徳川吉宗の孫で、厳しい倹約令や、農民を村に帰す政策を行いました。"
        },
        {
            q: "杉田玄白や前野良沢が、オランダ語の医学書を翻訳して出版した本は？",
            img: "assets/images/history/h_early_modern_5_kaitai.png",
            choices: ["解体新書","蘭学事始","医心方","東方見聞録"],
            a: "解体新書",
            comment: "『ターヘル・アナトミア』を翻訳したもので、日本の医学の発展に貢献しました。"
        },
        {
            q: "徳川吉宗が制定した、裁判の基準や刑罰を定めた法律は？",
            img: "assets/images/history/h_early_modern_5_kujikata.png",
            choices: ["公事方御定書","武家諸法度","御成敗式目","分国法"],
            a: "公事方御定書",
            comment: "公平な裁判を行うために作られ、後の法令の基礎となりました。"
        },
        {
            q: "田沼意次の時代、長崎貿易で銅の代わりに輸出が奨励された、干しアワビやフカヒレなどの海産物を何というか？",
            img: "assets/images/history/h_early_modern_5_tawaramono_1773374740242.png",
            choices: ["俵物","唐物","金肥","朱印状"],
            a: "俵物",
            comment: "中華料理の高級食材として珍重されました。"
        },
        {
            q: "日本古来の精神や文化を研究する「国学」を大成し、『古事記伝』を著した人物は？",
            img: "assets/images/history/h_early_modern_5_motoori_norinaga_1773374751912.png",
            choices: ["本居宣長","新井白石","杉田玄白","荷田春満"],
            a: "本居宣長",
            comment: "「もののあはれ」などの日本独自の精神を説きました。"
        }
    ],
    "h_early_modern_6": [
        {
            q: "19世紀初め、江戸の町人を中心に栄えた、皮肉や滑稽さを好む文化を何というか？",
            img: "assets/images/history/h_early_modern_6_kasei_culture_1773374764931.png",
            choices: ["化政文化","元禄文化","桃山文化","国風文化"],
            a: "化政文化",
            comment: "11代将軍徳川家斉の頃に栄えました。"
        },
        {
            q: "「富嶽三十六景」で知られる、化政文化を代表する浮世絵師は？",
            img: "assets/images/history/h_early_modern_6_hokusai.png",
            choices: ["葛飾北斎","歌川広重","喜多川歌麿","東洲斎写楽"],
            a: "葛飾北斎",
            comment: "大胆な構図で富士山を描きました。"
        },
        {
            q: "「東海道五十三次」で知られる、風景画の名手である浮世絵師は？",
            img: "assets/images/history/h_early_modern_6_hiroshige.png",
            choices: ["歌川広重","葛飾北斎","菱川師宣","鈴木春信"],
            a: "歌川広重",
            comment: "旅の情緒あふれる風景を描きました。"
        },
        {
            q: "滑稽本「東海道中膝栗毛」を書いた作家は？",
            img: "assets/images/history/h_early_modern_6_jippensha.png",
            choices: ["十返舎一九","滝沢馬琴","井原西鶴","近松門左衛門"],
            a: "十返舎一九",
            comment: "弥次さん・喜多さんの珍道中を描き、大人気となりました。"
        },
        {
            q: "読み・書き・そろばんを教える庶民の教育機関として普及したものは？",
            img: "assets/images/history/h_early_modern_6_terakoya.png",
            choices: ["寺子屋","藩校","私塾","大学校"],
            a: "寺子屋",
            comment: "この普及により、日本の識字率は世界でもトップクラスになりました。"
        },
        {
            q: "全国を測量して、精密な日本地図「大日本沿海輿地全図」を作った人物は？",
            img: "assets/images/history/h_early_modern_6_ino.png",
            choices: ["伊能忠敬","間宮林蔵","ジョン万次郎","松浦武四郎"],
            a: "伊能忠敬",
            comment: "50歳を過ぎてから測量を始め、地球１周分以上の距離を歩きました。"
        },
        {
            q: "1825年、幕府が出した、外国船を見つけたら砲撃して追い払うよう命じた法令は？",
            img: "assets/images/history/h_early_modern_6_ikokusen_uchiharai_rei_1773374782638.png",
            choices: ["異国船打払令","鎖国令","薪水給与令","廃刀令"],
            a: "異国船打払令",
            comment: "後にアヘン戦争での清の敗北を知り、緩和されました。"
        },
        {
            q: "1837年、大坂で不作と飢饉に苦しむ人々を救うため、幕府の元役人が起こした反乱は？",
            img: "assets/images/history/h_early_modern_6_oshio_heihachiro_1773374798503.png",
            choices: ["大塩平八郎の乱","島原の乱","承久の乱","正長の土一揆"],
            a: "大塩平八郎の乱",
            comment: "幕府の元役人が起こしたことで、幕府に大きな衝撃を与えました。"
        },
        {
            q: "幕府の鎖国政策を批判し、処罰された渡辺崋山や高野長英の事件を何というか？",
            img: "assets/images/history/h_early_modern_6_bansha_no_goku_1773374812551.png",
            choices: ["蛮社の獄","安政の大獄","寺田屋事件","生麦事件"],
            a: "蛮社の獄",
            comment: "モリソン号事件を批判したことで弾圧されました。"
        },
        {
            q: "老中の水野忠邦が行った、株仲間の解散や人返し令などの改革は？",
            img: "assets/images/history/h_early_modern_6_tenpo_reforms_1773374844210.png",
            choices: ["天保の改革","享保の改革","寛政の改革","明治維新"],
            a: "天保の改革",
            comment: "物価を下げるために株仲間を解散させましたが、かえって経済が混乱しました。"
        },
        {
            q: "1853年、浦賀（神奈川県）に来航し、日本に開国を迫ったアメリカの使節は？",
            img: "assets/images/history/h_early_modern_6_matthew_perry_1773374856428.png",
            choices: ["ペリー","ハリス","マッカーサー","ザビエル"],
            a: "ペリー",
            comment: "4隻の黒船で来航し、翌年、日米和親条約が結ばれました。"
        },
        {
            q: "化政文化の頃、多くの美人画（「ポッピンを吹く女」など）を描いた浮世絵師は？",
            img: "assets/images/history/h_early_modern_6_kitagawa.png",
            choices: ["喜多川歌麿","東洲斎写楽","葛飾北斎","鈴木春信"],
            a: "喜多川歌麿",
            comment: "女性の上半身を大きく描く「大首絵」の手法を用いました。"
        },
        {
            q: "わずか10ヶ月ほどの活動期間で、個性的な役者絵を数多く描いた謎の浮世絵師は？",
            img: "assets/images/history/h_early_modern_6_toshusai.png",
            choices: ["東洲斎写楽","喜多川歌麿","歌川国芳","菱川師宣"],
            a: "東洲斎写楽",
            comment: "役者の表情をデフォルメして描きました。"
        },
        {
            q: "1837年、日本人漂流民を送り届けようとしたアメリカの商船を、幕府が砲撃して追い払った事件は？",
            img: "assets/images/history/h_early_modern_6_morrison_incident_1773374870186.png",
            choices: ["モリソン号事件","フェートン号事件","生麦事件","ノルマントン号事件"],
            a: "モリソン号事件",
            comment: "異国船打払令に基づいて行われ、批判が高まるきっかけとなりました。"
        },
        {
            q: "モリソン号事件に対する幕府の対応を批判し、『慎機論』を書いて処罰された人物は？",
            img: "assets/images/history/h_early_modern_6_watanabe.png",
            choices: ["渡辺崋山","高野長英","大塩平八郎","吉田松陰"],
            a: "渡辺崋山",
            comment: "高野長英と共に「蛮社の獄」で弾圧されました。"
        }
    ],
    "h_modern_1": [
        {
            q: "1868年、天皇中心の新しい政府を作るために定められた、政治の基本方針は？",
            img: "assets/images/history/h_meiji_charter_oath_1773375454921.png",
            choices: ["五箇条の御誓文","十七条の憲法","御成敗式目","武家諸法度"],
            a: "五箇条の御誓文",
            comment: "「広く会議を興し、万機公論に決すべし」などで知られます。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "五箇条の御誓文の翌日、民衆に対して出された立て札（掲示）を何というか？",
            img: "assets/images/history/h_modern_1_gobou_1773341723175.png",
            choices: ["五榜の掲示","御触書","禁中並公家諸法度","公事方御定書"],
            a: "五榜の掲示",
            comment: "キリスト教の禁止など、江戸時代と変わらない内容も含まれていました。"
        },
        {
            q: "1869年、大名から土地（版）と人民（籍）を天皇に返させた改革は？",
            img: "assets/images/history/h_modern_1_hanseki_1773341740509.png",
            choices: ["版籍奉還","廃藩置県","地租改正","大政奉還"],
            a: "版籍奉還",
            comment: "旧大名は一度「知藩事」に任命されました。"
        },
        {
            q: "1871年、政府が藩を廃止して県を置き、中央から役人を派遣して治めさせた改革は？",
            img: "assets/images/history/h_modern_1_haihan_1773341754956.png",
            choices: ["廃藩置県","版籍奉還","地租改正","大政奉還"],
            a: "廃藩置県",
            comment: "これにより中央集権体制が整いました。"
        },
        {
            q: "「四民平等」のスローガンのもと、江戸時代の身分制度を廃止し、皇族以外のすべての人に名乗ることを許したのは？",
            img: "assets/images/history/h_modern_1_myouji_1773341771906.png",
            choices: ["苗字（名字）","家紋","刀","屋号"],
            a: "苗字（名字）",
            comment: "武士以外の農民や町人なども公的に苗字を持つようになりました。"
        },
        {
            q: "満20歳以上の男子に兵役の義務を負わせた法令は？",
            img: "assets/images/history/h_modern_1_chouhei_1773341786255.png",
            choices: ["徴兵令","地租改正","教育勅語","軍人勅諭"],
            a: "徴兵令",
            comment: "「血税」とも呼ばれ、反対する一揆も起こりました。"
        },
        {
            q: "土地の所有者に地券を発行し、地価の3%を現金で納めさせた改革は？",
            img: "assets/images/history/h_modern_1_chiso_1773341819391.png",
            choices: ["地租改正","検地","農地改革","楽市・楽座"],
            a: "地租改正",
            comment: "政府の財政を安定させることが目的でした（後に2.5%に引き下げ）。"
        },
        {
            q: "1872年に出され、満6歳以上の男女すべてに小学校教育を受けさせることにした法令は？",
            img: "assets/images/history/h_modern_1_gakusei_1773341836478.png",
            choices: ["学制","教育勅語","教育基本法","学校令"],
            a: "学制",
            comment: "「邑（むら）に不学の戸なく…」という理念が掲げられました。"
        },
        {
            q: "江戸と横浜の間に初めて開通し、「陸蒸気（おかじょうき）」と呼ばれた交通機関は？",
            img: "assets/images/history/h_modern_1_tetsudou_1773341856691.png",
            choices: ["鉄道","馬車鉄道","人力車","地下鉄"],
            a: "鉄道",
            comment: "新橋（東京）と横浜の間で開通しました。"
        },
        {
            q: "飛脚にかわって全国均一料金で手紙を届ける「郵便制度」を創設した人物は？",
            img: "assets/images/history/h_modern_1_maejima_1773341871605.png",
            choices: ["前島密","渋沢栄一","大久保利通","福沢諭吉"],
            a: "前島密",
            comment: "「郵便の父」と呼ばれ、1円切手の肖像画にもなっています。"
        },
        {
            q: "不平等条約の改正交渉などのため、岩倉具視を全権大使として欧米に派遣された使節団は？",
            img: "assets/images/history/h_modern_1_iwakura.png",
            choices: ["岩倉使節団","遣欧少年使節","遣唐使","遣隋使"],
            a: "岩倉使節団",
            comment: "大久保利通、木戸孝允、伊藤博文などが副使として参加しました。"
        },
        {
            q: "岩倉使節団に最年少（6歳）で参加し、後に女子英学塾（現在の津田塾大学）を創設した女性は？",
            img: "assets/images/history/h_modern_1_chiso_1773341819391.png",
            choices: ["津田梅子","樋口一葉","与謝野晶子","平塚らいてう"],
            a: "津田梅子",
            comment: "女子教育の発展に尽力しました。"
        },
        {
            q: "当時のスローガンで、経済を発展させて軍隊を強くすることを何というか？",
            img: "assets/images/history/h_modern_1_fukoku_1773341886843.png",
            choices: ["富国強兵","殖産興業","文明開化","和魂洋才"],
            a: "富国強兵",
            comment: "製糸場や製鉄所などの官営工場が作られました。"
        },
        {
            q: "西洋の文化が入り、人々の生活が変化したこと（ざんぎり頭や牛鍋、太陽暦の採用など）を何というか？",
            img: "assets/images/history/h_modern_1_bunmei_1773341920113.png",
            choices: ["文明開化","産業革命","ルネサンス","大正デモクラシー"],
            a: "文明開化",
            comment: "「ざんぎり頭をたたいてみれば、文明開化の音がする」と歌われました。"
        },
        {
            q: "1874年、征韓論を主張して政府を去った江藤新平らが佐賀県で起こした反乱は？",
            img: "assets/images/history/h_modern_1_saga_1773341937020.png",
            choices: ["佐賀の乱","西南戦争","萩の乱","神風連の乱"],
            a: "佐賀の乱",
            comment: "不平士族による反乱の先駆けとなりました。"
        },
        {
            q: "1877年、西郷隆盛を指導者として鹿児島の士族が起こした、最大かつ最後の士族の反乱は？",
            img: "assets/images/history/h_modern_1_seinan_1773341961438.png",
            choices: ["西南戦争","佐賀の乱","秩父事件","戊辰戦争"],
            a: "西南戦争",
            comment: "この敗北により、言論による政府批判（自由民権運動）へと移っていきました。"
        }
    ],
    "h_modern_2": [
        {
            q: "1874年、板垣退助らが政府に対して提出した、国民が選んだ議員による議会の開設を求めた意見書は？",
            img: "assets/images/history/h_modern_2_minsen.png",
            choices: ["民撰議院設立建白書","五箇条の御誓文","権利の章典","人権宣言"],
            a: "民撰議院設立建白書",
            comment: "これが自由民権運動の出発点となりました。"
        },
        {
            q: "征韓論に敗れて政府を去り、高知で立志社を作って自由民権運動を始めた人物は？",
            img: "assets/images/history/h_itagaki_taisuke_1773375469902.png",
            choices: ["板垣退助","西郷隆盛","大久保利通","木戸孝允"],
            a: "板垣退助",
            comment: "「板垣死すとも自由は死せず」の言葉で有名です。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "自由民権運動の理論的指導者で、「東洋のルソー」と呼ばれた人物は？",
            img: "assets/images/history/h_modern_2_dainippon_1773342325306.png",
            choices: ["中江兆民","植木枝盛","福沢諭吉","大隈重信"],
            a: "中江兆民",
            comment: "「民約訳解」を著し、民主主義思想を広めました。"
        },
        {
            q: "民間の人々が独自に作成した憲法の草案を何というか？（植木枝盛の「東洋大日本国国憲按」などが有名）",
            img: "assets/images/history/h_modern_2_houritsu_1773342438474.png",
            choices: ["私擬憲法","欽定憲法","民法典","御成敗式目"],
            a: "私擬憲法",
            comment: "国民の権利を重視した内容のものが多く作られました。"
        },
        {
            q: "1881年、政府が10年後の国会開設を約束した際に、それに向けて組織された板垣退助を党首とする政党は？",
            img: "assets/images/history/h_modern_2_jiyutou_1773342252801.png",
            choices: ["自由党","立憲改進党","立憲政友会","民政党"],
            a: "自由党",
            comment: "大隈重信は立憲改進党を結成しました。"
        },
        {
            q: "政府が、新聞や演説などで政府を批判することを厳しく取り締まった法律は？",
            img: "assets/images/history/h_modern_2_shinbun_1773342268008.png",
            choices: ["新聞紙条例・讒謗律（ざんぼうりつ）","治安維持法","国家総動員法","武家諸法度"],
            a: "新聞紙条例・讒謗律（ざんぼうりつ）",
            comment: "民権運動を抑え込むために制定されました。"
        },
        {
            q: "1884年、埼玉県で困窮した農民たちが起こした、自由民権運動の激化を示す事件は？",
            img: "assets/images/history/h_modern_2_chichibu.png",
            choices: ["秩父事件","米騒動","西南戦争","大塩平八郎の乱"],
            a: "秩父事件",
            comment: "軍隊が出動して鎮圧されました。"
        },
        {
            q: "ヨーロッパの憲法を調査し、初代内閣総理大臣となった人物は？",
            img: "assets/images/history/h_modern_2_itou_1773342283856.png",
            choices: ["伊藤博文","板垣退助","大隈重信","犬養毅"],
            a: "伊藤博文",
            comment: "君主権の強いドイツ（プロイセン）の憲法を参考にしました。"
        },
        {
            q: "1885年に内閣制度が作られた際、初代の外務大臣に就任したのは？（「鹿鳴館」で有名）",
            img: "assets/images/history/h_modern_2_inoue_1773342309163.png",
            choices: ["井上馨","陸奥宗光","小村寿太郎","岩倉具視"],
            a: "井上馨",
            comment: "欧化政策を進め、条約改正を目指しました。"
        },
        {
            q: "1889年に発布された、天皇が国民に与える形（欽定憲法）で制定された憲法は？",
            img: "assets/images/history/h_modern_2_teikoku_1773342395256.png",
            choices: ["大日本帝国憲法","日本国憲法","十七条の憲法","五箇条の御誓文"],
            a: "大日本帝国憲法",
            comment: "天皇が強大な権限（統帥権など）を持つことが定められました。"
        },
        {
            q: "大日本帝国憲法において、国民（臣民）の権利はどのように規定されていたか？",
            img: "assets/images/history/h_meiji_constitution_rights_1773375484380.png",
            choices: ["法律の範囲内で認められた","無制限に認められた","一切認められなかった","天皇の許可が必要だった"],
            a: "法律の範囲内で認められた",
            comment: "現在の日本国憲法の「基本的人権の尊重」とは大きく異なります。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1890年に教育の基本理念として出され、天皇への忠義や親孝行を説いたものは？",
            img: "assets/images/history/h_modern_2_kyouiku_1773342378576.png",
            choices: ["教育勅語","軍人勅諭","学制","五箇条の御誓文"],
            a: "教育勅語",
            comment: "学校行事などで読み上げられるようになりました。"
        },
        {
            q: "1890年に開かれた、日本初の議会を何というか？",
            img: "assets/images/history/h_modern_2_teikoku_1773342395256.png",
            choices: ["帝国議会","国会","国民議会","参議院"],
            a: "帝国議会",
            comment: "選挙で選ばれた衆議院と、皇族・華族などの貴族院の二院制でした。"
        },
        {
            q: "第1回衆議院議員総選挙の選挙権を持っていたのは？",
            choices: ["直接国税15円以上を納める満25歳以上の男子","満25歳以上のすべての男子","満20歳以上のすべての男女","武士の身分を持つ者"],
            a: "直接国税15円以上を納める満25歳以上の男子",
            comment: "国民のわずか1.1%に過ぎませんでした。"
        }
    ],
    "h_modern_3": [
        {
            q: "1886年、イギリス船が沈没した際に、日本人乗客が見殺しにされた事件は？",
            img: "assets/images/history/h_normanton_incident_1773375497759.png",
            choices: ["ノルマントン号事件","生麦事件","フェートン号事件","モリソン号事件"],
            a: "ノルマントン号事件",
            comment: "治外法権（領事裁判権）があるため、船長が軽い罪で済んだことが問題になりました。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "日清戦争の直前、イギリスとの間で治外法権（領事裁判権）の撤廃に成功した外務大臣は？",
            img: "assets/images/history/h_modern_3_mutsu_1773342472302.png",
            choices: ["陸奥宗光","小村寿太郎","井温馨","伊藤博文"],
            a: "陸奥宗光",
            comment: "相手国にも領事裁判権を認める対等な条約ではありませんでしたが、大きな一歩でした。"
        },
        {
            q: "1894年に朝鮮半島での反乱（甲午農民戦争）をきっかけに始まった、日本と清（中国）の戦争は？",
            img: "assets/images/history/h_modern_3_nisshin_1773342487674.png",
            choices: ["日清戦争","日露戦争","アヘン戦争","太平洋戦争"],
            a: "日清戦争",
            comment: "日本が勝利し、下関条約が結ばれました。"
        },
        {
            q: "下関条約・ポーツマス条約での、中国側の代表（全権）は？",
            img: "assets/images/history/h_modern_3_rikyoushou_1773342506842.png",
            choices: ["李鴻章","蔣介石","孫文","毛沢東"],
            a: "李鴻章",
            comment: "下関条約では伊藤博文・陸奥宗光と交渉しました。"
        },
        {
            q: "下関条約で日本が得た領土は、台湾とどこか？",
            img: "assets/images/history/h_modern_3_ryoutou_1773342522994.png",
            choices: ["遼東半島","朝鮮半島","樺太","満州"],
            a: "遼東半島",
            comment: "しかし、ロシア・ドイツ・フランスの三国干渉により返還しました。"
        },
        {
            q: "下関条約で日本が遼東半島を得たことに対し、ロシア・ドイツ・フランスが返還を要求した出来事は？",
            img: "assets/images/history/h_modern_3_sangoku_1773342541270.png",
            choices: ["三国干渉","三国同盟","ABCD包囲陣","二十一カ条の要求"],
            a: "三国干渉",
            comment: "「臥薪嘗胆（がしんしょうたん）」をスローガンに、ロシアへの対抗心を強めました。"
        },
        {
            q: "下関条約で日本が得た賠償金をもとに、金本位制を確立し、建設した官営工場は？",
            img: "assets/images/history/h_modern_3_yawata.png",
            choices: ["八幡製鉄所","富岡製糸場","横須賀造船所","長崎造船所"],
            a: "八幡製鉄所",
            comment: "軍備の拡張や産業の育成に使われました。"
        },
        {
            q: "1900年、清（中国）で起こった、外国勢力を追い出そうとする「扶清滅洋」を掲げた反乱は？",
            img: "assets/images/history/h_modern_3_giwadan_1773342569899.png",
            choices: ["義和団事件","辛亥革命","太平天国の乱","甲午農民戦争"],
            a: "義和団事件",
            comment: "日本を含む8カ国連合軍が出兵して鎮圧しました。"
        },
        {
            q: "1902年、ロシアの南下に対抗するために日本がイギリスと結んだ同盟は？",
            img: "assets/images/history/h_modern_3_nichiei_1773342589376.png",
            choices: ["日英同盟","日独伊三国同盟","薩長同盟","日ソ中立条約"],
            a: "日英同盟",
            comment: "「栄光ある孤立」を捨てたイギリスと同盟を結んだことは画期的でした。"
        },
        {
            q: "日露戦争の開戦に際し、「君死にたまふことなかれ」という詩を発表した歌人は？",
            img: "assets/images/history/h_modern_3_yosano_1773342605390.png",
            choices: ["与謝野晶子","樋口一葉","平塚らいてう","石川啄木"],
            a: "与謝野晶子",
            comment: "弟を思う気持ちを歌いましたが、批判も受けました。"
        },
        {
            q: "1904年に始まった、日本とロシアとの戦争は？",
            img: "assets/images/history/h_modern_3_nichiro_1773342626453.png",
            choices: ["日露戦争","日清戦争","クリミア戦争","シベリア出兵"],
            a: "日露戦争",
            comment: "日本海海戦などで勝利しましたが、国力は限界に達していました。"
        },
        {
            q: "日露戦争の講和条約（ポーツマス条約）を仲介したアメリカ大統領は？",
            img: "assets/images/history/h_modern_3_roosevelt_1773342637857.png",
            choices: ["セオドア・ルーズベルト","ウィルソン","リンカーン","フランクリン・ルーズベルト"],
            a: "セオドア・ルーズベルト",
            comment: "この功績でノーベル平和賞を受賞しました。"
        },
        {
            q: "ポーツマス条約で、日本が得た領土は？",
            img: "assets/images/history/h_modern_3_karafuto_1773342680820.png",
            choices: ["樺太（サハリン）の南半分","台湾","遼東半島","千島列島"],
            a: "樺太（サハリン）の南半分",
            comment: "賠償金は得られませんでした。"
        },
        {
            q: "日露戦争後、賠償金が得られなかったことに不満を持つ人々が起こした暴動事件は？",
            img: "assets/images/history/h_modern_3_hibiya_1773342694787.png",
            choices: ["日比谷焼き打ち事件","米騒動","秩父事件","二・二六事件"],
            a: "日比谷焼き打ち事件",
            comment: "国民の期待と実際の結果のギャップが原因でした。"
        },
        {
            q: "1910年、日本が朝鮮半島を完全に領土とした出来事を何というか？",
            img: "assets/images/history/h_modern_3_kankoku_1773342710567.png",
            choices: ["韓国併合","満州事変","日韓基本条約","日中共同声明"],
            a: "韓国併合",
            comment: "朝鮮総督府を置いて植民地支配を行いました。"
        },
        {
            q: "日露戦争後の1911年、関税自主権の回復（完全な条約改正）に成功した外務大臣は？",
            img: "assets/images/history/h_modern_3_komura_1773342724188.png",
            choices: ["小村寿太郎","陸奥宗光","伊藤博文","原敬"],
            a: "小村寿太郎",
            comment: "アメリカとの条約改正により実現しました。"
        }
    ],
    "h_modern_4": [
        {
            q: "日清戦争の頃に軽工業（製糸・紡績）が、日露戦争の頃に重工業が発展したことを何というか？",
            img: "assets/images/history/h_japan_industrial_revolution_1773375512035.png",
            choices: ["日本の産業革命","文明開化","高度経済成長","エネルギー革命"],
            a: "日本の産業革命",
            comment: "大阪は「東洋のマンチェスター」と呼ばれました。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "経済を支配するようになった、三井・三菱・住友・安田などの巨大な企業グループを何というか？",
            img: "assets/images/history/h_modern_4_futabatei.png",
            choices: ["財閥","カルテル","トラスト","コングロマリット"],
            a: "財閥",
            comment: "政府と結びついて経済を動かしました。"
        },
        {
            q: "日清戦争の賠償金の一部を使って、北九州に建設された官営の製鉄所は？",
            img: "assets/images/history/h_modern_4_yawata.png",
            choices: ["八幡製鉄所","富岡製糸場","筑波研究学園都市","釜石製鉄所"],
            a: "八幡製鉄所",
            comment: "筑豊炭田の石炭と中国からの鉄鉱石を利用しました。"
        },
        {
            q: "足尾銅山鉱毒事件の実態を訴え、天皇への直訴を試みるなど、生涯をかけて解決に取り組んだ人物は？",
            img: "assets/images/history/h_modern_4_tanaka.png",
            choices: ["田中正造","板垣退助","大杉栄","幸徳秋水"],
            a: "田中正造",
            comment: "日本初の公害問題とも言われます。"
        },
        {
            q: "コッホに学び、破傷風の治療法を発見したり、伝染病研究所を作った医学者は？",
            img: "assets/images/history/h_modern_4_kanou_1773342844133.png",
            choices: ["北里柴三郎","野口英世","志賀潔","森鴎外"],
            a: "北里柴三郎",
            comment: "「近代日本医学の父」と呼ばれます。"
        },
        {
            q: "黄熱病の研究で世界的に知られ、アフリカで亡くなった細菌学者は？",
            img: "assets/images/history/h_modern_4_kuroda.png",
            choices: ["野口英世","北里柴三郎","志賀潔","湯川秀樹"],
            a: "野口英世",
            comment: "現在の千円札の肖像画にもなっています。"
        },
        {
            q: "「学問のすゝめ」を書き、慶應義塾を創設した人物は？",
            img: "assets/images/history/h_modern_4_fukuzawa.png",
            choices: ["福沢諭吉","大隈重信","新渡戸稲造","津田梅子"],
            a: "福沢諭吉",
            comment: "「天は人の上に人を造らず…」の書き出しで有名です。"
        },
        {
            q: "言文一致体で「浮雲」を書いた、近代日本文学の先駆けとされる作家は？",
            img: "assets/images/history/h_modern_4_futabatei.png",
            choices: ["二葉亭四迷","坪内逍遥","夏目漱石","森鴎外"],
            a: "二葉亭四迷",
            comment: "話し言葉（口語）で小説を書くスタイルを確立しました。"
        },
        {
            q: "「吾輩は猫である」「坊っちゃん」などの小説を書いた文豪は？",
            img: "assets/images/history/h_modern_4_natsume.png",
            choices: ["夏目漱石","森鴎外","芥川龍之介","太宰治"],
            a: "夏目漱石",
            comment: "「こころ」なども教科書によく載っています。"
        },
        {
            q: "「舞姫」などの小説を書き、軍医としても活動した文豪は？",
            choices: ["森鴎外","夏目漱石","石川啄木","正岡子規"],
            a: "森鴎外",
            comment: "ドイツ留学の経験をもとに書かれました。"
        },
        {
            q: "「たけくらべ」などで知られる、明治時代の女性作家は？",
            img: "assets/images/history/h_modern_4_masaoka.png",
            choices: ["樋口一葉","与謝野晶子","平塚らいてう","津田梅子"],
            a: "樋口一葉",
            comment: "現在の5000円札の肖像画にもなっています。"
        },
        {
            q: "「一握の砂」などの歌集を出し、「はたらけどはたらけど…」の歌で知られる人物は？",
            img: "assets/images/history/h_modern_4_mori.png",
            choices: ["石川啄木","正岡子規","与謝野晶子","若山牧水"],
            a: "石川啄木",
            comment: "貧困や病苦の中で生活の歌を詠みました。"
        },
        {
            q: "「柿くへば鐘が鳴るなり法隆寺」など、俳句や短歌の改革を行った人物は？",
            img: "assets/images/history/h_modern_4_masaoka.png",
            choices: ["正岡子規","松尾芭蕉","小林一茶","与謝野晶子"],
            a: "正岡子規",
            comment: "「坂の上の雲」の主人公の一人でもあります。"
        },
        {
            q: "フェノロサの指導を受け、伝統的な日本画の復興に尽力した人物は？",
            img: "assets/images/history/h_modern_4_natsume.png",
            choices: ["岡倉天心","黒田清輝","横山大観","高村光雲"],
            a: "岡倉天心",
            comment: "東京美術学校（現在の東京芸大）の設立に関わりました。"
        },
        {
            q: "フランスで印象派の画法を学び、「湖畔」などを描いた洋画家は？",
            choices: ["黒田清輝","横山大観","岸田劉生","高橋由一"],
            a: "黒田清輝",
            comment: "白馬会を結成し、日本に洋画を広めました。"
        },
        {
            q: "「荒城の月」や「花」を作曲したが、23歳の若さで亡くなった作曲家は？",
            img: "assets/images/history/h_modern_4_taki.png",
            choices: ["滝廉太郎","山田耕筰","宮城道雄","伊沢修二"],
            a: "滝廉太郎",
            comment: "西洋音楽の日本への導入に貢献しました。"
        },
        {
            q: "原子の模型（土星型原子模型）を発表したが、当時は評価されなかった物理学者は？",
            img: "assets/images/history/h_modern_4_ogiwara_1773342862393.png",
            choices: ["長岡半太郎","湯川秀樹","朝永振一郎","仁科芳雄"],
            a: "長岡半太郎",
            comment: "後にその先見性が認められました。"
        },
        {
            q: "地球の緯度が変化することを発見し、「Z項」と名付けた天文学者は？",
            img: "assets/images/history/h_modern_4_suzuki_1773342781544.png",
            choices: ["木村栄","長岡半太郎","田中館愛橘","大森房吉"],
            a: "木村栄",
            comment: "水沢緯度観測所で研究を行いました。"
        },
        {
            q: "米ぬかからオリザニン（ビタミンB1）を発見し、脚気の予防に貢献した人物は？",
            img: "assets/images/history/h_suzuki_umetaro_1773375525634.png",
            choices: ["鈴木梅太郎","高峰譲吉","北里柴三郎","秦佐八郎"],
            a: "鈴木梅太郎",
            comment: "世界初のビタミン発見の一つです。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "アドレナリンやタカジアスターゼを発見した化学者は？",
            img: "assets/images/history/h_modern_4_takamine_1773342804382.png",
            choices: ["高峰譲吉","鈴木梅太郎","池田菊苗","長井長義"],
            a: "高峰譲吉",
            comment: "アメリカで活動し、日米親善（桜の寄贈）にも尽くしました。"
        },
        {
            q: "伝統的な木彫技術に西洋の写実性を取り入れ、「老猿」などの傑作を残した彫刻家は？",
            img: "assets/images/history/h_modern_4_takamura_1773342825062.png",
            choices: ["高村光雲","荻原守衛","朝倉文夫","平櫛田中"],
            a: "高村光雲",
            comment: "高村光太郎の父でもあります。"
        },
        {
            q: "「悲母観音」を描き、岡倉天心とともに日本画の改革に努めた画家は？",
            img: "assets/images/history/h_kano_hogai_1773375547428.png",
            choices: ["狩野芳崖","橋本雅邦","横山大観","下村観山"],
            a: "狩野芳崖",
            comment: "フェノロサに高く評価されました。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "ロダンの影響を受け、「女」などの作品を残した近代彫刻の先駆者は？",
            img: "assets/images/history/h_ogiwara_morie_1773375561178.png",
            choices: ["荻原守衛","高村光雲","新海竹太郎","中原悌二郎"],
            a: "荻原守衛",
            comment: "碌山（ろくざん）の号でも知られます。",
            imgCaption: "※画像はイメージです"
        }
    ],
    "h_modern_5": [
        {
            q: "1911年に起こった辛亥革命の中心人物で、「三民主義」を唱えたのは？",
            img: "assets/images/history/h_sun_yat_sen_1773375576470.png",
            choices: ["孫文","袁世凱","毛沢東","蔣介石"],
            a: "孫文",
            comment: "これにより清が滅び、中華民国が成立しました。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "第一次世界大戦のきっかけとなった、オーストリア皇太子夫妻が暗殺された事件は？",
            img: "assets/images/history/h_modern_5_fusen_1773342974151.png",
            choices: ["サラエボ事件","柳条湖事件","盧溝橋事件","満州事変"],
            a: "サラエボ事件",
            comment: "バルカン半島は「ヨーロッパの火薬庫」と呼ばれていました。"
        },
        {
            q: "1914年に始まった第一次世界大戦に、日本が参戦した理由は？",
            img: "assets/images/history/h_modern_3_nichiei_1773342589376.png",
            choices: ["日英同盟","日露同盟","三国同盟","日米修好通商条約"],
            a: "日英同盟",
            comment: "イギリスとの同盟を理由に、ドイツ領の中国・青島などを攻撃しました。"
        },
        {
            q: "第一次世界大戦中、日本が中国政府に突きつけた要求は？",
            img: "assets/images/history/h_modern_5_hara_takashi.png",
            choices: ["二十一カ条の要求","ポツダム宣言","ハル・ノート","リットン報告書"],
            a: "二十一カ条の要求",
            comment: "ドイツの権益を引き継ぐことなどを認めさせました。"
        },
        {
            q: "1917年、レーニンの指導により世界初の社会主義政権が成立した出来事は？",
            img: "assets/images/history/h_modern_5_russian_revolution.png",
            choices: ["ロシア革命","フランス革命","名誉革命","辛亥革命"],
            a: "ロシア革命",
            comment: "後にソビエト社会主義共和国連邦（ソ連）が成立しました。"
        },
        {
            q: "ロシア革命に干渉するために、日本などが軍隊を送った出来事は？",
            img: "assets/images/history/h_modern_5_ichikawa_1773343064412.png",
            choices: ["シベリア出兵","北方領土問題","第二次世界大戦","日露戦争"],
            a: "シベリア出兵",
            comment: "これが米騒動の直接の原因となりました。"
        },
        {
            q: "1918年、米の値段が上がったことに怒った人々が起こした暴動は？",
            choices: ["米騒動","打ちこわし","ええじゃないか","百姓一揆"],
            a: "米騒動",
            comment: "富山県の主婦たちから始まり、全国に広がりました。"
        },
        {
            q: "米騒動の後、日本で初めて本格的な政党内閣を組織した「平民宰相」は？",
            img: "assets/images/history/h_modern_5_josei_1773342941412.png",
            choices: ["原敬","加藤高明","大隈重信","寺内正毅"],
            a: "原敬",
            comment: "立憲政友会の総裁として内閣を作りました。"
        },
        {
            q: "第一次世界大戦の講和条約（ベルサイユ条約）に基づいて作られた、世界平和を守るための国際機関は？",
            img: "assets/images/history/league_of_nations_1773368667564.png",
            choices: ["国際連盟","国際連合","ユネスコ","WHO"],
            a: "国際連盟",
            comment: "事務次長として新渡戸稲造が活躍しました。"
        },
        {
            q: "朝鮮で起こった、日本の植民地支配からの独立を求める運動は？",
            img: "assets/images/history/h_modern_5_san_ichi_1773342925361.png",
            choices: ["三・一独立運動","五・四運動","義和団事件","辛亥革命"],
            a: "三・一独立運動",
            comment: "「独立万歳」を叫んでデモ行進をしました。"
        },
        {
            q: "大正時代、民主主義を求める運動や風潮が高まったことを何というか？",
            choices: ["大正デモクラシー","文明開化","自由民権運動","産業革命"],
            a: "大正デモクラシー",
            comment: "吉野作造が「民本主義」を唱え、護憲運動などが起きました。"
        },
        {
            q: "「青鞜」を発刊し、「元始、女性は太陽であった」と平塚らいてうらが訴えた運動は？",
            img: "assets/images/history/h_womens_liberation_1773375591562.png",
            choices: ["女性解放運動","部落解放運動","労働運動","小作争議"],
            a: "女性解放運動",
            comment: "女性の政治参加などを求め、後に新婦人協会を設立しました。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "被差別部落の人々が、差別からの解放と平等を求めて結成した団体は？",
            img: "assets/images/history/h_modern_5_suiheisha_1773342958792.png",
            choices: ["全国水平社","立志社","青鞜社","愛国社"],
            a: "全国水平社",
            comment: "「人の世に熱あれ、人間に光あれ」という宣言を出しました。"
        },
        {
            q: "1925年に制定された、満25歳以上のすべての男子に選挙権を与えた法律は？",
            img: "assets/images/history/h_universal_suffrage_1773375604435.png",
            choices: ["普通選挙法","治安維持法","国家総動員法","大日本帝国憲法"],
            a: "普通選挙法",
            comment: "加藤高明内閣の時に成立しました。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "普通選挙法と同時に制定された、社会主義運動などを取り締まる法律は？",
            img: "assets/images/history/h_peace_preservation_law_1773375622564.png",
            choices: ["治安維持法","国家総動員法","新聞紙条例","軍機保護法"],
            a: "治安維持法",
            comment: "後に取り締まりの対象が拡大され、言論弾圧に使われました。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "1925年、新聞や雑誌に加えて開始された、新しい情報の伝達手段は？",
            img: "assets/images/history/h_modern_5_radio_1773343017669.png",
            choices: ["ラジオ放送","テレビ放送","インターネット","電話"],
            a: "ラジオ放送",
            comment: "東京・大阪・名古屋で放送が始まりました。"
        },
        {
            q: "1923年9月1日に発生し、東京・横浜を中心に甚大な被害をもたらした自然災害は？",
            img: "assets/images/history/h_modern_5_kanto_earthquake.png",
            choices: ["関東大震災","阪神・淡路大震災","東日本大震災","濃尾地震"],
            a: "関東大震災",
            comment: "昼食時だったため火災が広がり、10万人以上の死者・行方不明者が出ました。"
        },
        {
            q: "第一次世界大戦の好景気（大戦景気）により、急に金持ちになった人々を何というか？",
            img: "assets/images/history/h_modern_5_narikin_1773343033285.png",
            choices: ["成金","長者","旧家","財閥"],
            a: "成金",
            comment: "暗い玄関で靴を探すために、お札に火をつける風刺画が有名です。"
        },
        {
            q: "天皇機関説を唱え、政党政治の理論的支柱となった憲法学者は？",
            img: "assets/images/history/h_modern_5_minobe_1773343048586.png",
            choices: ["美濃部達吉","吉野作造","上杉慎吉","穂積八束"],
            a: "美濃部達吉",
            comment: "後に軍部や右翼から攻撃され、著書が発禁となりました。"
        },
        {
            q: "平塚らいてうとともに新婦人協会を設立し、戦後も女性の地位向上に尽くした人物は？",
            img: "assets/images/history/h_ichikawa_fusae_1773375636600.png",
            choices: ["市川房枝","与謝野晶子","山川菊栄","石本シヅエ"],
            a: "市川房枝",
            comment: "婦人参政権獲得運動の中心人物です。",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "プロレタリア文学の代表作「蟹工船」を書き、非合法活動の中で拷問死した作家は？",
            img: "assets/images/history/h_modern_5_kobayashi.png",
            choices: ["小林多喜二","徳永直","葉山嘉樹","宮本百合子"],
            a: "小林多喜二",
            comment: "労働者の過酷な実態を描きました。"
        },
        {
            q: "「貧乏物語」を書いて貧困問題を論じ、後にマルクス経済学の研究に進んだ経済学者は？",
            img: "assets/images/history/h_modern_5_kawakami_1772244249505.png",
            choices: ["河上肇","幸徳秋水","片山潜","堺利彦"],
            a: "河上肇",
            comment: "京都帝国大学の教授を辞職しました。"
        },
        {
            q: "「善の研究」を著し、東洋と西洋の思想を融合させた「西田哲学」を確立した哲学者は？",
            img: "assets/images/history/h_modern_5_nishida_1773343145078.png",
            choices: ["西田幾多郎","和辻哲郎","三木清","津田左右吉"],
            a: "西田幾多郎",
            comment: "京都の「哲学の道」の名前の由来となりました。"
        },
        {
            q: "強力な磁石鋼（KS鋼）を発明し、「鉄の神様」と呼ばれた物理学者は？",
            img: "assets/images/history/h_modern_5_honda_1773343162028.png",
            choices: ["本多光太郎","長岡半太郎","八木秀次","丹羽保次郎"],
            a: "本多光太郎",
            comment: "東北帝国大学（現在の東北大学）で研究しました。"
        },
        {
            q: "民芸運動を提唱し、無名の職人が作った日用品（民衆的工芸）の美を称賛した人物は？",
            img: "assets/images/history/h_modern_5_yanagi_1773343178622.png",
            choices: ["柳宗悦","濱田庄司","河井寛次郎","富本憲吉"],
            a: "柳宗悦",
            comment: "日本民藝館を設立しました。"
        }
    ],
    "h_modern_6": [
        {
            q: "1929年、アメリカのニューヨークで株価が大暴落したことから始まった不景気は？",
            img: "assets/images/history/h_modern_6_sekai_kyoukou_1772283322337.png",
            choices: ["世界恐慌","昭和恐慌","金融恐慌","オイルショック"],
            a: "世界恐慌",
            comment: "アメリカではニューディール政策が行われました。"
        },
        {
            q: "世界恐慌の影響で、イギリスやフランスが行った、本国と植民地だけで貿易を行う政策は？",
            img: "assets/images/history/h_modern_6_block_keizai_1772283338988.png",
            choices: ["ブロック経済","ニューディール政策","ファシズム","鎖国"],
            a: "ブロック経済",
            comment: "関係の深い国だけでカギ（ブロック）をかけるような政策でした。"
        },
        {
            q: "ドイツでナチスを率いて独裁政治を行い、ユダヤ人を迫害した人物は？",
            img: "assets/images/history/h_modern_6_hitler_1772283357837.png",
            choices: ["ヒトラー","ムッソリーニ","スターリン","ルーズベルト"],
            a: "ヒトラー",
            comment: "「ファシズム」と呼ばれる全体主義的な政治を行いました。"
        },
        {
            q: "インドで「非暴力・不服従」を掲げ、イギリスからの独立運動を指導した人物は？",
            img: "assets/images/history/h_modern_6_gandhi_1772283388009.png",
            choices: ["ガンディー","ネルー","ジンナー","スカルノ"],
            a: "ガンディー",
            comment: "マハトマ（偉大なる魂）と呼ばれました。"
        },
        {
            q: "1931年、日本軍が南満州鉄道を爆破し、中国軍のしわざとして満州を占領した事件は？",
            img: "assets/images/history/h_modern_6_manshu_jihen_1772283403167.png",
            choices: ["満州事変","盧溝橋事件","柳条湖事件","日中戦争"],
            a: "満州事変",
            comment: "この後、傀儡（かいらい）国家である「満州国」を建国しました。"
        },
        {
            q: "満州事変を批判され、日本が1933年に脱退した国際機関は？",
            img: "assets/images/history/league_of_nations_1773368667564.png",
            choices: ["国際連盟","国際連合","WTO","APEC"],
            a: "国際連盟",
            comment: "松岡洋右（ようすけ）全権が会場を退場しました。"
        },
        {
            q: "1932年、海軍の将校らが首相官邸を襲撃し、犬養毅首相を暗殺した事件は？",
            img: "assets/images/history/h_modern_6_515_jihen_1772283457942.png",
            choices: ["五・一五事件","二・二六事件","大逆事件","桜田門外の変"],
            a: "五・一五事件",
            comment: "これにより政党内閣の時代が終わりました。"
        },
        {
            q: "1936年、陸軍の青年将校らが「昭和維新」を掲げて起こしたクーデター未遂事件は？",
            img: "assets/images/history/h_modern_6_226_jihen_1772283472750.png",
            choices: ["二・二六事件","五・一五事件","大逆事件","安政の大獄"],
            a: "二・二六事件",
            comment: "高橋是清蔵相らが暗殺され、軍部の発言力が強まりました。"
        },
        {
            q: "1937年、北京郊外での武力衝突（盧溝橋事件）をきっかけに始まった戦争は？",
            img: "assets/images/history/h_modern_6_nitchu_sensou_1772283487209.png",
            choices: ["日中戦争","太平洋戦争","日露戦争","第一次世界大戦"],
            a: "日中戦争",
            comment: "宣戦布告がないまま、泥沼の戦いとなりました。"
        },
        {
            q: "日中戦争の際、日本軍が占領した中国の首都（当時）で、多くの犠牲者を出したとされる事件は？",
            img: "assets/images/history/h_modern_6_nankin_jihen_1772283521854.png",
            choices: ["南京事件","上海事変","満州事変","義和団事件"],
            a: "南京事件",
            comment: "南京大虐殺とも呼ばれ、歴史認識の問題となっています。"
        },
        {
            q: "1938年、戦争のために必要な物資や労働力を、議会の承認なしに動員できるようにした法律は？",
            img: "assets/images/history/h_modern_6_kokka_soudouin_1772283539356.png",
            choices: ["国家総動員法","治安維持法","軍人勅諭","戒厳令"],
            a: "国家総動員法",
            comment: "国民の生活すべてが戦争のために統制されるようになりました。"
        },
        {
            q: "日中戦争の長期化に伴い、国民の戦争協力を強めるために掲げられたスローガンは？",
            img: "assets/images/history/h_modern_6_hakkou_ichiu_1772283551485.png",
            choices: ["八紘一宇","富国強兵","文明開化","和魂洋才"],
            a: "八紘一宇",
            comment: "「世界を一つの家にする」という意味で、侵略を正当化するのに使われました。"
        },
        {
            q: "戦争に協力するために、すべての政党などが解散して合流した組織は？",
            img: "assets/images/history/h_modern_6_taisei_yokusankai_1772283583665.png",
            choices: ["大政翼賛会","立憲政友会","憲政会","社会大衆党"],
            a: "大政翼賛会",
            comment: "隣組などが作られ、国民生活の隅々まで監視されました。"
        },
        {
            q: "近衛文麿内閣が掲げた、欧米の支配からアジアを解放し、共存共栄を目指すという構想は？",
            img: "assets/images/history/h_modern_6_daitoua_kyoueiken_1772283598273.png",
            choices: ["大東亜共栄圏","ヨーロッパ連合","国際連盟","ワルシャワ条約機構"],
            a: "大東亜共栄圏",
            comment: "実際には日本の資源確保などが目的の強いものでした。"
        }
    ],
    "h_modern_7": [
        {
            q: "1940年、日本がドイツ・イタリアと結んだ軍事同盟は？",
            img: "assets/images/history/h_modern_7_sangoku_doumei_1772302792344.png",
            choices: ["日独伊三国同盟","日英同盟","日ソ中立条約","ワルシャワ条約機構"],
            a: "日独伊三国同盟",
            comment: "これにより日本・ドイツ・イタリアの枢軸国と、連合国の対立が深まりました。"
        },
        {
            q: "日本への石油や鉄などの輸出を禁止し、経済的に追い詰めたアメリカ・イギリス・中国・オランダの包囲網を何というか？",
            img: "assets/images/history/h_modern_7_abcd_houijin_1772302738952.png",
            choices: ["ABCD包囲陣","三国干渉","鉄のカーテン","ブロック経済"],
            a: "ABCD包囲陣",
            comment: "America, Britain, China, Dutchの頭文字です。"
        },
        {
            q: "1941年、日本軍がハワイの真珠湾を攻撃して始まった戦争は？",
            img: "assets/images/history/h_modern_7_taiheiyou_sensou_1772283634578.png",
            choices: ["太平洋戦争","日清戦争","朝鮮戦争","湾岸戦争"],
            a: "太平洋戦争",
            comment: "日本など枢軸国と、アメリカ・イギリスなど連合国との戦いです。"
        },
        {
            q: "太平洋戦争の戦況を大きく転換させた、1942年の海戦は？",
            img: "assets/images/history/h_modern_7_midway_1772283649427.png",
            choices: ["ミッドウェー海戦","日本海海戦","レイテ沖海戦","トラファルガーの海戦"],
            a: "ミッドウェー海戦",
            comment: "日本軍は主力空母4隻を失い、守勢に転じました。"
        },
        {
            q: "戦局が悪化し、大学の文系学生なども軍隊に召集されたことを何というか？",
            img: "assets/images/history/h_modern_7_gakudo_sokai_1772244267399.png",
            choices: ["学徒出陣","学童疎開","徴兵令","勤労動員"],
            a: "学徒出陣",
            comment: "多くの若者が戦場に向かいました。"
        },
        {
            q: "小学生が集団で地方のお寺などに避難し、親元を離れて生活したことを何というか？",
            img: "assets/images/history/h_modern_7_gakudo_sokai_1772302809433.png",
            choices: ["学童疎開","集団就職","強制連行","引き揚げ"],
            a: "学童疎開",
            comment: "都市部への空襲が激しくなったため行われました。"
        },
        {
            q: "1945年3月、一夜にして10万人以上の死者を出した大規模な空襲は？",
            img: "assets/images/history/h_modern_7_tokyo_daikuushuu_1772302822754.png",
            choices: ["東京大空襲","大阪大空襲","神戸大空襲","沖縄戦"],
            a: "東京大空襲",
            comment: "B29による焼夷弾で東京の下町が焼き尽くされました。"
        },
        {
            q: "1945年3月、アメリカ軍が上陸し、住民を巻き込む激しい地上戦が行われた場所は？",
            img: "assets/images/history/h_modern_7_okinawa_sen_1772302848029.png",
            choices: ["沖縄県","鹿児島県","東京都","北海道"],
            a: "沖縄県",
            comment: "「鉄の暴風」と呼ばれるほどの激しい攻撃を受け、県民の4人に1人が亡くなりました。"
        },
        {
            q: "1945年2月、米・英・ソの首脳が会談し、ソ連の対日参戦などを決めた会議は？",
            img: "assets/images/history/h_modern_7_yalta_kaidan_1772302867470.png",
            choices: ["ヤルタ会談","ポツダム会談","カイロ会談","パリ講和会議"],
            a: "ヤルタ会談",
            comment: "これにより、後にソ連が日ソ中立条約を破って参戦しました。"
        },
        {
            q: "1945年8月6日と9日に、原子爆弾が投下された都市の組み合わせで正しいのは？",
            img: "assets/images/history/h_modern_7_hiroshima_nagasaki.png",
            choices: ["広島・長崎","広島・小倉","長崎・東京","広島・京都"],
            a: "広島・長崎",
            comment: "人類史上初めて核兵器が使用され、甚大な被害が出ました。"
        },
        {
            q: "日本が受け入れて降伏した、連合国軍からの降伏勧告宣言を何というか？",
            img: "assets/images/history/h_modern_7_potsdam_1772302919946.png",
            choices: ["ポツダム宣言","カイロ宣言","ヤルタ協定","サンフランシスコ平和条約"],
            a: "ポツダム宣言",
            comment: "1945年8月15日、昭和天皇がラジオ放送（玉音放送）で国民に知らせました。"
        },
        {
            q: "戦争が終わった後、日本を占領し、改革を行った連合国軍最高司令官総司令部の略称は？",
            img: "assets/images/history/h_modern_7_ghq_1772302935349.png",
            choices: ["GHQ","UN","NATO","WHO"],
            a: "GHQ",
            comment: "マッカーサーが最高司令官として指揮しました。"
        },
        {
            q: "戦時中、生活必需品などの不足に対し、切符などを使って配る制度を何というか？",
            img: "assets/images/history/h_modern_7_haikyuusei_1772302959481.png",
            choices: ["配給制","座","株仲間","楽市・楽座"],
            a: "配給制",
            comment: "お米や砂糖、マッチなどが対象となりました。"
        },
        {
            q: "戦時中、住民の団結や監視のために10軒程度で作られた組織は？",
            img: "assets/images/history/h_modern_7_tonarigumi_1772302987573.png",
            choices: ["隣組","五人組","惣","結"],
            a: "隣組",
            comment: "回覧板を回したり、バケツリレーの訓練をしたりしました。"
        },
        {
            q: "戦時中、国民の耐乏生活を強いるために掲げられた代表的なスローガンは？",
            img: "assets/images/history/h_modern_7_zeitaku_teki_1772303003253.png",
            choices: ["贅沢（ぜいたく）は敵だ","富国強兵","文明開化","板垣死すとも自由は死せず"],
            a: "贅沢（ぜいたく）は敵だ",
            comment: "「欲しがりません勝つまでは」なども有名です。"
        }
    ],
    "h_contemporary_1": [
        {
            q: "GHQの指令により、軍隊の解散や、戦争協力者の追放、選挙権の拡大などが行われたことを何というか？",
            choices: ["戦後改革（民主化政策）","大正デモクラシー","文明開化","富国強兵"],
            a: "戦後改革（民主化政策）",
            comment: "「国民主権」「基本的人権の尊重」「平和主義」の考え方が広められました。"
        },
        {
            q: "経済の民主化のために、三井・三菱・安田・住友などの巨大企業グループを解体したことを何というか？",
            img: "assets/images/history/h_contemporary_1_zaibatsu_dissolution.png",
            choices: ["財閥解体","農地改革","地租改正","労働組合法"],
            a: "財閥解体",
            comment: "経済力の集中を排除し、競争を促しました。"
        },
        {
            q: "地主が持っていた小作地を政府が買い上げ、小作人に安く売り渡した改革は？",
            img: "assets/images/history/h_contemporary_1_nongji_kaikaku.png",
            choices: ["農地改革","地租改正","検地","班田収授法"],
            a: "農地改革",
            comment: "これにより多くの自作農が生まれました。"
        },
        {
            q: "1946年11月3日に公布され、翌年5月3日に施行された、日本の現行憲法は？",
            img: "assets/images/history/h_contemporary_1_kenpou_1772244704026.png",
            choices: ["日本国憲法","大日本帝国憲法","十七条の憲法","五箇条の御誓文"],
            a: "日本国憲法",
            comment: "主権在民・基本的人権の尊重・平和主義の三大原則を掲げています。"
        },
        {
            q: "日本国憲法において、天皇の地位はどのように規定されているか？",
            choices: ["日本国の象徴","日本の元首","統治権の総攬者","軍の大元帥"],
            a: "日本国の象徴",
            comment: "政治的な権限は持たず、内閣の助言と承認に基づいて国事行為を行います。"
        },
        {
            q: "日本国憲法第9条で放棄すると定めているものは？",
            choices: ["戦争","税金","基本的人権","教育"],
            a: "戦争",
            comment: "戦力の不保持と交戦権の否認も定められました。"
        },
        {
            q: "民主的な教育を行うために1947年に制定された法律は？",
            img: "assets/images/history/fundamental_law_of_education_1773368683242.png",
            choices: ["教育基本法","教育勅語","学制","学校令"],
            a: "教育基本法",
            comment: "小・中学校の9年間が義務教育となりました。"
        },
        {
            q: "満20歳以上のすべての男女に選挙権が認められ、1946年に行われた選挙で初めて誕生したのは？",
            img: "assets/images/history/female_diet_members_1773368702040.png",
            choices: ["女性議員","首相公選制","貴族院議員","知事"],
            a: "女性議員",
            comment: "39名の女性議員が当選しました。"
        },
        {
            q: "労働者の権利を守るために制定された、労働基準法・労働組合法・労働関係調整法をまとめて何というか？",
            img: "assets/images/history/three_labor_laws_1773368747516.png",
            choices: ["労働三法","独占禁止法","生活保護法","男女雇用機会均等法"],
            a: "労働三法",
            comment: "労働者の地位向上と団結権などが保障されました。"
        },
        {
            q: "1945年に発足した、戦争を防ぎ世界平和を守るための国際機関は？",
            img: "assets/images/history/united_nations_1773368765000.png",
            choices: ["国際連合","国際連盟","EU","NATO"],
            a: "国際連合",
            comment: "本部はニューヨークに置かれました。日本は1956年に加盟しました。"
        },
        {
            q: "1946年1月1日、昭和天皇が自らを神ではなく人間であると宣言したことを何というか？",
            img: "assets/images/history/humanity_declaration_1773368781759.png",
            choices: ["人間宣言","玉音放送","五箇条の御誓文","開国宣言"],
            a: "人間宣言",
            comment: "国民と共に歩む姿勢を示しました。"
        },
        {
            q: "戦後の混乱期、駅前などに不法に開かれ、食料や生活用品が売買された市場を何というか？",
            img: "assets/images/history/h_contemporary_1_yamiichi_1772244726326.png",
            choices: ["闇市（やみいち）","定期市","楽市","公設市場"],
            a: "闇市（やみいち）",
            comment: "法外な値段でしたが、人々の生活を支えました。"
        }
    ],
    "h_contemporary_2": [
        {
            q: "第二次世界大戦後、アメリカを中心とする西側諸国と、ソ連を中心とする東側諸国が対立した状態を何というか？",
            img: "assets/images/history/h_contemporary_2_cold_war.png",
            choices: ["冷戦（冷たい戦争）","日露戦争","百年戦争","太平洋戦争"],
            a: "冷戦（冷たい戦争）",
            comment: "直接戦火を交えることは避けられましたが、各地で代理戦争が起きました。"
        },
        {
            q: "1950年、朝鮮半島の北と南が武力衝突して始まった戦争は？",
            img: "assets/images/history/h_early_modern_3_chosen.png",
            choices: ["朝鮮戦争","ベトナム戦争","湾岸戦争","日清戦争"],
            a: "朝鮮戦争",
            comment: "日本はアメリカ軍の基地となり、大量の物資調達（特需）により経済が回復しました。"
        },
        {
            q: "朝鮮戦争の際に日本国内の治安維持のために作られ、後に自衛隊へと発展した組織は？",
            choices: ["警察予備隊","特別高等警察","防衛大学校","青年海外協力隊"],
            a: "警察予備隊",
            comment: "その後、保安隊を経て1954年に自衛隊となりました。"
        },
        {
            q: "1949年、中国共産党が国民党を破って建国し、毛沢東が主席となった国は？",
            img: "assets/images/history/prc_founding_1773368835910.png",
            choices: ["中華人民共和国","中華民国","満州国","大韓民国"],
            a: "中華人民共和国",
            comment: "敗れた国民党（蔣介石）は台湾に逃れました。"
        },
        {
            q: "1951年、日本が48カ国と結び、主権を回復した条約は？",
            img: "assets/images/history/h_contemporary_2_sanfran_1772244741323.png",
            choices: ["サンフランシスコ平和条約","日ソ共同宣言","日韓基本条約","ポーツマス条約"],
            a: "サンフランシスコ平和条約",
            comment: "吉田茂首相が調印しました。ソ連や中国などは調印しませんでした。"
        },
        {
            q: "サンフランシスコ平和条約と同時に結ばれ、アメリカ軍が日本に駐留することを認めた条約は？",
            img: "assets/images/history/h_contemporary_2_anpo_1773343425775.png",
            choices: ["日米安全保障条約","日米和親条約","日米修好通商条約","日独伊三国同盟"],
            a: "日米安全保障条約",
            comment: "日本の防衛と極東の平和維持を目的としています。"
        },
        {
            q: "1955年、アジアやアフリカの国々が集まり、植民地主義への反対などを確認した会議は？",
            img: "assets/images/history/bandung_conference_1773368854829.png",
            choices: ["アジア・アフリカ会議（バンドン会議）","ヤルタ会談","ポツダム会談","ワシントン会議"],
            a: "アジア・アフリカ会議（バンドン会議）",
            comment: "「第三勢力」としての結束を強めました。"
        },
        {
            q: "1956年、日本とソ連との間で国交が回復した宣言は？",
            img: "assets/images/history/japan_soviet_declaration_1773368877058.png",
            choices: ["日ソ共同宣言","日中共同声明","日韓基本条約","日ソ中立条約"],
            a: "日ソ共同宣言",
            comment: "鳩山一郎首相が調印しました。これにより日本の国際連合への加盟が実現しました。"
        },
        {
            q: "1955年に自由民主党が結成されて以来、野党第一党の社会党と対立しながら約38年間政権を維持した体制は？",
            img: "assets/images/history/1955_system_1773368892221.png",
            choices: ["55年体制","大正デモクラシー","一党独裁","連立政権"],
            a: "55年体制",
            comment: "保守（自民党）と革新（社会党）の対立構造が続きました。"
        },
        {
            q: "1960年、日米安全保障条約の改定をめぐって起こった大規模な反対運動は？",
            img: "assets/images/history/anpo_protests_1773368944517.png",
            choices: ["安保闘争","学生運動","米騒動","護憲運動"],
            a: "安保闘争",
            comment: "岸信介内閣は新条約を批准した後に退陣しました。"
        },
        {
            q: "1949年、日本人として初めてノーベル賞（物理学賞）を受賞した人物は？",
            img: "assets/images/history/hideki_yukawa_1773368960434.png",
            choices: ["湯川秀樹","川端康成","佐藤栄作","江崎玲於奈"],
            a: "湯川秀樹",
            comment: "「中間子理論」の研究で受賞し、戦後の日本人に自信を与えました。"
        }
    ],
    "h_contemporary_3": [
        {
            q: "1960年代、日本経済が急速に発展し、世界第2位の経済大国になった時期を何というか？",
            img: "assets/images/history/h_contemporary_3_koudo_1772244756535.png",
            choices: ["高度経済成長","バブル経済","産業革命","戦後復興"],
            a: "高度経済成長",
            comment: "池田勇人内閣の「所得倍増計画」などが推進されました。"
        },
        {
            q: "1964年、アジアで初めて開催され、新幹線や高速道路の整備が進むきっかけとなったイベントは？",
            img: "assets/images/history/h_contemporary_3_tokyo_oly_1772244771640.png",
            choices: ["東京オリンピック","大阪万博","札幌オリンピック","長野オリンピック"],
            a: "東京オリンピック",
            comment: "戦後日本の復興を世界にアピールしました。"
        },
        {
            q: "高度経済成長期に普及した「三種の神器」とは、白黒テレビ、洗濯機とあと一つは？",
            img: "assets/images/history/h_contemporary_3_refrigerator_1772244281830.png",
            choices: ["冷蔵庫","クーラー","自動車","カラーテレビ"],
            a: "冷蔵庫",
            comment: "後の「新・三種の神器（3C）」はカラーテレビ・クーラー・自動車（カー）です。"
        },
        {
            q: "1965年、日本と韓国との間で国交が回復した条約は？",
            img: "assets/images/history/japan_korea_treaty_1773368982452.png",
            choices: ["日韓基本条約","日中共同声明","日ソ共同宣言","日中平和友好条約"],
            a: "日韓基本条約",
            comment: "佐藤栄作内閣の時に結ばれました。"
        },
        {
            q: "1967年に結成された、東南アジア諸国の地域協力機構は？",
            img: "assets/images/history/h_contemporary_3_asean_1773343491452.png",
            choices: ["ASEAN（東南アジア諸国連合）","EU","APEC","OPEC"],
            a: "ASEAN（東南アジア諸国連合）",
            comment: "経済発展と地域の安定を目指して設立されました。"
        },
        {
            q: "1968年、アメリカの施政権下にあったが、日本への返還が実現した諸島は？（正式な返還は1968年6月）",
            img: "assets/images/history/ogasawara_islands_1773369026963.png",
            choices: ["小笠原諸島","沖縄県","奄美群島","北方領土"],
            a: "小笠原諸島",
            comment: "沖縄よりも先に返還されました。"
        },
        {
            q: "工場からの排水や排煙が原因で、水俣病や四日市ぜんそくなどの健康被害が発生した問題を何というか？",
            img: "assets/images/history/h_contemporary_3_kougai_1772244786037.png",
            choices: ["公害問題","環境汚染","地球温暖化","自然破壊"],
            a: "公害問題",
            comment: "四大公害病として大きな社会問題となり、公害対策基本法などが制定されました。"
        },
        {
            q: "1971年、政府が設置した、公害対策や環境保全を担当する国の機関は？",
            choices: ["環境庁（現在の環境省）","公害等調整委員会","消費者庁","復興庁"],
            a: "環境庁（現在の環境省）",
            comment: "現在は環境省に昇格しています。"
        },
        {
            q: "1972年、アメリカから日本に返還された、戦後長くアメリカの統治下にあった県は？",
            img: "assets/images/history/h_modern_7_okinawa_sen_1772302848029.png",
            choices: ["沖縄県","北海道","東京都","長崎県"],
            a: "沖縄県",
            comment: "「核抜き・本土並み」での返還が実現しました。佐藤栄作首相の功績の一つです。"
        },
        {
            q: "1972年、田中角栄首相が訪中し、中国との国交を正常化した宣言は？",
            img: "assets/images/history/japan_china_communique_1773369049078.png",
            choices: ["日中共同声明","日中平和友好条約","日韓基本条約","日ソ共同宣言"],
            a: "日中共同声明",
            comment: "これにより中華民国（台湾）との国交は断絶しました。"
        },
        {
            q: "1978年、福田赳夫内閣の時に中国と結ばれた平和条約は？",
            img: "assets/images/history/japan_china_peace_treaty_1773369070327.png",
            choices: ["日中平和友好条約","日韓基本条約","日ソ共同宣言","サンフランシスコ平和条約"],
            a: "日中平和友好条約",
            comment: "鄧小平副首相が来日しました。"
        },
        {
            q: "佐藤栄作首相が唱えた、「核兵器を持たず、作らず、持ち込ませず」という原則は？",
            img: "assets/images/history/h_contemporary_3_hikaku_1772244298466.png",
            choices: ["非核三原則","平和五原則","三民主義","パンチャシラ"],
            a: "非核三原則",
            comment: "この功績などにより、佐藤栄作はノーベル平和賞を受賞しました。"
        }
    ],
    "h_contemporary_4": [
        {
            q: "1973年、第四次中東戦争をきっかけに原油価格が高騰し、世界経済が混乱した出来事を何というか？",
            img: "assets/images/history/h_contemporary_4_oil_shock.png",
            choices: ["石油危機（オイルショック）","世界恐慌","リーマンショック","バブル崩壊"],
            a: "石油危機（オイルショック）",
            comment: "トイレットペーパーなどの買い占め騒動が起きました。これにより高度経済成長が終わりました。"
        },
        {
            q: "1980年代後半、不動産や株の価格が異常に高騰した日本の経済状況を何というか？",
            img: "assets/images/history/h_contemporary_4_bubble_1772244803554.png",
            choices: ["バブル経済","高度経済成長","デフレーション","インフレーション"],
            a: "バブル経済",
            comment: "1990年代初めに崩壊し、長い不況（失われた10年、20年）が続きました。"
        },
        {
            q: "1989年、東西冷戦の象徴であった壁が取り払われた出来事は？",
            img: "assets/images/history/h_contemporary_4_berlin_1772244822418.png",
            choices: ["ベルリンの壁崩壊","ドイツ統一","ソ連解体","マルタ会談"],
            a: "ベルリンの壁崩壊",
            comment: "冷戦の終結を象徴する出来事でした。"
        },
        {
            q: "1989年、米ソ首脳が冷戦の終結を宣言した会談は？",
            choices: ["マルタ会談","ヤルタ会談","ポツダム会談","キャンプ・デービッド合意"],
            a: "マルタ会談",
            comment: "ブッシュ（父）大統領とゴルバチョフ書記長が会談しました。"
        },
        {
            q: "1991年、多国籍軍によるイラクへの攻撃で始まった戦争は？",
            img: "assets/images/history/gulf_war_1773369092957.png",
            choices: ["湾岸戦争","イラク戦争","アフガニスタン紛争","第四次中東戦争"],
            a: "湾岸戦争",
            comment: "日本は資金援助を行いましたが、人的貢献が不十分だと国際社会から批判されました。"
        },
        {
            q: "湾岸戦争の反省から、1992年に制定された、自衛隊の海外派遣を可能にした法律は？",
            img: "assets/images/history/pko_cooperation_1773369159816.png",
            choices: ["PKO協力法","テロ対策特別措置法","集団的自衛権","安全保障関連法"],
            a: "PKO協力法",
            comment: "国連平和維持活動（PKO）として、カンボジアなどに派遣されました。"
        },
        {
            q: "1993年、ヨーロッパ諸国が経済・通貨の統合を目指して発足させた組織は？",
            img: "assets/images/history/h_contemporary_4_eu_1773343658446.png",
            choices: ["EU（欧州連合）","EC（欧州共同体）","NATO","ASEAN"],
            a: "EU（欧州連合）",
            comment: "マーストリヒト条約によりECから発展しました。"
        },
        {
            q: "1995年1月17日に発生し、高速道路の倒壊や火災などで大きな被害を出した地震は？",
            img: "assets/images/history/great_hanshin_earthquake_1773369201638.png",
            choices: ["阪神・淡路大震災","東日本大震災","関東大震災","熊本地震"],
            a: "阪神・淡路大震災",
            comment: "ボランティア活動が活発化し、「ボランティア元年」とも呼ばれました。"
        },
        {
            q: "1995年、地下鉄サリン事件などを引き起こし、社会を震撼させた宗教団体は？",
            img: "assets/images/history/aum_shinrikyo_incident_1773369235813.png",
            choices: ["オウム真理教","アルカイダ","赤軍派","イスラム国"],
            a: "オウム真理教",
            comment: "無差別テロの恐怖を世界に植え付けました。"
        },
        {
            q: "1989年、竹下登内閣の時に初めて導入された税金は？",
            img: "assets/images/history/consumption_tax_intro_1773369253156.png",
            choices: ["消費税","所得税","法人税","地租"],
            a: "消費税",
            comment: "当初の税率は3%でした。"
        },
        {
            q: "1993年、細川護煕を首相とする連立政権が誕生し、終わった政治体制は？",
            img: "assets/images/history/1955_system_1773368892221.png",
            choices: ["55年体制","総力戦体制","幕藩体制","大正デモクラシー"],
            a: "55年体制",
            comment: "自民党が初めて野党に転落しました。"
        }
    ],
    "h_contemporary_5": [
        {
            q: "2001年9月11日、アメリカでハイジャックされた旅客機が高層ビルに突入した事件は？",
            img: "assets/images/history/september_11_attacks_1773369275436.png",
            choices: ["アメリカ同時多発テロ","ロンドン同時爆破テロ","パリ同時多発テロ","地下鉄サリン事件"],
            a: "アメリカ同時多発テロ",
            comment: "これを受けてアメリカは「テロとの戦い」を宣言し、アフガニスタンなどを攻撃しました。"
        },
        {
            q: "2011年3月11日に発生し、巨大津波や福島第一原発事故を引き起こした地震は？",
            img: "assets/images/history/h_contemporary_5_higashi_nihon_daishinsai.png",
            choices: ["東日本大震災","阪神・淡路大震災","関東大震災","スマトラ沖地震"],
            a: "東日本大震災",
            comment: "マグニチュード9.0という国内観測史上最大の地震でした。"
        },
        {
            q: "地球温暖化を防ぐため、1997年に京都で採択された温室効果ガス削減の約束は？",
            img: "assets/images/history/h_contemporary_5_kyoto_1772244316824.png",
            choices: ["京都議定書","パリ協定","モントリオール議定書","ラムサール条約"],
            a: "京都議定書",
            comment: "先進国に温室効果ガスの削減義務を課しました。"
        },
        {
            q: "2015年に採択された、すべての国が参加する地球温暖化対策の新たな枠組みは？",
            img: "assets/images/history/paris_agreement_1773369293123.png",
            choices: ["パリ協定","京都議定書","SDGs","COP21"],
            a: "パリ協定",
            comment: "産業革命前からの気温上昇を2度未満（できれば1.5度）に抑える目標を掲げました。"
        },
        {
            q: "2015年、国連で採択された「持続可能な開発目標」をアルファベット4文字で何というか？",
            img: "assets/images/history/h_contemporary_5_sdgs_1773343811627.png",
            choices: ["SDGs","NATO","APEC","OECD"],
            a: "SDGs",
            comment: "「貧困をなくそう」など17の目標があります。"
        },
        {
            q: "2000年代以降、インターネットや携帯電話などが急速に普及し、社会が大きく変化したことを何というか？",
            img: "assets/images/history/h_contemporary_5_it_1772244841788.png",
            choices: ["IT革命（情報革命）","産業革命","エネルギー革命","緑の革命"],
            a: "IT革命（情報革命）",
            comment: "世界中の情報が瞬時に手に入るようになりました。"
        },
        {
            q: "日本が直面している、子供の数が減り、高齢者の割合が増える問題を何というか？",
            img: "assets/images/history/h_contemporary_5_shoushi_1772244902724.png",
            choices: ["少子高齢化","人口爆発","ドーナツ化現象","過疎化"],
            a: "少子高齢化",
            comment: "年金や医療などの社会保障制度の維持が課題となっています。"
        },
        {
            q: "かつて日本で深刻だった公害を教訓に、資源を有効活用し、環境への負荷を減らす社会を何というか？",
            img: "assets/images/history/h_contemporary_5_junkangata_1772244917568.png",
            choices: ["循環型社会","情報化社会","格差社会","管理社会"],
            a: "循環型社会",
            comment: "3R（リデュース・リユース・リサイクル）などが推進されています。"
        },
        {
            q: "2002年、日本と北朝鮮の首脳会談で、北朝鮮が認めて謝罪した問題は？",
            choices: ["日本人拉致問題","核開発問題","ミサイル問題","領海侵犯問題"],
            a: "日本人拉致問題",
            comment: "小泉純一郎首相が訪朝し、一部の被害者が帰国しました。"
        },
        {
            q: "沖縄県にある、アメリカ軍基地の移設問題で揺れている飛行場は？",
            choices: ["普天間飛行場","嘉手納基地","那覇空港","横田基地"],
            a: "普天間飛行場",
            comment: "名護市辺野古への移設が進められていますが、反対運動も続いています。"
        },
        {
            q: "2010年、中国漁船衝突事件をきっかけに問題となった、沖縄県の島々（日本固有の領土）は？",
            choices: ["尖閣諸島","竹島","北方領土","小笠原諸島"],
            a: "尖閣諸島",
            comment: "中国が領有権を主張していますが、歴史的にも国際法的にも日本の領土です。"
        },
        {
            q: "島根県に属するが、韓国が不法に占拠している日本固有の領土は？",
            img: "assets/images/history/h_contemporary_5_takeshima_1773343826348.png",
            choices: ["竹島","尖閣諸島","対馬","佐渡島"],
            a: "竹島",
            comment: "日本に「竹島の日」が制定されています。"
        }
    ],
    "c_1": [
        {
            q: "夫婦と未婚の子供だけ、あるいは夫婦二人だけの世帯を何というか？",
            choices: ["核家族","大家族","単身世帯","二世帯住宅"],
            a: "核家族",
            comment: "戦後、日本の家族形態の主流となりました。"
        },
        {
            q: "子供の数が減り、高齢者の割合が増加している社会の状態は？",
            choices: ["少子高齢化","人口爆発","過疎化","ドーナツ化現象"],
            a: "少子高齢化",
            comment: "労働力不足や社会保障費の増大などが課題です。"
        },
        {
            q: "インターネットなどを通じて、大量の情報が瞬時に行き交う社会は？",
            choices: ["情報社会（情報化社会）","工業社会","農業社会","狩猟採集社会"],
            a: "情報社会（情報化社会）",
            comment: "情報を正しく活用する能力（情報リテラシー）が重要になります。"
        },
        {
            q: "人や物、お金、情報などが国境を越えて地球規模で動くようになることは？",
            choices: ["グローバル化","情報化","少子化","温暖化"],
            a: "グローバル化",
            comment: "異文化理解や多文化共生が求められます。"
        },
        {
            q: "国籍や民族、文化の違いを認め合い、共に生きていくことを何というか？",
            choices: ["多文化共生","文化相対主義","同化政策","排外主義"],
            a: "多文化共生",
            comment: "多様性を尊重する社会のあり方です。"
        },
        {
            q: "それぞれの地域の風土や歴史の中で育まれてきた、独自の生活様式や価値観は？",
            choices: ["伝統文化","大衆文化","サブカルチャー","ポップカルチャー"],
            a: "伝統文化",
            comment: "祭りや年中行事、芸能などが含まれます。"
        },
        {
            q: "男女が性別にかかわりなく、個性と能力を発揮できる社会を目指して制定された法律は？",
            choices: ["男女共同参画社会基本法","男女雇用機会均等法","労働基準法","育児介護休業法"],
            a: "男女共同参画社会基本法",
            comment: "「男は仕事、女は家庭」という固定的性別役割分担の意識を変える必要があります。"
        },
        {
            q: "誰もが使いやすいように製品や建物などを設計するという考え方は？",
            choices: ["ユニバーサルデザイン","バリアフリー","エコデザイン","グッドデザイン"],
            a: "ユニバーサルデザイン",
            comment: "障害の有無や年齢にかかわらず利用できるようにすることです。"
        },
        {
            q: "高齢者や障害者が社会生活を送る上で、障壁となるものを取り除くことは？",
            choices: ["バリアフリー","ユニバーサルデザイン","ノーマライゼーション","インクルージョン"],
            a: "バリアフリー",
            comment: "段差の解消やスロープの設置などが例です。"
        },
        {
            q: "情報を正しく判断し、活用する能力のことを何というか？",
            choices: ["情報リテラシー","メディアリテラシー","デジタルデバイド","ハッキング"],
            a: "情報リテラシー",
            comment: "情報の信憑性を疑う批判的な視点も重要です。"
        },
        {
            q: "特定の集団や属性に対して、多くの人が持っている固定的なイメージを何というか？",
            choices: ["ステレオタイプ","アイデンティティ","マジョリティ","マイノリティ"],
            a: "ステレオタイプ",
            comment: "「男性は仕事、女性は家事」などもステレオタイプの一種です。"
        },
        {
            q: "将来の世代の利益を損なわない範囲で、現在の世代の教求を満たす社会のあり方は？",
            choices: ["持続可能な社会","高度情報社会","大量消費社会","格差社会"],
            a: "持続可能な社会",
            comment: "サステナビリティ（Sustainability）とも呼ばれます。"
        },
        {
            q: "自発的に社会貢献活動を行う、「志願者」という意味の言葉は？",
            choices: ["ボランティア","ドナー","サポーター","インターン"],
            a: "ボランティア",
            comment: "阪神・淡路大震災（1995年）は「ボランティア元年」と呼ばれました。"
        },
        {
            q: "日本の伝統的な文化財のうち、演劇や音楽などの形のないものを何というか？",
            choices: ["無形文化財","有形文化財","埋蔵文化財","記念物"],
            a: "無形文化財",
            comment: "歌舞伎や能楽、和紙（手漉き和紙）の技術などが含まれます。"
        },
        {
            q: "異なる文化を持つ人々が、互いの文化を尊重し合い、対等な関係を築くことを何というか？",
            choices: ["異文化理解","文化統制","エスノセントリズム","文化摩擦"],
            a: "異文化理解",
            comment: "自文化中心主義（エスノセントリズム）に陥らないようにすることが大切です。"
        },
        {
            q: "テレビや新聞など、大量の情報を不特定多数の人々に伝達する手段を何というか？",
            choices: ["マスメディア","ソーシャルメディア","マルチメディア","パーソナルメディア"],
            a: "マスメディア",
            comment: "情報の送り手が一方的になりがちという側面もあります。"
        },
        {
            q: "マスメディアなどによって作られる、社会全体の大多数の意見を何というか？",
            choices: ["世論（よろん）","多数決","公約","プロパガンダ"],
            a: "世論（よろん）",
            comment: "政治や社会の動きに大きな影響を与えます。"
        },
        {
            q: "人間の知的創作活動によって生み出されたものを、創作者が独占的に利用できる権利は？",
            choices: ["知的財産権","所有権","人権","肖像権"],
            a: "知的財産権",
            comment: "著作権や特許権、商標権などが含まれます。"
        },
        {
            q: "小説や音楽、絵画などの作品を作った人に与えられる、知的財産権の一つは？",
            choices: ["著作権","特許権","実用新案権","意匠権"],
            a: "著作権",
            comment: "著作者の死後70年間保護されます（日本の場合）。"
        },
        {
            q: "新しい技術や発明をした人に与えられる、一定期間その発明を独占できる権利は？",
            choices: ["特許権","著作権","商標権","回路配置利用権"],
            a: "特許権",
            comment: "特許庁に出願し、審査を受ける必要があります。"
        },
        {
            q: "正月や盆など、毎年決まった時期に行われる行事を何というか？",
            choices: ["年中行事","通過儀礼","祭礼","伝統芸能"],
            a: "年中行事",
            comment: "日本人の生活リズムや季節感と深く結びついています。"
        },
        {
            q: "七五三や成人式のように、人生の区切りに行われる儀式を何というか？",
            choices: ["通過儀礼","冠婚葬祭","年中行事","ハレの日"],
            a: "通過儀礼",
            comment: "イニシエーションとも呼ばれ、子供から大人への成長などを祝います。"
        },
        {
            q: "1972年に採択された条約に基づき、ユネスコに登録される、人類共通の財産は？",
            img: "assets/images/history/h_early_modern_1_silver.png",
            choices: ["世界遺産","国宝","重要文化財","天然記念物"],
            a: "世界遺産",
            comment: "文化遺産、自然遺産、複合遺産の3種類があります。"
        },
        {
            q: "1998年に制定された、営利を目的としない市民活動団体に法人格を与える法律は？",
            choices: ["NPO法（特定非営利活動促進法）","NGO法","ボランティア法","市民活動法"],
            a: "NPO法（特定非営利活動促進法）",
            comment: "契約や財産管理が団体名義でできるようになりました。"
        },
        {
            q: "地域住民が親睦を深め、住みよい地域を作るために自主的に組織する団体は？",
            choices: ["町内会・自治会","NPO法人","生活協同組合","地方議会"],
            a: "町内会・自治会",
            comment: "防災訓練や清掃活動、祭りなどを行っています。"
        },
        {
            q: "異なる文化が接触したときに生じる、誤解や対立を何というか？",
            choices: ["文化摩擦","文化統合","文化伝播","文化遅滞"],
            a: "文化摩擦",
            comment: "異文化理解と対話によって解決していく必要があります。"
        },
        {
            q: "食料自給率の低下や、輸入食品の安全性などが問題となっている、食に関する課題を何というか？",
            choices: ["食の安全・安心","地産地消","食育","フードロス"],
            a: "食の安全・安心",
            comment: "トレーサビリティ（生産履歴の追跡）などの取り組みが進められています。"
        },
        {
            q: "商品の購入やサービスの利用を通じて、倫理的（エシカル）な選択をすることを何というか？",
            choices: ["エシカル消費","大量消費","誇示的消費","衝動買い"],
            a: "エシカル消費",
            comment: "フェアトレード商品や環境配慮型商品の購入などが例です。"
        }
    ],
    "c_2": [
        {
            q: "日本国憲法の三大原則は、国民主権、平和主義と何か？",
            choices: ["基本的人権の尊重","天皇主権","富国強兵","五箇条の御誓文"],
            a: "基本的人権の尊重",
            comment: "人間が生まれながらにして持っている権利を永久に保障します。"
        },
        {
            q: "日本国憲法において、主権は誰にあるとされているか？",
            choices: ["国民","天皇","内閣総理大臣","国会"],
            a: "国民",
            comment: "天皇は「日本国の象徴」とされています。"
        },
        {
            q: "個人の権利がお互いに衝突した場合、調整するための原理とされる言葉は？",
            choices: ["公共の福祉","多数決の原理","公序良俗","自己責任"],
            a: "公共の福祉",
            comment: "他人の人権を侵害しない範囲で、自由や権利が認められます。"
        },
        {
            q: "日本国憲法第14条で定められている、人種や信条、性別などで差別されない原則は？",
            choices: ["法の下の平等","機会均等","契約の自由","罪刑法定主義"],
            a: "法の下の平等",
            comment: "華族などの特権階級も認められていません。"
        },
        {
            q: "日本国憲法第25条で、「健康で文化的な最低限度の生活を営む権利」と規定されている権利は？",
            choices: ["生存権","自由権","参政権","請求権"],
            a: "生存権",
            comment: "社会権の一つで、生活保護制度などの根拠となります。"
        },
        {
            q: "自由に考え、意見を発表したり、集会を開いたりする自由を何というか？",
            choices: ["表現の自由","信教の自由","学問の自由","職業選択の自由"],
            a: "表現の自由",
            comment: "精神の自由（自由権）の一つです。"
        },
        {
            q: "不当に逮捕されたり、拘束されたりしない自由を何というか？",
            choices: ["身体の自由","精神の自由","経済活動の自由","居住移転の自由"],
            a: "身体の自由",
            comment: "奴隷的拘束や苦役からの自由も含まれます。"
        },
        {
            q: "政治に参加する権利（選挙権や被選挙権など）をまとめて何というか？",
            choices: ["参政権","社会権","自由権","平等権"],
            a: "参政権",
            comment: "「国民固有の権利」とされています。"
        },
        {
            q: "大気汚染や騒音などのない、良好な環境を求める新しい権利は？",
            choices: ["環境権","知る権利","プライバシーの権利","肖像権"],
            a: "環境権",
            comment: "日照権などもこれに含まれます。"
        },
        {
            q: "国や地方公共団体に対して、情報の公開を求める新しい権利は？",
            choices: ["知る権利","プライバシーの権利","自己決定権","アクセス権"],
            a: "知る権利",
            comment: "情報公開制度によって保障されます。"
        },
        {
            q: "1957年、生活保護の基準が低すぎるとして、生存権の侵害を訴えた裁判は？",
            choices: ["朝日訴訟","堀木訴訟","長沼ナイキ訴訟","恵庭事件"],
            a: "朝日訴訟",
            comment: "最高裁は「健康で文化的な最低限度の生活」の基準は厚生大臣の裁量に委ねられると判断しました。"
        },
        {
            q: "プライバシーの権利が侵害されたとして争われた、三島由紀夫の小説をめぐる事件は？",
            choices: ["「宴のあと」事件","「石に泳ぐ魚」事件","チャタレイ夫人の恋人事件","悪徳の栄え事件"],
            a: "「宴のあと」事件",
            comment: "日本で初めてプライバシー権が法的に認められるきっかけとなりました。"
        },
        {
            q: "マスメディアに対して、自分の意見を発表する場（反論記事など）の提供を求める権利は？",
            choices: ["アクセス権","知る権利","環境権","肖像権"],
            a: "アクセス権",
            comment: "「反論権」とも呼ばれます。"
        },
        {
            q: "医療現場などで、患者が医師から十分な説明を受け、納得した上で治療に同意することを何というか？",
            choices: ["インフォームド・コンセント","セカンド・オピニオン","ターミナル・ケア","ホスピス"],
            a: "インフォームド・コンセント",
            comment: "自己決定権の一つとして重要視されています。"
        },
        {
            q: "1948年、国連で採択された、世界中のすべての人々が達成すべき人権の基準は？",
            choices: ["世界人権宣言","国際人権規約","児童の権利条約","難民条約"],
            a: "世界人権宣言",
            comment: "法的拘束力はありませんが、各国の憲法や法律に大きな影響を与えました。"
        },
        {
            q: "1966年に国連で採択され、世界人権宣言の内容を条約化し、法的拘束力を持たせたものは？",
            choices: ["国際人権規約","平和維持活動協力法","人種差別撤廃条約","ジェノサイド条約"],
            a: "国際人権規約",
            comment: "A規約（社会権）とB規約（自由権）があります。"
        },
        {
            q: "18歳未満のすべての人の権利（生きる権利、守られる権利など）を定める条約は？",
            choices: ["子どもの権利条約","女子差別撤廃条約","障害者権利条約","人種差別撤廃条約"],
            a: "子どもの権利条約",
            comment: "日本は1994年に批准しました。"
        },
        {
            q: "職場における男女差別を禁止し、募集や採用、昇進などでの平等を定めた法律は？",
            choices: ["男女雇用機会均等法","労働基準法","育児・介護休業法","男女共同参画社会基本法"],
            a: "男女雇用機会均等法",
            comment: "1985年に制定され、その後も改正されて内容が強化されています。"
        },
        {
            q: "1215年、イギリスでジョン王の課税権を制限し、貴族の権利を認めさせた文書は？",
            choices: ["マグナ・カルタ（大憲章）","権利の章典","権利請願","人権宣言"],
            a: "マグナ・カルタ（大憲章）",
            comment: "法の支配の原型とされています。"
        },
        {
            q: "1789年のフランス革命で出された、自由・平等・博愛を掲げた宣言は？",
            choices: ["フランス人権宣言","アメリカ独立宣言","バージニア権利章典","権利の章典"],
            a: "フランス人権宣言",
            comment: "「人は生まれながらにして自由かつ平等な権利を持つ」と謳いました。"
        },
        {
            q: "1919年に制定されたドイツの憲法で、世界で初めて社会権（人間らしく生きる権利）を認めたものは？",
            choices: ["ワイマール憲法","プロイセン憲法","ボン基本法","ビスマルク憲法"],
            a: "ワイマール憲法",
            comment: "「生存権」の考え方に大きな影響を与えました。"
        },
        {
            q: "国が特定の宗教を支援したり、宗教活動を行ったりしてはならないという原則は？",
            choices: ["政教分離の原則","信教の自由","宗教の自由","思想・良心の自由"],
            a: "政教分離の原則",
            comment: "政治と宗教の結びつきを防ぐためのものです。"
        },
        {
            q: "大学などが、外部の権力（政府など）から干渉されずに研究や教育を行う権利は？",
            choices: ["学問の自由","教育を受ける権利","表現の自由","思想の自由"],
            a: "学問の自由",
            comment: "「大学の自治」として保障されています。"
        },
        {
            q: "どのような職業に就くかを自由に決めることができる権利は？",
            choices: ["職業選択の自由","勤労の権利","居住移転の自由","営業の自由"],
            a: "職業選択の自由",
            comment: "公共の福祉による制限を受ける場合があります（資格が必要な職業など）。"
        },
        {
            q: "どのような犯罪に対してどのような刑罰が科されるかを、あらかじめ法律で定めておかなければならないという原則は？",
            choices: ["罪刑法定主義","法の支配","法治主義","適正手続の保障"],
            a: "罪刑法定主義",
            comment: "「法律なければ刑罰なし」という言葉で表されます。"
        },
        {
            q: "現行犯以外で逮捕や捜索を行うには、裁判官の発する許可状が必要であるという原則は？",
            choices: ["令状主義","証拠裁判主義","無罪推定の原則","公開裁判の原則"],
            a: "令状主義",
            comment: "不当な捜査から人権を守るための仕組みです。"
        },
        {
            q: "自分にとって不利益な供述を強要されない権利を何というか？",
            choices: ["黙秘権","弁護人依頼権","接見交通権","供述拒否権"],
            a: "黙秘権",
            comment: "拷問による自白などを防ぐために保障されています。"
        },
        {
            q: "一度判決が確定した事件については、再び裁判で責任を問われないという原則は？",
            choices: ["一事不再理","遡及処罰の禁止","推定無罪","疑わしきは罰せず"],
            a: "一事不再理",
            comment: "刑事裁判の重要な原則の一つです。"
        },
        {
            q: "医療や臓器提供などの場面で、自分自身の生き方や扱いについて自ら決定する権利は？",
            choices: ["自己決定権","知る権利","プライバシーの権利","人格権"],
            a: "自己決定権",
            comment: "尊厳死や延命治療の拒否などもこの権利に関わります。"
        },
        {
            q: "国や地方公共団体が持っている情報を、住民の請求に応じて開示することを定めた制度は？",
            choices: ["情報公開制度","個人情報保護制度","オンブズマン制度","公益通報者保護制度"],
            a: "情報公開制度",
            comment: "知る権利を具体化するための制度です。"
        },
        {
            q: "アイヌ民族を先住民族と明記し、独自の文化の振興などを定めた2019年の法律は？",
            choices: ["アイヌ施策推進法","アイヌ文化振興法","旧土人保護法","人権擁護法"],
            a: "アイヌ施策推進法",
            comment: "アイヌ文化の誇りが尊重される社会の実現を目指しています。"
        },
        {
            q: "障害のある人もない人も、互いに支え合い、共に生きる社会を目指す法律は？",
            choices: ["障害者基本法","バリアフリー法","高齢者虐待防止法","生活保護法"],
            a: "障害者基本法",
            comment: "障害者の自立と社会参加の支援を定めています。"
        }
    ],
    "c_3": [
        {
            q: "国の権力を立法、行政、司法の三つに分け、抑制と均衡を保つ仕組みは？",
            choices: ["三権分立","地方自治","主権在民","立憲主義"],
            a: "三権分立",
            comment: "モンテスキューが『法の精神』で唱えました。"
        },
        {
            q: "日本国憲法において、「国権の最高機関」であり「唯一の立法機関」とされるのは？",
            choices: ["国会","内閣","裁判所","地方議会"],
            a: "国会",
            comment: "衆議院と参議院の二院制をとっています。"
        },
        {
            q: "行政権を担当し、国会に対して連帯して責任を負う機関は？",
            choices: ["内閣","国会","裁判所","警察庁"],
            a: "内閣",
            comment: "内閣総理大臣と国務大臣で組織されます。"
        },
        {
            q: "法律などが憲法に違反していないかどうかを審査する権限を持つことから、裁判所は何と呼ばれるか？",
            choices: ["憲法の番人","法の支配者","人権の守護者","最後の砦"],
            a: "憲法の番人",
            comment: "違憲立法審査権を行使します。"
        },
        {
            q: "衆議院が内閣を信任しないと決議した場合、内閣はどうしなければならないか？",
            choices: ["10日以内に衆議院を解散するか、総辞職する","直ちに総辞職する","衆議院議員をクビにする","参議院に判断を仰ぐ"],
            a: "10日以内に衆議院を解散するか、総辞職する",
            comment: "内閣不信任決議権に対する対抗措置です。"
        },
        {
            q: "裁判官が職務にふさわしくない行為をした場合、国会に設置される裁判所を何というか？",
            choices: ["弾劾裁判所","家庭裁判所","簡易裁判所","高等裁判所"],
            a: "弾劾裁判所",
            comment: "衆参両院の議員で作られます。"
        },
        {
            q: "選挙の4原則は、普通選挙、平等選挙、秘密選挙と何か？",
            choices: ["直接選挙","間接選挙","制限選挙","公開選挙"],
            a: "直接選挙",
            comment: "有権者が自分で直接候補者や政党に投票します。"
        },
        {
            q: "衆議院議員選挙で行われている、小選挙区制と比例代表制を組み合わせた制度は？",
            choices: ["小選挙区比例代表並立制","大選挙区制","中選挙区制","ドント方式"],
            a: "小選挙区比例代表並立制",
            comment: "二つの投票用紙に記入します。"
        },
        {
            q: "地域の政治をその地域の住民や自治体が行うことを、「民主主義の学校」と呼んだことにちなんで何というか？",
            choices: ["地方自治","直接請求権","住民投票","オンブズマン制度"],
            a: "地方自治",
            comment: "ブライスが提唱した言葉です。"
        },
        {
            q: "地方公共団体の収入のうち、国から使い道を決められずに配られるお金は？",
            choices: ["地方交付税交付金","国庫支出金","地方税","地方債"],
            a: "地方交付税交付金",
            comment: "地域間の財政格差をなくすために交付されます。"
        },
        {
            q: "小選挙区制の短所として指摘される、落選した候補者に投じられた票が議席に結びつかないことを何というか？",
            choices: ["死票（しひょう）","無効票","白票","組織票"],
            a: "死票（しひょう）",
            comment: "大政党に有利になりやすいという特徴もあります。"
        },
        {
            q: "選挙区ごとの議員一人当たりの人口が大きく異なり、投票の価値に不平等が生じている問題を何というか？",
            choices: ["一票の格差","人口格差","地域格差","経済格差"],
            a: "一票の格差",
            comment: "最高裁判所で違憲判決が出されることもあります。"
        },
        {
            q: "政党の活動を助成するために、国庫から交付されるお金を何というか？",
            choices: ["政党交付金","政治活動費","選挙準備金","特別会計"],
            a: "政党交付金",
            comment: "所属議員数や得票率に応じて配分されます。"
        },
        {
            q: "国会の審議において、実質的な議論の中心となっている、少数の議員で構成される機関は？",
            choices: ["委員会","公聴会","分科会","幹事会"],
            a: "委員会",
            comment: "本会議の前に詳細な審査を行います（委員会中心主義）。"
        },
        {
            q: "衆参両院が持っている、証人の喚問や記録の提出などを請求して国政を調査する権限は？",
            choices: ["国政調査権","違憲立法審査権","弾劾訴追権","内閣不信任決議権"],
            a: "国政調査権",
            comment: "ロッキード事件などの汚職事件の解明などで行使されました。"
        },
        {
            q: "公正取引委員会や人事院のように、内閣からある程度独立して職務を行う機関を何というか？",
            choices: ["行政委員会","諮問機関","独立行政法人","特殊法人"],
            a: "行政委員会",
            comment: "政治的な中立性を保つ必要があるため設置されます。"
        },
        {
            q: "憲法第15条で、「全体の奉仕者」であって「一部の奉仕者」ではないと定められているのは？",
            choices: ["公務員","国会議員","裁判官","内閣総理大臣"],
            a: "公務員",
            comment: "政治的活動の制限などの義務があります。"
        },
        {
            q: "裁判は原則として、一般に公開して行わなければならないという原則を何というか？",
            choices: ["裁判の公開","公開審理","情報公開","開かれた司法"],
            a: "裁判の公開",
            comment: "裁判の公正さを保つためです（対審と判決）。"
        },
        {
            q: "検察官が不起訴とした処分が妥当かどうかを、一般国民の中から選ばれた審査員が審査する機関は？",
            choices: ["検察審査会","弾劾裁判所","家庭裁判所","公安委員会"],
            a: "検察審査会",
            comment: "「起訴相当」の議決が出ると、強制的に起訴される場合もあります。"
        },
        {
            q: "法的なトラブル解決のために、情報の提供や費用の立替などを行う「日本司法支援センター」の愛称は？",
            choices: ["法テラス","法ネット","ジャスティス","ロースクール"],
            a: "法テラス",
            comment: "誰もが司法サービスを受けられるように設立されました。"
        },
        {
            q: "1999年に制定された、国と地方の関係を「対等・協力」の関係に変えることを目指した法律は？",
            choices: ["地方分権一括法","地方自治法","市町村合併特例法","道州制基本法"],
            a: "地方分権一括法",
            comment: "機関委任事務が廃止され、自治事務と法定受託事務に再編されました。"
        },
        {
            q: "国政選挙や都道府県知事選挙の事務など、本来は国の仕事だが、法令により地方公共団体が処理する事務は？",
            choices: ["法定受託事務","自治事務","機関委任事務","固有事務"],
            a: "法定受託事務",
            comment: "パスポートの交付や生活保護の決定などがこれにあたります。"
        },
        {
            q: "平成の時代に、財政基盤の強化などを目的として、多くの市町村が合併したことを何というか？",
            choices: ["平成の大合併","廃藩置県","明治の大合併","昭和の大合併"],
            a: "平成の大合併",
            comment: "市町村の数は約3200から約1700に減りました。"
        },
        {
            q: "衆議院と参議院の議決が異なった場合、衆議院の議決が国会の議決となることを何というか？",
            choices: ["衆議院の優越","ねじれ国会","両院協議会","再可決"],
            a: "衆議院の優越",
            comment: "予算の議決、条約の承認、内閣総理大臣の指名、法律案の再可決などで認められています。"
        },
        {
            q: "国会の会期のうち、毎年1回、1月中に召集されるものは？",
            choices: ["常会（通常国会）","臨時会（臨時国会）","特別会（特別国会）","緊急集会"],
            a: "常会（通常国会）",
            comment: "会期は150日間で、主に次年度の予算を審議します。"
        },
        {
            q: "比例代表制の選挙で、各政党の得票数に応じて議席を配分する計算方法を何というか？",
            choices: ["ドント式","小選挙区制","多数決","アダムズ方式"],
            a: "ドント式",
            comment: "得票数を1, 2, 3…と整数で割り、商の大きい順に議席を配分します。"
        },
        {
            q: "内閣が意思決定を行う会議を何というか？",
            choices: ["閣議","国務会議","御前会議","委員会"],
            a: "閣議",
            comment: "内閣総理大臣が主宰し、全会一致が原則です。"
        },
        {
            q: "地方自治法などの特定の法律を制定するために、対象となる地方公共団体の住民の投票で過半数の賛成が必要な制度は？",
            choices: ["住民投票","リコール","イニシアティブ","レファレンダム"],
            a: "住民投票",
            comment: "憲法95条に基づく「特別法の制定」の場合です。"
        },
        {
            q: "地方自治において、住民が署名を集めて、条例の制定や改廃を首長に請求する権利を何というか？",
            choices: ["直接請求権","請願権","知る権利","参政権"],
            a: "直接請求権",
            comment: "有権者の50分の1以上の署名が必要です。"
        },
        {
            q: "地方議会の解散や、首長・議員の解職を請求することを何というか？",
            choices: ["リコール（解職請求）","イニシアティブ","レファレンダム","不信任決議"],
            a: "リコール（解職請求）",
            comment: "有権者の3分の1以上の署名が必要です。"
        },
        {
            q: "重大な刑事事件の裁判に、一般の国民から選ばれた人が参加し、裁判官と一緒に判決に関わる制度は？",
            choices: ["裁判員制度","陪審員制度","検察審査会","調停制度"],
            a: "裁判員制度",
            comment: "2009年から開始されました。"
        },
        {
            q: "国会の委員会において、少数の専門的な議員によって詳細な審査を行うために設置されるものは？",
            choices: ["常任委員会","特別委員会","公聴会","分科会"],
            a: "常任委員会",
            comment: "予算委員会や外務委員会などがあります。"
        },
        {
            q: "地方公共団体の首長が、議会の議決に対して異議がある場合にやり直しを求める権限は？",
            choices: ["再議権（拒否権）","解散権","専決処分","不信任決議"],
            a: "再議権（拒否権）",
            comment: "拒否権とも呼ばれます。"
        },
        {
            q: "特定の事柄について、住民の意思を直接問うために行われる投票は？",
            choices: ["住民投票","国民投票","直接請求","リコール"],
            a: "住民投票",
            comment: "結果に法的拘束力がない場合が多いですが、政治的影響力は大きいです。"
        },
        {
            q: "選挙区のあちこちにポスターを貼ったり、街頭演説をしたりする選挙運動ができる期間は？",
            choices: ["公示（告示）日から投票日の前日まで","解散日から投票日まで","立候補届出日から開票日まで","いつでも可能"],
            a: "公示（告示）日から投票日の前日まで",
            comment: "期間外の選挙運動は事前運動として禁止されています。"
        },
        {
            q: "国会の委員会において、少数の専門的な議員によって詳細な審査を行うために設置されるものは？",
            choices: ["常任委員会","特別委員会","公聴会","分科会"],
            a: "常任委員会",
            comment: "予算委員会や外務委員会などがあります。"
        },
        {
            q: "地方公共団体の首長が、議会の議決に対して異議がある場合にやり直しを求める権限は？",
            choices: ["再議権（拒否権）","解散権","専決処分","不信任決議"],
            a: "再議権（拒否権）",
            comment: "拒否権とも呼ばれます。"
        },
        {
            q: "特定の事柄について、住民の意思を直接問うために行われる投票は？",
            choices: ["住民投票","国民投票","直接請求","リコール"],
            a: "住民投票",
            comment: "結果に法的拘束力がない場合が多いですが、政治的影響力は大きいです。"
        },
        {
            q: "選挙区のあちこちにポスターを貼ったり、街頭演説をしたりする選挙運動ができる期間は？",
            choices: ["公示（告示）日から投票日の前日まで","解散日から投票日まで","立候補届出日から開票日まで","いつでも可能"],
            a: "公示（告示）日から投票日の前日まで",
            comment: "期間外の選挙運動は事前運動として禁止されています。"
        },
        {
            q: "国会の委員会において、少数の専門的な議員によって詳細な審査を行うために設置されるものは？",
            choices: ["常任委員会","特別委員会","公聴会","分科会"],
            a: "常任委員会",
            comment: "予算委員会や外務委員会などがあります。"
        },
        {
            q: "地方公共団体の首長が、議会の議決に対して異議がある場合にやり直しを求める権限は？",
            choices: ["再議権（拒否権）","解散権","専決処分","不信任決議"],
            a: "再議権（拒否権）",
            comment: "拒否権とも呼ばれます。"
        },
        {
            q: "特定の事柄について、住民の意思を直接問うために行われる投票は？",
            choices: ["住民投票","国民投票","直接請求","リコール"],
            a: "住民投票",
            comment: "結果に法的拘束力がない場合が多いですが、政治的影響力は大きいです。"
        },
        {
            q: "選挙区のあちこちにポスターを貼ったり、街頭演説をしたりする選挙運動ができる期間は？",
            choices: ["公示（告示）日から投票日の前日まで","解散日から投票日まで","立候補届出日から開票日まで","いつでも可能"],
            a: "公示（告示）日から投票日の前日まで",
            comment: "期間外の選挙運動は事前運動として禁止されています。"
        }
    ],
    "c_4": [
        {
            q: "消費者が商品を買いたいと思う量のことを何というか？",
            choices: ["需要量","供給量","生産量","在庫量"],
            a: "需要量",
            comment: "価格が下がると需要量は増えるのが一般的です。"
        },
        {
            q: "市場において、需要量と供給量が一致した時の価格を何というか？",
            choices: ["均衡価格","独占価格","定価","市場価格"],
            a: "均衡価格",
            comment: "商品の価格は均衡価格に近づくように変動します。"
        },
        {
            q: "少数の企業が市場を支配し、価格などが決まる状態を何というか？",
            choices: ["寡占（かせん）","独占","自由競争","カルテル"],
            a: "寡占（かせん）",
            comment: "一社だけの支配は「独占」といいます。"
        },
        {
            q: "公正な競争を守るために、独占や寡占を規制する法律は？",
            choices: ["独占禁止法","商法","製造物責任法（PL法）","消費者契約法"],
            a: "独占禁止法",
            comment: "公正取引委員会が運用しています。"
        },
        {
            q: "多くの人々から資金を集めて事業を行う、現代の代表的な企業形態は？",
            choices: ["株式会社","協同組合","公企業","個人商店"],
            a: "株式会社",
            comment: "出資者は株式を受け取り、配当金などを得られます。"
        },
        {
            q: "日本の中央銀行であり、「発券銀行」「銀行の銀行」「政府の銀行」と呼ばれるのは？",
            choices: ["日本銀行","メガバンク","政策投資銀行","世界銀行"],
            a: "日本銀行",
            comment: "金融政策を行って景気や物価を調整します。"
        },
        {
            q: "物価が継続的に上昇し、貨幣価値が下がる現象を何というか？",
            choices: ["インフレーション","デフレーション","スタグフレーション","バブル経済"],
            a: "インフレーション",
            comment: "逆に物価が下がり続けるのはデフレーションです。"
        },
        {
            q: "納税者と税を負担する人が異なる税金を何というか？",
            choices: ["間接税","直接税","累進課税","源泉徴収"],
            a: "間接税",
            comment: "消費税などが代表例です。"
        },
        {
            q: "所得税のように、所得が高くなるにつれて税率が高くなる仕組みは？",
            choices: ["累進課税","逆進性","比例税率","フラットタックス"],
            a: "累進課税",
            comment: "所得の再分配機能を持っています。"
        },
        {
            q: "国民が病気や失業、老齢などで生活が困難になった時に、国が生活を保障する仕組みは？",
            choices: ["社会保障","社会保険","公的扶助","社会福祉"],
            a: "社会保障",
            comment: "日本の社会保障は「社会保険」「公的扶助」「社会福祉」「公衆衛生」の4つの柱からなります。"
        },
        {
            q: "訪問販売などで契約した場合、一定期間内であれば無条件で契約を解除できる制度は？",
            choices: ["クーリング・オフ","リコール","インサイダー取引","コンプライアンス"],
            a: "クーリング・オフ",
            comment: "訪問販売の場合は8日間以内であれば書面などで通知して解除できます。"
        },
        {
            q: "製品の欠陥によって消費者が被害を受けた場合、企業の過失がなくても損害賠償を請求できる法律は？",
            choices: ["製造物責任法（PL法）","消費者契約法","独占禁止法","食品衛生法"],
            a: "製造物責任法（PL法）",
            comment: "「欠陥」があったことを証明すればよいことになりました。"
        },
        {
            q: "労働基本権のうち、労働者が労働組合を作る権利、団体交渉を行う権利、団体行動を行う権利をまとめて何というか？",
            choices: ["労働三権","労働三法","基本的人権","社会権"],
            a: "労働三権",
            comment: "団結権、団体交渉権、団体行動権（争議権）の三つです。"
        },
        {
            q: "1ドル＝100円から1ドル＝80円になった場合、円の価値はどうなったといえるか？",
            choices: ["円高","円安","デフレ","インフレ"],
            a: "円高",
            comment: "円の価値が上がったため、輸入品が安くなります。"
        },
        {
            q: "国の借金にあたるもので、歳入不足を補うために発行される債券は？",
            choices: ["国債（公債）","社債","地方債","株式"],
            a: "国債（公債）",
            comment: "公共事業などのための「建設国債」と、赤字を埋める「赤字国債（特例国債）」があります。"
        },
        {
            q: "国や地方公共団体の歳出が、税金などの借金以外の収入で賄えているかを示す指標は？",
            choices: ["プライマリー・バランス","GDP","GNP","エンゲル係数"],
            a: "プライマリー・バランス",
            comment: "「基礎的財政収支」ともいい、これが黒字化することが財政健全化の目標です。"
        },
        {
            q: "40歳以上の国民が保険料を支払い、介護が必要になった時にサービスを受けられる制度は？",
            choices: ["介護保険制度","医療保険制度","年金保険制度","雇用保険制度"],
            a: "介護保険制度",
            comment: "2000年から導入された社会保険の一つです。"
        },
        {
            q: "商品を買う時に支払う消費税のように、税金を納める人と負担する人が異なる税金を何というか？",
            choices: ["間接税","直接税","地方税","国税"],
            a: "間接税",
            comment: "酒税やたばこ税も間接税です。"
        },
        {
            q: "商品の売買など、法的な効果を持つ約束を何というか？",
            choices: ["契約","約束","協定","条約"],
            a: "契約",
            comment: "口約束でも成立しますが、トラブル防止のため契約書を作ることが多いです。"
        },
        {
            q: "消費者の権利の尊重や自立の支援などを定めた、消費者行政の基本となる法律は？",
            choices: ["消費者基本法","消費者保護基本法","製造物責任法","特定商取引法"],
            a: "消費者基本法",
            comment: "2004年に消費者保護基本法を改正して制定されました。"
        },
        {
            q: "複数の金融業者から借金を重ね、返済が困難になっている状態を何というか？",
            choices: ["多重債務","債務不履行","自己破産","信用不安"],
            a: "多重債務",
            comment: "深刻な場合は弁護士や消費生活センターへの相談が必要です。"
        },
        {
            q: "個人の信用に基づいて、後払いで商品を購入できるカードを何というか？",
            choices: ["クレジットカード","デビットカード","プリペイドカード","キャッシュカード"],
            a: "クレジットカード",
            comment: "販売店が信販会社から代金を受け取り、消費者は後で信販会社に支払います。"
        },
        {
            q: "利益を追求するだけでなく、環境保護や社会貢献活動などにも責任を持つという企業の考え方は？",
            choices: ["企業の社会的責任（CSR）","コンプライアンス","メセナ","フィランソロピー"],
            a: "企業の社会的責任（CSR）",
            comment: "法令遵守（コンプライアンス）もその基礎となります。"
        },
        {
            q: "パートやアルバイト、派遣社員など、正社員以外の雇用形態をまとめて何というか？",
            choices: ["非正規雇用","終身雇用","年功序列","みなし雇用"],
            a: "非正規雇用",
            comment: "雇用の不安定さや低賃金などが問題となることがあります。"
        },
        {
            q: "仕事と私生活（家庭や趣味など）の調和をとることを何というか？",
            choices: ["ワーク・ライフ・バランス","フレックスタイム","テレワーク","働き方改革"],
            a: "ワーク・ライフ・バランス",
            comment: "過労死や少子化対策の観点からも重要視されています。"
        },
        {
            q: "1ドル＝100円だった相場が、1ドル＝80円になった場合、海外旅行に行く日本人にとっては得か損か？",
            choices: ["得になる（少ない円でドルを買えるから）","損になる（多くの円が必要だから）","変わらない","どちらとも言えない"],
            a: "得になる（少ない円でドルを買えるから）",
            comment: "これは「円高」の状態です。輸入品も安くなります。"
        },
        {
            q: "1990年代初め、株価や地価が急激に下落し、景気が後退した現象を何というか？",
            img: "assets/images/history/h_contemporary_4_bubble_1772244803554.png",
            choices: ["バブル経済の崩壊","リーマン・ショック","オイル・ショック","金融ビッグバン"],
            a: "バブル経済の崩壊",
            comment: "その後、長期にわたる不況（失われた20年）が続きました。"
        },
        {
            q: "税収全体に占める、直接税と間接税の割合のことを何というか？",
            choices: ["直間比率","税負担率","エンゲル係数","ジニ係数"],
            a: "直間比率",
            comment: "日本は近年、消費税の引き上げなどで間接税の割合が高まっています。"
        },
        {
            q: "将来受け取る年金の財源を、その時代の現役世代が納める保険料で賄う方式を何というか？",
            choices: ["賦課方式（ふかほうしき）","積立方式","修正積立方式","税方式"],
            a: "賦課方式（ふかほうしき）",
            comment: "日本の公的年金制度の基本です（少子高齢化の影響を受けやすい）。"
        },
        {
            q: "市場で、少数の企業が商品を生産・販売し、価格などが支配されている状態を何というか？",
            choices: ["寡占（かせん）","独占","完全競争","カルテル"],
            a: "寡占（かせん）",
            comment: "一社だけの支配は「独占」といいます。"
        },
        {
            q: "寡占市場において、価格競争を避け、宣伝やデザイン、サービスなどで競争することを何というか？",
            choices: ["非価格競争","価格競争","過当競争","自由競争"],
            a: "非価格競争",
            comment: "管理価格が形成されやすくなります。"
        },
        {
            q: "企業が、商品の価格や生産量について協定を結ぶことを何というか？",
            choices: ["カルテル","トラスト","コンツェルン","ホールディングス"],
            a: "カルテル",
            comment: "独占禁止法で原則として禁止されています。"
        },
        {
            q: "労働者が使用者と対等な立場で交渉するために団結する権利などを保障した3つの法律の総称は？",
            img: "assets/images/history/three_labor_laws_1773368747516.png",
            choices: ["労働三法","労働三権","社会保障関係費","生存権"],
            a: "労働三法",
            comment: "労働基準法、労働組合法、労働関係調整法の3つです。"
        },
        {
            q: "労働争議が発生した際、労働委員会が当事者の間に入って解決を図る手続きのうち、最も関与が強いものは？",
            choices: ["仲裁","調停","あっせん","和解"],
            a: "仲裁",
            comment: "仲裁裁定には法的拘束力があります。"
        }
    ],
    "c_5": [
        {
            q: "1945年に設立された、世界の平和と安全を守るための国際機関は？",
            img: "assets/images/history/united_nations_1773368765000.png",
            choices: ["国際連合","国際連盟","EU","NATO"],
            a: "国際連合",
            comment: "本部はニューヨークにあります。"
        },
        {
            q: "国際連合の主要機関の一つで、世界の平和と安全の維持に責任を持つ機関は？",
            choices: ["安全保障理事会","総会","経済社会理事会","国際司法裁判所"],
            a: "安全保障理事会",
            comment: "5つの常任理事国には拒否権があります。"
        },
        {
            q: "安全保障理事会の常任理事国は、アメリカ、イギリス、フランス、ロシアとどこか？",
            choices: ["中国","日本","ドイツ","インド"],
            a: "中国",
            comment: "第二次世界大戦の戦勝国が中心です。"
        },
        {
            q: "地球環境問題の一つで、化石燃料の大量消費などにより地球の平均気温が上昇することは？",
            choices: ["地球温暖化","オゾン層の破壊","酸性雨","砂漠化"],
            a: "地球温暖化",
            comment: "温室効果ガス（二酸化炭素など）の増加が原因とされています。"
        },
        {
            q: "将来の世代の欲求を満たしつつ、現在の世代の欲求も満たすような開発を何というか？",
            choices: ["持続可能な開発","経済成長","技術革新","環境破壊"],
            a: "持続可能な開発",
            comment: "「Sustainable Development」の訳語です。"
        },
        {
            q: "2015年に国連で採択された、「持続可能な開発目標」の略称は？",
            img: "assets/images/history/h_contemporary_5_sdgs_1773343811627.png",
            choices: ["SDGs","GDP","ODA","WHO"],
            a: "SDGs",
            comment: "17の目標と169のターゲットからなります。"
        },
        {
            q: "国境なき医師団やアムネスティ・インターナショナルなど、利益を目的とせずに活動する民間組織は？",
            choices: ["NGO（非政府組織）","NPO（非営利組織）","ODA（政府開発援助）","PKO（国連平和維持活動）"],
            a: "NGO（非政府組織）",
            comment: "国際的な課題解決に大きな役割を果たしています。"
        },
        {
            q: "二酸化炭素の排出を抑えるため、再生可能エネルギーとして注目されているのは？",
            choices: ["太陽光発電","火力発電","原子力発電","石油発電"],
            a: "太陽光発電",
            comment: "風力や地熱、バイオマスなども再生可能エネルギーです。"
        },
        {
            q: "先進国と発展途上国との間の経済格差の問題を何というか？",
            choices: ["南北問題","南南問題","東西問題","貿易摩擦"],
            a: "南北問題",
            comment: "北半球に先進国、南半球に途上国が多いことからこう呼ばれます。"
        },
        {
            q: "地域紛争の解決などのために、国連が各国の軍隊などを派遣して行う活動は？",
            choices: ["PKO（国連平和維持活動）","ODA（政府開発援助）","NGO活動","多国籍軍"],
            a: "PKO（国連平和維持活動）",
            comment: "日本も自衛隊を派遣しています。"
        },
        {
            q: "水鳥の生息地として重要な湿地を保護することを目的とした条約は？",
            choices: ["ラムサール条約","ワシントン条約","バーゼル条約","ロンドン条約"],
            a: "ラムサール条約",
            comment: "日本では釧路湿原などが登録されています。"
        },
        {
            q: "絶滅のおそれのある野生動植物の国際取引を規制する条約は？",
            choices: ["ワシントン条約","ラムサール条約","生物多様性条約","京都議定書"],
            a: "ワシントン条約",
            comment: "象牙やタイマイ（ウミガメ）などが対象です。"
        },
        {
            q: "熊本県の水俣湾沿岸で発生し、工場排水に含まれる有機水銀が原因となった公害病は？",
            choices: ["水俣病","新潟水俣病","イタイイタイ病","四日市ぜんそく"],
            a: "水俣病",
            comment: "手足のしびれや運動障害などの症状が出ました。"
        },
        {
            q: "富山県の神通川流域で発生し、鉱山から排出されたカドミウムが原因となった公害病は？",
            choices: ["イタイイタイ病","水俣病","四日市ぜんそく","川崎病"],
            a: "イタイイタイ病",
            comment: "骨がもろくなり、激しい痛みを伴います。"
        },
        {
            q: "核兵器を持つ国を増やさないことなどを目的とし、非核保有国の核開発を禁止した条約は？",
            choices: ["核拡散防止条約（NPT）","包括的核実験禁止条約（CTBT）","部分的核実験禁止条約（PTBT）","核兵器禁止条約"],
            a: "核拡散防止条約（NPT）",
            comment: "核保有国の軍縮義務も定めていますが、不十分だという批判もあります。"
        },
        {
            q: "ヨーロッパの多くの国が加盟し、共通通貨ユーロを導入するなどして経済的・政治的に統合を進めている組織は？",
            img: "assets/images/history/h_contemporary_4_eu_1773343658446.png",
            choices: ["EU（欧州連合）","ASEAN（東南アジア諸国連合）","NATO（北大西洋条約機構）","AU（アフリカ連合）"],
            a: "EU（欧州連合）",
            comment: "本部はベルギーのブリュッセルにあります。",
            answerImg: "assets/images/geography/g_gw_1_135_eu_flags_1773418101437.png",
            imgCaption: "※画像はイメージです"
        },
        {
            q: "東南アジアの10カ国が加盟し、経済成長や地域の安定を目指して協力している組織は？",
            img: "assets/images/history/h_contemporary_3_asean_1773343491452.png",
            choices: ["ASEAN（東南アジア諸国連合）","APEC（アジア太平洋経済協力）","OPEC（石油輸出国機構）","NAFTA"],
            a: "ASEAN（東南アジア諸国連合）",
            comment: "「東南アジア諸国連合」の略称です。"
        },
        {
            q: "アジア・太平洋地域の国々が、貿易の自由化や経済協力を進めるための枠組みは？",
            choices: ["APEC（アジア太平洋経済協力）","ASEAN","TPP","RCEP"],
            a: "APEC（アジア太平洋経済協力）",
            comment: "日本、アメリカ、中国、オーストラリアなどが参加しています。"
        },
        {
            q: "冷蔵庫の冷媒などに使われていたフロンガスが原因で破壊され、有害な紫外線の増加を招いているものは？",
            choices: ["オゾン層","温室効果ガス","成層圏","電離層"],
            a: "オゾン層",
            comment: "オゾンホールが南極上空などで観測されています。"
        },
        {
            q: "工場や自動車から排出される硫黄酸化物や窒素酸化物が原因で、森林を枯らしたりする雨は？",
            choices: ["酸性雨","集中豪雨","ゲリラ豪雨","放射能雨"],
            a: "酸性雨",
            comment: "国境を越えて被害が広がることもあります。"
        },
        {
            q: "過度な放牧や森林伐採などが原因で、土地が不毛化してしまう現象を何というか？",
            choices: ["砂漠化","塩害","地盤沈下","森林火災"],
            a: "砂漠化",
            comment: "アフリカのサヘル地域などで深刻な問題となっています。"
        },
        {
            q: "携帯電話やハイテク製品の製造に不可欠な、埋蔵量が少ない、または抽出が難しい金属を何というか？",
            choices: ["レアメタル（希少金属）","貴金属","ベースメタル","重金属"],
            a: "レアメタル（希少金属）",
            comment: "リサイクル（都市鉱山）の活用が期待されています。"
        },
        {
            q: "地下の岩盤層に含まれる天然ガスで、新しいエネルギー資源として注目されているものは？",
            choices: ["シェールガス","メタンハイドレート","バイオエタノール","地熱"],
            a: "シェールガス",
            comment: "アメリカなどで生産が拡大しています（シェール革命）。"
        },
        {
            q: "発電と同時に、その際に出る熱を給湯や暖房などに有効利用するシステムは？",
            choices: ["コージェネレーションシステム","ハイブリッドシステム","ヒートポンプ","スマートグリッド"],
            a: "コージェネレーションシステム",
            comment: "エネルギーの利用効率を高めることができます。"
        },
        {
            q: "国家の安全だけでなく、一人一人の人間の生命や尊厳を守るという考え方を何というか？",
            choices: ["人間の安全保障","集団安全保障","専守防衛","人道的介入"],
            a: "人間の安全保障",
            comment: "貧困、飢餓、感染症、環境破壊などの脅威から人々を守ることを重視します。"
        },
        {
            q: "対人地雷の使用、貯蔵、生産などを全面的に禁止する条約は？",
            choices: ["対人地雷全面禁止条約（オタワ条約）","化学兵器禁止条約","生物兵器禁止条約","クラスター弾に関する条約"],
            a: "対人地雷全面禁止条約（オタワ条約）",
            comment: "アメリカ、ロシア、中国などは未加盟です。"
        },
        {
            q: "特定の国や地域との間で、関税撤廃だけでなく、投資や人の移動の自由化なども含めた幅広い経済連携協定は？",
            choices: ["EPA（経済連携協定）","FTA（自由貿易協定）","WTO（世界貿易機関）","TPP"],
            a: "EPA（経済連携協定）",
            comment: "FTA（自由貿易協定）よりも広い範囲の協定です。"
        },
        {
            q: "2000年代以降、急速な経済成長を遂げたブラジル、ロシア、インド、中国、南アフリカの総称は？",
            choices: ["BRICS（ブリックス）","ASEAN","MERCOSUR","G20"],
            a: "BRICS（ブリックス）",
            comment: "世界経済における存在感が高まっています。"
        },
        {
            q: "パレスチナ地方で対立が続いている、ユダヤ人とアラブ人の間の紛争を何というか？",
            choices: ["パレスチナ問題","カシミール紛争","クルド人問題","ウクライナ危機"],
            a: "パレスチナ問題",
            comment: "宗教や土地、歴史的背景が複雑に絡み合っています。"
        },
        {
            q: "政府開発援助（ODA）を実施する日本の機関は？",
            choices: ["JICA（国際協力機構）","JETRO（日本貿易振興機構）","JBIC（国際協力銀行）","UNICEF"],
            a: "JICA（国際協力機構）",
            comment: "技術協力や青年海外協力隊の派遣などを行っています。"
        },
        {
            q: "石油資源に依存せず、トウモロコシやサトウキビなどの植物から作られる燃料は？",
            choices: ["バイオ燃料","化石燃料","水素燃料","原子力"],
            a: "バイオ燃料",
            comment: "二酸化炭素の排出量を実質的に増やさない（カーボンニュートラル）とされます。"
        },
        {
            q: "国連の専門機関で、労働条件の改善や社会保障の充実を目指す機関は？",
            choices: ["ILO（国際労働機関）","WHO（世界保健機関）","FAO（国連食糧農業機関）","IMF（国際通貨基金）"],
            a: "ILO（国際労働機関）",
            comment: "本部はジュネーブにあります。"
        },
        {
            q: "原子力の平和利用を促進し、軍事転用を防ぐための国際機関は？",
            choices: ["IAEA（国際原子力機関）","NPT（核拡散防止条約）","IEA（国際エネルギー機関）","UNESCO"],
            a: "IAEA（国際原子力機関）",
            comment: "「核の番人」とも呼ばれます。"
        },
        {
            q: "1985年に採択され、オゾン層の保護を定めた条約は？",
            choices: ["ウィーン条約","モントリオール議定書","京都議定書","パリ協定"],
            a: "ウィーン条約",
            comment: "具体的な規制内容はモントリオール議定書で定められました。"
        },
        {
            q: "特定の野生動植物の絶滅を防ぐため、国際的な取引を規制する条約は？",
            choices: ["ワシントン条約","ラムサール条約","生物多様性条約","名古屋議定書"],
            a: "ワシントン条約",
            comment: "象牙やウミガメなどが対象です。"
        },
        {
            q: "難民の保護や支援を行う、国連の機関は？",
            choices: ["UNHCR（国連難民高等弁務官事務所）","UNICEF（国連児童基金）","WFP（国連世界食糧計画）","PKO（平和維持活動）"],
            a: "UNHCR（国連難民高等弁務官事務所）",
            comment: "緒方貞子さんが高等弁務官を務めました。"
        }
    ],
    "cw_1": [
        {
            q: "人が生まれながらにもっている、人間らしく生きるためにおかしてはならない権利を何というか？",
            choices: ["基本的人権","生存権","参政権","社会権"],
            a: "基本的人権",
            comment: "基本的人権には、自由権・平等権・社会権・参政権などがあります。"
        },
        {
            q: "1215年にイギリスで発布された、国王の権力を制限した文書はどれか？",
            choices: ["マグナカルタ（大憲章）","権利の章典","独立宣言","人権宣言"],
            a: "マグナカルタ（大憲章）",
            comment: "国王が議会の同意なしに税金をかけないことなどを認めさせました。"
        },
        {
            q: "1919年にドイツで制定され、世界で初めて社会権を保障した憲法はどれか？",
            choices: ["ワイマール憲法","大日本帝国憲法","アメリカ合衆国憲法","フランス人権宣言"],
            a: "ワイマール憲法",
            comment: "「ドイツ共和国憲法」が正式名称で、社会権が初めて保障されました。"
        },
        {
            q: "1689年に名誉革命ののち、イギリスで発布され、議会の同意なしに税金をかけないことなどを定めた法律は何か？",
            choices: ["権利の章典","マグナカルタ","人権宣言","独立宣言"],
            a: "権利の章典",
            comment: "名誉革命による議会の要求を国王が承認する形で発布されました。"
        },
        {
            q: "『統治二論（市民政府二論）』を著し、権力が不当に行使されたときの「抵抗権」を主張したイギリスの思想家は誰か？",
            choices: ["ロック","ルソー","モンテスキュー","リンカーン"],
            a: "ロック",
            comment: "ロックはすべての人間に生命や自由、財産に対する権利があるとし、名誉革命を正当化しました。"
        },
        {
            q: "『法の精神』を著し、国家の権力への集中を防ぐために「三権分立」を主張したフランスの思想家は誰か？",
            choices: ["モンテスキュー","ルソー","ロック","リンカーン"],
            a: "モンテスキュー",
            comment: "国家権力を「立法権」「行政権」「司法権」の3つに分け、互いに抑制し合うことが必要だと説きました。"
        },
        {
            q: "『社会契約論』を著し、人民主権を唱えてフランス革命に大きな影響を与えたフランスの思想家は誰か？",
            choices: ["ルソー","モンテスキュー","ロック","カント"],
            a: "ルソー",
            comment: "政治は一部の個人の意見ではなく、人民全体の意見にもとづいて行われるべきであると主張しました。"
        },
        {
            q: "人権を保障するために、憲法によって政治権力を制限するという考え方やしくみを何というか？",
            choices: ["立憲主義","民主主義","国民主権","三権分立"],
            a: "立憲主義",
            comment: "権力を制限する憲法にもとづく政治のあり方を「立憲政治」といいます。"
        },
        {
            q: "1946年11月3日に公布され、翌年5月3日に施行された日本の「最高法規」は何か？",
            choices: ["日本国憲法","大日本帝国憲法","教育基本法","民法"],
            a: "日本国憲法",
            comment: "日本のすべての法のなかで最も基本となる、最高位のきまりです。"
        },
        {
            q: "日本国憲法の三大原則のうち、「国民主権」「基本的人権の尊重」ともう一つは何か？",
            choices: ["平和主義","象徴天皇制","三権分立","地方自治"],
            a: "平和主義",
            comment: "日本国憲法は、「国民主権」「基本的人権の尊重」「平和主義」を三大原則としています。"
        },
        {
            q: "主に日本国籍を持たずに日本に住んでいる人に対し、地方選挙などでの投票を認めるべきだという考えに関わる権利を何というか。",
            choices: ["外国人参政権","社会権","生存権","基本的人権"],
            a: "外国人参政権",
            comment: "最高裁は「憲法はこの権利を禁止していない」としていますが、現在日本では法律として認められていません。"
        },
        {
            q: "人が互いに個人として自分と相手を大切にし、ともに助け合って生きていく社会を何というか。",
            choices: ["共生社会","男女共同参画社会","大衆社会","情報社会"],
            a: "共生社会",
            comment: "年齢や性別、国籍、障がいの有無などに関わらず、すべての人が個人として尊重される社会を目指すものです。"
        },
        {
            q: "障がい者や高齢者などが安全・快適に暮らせるように、生活する上で障害となるものを取り除こうという考え方を何というか。",
            choices: ["バリアフリー","ユニバーサルデザイン","ノーマライゼーション","インクルージョン"],
            a: "バリアフリー",
            comment: "段差にスロープをつけたり、点字ブロックを設置したりすることなどがこれにあたります。"
        },
        {
            q: "年齢や障がいの有無にかかわらず、すべての人が使いやすいようにあらかじめつくられたデザインを何というか。",
            choices: ["ユニバーサルデザイン","バリアフリー","ノーマライゼーション","サステナビリティ"],
            a: "ユニバーサルデザイン",
            comment: "シャンプーの容器のギザギザや、多目的トイレなど、誰もが最初から使いやすいように設計されたものです。"
        },
        {
            q: "障がいがある人もない人も、高齢者も子どもも、それぞれを分けるのではなく、ともに地域の中で暮らしていこうという考え方を何というか。",
            choices: ["ノーマライゼーション","バリアフリー","ユニバーサルデザイン","共生社会"],
            a: "ノーマライゼーション",
            comment: "現代の社会福祉において、最も基本的な理念の一つとされています。"
        },
        {
            q: "職場などで起きる、相手の意思に反した性的な嫌がらせを何というか。",
            choices: ["セクシュアル・ハラスメント（セクハラ）","パワー・ハラスメント","マタニティ・ハラスメント","モラル・ハラスメント"],
            a: "セクシュアル・ハラスメント（セクハラ）",
            comment: "労働者の尊厳を傷つけ、職場の秩序を乱す行為として、男女雇用機会均等法などで防ぐことが義務付けられています。"
        },
        {
            q: "男性と女性が互いに人権を尊重し合い、責任を分け合って対等な立場で能力をいかすことができる社会を何というか。",
            choices: ["男女共同参画社会","共生社会","福祉社会","持続可能な社会"],
            a: "男女共同参画社会",
            comment: "1999年にはこれを推進するための男女共同参画社会基本法が施行されました。"
        },
        {
            q: "すべての人が生きていく上で、自由にものを考え、意見を述べ、行動することを保障する権利を何というか。",
            choices: ["自由権","平等権","社会権","参政権"],
            a: "自由権",
            comment: "日本国憲法では「身体の自由」「精神の自由」「経済活動の自由」の3つに大きく分けられます。"
        },
        {
            q: "正当な理由なしに、人間の身体が他者から拘束されない権利のことを何というか。",
            choices: ["身体の自由","精神の自由","思想および良心の自由","基本的人権"],
            a: "身体の自由",
            comment: "奴隷的拘束からの自由や、拷問・残虐な刑罰の禁止などがこれに含まれます。"
        },
        {
            q: "被疑者や被告人に認められている、取り調べや裁判で自分に不利益となることを話さなくてもよい権利を何というか。",
            choices: ["黙秘権","肖像権","プライバシーの権利","知る権利"],
            a: "黙秘権",
            comment: "日本国憲法第38条で、「何人も、自己に不利益な供述を強要されない」と定められています。"
        },
        {
            q: "個人が自由にものを考え、思想や信仰をもち、自分の意見を述べる自由を指す、自由権の1つは何か。",
            choices: ["精神の自由","身体の自由","経済活動の自由","表現の自由"],
            a: "精神の自由",
            comment: "思想・良心の自由、信教の自由、集会・結社・表現の自由、学問の自由などがあります。"
        },
        {
            q: "「精神の自由」のうち、個人がどのような宗教を信じるのも信じないのも自由とするものを何というか。",
            choices: ["信教の自由","思想および良心の自由","表現の自由","集会の自由"],
            a: "信教の自由",
            comment: "これに関連して、国が特定の宗教に特権を与えたり政治的権力を持たせたりしない「政教分離の原則」があります。"
        },
        {
            q: "「精神の自由」のうち、人々が目的を持って集まったり団体をつくったりする自由や、考えを外部に発表する自由をまとめて何というか。",
            choices: ["集会・結社・表現の自由","思想および良心の自由","信教の自由","学問の自由"],
            a: "集会・結社・表現の自由",
            comment: "マスメディアによる報道の自由も含まれます。検閲は憲法で禁止されています。"
        },
        {
            q: "「精神の自由」のうち、学問を研究したり、研究の成果を発表したり、教えたりする自由を何というか。",
            choices: ["学問の自由","表現の自由","教育の自由","思想の自由"],
            a: "学問の自由",
            comment: "思想や研究の内容が国家などによって制限・干渉されないことを保障しています。"
        },
        {
            q: "個人が住む場所を決めたり、職業を選んだり、自分の財産を利用したりする自由をまとめて何というか。",
            choices: ["経済活動の自由","身体の自由","精神の自由","所有権の絶対"],
            a: "経済活動の自由",
            comment: "居住・移転および職業選択の自由や、財産権の保障などの権利が含まれます。"
        },
        {
            q: "人権は最大限保障されるが、他人の人権と衝突する場合などに、社会全体の利益のために人権が制限される原理を何というか。",
            choices: ["公共の福祉","権利の濫用禁止","立憲主義","公益の優先"],
            a: "公共の福祉",
            comment: "日本国憲法第12条などで、国民は人権を「公共の福祉のためにこれを利用する責任を負ふ」と定められています。"
        },
        {
            q: "日本国憲法第25条の「すべて国民は、健康で文化的な最低限度の生活を営む権利を有する」という条文で保障されている権利は何か。",
            choices: ["生存権","教育を受ける権利","勤労の権利","幸福追求権"],
            a: "生存権",
            comment: "社会権の中でも最も基本となる権利で、これに基づき生活保護法などが制定されています。"
        },
        {
            q: "国や年金を運営している組織に保険料を支払い、受け取る資格を満たした場合に支給されるお金のしくみを何というか。",
            choices: ["年金","医療保険","雇用保険","生活保護"],
            a: "年金",
            comment: "国民全員が加入して共通で支給される基礎年金などがあり、老後や障がいを負った際などに支給されます。"
        },
        {
            q: "すべての国民が能力に応じてひとしく教育を受けることができる社会権の一つを何というか。",
            choices: ["教育を受ける権利","学習権","生存権","勤労の権利"],
            a: "教育を受ける権利",
            comment: "この権利を保障するため、義務教育は無償とされています。"
        },
        {
            q: "社会権の一つで、働く意思と能力のある人が、国に対して労働の機会を求めることができる権利を何というか。",
            choices: ["勤労の権利","労働基本権","生存権","職業選択の自由"],
            a: "勤労の権利",
            comment: "日本国憲法第27条で規定されており、勤労は権利であると同時に国民の義務でもあります。"
        },
        {
            q: "労働三権とも呼ばれる、労働者の権利を守るために定められている権利の総称を何というか。",
            choices: ["労働基本権","勤労の権利","社会権","生存権"],
            a: "労働基本権",
            comment: "団結権、団体交渉権、団体行動権（争議権）の3つからなります。"
        },
        {
            q: "労働基本権の1つで、労働者が団結して行動できるように労働組合をつくる権利を何というか。",
            choices: ["団結権","団体交渉権","団体行動権（争議権）","結社の自由"],
            a: "団結権",
            comment: "一人ひとりの力では弱い労働者が、使用者（会社など）と対等な立場で交渉するための土台となる権利です。"
        },
        {
            q: "国民が政治に参加する権利を総称して何というか。",
            choices: ["参政権","社会権","自由権","請求権"],
            a: "参政権",
            comment: "選挙権や被選挙権のほか、最高裁判所裁判官の国民審査権や、憲法改正の国民投票権なども含まれます。"
        },
        {
            q: "同じ親の細胞などからつくられた個体を何というか。",
            choices: ["クローン","iPS細胞","ES細胞","ゲノム"],
            a: "クローン",
            comment: "日本では、人間へのクローン技術の適用を禁止する法律が施行されています。"
        },
        {
            q: "卵子と精子を体内でなく体外で受精させることを何というか。",
            choices: ["体外受精","人工授精","クローン","遺伝子操作"],
            a: "体外受精",
            comment: "不妊治療などの一環として用いられることがあります。"
        },
        {
            q: "HIV（ヒト免疫不全ウイルス）への感染によって、体の免疫力が低下する病気を何というか。",
            choices: ["エイズ（後天性免疫不全症候群）","結核","マラリア","コレラ"],
            a: "エイズ（後天性免疫不全症候群）",
            comment: "HIVに感染してもすぐに発症するわけではなく、現在は発症を遅らせる治療が行われています。"
        },
        {
            q: "自分の意思で自分の技術や時間を提供して、社会的な人助けをする人やその行為を何というか。",
            choices: ["ボランティア","NPO","NGO","クラウドファンディング"],
            a: "ボランティア",
            comment: "基本的に無報酬で行われ、阪神・淡路大震災や東日本大震災などをきっかけに重要性が再認識されました。"
        },
        {
            q: "社会集団のなかでさまざまな意見が出て対立や争いが発生したときに、それを調整するために話し合いをしたり、ルールを決めたりして解決していくことを何というか。",
            choices: ["政治","経済","裁判","行政"],
            a: "政治",
            comment: "国や地方公共団体が行う政治がその代表例です。"
        },
        {
            q: "国民の意思にしたがって政治を行うという考え方を何というか。",
            choices: ["民主主義","全体主義","専制政治","貴族政"],
            a: "民主主義",
            comment: "紀元前のアテネで行われた市民参加の政治が起源とされ、近現代の市民革命を経て成立しました。"
        },
        {
            q: "全員で直接話し合って政治的な決定を行う仕組みを何というか。",
            choices: ["直接民主制","間接民主制（代議制）","多数決","共和制"],
            a: "直接民主制",
            comment: "古代ギリシャのアテネなどで行われていましたが、国家規模が大きくなると実施が難しくなります。"
        },
        {
            q: "選挙で選ばれた代表者が話し合って政治を決定する仕組みを何というか。",
            choices: ["間接民主制（代議制）","直接民主制","大統領制","議院内閣制"],
            a: "間接民主制（代議制）",
            comment: "現代の多くの民主主義国家で採用されている方式です。"
        },
        {
            q: "話し合っても意見が一致しない場合に、数が多いほうの意見にしたがうという民主主義の基本原理を何というか。",
            choices: ["多数決の原理","少数意見の尊重","全会一致","独裁"],
            a: "多数決の原理",
            comment: "多数決においても、決定の過程で少数意見の発表や批判を自由に行えることが重要です。"
        },
        {
            q: "多数決の原理において、決定する前に少数の意見も十分に聞き入れるべきであるという考え方を何というか。",
            choices: ["少数意見の尊重","多数決の原理","直接民主制","立憲主義"],
            a: "少数意見の尊重",
            comment: "これがなされていないと、多数派による独断的な支配になってしまうおそれがあります。"
        },
        {
            q: "国政について話し合うための代表者を選ぶ、18歳以上のすべての国民に認められている権利は何か。",
            choices: ["選挙権","被選挙権","請願権","国民審査権"],
            a: "選挙権",
            comment: "国会議員、地方公共団体の長（都道府県知事や市区町村長）、地方議会議員を選出する権利です。"
        },
        {
            q: "選挙に立候補して、国会議員や地方公共団体の長、地方議会議員になることができる権利は何か。",
            choices: ["被選挙権","選挙権","請願権","国民審査権"],
            a: "被選挙権",
            comment: "参議院議員と都道府県知事は満30歳以上、衆議院議員や市区町村長などは満25歳以上と定められています。"
        },
        {
            q: "最高裁判所の裁判官が適任かどうかを、衆議院議員総選挙の際に国民が投票で審査する権利は何か。",
            choices: ["国民審査権","国民投票権","裁判を受ける権利","罷免権"],
            a: "国民審査権",
            comment: "やめさせる（罷免する）べきとする票が過半数を占めた場合、その裁判官は罷免されます。"
        },
        {
            q: "国や地方公共団体に対して、政治上の要望を平穏に行うことができる権利は何か。",
            choices: ["請願権","請求権","知る権利","参政権"],
            a: "請願権",
            comment: "人権侵害の救済や、法律の制定・改廃などを求めることができます。"
        },
        {
            q: "国会が憲法改正の発議を行った際に、国民がそれに対して賛成か反対かの意思を示す権利は何か。",
            choices: ["国民投票権","国民審査権","選挙権","請願権"],
            a: "国民投票権",
            comment: "満18歳以上の日本国民に認められており、有効投票の過半数の賛成があれば改正が承認されます。"
        },
        {
            q: "人権が侵害されたときに、国などに救済を求めることができる権利の総称は何か。",
            choices: ["請求権","参政権","社会権","自由権"],
            a: "請求権",
            comment: "国家賠償請求権、刑事補償請求権、裁判を受ける権利などがあります。"
        },
        {
            q: "公務員の不法行為などによって損害を受けた場合に、国や地方公共団体に賠償を求めることができる権利は何か。",
            choices: ["国家賠償請求権","刑事補償請求権","裁判を受ける権利","請願権"],
            a: "国家賠償請求権",
            comment: "請求権の一つで、国民の権利を守るための重要な権利です。"
        },
        {
            q: "刑事裁判で無罪が確定した場合などに、国に対して金銭による補償を求めることができる権利は何か。",
            choices: ["刑事補償請求権","国家賠償請求権","裁判を受ける権利","生存権"],
            a: "刑事補償請求権",
            comment: "不当な身柄拘束などによる損害を回復するための制度です。"
        },
        {
            q: "国や地方公共団体が持っている情報の公開を求めることができる権利は何か。",
            choices: ["知る権利","プライバシーの権利","肖像権","自己決定権"],
            a: "知る権利",
            comment: "これを保障するため、1999年には情報公開法が制定されました。"
        },
        {
            q: "私的な生活を他人に勝手に公開されない権利や、自分の情報をコントロールする権利を何というか。",
            choices: ["プライバシーの権利","知る権利","肖像権","自己決定権"],
            a: "プライバシーの権利",
            comment: "情報のデジタル化が進む中で重要視されており、個人情報保護法などで守られています。"
        },
        {
            q: "個人のプライバシーを守るため、企業や行政機関などに個人情報の適切な取り扱いを義務付けた法律は何か。",
            choices: ["個人情報保護法","情報公開法","プロバイダ責任制限法","マイナンバー法"],
            a: "個人情報保護法",
            comment: "個人情報が外部に漏れたり、悪用されたりすることを防ぐための法律です。"
        },
        {
            q: "自分の顔や姿を無断で撮影されたり、公表されたり、商品に利用されたりしない権利は何か。",
            choices: ["肖像権","プライバシーの権利","著作権","知る権利"],
            a: "肖像権",
            comment: "プライバシーの権利の一部として、また有名人の場合は財産的な価値を持つ権利としても問題になります。"
        },
        {
            q: "職場において、地位の優位性を背景に、業務の適正な範囲を超えて精神的・身体的苦痛を与える行為を何というか。",
            choices: ["パワーハラスメント（パワハラ）","セクシュアル・ハラスメント（セクハラ）","モラル・ハラスメント（モラハラ）","マタニティ・ハラスメント（マタハラ）"],
            a: "パワーハラスメント（パワハラ）",
            comment: "暴力や暴言、無理な仕事の強要、仕事を与えないことなどが含まれます。"
        },
        {
            q: "思想や感情を創作的に表現した文芸、学術、美術、音楽などの作品の作者に与えられる権利を何というか。",
            choices: ["著作権","肖像権","特許権","商標権"],
            a: "著作権",
            comment: "知的財産権の一つで、日本では原則として著作者の死後70年まで保護されます。"
        },
        {
            q: "個人が自分の生き方や生活について、他から干渉されずに自由に決定する権利は何か。",
            choices: ["自己決定権","知る権利","プライバシーの権利","幸福追求権"],
            a: "自己決定権",
            comment: "医療現場でのインフォームド・コンセントや、臓器提供の意思表示などもこの権利に基づいています。"
        },
        {
            q: "「生命、自由及び幸福追求に対する国民の権利」として、日本国憲法第13条で保障されており、新しい人権の根拠ともなる権利は何か。",
            choices: ["幸福追求権","自己決定権","生存権","基本的人権の尊重"],
            a: "幸福追求権",
            comment: "プライバシーの権利や環境権など、憲法に明記されていない新しい人権を主張する際の拠り所となります。"
        },
        {
            q: "生活する上で、きれいで快適な環境を求める権利を何というか。",
            choices: ["環境権","生存権","日照権","幸福追求権"],
            a: "環境権",
            comment: "公害などの問題が深刻化した高度経済成長期以降に、生存権や幸福追求権を根拠に主張されるようになりました。"
        },
        {
            q: "大規模な開発を行う前に、それが周囲の環境にどのような影響を及ぼすかを事前に調査・評価し、対策を立てる制度を何というか。",
            choices: ["環境アセスメント（環境影響評価）","環境基本計画","ゼロエミッション","公害対策基本法"],
            a: "環境アセスメント（環境影響評価）",
            comment: "環境破壊を未然に防ぐため、一部の大規模な事業には法律でこの実施が義務付けられています。"
        },
        {
            q: "1948年に国連総会で採択された、すべての人類が生まれながらにして持つ基本的人権と自由の保障を世界に向けて示した宣言を何というか。",
            choices: ["世界人権宣言","国際人権規約","児童の権利条約","人種差別撤廃条約"],
            a: "世界人権宣言",
            comment: "法的な拘束力はありませんが、各国の人権保障の目標として大きな影響を与えています。"
        },
        {
            q: "世界人権宣言の内容を条約化し、批准した国に法的な拘束力を持たせた国際条約を何というか。",
            choices: ["国際人権規約","世界人権宣言","児童の権利条約","ジェノサイド条約"],
            a: "国際人権規約",
            comment: "1966年に国連総会で採択され、日本は1979年に批准しました（一部留保あり）。"
        },
        {
            q: "不当に逮捕・拘禁されている人々の釈放や死刑の廃止などを訴え、1977年にノーベル平和賞を受賞した国際的な人権団体（NGO）は何か。",
            choices: ["アムネスティ・インターナショナル","国境なき医師団","赤十字国際委員会","セーブ・ザ・チルドレン"],
            a: "アムネスティ・インターナショナル",
            comment: "世界中の人権侵害状況を調査し、改善を求める活動を行っています。"
        },
        {
            q: "生き物の親から子に遺伝子がどのように受けつがれているかを調べることで、遺伝によって起こる病気などを解明することを何というか。",
            choices: ["遺伝子診断","遺伝子組み換え","ゲノム編集","クローン技術"],
            a: "遺伝子診断",
            comment: "病気の予防や治療に役立つ一方で、差別やプライバシーの侵害につながる懸念も指摘されています。"
        },
        {
            q: "ある生物の細胞に別の生物の遺伝子を組み込む技術によって、新しい性質を持たせて作られた作物を何というか。",
            choices: ["遺伝子組み換え食品","オーガニック食品","特定保健用食品","培養肉"],
            a: "遺伝子組み換え食品",
            comment: "害虫に強い、特定の除草剤で枯れないなどの特徴を持たせることができます。日本では表示が義務付けられています。"
        },
        {
            q: "同じ親の細胞などからつくられた個体を何というか。",
            choices: ["クローン","iPS細胞","ES細胞","ゲノム"],
            a: "クローン",
            comment: "日本では、人間へのクローン技術の適用を禁止する法律が施行されています。"
        },
        {
            q: "卵子と精子を体内でなく体外で受精させることを何というか。",
            choices: ["体外受精","人工授精","クローン","遺伝子操作"],
            a: "体外受精",
            comment: "不妊治療などの一環として用いられることがあります。"
        },
        {
            q: "HIV（ヒト免疫不全ウイルス）への感染によって、体の免疫力が低下する病気を何というか。",
            choices: ["エイズ（後天性免疫不全症候群）","結核","マラリア","コレラ"],
            a: "エイズ（後天性免疫不全症候群）",
            comment: "HIVに感染してもすぐに発症するわけではなく、現在は発症を遅らせる治療が行われています。"
        },
        {
            q: "自分の意思で自分の技術や時間を提供して、社会的な人助けをする人やその行為を何というか。",
            choices: ["ボランティア","NPO","NGO","クラウドファンディング"],
            a: "ボランティア",
            comment: "基本的に無報酬で行われ、阪神・淡路大震災や東日本大震災などをきっかけに重要性が再認識されました。"
        },
        {
            q: "社会集団のなかでさまざまな意見が出て対立や争いが発生したときに、それを調整するために話し合いをしたり、ルールを決めたりして解決していくことを何というか。",
            choices: ["政治","経済","裁判","行政"],
            a: "政治",
            comment: "国や地方公共団体が行う政治がその代表例です。"
        },
        {
            q: "国民の意思にしたがって政治を行うという考え方を何というか。",
            choices: ["民主主義","全体主義","専制政治","貴族政"],
            a: "民主主義",
            comment: "紀元前のアテネで行われた市民参加の政治が起源とされ、近現代の市民革命を経て成立しました。"
        },
        {
            q: "全員で直接話し合って政治的な決定を行う仕組みを何というか。",
            choices: ["直接民主制","間接民主制（代議制）","多数決","共和制"],
            a: "直接民主制",
            comment: "古代ギリシャのアテネなどで行われていましたが、国家規模が大きくなると実施が難しくなります。"
        },
        {
            q: "選挙で選ばれた代表者が話し合って政治を決定する仕組みを何というか。",
            choices: ["間接民主制（代議制）","直接民主制","大統領制","議院内閣制"],
            a: "間接民主制（代議制）",
            comment: "現代の多くの民主主義国家で採用されている方式です。"
        },
        {
            q: "話し合っても意見が一致しない場合に、数が多いほうの意見にしたがうという民主主義の基本原理を何というか。",
            choices: ["多数決の原理","少数意見の尊重","全会一致","独裁"],
            a: "多数決の原理",
            comment: "多数決においても、決定の過程で少数意見の発表や批判を自由に行えることが重要です。"
        },
        {
            q: "多数決の原理において、決定する前に少数の意見も十分に聞き入れるべきであるという考え方を何というか。",
            choices: ["少数意見の尊重","多数決の原理","直接民主制","立憲主義"],
            a: "少数意見の尊重",
            comment: "これがなされていないと、多数派による独断的な支配になってしまうおそれがあります。"
        },
        {
            q: "国政について話し合うための代表者を選ぶ、18歳以上のすべての国民に認められている権利は何か。",
            choices: ["選挙権","被選挙権","請願権","国民審査権"],
            a: "選挙権",
            comment: "国会議員、地方公共団体の長（都道府県知事や市区町村長）、地方議会議員を選出する権利です。"
        },
        {
            q: "選挙に立候補して、国会議員や地方公共団体の長、地方議会議員になることができる権利は何か。",
            choices: ["被選挙権","選挙権","請願権","国民審査権"],
            a: "被選挙権",
            comment: "参議院議員と都道府県知事は満30歳以上、衆議院議員や市区町村長などは満25歳以上と定められています。"
        },
        {
            q: "最高裁判所の裁判官が適任かどうかを、衆議院議員総選挙の際に国民が投票で審査する権利は何か。",
            choices: ["国民審査権","国民投票権","裁判を受ける権利","罷免権"],
            a: "国民審査権",
            comment: "やめさせる（罷免する）べきとする票が過半数を占めた場合、その裁判官は罷免されます。"
        },
        {
            q: "国や地方公共団体に対して、政治上の要望を平穏に行うことができる権利は何か。",
            choices: ["請願権","請求権","知る権利","参政権"],
            a: "請願権",
            comment: "人権侵害の救済や、法律の制定・改廃などを求めることができます。"
        },
        {
            q: "国会が憲法改正の発議を行った際に、国民がそれに対して賛成か反対かの意思を示す権利は何か。",
            choices: ["国民投票権","国民審査権","選挙権","請願権"],
            a: "国民投票権",
            comment: "満18歳以上の日本国民に認められており、有効投票の過半数の賛成があれば改正が承認されます。"
        },
        {
            q: "人権が侵害されたときに、国などに救済を求めることができる権利の総称は何か。",
            choices: ["請求権","参政権","社会権","自由権"],
            a: "請求権",
            comment: "国家賠償請求権、刑事補償請求権、裁判を受ける権利などがあります。"
        },
        {
            q: "公務員の不法行為などによって損害を受けた場合に、国や地方公共団体に賠償を求めることができる権利は何か。",
            choices: ["国家賠償請求権","刑事補償請求権","裁判を受ける権利","請願権"],
            a: "国家賠償請求権",
            comment: "請求権の一つで、国民の権利を守るための重要な権利です。"
        },
        {
            q: "刑事裁判で無罪が確定した場合などに、国に対して金銭による補償を求めることができる権利は何か。",
            choices: ["刑事補償請求権","国家賠償請求権","裁判を受ける権利","生存権"],
            a: "刑事補償請求権",
            comment: "不当な身柄拘束などによる損害を回復するための制度です。"
        },
        {
            q: "国や地方公共団体が持っている情報の公開を求めることができる権利は何か。",
            choices: ["知る権利","プライバシーの権利","肖像権","自己決定権"],
            a: "知る権利",
            comment: "これを保障するため、1999年には情報公開法が制定されました。"
        },
        {
            q: "私的な生活を他人に勝手に公開されない権利や、自分の情報をコントロールする権利を何というか。",
            choices: ["プライバシーの権利","知る権利","肖像権","自己決定権"],
            a: "プライバシーの権利",
            comment: "情報のデジタル化が進む中で重要視されており、個人情報保護法などで守られています。"
        },
        {
            q: "個人のプライバシーを守るため、企業や行政機関などに個人情報の適切な取り扱いを義務付けた法律は何か。",
            choices: ["個人情報保護法","情報公開法","プロバイダ責任制限法","マイナンバー法"],
            a: "個人情報保護法",
            comment: "個人情報が外部に漏れたり、悪用されたりすることを防ぐための法律です。"
        },
        {
            q: "自分の顔や姿を無断で撮影されたり、公表されたり、商品に利用されたりしない権利は何か。",
            choices: ["肖像権","プライバシーの権利","著作権","知る権利"],
            a: "肖像権",
            comment: "プライバシーの権利の一部として、また有名人の場合は財産的な価値を持つ権利としても問題になります。"
        },
        {
            q: "職場において、地位の優位性を背景に、業務の適正な範囲を超えて精神的・身体的苦痛を与える行為を何というか。",
            choices: ["パワーハラスメント（パワハラ）","セクシュアル・ハラスメント（セクハラ）","モラル・ハラスメント（モラハラ）","マタニティ・ハラスメント（マタハラ）"],
            a: "パワーハラスメント（パワハラ）",
            comment: "暴力や暴言、無理な仕事の強要、仕事を与えないことなどが含まれます。"
        },
        {
            q: "思想や感情を創作的に表現した文芸、学術、美術、音楽などの作品の作者に与えられる権利を何というか。",
            choices: ["著作権","肖像権","特許権","商標権"],
            a: "著作権",
            comment: "知的財産権の一つで、日本では原則として著作者の死後70年まで保護されます。"
        },
        {
            q: "個人が自分の生き方や生活について、他から干渉されずに自由に決定する権利は何か。",
            choices: ["自己決定権","知る権利","プライバシーの権利","幸福追求権"],
            a: "自己決定権",
            comment: "医療現場でのインフォームド・コンセントや、臓器提供の意思表示などもこの権利に基づいています。"
        },
        {
            q: "「生命、自由及び幸福追求に対する国民の権利」として、日本国憲法第13条で保障されており、新しい人権の根拠ともなる権利は何か。",
            choices: ["幸福追求権","自己決定権","生存権","基本的人権の尊重"],
            a: "幸福追求権",
            comment: "プライバシーの権利や環境権など、憲法に明記されていない新しい人権を主張する際の拠り所となります。"
        },
        {
            q: "生活する上で、きれいで快適な環境を求める権利を何というか。",
            choices: ["環境権","生存権","日照権","幸福追求権"],
            a: "環境権",
            comment: "公害などの問題が深刻化した高度経済成長期以降に、生存権や幸福追求権を根拠に主張されるようになりました。"
        },
        {
            q: "大規模な開発を行う前に、それが周囲の環境にどのような影響を及ぼすかを事前に調査・評価し、対策を立てる制度を何というか。",
            choices: ["環境アセスメント（環境影響評価）","環境基本計画","ゼロエミッション","公害対策基本法"],
            a: "環境アセスメント（環境影響評価）",
            comment: "環境破壊を未然に防ぐため、一部の大規模な事業には法律でこの実施が義務付けられています。"
        },
        {
            q: "1948年に国連総会で採択された、すべての人類が生まれながらにして持つ基本的人権と自由の保障を世界に向けて示した宣言を何というか。",
            choices: ["世界人権宣言","国際人権規約","児童の権利条約","人種差別撤廃条約"],
            a: "世界人権宣言",
            comment: "法的な拘束力はありませんが、各国の人権保障の目標として大きな影響を与えています。"
        },
        {
            q: "世界人権宣言の内容を条約化し、批准した国に法的な拘束力を持たせた国際条約を何というか。",
            choices: ["国際人権規約","世界人権宣言","児童の権利条約","ジェノサイド条約"],
            a: "国際人権規約",
            comment: "1966年に国連総会で採択され、日本は1979年に批准しました（一部留保あり）。"
        },
        {
            q: "不当に逮捕・拘禁されている人々の釈放や死刑の廃止などを訴え、1977年にノーベル平和賞を受賞した国際的な人権団体（NGO）は何か。",
            choices: ["アムネスティ・インターナショナル","国境なき医師団","赤十字国際委員会","セーブ・ザ・チルドレン"],
            a: "アムネスティ・インターナショナル",
            comment: "世界中の人権侵害状況を調査し、改善を求める活動を行っています。"
        },
        {
            q: "生き物の親から子に遺伝子がどのように受けつがれているかを調べることで、遺伝によって起こる病気などを解明することを何というか。",
            choices: ["遺伝子診断","遺伝子組み換え","ゲノム編集","クローン技術"],
            a: "遺伝子診断",
            comment: "病気の予防や治療に役立つ一方で、差別やプライバシーの侵害につながる懸念も指摘されています。"
        },
        {
            q: "ある生物の細胞に別の生物の遺伝子を組み込む技術によって、新しい性質を持たせて作られた作物を何というか。",
            choices: ["遺伝子組み換え食品","オーガニック食品","特定保健用食品","培養肉"],
            a: "遺伝子組み換え食品",
            comment: "害虫に強い、特定の除草剤で枯れないなどの特徴を持たせることができます。日本では表示が義務付けられています。"
        }
    ]
};

module.exports = window.QUIZ_DATA;

console.log(Object.keys(QUIZ_DATA));

let civicsCount = 0;
let civicsWithImages = 0;

for (const key in QUIZ_DATA) {
    if (key.startsWith('civics')) {
        const questions = QUIZ_DATA[key];
        civicsCount += questions.length;
        questions.forEach(q => {
            if (q.comment && q.comment.includes('assets/images/civics/')) {
                civicsWithImages++;
            }
        });
    }
}
console.log('Civics Questions Total:', civicsCount);
console.log('Civics Questions with images:', civicsWithImages);
