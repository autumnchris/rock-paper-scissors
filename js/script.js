var round,
roundNum,
result,
playerScore,
computerScore,
endGameMsg;

// FUNCTIONS

function startGame() {
  document.getElementById('modal').style.display = 'none';

  round = 'Round 1: Select Rock, Paper, or Scissors.';
  roundNum = 1;
  result = '';
  playerScore = 0;
  computerScore = 0;

  document.getElementById('round').innerHTML = round;
  document.getElementById('result').innerHTML = result;
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('computer-score').innerHTML = computerScore;
}
