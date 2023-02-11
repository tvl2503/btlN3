import React from 'react';
import {
    NavigationContainer,
    NavigationContainerRef,
  } from '@react-navigation/native';
import { Text } from 'react-native';
export const navigationRef: React.RefObject<NavigationContainerRef<any>> = React.createRef();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Text>hello</Text>
    </NavigationContainer>
  )
}

export default AppNavigator