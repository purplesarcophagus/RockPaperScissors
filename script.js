/*
randomly returns one rock, paper, or scissors
    if Math.random <= .33 return rock
    else if Math.random > .33 && Math.random <= .66 return paper 
    else return scissors 
*/
function getComputerChoice() {
    let randy = Math.random();
    if (randy <= .33) {
        return "Rock";
    } else if (randy > .33 && randy <= .66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
