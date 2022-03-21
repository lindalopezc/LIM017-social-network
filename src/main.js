/* eslint-disable eol-last */
/* eslint-disable indent */
document.getElementById('link-login').addEventListener('click', () => {
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
});
document.getElementById('link-register').addEventListener('click', () => {
    document.getElementById('register-section').style.display = 'block';
    document.getElementById('login-section').style.display = 'none';
});

// Llamando al contenedor de errores:
// export const wrongPassword = document.getElementById('wrong-password');
export const wrongPassword = document.getElementById('wrong-password');
