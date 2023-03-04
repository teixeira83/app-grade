import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DropDownList } from '../../components';
import { colors, globalStyles } from '../../settings/styles/global';
import { cursosMock } from '../../mocks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRoutes } from '../../types/routes';
import { ContentContainer, IPeriodCard } from '../../types/components/dropDown';
import { Course, WeekDays } from '../../types/course';

export function Home(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<IRoutes, 'Home'>>();

  const onNavigateToWeekScheedule = (
    weekScheeduleScreenTitle: string,
    selectedPeriod: WeekDays,
  ) => {
    navigation.navigate('WeekSchedule', {
      weekScheeduleScreenTitle,
      selectedPeriod,
    });
  };

  const PeriodCard = ({
    description,
    weekScheeduleScreenTitle,
    selectedPeriod,
  }: IPeriodCard): JSX.Element => {
    return (
      <TouchableOpacity
        style={styles.periodContainer}
        onPress={() =>
          onNavigateToWeekScheedule(weekScheeduleScreenTitle, selectedPeriod)
        }>
        <Text>{description}</Text>
      </TouchableOpacity>
    );
  };

  const extractFormattedContainers = (
    courses: Course[],
  ): ContentContainer[] => {
    return courses.map(course => ({
      id: course.id,
      title: course.name,
      contents: course.periods?.map((period, index) => {
        /**
         * @TODO
         * trocar string "Período" por variável de internacionalização
         */
        const weekScheeduleScreenTitle = `${course.name} - ${
          index + 1
        }º Período`;
        const periodDescriptionTitle = `${index + 1} Período`;
        return (
          <PeriodCard
            key={`${course.id}${course.name}${index}`}
            description={periodDescriptionTitle}
            weekScheeduleScreenTitle={weekScheeduleScreenTitle}
            selectedPeriod={course.periods[index]}
          />
        );
      }),
    }));
  };

  return (
    <View style={globalStyles.bodyContainer}>
      <Text>Incluir Search</Text>

      <DropDownList
        title="SEUS CURSOS"
        containers={extractFormattedContainers(cursosMock)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  periodContainer: {
    backgroundColor: colors.secondary,
    marginBottom: 14,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
