/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createUser } from '../../src/firebase/authentication.js';
import {
  createUserWithEmailAndPassword,
} from '../../src/firebase/firebase-utils.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('Función createUser', () => {
  it('Debería retornar linda', () => {
    createUser('hola@gmail.com', '123456', 'linda')
      .then((user) => {
        expect(user.displayName).toBe('linda');
      });
  });
});
