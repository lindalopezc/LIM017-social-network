import { Modal } from '../components/modal.js';

export const dataWithFilters = (doc) => {
  const sectionPost = document.createElement('section');
  sectionPost.setAttribute('class', 'section-post');
  sectionPost.setAttribute('id', doc.id);
  // <a href="https://api.whatsapp.com/send?phone=${doc.data().user.phone}&text=Hola estoy interesad@"><img class = "icon-contact-post" src = "../img/correo-de-contacto.png"></a>

  const template = `
        <div class = "div-category-post">
          <p class = "category-post ${doc.data().Categoría}">${doc.data().Categoría}</p>
        </div>
          <div class ="container-post">
            <div class = "title-and-icons">
              <div class ="div-title">
                <p>${doc.data().Título}</p>
              </div>
              <div class = "div-icons">
                <img class = "img-profile-post" src = "${doc.data().photoURL}">
                <img class = "icon-contact-post" src = "../img/correo-de-contacto.png">
              </div>
            </div>
            <div class = "div-img-post">
              <img class = "img-post" src = ${doc.data().Foto}>
            </div>
            <div class = "description-like-post">
              <div class = "description-post">
                <p>${doc.data().Description}</p>
              </div>
              <div class ="state-like-post">
                <p>Estado</p>
                <p>${doc.data().Estado}</p>
                <img class = "icon-like-post" src="../img/heart.png">
              </div>
            </div>
          </div>`;
  sectionPost.innerHTML = template;
  const iconContact = sectionPost.querySelector('.icon-contact-post');
  iconContact.addEventListener('click', (e) => {
    const root = document.getElementById('root');
    const modal = document.querySelector('.content-modal');
    if (modal) {
      modal.remove();
    }
    const data = {
      name: doc.data().Título,
      email: 'prueba@email.com',
    };
    root.appendChild(Modal(data));
  });

  return sectionPost;
};