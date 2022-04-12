/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendEmailVerification,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { onNavigate } from './lib/ViewController.js';
import { app } from './main.js';
import { insertDataUser, getDataUsers } from './database.js';

export const auth = getAuth();
const provider = new GoogleAuthProvider(app);

// Función que almacena los campos del user al localStorage.
export const setUserLocalStorage = (user) => {
  // para que esto se guarde en el localStorage debe ser
  // un string y para eso utilizamos JSON.stringify
  localStorage.setItem('user', JSON.stringify({
    uid: user.uid,
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    uid: user.uid,
  }));
};

// Función que nos devuelve los datos del user:
export const getUserLocalStorage = () => JSON.parse(localStorage.getItem('user'));

// Función para registrar usuario:
export const createUser = async (
  registerEmail,
  registerPassword,
  wrongEmail,
  minPassword,
  registerErrorDefault,
  name,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      registerEmail.value,
      registerPassword.value,
    );
    const user = userCredential.user;

    // Se añadirán estos campos porque el usuario no usó google.
    user.displayName = name;
    user.photoURL = './img/user.png';

    // Llamamos a la función que se encarga de subir los campos del user al localStorage.
    setUserLocalStorage(user);

    // Llamamos a la función que nos devuelve los datos del user del localStorage.
    const dataUsers = getUserLocalStorage();

    // Los datos traídos del localStorage son subidos a Database.
    insertDataUser(dataUsers);

    await sendEmailVerification(user);

    // Creamos un párrafo con mensaje para que el usuario vaya a su correo y verifique el link.
    const pMessage = document.createElement('p');
    pMessage.innerText = 'Hemos enviado un enlace a tu correo electrónico. ';
    (onNavigate('/login')).appendChild(pMessage);
  } catch (error) {
    const errorCode = error.code;
    switch (errorCode) {
      case 'auth/email-already-in-use':
        wrongEmail.innerText = 'El correo ingresado ya está en uso';
        registerEmail.style.borderColor = '#F62D2D';
        break;
      case 'auth/weak-password':
        minPassword.style.color = 'red';
        minPassword.innerText = 'Debe ingresar al menos 6 caracteres.';
        registerPassword.style.borderColor = '#F62D2D';
        break;
      case 'auth/invalid-email':
        wrongEmail.textContent = 'El correo ingresado es inválido';
        registerEmail.style.borderColor = '#F62D2D';
        break;
      default:
        registerErrorDefault.innerText = errorCode;
    }
  }
};

let datosUsuario;

// Función para inicio de sesión:
export const signIn = (
  loginEmail,
  loginPassword,
  invalidEmail,
  invalidPassword,
  loginErrorDefault,
  verifiedEmail,
) => {
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      getDataUsers(user.uid).then((result) => {
        if (!result.empty) {
          const userData = result.docs[0].data();
          setUserLocalStorage(userData);
        } else {
          console.log('usuario no regsitrado');
        }
      });
      if (user.emailVerified) {
        onNavigate('/home');
        // getDataUsers(user.uid); // Falta ver bien esto!!!!!
      } else {
        verifiedEmail.innerText = 'Por favor verifica tu correo para ingresar a Slowly';
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      switch (errorCode) {
        case 'auth/user-not-found':
          invalidEmail.innerText = 'No hay usuario registrado con ese correo., verifica e intente de nuevo.';
          loginEmail.style.borderColor = '#F62D2D';
          break;
        case 'auth/wrong-password':
          invalidPassword.innerText = 'La contraseña no es válida, verifica e intente de nuevo.';
          loginPassword.style.borderColor = '#F62D2D';
          break;
        case 'auth/email-already-exists':
          invalidEmail.innerText = 'El correo electrónico proporcionado esta siendo utilizado por otro miembro, verifica e intente de nuevo.';
          loginEmail.style.borderColor = '#F62D2D';
          break;
        default:
          loginErrorDefault.innerText = errorCode;
      }
    });
};

// Autenticación con Google:
export const signGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      // Los mismos pasos como en CreateUser
      setUserLocalStorage(user);
      const dataUsers = getUserLocalStorage();
      insertDataUser(dataUsers);

      onNavigate('/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

// Función para cerrar sesión
export const signOutFun = () => {
  signOut(auth).then(() => {
    console.log('Usted cerró sesión');
    onNavigate('/');
  }).catch((error) => {
    console.log('No se pudo cerrar seción');
  });
};
