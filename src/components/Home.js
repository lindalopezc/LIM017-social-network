/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { getData, getDataWithFilters } from '../firebase/database.js';
import { templatePosts } from '../templates/Posts.js';
import { onNavigate } from '../lib/ViewController.js';
import { Menu } from '../templates/Menu.js';
import { getUserLocalStorage } from '../firebase/authentication.js';

export const home = () => {
  const sectionHome = document.createElement('section');
  sectionHome.setAttribute('id', 'section-home');

  const logoHome = document.createElement('img');
  logoHome.setAttribute('src', '../img/LETRAS1.png');
  logoHome.setAttribute('class', 'logo-home');

  const divTitleHome = document.createElement('div');
  divTitleHome.setAttribute('class', 'div-nav');

  divTitleHome.appendChild(logoHome);

  const divCentralHome = document.createElement('div');
  divCentralHome.setAttribute('class', 'div-central-home');

  const divPhotoPerfil = document.createElement('div');
  divPhotoPerfil.setAttribute('class', 'div-photo-perfil');
  const navMenu = Menu();

  const userData = getUserLocalStorage();

  const imageProfile = document.createElement('img');
  imageProfile.setAttribute('class', 'img-profile');
  const iconDefault = '../img/user.png';
  imageProfile.setAttribute('src', `${userData.photoURL ? userData.photoURL : iconDefault}`);

  const titleHome = document.createElement('p');
  titleHome.textContent = userData.displayName;

  divPhotoPerfil.appendChild(imageProfile);
  divPhotoPerfil.appendChild(titleHome);
  divPhotoPerfil.appendChild(navMenu);

  divTitleHome.appendChild(divPhotoPerfil);

  const divCreatePublication = document.createElement('div');
  divCreatePublication.setAttribute('class', 'div-create-publication');
  const createPublicationText = document.createElement('p');
  createPublicationText.setAttribute('class', 'create-publication-text');
  createPublicationText.textContent = '¡Dale una segunda vida a tus prendas!';
  const createPublicationBtn = document.createElement('button');
  createPublicationBtn.setAttribute('class', 'create-publication-btn');
  const imgBtn = document.createElement('img');
  imgBtn.setAttribute('src', '../img/anadir-imagen.png');
  imgBtn.setAttribute('class', 'img-btn');
  createPublicationBtn.appendChild(imgBtn);

  divCreatePublication.appendChild(createPublicationText);
  divCreatePublication.appendChild(createPublicationBtn);

  const divFilters = document.createElement('div');
  divFilters.setAttribute('class', 'div-filters');

  const pFirstFilter = document.createElement('p');
  pFirstFilter.textContent = 'Vender';
  const pFirstFilterLine = document.createElement('p');
  pFirstFilterLine.setAttribute('id', 'first-filter-line');

  const btnFirstFilter = document.createElement('button');
  btnFirstFilter.setAttribute('class', 'btn-filters');
  btnFirstFilter.appendChild(pFirstFilter);
  btnFirstFilter.appendChild(pFirstFilterLine);

  const pSecondFilter = document.createElement('p');
  pSecondFilter.textContent = 'Intercambiar';
  const pSecondFilterLine = document.createElement('p');
  pSecondFilterLine.setAttribute('id', 'second-filter-line');

  const btnSecondFilter = document.createElement('button');
  btnSecondFilter.setAttribute('class', 'btn-filters');
  btnSecondFilter.appendChild(pSecondFilter);
  btnSecondFilter.appendChild(pSecondFilterLine);

  const pThirdFilter = document.createElement('p');
  pThirdFilter.textContent = 'Donar';
  const pThirdFilterLine = document.createElement('p');
  pThirdFilterLine.setAttribute('id', 'third-filter-line');

  const btnThirdFilter = document.createElement('button');
  btnThirdFilter.setAttribute('class', 'btn-filters');
  btnThirdFilter.appendChild(pThirdFilter);
  btnThirdFilter.appendChild(pThirdFilterLine);

  divFilters.appendChild(btnFirstFilter);
  divFilters.appendChild(btnSecondFilter);
  divFilters.appendChild(btnThirdFilter);

  const divPublicationsFilters = document.createElement('div');
  divPublicationsFilters.setAttribute('class', 'div-publications-filters');

  divPublicationsFilters.appendChild(divCreatePublication);
  divPublicationsFilters.appendChild(divFilters);

  const postsContainer = document.createElement('div');
  postsContainer.setAttribute('class', 'div-posts');

  divCentralHome.appendChild(divPublicationsFilters);
  divCentralHome.appendChild(postsContainer);

  sectionHome.appendChild(divTitleHome);
  sectionHome.appendChild(divCentralHome);

  getData().then((querySnapshot) => querySnapshot.forEach((doc) => postsContainer.appendChild(templatePosts(doc))));

  btnFirstFilter.addEventListener('click', () => {
    pFirstFilterLine.style.display = 'block';
    pSecondFilterLine.style.display = 'none';
    pThirdFilterLine.style.display = 'none';
    postsContainer.innerHTML = '';
    return getDataWithFilters('Vender').then((querySnapshot) => querySnapshot.forEach((doc) => postsContainer.appendChild(templatePosts(doc))));
  });

  btnSecondFilter.addEventListener('click', () => {
    pSecondFilterLine.style.display = 'block';
    pFirstFilterLine.style.display = 'none';
    pThirdFilterLine.style.display = 'none';
    postsContainer.innerHTML = '';
    return getDataWithFilters('Intercambiar').then((querySnapshot) => querySnapshot.forEach((doc) => postsContainer.appendChild(templatePosts(doc))));
  });

  btnThirdFilter.addEventListener('click', () => {
    pThirdFilterLine.style.display = 'block';
    pFirstFilterLine.style.display = 'none';
    pSecondFilterLine.style.display = 'none';
    postsContainer.innerHTML = '';
    getDataWithFilters('Donar').then((querySnapshot) => querySnapshot.forEach((doc) => postsContainer.appendChild(templatePosts(doc))));
  });

  createPublicationBtn.addEventListener('click', () => onNavigate('/publications'));

  return sectionHome;
};
