/* eslint-disable eol-last */
/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import { storageFunction } from '../Storage.js';

export const publications = () => {
  const sectionPublications = document.createElement('section');

  const divTitlePublications = document.createElement('div');
  divTitlePublications.setAttribute('class', 'div-nav');

  const titlePublications = document.createElement('h1');
  titlePublications.textContent = 'Publicar';

  const divMenu = document.createElement('div');
  const imgMenu = document.createElement('img');
  imgMenu.setAttribute('src', '../img/menu.png');
  imgMenu.setAttribute('class', 'img-menu');

  divMenu.appendChild(imgMenu);

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

  const btnSubmit = document.createElement('button');
  btnSubmit.setAttribute('class', 'button');
  btnSubmit.textContent = 'Guardar';

  formPublication.appendChild(labelImage);
  formPublication.appendChild(inputTitle);
  formPublication.appendChild(divCategoryState);
  formPublication.appendChild(inputDescription);
  formPublication.appendChild(divConsiderations);
  formPublication.appendChild(btnSubmit);

  sectionPublications.appendChild(divTitlePublications);
  sectionPublications.appendChild(formPublication);

  // Esto no es seguro, quizá lo cambiemos.
  inputImage.addEventListener('change', () => {
    const imageUpload = inputImage.files[0];
    storageFunction(imageUpload);
  });

  return sectionPublications;
};