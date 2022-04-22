/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { Modal } from './modal.js';
import { getUserLocalStorage } from '../firebase/authentication.js';
import { removeLikes, addLikes } from '../firebase/database.js';

export const templatePosts = (doc) => {
  const sectionPost = document.createElement('section');
  sectionPost.setAttribute('class', 'section-post');
  sectionPost.setAttribute('id', doc.id);
  // <a href="https://api.whatsapp.com/send?phone=${doc.data().user.phone}&text=Hola estoy interesad@"><img class = "icon-contact-post" src = "../img/correo-de-contacto.png"></a>

  const template = `
        <div class = "div-category-post">
          <p class = "category-post ${doc.data().Categoria}">${doc.data().Categoria}</p>
        </div>
          <div class ="container-post">
            <div class = "title-and-icons">
              <div class ="div-title">
                <p>${doc.data().Titulo}</p>
              </div>
              <div class = "div-icons">
                <img class = "img-profile-post" src = ${doc.data().photoUser}>
                <img class = "icon-contact-post" src = "../img/email.png">
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
                <div class="div-likes">
                <button class = "btn-like-post"></button>
                <p class="counter-likes">${doc.data().Likes.length}</p>
                </div>
              </div>
            </div>
          </div>`;
  sectionPost.innerHTML = template;
  const btnLike = sectionPost.querySelector('.btn-like-post');
  const counterLikes = sectionPost.querySelector('.counter-likes');
  const userData = getUserLocalStorage();
  const arrayLikes = doc.data().Likes;
  let arrayLength = arrayLikes.length;

  // Primero vemos si no tiene likes, hacemos que se oculte el contador
  if (doc.data().Likes.length === 0) {
    counterLikes.style.display = 'none';
  }

  // Aquí le asignamos la clase que contiene el color rojo del like
  // en caso el id del user se encuentre en el array 'Links' de ese post.
  if (arrayLikes.includes(userData.uid)) {
    btnLike.classList.add('icon-like-red');
  }

  // Evento para dar like y quitar like al post:
  btnLike.addEventListener('click', () => {
    // Si el ícono de like está de color rojo, quiere decir que el usuario si le gustaba el post
    if (btnLike.classList.contains('icon-like-red')) {
      btnLike.classList.toggle('icon-like-red'); // Hacemos que cambie de color al quitarle la clase.
      arrayLength -= 1;
      removeLikes(doc.id, userData.uid); // Llamamos a la función que se encarla de eliminar el id del user que ya no le gusta el post
      if (arrayLength === 0) {
        counterLikes.style.display = 'none';
      }
    } else {
      btnLike.classList.add('icon-like-red'); // Añadimos la clase para darle color rojo al corazón
      arrayLength += 1;
      counterLikes.style.display = 'block'; // Esto lo ponemos en caso, no haya tenido antes likes
      addLikes(doc.id, userData.uid); // Actualizamos el post, añadiendo el id del usuario que ha dado like al array 'Likes'.
    }
    // Cambiamos el valor del contador:
    counterLikes.innerText = arrayLength;
  });

  const iconContact = sectionPost.querySelector('.icon-contact-post');
  iconContact.addEventListener('click', () => {
    const root = document.getElementById(doc.id);

    // Aquí traemos el modal
    const modal = document.querySelector('.content-modal');
    if (modal) {
      modal.remove();
    }
    root.appendChild(Modal(doc.data().uidUser));
  });

  return sectionPost;
};
