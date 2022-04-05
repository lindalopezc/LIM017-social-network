// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../lib/ViewController.js';

export const Menu = () => {
  const navResponsive = document.createElement('nav');
  navResponsive.setAttribute('class', 'navResponsive');
  const template = `<button class="btnBars">
  <img src="./img/menu.png" alt="" class="img-menu">
  </button>
  <ul class="navMenu navMenuHide">
    <li class="navMenuItem"><a class="navMenuLink navMenuLinkActive" href="/home">Inicio</a></li>
    <li class="navMenuItem"><a class="navMenuLink" href="/publications">Publicar</a></li>
    <li class="navMenuItem"><a class="navMenuLink" href="/">Perfil</a></li>
    <li class="navMenuItem"><a class="navMenuLink" href="/">Cerrar sesión</a></li>
  </ul>`;
  navResponsive.innerHTML = template;
  const btnBars = navResponsive.querySelector('.btnBars');
  const navMenu = navResponsive.querySelector('.navMenu');
  const navMenuLink = navResponsive.querySelector('.navMenuLink');

  btnBars.addEventListener('click', () => {
    navMenu.classList.toggle('navMenuHide');
  });

  navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('navMenuHide');
  });
  navMenuLink.addEventListener('click', (e) => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    onNavigate(href);
  });
  return navResponsive;
};