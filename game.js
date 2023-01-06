console.log("Hello World!");

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * 3);
    console.log(randIndex);
    return choices[randIndex];
}

console.log(getComputerChoice());

// this function determines which party wins
function playRound (playerSelection, computerSelection) {
    // convert the playSelection
    playerSelection = convertSelection(playerSelection);
    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')) {
            return 'The player won!';
        } else {
            return 'The computer won!';
        }

}

// test whether the playRound fucntion works
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please put in your paper/rock/scissors choice: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(playerSelection + ' ' + computerSelection);
        console.log(result);
    }
}

game();
// convert the selection
function convertSelection (playerSelection) {
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
}