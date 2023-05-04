class Modal {
  // DOM methods
  renderModal(messageText, buttonText, location) {
    const modal = document.createElement('div');
    modal.setAttribute('id', 'modal');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-body">
          <p>${messageText}</p>
          <button type="button" class="button start-button">${buttonText}</button>
        </div>
      </div>
    `;
    document.querySelector(location).appendChild(modal);
    document.querySelector('body').classList.add('modal-open');
  }

  removeModal(location) {
    const modal = document.querySelector(`${location} #modal`);
    modal ? document.querySelector(location).removeChild(modal) : null;
    document.querySelector('body').classList.remove('modal-open');
  }
}

export default Modal;