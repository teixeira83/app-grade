import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CourseClassDescription, Home, WeekSchedule } from '../pages';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WeekSchedule" component={WeekSchedule} />
        <Stack.Screen
          name="CourseClassDescription"
          component={CourseClassDescription}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { Routes };
