import React from 'react';
import { View } from 'react-native';
import { DropDownList } from '../../components';
import { globalStyles } from '../../settings/styles/global';

export function Home(): JSX.Element {
  return (
    <View style={globalStyles.bodyContainer}>
      <DropDownList />
    </View>
  );
}
