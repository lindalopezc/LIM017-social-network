import { welcome } from '../../src/components/Welcome';
import { login } from '../../src/components/Login.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('Componente Welcome', () => {
  it('Debe retornar el texto Iniciar sesión', () => {
    const result = welcome();
    const loginBtn = result.querySelector('#login-btn-welcome');
    expect(loginBtn.textContent).toBe('Inicia sesión');
  });
  it('Debe retornar el texto Regístrate', () => {
    const result = welcome();
    const registerBtn = result.querySelector('#register-btn-welcome');
    expect(registerBtn.textContent).toBe('Regístrate');
  });
});
describe('Texto de componente', () => {
  it('Debe retornar texto de bienvenida', () => {
    const result = welcome();
    const divTextWelcome = result.querySelector('#div-text-welcome');
    const welcomeText = 'Únete a esta comunidad y dale una segunda oportunidad a las prendas que ya no uses.';
    expect(divTextWelcome.textContent).toBe(welcomeText);
  });
});

describe('Botón de Iniciar sesión', () => {
  it('Debe retornar el componente de Iniciar sesión', () => {
    const loginComponent = login();
    const loginBtn = loginComponent.querySelector('#login-btn-welcome');
    document.body.innerHTML = '<div id="root"></div>';
    const rootDiv = document.querySelector('#root');
    setTimeout(() => {
      loginBtn.dispatchEvent(new Event('click'));
      expect(rootDiv.firstChild).toBe(loginComponent);
    }, 1000);
  });
});
