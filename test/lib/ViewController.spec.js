/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */
import { onNavigate } from '../../src/lib/ViewController.js';
import { register } from '../../src/components/Register.js';
import { login } from '../../src/components/Login.js';
// import { publications } from '../../src/components/Publications.js';

jest.mock('../../src/firebase/firebase-utils.js');

describe('Función onNavigate sin argumento urlParam', () => {
  it('La función onNavigate debe cargar vista Register', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const registerComponent = register();
    expect(onNavigate('/register')).toEqual(registerComponent);
  });
  it('La función onNavigate debe cargar vista Login', () => {
    document.body.innerHTML = '<div id="root"></div>';
    const loginComponent = login();
    expect(onNavigate('/login')).toEqual(loginComponent);
  });
});

// describe('Función onNavigate con argumento urlParam', () => {
//   document.body.innerHTML = '<div id="root"></div>';
//   const idPost = '1dzqT4iMtQJ2umAQoq6F';
//   const params = new URLSearchParams();
//   params.set('editPostId', idPost);
//   const publicationComponent = publications(params);
//   it('La función onNavigate debe cargar vista Register', () => {
//     expect(onNavigate('/publications', params)).toEqual(publicationComponent);
//   });
// });
