import { getDataUsers } from '../firebase/database.js';

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
export const registerModal = () => {
  const contentModal = document.createElement('div');
  contentModal.setAttribute('class', 'div-register-modal');
  const templateM = `
                    <img class = "image-register-modal" src ="../img/enviar.png"><br>
                    <p class="modal-text-register"> Hemos enviado un enlace a tu correo electrónico. Verifica para poder continuar.</p>
                    <button class = "register-close-modal">Cerrar</button>`;
  contentModal.innerHTML = templateM;
  const close = contentModal.querySelector('.register-close-modal');
  close.addEventListener('click', () => {
    contentModal.remove();
  });
  return contentModal;
};
