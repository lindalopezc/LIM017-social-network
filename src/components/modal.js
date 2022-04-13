import { getDataUsers } from "../database.js";

export const Modal = (uid) => {
  const contentModal = document.createElement('div');
  contentModal.setAttribute('class', 'content-modal');
  getDataUsers(uid).then((result) => {
    if (!result.empty) {
      const userData = result.docs[0].data();
      const templateM = `<header>
                          <h2 class="header-title">Contáctame</h2>
                          <button class="close-modal">X</button>
                        </header>
                        <p class="modal-text">¡Hola! Puedes enviarme un mensaje por correo y te responderé en breve.</p>
                        <p class="modal-name modal">${userData.displayName}</p>
                        <p class="modal-email modal"><a href="mailto:${userData.email}">${userData.email}</a></p>`;
      contentModal.innerHTML = templateM;
      const close = contentModal.querySelector('.close-modal');
      close.addEventListener('click', () => {
        contentModal.remove();
      });
    } else {
      console.log('usuario no regsitrado');
    }
  });
  return contentModal;
};
