// data.js
// 各教科のカテゴリと単元構成


window.UNIT_DATA = {
    // 音楽 (Music)
    'music': [
        {
            id: 'music_vocal',
            title: '歌唱曲',
            units: [
                { id: 'm_vocal_1', title: "歌唱曲① (We'll Find The Way・光の道・主人は冷たい土の中に)" },
                { id: 'm_vocal_2', title: '歌唱曲② (浜辺の歌・赤とんぼ・夢の世界を)' },
                { id: 'm_vocal_3', title: '歌唱曲③ (君をのせて・明日を向いて・生命が羽ばたくとき)' },
                { id: 'm_vocal_4', title: '歌唱曲④ (翼をください・夏の思い出・明日を信じて)' },
                { id: 'm_vocal_5', title: '歌唱曲⑤ (荒城の月・サンタ ルチア・花)' },
                { id: 'm_vocal_6', title: '歌唱曲⑥ (花の街・早春賦・帰れソレントへ)' },
                { id: 'm_vocal_7', title: '歌唱曲⑦ (ふるさと・unlimited・マイ バラード)' },
                { id: 'm_vocal_8', title: '歌唱曲⑧ (大切なもの・時の旅人・蛍の光)' },
                { id: 'm_vocal_9', title: '歌唱曲⑨ (HEIWAの鐘・椰子の実・旅立ちの日に)' },
                { id: 'm_vocal_10', title: '歌唱曲⑩ (大地讃頌・仰げば尊し)' }
            ]
        },
        {
            id: 'music_appreciation',
            title: '鑑賞曲',
            units: [
                { id: 'm_app_1', title: '鑑賞曲① (春・魔王・雅楽「越天楽」)' },
                { id: 'm_app_2', title: '鑑賞曲② (箏曲「六段の調」・フーガト短調・交響曲第5番 ハ短調)' },
                { id: 'm_app_3', title: '鑑賞曲③ (アイーダ・歌舞伎「勧進帳」・文楽「新版歌祭文」)' },
                { id: 'm_app_4', title: '鑑賞曲④ (ブルタバ・ボレロ・尺八曲「巣鶴鈴慕」)' },
                { id: 'm_app_5', title: '鑑賞曲⑤ (能「敦盛」・日本の民謡・ポピュラー音楽)' }
            ]
        },
        {
            id: 'music_theory',
            title: '音楽の知識 ☆最重要',
            units: [
                { id: 'm_plus_1', title: '記号やリズム' },
                { id: 'm_plus_2', title: 'コードや調' },
                { id: 'm_plus_3', title: '用語や楽器' },
                { id: 'm_plus_4', title: '指揮のしかた・歌いかた' },
                { id: 'm_plus_5', title: '音楽史' },
                { id: 'm_plus_6', title: 'リコーダー' }
            ]
        }
    ],

            // 技術・家庭 (tech_home)
    'tech_home': [
        {
            id: 'tech_home_all',
            title: '技術・家庭科',
            units: [
                { id: 'th_merged_1', title: '第1章 材料と加工の技術' },
                { id: 'th_merged_2', title: '第2章 生物育成の技術' },
                { id: 'th_merged_3', title: '第3章 エネルギー変換の技術' },
                { id: 'th_merged_4', title: '第4章 情報の技術' },
                { id: 'th_merged_5', title: '第5章 家族と幼児' },
                { id: 'th_merged_6', title: '第6章 地域と高齢者との関わり' },
                { id: 'th_merged_7', title: '第7章 食生活' },
                { id: 'th_merged_8', title: '第8章 衣生活' },
                { id: 'th_merged_9', title: '第9章 住生活' },
                { id: 'th_merged_10', title: '第10章 消費生活' }
            ]
        }
    ],

    // 保健体育 (pe_health)
    'pe_health': [
        {
            id: 'pe_health_1',
            title: '保健編',
            units: [
                { id: 'ph_h1', title: '第1章 健康な生活と病気の予防(1)' },
                { id: 'ph_h2', title: '第2章 心身の発達と心の健康' },
                { id: 'ph_h3', title: '第3章 健康な生活と病気の予防(2)' },
                { id: 'ph_h4', title: '第4章 傷害の防止' },
                { id: 'ph_h5', title: '第5章 健康な生活と病気の予防(3)' },
                { id: 'ph_h6', title: '第6章 健康と環境' }
            ]
        },
        {
            id: 'pe_theory',
            title: '体育理論編',
            units: [
                { id: 'ph_t1', title: '第1章 スポーツの多様性' },
                { id: 'ph_t2', title: '第2章 スポーツの効果と学び方' },
                { id: 'ph_t3', title: '第3章 文化としてのスポーツ' }
            ]
        },
        {
            id: 'pe_practical',
            title: '実技編',
            units: [
                { id: 'ph_p1', title: '第1章 新体力テスト・集団行動・体操' },
                { id: 'ph_p2', title: '第2章 器械運動・陸上競技・水泳' },
                { id: 'ph_volleyball', title: '球技 (バレーボール)' },
                { id: 'ph_basketball', title: '球技 (バスケットボール)' },
                { id: 'ph_handball', title: '球技 (ハンドボール)' },
                { id: 'ph_softball', title: '球技 (ソフトボール)' },
                { id: 'ph_soccer', title: '球技 (サッカー)' },
                { id: 'ph_table_tennis', title: '球技 (卓球)' },
                { id: 'ph_soft_tennis', title: '球技 (ソフトテニス)' },
                { id: 'ph_badminton', title: '球技 (バドミントン)' },
                { id: 'ph_martial', title: '武道' },
                { id: 'ph_dance', title: 'ダンス' }
            ]
        }
    ],

    // 美術 (art)
    'art': [
        {
            id: 'art_1',
            title: '第1章 知識と技法',
            units: [
                { id: 'art_1_1', title: '単元1 色の三属性（要素）と三原色' },
                { id: 'art_1_2', title: '単元2 配色・構図・デッサン' },
                { id: 'art_1_3', title: '単元3 表現とレタリング' }
            ]
        },
        {
            id: 'art_2',
            title: '第2章 表現',
            units: [
                { id: 'art_2_1', title: '単元4 様々な図画 (水彩、人物・風景など)' },
                { id: 'art_2_2', title: '単元5 版画や彫刻 (版画、彫刻、工芸)' },
                { id: 'art_2_3', title: '単元6 実用されるデザイン (ポスター、映像など)' }
            ]
        },
        {
            id: 'art_3',
            title: '第3章 美術史',
            units: [
                { id: 'art_history_jp', title: '単元7 日本美術史' },
                { id: 'art_history_west', title: '単元8 西洋美術史' }
            ]
        }
    ]
};

// 単元IDから動画ファイルへのマッピング
window.VIDEO_MAP = {
    // 音楽 (Music)
    // 歌唱曲
    'm_vocal_1': 'https://youtu.be/aqJqASwfDGo',
    'm_vocal_2': 'https://youtu.be/IK-S6NJUacM',
    'm_vocal_3': 'https://youtu.be/VAvKw48tWXg',
    'm_vocal_4': 'https://youtu.be/c1-GPeO-D5I',
    'm_vocal_5': 'https://youtu.be/2hR0MXQ85kU',
    'm_vocal_6': 'https://youtu.be/51gRnjuQLVM',
    'm_vocal_7': 'https://youtu.be/d1nFljiFiGY',
    'm_vocal_8': 'https://youtu.be/mWWS2S6_hSw',
    'm_vocal_9': 'https://youtu.be/FJnU1JEz5kk',
    'm_vocal_10': 'https://youtu.be/F24RsTbvnWQ',
    // 鑑賞曲
    'm_app_1': 'https://youtu.be/4zBAuSjSYBQ',
    'm_app_2': 'https://youtu.be/3k8U9adYSZs',
    'm_app_3': 'https://youtu.be/nOZUos252yE',
    'm_app_4': 'https://youtu.be/uViZ_RCsy34',
    'm_app_5': 'https://youtu.be/iWWUrnnPIkc',
    // 音楽 of knowledge
    'm_plus_1': 'https://youtu.be/w015YnnXZb8',
    'm_plus_2': 'https://youtu.be/V4ZAhRy6E2A',
    'm_plus_3': 'https://youtu.be/0y7LeL7NuYk',
    'm_plus_4': 'https://youtu.be/jw7vPgzd-lQ',
    'm_plus_5': 'https://youtu.be/HchQ4X-PtOc',
    'm_plus_6': 'https://youtu.be/R6TSgjjBUiI',

    // 技術・家庭 (Tech/Home)
    'th_merged_1': 'https://youtu.be/0rLTDk8fPkk',
    'th_merged_2': 'https://youtu.be/oLd5WAdzEvw',
    'th_merged_3': 'https://youtu.be/c5LT7Q1E8L4',
    'th_merged_4': 'https://youtu.be/iuDfuZZ7bh8',
    'th_merged_5': 'https://youtu.be/gMHZJ6KgZLs',
    'th_merged_6': 'https://youtube.com/shorts/W6JPSr6o4xg',
    'th_merged_7': 'https://youtu.be/WRwAxAB4xDI',
    'th_merged_8': 'https://youtu.be/TFMqiBfPoA4',
    'th_merged_9': 'https://youtube.com/shorts/fXDm2wBx92Y',
    'th_merged_10': 'https://youtu.be/Lxc2M4dbF_Y',

    // 保健体育 (Health/PE)
    // 保健編１
    'ph_h1': 'https://youtube.com/shorts/8lekresif8w',
    'ph_h2': 'https://youtube.com/shorts/8lekresif8w',
    'ph_h3': 'https://youtube.com/shorts/8lekresif8w',
    // 保健編２
    'ph_h4': 'https://youtube.com/shorts/a0KbmiJsbps',
    'ph_h5': 'https://youtube.com/shorts/a0KbmiJsbps',
    'ph_h6': 'https://youtube.com/shorts/a0KbmiJsbps',
    // 体育理論
    'ph_t1': 'https://youtube.com/shorts/3qUXdYa1e9M',
    'ph_t2': 'https://youtube.com/shorts/3qUXdYa1e9M',
    'ph_t3': 'https://youtube.com/shorts/3qUXdYa1e9M',
    // 実技①
    'ph_p1': 'https://youtube.com/shorts/H4fmaf458_s',
    'ph_p2': 'https://youtube.com/shorts/H4fmaf458_s',
    // 実技②
    'ph_volleyball': 'https://youtube.com/shorts/1d20v48uyOg',
    'ph_basketball': 'https://youtube.com/shorts/1d20v48uyOg',
    // 実技③
    'ph_handball': 'https://youtube.com/shorts/ffm3ciEXqQ0',
    'ph_softball': 'https://youtube.com/shorts/ffm3ciEXqQ0',
    'ph_soccer': 'https://youtube.com/shorts/ffm3ciEXqQ0',
    // 実技④
    'ph_table_tennis': 'https://youtube.com/shorts/8VLP6Ex3V5k',
    'ph_soft_tennis': 'https://youtube.com/shorts/8VLP6Ex3V5k',
    'ph_badminton': 'https://youtube.com/shorts/8VLP6Ex3V5k',
    // 実技⑤
    'ph_martial': 'https://youtube.com/shorts/UE-Ae6IxnjI',
    'ph_dance': 'https://youtube.com/shorts/UE-Ae6IxnjI',

    // 美術 (Art)
    'art_1_1': 'https://youtube.com/shorts/ESTSpyp60wA',
    'art_1_2': 'https://youtube.com/shorts/XkLqKfld9Ww',
    'art_1_3': 'https://youtube.com/shorts/YRqvTwpDsbU',
    'art_2_1': 'https://youtube.com/shorts/r9-7uDlyf0k',
    'art_2_2': 'https://youtube.com/shorts/tirwjmzo2DM',
    'art_2_3': 'https://youtube.com/shorts/jOdLaRsXdo8',
    'art_history_jp': 'https://youtu.be/_Yu0zecd478',
    'art_history_west': 'https://youtube.com/shorts/3N0XXXHM5Bg'
};

// 単元IDからweb教科書ファイルへのマッピング
window.TEXTBOOK_MAP = {
    // 音楽 (Music)
    'm_vocal_1': 'm_vocal_1.html',
    'm_vocal_2': 'm_vocal_2.html',
    'm_vocal_3': 'm_vocal_3.html',
    'm_vocal_4': 'm_vocal_4.html',
    'm_vocal_5': 'm_vocal_5.html',
    'm_vocal_6': 'm_vocal_6.html',
    'm_vocal_7': 'm_vocal_7.html',
    'm_vocal_8': 'm_vocal_8.html',
    'm_vocal_9': 'm_vocal_9.html',
    'm_vocal_10': 'm_vocal_10.html',
    'm_app_1': 'm_app_1.html',
    'm_app_2': 'm_app_2.html',
    'm_app_3': 'm_app_3.html',
    'm_app_4': 'm_app_4.html',
    'm_app_5': 'm_app_5.html',
    'm_plus_1': 'm_theory_1.html',
    'm_plus_2': 'm_theory_2.html',
    'm_plus_3': 'm_theory_3.html',
    'm_plus_4': 'm_theory_4.html',
    'm_plus_5': 'm_theory_5.html',
    'm_plus_6': 'm_theory_6.html',

    // 技術・家庭 (tech_home)
    'th_merged_1': 'th_merged_1.html',
    'th_merged_2': 'th_merged_2.html',
    'th_merged_3': 'th_merged_3.html',
    'th_merged_4': 'th_merged_4.html',
    'th_merged_5': 'th_merged_5.html',
    'th_merged_6': 'th_merged_6.html',
    'th_merged_7': 'th_merged_7.html',
    'th_merged_8': 'th_merged_8.html',
    'th_merged_9': 'th_merged_9.html',
    'th_merged_10': 'th_merged_10.html',

    // 保健体育 (pe_health)
    'ph_h1': 'ph_h1.html',
    'ph_h2': 'ph_h2.html',
    'ph_h3': 'ph_h3.html',
    'ph_h4': 'ph_h4.html',
    'ph_h5': 'ph_h5.html',
    'ph_h6': 'ph_h6.html',
    'ph_t1': 'ph_t1.html',
    'ph_t2': 'ph_t2.html',
    'ph_t3': 'ph_t3.html',
    'ph_p1': 'ph_p1.html',
    'ph_p2': 'ph_p2.html',
    'ph_volleyball': 'ph_volleyball.html',
    'ph_basketball': 'ph_basketball.html',
    'ph_handball': 'ph_handball.html',
    'ph_softball': 'ph_softball.html',
    'ph_soccer': 'ph_soccer.html',
    'ph_table_tennis': 'ph_table_tennis.html',
    'ph_soft_tennis': 'ph_soft_tennis.html',
    'ph_badminton': 'ph_badminton.html',
    'ph_martial': 'ph_martial.html',
    'ph_dance': 'ph_dance.html',

    // 美術 (art)
    'art_1_1': 'art_1_1.html',
    'art_1_2': 'art_1_2.html',
    'art_1_3': 'art_1_3.html',
    'art_2_1': 'art_2_1.html',
    'art_2_2': 'art_2_2.html',
    'art_2_3': 'art_2_3.html',
    'art_history_jp': 'art_history_jp.html',
    'art_history_west': 'art_history_west.html'
};