/* eslint-disable no-fallthrough */
/* eslint-disable import/no-cycle */
/* eslint-disable object-curly-newline */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable import/newline-after-import */
/* eslint-disable indent */
import { wrongEmail, // hemos borrado wrongPassword por ahora
        invalidEmail,
        invalidPassword,
        errorDefault,
        registerEmail,
        registerPassword,
        loginEmail,
        loginPassword,
        minPassword } from "../main.js";

export const authError = (code) => {
    switch (code) {
    case 'auth/email-already-in-use':
        wrongEmail.innerText = 'El correo ingresado ya está en uso';
        registerEmail.style.borderColor = '#F62D2D';
        break
    case 'auth/weak-password':
        minPassword.style.color = 'red'
        minPassword.innerText = 'Debe ingresar al menos 6 caracteres.';
        registerPassword.style.borderColor = '#F62D2D';
        break;
    case 'auth/invalid-email':
        wrongEmail.innerText = 'El correo ingresado es inválido';
        registerEmail.style.borderColor = '#F62D2D';
        break;
    case 'auth/user-not-found':
        invalidEmail.innerText = 'No hay usuario registrado con ese correo., verifica e intente de nuevo.';
        loginEmail.style.borderColor = '#F62D2D';
        break;
    case 'auth/wrong-password':
        invalidPassword.innerText = 'La contraseña no es válida, verifica e intente de nuevo.';
        loginPassword.style.borderColor = '#F62D2D';
        break;
    case 'auth/email-already-exists':
        invalidEmail.innerText = 'El correo electrónico proporcionado esta siendo utilizado por otro miembro., verifica e intente de nuevo.';
        loginEmail.style.borderColor = '#F62D2D';
       break;
    default:
        errorDefault.innerText = code;
    }
}