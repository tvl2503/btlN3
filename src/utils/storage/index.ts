import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  static async get<T = any>(key: string) {
    try {
      const data = await AsyncStorage.getItem(key);
      if (!data) {
        throw new Error();
      }
      return JSON.parse(data) as T;
    } catch (err) {
      return null;
    }
  }

  static async setItem(key: string, value: any) {
    try {
      const json = JSON.stringify(value);
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
