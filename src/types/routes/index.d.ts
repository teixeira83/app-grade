import { Subject, WeekDays } from '../course';

interface IWeekScheduleNavigation {
  weekScheeduleScreenTitle: string;
  selectedPeriod: WeekDays;
}

type IRoutes = {
  Home: undefined;
  WeekSchedule: IWeekScheduleNavigation | undefined;
  CourseClassDescription: Subject | undefined;
};

export { IRoutes };
