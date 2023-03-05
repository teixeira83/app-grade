import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { useLanguage } from '../../hooks';
import { DropDownList } from '../../components';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { IRoutes } from '../../types/routes';
import { ContentContainer, IWeekCard } from '../../types/components/dropDown';
import { CourseClass, WeekDays } from '../../types/course';
import { colors, globalStyles } from '../../settings/styles/global';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export function WeekSchedule(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<IRoutes, 'WeekSchedule'>>();
  const { params } = useRoute<RouteProp<IRoutes, 'WeekSchedule'>>();

  // const { language } = useLanguage();

  /**
   * @TODO
   * refatorar esses arrays abaixo
   * utilizando o useLanguage hook
   */
  const _weekDaysLabels = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
  ];

  type _weekDaysType =
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday';

  const _weekDays: _weekDaysType[] = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
  ];

  const onNavigateToSubject = (obj: CourseClass) => {
    console.log('131231: ', obj);
    navigation.navigate('CourseClassDescription', obj.subject);
  };

  const WeekDayCard = ({ courseClass }: IWeekCard): JSX.Element => {
    return (
      <TouchableOpacity
        style={styles.weekDayContainer}
        onPress={() => onNavigateToSubject(courseClass)}>
        <View style={styles.startHourContainer}>
          <Text>{courseClass.startHour}</Text>
        </View>
        <Text>{courseClass.subject.description}</Text>
      </TouchableOpacity>
    );
  };

  const extractFormattedContainers = (
    weekDays: WeekDays,
  ): ContentContainer[] => {
    return _weekDays.map((day, index) => {
      const currentDay = weekDays[day];
      return {
        id: String(Math.random() * 90),
        title: _weekDaysLabels[index],
        contents: currentDay.map(courseClass => {
          return (
            <WeekDayCard
              key={courseClass.subject.id}
              courseClass={courseClass}
            />
          );
        }),
      };
    });
  };

  return (
    <View style={globalStyles.bodyContainer}>
      {!!params && params.selectedPeriod && (
        <DropDownList
          title={params.weekScheeduleScreenTitle}
          containers={extractFormattedContainers(params.selectedPeriod)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  weekDayContainer: {
    backgroundColor: colors.secondary,
    marginBottom: 14,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  startHourContainer: {
    marginRight: 22,
  },
});
