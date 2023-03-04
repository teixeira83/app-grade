import { WeekDays } from '../course';

interface IWeekScheduleNavigation {
  weekScheeduleScreenTitle: string;
  selectedPeriod: WeekDays;
}

type IRoutes = {
  Home: undefined;
  WeekSchedule: IWeekScheduleNavigation | undefined;
};

export { IRoutes };
