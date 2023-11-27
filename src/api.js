import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.params = {
  api_key: 'e0f61313dcf9f8698c9430989ed8bb6d',
};

export const fetchTrending = async () => {
  const response = await axios.get(`3/trending/movie/day`);
  return response.data.results;
};

export const fetchByQuery = async query => {
  const response = await axios.get(`3/search/movie?query=${query}`);
  return response.data.results;
};

export const fetchById = async id => {
  const response = await axios.get(`3/movie/${id}`);
  return response.data;
};

export const fetchCastId = async id => {
  const response = await axios.get(`3/movie/${id}/credits`);
  return response.data.cast;
};
