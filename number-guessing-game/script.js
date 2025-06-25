let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// This is for the computer generating the number 0-9
function generateTarget() {
  return Math.floor(Math.random() * 10);
}


// function that will be used to compare the guesses
function compareGuesses(humanGuess, compGuess, target) {
  const humanGuessDistance = Math.abs(target - humanGuess);
  const compGuessDistance = Math.abs(target - compGuess);
  if (humanGuessDistance < compGuessDistance) {
    return true;
  } else {
    return false;
  }
}

// updating score 
function updateScore(value) {
  if (value === "human") {
    humanScore += 1;
  } else if (value === "computer") {
    computerScore += 1;
  } else {
    return "there has been an error";
  }
}

// advancing the round
function advanceRound(roundValue) {
  return (currentRoundNumber += 1);
}


