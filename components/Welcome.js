/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/ViewController.js';

export const welcome = () => {
  const welcomeSection = document.createElement('section');
  welcomeSection.setAttribute('id', 'welcome-section');

  const divPhoto = document.createElement('div');
  divPhoto.setAttribute('class', 'div-photo');

  const divWelcome = document.createElement('div');
  divWelcome.setAttribute('class', 'div-contain');

  const divLogo = document.createElement('div');
  divLogo.setAttribute('class', 'div-logo');
  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('src', '../img/logoblanco.png');
  imgLogo.setAttribute('alt', 'Imagen de bienvenida');
  imgLogo.setAttribute('class', 'logo');
  divLogo.appendChild(imgLogo);

  const divTextWelcome = document.createElement('div');
  divTextWelcome.setAttribute('id', 'div-text-welcome');
  divTextWelcome.textContent = 'Únete a esta comunidad y dale una segunda oportunidad a las prendas que ya no uses.';

  const divBtn = document.createElement('div');
  divBtn.setAttribute('class', 'div-btn');

  const loginBtn = document.createElement('button');
  loginBtn.textContent = 'Inicia sesión';
  loginBtn.setAttribute('class', 'button');
  loginBtn.setAttribute('id', 'login-btn-welcome');

  const registerBtn = document.createElement('button');
  registerBtn.textContent = 'Regístrate';
  registerBtn.setAttribute('class', 'button');
  registerBtn.setAttribute('id', 'register-btn-welcome');

  divBtn.appendChild(loginBtn);
  divBtn.appendChild(registerBtn);

  divWelcome.appendChild(divLogo);
  divWelcome.appendChild(divTextWelcome);
  divWelcome.appendChild(divBtn);

  welcomeSection.appendChild(divPhoto);
  welcomeSection.appendChild(divWelcome);

  loginBtn.addEventListener('click', () => onNavigate('/login'));
  registerBtn.addEventListener('click', () => onNavigate('/register'));

  return welcomeSection;
};
