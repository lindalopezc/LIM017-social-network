/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createUser, signIn } from '../../src/lib/index.js';
import { signInWithEmailAndPassword } from '../../src/firebase/__mocks__/firebase-utils.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('Función createUser', () => {
  it('Debería retornar el nombre de usuario registrado', async () => {
    createUser('hola@gmail.com', '123456', 'angelica')
      .then((user) => {
        expect(user.displayName).toBe('angelica');
      });
  });
  it('Debería retornar la url de la foto por defecto para el nuevo usuario registrado', () => {
    createUser('hola@gmail.com', '123456', 'linda')
      .then((user) => {
        expect(user.photoURL).toBe('../img/user.png');
      });
  });
});

describe('Función signIn', () => {
  expect.assertions(1);
  it('Debería retornar el uid del usuario que inicia sesión', () => {
    const user1 = {
      email: 'test1@gmail.com',
      uid: '12345',
    };
    signIn('test1@gmail.com', 'holamundo')
      .then((user) => {
        expect(user.uid).toStrictEqual(user1.uid);
      });
  });
  it('Debería retornar mensaje de error, ya que el usuario no pudo iniciar sesión', () => {
    signInWithEmailAndPassword.mockRejectedValue('El usuario no pudo iniciar sesión');
    signIn('test2@gmail.com', 'contraseña')
      .catch((error) => {
        expect(error).toBe('El usuario no pudo iniciar sesión');
      });
  });
});
