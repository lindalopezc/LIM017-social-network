/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { uploadAndDownloadImage } from '../firebase/storage.js';
import { editPost, getDataPost, insertData } from '../firebase/database.js';
import { onNavigate } from '../lib/ViewController.js';
import { Menu } from '../templates/Menu.js';
import { getUserLocalStorage } from '../firebase/authentication.js';

export const publications = (urlParam) => {
  const sectionPublications = document.createElement('section');
  sectionPublications.setAttribute('class', 'section-publications');

  const divTitlePublications = document.createElement('div');
  divTitlePublications.setAttribute('class', 'div-nav');

  const titlePublications = document.createElement('h1');
  titlePublications.textContent = 'Publicar';

  const divMenu = Menu();
  divTitlePublications.appendChild(titlePublications);
  divTitlePublications.appendChild(divMenu);

  const formPublication = document.createElement('form');
  formPublication.setAttribute('id', 'form-publication');
  const labelImage = document.createElement('label');
  labelImage.setAttribute('class', 'label-image');
  const inputImage = document.createElement('input');
  inputImage.setAttribute('type', 'file');
  inputImage.setAttribute('name', 'file-image');
  inputImage.setAttribute('class', 'input-image');
  const image = document.createElement('img');
  image.setAttribute('src', './img/upload-image.png');
  image.setAttribute('id', 'upload-image');
  image.setAttribute('alt', 'Agregar imágen');

  labelImage.appendChild(inputImage);
  labelImage.appendChild(image);

  const inputTitle = document.createElement('input');
  inputTitle.setAttribute('type', 'text');
  inputTitle.setAttribute('placeholder', 'Título');
  inputTitle.setAttribute('id', 'input-title');

  const divCategoryState = document.createElement('div');
  divCategoryState.setAttribute('class', 'category-state');

  const selectCategory = document.createElement('select');
  selectCategory.setAttribute('id', 'input-category');

  const firstOption = document.createElement('option');
  firstOption.setAttribute('value', 'Categoría');
  firstOption.textContent = 'Categoría';
  // firstOption.setAttribute('disabled', 'false');
  const secondOption = document.createElement('option');
  secondOption.setAttribute('value', 'Vender');
  secondOption.textContent = 'Vender';
  const thirdOption = document.createElement('option');
  thirdOption.setAttribute('value', 'Donar');
  thirdOption.textContent = 'Donar';
  const fourthOption = document.createElement('option');
  fourthOption.setAttribute('value', 'Intercambiar');
  fourthOption.textContent = 'Intercambiar';

  selectCategory.appendChild(firstOption);
  selectCategory.appendChild(secondOption);
  selectCategory.appendChild(thirdOption);
  selectCategory.appendChild(fourthOption);

  const selectState = document.createElement('select');
  selectState.setAttribute('id', 'input-state');

  const firstStateOption = document.createElement('option');
  // firstStateOption.setAttribute('disabled', 'false');
  firstStateOption.textContent = 'Estado';
  const secondStateOption = document.createElement('option');
  secondStateOption.setAttribute('value', '6/10');
  secondStateOption.textContent = '6/10';
  const thirdStateOption = document.createElement('option');
  thirdStateOption.setAttribute('value', '7/10');
  thirdStateOption.textContent = '7/10';
  const fourthStateOption = document.createElement('option');
  fourthStateOption.setAttribute('value', '8/10');
  fourthStateOption.textContent = '8/10';
  const fifthStateOption = document.createElement('option');
  fifthStateOption.setAttribute('value', '9/10');
  fifthStateOption.textContent = '9/10';
  const sixthStateOption = document.createElement('option');
  sixthStateOption.setAttribute('value', '10/10');
  sixthStateOption.textContent = '10/10';

  selectState.appendChild(firstStateOption);
  selectState.appendChild(secondStateOption);
  selectState.appendChild(thirdStateOption);
  selectState.appendChild(fourthStateOption);
  selectState.appendChild(fifthStateOption);
  selectState.appendChild(sixthStateOption);

  divCategoryState.appendChild(selectCategory);
  divCategoryState.appendChild(selectState);

  const inputDescription = document.createElement('textarea');
  inputDescription.setAttribute('name', 'Description');
  inputDescription.setAttribute('placeholder', 'Descripción:');
  inputDescription.setAttribute('id', 'input-description');
  inputDescription.setAttribute('maxlength', '100');

  const divConsiderations = document.createElement('div');
  divConsiderations.setAttribute('id', 'div-considerations');
  divConsiderations.setAttribute('class', 'input-form-publication');

  const considerations = document.createElement('p');
  considerations.setAttribute('class', 'text-considerations');
  considerations.textContent = 'Consideraciones:';

  const listConsiderations = document.createElement('ul');
  const firstItem = document.createElement('li');
  firstItem.textContent = 'Coloca una imagen nítida y a color.';
  const secondItem = document.createElement('li');
  secondItem.textContent = 'La prenda debe estar en buenas condiciones (mínimo 6/10).';
  const thirdItem = document.createElement('li');
  thirdItem.textContent = 'Coloca una descripción clara y breve.';

  listConsiderations.appendChild(firstItem);
  listConsiderations.appendChild(secondItem);
  listConsiderations.appendChild(thirdItem);

  divConsiderations.appendChild(considerations);
  divConsiderations.appendChild(listConsiderations);

  const btnSubmit = document.createElement('input');
  btnSubmit.setAttribute('type', 'button');
  btnSubmit.setAttribute('class', 'button');
  btnSubmit.setAttribute('value', 'Guardar');
  btnSubmit.setAttribute('id', 'btn-submit');

  const divInputsDesktop = document.createElement('div');
  divInputsDesktop.setAttribute('id', 'div-inputs-desktop');

  divInputsDesktop.appendChild(inputTitle);
  divInputsDesktop.appendChild(divCategoryState);
  divInputsDesktop.appendChild(inputDescription);
  divInputsDesktop.appendChild(divConsiderations);
  divInputsDesktop.appendChild(btnSubmit);

  formPublication.appendChild(labelImage);
  formPublication.appendChild(divInputsDesktop);

  sectionPublications.appendChild(divTitlePublications);
  sectionPublications.appendChild(formPublication);

  let getImageUrl; // Aquí almacenaremos la URL de la foto que nos devuelve storage.
  inputImage.addEventListener('change', () => {
    const imageUpload = inputImage.files[0];
    uploadAndDownloadImage(imageUpload).then((url) => {
      getImageUrl = url;
      image.style.objectFit = 'contain';
      image.style.border = 'none';
      image.style.background = 'white';
      image.setAttribute('src', getImageUrl);
    });
  });

  const userPublication = getUserLocalStorage();
  btnSubmit.addEventListener('click', () => {
    const publication = {
      Titulo: inputTitle.value,
      Foto: image.getAttribute('src'),
      Estado: selectState.value,
      Categoria: selectCategory.value,
      Description: inputDescription.value,
      Fecha: new Date(),
      uidUser: userPublication.uid,
      photoUser: userPublication.photoURL,
      Likes: [],
    };
    if (urlParam.has('editPostId')) {
      editPost(urlParam.get('editPostId'), publication);
    } else {
      insertData(publication);
    }
    return onNavigate('/home');
  });
  if (urlParam.has('editPostId')) {
    getDataPost(urlParam.get('editPostId')).then((postDoc) => {
      const postdata = postDoc.data();
      image.setAttribute('src', postdata.Foto);
      inputTitle.value = postdata.Titulo;
      selectCategory.value = postdata.Categoria;
      selectState.value = postdata.Estado;
      inputDescription.value = postdata.Description;
    });
  }
  return sectionPublications;
};
