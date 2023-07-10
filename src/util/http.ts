import axios from 'axios';
const http = axios.create({
  baseURL: 'http://10.0.2.2:3000',
  timeout: 1000,
  headers: {},
});

export default http;
