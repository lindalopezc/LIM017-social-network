/* eslint-disable import/no-cycle */
/* eslint-disable eol-last */

import { onNavigate } from '../lib/ViewController.js';

/* eslint-disable indent */
export const home = () => {
    const sectionHome = document.createElement('section');
    const titleHome = document.createElement('p');
    titleHome.textContent = 'Bienvenidos al home';

    sectionHome.appendChild(titleHome);

    const btn = document.createElement('button');
    btn.textContent = 'publicar';
    sectionHome.appendChild(btn);
    btn.addEventListener('click', () => onNavigate('/publications'));

    return sectionHome;
};