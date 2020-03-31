const gameStats = {
  round: null,
  result: null,
  playerScore: null,
  computerScore: null
};

// FUNCTIONS

function startGame() {
  document.getElementById('modal').style.display = 'none';
  gameStats.round = 1;
  gameStats.playerScore = 0;
  gameStats.computerScore = 0;

  document.querySelector('.round').innerHTML = `Round ${gameStats.round}: Select Rock, Paper, or Scissors.`;
  document.querySelector('.result').innerHTML = '';
  document.querySelector('.player-score').innerHTML = gameStats.playerScore;
  document.querySelector('.computer-score').innerHTML = gameStats.computerScore;
}

function playRound(event) {
  gameStats.round++;
  const moveOptions = [
    'rock',
    'paper',
    'scissors'
  ];
  const computerMove = moveOptions[Math.floor(Math.random() * moveOptions.length)];

  switch(event.target.id) {
    case 'rock':

      if (computerMove === 'paper') {
        gameStats.result = 'Paper beats rock! You lose that round.';
        gameStats.computerScore++;
      }
      else if (computerMove === 'scissors') {
        gameStats.result = 'Rock beats scissors! You win that round.';
        gameStats.playerScore++;
      }
      else {
        gameStats.result = 'It\'s a draw!'
      }
      break;
    case 'paper':

      if (computerMove === 'scissors') {
        gameStats.result = 'Scissors beats paper! You lose that round.';
        gameStats.computerScore++;
      }
      else if (computerMove === 'rock') {
        gameStats.result = 'Paper beats rock! You win that round.';
        gameStats.playerScore++;
      }
      else {
        gameStats.result = 'It\'s a draw!'
      }
      break;
    case 'scissors':

      if (computerMove === 'rock') {
        gameStats.result = 'Rock beats scissors! You lose that round.';
        gameStats.computerScore++;
      }
      else if (computerMove === 'paper') {
        gameStats.result = 'Scissors beats paper! You win that round.';
        gameStats.playerScore++;
      }
      else {
        gameStats.result = 'It\'s a draw!'
      }
  }

  if (gameStats.playerScore === 5 || gameStats.computerScore === 5) {
    document.getElementById('modal').style.display = 'block';

    if (gameStats.playerScore === 5) {
      document.querySelector('.modal-body p').innerHTML = 'Congratulations! You won 5 rounds before the computer did.';
    }
    else {
      document.querySelector('.modal-body p').innerHTML = 'Too bad. The computer won 5 rounds before you.';
    }
    document.querySelector('.start').innerHTML = 'Play Again';
  }

  document.querySelector('.round').innerHTML = `Round ${gameStats.round}: Select Rock, Paper, or Scissors.`;
  document.querySelector('.result').innerHTML = gameStats.result;
  document.querySelector('.player-score').innerHTML = gameStats.playerScore;
  document.querySelector('.computer-score').innerHTML = gameStats.computerScore;
}

// EVENT LISTENERS

document.querySelector('.start').addEventListener('click', () => {
  startGame();
});

document.querySelectorAll('.move-options').forEach(button => {
  button.addEventListener('click', (event) => {
    playRound(event);
  });
});

document.querySelector('.current-year').innerHTML = new Date().getFullYear();
