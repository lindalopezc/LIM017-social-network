/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from './firebase-utils.js';
import { app } from './main.js';

const storage = getStorage(app);

export const uploadAndDownloadImage = async (imageUpload) => {
  let getImageUrl;
  try {
    const storageRef = await ref(storage, '/imagenes');
    // Estamos creando una referencia para el nombre de la imagen que queremos subir a firestorage:
    const imageRef = await ref(storage, `imagenes/${imageUpload.name}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    getImageUrl = await getDownloadURL(imageRef);
  } catch (error) {
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
  }
  return getImageUrl;
};
