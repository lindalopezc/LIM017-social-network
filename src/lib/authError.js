/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable import/newline-after-import */
/* eslint-disable indent */
import { wrongPassword } from "../main.js";

export const authError = (message) => {
    switch (message) {
        case 'Firebase: Error (auth/email-already-in-use).':
            wrongPassword.innerText = 'El correo ingresado ya está en uso';
            break;
        case 'Firebase: Error (auth/invalid-email).':
            wrongPassword.innerText = 'El correo ingresado es inválido';
            break;
        case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
            wrongPassword.innerText = 'Debe ingresar al menos 6 caracteres.';
            break;
        default:
            return false;
    }
    return false;
}