/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-storage.js';
import { app } from './authentication.js';

const storage = getStorage(app);
const storageRef = ref(storage);

export const storageFunction = (imageUpload) => {
  // Creamos una referencia para el nombre de la imagen que queremos subir a firestorage:
  const imageRef = ref(storage, `imagenes/${imageUpload.name}`);

  // Esta función nos va a permitir subir elementos de tipo file
  uploadBytes(imageRef, imageUpload).then((snapshot) => {
    console.log('Ya se subio la foto a nuestra carpeta storage');
  });

  const metadata = {
    contentType: 'imagenes/png',
  };
  const uploadTask = uploadBytes(imageRef, imageUpload, metadata);

  // Esta función permite tener la url de la imagen de firestorage
  getDownloadURL(imageRef)
    .then((url) => {
      const imageUrl = document.createElement('img');
      imageUrl.setAttribute('src', url);
      console.log(imageUrl, url);
    })
    .catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          console.log('El archivo no existe');
          break;
        case 'storage/unauthorized':
          console.log('El usuario no tiene permiso para acceder al objeto');
          break;
        case 'storage/canceled':
          console.log('El usuario canceló la carga');
          break;

        case 'storage/unknown':
          console.log('Error desconocido, inspecciona el servidor');

          break;
        default:
          console.log('Otro error');
      }
    });
};