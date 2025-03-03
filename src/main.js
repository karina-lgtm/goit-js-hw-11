import { fetchImages } from './pixabay-api';
import { renderImages, showLoader, hideLoader, showErrorMessage } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = form.querySelector('input[name="query"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
    });
    return;
  }

  showLoader();
  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      showErrorMessage();
    } else {
      renderImages(images);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    hideLoader();
  }
});
