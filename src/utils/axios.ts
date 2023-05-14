import Config from 'react-native-config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN } from '../constants/user';

export const request = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const initInterceptor = () => {
  request.interceptors.request.use(async config => {
    try {
      const token = await AsyncStorage.getItem(TOKEN);
      if (!token) {
        return config;
      }
      config.headers['Authorization'] = 'Bearer ' + token;
      return config;
    } catch (err) {
      return request;
    }
  });
  request.interceptors.response.use(response => {
    return response;
  }, (error) => {
    return Promise.reject(error);
  });
  
};

export default initInterceptor;
