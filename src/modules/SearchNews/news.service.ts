import axios from 'axios';

const newsAPI = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: {
    'X-Api-Key': '183daca270264bad86fc5b72972fb82a',
  },
});

async function searchNewsByText(value: string) {
  const response = await newsAPI.get(`everything?q=${value}`);
  return response.data;
}

export {searchNewsByText};
