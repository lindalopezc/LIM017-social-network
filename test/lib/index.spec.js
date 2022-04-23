/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createUser, signGoogle } from '../../src/lib/index.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('Función createUser', () => {
  it('Debería retornar el nombre de usuario registrado', async () => {
    createUser('hola@gmail.com', '123456', 'linda')
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

// describe('Función signGoogle', () => {
//   it('La función debe retornar un objeto', () => {
//     signGoogle()
//       .then((user) => {
//         expect(typeof user).toBe('object');
//       });
//   });
// });
