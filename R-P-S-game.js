// Rock Paper Scissors Game
// Author: Lucas Faria
// Date: June 9, 2025
// rules: Rock destroys scissors. /  Scissors cut paper. /Paper covers rock. / If there’s a tie, then the game ends in a draw.

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else {
    console.log('error - spelling');
  }
}


function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice) {
    return 'Result: Tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer has won!';
    } else if (computerChoice === 'scissors') {
      return 'Player has won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer has won!';
    } else if (computerChoice === 'rock') {
      return 'Player has won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer has won!';
    } else if (computerChoice === 'paper') {
      return 'Player has won';
    }
  }
}


function playGame(){
  const userChoice = getUserChoice('rock', 'paper', 'scissors');
  const computerChoice = getComputerChoice();

  console.log('User chose: ' + userChoice);
  console.log('Computer Chose: '+ computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
