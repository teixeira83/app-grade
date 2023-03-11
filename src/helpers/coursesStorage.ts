import { Storage } from './storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Course } from '../types/course';

const STORAGE_KEY_OF_ALL_RECEIVED_COURSES = '@courses';
const STORAGE_KEY_OF_USER_COURSES = '@user_courses';

class CoursesStorage extends Storage {
  constructor() {
    super(STORAGE_KEY_OF_ALL_RECEIVED_COURSES);
  }

  async getAll() {
    const storedCourses = await AsyncStorage.getItem(
      STORAGE_KEY_OF_ALL_RECEIVED_COURSES,
    );

    if (!storedCourses) return [];

    return JSON.parse(storedCourses);
  }

  async getUserCourses() {
    const userCourses = await AsyncStorage.getItem(STORAGE_KEY_OF_USER_COURSES);
    if (!userCourses) return [];

    return JSON.parse(userCourses);
  }

  async addUserCourse(course: Course) {
    try {
      const storedCourses = await this.getUserCourses();
      storedCourses.push(course);

      await AsyncStorage.setItem(
        STORAGE_KEY_OF_USER_COURSES,
        JSON.stringify(storedCourses),
      );
    } catch (err) {
      console.log(err);
    }
  }

  async updateUserCourses(courses: Course[]) {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY_OF_USER_COURSES,
        JSON.stringify(courses),
      );
    } catch (err) {
      console.log(err);
    }
  }
}

export { CoursesStorage };
