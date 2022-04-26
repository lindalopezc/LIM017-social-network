import { login } from '../../src/components/Login.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('notificación de botón Login', () => {
  it('Se debe mostrar un mensaje de error', () => {
    const result = login();
    const btn = result.querySelector('#login-btn');
    const inputEmail = result.querySelector('#login-email');
    const inputPassword = result.querySelector('#login-password');
    inputEmail.value = 'email@gmail.com';
    inputPassword.value = '123456';
    btn.dispatchEvent(new Event('click'));
    setTimeout(() => {
      const messageNotification = result.querySelector('#verified-email');
      expect(messageNotification.textContent).toEqual(
        'Por favor verifica tu correo para ingresar a Slowly',
      );
    }, 2000);
  });
});

describe('Mensaje de error para iniciar sesión', () => {
  it('Se debe mostrar un mensaje de error', () => {
    const signIn = jest.fn((emailLogin, passwordLogin) => Promise.resolve({
      email: emailLogin,
      password: passwordLogin,
      emailVerified: false.valueOf,
    }));

    signIn.mockRejectedValue('El correo ingresado es inválido.');
    const result = login();
    const btn = result.querySelector('#login-btn');
    const inputEmail = result.querySelector('#login-email');
    const inputPassword = result.querySelector('#login-password');
    inputEmail.value = 'email@gmail.com';
    inputPassword.value = '123456';
    btn.dispatchEvent(new Event('click'));
    signIn().catch((error) => {
      expect(error).toEqual(
        'El correo ingresado es inválido.',
      );
    });
  });
});
