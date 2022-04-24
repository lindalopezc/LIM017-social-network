/* eslint-disable no-empty-pattern */
/* eslint-disable max-len */
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({
  user: {
    displayName: '',
    photoURL: '',
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
export const query = jest.fn(() => Promise.resolve({}));
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve({ user: { uid: '12345' } }));
export const getDocs = jest.fn(({}) => Promise.resolve(
  { docs: [{ data: () => ({}) }] },
));
export const getStorage = () => ({});
