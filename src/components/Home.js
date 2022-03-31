/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */

import { onNavigate } from '../lib/ViewController.js';
import { signOutFun } from '../authentication.js';

/* eslint-disable indent */
export const home = () => {
  const sectionHome = document.createElement('section');

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

  sectionHome.appendChild(divTitleHome);
  const divPost = document.createElement('div');
  divPost.setAttribute('class', 'div-post');
  const btn = document.createElement('button');
  btn.setAttribute('class', 'button');
  btn.textContent = 'publicar';

  const btnSignout = document.createElement('button');
  btnSignout.setAttribute('class', 'button');
  btnSignout.textContent = 'Cerrar sesión';

  divPost.appendChild(btn);
  divPost.appendChild(btnSignout);
  sectionHome.appendChild(divPost);

  btn.addEventListener('click', () => onNavigate('/publications'));
  btnSignout.addEventListener('click', () => signOutFun());

  return sectionHome;
};