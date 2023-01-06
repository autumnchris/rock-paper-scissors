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
    document.querySelector('body').classList.add('modal-open');
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal ? document.querySelector('main').removeChild(modal) : null;
    document.querySelector('body').classList.remove('modal-open');
  }

  return {
    openModal,
    closeModal
  };
})();

export { Modal };
