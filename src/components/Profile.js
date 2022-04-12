/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
import { Menu } from './Menu.js';
import { getUserLocalStorage } from '../authentication.js';

export const profile = () => {
  let user = getUserLocalStorage();

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
                            <h1>Datos personales</h1>                                
                                <img id = "photo-profile" src = ${user.photoURL ? user.photoURL : iconDefault}>
                            <p id = "name-profile">${user.displayName}</p>
                            <p id = "email-profile">${user.email}</p>
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

  return profileSection;
};
