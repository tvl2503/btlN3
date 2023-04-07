import AsyncStorage from '@react-native-async-storage/async-storage';
import { isObject } from 'lodash';

class Storage {
  static async get<T = any>(key: string) {
    try {
      const data = await AsyncStorage.getItem(key);
      if (!data) {
        throw new Error();
      }
      try {
        return JSON.parse(data) as T;
      } catch (err) {
        return data;
      }
    } catch (err) {
      return null;
    }
  }

  static async setItem(key: string, value: any) {
    try {
      let json = value;
      if (isObject(value)) {
        json = JSON.stringify(value);
      }
      await AsyncStorage.setItem(key, json);
    } catch (err) {
      console.log(err);
    }
  }

  static async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  }
}

export default Storage;
