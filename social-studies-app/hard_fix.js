const fs = require('fs');

try {
    let content = fs.readFileSync('script.js', 'utf8');

    // The broken part starts at:
    // 281:     },
    // 282: 
    // 283:                 this.switchScreen('home-screen');
    // 284:             } else {
    // 285:                 this.showBranchSelectScreen(subject);
    // 286:             }
    // 287:         } else if (active === 'sub-category-screen') {
    // 288: 
    // 289:     quizState: {

    const anchorRegex = /    \},\s*                this\.switchScreen\('home-screen'\);\s*            \} else \{\s*                this\.showBranchSelectScreen\(subject\);\s*            \}\s*        \} else if \(active === 'sub-category-screen'\) \{\s*    quizState: {/;
    
    // Replacement code:
    const replacement = \`    },

    openMaterial(url) {
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
    },

    quizState: {\`;

    if (anchorRegex.test(content)) {
        content = content.replace(anchorRegex, replacement);
        fs.writeFileSync('script.js', content);
        console.log("Restored perfectly using regex!");
    } else {
        // Fallback: replace using split
        let parts = content.split("    },\n\n                this.switchScreen('home-screen');");
        if (parts.length > 1) {
            let endParts = parts[1].split("        } else if (active === 'sub-category-screen') {\n\n    quizState: {");
            if (endParts.length > 1) {
                content = parts[0] + replacement.replace("    quizState: {", "") + "    quizState: {" + endParts[1];
                fs.writeFileSync('script.js', content);
                console.log("Restored perfectly using split!");
            } else {
                // Try simpler split
                let p1 = content.split("                this.switchScreen('home-screen');");
                let p2 = p1[1].split("    quizState: {");
                
                content = p1[0] + "\n" + replacement + "\n" + p2[1];
                fs.writeFileSync('script.js', content);
                console.log("Restored perfectly using brutal split!");
            }
        }
    }

    // Now let's fix the ticker bug.
    // The ticker speed being slow
    // The speed is calculated as:
    // const speedPxPerSec = 80;
    // const duration = oneCycleDistance / speedPxPerSec;
    // Maybe we should just increase speedPxPerSec or use a fixed 20s.
    content = fs.readFileSync('script.js', 'utf8');
    if (content.includes('const speedPxPerSec = 80;')) {
        content = content.replace('const speedPxPerSec = 80;', 'const speedPxPerSec = 300;');
        fs.writeFileSync('script.js', content);
        console.log("Sped up the ticker!");
    }

} catch (e) {
    console.error("Error:", e);
}
