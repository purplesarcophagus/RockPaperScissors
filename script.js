let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randy = Math.random();
    let choice;
    if (randy <= .33) {
        choice = "Rock";
    } else if (randy > .33 && randy <= .66) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("What is your choice Human? ");
    return choice;
}

function playRound(computerChoice, humanChoice){
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();

    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("Human wins!");
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("Human wins!");
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("Human wins!");
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer wins!");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer wins!");
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer wins!");
        computerScore++;
    }
}

function playGame() {
    for (let i=0;i<4;i++){
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (computerScore > humanScore){
        console.log("YOU LOSE SILLY HUMAN!!!");
    } else {
        console.log("As you should human, good job.");
    }
}

playGame();
