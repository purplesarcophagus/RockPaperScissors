/*
randomly returns one rock, paper, or scissors
    if Math.random <= .33 return rock
    else if Math.random > .33 && Math.random <= .66 return paper 
    else return scissors 
*/
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

console.log("Computer chooses "+getComputerChoice()+"!");
console.log("Human chooses "+getHumanChoice()+"!");
