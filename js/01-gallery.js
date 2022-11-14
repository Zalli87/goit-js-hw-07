import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItem = createGalleryItemMarkup(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', galleryItem);

galleryEl.addEventListener('click', onGalleryItemClick);


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

function onGalleryItemClick(event) {
  event.preventDefault();

  const isImgClick = event.target.nodeName === 'IMG';
 
  if (!isImgClick) {
    return
  }

  showModal(event);

}

function showModal(event) {
  const html = `<img src="${event.target.dataset.source}" width="800" height="600">`;
  
  const instance = basicLightbox.create(html, {
    onShow: (instance) => window.addEventListener('keydown', onEscClick),
    onClose: (instance) => window.removeEventListener('keydown', onEscClick)
  });
  
  function onEscClick(event) {
     if (event.code === 'Escape') {
      instance.close()
     }
  };

  instance.show()
}



