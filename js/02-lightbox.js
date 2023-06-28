import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const markup = createGallery(galleryItems);

galleryList.insertAdjacentHTML("afterbegin", markup);

function createGallery(galleryItems) {
  return galleryItems

    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" width="800" height="600"/>
   </a>
</li>`;
    })
    .join("");
}

galleryList.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDelay: 250,
});
