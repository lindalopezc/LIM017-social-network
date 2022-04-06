/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */

// import { onNavigate } from '../lib/ViewController.js';
// import { signOutFun } from '../authentication.js';
import { getData } from '../database.js';
import { Menu } from './Menu.js';
/* eslint-disable indent */
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



  const imageProfile = document.createElement('img');
  imageProfile.setAttribute('class', 'img-profile'); // Le añadí temporalmente la misma clase
  imageProfile.setAttribute('src', '../img/ejemplo-foto-perfil.jpg');

  const titleHome = document.createElement('p');
  titleHome.textContent = 'Margarita Contreras';

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
  imgBtn.setAttribute('src', '../img/write.png');
  imgBtn.setAttribute('class', 'img-btn');
  createPublicationBtn.appendChild(imgBtn);

  divCreatePublication.appendChild(createPublicationText);
  divCreatePublication.appendChild(createPublicationBtn);



  const postsContainer = document.createElement('div');
  postsContainer.setAttribute('class', 'div-posts');

  divCentralHome.appendChild(divCreatePublication);
  divCentralHome.appendChild(postsContainer);

  sectionHome.appendChild(divTitleHome);
  sectionHome.appendChild(divCentralHome);

  getData().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      postsContainer.innerHTML += `<section class = "section-post" id = "${doc.id}">
      <div class = "div-category-post">
        <p class = "category-post ${doc.data().Categoría}">${doc.data().Categoría}</p>

      </div>
        <div class ="container-post">
          <div class = "title-and-icons">
            <div class ="div-title">
              <p>${doc.data().Título}</p>
            </div>
            <div class = "div-icons">
              <img class = "img-profile-post" src = "../img/ejemplo-foto-perfil.jpg">
              <img class = "icon-contact-post" src = "../img/perfil.png">
            </div>
          </div>
          <div class = "div-img-post">
            <img class = "img-post" src = ${doc.data().Foto}>
          </div>
          <div class = "description-like-post">
            <div class = "description-post">
              <p>${doc.data().Description}</p>
            </div>
            <div class ="state-like-post">
              <p>Estado</p>
              <p>${doc.data().Estado}</p>
              <img class = "icon-like-post" src="../img/heart.png">
            </div>
          </div>
        </div>
      </section>`;

    });
  });

  return sectionHome;
};