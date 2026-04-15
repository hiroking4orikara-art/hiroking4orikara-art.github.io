const fs = require('fs');

try {
    // Read the backup just in case
    // wait, we don't have a backup. We just have the current state of script.js.
    let scriptContent = fs.readFileSync('script.js', 'utf8');

    // First, let's restore it to exactly what it was before by restoring goBack, playVideo, closeVideo
    // Let's check what it looks like now around quizState.
    
    // We want to reconstruct it exactly.
    // The previous state was:
    /*
        goBack() {
        const active = document.querySelector('.screen.active').id;
        
        if (active === 'unit-list-screen') {
            const subject = this.state.currentSubject;
            if (UNIT_DATA[subject].length === 1) {
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
        // Placeholder for future video implementation
    },

    quizState: {
    */

    // Since it might be corrupted, let's use a regex to replace everything from `goBack() { ... }` up to `quizState: {`
    
    // Pattern to catch the start of goBack() up to quizState: {
    const regex = /goBack\(\)\s*\{[\s\S]*?quizState:\s*\{/;
    
    const replacement = \`goBack() {
        const active = document.querySelector('.screen.active').id;
        
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
        // Placeholder for future video implementation
    },

    quizState: {\`;

    if (regex.test(scriptContent)) {
        scriptContent = scriptContent.replace(regex, replacement);
        fs.writeFileSync('script.js', scriptContent);
        console.log("Successfully fixed script.js syntax errors and updated video links!");
    } else {
        console.error("Could not find the target code block to replace!");
    }

} catch (e) {
    console.error("Error:", e);
}
