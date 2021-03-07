import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '19816759-3cdd4fc89a2e26e9cfb0ce197';

axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

async function fetchApi({ q = '', page = 1 }) {
  try {
    const {
      data: { hits },
    } = await axios.get('', { params: { q, page } });
    return hits;
  } catch (error) {
    throw error;
  }
}

export default fetchApi;
