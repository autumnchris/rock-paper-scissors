import { Modal } from './modal';

const GameBoard = (() => {
  let roundStatus;
  let playerScore;
  let computerScore;

  function resetGameBoard() {
    roundStatus = 1;
    playerScore = 0;
    computerScore = 0;
  }

  function goToNewRound() {
    roundStatus++;
    return `Round ${roundStatus}`;
  }

  function renderRoundResult(resultText) {
    const roundResult = document.createElement('p');
    roundResult.classList.add('round-result');
    roundResult.innerHTML = resultText;

    document.querySelector('.game-board').insertBefore(roundResult, document.querySelector('.scoreboard'));
  }

  function addScorePoint(roundWinner) {

    if (roundWinner === 'player') {
      playerScore++;
      return playerScore;
    }
    else {
      computerScore++;
      return computerScore;
    }
  }

  function determineWinner(playerMove, computerMove) {
    const winningPlay = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    }
    let winner;
    let loser;
    let doesPlayerWin;

    if (playerMove === computerMove) {
      renderRoundResult('It\'s a draw!');
    }
    else {

      if (winningPlay[playerMove] === computerMove) {
        winner = playerMove;
        loser = computerMove;
        doesPlayerWin = true;
        document.querySelector('.player-score').innerHTML = addScorePoint('player');
      }
      else {
        winner = computerMove;
        loser = playerMove;
        doesPlayerWin = false;
        document.querySelector('.computer-score').innerHTML = addScorePoint('computer');
      }
      winner = winner.charAt(0).toUpperCase() + winner.slice(1);
      renderRoundResult(`${winner} beats ${loser}! You ${doesPlayerWin ? 'win' : 'lose'} that round.`);
    }
  }

  function playRound(event) {
    const playOptions = [
      'rock',
      'paper',
      'scissors'
    ];
    const computerMove = playOptions[Math.floor(Math.random() * playOptions.length)];
    const roundResult = document.querySelector('.round-result');
    
    roundResult ? document.querySelector('.game-board').removeChild(roundResult) : null;
    document.querySelector('.round-status').innerHTML = goToNewRound();

    determineWinner(event.target.id, computerMove);

    if (playerScore === 5 || computerScore === 5) {

      if (playerScore === 5) {
        endGame('Congratulations! You won 5 rounds before the computer.');
      }
      else {
        endGame('Too bad. The computer won 5 rounds before you.');
      }
    }
  }

  function renderGameBoard() {
    resetGameBoard();

    document.querySelector('.game-board').innerHTML = `
    <h2 class="round-status">Round ${roundStatus}</h2>
    <p class="round-instructions">Select Rock, Paper, or Scissors.</p>
    <div class="button-group play-options">
      <button type="button" class="button play-option-button" id="rock"><span class="far fa-hand-rock fa-2x play-icon"></span>Rock</button>
      <button type="button" class="button play-option-button" id="paper"><span class="far fa-hand-paper fa-2x play-icon"></span>Paper</button>
      <button type="button" class="button play-option-button" id="scissors"><span class="far fa-hand-scissors fa-2x play-icon"></span>Scissors</button>
    </div>
    <table class="scoreboard">
      <thead>
        <tr>
          <th>You</th>
          <th>Computer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="player-score">${playerScore}</td>
          <td class="computer-score">${computerScore}</td>
        </tr>
      </tbody>
    </table>`;
  }

  function startGame() {
    renderGameBoard();
    Modal.closeModal();
  }

  function endGame(endGameMessage) {
    Modal.openModal(endGameMessage, 'Play Again');
  }

  return {
    startGame,
    playRound
  };
})();

export { GameBoard };
