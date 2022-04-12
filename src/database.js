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
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { app } from './main.js';

const db = getFirestore(app);

// Esta función se encarga de crear una colección de datos o documentos:
export async function insertData(publication) {
  try {
    await addDoc(collection(db, 'publications'), publication);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Esta función se encarga de traer los datos de la colección 'publications' de firestore:
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

export async function getPublicationUser(user) {
  const dataSort = await query(collection(db, 'publications'), where('Categoría', '==', categoria));
  const querySnapshot = await getDocs(dataSort);
  return querySnapshot;
}