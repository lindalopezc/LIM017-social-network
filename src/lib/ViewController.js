/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { welcome } from '../components/Welcome.js';
import { register } from '../components/Register.js';
import { login } from '../components/Login.js';
import { home } from '../components/Home.js';
import { publications } from '../components/Publications.js';
import { profile } from '../components/Profile.js';

const routes = {
  '/': welcome,
  '/register': register,
  '/login': login,
  '/home': home,
  '/publications': publications,
  '/profile': profile,
};

export const onNavigate = (pathname, urlParam) => {
  const rootDiv = document.getElementById('root');
  window.history.pushState({}, pathname, window.location.origin + pathname + (urlParam ? `?${urlParam.toString()}` : ''));
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  if (urlParam) {
    return rootDiv.appendChild(routes[pathname](urlParam));
  }
  return rootDiv.appendChild(routes[pathname]());
};

window.addEventListener('DOMContentLoaded', () => {
  // const component = routes[window.location.pathname];
  // rootDiv.appendChild(component()); // Es el compomente por defecto que carga la ruta,
  const pathname = window.location.pathname; // Me da la ruta actual
  const querystring = window.location.search;// esto me da lo que esta despues del signo de interrogacion
  // usando el querystring, creamos un objeto del tipo URLSearchParams
  const params = new URLSearchParams(querystring);
  onNavigate(pathname, params); // Esta funcion es para navegar entre rutas
});
