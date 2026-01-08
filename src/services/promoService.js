import { Platform } from 'react-native';

const BASE_URL = Platform.OS === 'android'
  ? 'http://10.0.2.2:3000'
  : 'http://localhost:3000';

const fetchPromos = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/promos?page=${page}&limit=${limit}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export {
  fetchPromos
};