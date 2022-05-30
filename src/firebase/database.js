import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  query,
  orderBy,
  where,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
} from './firebase-utils.js';
import { app } from './main.js';

const db = getFirestore(app);

export function insertData(publication) {
  return addDoc(collection(db, 'publications'), publication);
}

export async function getData() {
  const dataSort = query(collection(db, 'publications'), orderBy('Fecha', 'desc'));
  const querySnapshot = await getDocs(dataSort);
  return querySnapshot;
}

export async function getDataWithFilters(categoria) {
  const dataSort = query(collection(db, 'publications'), where('Categoria', '==', categoria));
  const querySnapshot = await getDocs(dataSort);
  return querySnapshot;
}

export function insertDataUser(user) {
  return addDoc(collection(db, 'users'), user);
}

export async function getDataUsers(uid) {
  const dataSort = query(collection(db, 'users'), where('uid', '==', uid));
  const querySnapshot = await getDocs(dataSort);
  return querySnapshot;
}

export async function getPublicationsUser(uid) {
  const dataSort = query(collection(db, 'publications'), where('uidUser', '==', uid));
  const querySnapshot = await getDocs(dataSort);
  return querySnapshot;
}

export function removeLikes(docId, userId) {
  const removeLikePost = doc(db, 'publications', docId);
  return updateDoc(removeLikePost, {
    Likes: arrayRemove(userId),
  });
}

export function addLikes(docId, userId) {
  const addLikePost = doc(db, 'publications', docId);
  return updateDoc(addLikePost, {
    Likes: arrayUnion(userId),
  });
}

export function deletePost(docId) {
  return deleteDoc(doc(db, 'publications', docId));
}

export function editPost(docId, publication) {
  const editPostUser = doc(db, 'publications', docId);
  return updateDoc(editPostUser, publication);
}

export async function getDataPost(docId) {
  const editPostUser = doc(db, 'publications', docId);
  const querySnapshot = await getDoc(editPostUser);
  return querySnapshot;
}
