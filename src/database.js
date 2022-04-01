import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import { app } from './main.js'

const db = getFirestore(app);


export async function insertData(publication) {
  try {
    const docRef = await addDoc(collection(db, "publications"), publication);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}