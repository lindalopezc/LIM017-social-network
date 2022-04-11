/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
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
  updateProfile,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
import { onNavigate } from './lib/ViewController.js';
import { app } from './main.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

// Función para traer los datos de un usuario activo:
if (auth.currentUser !== null) {
  auth.currentUser.providerData.forEach((profile) => {
    console.log(`Sign-in provider: ${profile.providerId}`);
    console.log(`Provider-specific UID: ${profile.uid}`);
    console.log(`Name: ${profile.displayName}`);
    console.log(`Email: ${profile.email}`);
    console.log(`Photo URL: ${profile.photoURL}`);
  });
}


// Veamos si es que funciona el observador.👀
onAuthStateChanged(auth, (user) => user);

export const getDataUser = () => {
  const userData = {};
  if (auth.currentUser !== null) {
    const user = auth.currentUser;
    console.log(user);
    userData.name = user.displayName;
    userData.email = user.email;
    userData.photoURL = user.photoURL;
    userData.emailVerified = user.emailVerified;
    userData.uid = user.uid;
  } else if (onAuthStateChanged(auth, (usuario) => usuario) != null) { // Sirvió el observador
    onAuthStateChanged(auth, (user) => {
      userData.name = user.displayName;
      userData.email = user.email;
      userData.photoURL = user.photoURL;
      userData.emailVerified = user.emailVerified;
      userData.uid = user.uid;
    });
  } else {
    console.log('no hay usuario');
  }
  console.log(userData);
  return userData;
};


// Aquí creamos una función que actualice los datos de usuario:
export const updatedDataUser = async (name, photo) => updateProfile(auth.currentUser, {
  displayName: name,
  photoURL: photo,
}).then(() => {
  alert('Se guardaron los datos');
}).catch((error) => {
  alert('No se pudo agregar sus datos');
});

// Función para registrar usuario:
export const createUser = async (
  registerEmail,
  registerPassword,
  wrongEmail,
  minPassword,
  registerErrorDefault,
  inputName,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      registerEmail.value,
      registerPassword.value,
    );
    const user = userCredential.user;
    const pMessage = document.createElement('p');
    pMessage.innerText = 'Hemos enviado un enlace a tu correo electrónico. ';
    (onNavigate('/login')).appendChild(pMessage);
    await sendEmailVerification(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

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
      if (user.emailVerified) {
        onNavigate('/home');
      } else {
        verifiedEmail.innerText = 'Por favor verifica tu correo para ingresar a Slowly';
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

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
          invalidEmail.innerText = 'El correo electrónico proporcionado esta siendo utilizado por otro miembro., verifica e intente de nuevo.';
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
