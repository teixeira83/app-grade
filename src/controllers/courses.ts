import { ICoursesControllers } from '../types/controllers/courses';
import CoursesService from '../services/courses';
import { CoursesStorage } from '../helpers';
import { Course } from '../types/course';

class CoursesController implements ICoursesControllers {
  coursesService = new CoursesService();
  coursesStorage = new CoursesStorage();

  async getCoursesFromApi() {
    return await this.coursesService.get();
  }

  async getCoursesFromStorage() {
    return await this.coursesStorage.getAll();
  }

  async getUserCoursesFromStorage() {
    return await this.coursesStorage.getUserCourses();
  }

  async addUserCourseToStorage(course: Course) {
    this.coursesStorage.addUserCourse(course);
  }

  async updateUserCourses(courses: Course[]) {
    this.coursesStorage.updateUserCourses(courses);
  }
}

export { CoursesController };
