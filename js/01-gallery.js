import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');

    const image = document.createElement('img');
    image.src = item.preview;
    image.alt = item.description;
    image.classList.add('gallery__image');

    image.addEventListener('click', () => {
        const lightbox = basicLightbox.create(`<img src="${item.original}" alt="${item.description}" />`, {
            onShow: (instance) => {
                document.addEventListener('keydown', esc);
            },
            onClose: (instance) => {
                document.removeEventListener('keydown', esc)
            },
        });
        lightbox.show();

        function esc(event) {
            if (event.key === "Escape") {
                lightbox.close();
            }
        }
    });

    listItem.appendChild(image);
    gallery.appendChild(listItem);
});
