import axios from 'axios';

const BASE_URL = 'https://www.freetogame.com/api';

export const fetchGames = async (
  platform: string,
  category: string,
  sort: string,
) => {
  try {
    let url = `${BASE_URL}/games`;
    if (platform || category || sort) {
      url += '?';
    }
    if (platform) {
      url += `platform=${platform}&`;
    }
    if (category) {
      url += `category=${category}&`;
    }
    if (sort) {
      url += `sort-by=${sort}&`;
    }
    console.log('url:', url);
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};
