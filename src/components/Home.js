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

  const userData = getUserLocalStorage(); // Aquí llamamos la función que trae datos user.

  const imageProfile = document.createElement('img');
  imageProfile.setAttribute('class', 'img-profile'); // Le añadí temporalmente la misma clase
  const iconDefault = '../img/user.png';
  imageProfile.setAttribute('src', `${userData.photoURL ? userData.photoURL : iconDefault}`);

  const titleHome = document.createElement('p');
  titleHome.textContent = userData.displayName; // Aquí traigo el nombre del usuario.

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

  // Creamos in div que contenga los párrafos de categoría:
  const divFilters = document.createElement('div');
  divFilters.setAttribute('class', 'div-filters');

  // Creamos dos 'p' que van a ser hijos de 'btn' para el primer filtro:
  const pFirstFilter = document.createElement('p');
  pFirstFilter.textContent = 'Vender';
  const pFirstFilterLine = document.createElement('p');
  pFirstFilterLine.setAttribute('id', 'first-filter-line');

  const btnFirstFilter = document.createElement('button');
  btnFirstFilter.setAttribute('class', 'btn-filters');
  btnFirstFilter.appendChild(pFirstFilter);
  btnFirstFilter.appendChild(pFirstFilterLine);

  // Creamos dos 'p' que van a ser hijos de 'btn' para el segundo filtro:

  const pSecondFilter = document.createElement('p');
  pSecondFilter.textContent = 'Intercambiar';
  const pSecondFilterLine = document.createElement('p');
  pSecondFilterLine.setAttribute('id', 'second-filter-line');

  const btnSecondFilter = document.createElement('button');
  btnSecondFilter.setAttribute('class', 'btn-filters');
  btnSecondFilter.appendChild(pSecondFilter);
  btnSecondFilter.appendChild(pSecondFilterLine);

  // Creamos dos 'p' que van a ser hijos de 'btn' para el tercer filtro:
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

  // Creamos un div padre para divFilters y divCreatePublication:
  const divPublicationsFilters = document.createElement('div');
  divPublicationsFilters.setAttribute('class', 'div-publications-filters');

  divPublicationsFilters.appendChild(divCreatePublication);
  divPublicationsFilters.appendChild(divFilters);

  // Div que contiene todos los posts:
  const postsContainer = document.createElement('div');
  postsContainer.setAttribute('class', 'div-posts');

  divCentralHome.appendChild(divPublicationsFilters);
  divCentralHome.appendChild(postsContainer);

  sectionHome.appendChild(divTitleHome);
  sectionHome.appendChild(divCentralHome);

  // Llamamos a la función que nos traerá todos los posts:
  getData().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      postsContainer.appendChild(templatePosts(doc));
    });
  });

  // Evento para filtrar por categoría 'Vender':
  btnFirstFilter.addEventListener('click', () => {
    pFirstFilterLine.style.display = 'block';
    pSecondFilterLine.style.display = 'none';
    pThirdFilterLine.style.display = 'none';
    getDataWithFilters('Vender').then((querySnapshot) => {
      postsContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        postsContainer.appendChild(templatePosts(doc));
      });
    });
  });

  // Evento para filtrar por categoría 'Intercambiar':
  btnSecondFilter.addEventListener('click', () => {
    pSecondFilterLine.style.display = 'block';
    pFirstFilterLine.style.display = 'none';
    pThirdFilterLine.style.display = 'none';
    getDataWithFilters('Intercambiar').then((querySnapshot) => {
      postsContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        postsContainer.appendChild(templatePosts(doc));
      });
    });
  });

  // Evento para filtrar por categoría 'Donar':
  btnThirdFilter.addEventListener('click', () => {
    pThirdFilterLine.style.display = 'block';
    pFirstFilterLine.style.display = 'none';
    pSecondFilterLine.style.display = 'none';
    getDataWithFilters('Donar').then((querySnapshot) => {
      postsContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        postsContainer.appendChild(templatePosts(doc));
      });
    });
  });

  // Evento para el botón de crear publicaciones:
  createPublicationBtn.addEventListener('click', () => onNavigate('/publications'));

  return sectionHome;
};
