/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
} from './firebase-utils.js';
import { auth, provider } from './main.js';

export const setUserLocalStorage = (user) => localStorage.setItem('user', JSON.stringify({
  uid: user.uid,
  displayName: user.displayName,
  email: user.email,
  photoURL: user.photoURL,
}));

export const getUserLocalStorage = () => JSON.parse(localStorage.getItem('user'));
export const createUserFirebase = (registerEmail, registerPassword) => createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
export const sendEmailFirebase = (user) => sendEmailVerification(user);
export const signInFirebase = (loginEmail, loginPassword) => signInWithEmailAndPassword(auth, loginEmail, loginPassword);
export const signGoogleFirebase = () => signInWithPopup(auth, provider);
export const signOutFun = () => signOut(auth);
