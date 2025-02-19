import Modal from './Modal';

class GameBoard {
  constructor() {
    this.modal = new Modal();
    this.roundStatus = 1;
    this.playerScore = 0;
    this.computerScore = 0;
  }

  resetGameBoard() {
    this.roundStatus = 1;
    this.playerScore = 0;
    this.computerScore = 0;
  }

  determineRoundWinner(playerMove, computerMove) {
    const winningPlay = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    }
    let winner;
    let loser;
    let doesPlayerWin;
    let roundResultText;

    if (playerMove === computerMove) {
      roundResultText = 'It\'s a draw!';
    }
    else {

      if (winningPlay[playerMove] === computerMove) {
        winner = playerMove;
        loser = computerMove;
        doesPlayerWin = true;
        this.playerScore++;
      }
      else if (winningPlay[computerMove] === playerMove) {
        winner = computerMove;
        loser = playerMove;
        doesPlayerWin = false;
        this.computerScore++;
      }
      winner = winner.charAt(0).toUpperCase() + winner.slice(1);
      roundResultText = `${winner} beats ${loser}! You ${doesPlayerWin ? 'win' : 'lose'} that round.`;
    }
    this.renderGameBoardUpdates(roundResultText);
  }

  playRound(event) {
    const playOptions = [
      'rock',
      'paper',
      'scissors'
    ];
    const computerMove = playOptions[Math.floor(Math.random() * playOptions.length)];
    this.roundStatus++;
    this.determineRoundWinner(event.target.id, computerMove);

    if (this.playerScore === 5) {
      this.endGame('Congratulations! You won 5 rounds before the computer.');
    }
    else if (this.computerScore === 5) {
      this.endGame('Too bad. The computer won 5 rounds before you.');
    }
  }

  startGame() {
    this.resetGameBoard();
    this.removeGameBoard('main');
    this.renderGameBoard('main');
    this.modal.removeModal('main');
  }

  endGame(endGameMessage) {
    this.modal.renderModal(endGameMessage, 'Play Again', 'main');
  }

  // DOM methods
  renderGameBoardUpdates(roundResultText) {
    const roundStatus = document.querySelector('.round-status');
    roundStatus.innerHTML = `Round ${this.roundStatus}`;

    this.removeRoundResult('.game-board');
    this.removeScoreboard('.game-board');
    this.renderRoundResult(roundResultText, '.game-board')
    this.renderScoreboard('.game-board');
  }

  renderRoundResult(roundResultText, location) {
    const roundResult = document.createElement('p');
    roundResult.classList.add('round-result');
    roundResult.innerHTML = roundResultText;
    document.querySelector(location).appendChild(roundResult);
  }

  removeRoundResult(location) {
    const roundResult = document.querySelector(`${location} .round-result`);
    roundResult ? document.querySelector(location).removeChild(roundResult) : null;
  }

  renderScoreboard(location) {
    const scoreboard = document.createElement('table');
    scoreboard.classList.add('scoreboard');
    scoreboard.innerHTML = `
      <thead>
        <tr>
          <th scope="col">You</th>
          <th scope="col">Computer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="player-score">${this.playerScore}</td>
          <td class="computer-score">${this.computerScore}</td>
        </tr>
      </tbody>
    `;
    document.querySelector(location).appendChild(scoreboard);
  }

  removeScoreboard(location) {
    const scoreboard = document.querySelector(`${location} .scoreboard`);
    scoreboard ? document.querySelector(location).removeChild(scoreboard) : null;
  }

  renderGameBoard(location) {
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('game-board');
    gameBoard.innerHTML = `
      <h2 class="round-status">Round ${this.roundStatus}</h2>
      <p class="round-instructions">Select Rock, Paper, or Scissors.</p>
      <div class="button-group play-options">
        <button type="button" class="button play-option-button" id="rock"><span class="fa-regular fa-hand-back-fist fa-2x play-icon" aria-hidden="true"></span>Rock</button>
        <button type="button" class="button play-option-button" id="paper"><span class="fa-regular fa-hand fa-2x play-icon" aria-hidden="true"></span>Paper</button>
        <button type="button" class="button play-option-button" id="scissors"><span class="fa-regular fa-hand-scissors fa-2x play-icon" aria-hidden="true"></span>Scissors</button>
      </div>
    `;
    document.querySelector(location).appendChild(gameBoard);
    this.renderScoreboard('.game-board');
  }

  removeGameBoard(location) {
    const gameBoard = document.querySelector(`${location} .game-board`);
    gameBoard ? document.querySelector(location).removeChild(gameBoard) : null;
  }
}

export default GameBoard;