import axios from 'axios';

const api = axios.create({
  baseURL: 'https://job.minhafazenda.ag',
});

export default api;
