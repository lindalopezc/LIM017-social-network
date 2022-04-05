/* eslint-disable import/no-cycle */
import { welcome } from '../components/Welcome.js';
import { register } from '../components/Register.js';
import { login } from '../components/Login.js';
import { home } from '../components/Home.js';
import { publications } from '../components/Publications.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': welcome,
  '/register': register,
  '/login': login,
  '/home': home,
  '/publications': publications,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  return rootDiv.appendChild(routes[pathname]());
};
const component = routes[window.location.pathname];
// Es el compomente por defecto que carga la ruta,
// en este caso es el welcome y se ejecuta solo una vez

// window.onpopstate = () => {
//     debugger
//     component = routes[window.location.pathname];
//     while (rootDiv.firstChild) {
//         rootDiv.removeChild(rootDiv.firstChild);
//     }
//     rootDiv.appendChild(component());
// };

/* window.onpopstate = () => {
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(component());
}; */
rootDiv.appendChild(component());
