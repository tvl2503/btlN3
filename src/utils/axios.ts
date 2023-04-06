import Config from 'react-native-config';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const request = axios.create({
  baseURL: Config.API_URL,
  timeout: 10000,
});

console.log(Config.API_URL);

const initInterceptor = () => {
  request.interceptors.request.use(async request => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        return request;
      }
      request.headers['Authorization'] = 'Bearer ' + token;
      return request;
    } catch (err) {
      return request;
    }
  });
  request.interceptors.response.use(response => {
    return response;
  });
};

export default initInterceptor;
