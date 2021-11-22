function computerPlay() {
    let computerChoice = getRandomInt(3);

    if (computerChoice == 0) {
        return "Rock";
    }

    else if (computerChoice == 1) {
        return "Paper";
    }

    else return "Scissors";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {
    let playerProxy = playerSelection.toLowerCase();
    let computerProxy = computerSelection.toLowerCase();

    let p = playerProxy[0];
    let c = computerProxy[0];


    if (p == c) {
        return "Tie game!";
    }

    else if ((p == 'r' && c == 'p') ||
        (p == 'p' && c == 's') ||
        (p == 's' && c == 'r')) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    else {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }



}

function game() {
    const NUM_ROUNDS = 5;

    for (i = 0; i < NUM_ROUNDS; i++) {
        console.log(playRound(prompt("Rock/Paper/Scissors?"),
            computerPlay()));
    }
}