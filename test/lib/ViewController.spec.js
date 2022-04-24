/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */
import { onNavigate } from '../../src/lib/ViewController.js';

jest.mock('../../src/firebase/firebase-utils.js');

const welcome = () => {
  const welcomeView = document.createElement('div');
  welcomeView.textContent('Estoy en vista Welcome');
  return welcomeView;
};
const register = () => {
  const registerView = document.createElement('div');
  registerView.textContent('Estoy en vista Register');
  return registerView;
};
const login = () => {
  const loginView = document.createElement('div');
  loginView.textContent('Estoy en vista Login');
  return loginView;
};
const home = () => {
  const homeView = document.createElement('div');
  homeView.textContent('Estoy en vista Home');
  return homeView;
};
const publications = () => {
  const publicationsView = document.createElement('div');
  publicationsView.textContent('Estoy en vista Publications');
  return publicationsView;
};
const profile = () => {
  const profileView = document.createElement('div');
  profileView.textContent('Estoy en vista Profile');
  return profileView;
};

const routes = {
  '/': welcome,
  '/register': register,
  '/login': login,
  '/home': home,
  '/publications': publications,
  '/profile': profile,
};

describe('Función onNavigate', () => {
  it('La función onNavigate debe cargar vista Welcome', () => {
    // const root = document.createElement('div');
    // root.setAttribute('id', 'root');
    document.body.innerHTML = '<div id = "root"></div>'; // No entiendo porqué no sale :(
    const rootDiv = document.querySelector('#root');
    expect(onNavigate(routes['/'])).toEqual(welcome);
  });
});
