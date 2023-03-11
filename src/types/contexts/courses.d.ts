import { Course } from '../course';

interface ICoursesContext {
  userCourses: Course[];
  allCourses: Course[];
  addCourse: (Course) => void;
  removeCourse: (Course) => void;
  isUserCourse: (Course) => boolean;
}

export { ICoursesContext };
