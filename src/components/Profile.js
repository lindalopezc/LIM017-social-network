/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import { Menu } from './Menu.js';
import { getDataUser, updatedDataUser, getUserLocalStorage } from '../authentication.js';
import { uploadAndDownloadImage } from '../Storage.js';

export const profile = () => {
  console.log('línea 11 de profile', getUserLocalStorage());
  let usuario = getUserLocalStorage();

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

  const divProfileTemplate = `
                        <div id = "div-left-profile">
                            <h1>Datos personales</h1>                                
                            <label id = "label-photo-profile">
                                <input type = "file" name = "file-image" id = "file-photo-profile" >
                                <img id = "photo-profile" src = '${usuario.photoURL}'>
                            </label>
                            <p id = "name-profile">${usuario.displayName}</p>
                            <p id = "email-profile">${usuario.email}</p>
                            <button id = "btn-profile">
                                <img class = "icon-edit" src = "../img/editar.png">
                            </button>
                        </div>
                        <div id = "div-right-profile">
                            <h1>Mis publicaciones</h1>
                            <div id = "posts-profile">  
                            </div>
                        </div>
                    `;
  divProfile.innerHTML = divProfileTemplate;
  profileSection.appendChild(divProfile);

  const inputPhoto = profileSection.querySelector('#file-photo-profile');
  const photoProfile = profileSection.querySelector('#photo-profile');

  let getPhotoUrl; // Aquí almacenaremos la URL de la foto que nos devuelve storage.

  // Evento para subir actualizar nuestra foto de perfil.
  inputPhoto.addEventListener('change', () => {
    const photoUpload = inputPhoto.files[0];
    uploadAndDownloadImage(photoUpload).then((url) => {
      getPhotoUrl = url;
      photoProfile.src = getPhotoUrl;
    });
  });

  // Evento para guardar nuestros datos de usuario.
  const btnUpdate = profileSection.querySelector('#btn-profile');
  btnUpdate.addEventListener('click', () => {
    const nameProfile = profileSection.querySelector('#name-profile').value;
    updatedDataUser(nameProfile, photoProfile);
    console.log('Se actualizaron sus cambios');
  });
  return profileSection;
};
