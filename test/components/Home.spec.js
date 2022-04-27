import { home } from '../../src/components/Home.js';
// import { publications } from '../../src/components/Publications';

jest.mock('../../src/firebase/firebase-utils.js');

// describe('Componente Home', () => {
//   it('Debe retornar vista Publicar', () => {
//     document.body.innerHTML = '<div id="root"></div>';
//     const rootDiv = document.querySelector('#root');
//     const result = home();
//     const publicationComponent = publications();
//     const btnPublication = result.querySelector('.create-publication-btn');
//     btnPublication.dispatchEvent(new Event('click'));
//     expect(rootDiv.firstChild).toBe(publicationComponent);
//   });
// });

describe('Component Home', () => {
  it('Debe retornar una función', () => {
    expect(typeof home).toBe('function');
  });
});
