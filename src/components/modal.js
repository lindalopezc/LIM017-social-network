export const Modal = (data) => {
  const contentModal = document.createElement('div');
  contentModal.setAttribute('class', 'content-modal');
  const templateM = `<header>
                      <h2 class="header-title">Contáctame</h2>
                      <button class="close-modal">X</button>
                    </header>
                    <p class="modal-text">¡Hola! Puedes enviarme un mensaje por correo y te responderé en breve.</p>
                    <p class="modal-name modal">${data.name}</p>
                    <p class="modal-email modal">${data.email}</p>`;
  contentModal.innerHTML = templateM;
  const close = contentModal.querySelector('.close-modal');
  close.addEventListener('click', () => {
    contentModal.remove();
  });
  return contentModal;
};
