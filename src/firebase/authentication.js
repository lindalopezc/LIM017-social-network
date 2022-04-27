/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
} from './firebase-utils.js';
import { auth, provider } from './main.js';

// Función que almacena los campos del user al localStorage.
export const setUserLocalStorage = (user) => localStorage.setItem('user', JSON.stringify({ // para que se guarde en el localStorage debe ser un string y para eso utilizamos JSON.stringify
  uid: user.uid,
  displayName: user.displayName,
  email: user.email,
  photoURL: user.photoURL,
}));

// Función que nos devuelve los datos del user:
export const getUserLocalStorage = () => JSON.parse(localStorage.getItem('user'));

// Función para registrarse sin google:
export const createUserFirebase = (registerEmail, registerPassword) => createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

// Función para enviar enlace a correo.
export const sendEmailFirebase = (user) => sendEmailVerification(user);

// Función para inicio de sesión:
export const signInFirebase = (loginEmail, loginPassword) => signInWithEmailAndPassword(auth, loginEmail, loginPassword);

// Autenticación con Google:
export const signGoogleFirebase = () => signInWithPopup(auth, provider);

// Función para cerrar sesión
export const signOutFun = () => signOut(auth);
