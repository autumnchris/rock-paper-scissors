import { Modal } from './modal';

function renderApp() {
   document.getElementById('app').innerHTML = `<header>
    <h1>Rock! Paper! Scissors!</h1>
   </header>
   <main>
    <div class="game-board"></div>
   </main>
   <footer>Created by <a href="https://autumnbullard-portfolio.herokuapp.com" target="_blank">Autumn Bullard</a> &copy; ${new Date().getFullYear()}</footer>`;

   Modal.openModal('See if you can win 5 rounds of Rock Paper Scissors against the computer. Click Start to begin.', 'Start');
}

export { renderApp };
