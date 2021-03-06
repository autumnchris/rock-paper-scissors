import { Modal } from './modal';
import { GameBoard } from './game-board';

const App = (() => {

  function renderApp() {
     document.getElementById('app').innerHTML = `
     <header>
      <h1>Rock! Paper! Scissors!</h1>
     </header>
     <main>
      <div class="game-board"></div>
     </main>
     <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; ${new Date().getFullYear()}</footer>`;

     Modal.openModal('See if you can win 5 rounds of Rock Paper Scissors against the computer. Click Start to begin.', 'Start');

     document.addEventListener('click', event => {
       const element = event.target;
       element.matches('.start-button') ? GameBoard.startGame() : null;
       element.matches('.play-option-button') ? GameBoard.playRound(event) : null;
    });
  }

  return {
    renderApp
  };
})();

export { App };
