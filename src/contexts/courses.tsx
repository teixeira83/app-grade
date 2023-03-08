import React, { createContext, useState, useEffect, useContext } from 'react';
import { Course } from '../types/course';
import { ICoursesContext } from '../types/contexts/courses';
import CoursesService from '../services/courses';
import { CourseStorage } from '../helpers';

const CoursesContext = createContext<ICoursesContext>({
  userCourses: [],
});

const courseServices = new CoursesService();
const courseStorage = new CourseStorage();

const CoursesProvider: React.FC = ({ children }) => {
  const [userCourses, setUserCourses] = useState<Course[]>([]);

  const InitialSyncCourses = async () => {
    const receivedCourses = await courseServices.get();

    if (receivedCourses.length) {
      courseStorage.set(receivedCourses);
    }
    const storedUserCourses = await courseStorage.getUserCourses();
    setUserCourses(storedUserCourses);
  };

  useEffect(() => {
    InitialSyncCourses();
  }, []);

  return (
    <CoursesContext.Provider value={{ userCourses }}>
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
