import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function NoCourseToShow(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Você ainda não selecionou nenhum curso. Faça a busca de um curso do seu
        interesse para ter acesso aos horários dele.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: '75%',
  },
  description: {
    textAlign: 'center',
  },
});

export { NoCourseToShow };
