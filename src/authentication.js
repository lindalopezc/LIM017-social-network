/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithRedirect,
    getRedirectResult,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
// import { authError } from './lib/authError.js';
import { onNavigate } from './lib/ViewController.js';
// import { registerEmail, registerPassword, loginEmail, loginPassword } from './main.js';

const firebaseConfig = {
    apiKey: 'AIzaSyAdfUjeKGbV3sdoMqcYIVg0pEzOBLaihlo',
    authDomain: 'slowly-la.firebaseapp.com',
    projectId: 'slowly-la',
    storageBucket: 'slowly-la.appspot.com',
    messagingSenderId: '612490900122',
    appId: '1:612490900122:web:ceaa8135a145c763e8e523',
    measurementId: 'G-6LCKZ9QZVS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const providerFacebook = new FacebookAuthProvider();

export const signIn = (
    loginEmail,
    loginPassword,
    invalidEmail,
    invalidPassword,
    loginErrorDefault,
) => {

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            onNavigate('/home');

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
        })

};



export const createUser = (
    registerEmail,
    registerPassword,
    wrongEmail,
    minPassword,
    registerErrorDefault,
) => {

    createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            onNavigate('/home');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            switch (errorCode) {
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
                    wrongEmail.textContent = 'El correo ingresado es inválido';
                    registerEmail.style.borderColor = '#F62D2D';
                    break;
                default:
                    registerErrorDefault.innerText = errorCode;

            }
        })

}

// Autenticación con Google:
export const signGoogle = () => {

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            onNavigate('/home');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}

// acceso con Facebook
// export const signFacebook = () => {

//     signInWithPopup(auth, providerFacebook)
//         .then((result) => {
//             const user = result.user;
//             const credential = FacebookAuthProvider.credentialFromResult(result);
//             const accessToken = credential.accessToken;
//             document.getElementById('welcome-page').style.display = 'block';
//             document.getElementById('register-section').style.display = 'none';
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             const email = error.email;
//             const credential = FacebookAuthProvider.credentialFromError(error);
//   });

// }

//   signInWithRedirect(auth, providerFacebook);

/* getRedirectResult(auth)
  .then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
  }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      // AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      // ...
  }); */