import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  DropDownList,
  NoCourseToShow,
} from '../../components';
import SearchInputWithIcon from '../../components/SearchInputWithIcon';
import { colors, globalStyles } from '../../settings/styles/global';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IRoutes } from '../../types/routes';
import { ContentContainer, IPeriodCard } from '../../types/components/dropDown';
import { Course, WeekDays } from '../../types/course';
import { useContextCourses } from '../../contexts';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home(): JSX.Element {
  const { userCourses, allCourses, addCourse, removeCourse, isUserCourse } =
      useContextCourses();
  const [valueToSearch, setValueToSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  const navigation =
      useNavigation<NativeStackNavigationProp<IRoutes, 'Home'>>();

  const onSearch = (text: string) => {
    setFilteredCourses(() =>
        sortCoursesByName(
            allCourses.filter(course =>
                course.name.toLowerCase().includes(text.toLowerCase()),
            ),
        ),
    );
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

  const onSelectCourse = (course: Course) => {
    if (!isUserCourse(course.id)) {
      addCourse(course);
    } else {
      removeCourse(course);
    }
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

  const sortCoursesByName = (courses: Course[]): Course[] => {
    return courses.sort((a, b) => {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
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

  const onBlurOnInputSearch = () => {
    setValueToSearch('');
    setIsSearching(false);
  };

  useEffect(() => {
    setFilteredCourses(sortCoursesByName(allCourses));
  }, [allCourses, userCourses]);

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <View style={styles.searchContainer}>
              <SearchInputWithIcon
                  value={valueToSearch ? valueToSearch : ''}
                  onSearch={onSearch}
                  isOpen={!!valueToSearch.length}
                  onBlur={onBlurOnInputSearch}
                  onFocus={() => setIsSearching(true)}
              />

              {isSearching &&
                  filteredCourses.map((course, index) => {
                    return (
                        <TouchableOpacity
                            key={course.id}
                            style={{ margin: 0, width: '100%' }}
                            onPress={() => onSelectCourse(course)}>
                          <View style={styles.lineSeparator} />

                          <View
                              style={
                                index + 1 === filteredCourses.length
                                    ? styles.lastSearchContentContainer
                                    : styles.searchContentContainer
                              }>
                            <Text>{course.name}</Text>

                            {isUserCourse(course.id) ? (
                                <Icon name="star" size={32} color="#E4C676" />
                            ) : (
                                <Icon name="star-outline" size={32} />
                            )}
                          </View>
                        </TouchableOpacity>
                    );
                  })}
            </View>

            {!isSearching && !!userCourses.length && (
                <View style={globalStyles.bodyContainer}>
                  <DropDownList
                      title="SEUS CURSOS"
                      containers={extractFormattedContainers(userCourses)}
                  />
                </View>
            )}

            {!isSearching && !userCourses.length && <NoCourseToShow />}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  searchContentContainer: {
    backgroundColor: colors.secondary,
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
  lastSearchContentContainer: {
    backgroundColor: colors.secondary,
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  lineSeparator: {
    width: '100%',
    height: 1,
  },
});
