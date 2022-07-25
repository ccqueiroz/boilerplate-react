import { Axios } from './axios';
import { authUseCases } from '../../services/providers/auth';

const http = new Axios({
  baseURL: process.env.REACT_APP_API_URL,
});

// eslint-disable-next-line @typescript-eslint/require-await
http.useInterceptor(async (config) => {
  const token = authUseCases.getTokenStorage();
  if (!config.headers) {
    config.headers = {};
  }
  if (token) {
    config.headers.Authorization = `Baerer ${token}`;
  }
  return config;
});

export { http };
