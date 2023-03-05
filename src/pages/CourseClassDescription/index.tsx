import React, { useEffect } from 'react';
import { View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { IRoutes } from '../../types/routes';
import { Header } from '../../components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { globalStyles } from '../../settings/styles/global';
import { BoxInformationWithLabelAndIcon } from '../../components';

export function CourseClassDescription(): JSX.Element {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<IRoutes, 'CourseClassDescription'>
    >();
  const { params } = useRoute<RouteProp<IRoutes, 'CourseClassDescription'>>();
  useEffect(() => console.log(params));

  return (
    <View>
      <Header
        canGoBack
        title={params?.description}
        onPress={() => navigation.goBack()}
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
      </View>
    </View>
  );
}
