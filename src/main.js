/* eslint-disable object-curly-newline */
/* eslint-disable import/named */
/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */
/* eslint-disable indent */
// import {
//     // signFacebook
// } from './authentication.js';

// Inputs de correo y contraseña de sección Regístrate:
// const inputEmail = document.getElementById('register-email');
// export const registerEmail = (inputEmail) ? inputEmail.value : 'hola';

// const inputPassword = document.getElementById('register-password');
// export const registerPassword = (inputPassword) ? inputPassword.value : 'hola';

// // Inputs de correo y contraseña de sección Iniciar Sesión:
// const inputLoginEmail = document.getElementById('login-email');
// export const loginEmail = (inputLoginEmail) ? inputLoginEmail.value : 'hola';

// const inputLoginPassword = document.getElementById('login-password');
// export const loginPassword = (inputLoginPassword) ? inputLoginPassword.value : 'hola';

// Implementando el evento de botón Regístrate y para iniciar sesión:

// Llamando al contenedor de errores:
// export const wrongPassword = document.getElementById('wrong-password');
// export const wrongEmail = document.getElementById('wrong-email');
// export const minPassword = document.getElementById('min-password');
// export const invalidEmail = document.getElementById('invalid-email');
// export const invalidPassword = document.getElementById('invalid-password');
// export const loginErrorDefault = document.getElementById('login-error-default');
// export const registerErrorDefault = document.getElementById('register-error-default');

// Implementamos evento de botón 'Google':

// Implementamos evento de botón 'Facebook':
// document.getElementsByClassName('sign-facebook')[0].addEventListener('click', signFacebook);
// document.getElementsByClassName('sign-facebook')[1].addEventListener('click', signFacebook);
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAdfUjeKGbV3sdoMqcYIVg0pEzOBLaihlo',
  authDomain: 'slowly-la.firebaseapp.com',
  projectId: 'slowly-la',
  storageBucket: 'gs://slowly-la.appspot.com/',
  messagingSenderId: '612490900122',
  appId: '1:612490900122:web:ceaa8135a145c763e8e523',
  measurementId: 'G-6LCKZ9QZVS',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);