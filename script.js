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

// Get human choice for Rock Paper or Scissors
function getHumanChoice() {
  const choice = prompt('Pick: Rock, Paper, or Scissors').trim().toLowerCase();

  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return choice;
  } else {
    console.log('Not valid choice. Please pick Rock, Paper, or Scissors');
    return;
  }
}

// Keep track of score and declare winner
function playGame() {
  // Keep track of players score
  let humanScore = 0;
  let computerScore = 0;

  // Take computer and human choice and compare
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both picked ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`);
      console.log(`You: ${humanScore} - Computer: ${computerScore}`);
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log(
        `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${
          computerChoice[0].toUpperCase() + computerChoice.slice(1)
        }`
      );
      humanScore++;
      console.log(`You: ${humanScore} - Computer: ${computerScore}`);
    } else {
      console.log(
        `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${
          humanChoice[0].toUpperCase() + humanChoice.slice(1)
        }`
      );
      computerScore++;
      console.log(`You: ${humanScore} - Computer: ${computerScore}`);
    }
  }

  const humanSelection = getHumanChoice;
  const computerSelection = getComputerChoice;

  playRound(humanSelection(), computerSelection());
  playRound(humanSelection(), computerSelection());
  playRound(humanSelection(), computerSelection());
  playRound(humanSelection(), computerSelection());
  playRound(humanSelection(), computerSelection());

  if (humanScore > computerScore) {
    console.log(`You win! You: ${humanScore} - Computer: ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose! You: ${humanScore} - Computer: ${computerScore}`);
  } else {
    console.log(`It's a tie! You both win! You:${humanScore} - Computer:${computerScore}`);
  }
}

playGame();
