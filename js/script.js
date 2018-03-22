var round,
result,
playerScore,
computerScore;

// FUNCTIONS

function startGame() {
  document.getElementById('modal').style.display = 'none';

  round = 1;
  playerScore = 0;
  computerScore = 0;

  document.getElementById('round').innerHTML = 'Round ' + round + ': Select Rock, Paper, or Scissors.';
  document.getElementById('result').innerHTML = '';
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('computer-score').innerHTML = computerScore;
}

function playRound(elem) {
  round++;
  var moveOptions = [
    'rock',
    'paper',
    'scissors'
  ];
  var computerMove = moveOptions[Math.floor(Math.random() * moveOptions.length)];

  switch(elem.id) {
    case 'rock':

      if (computerMove === 'paper') {
        result = 'Paper beats rock! You lose that round.';
        computerScore++;
      }
      else if (computerMove === 'scissors') {
        result = 'Rock beats scissors! You win that round.';
        playerScore++;
      }
      else {
        result = 'It\'s a draw!'
      }
      break;
    case 'paper':
      if (computerMove === 'scissors') {
        result = 'Scissors beats paper! You lose that round.';
        computerScore++;
      }
      else if (computerMove === 'rock') {
        result = 'Paper beats rock! You win that round.';
        playerScore++;
      }
      else {
        result = 'It\'s a draw!'
      }
      break;
    case 'scissors':
      if (computerMove === 'rock') {
        result = 'Rock beats scissors! You lose that round.';
        computerScore++;
      }
      else if (computerMove === 'paper') {
        result = 'Scissors beats paper! You win that round.';
        playerScore++;
      }
      else {
        result = 'It\'s a draw!'
      }
  }

  if (playerScore === 5 || computerScore === 5) {
    document.getElementById('modal').style.display = 'block';

    if (playerScore === 5) {
      document.querySelector('.modal-body p').innerHTML = 'Congratulations! You won 5 rounds before the computer did.';
    }
    else {
      document.querySelector('.modal-body p').innerHTML = 'Too bad. The computer won 5 rounds before you.';
    }
    document.getElementById('start').innerHTML = 'Play Again';
  }

  document.getElementById('round').innerHTML = 'Round ' + round + ': Select Rock, Paper, or Scissors.';
  document.getElementById('result').innerHTML = result;
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('computer-score').innerHTML = computerScore;
}

// EVENT LISTENERS

document.getElementById('start').addEventListener('click', function() {
  startGame();
});

document.querySelectorAll('.move-options').forEach(function(button) {
  button.addEventListener('click', function() {
    playRound(this);
  });
});
