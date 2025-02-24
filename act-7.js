class Player {
    constructor(name, team) {
        this.name = name;
        this.team = team;
        this.score = 0;
    }

    shoot(attempts = 5) {
        this.score = Array.from({ length: attempts }, () => Math.random() > 0.5).filter(Boolean).length;
    }
}

const athletes = [
    new Player("Trae", "Hawks"),
    new Player("Brunson", "Knicks"),
    new Player("Curry", "Warriors"),
    new Player("Giannis", "Bucks"),
    new Player("Luka", "Lakers"),
    new Player("Westbrook", "Nuggets"),
    new Player("Harden", "Clippers")
];

function RankingsOfAthletes(athletes) {
    athletes.sort((a, b) => b.score - a.score);
    console.log("🏆 Rankings:");
    athletes.forEach((p, i) => console.log(`${i + 1}. ${p.name} - ${p.score} points`));
}

function Champion(athletes) {
    let highestScore = athletes[0].score;
    let finalists = athletes.filter(p => p.score === highestScore);

    while (finalists.length > 1) {
        console.log(`🔥 Tiebreaker for: ${finalists.map(p => p.name).join(", ")}`);
        finalists.forEach(p => p.shoot());

        highestScore = Math.max(...finalists.map(p => p.score));
        finalists = finalists.filter(p => p.score === highestScore);
    }

    console.log(`🏆 The Champion is ${finalists[0].name} with ${finalists[0].score} points!`);
}

function startGame() {
    console.log("🏀 The Shooting Competition Starts Now!\n");
    athletes.forEach(player => player.shoot());

    RankingsOfAthletes(athletes);
    Champion(athletes);
}

startGame();
