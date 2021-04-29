import axios from 'axios';
import { API } from './constants';

const instance = axios.create({
  baseURL: API.BASE_URL,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.patch['Content-Type'] = 'application/json';
instance.defaults.headers.get['Content-Type'] = 'application/json';

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
