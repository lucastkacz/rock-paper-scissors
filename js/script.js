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
        return `You win! ${playerSelection} beats ${computerSelection}`;
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

// Add's the game result score to the DOM
function displayOutcomeScore(){
    const gameResult = document.querySelector('.result-number');
    const p = document.createElement('p');
    p.classList.add('p');
    p.textContent = `My Score:${myScore} - CPU Score:${cpuScore}`;
    gameResult.appendChild(p);
}



// Get all the buttons in buttons container div
const mybuttons = document.querySelectorAll('.buttons button');

// Add the event listener to each button
mybuttons.forEach(mybuttons => {
    mybuttons.addEventListener('click', playGame);
});




// Play's the game
function playGame(){
    let myPlay = this.id;
    let cpuPlay = computerPlay();
    let gameResult = gameLogic(myPlay, cpuPlay);
    scoreTracker(gameResult);
    displayOutcomeText(gameResult, myPlay, cpuPlay);
    displayOutcomeScore();
}









/*
function parseGame(userSelection){
    // Makes the game case insensitive and checks for null values
    userSelection = userSelection.toLowerCase();

    if (PLAYS.includes(userSelection)){
        return userSelection;
    }
    return null;
}
*/
/*
function playGame(userSelection){
    userSelection = parseGame(userSelection);
    if (userSelection){
        let computerSelection = computerPlay();
        let gameResult = gameLogic(userSelection, computerSelection);
        return gameResult;
    }
    return 'Please enter: Rock, Paper or Scissor';
}
*/






/*
// Select the div to display the game results
const gameResult = document.querySelector('.results');

// Create a p elemento to display game results
const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'This is the glorious text-content!';

gameResult.appendChild(p);
*/


/*
function game(game_duration=5){
    for (let i = 1; i < game_duration; i++){
        result = window.prompt('Rock, Paper, Scissors', 'Please enter your move');
        if (result){
            console.log(playGame(result));
        }
    }
}


game();
*/