import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    const imageLink = document.createElement('a');
    imageLink.classList.add('gallery__link');
    imageLink.href = item.original;

    const image = document.createElement('img');
    image.src = item.preview;
    image.alt = item.description;
    image.classList.add('gallery__image');

    imageLink.appendChild(image);
    listItem.appendChild(imageLink);
    gallery.appendChild(listItem);
});

new SimpleLightbox('.gallery a', {
    carousel: true,
    nav: true
});
