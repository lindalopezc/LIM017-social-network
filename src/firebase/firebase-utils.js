/* eslint-disable import/no-unresolved */
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
export {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  getAuth,
  GoogleAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  orderBy,
  where,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
export {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-storage.js';
