const gameStats = {
  roundNum: null,
  roundResult: null,
  playerScore: null,
  computerScore: null
};

// FUNCTIONS

function startGame() {
  document.getElementById('modal').style.display = 'none';
  gameStats.roundNum = 1;
  gameStats.playerScore = 0;
  gameStats.computerScore = 0;

  document.querySelector('.round-num').innerHTML = `Round ${gameStats.roundNum}`;
  document.querySelector('.round-result').innerHTML = '';
  document.querySelector('.player-score').innerHTML = gameStats.playerScore;
  document.querySelector('.computer-score').innerHTML = gameStats.computerScore;
}

function playRound(event) {
  gameStats.roundNum++;
  const playOptions = [
    'rock',
    'paper',
    'scissors'
  ];
  const computerMove = playOptions[Math.floor(Math.random() * playOptions.length)];

  switch(event.target.id) {
    case 'rock':

      if (computerMove === 'paper') {
        gameStats.roundResult = 'Paper beats rock! You lose that round.';
        gameStats.computerScore++;
      }
      else if (computerMove === 'scissors') {
        gameStats.roundResult = 'Rock beats scissors! You win that round.';
        gameStats.playerScore++;
      }
      else {
        gameStats.roundResult = 'It\'s a draw!'
      }
      break;
    case 'paper':

      if (computerMove === 'scissors') {
        gameStats.roundResult = 'Scissors beats paper! You lose that round.';
        gameStats.computerScore++;
      }
      else if (computerMove === 'rock') {
        gameStats.roundResult = 'Paper beats rock! You win that round.';
        gameStats.playerScore++;
      }
      else {
        gameStats.roundResult = 'It\'s a draw!'
      }
      break;
    case 'scissors':

      if (computerMove === 'rock') {
        gameStats.roundResult = 'Rock beats scissors! You lose that round.';
        gameStats.computerScore++;
      }
      else if (computerMove === 'paper') {
        gameStats.roundResult = 'Scissors beats paper! You win that round.';
        gameStats.playerScore++;
      }
      else {
        gameStats.roundResult = 'It\'s a draw!'
      }
  }

  if (gameStats.playerScore === 5 || gameStats.computerScore === 5) {
    document.getElementById('modal').style.display = 'block';

    if (gameStats.playerScore === 5) {
      document.querySelector('.modal-body p').innerHTML = 'Congratulations! You won 5 rounds before the computer.';
    }
    else {
      document.querySelector('.modal-body p').innerHTML = 'Too bad. The computer won 5 rounds before you.';
    }
    document.querySelector('.start-button').innerHTML = 'Play Again';
  }

  document.querySelector('.round-num').innerHTML = `Round ${gameStats.roundNum}`;
  document.querySelector('.round-result').innerHTML = gameStats.roundResult;
  document.querySelector('.player-score').innerHTML = gameStats.playerScore;
  document.querySelector('.computer-score').innerHTML = gameStats.computerScore;
}

// EVENT LISTENERS

document.querySelector('.start-button').addEventListener('click', () => {
  startGame();
});

document.querySelectorAll('.play-option-button').forEach(button => {
  button.addEventListener('click', event => {
    playRound(event);
  });
});

document.querySelector('.current-year').innerHTML = new Date().getFullYear();
