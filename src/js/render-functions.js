
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryElement = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250
});

function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <div class="container">
    <li class="gallery-item">
      <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" class="gallery-image">
      </a>
    </li>
    <div class="info">
    <p class="info-item"><b>Likes</b> ${likes}</p>
    <p class="info-item"><b>Views</b> ${views}</p>
    <p class="info-item"><b>Comments</b> ${comments}</p>
    <p class="info-item"><b>Downloads</b> ${downloads}</p>
    </div>
    </div>
    `).join('');

    galleryElement.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
};


function clearGallery() {
    galleryElement.innerHTML = "";
};

function showLoader() {
    loaderElement.classList.remove('is-hidden');
};

function hideLoader() {
    loaderElement.classList.add('is-hidden');
};


export { hideLoader, showLoader, clearGallery, createGallery };