import Header from './modules/Header';
import Footer from './modules/Footer';
import Modal from './modules/Modal';
import GameBoard from './modules/GameBoard';

class App {
  constructor() {
    this.header = new Header();
    this.footer = new Footer();
    this.modal = new Modal();
    this.gameBoard = new GameBoard();
    this.renderApp();
  }

  // Event listeners
  events() {
    document.addEventListener('click', event => {
      const element = event.target;
      element.matches('.start-button') ? this.gameBoard.startGame() : null;
      element.matches('.play-option-button') ? this.gameBoard.playRound(event) : null;
    });
  }

  // DOM methods
  renderApp() {
    this.header.renderHeader('#app');
    this.renderMain('#app');
    this.footer.renderFooter('#app');
    this.modal.renderModal('See if you can win 5 rounds of Rock Paper Scissors against the computer. Click Start to begin.', 'Start', 'main');
    this.events();
  }

  renderMain(location) {
    const main = document.createElement('main');
    document.querySelector(location).appendChild(main);
  }
}

export default App;