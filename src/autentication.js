/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);
document.getElementById('login-btn').addEventListener('click', () => {

    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;


    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            document.getElementById('welcome-page').style.display = 'block';
            document.getElementById('login-section').style.display = 'none';

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const invalidEmail = document.getElementById('invalid-email');
            invalidEmail.innerText = 'Correo invalido';

        });

});
document.getElementById('register-btn').addEventListener('click', () => {
    const registerEmail = document.getElementById('register-email').value;
    const registerPassword = document.getElementById('register-password').value;
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            document.getElementById('welcome-page').style.display = 'block';
            document.getElementById('register-section').style.display = 'none';
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode)
            const errorMessage = error.message;
            console.log(errorMessage)
            const wrongPassword = document.getElementById('wrong-password');
            if (errorMessage == 'Firebase: Error (auth/email-already-in-use).') {
                wrongPassword.innerText = 'El correo ingresado ya está en uso';
            } else if (errorMessage == 'Firebase: Error (auth/invalid-email).') {
                wrongPassword.innerText = 'El correo ingresado es inválido';
            } else {
                wrongPassword.innerText = 'Debe ingresar al menos 6 caracteres.';
            }

        })

});