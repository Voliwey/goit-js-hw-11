import SimpleLightbox from 'simplelightbox';

export const galleryElement = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

lightbox.refresh();

export function renderGallery(images) {
    galleryElement.innerHTML = '';

    images.forEach(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => {
        const cardHTML = `
      <li class="card">
        <a href="${largeImageURL}" class="link">
          <img src="${webformatURL}" alt="${tags}">
          <ul class="list-container">
          <li class="item-description"><h3>Likes</h3> <p>${likes}</p></li>
          <li class="item-description"><h3>Views</h3> <p>${views}</p></li>
          <li class="item-description"><h3>Comments</h3> <p>${comments}</p></li>
          <li class="item-description"><h3>Downloads</h3> <p>${downloads}</p></li>
        </ul>
        </a>
        
      </li>
    `;
        galleryElement.insertAdjacentHTML('beforeend', cardHTML);
    });
    lightbox.refresh();
}
