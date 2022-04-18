/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  where,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { app } from './main.js';

const db = getFirestore(app);

// Esta función se encarga de crear una colección de posts:
export async function insertData(publication) {
  try {
    await addDoc(collection(db, 'publications'), publication);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Esta función se encarga de traer los datos de la colección 'publications' de database:
export async function getData() {
  // Utilizaremos las funciones query and orderBy para ordenar la data por fecha de publicación.
  const dataSort = await query(collection(db, 'publications'), orderBy('Fecha', 'desc'));
  const querySnapshot = await getDocs(dataSort);
  return querySnapshot;
}

// Función para filtrar la data por categorías:
export async function getDataWithFilters(categoria) {
  const dataSort = await query(collection(db, 'publications'), where('Categoría', '==', categoria));
  const querySnapshot = await getDocs(dataSort);
  return querySnapshot;
}

// Esta función se encarga de crear una colección de datos del usuario:
export async function insertDataUser(user) {
  try {
    await addDoc(collection(db, 'users'), user);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
// Esta función se encarga de traer los datos de la colección 'users' de database.
export async function getDataUsers(uid) {
  const dataSort = await query(collection(db, 'users'), where('uid', '==', uid));
  const querySnapshot = await getDocs(dataSort);
  return querySnapshot;
}

// Función para filtrar los posts por usuario:
export async function getPublicationsUser(uid) {
  const dataSort = await query(collection(db, 'publications'), where('uidUser', '==', uid));
  const querySnapshot = await getDocs(dataSort);
  return querySnapshot;
}

// Funcion para remover likes
export function removeLikes(docId, userId) {
  const removeLikePost = doc(db, 'publications', docId);
  updateDoc(removeLikePost, {
    Likes: arrayRemove(userId), // Aquí estamos borrando el id del user en el array Likes.
  });
}

// Funcion para añadir likes
export function addLikes(docId, userId) {
  const addLikePost = doc(db, 'publications', docId);
  updateDoc(addLikePost, {
    Likes: arrayUnion(userId), // Aquí estamos añadiendo el id del user en el array Likes.
  });
}
