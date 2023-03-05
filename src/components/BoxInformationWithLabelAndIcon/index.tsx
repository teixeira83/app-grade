import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IBoxInformationWithLabelAndIcon } from '../../types/components/boxInformationWithLabelAndIcon';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function BoxInformationWithLabelAndIcon({
  label,
  icon,
  informationText,
}: IBoxInformationWithLabelAndIcon): JSX.Element {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.labelText}>{label}</Text>

      <View style={styles.informationContainer}>
        <Icon name={icon} size={28} />

        <Text style={styles.informationText}>{informationText}</Text>
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
});
