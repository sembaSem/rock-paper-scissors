//Scorekeeping
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let playerSelection = '';

const container = document.querySelector('#container');
const compChoice = document.createElement('div');
const result = document.createElement('div');
const runningScore = document.createElement('div');
const announce = document.createElement('div');

const player = document.getElementById('userScore');
const computer = document.getElementById('computerScore')
const displayUser = document.createElement('div');
const displayComputer = document.createElement('div');

    
function game() {

    //Computer randomly returns either Rock, Paper or Scissors
    let computerSelection = Math.ceil(Math.random() * 3);
    if (computerSelection == 1) {
        computerSelection = 'rock';
    } else if (computerSelection == 2) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }

    compChoice.textContent = 'The computer chose ' + computerSelection;
    container.appendChild(compChoice);

    //Play a single round of Rock Paper Scissors
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            result.textContent = 'A tie! Throw again!';
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore++;
            result.textContent = 'You lose! Paper beats Rock';
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScore++;
            result.textContent = 'You win! Rock beats Scissors';
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScore++;
            result.textContent = 'You win! Paper beats Rock';
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore++;
            result.textContent = 'You lose! Scissors beats Paper';
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore++;
            result.textContent = 'You win! Scissors beats Paper';
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore++;
            result.textContent = 'You lose! Rock beats Scissors';
        } else {
            result.textContent = 'Sorry, could you repeat that?';
        } 
    }
    container.appendChild(result);
    playRound(playerSelection, computerSelection);

    // runningScore.textContent = `Your score is ${playerScore}. The computer's score is ${computerScore}.`;
    // container.appendChild(runningScore);

    displayUser.textContent = `${playerScore}`;
    player.appendChild(displayUser);

    displayComputer.textContent = `${computerScore}`;
    computer.appendChild(displayComputer);
}

//Announce the winner
function announceWinner() {
    if (playerScore == 3) {
        announce.textContent = 'You won the game!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 3) {
        announce.textContent = 'You lost the game!';
        playerScore = 0;
        computerScore = 0;
    } else {
        announce.textContent = 'Another round...';
    }
    container.appendChild(announce);
}

const rock = document.getElementById('rock');
rock.onclick = function() {
    playerSelection = 'rock';
    game();
    announceWinner();
}

const paper = document.getElementById('paper');
paper.onclick = function() {
    playerSelection = 'paper';
    game();
    announceWinner();
}

const scissors = document.getElementById('scissors');
scissors.onclick = function() {
    playerSelection = 'scissors';
    game();
    announceWinner();
}