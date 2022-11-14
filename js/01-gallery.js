import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItem = createGalleryItemMarkup(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', galleryItem);

galleryEl.addEventListener('click', onGalleryItemClick);


function onGalleryItemClick(event) {
  event.preventDefault();

  const isImgClick = event.target.nodeName === 'IMG';
 
  if (!isImgClick) {
    return
  }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show()
}


function createGalleryItemMarkup(items) {
    return items.map(({original, preview, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');
}



