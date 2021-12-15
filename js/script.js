// List of computers plays
const PLAYS = ['rock', 'paper', 'scissors'];

// Randomly select one play
function computerPlay(){
    return PLAYS[Math.floor(Math.random() * PLAYS.length)];
}

// Return the results of the game
function gameLogic(playerSelection, computerSelection){
    switch(true){
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
        case (playerSelection === 'paper' && computerSelection === 'rock'):
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
            return 1;       
        case (playerSelection === 'rock' && computerSelection === 'paper'):
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
            return -1;       
        case (playerSelection === computerSelection):
            return 0;          
    }
}

// Keep the individual scores of each player
let myScore = 0;
let cpuScore = 0;
function scoreTracker(scoreNum){
    if (scoreNum == 1){
        myScore += 1;
    } else if (scoreNum == -1){
        cpuScore += 1;
    }
}

// Returns the outcome of the game
function scoreText(scoreNum, playerSelection, computerSelection){
    if (scoreNum == 1){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (scoreNum == -1){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return 'The Game is a Tie!';
    }
}

// Add's the game result text to the DOM
function displayOutcomeText(scoreNum, playerSelection, computerSelection){
    const gameResult = document.querySelector('.results-text');
    const p = document.createElement('p');
    p.classList.add('p');
    p.textContent = scoreText(scoreNum, playerSelection, computerSelection);
    gameResult.appendChild(p);
}

// Modifies the game score in the DOM
function displayOutcomeScore(){
    const score = document.querySelector('.score p');
    score.textContent = `Score: ${myScore} - ${cpuScore}`;
}

// Once game is finished, creates a new button in the DOM
function displayNewGame(){
    const newGame = document.querySelector('.new-game');
    const newButton = document.createElement('button');
    newButton.innerHTML = "Play Again!";
    newGame.appendChild(newButton);
}

// Displays game result after the game is finished
function displayResult(result, color='#000000'){
    const gameResult = document.querySelector('.win-lose');
    gameResult.style.color = color;
    gameResult.textContent = `${result}`;
}

// Get all the images in img container div
const mybuttons = document.querySelectorAll('.img-buttons img');

// Add the event listener to each image
mybuttons.forEach(mybuttons => {
    mybuttons.addEventListener('click', playGame);
});

// Remove ability to continue game after the game is finished
function finish(){
    mybuttons.forEach(mybuttons => {
        mybuttons.removeEventListener('click', playGame);
    });
}


// Play's the game
function playGame(){
    let myPlay = this.id;
    let cpuPlay = computerPlay();
    let gameResult = gameLogic(myPlay, cpuPlay);
    scoreTracker(gameResult);
    displayOutcomeText(gameResult, myPlay, cpuPlay);
    displayOutcomeScore();

    if (myScore >= 5){
        displayResult('You Won!', '#0BDA51');
        finish();   
    } else if (cpuScore >= 5) {
        displayResult('You Lost!', '#EE4B2B');
        finish();
    }
}