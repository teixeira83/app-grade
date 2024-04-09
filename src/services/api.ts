import axios from 'axios';

const api = axios.create({
  baseURL: 'https://grade-api.onrender.com/api/v1',
  headers: {
    "Content-type": "application/json",
  }
});

export default api;
