import { GameBoard } from './game-board';

const Modal = (() => {

  function openModal(messageText, buttonText) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', 'modal');
    modal.innerHTML = `<div class="modal-content">
      <div class="modal-body">
        <p>${messageText}</p>
        <button type="button" class="button start-button">${buttonText}</button>
      </div>
    </div>`;

    document.querySelector('main').insertBefore(modal, document.querySelector('.game-board'));
  }

  function closeModal() {
    document.querySelector('main').removeChild(document.getElementById('modal'));
  }

  return {
    openModal,
    closeModal
  };
})();

export { Modal };
