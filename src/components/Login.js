/* eslint-disable import/no-unresolved */
/* eslint-disable no-multi-spaces */
/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable spaced-comment */
/* eslint-disable max-len */

import { onNavigate } from '../lib/ViewController.js';
import { signIn, signGoogle } from '../authentication.js';



export const login = () => {
    const loginSection = document.createElement('section');
    loginSection.setAttribute('id', 'login-section');
    const firstDiv = document.createElement('div');
    const logo = document.createElement('img');
    logo.setAttribute('src', './img/LETRAS1.png');
    logo.setAttribute('alt', 'logo');
    logo.setAttribute('class', 'logo');
    const loginTitle = document.createElement('h4');
    loginTitle.textContent = 'Iniciar Sesión';

    firstDiv.appendChild(logo);
    firstDiv.appendChild(loginTitle);

    const secondDiv = document.createElement('div');
    const formLogin = document.createElement('form');
    formLogin.setAttribute('action', ''); // Falta especificar el valor de action
    formLogin.setAttribute('class', 'form');
    secondDiv.appendChild(formLogin);

    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('placeholder', 'Email');
    inputEmail.setAttribute('class', 'input');
    inputEmail.setAttribute('id', 'login-email');

    const divInvalidEmail = document.createElement('div');
    const pInvalidEmail = document.createElement('p');
    pInvalidEmail.setAttribute('id', 'invalid-email');
    divInvalidEmail.appendChild(pInvalidEmail);

    const inputPassword = document.createElement('input');
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('placeholder', 'Contraseña');
    inputPassword.setAttribute('class', 'input');
    inputPassword.setAttribute('id', 'login-password');

    const divInvalidPassword = document.createElement('div');
    const pInvalidPassword = document.createElement('p');
    pInvalidPassword.setAttribute('id', 'invalid-password');
    divInvalidPassword.appendChild(pInvalidPassword);

    const loginBtn = document.createElement('input');
    loginBtn.setAttribute('type', 'button');
    loginBtn.setAttribute('class', 'button');
    loginBtn.setAttribute('value', 'Iniciar sesión');
    loginBtn.setAttribute('id', 'login-btn');

    const divErrorDefault = document.createElement('div');
    const pErrorDefault = document.createElement('p');
    pErrorDefault.setAttribute('class', 'error-default');
    pErrorDefault.setAttribute('id', 'login-error-default');
    divErrorDefault.appendChild(pErrorDefault);

    formLogin.appendChild(inputEmail);
    formLogin.appendChild(divInvalidEmail);
    formLogin.appendChild(inputPassword);
    formLogin.appendChild(divInvalidPassword);
    formLogin.appendChild(loginBtn);
    formLogin.appendChild(divErrorDefault);

    const thirdDiv = document.createElement('div');

    const pTextBottom = document.createElement('p');
    pTextBottom.setAttribute('class', 'text-bottom');
    pTextBottom.textContent = 'o con tu cuenta de gmail';

    const divSocialNetworks = document.createElement('div');
    divSocialNetworks.setAttribute('id', 'social-networks');

    const aLinkGoogle = document.createElement('a');
    aLinkGoogle.setAttribute('href', '#');
    const imgGoogle = document.createElement('img');
    imgGoogle.setAttribute('src', 'img/google.png');
    imgGoogle.setAttribute('alt', 'google logo');
    imgGoogle.className = 'img-networks sign-google';

    aLinkGoogle.appendChild(imgGoogle);
    divSocialNetworks.appendChild(aLinkGoogle);

    const pLittleTextBottom = document.createElement('p');
    pLittleTextBottom.setAttribute('class', 'text-bottom');
    pLittleTextBottom.textContent = '¿No tienes cuenta?';

    const span = document.createElement('span');
    const aLinkRegister = document.createElement('a');
    aLinkRegister.setAttribute('href', '/register');
    aLinkRegister.setAttribute('id', 'link-register');
    aLinkRegister.setAttribute('class', 'links');
    aLinkRegister.textContent = 'Regístrate';

    span.appendChild(aLinkRegister);
    pLittleTextBottom.appendChild(span);

    thirdDiv.appendChild(pTextBottom);
    thirdDiv.appendChild(divSocialNetworks);
    thirdDiv.appendChild(pLittleTextBottom);

    loginSection.appendChild(firstDiv);
    loginSection.appendChild(secondDiv);
    loginSection.appendChild(thirdDiv);

    aLinkRegister.addEventListener('click', () => onNavigate('/register'));
    loginBtn.addEventListener('click', signIn);
    aLinkGoogle.addEventListener('click', signGoogle);

    return loginSection;
}