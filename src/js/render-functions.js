import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const renderImages = (images) => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Очищаємо галерею перед додаванням нових зображень

  images.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    const item = document.createElement('li');
    item.classList.add('gallery-item');
    item.innerHTML = `
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${likes}</p>
          <p class="info-item"><b>Views:</b> ${views}</p>
          <p class="info-item"><b>Comments:</b> ${comments}</p>
          <p class="info-item"><b>Downloads:</b> ${downloads}</p>
        </div>
      </a>
    `;
    gallery.appendChild(item);
  });

  // Оновлюємо бібліотеку SimpleLightbox після додавання нових зображень
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
};

export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden');
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
};

export const showErrorMessage = () => {
  iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
  });
};
