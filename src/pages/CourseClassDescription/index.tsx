import React from 'react';
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
  const { params, key, name, path } = useRoute<RouteProp<IRoutes, 'CourseClassDescription'>>();
  console.log('params')
  console.log(params)
  console.log('key')
  console.log(key)
  console.log('name')
  console.log(name)
  console.log('path')
  console.log(path)
  return (
    <View>
      <Header
        title={params?.description}
        onGoBack={() => navigation.goBack()}
      />

      <View style={globalStyles.bodyContainer}>
        <BoxInformationWithLabelAndIcon
          label="Sala:"
          icon="location-pin"
          informationText={params!.classroom}
        />

        <BoxInformationWithLabelAndIcon
          label="Professor:"
          icon="location-pin"
          informationText={params!.teacher.name}
        />

        <BoxInformationWithLabelAndIcon
          label="Telefone do professor"
          icon="location-pin"
          informationText={params!.teacher.contacts.whatsapp}
        />

        <BoxInformationWithLabelAndIcon
          label="Email do professor"
          icon="email"
          informationText={params!.teacher.contacts.email}
        />
      </View>
    </View>
  );
}
