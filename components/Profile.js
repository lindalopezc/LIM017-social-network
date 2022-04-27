/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { Menu } from '../templates/Menu.js';
import { getUserLocalStorage } from '../firebase/authentication.js';
import { getPublicationsUser, editPost } from '../firebase/database.js';
import { deletePostConfirm } from '../templates/modal.js';
import { onNavigate } from '../lib/ViewController.js';

export const profile = () => {
  // Aquí llamamos y almacenamos la función de localStorage que nos devuelva datos del user.
  const user = getUserLocalStorage();

  // Aquí llamamos y almacenamos la función de database que nos dará los posts por user.
  const postByUser = getPublicationsUser(user.uid);

  const profileSection = document.createElement('section');
  profileSection.setAttribute('id', 'profile-section');

  const divNav = document.createElement('div');
  divNav.setAttribute('class', 'div-nav');
  const profileTitle = document.createElement('h1');
  profileTitle.textContent = 'Perfil';

  const menu = Menu();
  divNav.appendChild(profileTitle);
  divNav.appendChild(menu);

  profileSection.appendChild(divNav);
  const divProfile = document.createElement('div');
  divProfile.setAttribute('id', 'profile-container');

  const iconDefault = '../img/user.png';
  const divProfileTemplate = `
                              <div id = "div-left-profile">
                                <h1 id = "profile-title" >Datos personales</h1>                                
                                <div id = "container-data-profile">
                                  <img id = "photo-profile" src = ${user.photoURL ? user.photoURL : iconDefault}>
                                  <p id = "name-profile">${user.displayName}</p>
                                  <p id = "email-profile">${user.email}</p>
                                </div>
                              </div>`;
  const divRightProfile = document.createElement('div');
  divRightProfile.setAttribute('id', 'div-right-profile');
  divRightProfile.innerHTML = `
                              <h1 class="publication-title">Mis publicaciones</h1>`;
  const divPostProfile = document.createElement('div');
  divPostProfile.setAttribute('id', 'post-profile');

  // Llamamos la variable que nos devuelve los posts por usuario.
  postByUser.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const postUser = document.createElement('div');
      postUser.setAttribute('class', 'perfilPost');
      postUser.setAttribute('id', doc.id);
      const templatePostUser = `<div class = "div-category-post">
                                    <p class = "category-post ${doc.data().Categoria}">${doc.data().Categoria}</p>
                                  </div>
                                  <div class ="container-post">
                                    <div class = "title-and-icons">
                                      <div class ="div-title">
                                        <p>${doc.data().Titulo}</p>
                                      </div>
                                      <div class = "div-icons">
                                        <button class = "btn-delete" data-id = "${doc.id}" >
                                        </button>
                                        <button class = "btn-edit-post" data-id = "${doc.id}">
                                        </button>
                                      </div>
                                    </div>
                                    <div class = "div-img-profile">
                                      <img class = "img-post" src = ${doc.data().Foto}>
                                    </div>
                                  </div>`;
      postUser.innerHTML = templatePostUser;
      divPostProfile.appendChild(postUser);

      // LLamamos a los botones para borrar post
      const btnDelete = divPostProfile.querySelectorAll('.btn-delete');

      btnDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          const idPost = dataset.id;
          // Aquí traemos el modal
          const root = document.getElementById(idPost);
          const modal = document.querySelector('.div-delete-post');
          if (modal) {
            modal.remove();
          }
          root.appendChild(deletePostConfirm(idPost));
        });
      });

      // Llamamos a los botones de editar
      const btnEdit = divPostProfile.querySelectorAll('.btn-edit-post');
      btnEdit.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          const idPost = dataset.id;
          const params = new URLSearchParams();
          params.set('editPostId', idPost);
          onNavigate('/publications', params);
        });
      });
    });
  });

  divProfile.innerHTML = divProfileTemplate;
  divRightProfile.appendChild(divPostProfile);
  divProfile.appendChild(divRightProfile);
  profileSection.appendChild(divProfile);

  return profileSection;
};
