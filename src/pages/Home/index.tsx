import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DropDownList, SearchInputWithIcon } from '../../components';
import { colors, globalStyles } from '../../settings/styles/global';
import { cursosMock } from '../../mocks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRoutes } from '../../types/routes';
import { ContentContainer, IPeriodCard } from '../../types/components/dropDown';
import { Course, WeekDays } from '../../types/course';
import { useContextCourses } from '../../contexts';

const mockCursos = [
  {
    name: 'Engenharia da Computação',
    id: '2198362198712',
  },
  {
    name: 'Engenharia de Alimentos',
    id: '2198362198712',
  },
  { name: 'Música', id: '021931269872' },
  { name: 'Letras', id: '9821318726218' },
];

export function Home(): JSX.Element {
  const { userCourses } = useContextCourses();
  const [valueToSearch, setValueToSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<IRoutes, 'Home'>>();

  const onSearch = (text: string) => {
    setIsSearching(true);
    setValueToSearch(text);
    if (!text) {
      setIsSearching(false);
    }
  };

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

  useEffect(() => {
    console.log(userCourses);
  }, [userCourses]);

  return (
    <>
      <View style={styles.searchContainer}>
        <SearchInputWithIcon
          value={valueToSearch ? valueToSearch : ''}
          onSearch={onSearch}
          isOpen={!!valueToSearch.length}
        />
        {isSearching &&
          mockCursos.map((curso, index) => {
            return (
              <>
                <View style={styles.lineSeparator} />

                <View
                  style={
                    index + 1 === mockCursos.length
                      ? styles.searchContainerXptoUltimo
                      : styles.searchContainerXpto
                  }>
                  <Text>{curso.name}</Text>
                </View>
              </>
            );
          })}
      </View>

      {!isSearching && (
        <View style={globalStyles.bodyContainer}>
          <DropDownList
            title="SEUS CURSOS"
            containers={extractFormattedContainers(userCourses)}
          />
        </View>
      )}
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
  searchContainer: {
    height: 80,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24,
    marginTop: 12,
  },
  searchContainerXpto: {
    backgroundColor: colors.secondary,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  searchContainerXptoUltimo: {
    backgroundColor: colors.secondary,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 24,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  lineSeparator: {
    width: '100%',
    height: 1,
  },
});
