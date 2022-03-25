/* eslint-disable import/no-cycle */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable spaced-comment */
/* eslint-disable semi */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import { onNavigate } from "../lib/ViewController.js";

export const welcome = () => {

    const welcomeSection = document.createElement('section');
    const divImg = document.createElement('div');
    const welcomeImg = document.createElement('img');
    welcomeImg.setAttribute('src', './img/LETRAS1.png');
    welcomeImg.setAttribute('alt', 'Imagen de bienvenida');
    welcomeImg.setAttribute('class', 'logo'); //Cambiar por clase o id, temporal

    divImg.appendChild(welcomeImg);

    const divBtn = document.createElement('div');
    divBtn.setAttribute('class', 'div-btn');

    const loginBtn = document.createElement('button');
    loginBtn.textContent = 'Inicia sesión';
    loginBtn.setAttribute('class', 'button');

    const registerBtn = document.createElement('button');
    registerBtn.textContent = 'Regístrate';
    registerBtn.setAttribute('class', 'button');

    divBtn.appendChild(loginBtn);
    divBtn.appendChild(registerBtn);

    welcomeSection.appendChild(divImg);
    welcomeSection.appendChild(divBtn);

    loginBtn.addEventListener('click', () => onNavigate('/login'));
    registerBtn.addEventListener('click', () => onNavigate('/register'));

    return welcomeSection;
}