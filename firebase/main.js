import { initializeApp, getAuth, GoogleAuthProvider } from './firebase-utils.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAdfUjeKGbV3sdoMqcYIVg0pEzOBLaihlo',
  authDomain: 'slowly-la.firebaseapp.com',
  projectId: 'slowly-la',
  storageBucket: 'gs://slowly-la.appspot.com/',
  messagingSenderId: '612490900122',
  appId: '1:612490900122:web:ceaa8135a145c763e8e523',
  measurementId: 'G-6LCKZ9QZVS',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider(app);
