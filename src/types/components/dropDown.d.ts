import { CourseClass, WeekDays } from '../course';

interface IWeekCard {
  courseClass: CourseClass;
}

interface IPeriodCard {
  periodLabelText: string;
  selectedPeriod: WeekDays;
}

interface ContentContainer {
  id: string;
  title: string;
  contents: JSX.Element[];
}

interface IDropDownList {
  title: string;
  containers: ContentContainer[];
}

export { IDropDown, IPeriodCard, IDropDownList, ContentContainer, IWeekCard };
