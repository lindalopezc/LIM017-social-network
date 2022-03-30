/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */
import { welcome } from "../components/Welcome.js"
import { register } from "../components/Register.js";
import { login } from "../components/Login.js";
import { home } from "../components/Home.js"

const rootDiv = document.getElementById('root');

const routes = {
    '/': welcome,
    '/register': register,
    '/login': login,
    '/home': home,
}

export const onNavigate = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);

    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }

    rootDiv.appendChild(routes[pathname]());
}

const component = routes[window.location.pathname];

/*window.onpopstate = () => {
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(component());
};*/
rootDiv.appendChild(component());