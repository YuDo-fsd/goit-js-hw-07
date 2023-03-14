import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = renderGalleryItems(galleryItems);

gallery.innerHTML = markup;

function renderGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
        </div>
      `;
    })
    .join("");
}

gallery.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== "IMG") return;

  const originalSrc = target.dataset.source;

  const instance = basicLightbox.create(`<img src="${originalSrc}">`);
  instance.show();

  document.addEventListener("keydown", onModalEscClose);
}

function onModalEscClose(event) {
  if (event.key !== "Escape") return;

  instance.close();
  document.removeEventListener("keydown", onModalClose);
}
