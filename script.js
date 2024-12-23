// Get computer to choose Rock Paper or Scissors
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return 'Rock';
  } else if (randomNum === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

console.log(getComputerChoice());

// Get human choice for Rock Paper or Scissors
function getHumanChoice() {
  const choice = prompt('Pick: Rock, Paper, or Scissors').trim();
  const choiceFixed = choice[0].toUpperCase() + choice.slice(1);
  return choiceFixed;
}

console.log(getHumanChoice());

// Keep track of players score
let humanScore = 0;
let computerScore = 0;

// Take computer and human choice and compare
// Keep track of score and declare winner
