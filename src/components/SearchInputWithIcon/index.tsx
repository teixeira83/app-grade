import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ISearchInputWithIcon } from '../../types/components/searchInputWithIcon';

/**
 * @TODO colocar lib de controle de estado para a alteração do input ou um debounce
 * @param value
 * @param onSearch
 * @constructor
 */
export function SearchInputWithIcon({
  value,
  onSearch,
}: ISearchInputWithIcon): JSX.Element {
  return (
    <View style={styles.container}>
      <Icon name="search" size={22} />

      <TextInput
        style={styles.input}
        /*@TODO
         ** Colocar o placeholder com internacionalização
         */
        placeholder="Buscar cursos"
        value={value}
        onChangeText={text => onSearch(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '100%',
    height: 44,
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  input: {
    color: '#333',
  },
});
