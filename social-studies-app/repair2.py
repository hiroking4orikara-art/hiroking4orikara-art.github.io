import codecs
import re

filename = 'script.js'
content = codecs.open(filename, 'r', 'utf-8').read()

pattern = re.compile(r'\s*this\.switchScreen\(\'home-screen\'\);\s*\}\s*else\s*\{\s*this\.showBranchSelectScreen\(subject\);\s*\}\s*\}\s*else\s*if\s*\(active\s*===\s*\'sub-category-screen\'\)\s*\{')

replacement = """
                this.switchScreen('home-screen');
            } else {
                this.showBranchSelectScreen(subject);
            }
        } else if (active === 'sub-category-screen') {
            this.switchScreen('home-screen');
            this.state.currentSubject = null;
        }
    },

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
"""

if pattern.search(content):
    # Check if we already have switchScreen right here to avoid double insert
    if "switchScreen(screenId) {" not in content:
        content = pattern.sub(replacement, content, count=1)
        
        # Ticker speed
        if "const speedPxPerSec = 80;" in content:
            content = content.replace("const speedPxPerSec = 80;", "const speedPxPerSec = 200;")

        with codecs.open(filename, 'w', 'utf-8') as f:
            f.write(content)
        print("Successfully replaced using regex!")
    else:
        print("switchScreen is already present! Aborting insertion to prevent duplicates.")
else:
    print("Could not find the target pattern using regex!")
