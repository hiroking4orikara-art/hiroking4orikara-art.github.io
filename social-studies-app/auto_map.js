import fs from 'fs';
import path from 'path';

// Read JSONs
let questions = JSON.parse(fs.readFileSync('missing_questions.json', 'utf8'));
let unusedImages = JSON.parse(fs.readFileSync('unused_images.json', 'utf8'));

// First, map images by topic
const topicImages = {};
for (const img of unusedImages) {
    // try to find topic prefix like h_ancient_1_
    const match = img.match(/^(h_[a-z]+_\d+)_/);
    if (match) {
        const topic = match[1];
        if (!topicImages[topic]) topicImages[topic] = [];
        topicImages[topic].push(img);
    } else {
        // Just in case there's no number?
        const match2 = img.match(/^(h_[a-z]+)_/);
        if (match2) {
            const topic = match2[1];
            if (!topicImages[topic]) topicImages[topic] = [];
            topicImages[topic].push(img);
        }
    }
}

// Map them
let mapping = {}; // question idx string -> image path
let stillMissing = 0;

questions.forEach(q => {
    // If it's a duplicate currently, we need to decide if we keep it or replace it.
    // Let's assume if it has a current_img but it doesn't match the topic prefix, we should definitely replace it.
    // Let's just try to find an unused image for this specific topic.
    const topic = q.topic;
    
    // We can use a simple keyword match if possible
    // Let's extract keywords from the Japanese question/answer... This is hard in JS.
    // BUT maybe the user already had some mapping scripts?
    
    // For now, let's just dump the questions grouped by topic to see how many there are per topic.
});

console.log("Images available per topic:");
for(let t in topicImages) {
    console.log(`  ${t}: ${topicImages[t].length} images`);
}

let qByTopic = {};
questions.forEach(q => {
    if (!qByTopic[q.topic]) qByTopic[q.topic] = [];
    qByTopic[q.topic].push(q);
});

console.log("\nMissing questions per topic:");
for(let t in qByTopic) {
    console.log(`  ${t}: ${qByTopic[t].length} questions`);
}
