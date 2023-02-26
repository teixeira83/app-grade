import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { cursosMock } from '../../mocks';

export function DropDownList(): JSX.Element {
  return (
    <View>
      <Text>Seus Cursos</Text>

      <FlatList
        data={cursosMock}
        renderItem={({ item }) => <Text key={item.id}>{item.title}</Text>}
      />
    </View>
  );
}
