const PLAYS = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return PLAYS[Math.floor(Math.random() * PLAYS.length)];
}

/*
function gameLogic(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'The Game is a Tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors';
    } else {
        return 'Error';
    }
}
*/

function gameLogic(playerSelection, computerSelection){
    switch(true){
        case (playerSelection === 'rock' && computerSelection === 'scissors'):
        case (playerSelection === 'paper' && computerSelection === 'rock'):
        case (playerSelection === 'scissors' && computerSelection === 'paper'):
            return `You win!, ${playerSelection} beats ${computerSelection}`;
        case (playerSelection === 'rock' && computerSelection === 'paper'):
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
            return `You Lose!, ${computerSelection} beats ${playerSelection}`;
        case (playerSelection === computerSelection):
            return 'The Game is a Tie!';
    }
}

function parseGame(userSelection){
    /* Makes the game case insensitive and checks for null values */
    userSelection = userSelection.toLowerCase();

    if (PLAYS.includes(userSelection)){
        return userSelection;
    }
    return null;
}

function playGame(userSelection){
    userSelection = parseGame(userSelection);
    if (userSelection){
        let computerSelection = computerPlay();
        let gameResult = gameLogic(userSelection, computerSelection);
        return gameResult;
    }
    return 'Please enter: Rock, Paper or Scissor';
}

function game(game_dration=5){
    for (let i = 1; i < game_dration; i++){
        result = window.prompt('Rock, Paper, Scissors', 'Please enter your move');
        if (result){
            console.log(playGame(result));
        }
    }
}

game();