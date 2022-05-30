/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createUser, signIn } from '../../src/lib/index.js';
import { signInWithEmailAndPassword } from '../../src/firebase/__mocks__/firebase-utils.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('Función createUser', () => {
  it('Debería retornar el nombre de usuario registrado', (done) => {
    createUser('hola@gmail.com', '123456', 'angelica')
      .then((user) => {
        expect(user.displayName).toBe('angelica');
        done();
      });
  });
  it('Debería retornar la url de la foto por defecto para el nuevo usuario registrado', (done) => {
    createUser('hola@gmail.com', '123456', 'linda')
      .then((user) => {
        expect(user.photoURL).toBe('../img/user.png');
        done();
      });
  });
});

describe('Función signIn', () => {
  it('Debería retornar el uid del usuario que inicia sesión', (done) => {
    const user1 = {
      email: 'test1@gmail.com',
      uid: '12345',
    };
    signIn('test1@gmail.com', 'holamundo')
      .then((user) => {
        expect(user.uid).toStrictEqual(user1.uid);
        done();
      });
  });
});
