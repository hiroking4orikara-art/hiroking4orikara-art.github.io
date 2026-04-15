import codecs

filename = 'script.js'
content = codecs.open(filename, 'r', 'utf-8').read()

target = """                this.switchScreen('home-screen');
            } else {
                this.showBranchSelectScreen(subject);
            }
        } else if (active === 'sub-category-screen') {"""

replacement = """    openMaterial(url) {
        window.open(url, '_blank');
    },

    switchScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) targetScreen.classList.add('active');

        const footer = document.getElementById('app-footer');
        if (footer) {
            if (screenId === 'quiz-screen') {
                footer.classList.add('hidden');
            } else {
                footer.classList.remove('hidden');
            }
        }

        if (screenId === 'home-screen') {
            document.getElementById('page-title').innerText = "中学社会 これ一本！";
            document.getElementById('back-button').style.display = 'none';
        } else {
            document.getElementById('back-button').style.display = 'block';
        }
    },

    goBack() {
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
    }"""

if target in content:
    content = content.replace(target, replacement)
    
    # Also fix ticker speed
    if "const speedPxPerSec = 80;" in content:
        content = content.replace("const speedPxPerSec = 80;", "const speedPxPerSec = 300;")
        
    with codecs.open(filename, 'w', 'utf-8') as f:
        f.write(content)
    print("Restore completely successful!")
else:
    print("Could not find Target in file.")
    # let's try a regex approach or split
    parts = content.split("this.switchScreen('home-screen');\\n            } else {")
    if len(parts) > 1:
        print("Found partial match, attempting force replace...")
