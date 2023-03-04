interface Subject {
  id: string;
  description: string;
}

interface CourseClass {
  startHour: string;
  subject: Subject;
}

interface WeekDays {
  monday: CourseClass[];
  tuesday: CourseClass[];
  wednesday: CourseClass[];
  thursday: CourseClass[];
  friday: CourseClass[];
}

interface Course {
  id: string;
  name: string;
  periods: WeekDays[];
}

export { Course, WeekDays, CourseClass };
