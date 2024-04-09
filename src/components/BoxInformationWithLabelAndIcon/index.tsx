import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IBoxInformationWithLabelAndIcon } from '../../types/components/boxInformationWithLabelAndIcon';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function BoxInformationWithLabelAndIcon({
  label,
  icon,
  informationText,
  isAnLargeAreaText = false
}: IBoxInformationWithLabelAndIcon): JSX.Element {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.labelText}>{label}</Text>

      <View style={isAnLargeAreaText ? styles.largeAreaText : styles.informationContainer}>
        <Icon name={icon} size={28} />

        <Text style={isAnLargeAreaText ? styles.informationTextWithLeftMargin : styles.informationText}>{informationText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  informationContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 10,
  },
  informationText: {
    fontSize: 16,
  },
  informationTextWithLeftMargin: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
  largeAreaText: {
    paddingTop: 6,
    height: 160,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
    marginTop: 10,
  }
});
