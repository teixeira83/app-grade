import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IHeader } from '../../types/components/header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchInputWithIcon } from '../SearchInputWithIcon';

export function Header({
  title,
  onGoBack,
  valueToSearch,
  onSearch,
}: IHeader): JSX.Element {
  return (
    <>
      {!!onGoBack && (
        <View style={styles.container}>
          <TouchableOpacity style={styles.iconContainer} onPress={onGoBack}>
            <Icon name="arrow-back-ios" size={22} />
          </TouchableOpacity>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </View>
      )}

      {!!onSearch && (
        <View style={styles.container}>
          <SearchInputWithIcon
            value={valueToSearch ? valueToSearch : ''}
            onSearch={onSearch}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24,
  },
  iconContainer: {
    width: '10%',
  },
  titleContainer: {
    width: '90%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: -20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
