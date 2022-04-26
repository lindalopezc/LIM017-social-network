/* eslint-disable space-infix-ops */
import { register } from '../../src/components/Register.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('Componente Register', () => {
  it('Debe retornar un mensaje de error si el usuario no escribe su nombre', () => {
    const result = register();
    const inputName = result.querySelector('#register-name');
    inputName.value ='';
    const btn = result.querySelector('#register-btn');
    btn.dispatchEvent(new Event('click'));
    const messageName = result.querySelector('#message-name');
    expect(messageName.textContent).toBe('Campo vacío. Por favor escriba su nombre.');
  });
});

describe('Las contraseñas ingresadas deben coincidir', () => {
  it('Debe mostrar un mensaje de error, si las contraseñas no coinciden', () => {
    const result = register();
    const registerPassword = result.querySelector('#register-password');
    const registerConfirm = result.querySelector('#register-confirm');
    const inputName = result.querySelector('#register-name');
    inputName.value = 'Linda López';
    registerPassword.value = 'password1';
    registerConfirm.value = 'password2';
    const btn = result.querySelector('#register-btn');
    btn.dispatchEvent(new Event('click'));
    const wrongNotification = result.querySelector('#wrong-password');
    expect(wrongNotification.textContent).toBe('Las contraseñas no coinciden.');
  });
});

describe('Título Regístrate', () => {
  it('El título debe decir Regístrate', () => {
    const result = register();
    const titleRegister = result.querySelector('.title-register-login');
    expect(titleRegister.textContent).toBe('Regístrate');
  });
});
