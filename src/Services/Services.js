import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=19816759-3cdd4fc89a2e26e9cfb0ce197&image_type=photo&orientation=horizontal';

async function fetchApi({ searchQuery = '', currentPage = 1, pageSize = 12 }) {
  try {
    const {
      data: { hits },
    } = await axios.get(
      `&q=${searchQuery}&page=${currentPage}&per_page=${pageSize}`,
    );
    return hits;
  } catch (error) {
    throw error;
  }
}

export default fetchApi;
