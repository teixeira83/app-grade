interface ICoursesControllers {
  getCoursesFromApi: () => void;
  getCoursesFromStorage: () => void;
  getUserCoursesFromStorage: () => void;
  addUserCourseToStorage: (Course) => void;
}

export { ICoursesControllers };
