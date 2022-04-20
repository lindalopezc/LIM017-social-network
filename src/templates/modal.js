/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import { getDataUsers, deletePost } from '../firebase/database.js';
import { onNavigate } from '../lib/ViewController.js';

export const Modal = (uid) => {
  const contentModal = document.createElement('div');
  contentModal.setAttribute('class', 'content-modal');
  getDataUsers(uid).then((result) => {
    if (!result.empty) {
      const userData = result.docs[0].data();
      const templateM = `<header>
                          <p class="header-title">Contáctame</p>
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

export const deletePostConfirm = (idPost) => {
  const contentModal = document.createElement('div');
  contentModal.setAttribute('class', 'div-delete-post');
  const templateM = `
                    <p class="modal-text-delete"> ¿Está segur@ que desea eliminar esta publicación?</p>
                    <div class = "div-buttons-delete">
                    <button class = "btn-yes">Sí</button>
                    <button class = "btn-no">No</button>
                    </div>`;
  contentModal.innerHTML = templateM;

  // Eliminar post
  const btnConfirmDelete = contentModal.querySelector('.btn-yes');
  btnConfirmDelete.addEventListener('click', () => {
    deletePost(idPost);
    onNavigate('/profile'); // Actualizamos para que no sean visibles los posts eliminados, y no tener que recargar la pag.
  });

  // Cerrar modal
  const close = contentModal.querySelector('.btn-no');
  close.addEventListener('click', () => {
    contentModal.remove();
  });
  return contentModal;
};
