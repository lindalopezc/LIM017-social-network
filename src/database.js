/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
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
  const querySnapshot = await getDocs(collection(db, 'publications'));
  return querySnapshot;
}