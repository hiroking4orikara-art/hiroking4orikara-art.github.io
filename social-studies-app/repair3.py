import codecs
import re

filename = 'script.js'
content = codecs.open(filename, 'r', 'utf-8').read()

# Pattern to find from 'goBack() {' up to 'quizState: {'
pattern = re.compile(r'goBack\(\)\s*\{[\s\S]*?quizState:\s*\{')

replacement = """goBack() {
        const activeScreen = document.querySelector('.screen.active');
        if (!activeScreen) return;
        const active = activeScreen.id;
        
        if (active === 'unit-list-screen') {
            const subject = this.state.currentSubject;
            if (UNIT_DATA[subject] && UNIT_DATA[subject].length === 1) {
                this.switchScreen('home-screen');
            } else {
                this.showBranchSelectScreen(subject);
            }
        } else if (active === 'sub-category-screen') {
            this.switchScreen('home-screen');
            this.state.currentSubject = null;
        }
    },

    playVideo(unitId) {
        const videoLinks = {
            'c_1_1': 'https://youtube.com/shorts/dDZDnKUlEJY',
            'c_1_2': 'https://youtube.com/shorts/1S5ao04FTgw',
            'c_2_1': 'https://youtube.com/shorts/11sqImBlLKM',
            'c_2_2': 'https://youtube.com/shorts/68HaBq1Wi4I',
            'c_3_1': 'https://youtube.com/shorts/5uubwz4ukRA',
            'c_3_2': 'https://youtube.com/shorts/uYDqqhr9eng',
            'c_4_1': 'https://youtube.com/shorts/sHT9uNcMBr4',
            'c_4_2': 'https://youtube.com/shorts/PO28ZLqdCoM',
            'c_5_1': 'https://youtube.com/shorts/70KWBgficH8',
            'c_5_2': 'https://youtube.com/shorts/O6anPROrRQA'
        };

        if (videoLinks[unitId]) {
            window.open(videoLinks[unitId], '_blank');
        } else {
            alert("この単元の動画は現在準備中です。");
        }
    },

    closeVideo() {
    },

    quizState: {"""

if pattern.search(content):
    content = pattern.sub(replacement, content, count=1)
    with codecs.open(filename, 'w', 'utf-8') as f:
        f.write(content)
    print("Successfully replaced using regex!")
else:
    print("Could not find the target pattern using regex!")
