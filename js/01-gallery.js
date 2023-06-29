import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageList = document.querySelector(".gallery");

imageList.addEventListener("click", onClick);

const instance = basicLightbox.create(
  `<img class="gallery__image-modal" src="" width="800" height="600">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKayPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscKayPress);
    },
  }
);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  instance.element().querySelector("img").src = evt.target.dataset.source;

  instance.show();
}

function onEscKayPress(evt) {
  if (evt.code !== "Escape") {
    return;
  }
  instance.close();
}
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
      </a>
    </li>`
  )
  .join("");

imageList.insertAdjacentHTML("afterbegin", markup);
