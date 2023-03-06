import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DropDownList, Header } from '../../components';
import { colors, globalStyles } from '../../settings/styles/global';
import { cursosMock } from '../../mocks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRoutes } from '../../types/routes';
import { ContentContainer, IPeriodCard } from '../../types/components/dropDown';
import { Course, WeekDays } from '../../types/course';

export function Home(): JSX.Element {
  const [valueToSearch, setValueToSearch] = useState('');

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
    periodLabelText,
    selectedPeriod,
  }: IPeriodCard): JSX.Element => {
    return (
      <TouchableOpacity
        style={styles.periodContainer}
        onPress={() =>
          onNavigateToWeekScheedule(periodLabelText, selectedPeriod)
        }>
        <Text>{periodLabelText}</Text>
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
        const periodLabelText = `${index + 1}º  Período`;

        return (
          <PeriodCard
            key={`${course.id}${course.name}${index}`}
            periodLabelText={periodLabelText}
            selectedPeriod={course.periods[index]}
          />
        );
      }),
    }));
  };

  return (
    <>
      <Header
        valueToSearch={valueToSearch}
        onSearch={a => setValueToSearch(a)}
      />

      <View style={globalStyles.bodyContainer}>
        <DropDownList
          title="SEUS CURSOS"
          containers={extractFormattedContainers(cursosMock)}
        />
      </View>
    </>
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
