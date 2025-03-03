import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = 'YOUR_API_KEY'; // Заміни на свій ключ

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 12,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
