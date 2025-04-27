import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from './images';
import { initImages } from './gallery';

document.querySelector('.gallery').appendChild(initImages(images));

const lightbox = new SimpleLightbox('ul.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.on('show.simplelightbox', function () {
  console.log('Lightbox on');
});
