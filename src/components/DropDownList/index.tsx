import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { cursosMock } from '../../mocks';
import { DropDown } from './components/DropDown';
import { ICourse } from '../../types/course';

export function DropDownList(): JSX.Element {
  return (
    <View>
      <Text style={styles.titleText}>SEUS CURSOS</Text>

      <FlatList
        data={cursosMock as ICourse[]}
        renderItem={({ item }) => <DropDown key={item.id} title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
