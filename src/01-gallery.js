import { galleryItems } from './gallery-items.js';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import simpleLightbox from 'simplelightbox';

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
// galleryEl.style.display = "flex";
// galleryEl.style.flex-wrap = "wrap";
// galleryEl.style.gap = "30px";

const createGaleryItem = (galleryItems) => {
 return galleryItems.map(({ preview, original, description}) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
}).join("")
};

const galeryItemMarkup = createGaleryItem(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galeryItemMarkup);

const lightbox = new simpleLightbox('.gallery a', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 260,

});