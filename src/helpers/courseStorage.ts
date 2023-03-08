import { Storage } from './storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY_OF_ALL_RECEIVED_COURSES = '@courses';
const STORAGE_KEY_OF_FAVORITE_COURSES_ID = '@user_courses';

class CourseStorage extends Storage {
  constructor() {
    super(STORAGE_KEY_OF_ALL_RECEIVED_COURSES);
  }

  async getUserCourses() {
    const ids = await this.getUserCourseIds();
    const allCourses = await this.get();
    return allCourses.filter(course => ids.includes(course.id));
  }

  async addUserCourseId(id: string) {
    try {
      const currentIds = await AsyncStorage.getItem(
        STORAGE_KEY_OF_FAVORITE_COURSES_ID,
      );

      if (currentIds) {
        const parsedCurrentIds = JSON.parse(currentIds);
        parsedCurrentIds.push(id);
        await AsyncStorage.setItem(
          STORAGE_KEY_OF_FAVORITE_COURSES_ID,
          JSON.stringify(parsedCurrentIds),
        );

        return;
      }

      await AsyncStorage.setItem(
        STORAGE_KEY_OF_FAVORITE_COURSES_ID,
        JSON.stringify([id]),
      );
    } catch (err) {
      console.log(err);
    }
  }

  async getUserCourseIds(): Promise<string[]> {
    const ids = await AsyncStorage.getItem(STORAGE_KEY_OF_FAVORITE_COURSES_ID);

    if (!ids) return [];

    return JSON.parse(ids);
  }
}

export { CourseStorage };
