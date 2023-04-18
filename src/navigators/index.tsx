import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import AppStack from './AppStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../constants/navigation';
import ProductScreen from '../screens/ProductScreen';
import { RootStackParamList } from './index.type';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name = {NAVIGATION.HOME_APP} component={AppStack} />
        <Stack.Screen name = {NAVIGATION.PRODUCT} component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
