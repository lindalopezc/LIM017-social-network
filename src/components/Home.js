/* eslint-disable eol-last */
/* eslint-disable indent */
export const home = () => {
    const sectionHome = document.createElement('section');
    const titleHome = document.createElement('p');
    titleHome.textContent = 'Bienvenidos al home';

    sectionHome.appendChild(titleHome);

    return sectionHome;
};