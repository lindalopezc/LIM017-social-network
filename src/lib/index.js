import {
  createUserFirebase,
  sendEmailFirebase,
  setUserLocalStorage,
  getUserLocalStorage,
  signGoogleFirebase,
  signInFirebase,
} from '../firebase/authentication.js';
import { insertDataUser, getDataUsers } from '../firebase/database.js';

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
export const signGoogle = async () => {
  const result = await signGoogleFirebase();
  const user = result.user;
  setUserLocalStorage(user);
  const dataUser = getUserLocalStorage();
  insertDataUser(dataUser);
  return user;
};
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
