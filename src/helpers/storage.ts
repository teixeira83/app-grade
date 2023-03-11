import AsyncStorage from '@react-native-async-storage/async-storage';
import { Course } from '../types/course';

class Storage {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  async set(value: any) {
    try {
      if (!value) return;
      await AsyncStorage.setItem(this.key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  }

  async get(): Promise<Course[]> {
    try {
      const storedData = await AsyncStorage.getItem(this.key);
      return storedData ? JSON.parse(storedData) : [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

export { Storage };
