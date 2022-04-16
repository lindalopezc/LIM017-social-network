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
