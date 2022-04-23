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
export const sendEmailFirebase = jest.fn();
export const collection = () => ({});
export const addDoc = jest.fn();
export const insertDataUser = jest.fn();
export const signInWithPopup = jest.fn();
export const signGoogleFirebase = jest.fn(() => Promise.resolve({
  user: { hola: 'lala' },
}));
