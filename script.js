/*
randomly returns one rock, paper, or scissors
    if Math.random <= .33 return rock
    else if Math.random > .33 && Math.random <= .66 return paper 
    else return scissors 
*/
let computerScore = 0;
let humanScore = 0;

let cpuChoice = getComputerChoice();
let humChoice = getHumanChoice();

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


