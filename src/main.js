/* eslint-disable object-curly-newline */
/* eslint-disable import/named */
/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */
/* eslint-disable indent */
import {
    createUser,
    signIn,
    signGoogle,
    // signFacebook
 } from './authentication.js';

document.getElementById('link-login').addEventListener('click', () => {
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
});
document.getElementById('link-register').addEventListener('click', () => {
    document.getElementById('register-section').style.display = 'block';
    document.getElementById('login-section').style.display = 'none';
});

// Inputs de correo y contraseña de sección Regístrate:
export const registerEmail = document.getElementById('register-email');
export const registerPassword = document.getElementById('register-password');

// Inputs de correo y contraseña de sección Iniciar Sesión:
export const loginEmail = document.getElementById('login-email');
export const loginPassword = document.getElementById('login-password');

// Implementando el evento de botón Regístrate y para iniciar sesión:
document.getElementById('register-btn').addEventListener('click', createUser);
document.getElementById('login-btn').addEventListener('click', signIn);

// Llamando al contenedor de errores:
export const wrongPassword = document.getElementById('wrong-password');
export const wrongEmail = document.getElementById('wrong-email');
export const minPassword = document.getElementById('min-password');
export const invalidEmail = document.getElementById('invalid-email');
export const invalidPassword = document.getElementById('invalid-password');
export const errorDefault = document.getElementsByClassName('error-default');

// Implementamos evento de botón 'Google':
document.getElementsByClassName('sign-google')[0].addEventListener('click', signGoogle);
document.getElementsByClassName('sign-google')[1].addEventListener('click', signGoogle);

// Implementamos evento de botón 'Facebook':
// document.getElementsByClassName('sign-facebook')[0].addEventListener('click', signFacebook);
// document.getElementsByClassName('sign-facebook')[1].addEventListener('click', signFacebook);