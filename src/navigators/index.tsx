import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import AppStack from './AppStack';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
