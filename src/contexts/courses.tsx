import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { Course } from '../types/course';
import { ICoursesContext } from '../types/contexts/courses';
import { CoursesController } from '../controllers/courses';

const CoursesContext = createContext<ICoursesContext>({
  userCourses: [],
  allCourses: [],
  addCourse: (course: Course) => {},
  isUserCourse: (courseId: string) => false,
  removeCourse: (course: Course) => {},
});

const courseController = new CoursesController();

const CoursesProvider: React.FC = ({ children }) => {
  const [userCourses, setUserCourses] = useState<Course[]>([]);
  const [allCourses, setAllCourses] = useState<Course[]>([]);

  const InitialSyncCourses = async () => {
    const receivedCourses = await courseController.getCoursesFromApi();
    const storedCourses = await courseController.getCoursesFromStorage();
    const storedUserCourses =
        await courseController.getUserCoursesFromStorage();

    setUserCourses(storedUserCourses);
    setAllCourses(receivedCourses.length ? receivedCourses : storedCourses);
  };

  const addCourse = (course: Course) => {
    const isCourseAlreadyAdd = !!userCourses.filter(
        currentCourse => currentCourse.id === course.id,
    ).length;

    if (isCourseAlreadyAdd) return;

    setUserCourses(pv => [...pv, course]);
    courseController.addUserCourseToStorage(course);
  };

  const removeCourse = (courseToBeRemoved: Course) => {
    const usersCourseWithoutDeleted: Course[] = userCourses.filter(
        course => course.id !== courseToBeRemoved.id,
    );
    setUserCourses(usersCourseWithoutDeleted);
    courseController.updateUserCourses(usersCourseWithoutDeleted);
  };

  const isUserCourse = (courseId: string): boolean => {
    const userCourseFounded = userCourses.filter(
        currentCourse => currentCourse.id === courseId,
    );

    return !!userCourseFounded.length;
  };

  useEffect(() => {
    InitialSyncCourses();
  }, []);

  return (
      <CoursesContext.Provider
          value={{
            userCourses,
            allCourses,
            addCourse,
            removeCourse,
            isUserCourse,
          }}>
        {children}
      </CoursesContext.Provider>
  );
};

const useContextCourses = () => {
  const context = useContext(CoursesContext);

  if (!context) {
    throw new Error('useContextCourses must be used within an CoursesProvider');
  }

  return context;
};

export { CoursesContext, CoursesProvider, useContextCourses };
