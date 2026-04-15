const fs = require('fs');

try {
  const fileContent = fs.readFileSync('quiz_data.js', 'utf8');
  // extract quizData
  let quizData;
  const match = fileContent.match(/const\s+quizData\s*=\s*({[\s\S]*});?\s*$/);
  if (match) {
    eval('quizData = ' + match[1]);
  } else {
    // maybe it exports it or something
    const sandbox = {};
    eval(fileContent + '\n; sandbox.quizData = quizData;');
    quizData = sandbox.quizData;
  }

  let mismatches = [];
  let totalMismatched = 0;

  for (const subjectId in quizData) {
    const subject = quizData[subjectId];
    for (const chapter of subject.chapters) {
      for (const unit of chapter.units) {
        if (unit.details) {
          const actualCount = unit.details.length;
          const displayCount = unit.count || 0; // if count property exists
          // wait, is it unit.count or something else? Let's check.
          if (displayCount !== undefined && displayCount !== actualCount) {
             mismatches.push(`[${subject.title}] ${chapter.title} - ${unit.title}: Display=${displayCount}, Actual=${actualCount}`);
             totalMismatched++;
          }
        }
      }
    }
  }

  if (mismatches.length > 0) {
    console.log("Mismatches found:");
    mismatches.forEach(m => console.log(m));
  } else {
    console.log("All counts are correctly matching the actual data length!");
  }
} catch (e) {
  console.error("Error reading or parsing quiz_data.js:", e.message);
}
