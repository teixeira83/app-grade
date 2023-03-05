import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IHeader } from '../../types/components/header';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function Header({ title, onPress }: IHeader): JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <Icon name="arrow-back-ios" size={22} />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
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
