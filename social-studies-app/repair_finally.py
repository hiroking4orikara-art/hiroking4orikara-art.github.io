import codecs
import re

filename = 'script.js'
content = codecs.open(filename, 'r', 'utf-8').read()

pattern = re.compile(r'const msg = messages\[Math\.floor\(Math\.random\(\) \* messages\.length\)\];[\s\S]*?this\.state\.currentChapter = null;\s*const branches = UNIT_DATA\[subject\];')

replacement = """const msg = messages[Math.floor(Math.random() * messages.length)];
        const el = document.getElementById('info-ticker-text');
        if(el) {
            // Remove whitespace between spans for precise 25% calculation
            const span = `<span>${msg}</span>`;
            el.innerHTML = span + span + span + span;

            // Calculate duration for constant speed (e.g., 50 pixels per second)
            // We need to wait for render or approximate width
            // Approx width: char count * font size * factor + padding
            // Better: use requestAnimationFrame to measure after render
            requestAnimationFrame(() => {
                const totalWidth = el.scrollWidth;
                const oneCycleDistance = totalWidth / 4; // Distance to move (25%)
                
                // Desired Speed: 80 pixels per second (adjust as needed)
                const speedPxPerSec = 80; 
                const duration = oneCycleDistance / speedPxPerSec;
                
                el.style.animationDuration = `${duration}s`;
            });
        }
    },

    selectSubject(subject) {
        this.state.currentSubject = subject;
        this.state.currentBranch = null;
        this.state.currentChapter = null;
        
        const branches = UNIT_DATA[subject];"""

if pattern.search(content):
    content = pattern.sub(replacement, content, count=1)
    with codecs.open(filename, 'w', 'utf-8') as f:
        f.write(content)
    print("Successfully replaced using regex!")
else:
    print("Could not find the target pattern using regex!")
