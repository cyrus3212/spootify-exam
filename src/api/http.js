/* eslint-disable no-param-reassign */
import axios from 'axios';
import config from '../config';

const http = axios.create({
  baseURL: config.baseUrl,
  timeout: 30000, // 30 seconds
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');

  config.headers.common.Authorization = `Bearer ${token}`;

  return config;
});

export default http;
