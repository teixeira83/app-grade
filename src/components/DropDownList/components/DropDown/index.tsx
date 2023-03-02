import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IDropDown } from '../../../../types/components/dropDown';

export function DropDown({ title }: IDropDown): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>

      <Text>icone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#333333',
    borderWidth: 1,
  },
});
