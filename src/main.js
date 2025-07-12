import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api.js';
import { addImage } from './js/getImage-api.js';

const loader = document.querySelector('.loader');
const form = document.getElementById('searchForm');
const galleryElement = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.card .place-for-image a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function toogleLoader(display) {
  loader.style.display = display;
}

loader.style.display = 'none';

form.addEventListener('submit', search);

async function search(e) {
  e.preventDefault();

  galleryElement.innerHTML = '';

  const input = e.currentTarget.elements.searchInput.value;

  toogleLoader('block');

  searchImages(input).then(data => {
    if (data.total === 0) {
      iziToast.warning({
        title: 'Caution',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });

      return 0;
    } else {
      galleryElement.insertAdjacentHTML('beforeend', addImage(data));
      lightbox.refresh();
      e.target.reset();
    }
  }).catch(error => {
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  }).finally(() => {
    toggleLoader('none');
  });
}