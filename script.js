// Get computer to choose Rock Paper or Scissors
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return 'rock';
  } else if (randomNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

console.log(getComputerChoice());

// Get human choice for Rock Paper or Scissors
function getHumanChoice() {
  const choice = prompt('Pick: Rock, Paper, or Scissors').trim().toLowerCase();
  const choiceFixed = choice[0].toUpperCase() + choice.slice(1);

  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return choiceFixed;
  } else {
    console.log('Not valid choice. Please pick Rock, Paper, or Scissors');
    return;
  }
}

console.log(getHumanChoice());

// Keep track of players score
let humanScore = 0;
let computerScore = 0;

// Take computer and human choice and compare
function playRound(humanChocie, computerChoice) {}
// Keep track of score and declare winner
