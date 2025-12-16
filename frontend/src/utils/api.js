import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // correct backend port
});

// Add JWT token to headers automatically
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // get token from localStorage
  if(token) config.headers.Authorization = `Bearer ${token}`; // important: add 'Bearer '
  return config;
});

export default api;

