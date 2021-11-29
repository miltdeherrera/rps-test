// This function returns the computer's choice of rock, paper, or scissors.

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

// This function helps computerPlay() by returning a random int.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// This function compares choices and returns a string saying who won.
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
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        if (computerScore == 5) {
            return ("The computer wins with a score of 5!");

        }
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    else {
        miltScore++;
        miltScoreDisplay.textContent = miltScore;
        if (miltScore == 5) {
            return ("Milt wins with a score of 5!");
        }
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }



}


// allows one to start a 5-round game in the console.
function game() {
    const NUM_ROUNDS = 5;

    for (i = 0; i < NUM_ROUNDS; i++) {
        console.log(playRound(prompt("Rock/Paper/Scissors?"),
            computerPlay()));
    }


}

const resultsWindow = document.querySelector('#results-window');
let miltScore = 0;
let computerScore = 0;
const miltScoreDisplay = document.querySelector('#milt-score');
const computerScoreDisplay = document.querySelector('#computer-score');

let buttonList = document.querySelectorAll('button');


// this section controls the buttons.
const playRock = document.querySelector('#rock');
playRock.addEventListener('click', () => {
    resultsWindow.textContent = playRound("Rock", computerPlay());
});

const playPaper = document.querySelector('#paper');
playPaper.addEventListener('click', () => {
    resultsWindow.textContent = playRound("Paper", computerPlay());
});

const playScissors = document.querySelector('#scissors');
playScissors.addEventListener('click', () => {
    resultsWindow.textContent = playRound("Scissors", computerPlay());
});