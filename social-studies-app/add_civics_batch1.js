const fs = require('fs');

const newQuestions = [
    {
        q: "『法の精神』を著し、国家の権力への集中を防ぐために「三権分立」を主張したフランスの思想家は誰か？",
        choices: ["モンテスキュー", "ルソー", "ロック", "リンカーン"],
        a: "モンテスキュー",
        comment: "国家権力を「立法権」「行政権」「司法権」の3つに分け、互いに抑制し合うことが必要だと説きました。"
    },
    {
        q: "『社会契約論』を著し、人民主権を唱えてフランス革命に大きな影響を与えたフランスの思想家は誰か？",
        choices: ["ルソー", "モンテスキュー", "ロック", "カント"],
        a: "ルソー",
        comment: "政治は一部の個人の意見ではなく、人民全体の意見にもとづいて行われるべきであると主張しました。"
    },
    {
        q: "人権を保障するために、憲法によって政治権力を制限するという考え方やしくみを何というか？",
        choices: ["立憲主義", "民主主義", "国民主権", "三権分立"],
        a: "立憲主義",
        comment: "権力を制限する憲法にもとづく政治のあり方を「立憲政治」といいます。"
    },
    {
        q: "1946年11月3日に公布され、翌年5月3日に施行された日本の「最高法規」は何か？",
        choices: ["日本国憲法", "大日本帝国憲法", "教育基本法", "民法"],
        a: "日本国憲法",
        comment: "日本のすべての法のなかで最も基本となる、最高位のきまりです。"
    },
    {
        q: "日本国憲法の三大原則のうち、「国民主権」「基本的人権の尊重」ともう一つは何か？",
        choices: ["平和主義", "象徴天皇制", "三権分立", "地方自治"],
        a: "平和主義",
        comment: "日本国憲法は、「国民主権」「基本的人権の尊重」「平和主義」を三大原則としています。"
    }
];

const targetFile = 'civics_extracted.json';
let data = [];
if (fs.existsSync(targetFile)) {
    data = JSON.parse(fs.readFileSync(targetFile, 'utf8'));
}

data.push(...newQuestions);
fs.writeFileSync(targetFile, JSON.stringify(data, null, 2), 'utf8');
console.log(`Added ${newQuestions.length} questions. Total: ${data.length}`);
