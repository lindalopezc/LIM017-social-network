/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */
/* eslint-disable indent */
import { createUser } from './authentication.js';

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

// Implementando el evento de botón Regístrate:
document.getElementById('register-btn').addEventListener('click', createUser);

// Llamando al contenedor de errores:
export const wrongPassword = document.getElementById('wrong-password');
export const wrongEmail = document.getElementById('wrong-email');
export const minPassword = document.getElementById('min-password');
export const invalidEmail = document.getElementById('invalid-email');
export const invalidPassword = document.getElementById('invalid-password');
export const errorDefault = document.getElementsByClassName('error-default');
