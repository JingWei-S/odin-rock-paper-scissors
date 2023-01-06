console.log("Hello World!");

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * 3);
    console.log(randIndex);
    return choices[randIndex];
}

console.log(getComputerChoice());