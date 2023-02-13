import Config from 'react-native-config';
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


class Http {
    instance: AxiosInstance;
    constructor() {
      this.instance = axios.create({
        baseURL: Config.API_URL,
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
    }
}
const AxiosClient = new Http().instance;
AxiosClient.interceptors.request.use(
    async (config) => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      } catch (e) {
        console.log(e);
        console.log('error');
      }
    },
    error => {
      console.log('loi');
      return Promise.reject(error);
    },
);
export default AxiosClient;