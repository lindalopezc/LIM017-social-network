/* eslint-disable import/no-cycle */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */

import { onNavigate } from "../lib/ViewController.js";
import { createUser, signGoogle } from "../authentication.js";

/* eslint-disable max-len */
export const register = () => {
    const registerSection = document.createElement('section');
    registerSection.setAttribute('id', 'register-section');
    const firstDiv = document.createElement('div');
    const logo = document.createElement('img');
    logo.setAttribute('src', './img/LETRAS1.png');
    logo.setAttribute('alt', 'logo');
    logo.setAttribute('class', 'logo');
    const registerTitle = document.createElement('h4');
    registerTitle.textContent = 'Regístrate';

    firstDiv.appendChild(logo);
    firstDiv.appendChild(registerTitle);

    const secondDiv = document.createElement('div');
    const formRegister = document.createElement('form');
    formRegister.setAttribute('action', ''); // Falta especificar el valor de action
    formRegister.setAttribute('class', 'form');
    secondDiv.appendChild(formRegister);

    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('placeholder', 'Nombre');
    inputName.setAttribute('class', 'input');
    inputName.setAttribute('id', 'register-name');

    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('placeholder', 'Email');
    inputEmail.setAttribute('class', 'input');
    inputEmail.setAttribute('id', 'register-email');

    const divWrongEmail = document.createElement('div');
    const pWrongEmail = document.createElement('p');
    pWrongEmail.setAttribute('id', 'wrong-email');
    divWrongEmail.appendChild(pWrongEmail);

    const inputPassword = document.createElement('input');
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('placeholder', 'Contraseña');
    inputPassword.setAttribute('class', 'input');
    inputPassword.setAttribute('id', 'register-password');

    const divMinPassword = document.createElement('div');
    const pMinPassword = document.createElement('p');
    pMinPassword.setAttribute('id', 'min-password');
    pMinPassword.textContent = 'Mínimo 6 caracteres';
    divMinPassword.appendChild(pMinPassword);

    const inputConfirmPassword = document.createElement('input');
    inputConfirmPassword.setAttribute('type', 'password');
    inputConfirmPassword.setAttribute('placeholder', 'Confirmar contraseña');
    inputConfirmPassword.setAttribute('class', 'input');
    inputConfirmPassword.setAttribute('id', 'register-confirm');

    const divWrongPassword = document.createElement('div');
    const pWrongPassword = document.createElement('p');
    pWrongPassword.setAttribute('id', 'wrong-password');
    divWrongPassword.appendChild(pWrongPassword);

    const registerBtn = document.createElement('input');
    registerBtn.setAttribute('type', 'button');
    registerBtn.setAttribute('class', 'button');
    registerBtn.setAttribute('value', 'Regístrate');
    registerBtn.setAttribute('id', 'register-btn');

    const divErrorDefault = document.createElement('div');
    const pErrorDefault = document.createElement('p');
    pErrorDefault.setAttribute('class', 'error-default');
    pErrorDefault.setAttribute('id', 'register-error-default');
    divErrorDefault.appendChild(pErrorDefault);

    formRegister.appendChild(inputName);
    formRegister.appendChild(inputEmail);
    formRegister.appendChild(divWrongEmail);
    formRegister.appendChild(inputPassword);
    formRegister.appendChild(divMinPassword);
    formRegister.appendChild(inputConfirmPassword);
    formRegister.appendChild(divWrongPassword);
    formRegister.appendChild(registerBtn);
    formRegister.appendChild(divErrorDefault);

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
    pLittleTextBottom.textContent = 'Ya tengo una cuenta.';

    const span = document.createElement('span');
    const aLinkLogin = document.createElement('a');
    aLinkLogin.setAttribute('href', '/login');
    aLinkLogin.setAttribute('id', 'link-login');
    aLinkLogin.setAttribute('class', 'links');
    aLinkLogin.text = 'Iniciar sesión';

    span.appendChild(aLinkLogin);
    pLittleTextBottom.appendChild(span);

    thirdDiv.appendChild(pTextBottom);
    thirdDiv.appendChild(divSocialNetworks);
    thirdDiv.appendChild(pLittleTextBottom);

    registerSection.appendChild(firstDiv);
    registerSection.appendChild(secondDiv);
    registerSection.appendChild(thirdDiv);

    aLinkLogin.addEventListener('click', () => onNavigate('/login'));
    registerBtn.addEventListener('click', () => createUser(inputEmail, inputPassword, pWrongEmail, pMinPassword, pErrorDefault));
    aLinkGoogle.addEventListener('click', signGoogle);

    return registerSection;

};