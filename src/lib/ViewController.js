/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { welcome } from '../components/Welcome.js';
import { register } from '../components/Register.js';
import { login } from '../components/Login.js';
import { home } from '../components/Home.js';
import { publications } from '../components/Publications.js';
import { profile } from '../components/Profile.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': welcome,
  '/register': register,
  '/login': login,
  '/home': home,
  '/publications': publications,
  '/profile': profile,
};

<<<<<<< HEAD
// export const onNavigate = (pathname, urlParam) => {
//    window.history.pushState({}, pathname, window.location.origin + pathname + (urlParam ? `?${urlParam.toString()}` : ''));
//   console.log(urlParam.get);
//   while (rootDiv.firstChild) {
//     rootDiv.removeChild(rootDiv.firstChild);
//   }

//   return rootDiv.appendChild(routes[pathname]());
// };
// const component = routes[window.location.pathname];
// rootDiv.appendChild(component()); // Es el compomente por defecto que carga la ruta,

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
=======
export const onNavigate = (pathname, urlParam) => {
  window.history.pushState({}, pathname, window.location.origin + pathname + (urlParam ? `?${urlParam.toString()}` : ''));
  console.log(urlParam);
>>>>>>> 548094b7e4b172bb399ec711a3933b9b9ca8623e
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  if (urlParam) {
    return rootDiv.appendChild(routes[pathname](urlParam));
  }
  return rootDiv.appendChild(routes[pathname]());
};
<<<<<<< HEAD
const component = routes[window.location.pathname];
rootDiv.appendChild(component()); // Es el compomente por defecto que carga la ruta,
=======
const pathname = window.location.pathname; // Me da la ruta actual
const querystring = window.location.search;
// usando el querystring, creamos un objeto del tipo URLSearchParams
const params = new URLSearchParams(querystring);
onNavigate(pathname, params);


// Es el compomente por defecto que carga la ruta,
// en este caso es el welcome y se ejecuta solo una vez
>>>>>>> 548094b7e4b172bb399ec711a3933b9b9ca8623e

// window.onpopstate = () => {
//     debugger
//     component = routes[window.location.pathname];
//     while (rootDiv.firstChild) {
//         rootDiv.removeChild(rootDiv.firstChild);
//     }
//     rootDiv.appendChild(component());
// };
