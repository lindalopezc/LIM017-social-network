/* eslint-disable no-empty-pattern */
/* eslint-disable max-len */
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({
  user:
  {
    displayName: '',
    photoURL: '../img/user.png',
  },
}));
export const initializeApp = () => ({});
export const getAuth = () => ({});
export class GoogleAuthProvider {}
export const getFirestore = () => ({});
export const sendEmailVerification = jest.fn();
export const collection = () => ({});
export const addDoc = jest.fn();
export const where = jest.fn();
export const query = jest.fn();
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({
  user: {
    displayName: '',
    uid: '12345',
    emailVerified: false,
  },
}));
export const getDocs = jest.fn(() => Promise.resolve(
  { docs: [{ data: () => ({}) }] },
));
export const getStorage = () => ({});
