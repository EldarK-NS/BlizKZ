import axios, {AxiosInstance} from 'axios';
import {API_KEY} from '@env';
import EncryptedStorage from 'react-native-encrypted-storage';

const api = API_KEY;
console.log('API_KEY', api);

const $axios: AxiosInstance = axios.create({
  baseURL: api,
  headers: {'Content-Type': 'application/json'},
});

$axios.interceptors.request.use(
  async config => {
    // const lang = await EncryptedStorage.getItem('lang');
    // const authToken = await EncryptedStorage.getItem('token');

    // if (lang) {
    //   config.headers = {
    //     'Accept-Language': lang,
    //     'Content-Type': 'application/json',
    //   };
    // }

    // if (authToken) {
    //   config.headers.Authorization = `Bearer ${authToken}`;
    // }

    // console.log({
    //   baseUrl: config.baseURL,
    //   url: config.url,
    //   //   authToken,
    //   method: config.method,
    // });

    return config;
  },
  err => Promise.reject(err),
);

export default $axios;
