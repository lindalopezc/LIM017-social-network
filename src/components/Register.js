/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/ViewController.js';
import { createUser, signGoogle } from '../lib/index.js';
import { registerModal } from '../templates/modal.js';

/* eslint-disable max-len */
export const register = () => {
  const registerSection = document.createElement('section');
  registerSection.setAttribute('id', 'register-section');

  const divPhoto = document.createElement('div');
  divPhoto.setAttribute('class', 'div-photo');
  divPhoto.setAttribute('id', 'div-photo-register');

  const divRegister = document.createElement('div');
  divRegister.setAttribute('class', 'div-contain');

  const firstDiv = document.createElement('div');
  const divLogo = document.createElement('div');
  divLogo.setAttribute('class', 'div-logo');
  divLogo.setAttribute('id', 'logo-register');
  const logo = document.createElement('img');
  logo.setAttribute('src', './img/LETRAS1.png');
  logo.setAttribute('alt', 'logo');
  logo.setAttribute('class', 'logo');
  const registerTitle = document.createElement('h4');
  registerTitle.setAttribute('class', 'title-register-login');
  registerTitle.textContent = 'Regístrate';

  divLogo.appendChild(logo);
  firstDiv.appendChild(divLogo);
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
  inputName.setAttribute('autocomplete', 'username');

  const divMessageName = document.createElement('div');
  divMessageName.setAttribute('class', 'div-little-messages');
  const pMessageName = document.createElement('p');
  pMessageName.setAttribute('id', 'message-name');
  divMessageName.appendChild(pMessageName);

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'email');
  inputEmail.setAttribute('placeholder', 'Email');
  inputEmail.setAttribute('class', 'input');
  inputEmail.setAttribute('id', 'register-email');
  inputEmail.setAttribute('autocomplete', 'email');

  const divWrongEmail = document.createElement('div');
  divWrongEmail.setAttribute('class', 'div-little-messages');
  const pWrongEmail = document.createElement('p');
  pWrongEmail.setAttribute('id', 'wrong-email');
  divWrongEmail.appendChild(pWrongEmail);

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  inputPassword.setAttribute('class', 'input');
  inputPassword.setAttribute('id', 'register-password');
  inputPassword.setAttribute('autocomplete', 'new-password');

  const divMinPassword = document.createElement('div');
  divMinPassword.setAttribute('class', 'div-little-messages');
  const pMinPassword = document.createElement('p');
  pMinPassword.setAttribute('id', 'min-password');
  pMinPassword.textContent = 'Mínimo 6 caracteres';
  divMinPassword.appendChild(pMinPassword);

  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.setAttribute('type', 'password');
  inputConfirmPassword.setAttribute('placeholder', 'Confirmar contraseña');
  inputConfirmPassword.setAttribute('class', 'input');
  inputConfirmPassword.setAttribute('id', 'register-confirm');
  inputConfirmPassword.setAttribute('autocomplete', 'new-password');

  const divWrongPassword = document.createElement('div');
  divWrongPassword.setAttribute('class', 'div-little-messages');
  const pWrongPassword = document.createElement('p');
  pWrongPassword.setAttribute('id', 'wrong-password');
  divWrongPassword.appendChild(pWrongPassword);

  const registerBtn = document.createElement('input');
  registerBtn.setAttribute('type', 'button');
  registerBtn.setAttribute('class', 'button');
  registerBtn.setAttribute('value', 'Regístrate');
  registerBtn.setAttribute('id', 'register-btn');

  const divErrorDefault = document.createElement('div');
  divErrorDefault.setAttribute('class', 'div-little-messages');
  const pErrorDefault = document.createElement('p');
  pErrorDefault.setAttribute('class', 'error-default');
  pErrorDefault.setAttribute('id', 'register-error-default');
  divErrorDefault.appendChild(pErrorDefault);

  formRegister.appendChild(inputName);
  formRegister.appendChild(divMessageName);
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
  pTextBottom.textContent = 'o con tu cuenta de google';

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
  pLittleTextBottom.textContent = 'Ya tengo una cuenta. ';

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

  divRegister.appendChild(firstDiv);
  divRegister.appendChild(secondDiv);
  divRegister.appendChild(thirdDiv);

  registerSection.appendChild(divPhoto);
  registerSection.appendChild(divRegister);

  aLinkLogin.addEventListener('click', () => onNavigate('/login'));
  registerBtn.addEventListener('click', () => {
    if (inputName.value === '') { // Con esta condición el usuario debe ingresar su nombre de manera obligatoria.
      pMessageName.innerText = 'Campo vacío. Por favor escriba su nombre.';
    } else if (inputPassword.value !== inputConfirmPassword.value) { // Las contraseñas deben ser iguales.
      pWrongPassword.innerText = 'Las contraseñas no coinciden.';
    } else {
      createUser(inputEmail.value, inputPassword.value, inputName.value)
        .then(() => (onNavigate('/login')).appendChild(registerModal()))
        .catch((error) => {
          const errorCode = error.code;
          switch (errorCode) {
            case 'auth/email-already-in-use':
              pWrongEmail.innerText = 'El correo ingresado ya está en uso';
              inputEmail.style.borderColor = '#F62D2D';
              break;
            case 'auth/weak-password':
              pMinPassword.style.color = 'red';
              pMinPassword.innerText = 'Debe ingresar al menos 6 caracteres.';
              inputPassword.style.borderColor = '#F62D2D';
              break;
            case 'auth/invalid-email':
              pWrongEmail.textContent = 'El correo ingresado es inválido';
              inputEmail.style.borderColor = '#F62D2D';
              break;
            default:
              pErrorDefault.innerText = errorCode;
          }
        });
    }
  });
  aLinkGoogle.addEventListener('click', () => {
    signGoogle().then(() => {
      onNavigate('/home');
    });
  });

  return registerSection;
};
