/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */

import { onNavigate } from '../lib/ViewController.js';
import { signOutFun } from '../authentication.js';
import { getData } from '../database.js';

/* eslint-disable indent */
export const home = () => {
  const sectionHome = document.createElement('section');
  sectionHome.setAttribute('id', 'section-home');

  const divTitleHome = document.createElement('div');
  divTitleHome.setAttribute('class', 'div-nav');

  const titleHome = document.createElement('h1');
  titleHome.textContent = 'Bienvenid@';

  const navMenu = document.createElement('nav');
  navMenu.setAttribute('class', 'navResponsive');
  const navBtn = document.createElement('button');
  navBtn.setAttribute('class', 'btnBars');
  const imgMenu = document.createElement('img');
  imgMenu.setAttribute('src', '../img/menu.png');
  imgMenu.setAttribute('class', 'img-menu');

  navBtn.appendChild(imgMenu);

  navMenu.appendChild(navBtn);

  divTitleHome.appendChild(titleHome);
  divTitleHome.appendChild(navMenu);

  const divButtons = document.createElement('div');
  divButtons.setAttribute('class', 'div-buttons');
  const btn = document.createElement('button');
  btn.setAttribute('class', 'button');
  btn.textContent = 'Publicar';

  const btnSignout = document.createElement('button');
  btnSignout.setAttribute('class', 'button');
  btnSignout.textContent = 'Cerrar sesión';

  divButtons.appendChild(btn);
  divButtons.appendChild(btnSignout);

  const divPost = document.createElement('div');
  divPost.setAttribute('class', 'div-posts');

  sectionHome.appendChild(divTitleHome);
  sectionHome.appendChild(divButtons);
  sectionHome.appendChild(divPost);

  getData().then((querySnapshot) => { // Me salió en consola que se estaba ejecutando un ciclo.
    querySnapshot.forEach((doc) => {
      divPost.innerHTML += `<div>
      <img class = "img-post" src = ${doc.data().Foto}>
      </div>
      <div class = "elements-post">
      <p>${doc.data().Título}</p>
      <p>${doc.data().Categoría}</p>
      <p>${doc.data().Estado}</p>
      <p>${doc.data().Description}</p>
      </div>`;
    });
  });

  btn.addEventListener('click', () => onNavigate('/publications'));
  btnSignout.addEventListener('click', () => signOutFun());

  return sectionHome;
};