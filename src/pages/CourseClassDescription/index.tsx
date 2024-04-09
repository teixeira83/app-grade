import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { IRoutes } from '../../types/routes';
import { Header } from '../../components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { globalStyles } from '../../settings/styles/global';
import { BoxInformationWithLabelAndIcon } from '../../components';

enum WarningMessageEnum {
    '1f8ae043-bd84-42cd-ae02-422e7a6de564'=  'Trabalho postado no moodle',
    "7a4e5606-5b56-4e70-8121-4d07e94f4fe5"= 'Necessário a leitura do livro \n Programando em C',
    "5cfd1a64-8c61-4687-a040-5be761e6dc05"= 'Matéria da Próxima aula: Banco de \ndados não relacional'
}

export function CourseClassDescription(): JSX.Element {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<IRoutes, 'CourseClassDescription'>
    >();
  const { params } = useRoute<RouteProp<IRoutes, 'CourseClassDescription'>>();


  return (
    <ScrollView style={{ flex: 1, height: 500 }}>
      <Header
        title={params?.description || 'Disciplina'}
        onGoBack={() => navigation.goBack()}
      />

      <View style={globalStyles.bodyContainer}>
        <BoxInformationWithLabelAndIcon
          label="Sala:"
          icon="location-pin"
          informationText="05 Bloco E"
        />

        <BoxInformationWithLabelAndIcon
          label="Professor:"
          icon="location-pin"
          informationText="Fernando Carvalho"
        />

        <BoxInformationWithLabelAndIcon
          label="Whatsapp da turma:"
          icon="location-pin"
          informationText="https://chatwhatsapp.com/invite/0928321"
        />

        <BoxInformationWithLabelAndIcon
          label="Quadro de avisos:"
          icon="warning"
          informationText={WarningMessageEnum[params?.id] || 'Não teremos aula na semana 12'}
          isAnLargeAreaText
        />
      </View>
    </ScrollView>
  );
}
