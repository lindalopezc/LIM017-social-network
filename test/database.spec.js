import { insertData } from '../src/firebase/database.js';

const firebase = {
    
}

const objectPublication = {
  Título: 'publicación 1',
  Foto: '../src/img/facebook.png',
  Estado: '7/10',
  Categoría: 'Vender',
  Description: 'Hola esta es mi publicacion 1',
  Fecha: new Date(),
  uidUser: '123linda',
  photoUser: '../src/img/facebook.png',
  Likes: ['123linda'],
};
describe('insertData', () => {
  it('Debería poder crear un publicación', () => insertData(objectPublication).then((data) => {
    expect(data).toBe(objectPublication);
  }));
});
