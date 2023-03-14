import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = renderGalleryItems(galleryItems);
console.log("markup:", markup);

gallery.innerHTML = markup;

function renderGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
      `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

gallery.addEventListener("click", function (event) {
  event.preventDefault();
  lightbox.open(event.target);
});
