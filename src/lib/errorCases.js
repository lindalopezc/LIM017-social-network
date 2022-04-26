// Se creó una función que contiene los errores cuando el usuario Inicia sesión.
export const errorCasesLogin = (errorCode) => {
  const pInvalidEmail = document.querySelector('#invalid-email');
  const inputEmail = document.querySelector('#login-email');
  const pInvalidPassword = document.querySelector('#invalid-password');
  const inputPassword = document.querySelector('#login-password');
  const pErrorDefault = document.querySelector('#login-error-default');
  switch (errorCode) {
    case 'auth/user-not-found':
      pInvalidEmail.innerText = 'No hay usuario registrado con ese correo., verifica e intente de nuevo.';
      inputEmail.style.borderColor = '#F62D2D';
      break;
    case 'auth/invalid-email':
      pInvalidEmail.textContent = 'El correo ingresado es inválido.';
      inputEmail.style.borderColor = '#F62D2D';
      break;
    case 'auth/wrong-password':
      pInvalidPassword.innerText = 'La contraseña no es válida, verifica e intente de nuevo.';
      inputPassword.style.borderColor = '#F62D2D';
      break;
    case 'auth/email-already-exists':
      pInvalidEmail.innerText = 'El correo electrónico proporcionado esta siendo utilizado por otro miembro, verifica e intente de nuevo.';
      inputEmail.style.borderColor = '#F62D2D';
      break;
    default:
      pErrorDefault.innerText = errorCode;
  }
};

// Se creó una función que contiene los errores cuando el usuario cuando se registra.
export const errorCasesRegister = (errorCode) => {
  const pWrongEmail = document.querySelector('#wrong-email');
  const inputEmail = document.querySelector('#register-email');
  const pMinPassword = document.querySelector('#min-password');
  const inputPassword = document.querySelector('#register-password');
  const pErrorDefault = document.querySelector('#register-error-default');
  switch (errorCode) {
    case 'auth/email-already-in-use':
      pWrongEmail.innerText = 'El correo ingresado ya está en uso';
      inputEmail.style.borderColor = '#F62D2D';
      break;
    case 'auth/weak-password':
      pMinPassword.style.color = 'red';
      pMinPassword.innerText = 'Debe ingresar al menos 6 caracteres.';
      inputPassword.style.borderColor = '#F62D2D';
      break;
    case 'auth/invalid-email':
      pWrongEmail.textContent = 'El correo ingresado es inválido';
      inputEmail.style.borderColor = '#F62D2D';
      break;
    default:
      pErrorDefault.innerText = errorCode;
  }
};
