export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({
  user: {
    displayName: 'angelica',
    photoURL: '../img/user.png',
  },
}));
export const initializeApp = () => ({});
export const getAuth = () => ({});
export class GoogleAuthProvider {}
