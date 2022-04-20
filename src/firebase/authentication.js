/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { auth, provider } from './main.js';

// Función que almacena los campos del user al localStorage.
export const setUserLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify({ // para que se guarde en el localStorage debe ser un string y para eso utilizamos JSON.stringify
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  }));
};

// Función que nos devuelve los datos del user:
export const getUserLocalStorage = () => JSON.parse(localStorage.getItem('user'));

// Función para registrarse sin google:
export const createUser = async (registerEmail, registerPassword, name) => {
  const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
  const user = userCredential.user;
  user.displayName = name;
  user.photoURL = '../img/user.png';
  return user;
};

// Función para enviar enlace a correo.
export const sendEmail = (user) => sendEmailVerification(user);

// Función para inicio de sesión:
export const signIn = async (loginEmail, loginPassword) => {
  const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  const user = userCredential.user;
  return user;
};

// Autenticación con Google:
export const signGoogle = () => signInWithPopup(auth, provider);

// Función para cerrar sesión
export const signOutFun = () => signOut(auth);
