/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import {
  createUserFirebase,
  sendEmailFirebase,
  setUserLocalStorage,
  getUserLocalStorage,
  signGoogleFirebase,
  signInFirebase,
} from '../firebase/authentication.js';
import { insertDataUser, getDataUsers } from '../firebase/database.js';

// Se redifinió la función createUser:
export const createUser = async (registerEmail, registerPassword, name) => {
  const userCredential = await createUserFirebase(registerEmail, registerPassword);
  const user = userCredential.user;
  user.displayName = name;
  user.photoURL = '../img/user.png';
  setUserLocalStorage(user);
  const dataUser = getUserLocalStorage();
  insertDataUser(dataUser);
  sendEmailFirebase(user);
  return user;
};
// Se redifinió la función signIn, pero sin pasar como parámetros a los inputs
export const signIn = async (loginEmail, loginPassword) => {
  const userCredential = await signInFirebase(loginEmail, loginPassword);
  const user = userCredential.user;
  getDataUsers(user.uid)
    .then((result) => {
      if (!result.empty) {
        const userData = result.docs[0].data();
        setUserLocalStorage(userData);
      }
    });
  return user;
};

// Función para iniciar sesión con Google:
export const signGoogle = async () => {
  const result = await signGoogleFirebase();
  const user = result.user;
  setUserLocalStorage(user);
  const dataUser = getUserLocalStorage();
  insertDataUser(dataUser);
  return user;
};
