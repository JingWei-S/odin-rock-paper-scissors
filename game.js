// get user and computer score
let userScoreText = document.querySelector("#user");
let userScore = 0;
// computer score
let computerScoreText = document.querySelector("#computer");
let computerScore = 0;

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
}


// this function determines which party wins
function playRound (e) {
    // convert the playSelection
    playerSelection = convertSelection(e.target.id);
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        showResult('It is a tie!');
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')) {
            showResult('The player won!');
            userScore += 1;
        } else {
            showResult('The computer won!');
            computerScore += 1;
        }
    updateScore();

}

// get the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener("click", playRound))

// get the result section
const result = document.querySelector('.result');

// create DOM UI manipulation to show the result for rounds
function showResult(display) {
    const testText = document.createElement('p');
    testText.textContent = display;
    result.appendChild(testText);
}

// this function shows the score
function updateScore() {
    userScoreText.textContent = userScore.toString();
    computerScoreText.textContent = computerScore.toString();
    let winner;
    if (userScore === 5) {
        winner = 'User has won!!!';
        callWinner(winner);
    } else if (computerScore === 5) {
        winner = 'The computer has won!!!';
        callWinner(winner);
    }
    
}

function callWinner(winner) {
    const callWinner = document.createElement('h2');
    callWinner.style.color = 'blue';
    callWinner.textContent = winner;
    result.appendChild(callWinner);
}

// convert the selection
function convertSelection (playerSelection) {
    return playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
}