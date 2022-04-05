/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
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
import { app } from './main.js';

const storage = getStorage(app);
let storageRef;
// Aquí vamos a almacenar la url para usarla en otro módulo.

export const storageFunction = (imageUpload, image) => {
  storageRef = ref(storage, '/imagenes');
  // Creamos una referencia para el nombre de la imagen que queremos subir a firestorage:
  const imageRef = ref(storage, `imagenes/${imageUpload.name}`);

  uploadBytes(imageRef, imageUpload)
    .then((snapshot) => {
      console.log('Ya se subio la foto a nuestra carpeta storage');
      getDownloadURL(imageRef)
        .then((url) => {
          image.setAttribute('src', url);
          image.style.objectFit = 'contain';
          image.style.border = 'none';
          image.style.background = 'white';
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
    });
};

// export const storageFunction = async(imageUpload, image) => {
//   storageRef = ref(storage, '/imagenes');
//   // Creamos una referencia para el nombre de la imagen que queremos subir a firestorage:
//   const imageRef = ref(storage, `imagenes/${imageUpload.name}`);

//   const snapshot = await uploadBytes(imageRef, imageUpload);
//   console.log('ya se subio la imagen');

//   try {
//     const url = await getDownloadURL(imageRef);
//     image.setAttribute('src', url);
//     image.style.objectFit = 'contain';
//     image.style.border = 'none';
//     image.style.background = 'white';
//   } catch (error) {
//     switch (error.code) {
//       case 'storage/object-not-found':
//         console.log('El archivo no existe');
//         break;
//       case 'storage/unauthorized':
//         console.log('El usuario no tiene permiso para acceder al objeto');
//         break;
//       case 'storage/canceled':
//         console.log('El usuario canceló la carga');
//         break;
//       case 'storage/unknown':
//         console.log('Error desconocido, inspecciona el servidor');
//         break;
//       default:
//         console.log('Otro error');
//     }
//   }
// };