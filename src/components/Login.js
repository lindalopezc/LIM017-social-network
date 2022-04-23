/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../lib/ViewController.js';
import { signGoogle, signIn } from '../lib/index.js';

export const login = () => {
  const loginSection = document.createElement('section');
  loginSection.setAttribute('id', 'login-section');

  const divPhoto = document.createElement('div');
  divPhoto.setAttribute('class', 'div-photo');
  divPhoto.setAttribute('id', 'div-photo-login');

  const divLogin = document.createElement('div');
  divLogin.setAttribute('class', 'div-contain');

  const firstDiv = document.createElement('div');
  const divLogo = document.createElement('div');
  divLogo.setAttribute('class', 'div-logo');
  divLogo.setAttribute('id', 'logo-login');
  const logo = document.createElement('img');
  logo.setAttribute('src', './img/LETRAS1.png');
  logo.setAttribute('alt', 'logo');
  logo.setAttribute('class', 'logo');
  const loginTitle = document.createElement('h4');
  loginTitle.setAttribute('class', 'title-register-login');
  loginTitle.textContent = 'Iniciar Sesión';

  divLogo.appendChild(logo);
  firstDiv.appendChild(divLogo);
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
  inputEmail.setAttribute('autocomplete', 'useremail');

  const divInvalidEmail = document.createElement('div');
  divInvalidEmail.setAttribute('class', 'div-little-messages');
  const pInvalidEmail = document.createElement('p');
  pInvalidEmail.setAttribute('id', 'invalid-email');
  divInvalidEmail.appendChild(pInvalidEmail);

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  inputPassword.setAttribute('class', 'input');
  inputPassword.setAttribute('id', 'login-password');
  inputPassword.setAttribute('autocomplete', 'currentpassword');

  const divInvalidPassword = document.createElement('div');
  divInvalidPassword.setAttribute('class', 'div-little-messages');
  const pInvalidPassword = document.createElement('p');
  pInvalidPassword.setAttribute('id', 'invalid-password');
  divInvalidPassword.appendChild(pInvalidPassword);

  const loginBtn = document.createElement('input');
  loginBtn.setAttribute('type', 'button');
  loginBtn.setAttribute('class', 'button');
  loginBtn.setAttribute('value', 'Iniciar sesión');
  loginBtn.setAttribute('id', 'login-btn');

  const divErrorDefault = document.createElement('div');
  divErrorDefault.setAttribute('class', 'div-little-messages');
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
  pLittleTextBottom.textContent = '¿No tienes cuenta? ';

  const span = document.createElement('span');
  const aLinkRegister = document.createElement('a');
  aLinkRegister.setAttribute('href', '/register');
  aLinkRegister.setAttribute('id', 'link-register');
  aLinkRegister.setAttribute('class', 'links');
  aLinkRegister.textContent = 'Regístrate';

  const divEmailVerified = document.createElement('div');
  const pEmailVerified = document.createElement('p');
  pEmailVerified.setAttribute('id', 'verified-email');
  divEmailVerified.appendChild(pEmailVerified);
  span.appendChild(aLinkRegister);
  pLittleTextBottom.appendChild(span);

  thirdDiv.appendChild(pTextBottom);
  thirdDiv.appendChild(divSocialNetworks);
  thirdDiv.appendChild(pLittleTextBottom);
  thirdDiv.appendChild(divEmailVerified);

  divLogin.appendChild(firstDiv);
  divLogin.appendChild(secondDiv);
  divLogin.appendChild(thirdDiv);

  loginSection.appendChild(divPhoto);
  loginSection.appendChild(divLogin);

  aLinkRegister.addEventListener('click', () => onNavigate('/register'));
  aLinkGoogle.addEventListener('click', () => signGoogle().then(() => onNavigate('/home')));
  loginBtn.addEventListener('click', () => {
    signIn(inputEmail.value, inputPassword.value)
      .then((user) => {
        if (user.emailVerified) {
          onNavigate('/home');
        } else {
          pEmailVerified.innerText = 'Por favor verifica tu correo para ingresar a Slowly';
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        switch (errorCode) {
          case 'auth/user-not-found':
            pInvalidEmail.innerText = 'No hay usuario registrado con ese correo., verifica e intente de nuevo.';
            inputEmail.style.borderColor = '#F62D2D';
            break;
          case 'auth/invalid-email':
            pInvalidEmail.textContent = 'El correo ingresado es inválido.';
            inputEmail.style.borderColor = '#F62D2D';
            break;
          case 'auth/wrong-password':
            pInvalidPassword.innerText = 'La contraseña no es válida, verifica e intente de nuevo.';
            inputPassword.style.borderColor = '#F62D2D';
            break;
          case 'auth/email-already-exists':
            pInvalidEmail.innerText = 'El correo electrónico proporcionado esta siendo utilizado por otro miembro, verifica e intente de nuevo.';
            inputEmail.style.borderColor = '#F62D2D';
            break;
          default:
            pErrorDefault.innerText = errorCode;
        }
      });
  });
  return loginSection;
};
